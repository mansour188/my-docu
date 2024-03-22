---
sidebar_position: 1
---

# guide instllation kubernetes multi cluster

***Set up a Highly Available Kubernetes Cluster using kubeadm in centos 7***
![Alt text](/img/diag.png)

| Role | Domain Name          | Ip	 | RAM             | CPU      |
|------|----------------------|-----------------|-------------------|-------------|
| node master  | master1| 192.168.154.21      | 4G  | 2      |
|node master  | master2     | 192.168.154.22   | 4G  | 2      |
|node worker | worker1   | 192.168.154.23   | 1G        | 1      |
| load balancer (HAproxy)  | lb       | 192.168.154.20      | 1G           | 1      |
### <span style={{color: '#800080'}}> Install Haproxy </span>



HAProxy, while popular, isn’t available in the default CentOS repositories

***first update system:*** 

```bash
yum update -y
```

***add the EPEL repository:***

```bash
sudo yum -y install epel-release
```

***now install haproxy :*** 
```bash
sudo yum -y install haproxy
```
***config selinux for haproxy to  use tcp :*** 
```bash
setsebool -P haproxy_connect_any=1
```
***Configure haproxy***

Append the below lines to /etc/haproxy/haproxy.cfg
this configuration allow haproxy to bind traficc 

```bash
frontend kubernetes-frontend
    bind 192.168.154.20:6443
    mode tcp
    option tcplog
    default_backend kubernetes-backend

backend kubernetes-backend
    mode tcp
    option tcp-check
    balance roundrobin
    server master1 192.168.154.21:6443 check fall 3 rise 2
    server master2 192.168.154.22:6443 check fall 3 rise 2
     #master1 master2 is a server identefier not domain name
```
***Restart haproxy service***
```bash
sudo systemctl restart haproxy
```
### <span style={{color: '#800080'}}>Install Docker on all CentOS 7  </span>

install in masters and worker 

***Add and enable official Docker Repository to CentOS 7***
```bash
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```
***Install the latest Docker version on CentOS 7***
```bash
sudo yum install docker-ce
```
****Now Docker is installed, but the service is not yet running. Start and enable Docker using the commands***
```bash
sudo systemctl start docker
sudo systemctl enable docker
sudo systemctl status docker
```
###  <span style={{color: '#800080'}}> Set up the Kubernetes Repository and install kublet and kubeadm </span>

install in masters and worker 



***Set up the Kubernetes Repository***
<p> Since the Kubernetes packages aren’t present in the official CentOS 7 repositories, we will need to add a new repository file. Use the following command to create the file and open it for editing:</p>

```bash
sudo vi /etc/yum.repos.d/kubernetes.repo
```

<p> and paste the following contents </p>

```bash
[kuberneten]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg

```
***Install Kubelet and kubeadm in all machines (workers and masters)***
```bash
sudo yum install -y kubelet-1.28.2 kubeadm-1.28.2
```
***Install kubectl only in masters and lb***
```bash
sudo yum install -y kubectl-1.28.2 
```
### <span style={{color: '#800080'}}> Init cluster in master </span>

```bash
sudo kubeadm init 
 --control-plane-endpoint="192.168.154.20:6443"
 --apiserver-advertise-address=192.168.154.21 \
 --pod-network-cidr=10.244.0.0/16 \
 --upload-certs 

```
- <b> kube init  </b>:  used to initialize cluster 
- <b>  --control-plane-endpoint  </b> this flag specefies the api server end point address and port of the controle plane in this case is the load balancer (ha proxy)
- <b>--apiserver-advertise-address  </b> : this flag specefies the address that Api server advertises to other node 
- <b> --pod-network-cidr </b> :  the CIDR block for the pod network.




***To make kubectl work for your non-root user, run these commands, which are also part of the kubeadm init output:***
```bash
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

```

### <span style={{color: '#800080'}}> Deploy Calico network</span>
***this addons make  pod talk to each others***
```bash
kubectl  create -f https://docs.projectcalico.org/v3.15/manifests/calico.yaml

```


### <span style={{color: '#800080'}}> join other master to the cluster  </span>
**Use the respective kubeadm join commands you copied from the output of kubeadm init command on the first master.**

***IMPORTANT: You also need to pass --apiserver-advertise-address to the join command when you join the other master node***.

use your genereated join command this an exemple from my cluster 
```bash
kubeadm join 192.168.154.20:6443 --token anndqq.9ndrpjzceetki523 \
        --apiserver-advertise-address=192.168.154.22 \
	--discovery-token-ca-cert-hash sha256:a06e044fad69c1f1e35bbdcaaeb57c4530264733526b09b4c3a99a59091fb0dc \
	--control-plane --certificate-key 78f198b0098401441ddb9e525e8fd4ae4bc16fe2bde9d5720060efa4276ae42d

```
***To make kubectl work for your non-root user***

```bash
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

```
### <span style={{color: '#800080'}}> join other workers  to the cluster  </span>
use your genereated join command this an exemple from my cluster setup
```bash
kubeadm join 192.168.154.20:6443 --token uu05yh.alagjvwtkkr05wda \
--discovery-token-ca-cert-hash sha256:3f466ab02aaeb7fdcea813ac60b68fd15d7a1db3c6f0aa6cc93390107 
```
***you can join what u need of workers 
to display the join command when you need to add other worker in future (run this command in master) :***

```bash
kubeadm  token create --print-join-command
```
### <span style={{color: '#800080'}}> set up the kubectl in lb to communicate to cluster   </span>
- copy the admin.conf from one of the master and paste in $HOME/.kube/config  of load balancer using scp
```bash
mkdir -p $HOME/.kube
scp root@:192.168.154.21/etc/kubernetes/admin.con  $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

```
***now you can cominicate to the cluster from lb using kubectl tool***
### <span style={{color: '#800080'}}> test our cluster   </span>
***create  Deployment and Service for an Nginx web server***
```bash
touch nginx.yml
```



```bash
cat <<EOF > nginx.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.7.9
        ports:
        - containerPort: 80

---
apiVersion: v1
kind: Service
metadata:
  name: nginx
  labels:
    name: nginx
spec:
  type: NodePort
  selector:
    app: nginx
  ports:
     - protocol: TCP
       port: 80
       targetPort: 80
       nodePort: 30080
EOF


```
***apply the yml file***
```bash
  kubectl apply -f ngnix.yml

```
**open port firewall to enable access to the service out of worker host (this port mapp to the service nginx )**

```bash
 sudo firewall-cmd --zone=public --add-port=30080/tcp 

```
***check from the Browse or curl command *** 

```bash
 curl 192.168.154.23:30080

```
![Alt text](/img/ng.png)




