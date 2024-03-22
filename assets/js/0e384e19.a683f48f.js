"use strict";(self.webpackChunkmy_docu=self.webpackChunkmy_docu||[]).push([[976],{1512:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=s(4848),t=s(8453);const l={sidebar_position:1},a="guide instllation kubernetes multi cluster",i={id:"intro",title:"guide instllation kubernetes multi cluster",description:"Set up a Highly Available Kubernetes Cluster using kubeadm in centos 7",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/my-docu/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar"},c={},d=[{value:"<span> Install Haproxy </span>",id:"-install-haproxy-",level:3},{value:"<span>Install Docker on all CentOS 7  </span>",id:"install-docker-on-all-centos-7--",level:3},{value:"<span> Set up the Kubernetes Repository and install kublet and kubeadm </span>",id:"-set-up-the-kubernetes-repository-and-install-kublet-and-kubeadm-",level:3},{value:"<span> Init cluster in master </span>",id:"-init-cluster-in-master-",level:3},{value:"<span> Deploy Calico network</span>",id:"-deploy-calico-network",level:3},{value:"<span> join other master to the cluster  </span>",id:"-join-other-master-to-the-cluster--",level:3},{value:"<span> join other workers  to the cluster  </span>",id:"-join-other-workers--to-the-cluster--",level:3},{value:"<span> set up the kubectl in lb to communicate to cluster   </span>",id:"-set-up-the-kubectl-in-lb-to-communicate-to-cluster---",level:3},{value:"<span> test our cluster   </span>",id:"-test-our-cluster---",level:3}];function o(e){const n={code:"code",em:"em",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"guide-instllation-kubernetes-multi-cluster",children:"guide instllation kubernetes multi cluster"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Set up a Highly Available Kubernetes Cluster using kubeadm in centos 7"})}),"\n",(0,r.jsx)(n.img,{alt:"Alt text",src:s(8496).A+"",width:"724",height:"667"})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Role"}),(0,r.jsx)(n.th,{children:"Domain Name"}),(0,r.jsx)(n.th,{children:"Ip"}),(0,r.jsx)(n.th,{children:"RAM"}),(0,r.jsx)(n.th,{children:"CPU"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"node master"}),(0,r.jsx)(n.td,{children:"master1"}),(0,r.jsx)(n.td,{children:"192.168.154.21"}),(0,r.jsx)(n.td,{children:"4G"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"node master"}),(0,r.jsx)(n.td,{children:"master2"}),(0,r.jsx)(n.td,{children:"192.168.154.22"}),(0,r.jsx)(n.td,{children:"4G"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"node worker"}),(0,r.jsx)(n.td,{children:"worker1"}),(0,r.jsx)(n.td,{children:"192.168.154.23"}),(0,r.jsx)(n.td,{children:"1G"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"load balancer (HAproxy)"}),(0,r.jsx)(n.td,{children:"lb"}),(0,r.jsx)(n.td,{children:"192.168.154.20"}),(0,r.jsx)(n.td,{children:"1G"}),(0,r.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"-install-haproxy-",children:(0,r.jsx)("span",{style:{color:"#800080"},children:" Install Haproxy "})}),"\n",(0,r.jsx)(n.p,{children:"HAProxy, while popular, isn\u2019t available in the default CentOS repositories"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"first update system:"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yum update -y\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"add the EPEL repository:"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo yum -y install epel-release\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"now install haproxy :"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo yum -y install haproxy\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"config selinux for haproxy to  use tcp :"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"setsebool -P haproxy_connect_any=1\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Configure haproxy"})})}),"\n",(0,r.jsx)(n.p,{children:"Append the below lines to /etc/haproxy/haproxy.cfg\nthis configuration allow haproxy to bind traficc"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"frontend kubernetes-frontend\n    bind 192.168.154.20:6443\n    mode tcp\n    option tcplog\n    default_backend kubernetes-backend\n\nbackend kubernetes-backend\n    mode tcp\n    option tcp-check\n    balance roundrobin\n    server master1 192.168.154.21:6443 check fall 3 rise 2\n    server master2 192.168.154.22:6443 check fall 3 rise 2\n     #master1 master2 is a server identefier not domain name\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Restart haproxy service"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart haproxy\n"})}),"\n",(0,r.jsx)(n.h3,{id:"install-docker-on-all-centos-7--",children:(0,r.jsx)("span",{style:{color:"#800080"},children:"Install Docker on all CentOS 7  "})}),"\n",(0,r.jsx)(n.p,{children:"install in masters and worker"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Add and enable official Docker Repository to CentOS 7"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Install the latest Docker version on CentOS 7"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo yum install docker-ce\n"})}),"\n",(0,r.jsxs)(n.p,{children:["*",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Now Docker is installed, but the service is not yet running. Start and enable Docker using the commands"})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start docker\nsudo systemctl enable docker\nsudo systemctl status docker\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-set-up-the-kubernetes-repository-and-install-kublet-and-kubeadm-",children:(0,r.jsx)("span",{style:{color:"#800080"},children:" Set up the Kubernetes Repository and install kublet and kubeadm "})}),"\n",(0,r.jsx)(n.p,{children:"install in masters and worker"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Set up the Kubernetes Repository"})}),"\n",(0,r.jsx)("p",{children:" Since the Kubernetes packages aren\u2019t present in the official CentOS 7 repositories, we will need to add a new repository file. Use the following command to create the file and open it for editing:"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo vi /etc/yum.repos.d/kubernetes.repo\n"})}),"\n",(0,r.jsx)("p",{children:" and paste the following contents "}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[kuberneten]\nname=Kubernetes\nbaseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\nenabled=1\ngpgcheck=0\nrepo_gpgcheck=0\ngpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg\nhttp://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Install Kubelet and kubeadm in all machines (workers and masters)"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo yum install -y kubelet-1.28.2 kubeadm-1.28.2\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Install kubectl only in masters and lb"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo yum install -y kubectl-1.28.2 \n"})}),"\n",(0,r.jsx)(n.h3,{id:"-init-cluster-in-master-",children:(0,r.jsx)("span",{style:{color:"#800080"},children:" Init cluster in master "})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'sudo kubeadm init \n --control-plane-endpoint="192.168.154.20:6443"\n --apiserver-advertise-address=192.168.154.21 \\\n --pod-network-cidr=10.244.0.0/16 \\\n --upload-certs \n\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("b",{children:" kube init  "}),":  used to initialize cluster"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("b",{children:"  --control-plane-endpoint  "})," this flag specefies the api server end point address and port of the controle plane in this case is the load balancer (ha proxy)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("b",{children:"--apiserver-advertise-address  "})," : this flag specefies the address that Api server advertises to other node"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("b",{children:" --pod-network-cidr "})," :  the CIDR block for the pod network."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"To make kubectl work for your non-root user, run these commands, which are also part of the kubeadm init output:"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p $HOME/.kube\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-deploy-calico-network",children:(0,r.jsx)("span",{style:{color:"#800080"},children:" Deploy Calico network"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"this addons make  pod talk to each others"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl  create -f https://docs.projectcalico.org/v3.15/manifests/calico.yaml\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-join-other-master-to-the-cluster--",children:(0,r.jsx)("span",{style:{color:"#800080"},children:" join other master to the cluster  "})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Use the respective kubeadm join commands you copied from the output of kubeadm init command on the first master."})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"IMPORTANT: You also need to pass --apiserver-advertise-address to the join command when you join the other master node"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"use your genereated join command this an exemple from my cluster"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubeadm join 192.168.154.20:6443 --token anndqq.9ndrpjzceetki523 \\\n        --apiserver-advertise-address=192.168.154.22 \\\n\t--discovery-token-ca-cert-hash sha256:a06e044fad69c1f1e35bbdcaaeb57c4530264733526b09b4c3a99a59091fb0dc \\\n\t--control-plane --certificate-key 78f198b0098401441ddb9e525e8fd4ae4bc16fe2bde9d5720060efa4276ae42d\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"To make kubectl work for your non-root user"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p $HOME/.kube\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-join-other-workers--to-the-cluster--",children:(0,r.jsx)("span",{style:{color:"#800080"},children:" join other workers  to the cluster  "})}),"\n",(0,r.jsx)(n.p,{children:"use your genereated join command this an exemple from my cluster setup"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubeadm join 192.168.154.20:6443 --token uu05yh.alagjvwtkkr05wda \\\n--discovery-token-ca-cert-hash sha256:3f466ab02aaeb7fdcea813ac60b68fd15d7a1db3c6f0aa6cc93390107 \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"you can join what u need of workers\nto display the join command when you need to add other worker in future (run this command in master) :"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubeadm  token create --print-join-command\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-set-up-the-kubectl-in-lb-to-communicate-to-cluster---",children:(0,r.jsx)("span",{style:{color:"#800080"},children:" set up the kubectl in lb to communicate to cluster   "})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"copy the admin.conf from one of the master and paste in $HOME/.kube/config  of load balancer using scp"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p $HOME/.kube\nscp root@:192.168.154.21/etc/kubernetes/admin.con  $HOME/.kube/config\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"now you can cominicate to the cluster from lb using kubectl tool"})})}),"\n",(0,r.jsx)(n.h3,{id:"-test-our-cluster---",children:(0,r.jsx)("span",{style:{color:"#800080"},children:" test our cluster   "})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"create  Deployment and Service for an Nginx web server"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"touch nginx.yml\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cat <<EOF > nginx.yml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.7.9\n        ports:\n        - containerPort: 80\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx\n  labels:\n    name: nginx\nspec:\n  type: NodePort\n  selector:\n    app: nginx\n  ports:\n     - protocol: TCP\n       port: 80\n       targetPort: 80\n       nodePort: 30080\nEOF\n\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"apply the yml file"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  kubectl apply -f ngnix.yml\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"open port firewall to enable access to the service out of worker host (this port mapp to the service nginx )"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:" sudo firewall-cmd --zone=public --add-port=30080/tcp \n\n"})}),"\n",(0,r.jsx)(n.p,{children:"***check from the Browse or curl command ***"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:" curl 192.168.154.23:30080\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Alt text",src:s(3220).A+"",width:"968",height:"577"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8496:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/diag-eae56cae349b521863d1c20655841b2c.png"},3220:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/ng-bd33d9a41ebdf2d58e50509dcb56b4dd.png"}}]);