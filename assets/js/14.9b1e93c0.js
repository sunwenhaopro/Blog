(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{316:function(s,a,t){"use strict";t.r(a);var n=t(7),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"clash部署至服务器-为设备提供-上网-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clash部署至服务器-为设备提供-上网-服务"}},[s._v("#")]),s._v(" clash部署至服务器，为设备提供“上网”服务")]),s._v(" "),a("h3",{attrs:{id:"动机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[s._v("#")]),s._v(" 动机：")]),s._v(" "),a("p",[s._v("订阅了clash一年的服务，手机和电脑客户端进行科学上网非常方便。但是clash没有上架APPStore，导致ios用户无法使用，根据官网介绍需要换非国区账号并花费$2.99下载rocket。奈何囊中羞涩。根据vpn原理：本地流量转发到vpn运行监听的端口 ，再转发到代理服务器上。由此突发奇想将clash部署到linux服务器，然后开放clash监听端口，本地在网络设置添加代理服务器ip和端口就可以实现“科学上网”。这样的话移动设备就不必下载客户端，ipad实现科学上网也变得很方便。使用别人设备需要加速服务也将变得便捷。")]),s._v(" "),a("h3",{attrs:{id:"安装clash-for-linux到服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装clash-for-linux到服务器"}},[s._v("#")]),s._v(" 安装clash for linux到服务器")]),s._v(" "),a("h3",{attrs:{id:"下载clash-for-linux二进制文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载clash-for-linux二进制文件"}},[s._v("#")]),s._v(" 下载clash for linux二进制文件")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Dreamacro/clash/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github clash最新版本"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"https://image.ctrlcver.icu/group1/M00/00/07/CgAEDGQLOOuAYZ44AAFVcx3J6VE378.png",alt:"image-20230310185155509"}}),s._v(")")]),s._v(" "),a("p",[s._v("一般PC端使用的就是X64架构，选择amd64")]),s._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("div",{staticClass:"language-apl line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-apl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装目录根据个人习惯 我习惯放在/opt目录下")]),s._v("\ncd "),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("opt\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载压缩包(若通过浏览器下载可忽略这一步) 需安装有wget 若没有可以先下载 sudo apt install wget -y")]),s._v("\nsudo wget https"),a("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("Dreamacro"),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("clash"),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("releases"),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("download"),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("v"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.13")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("clash"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("amd64"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("v"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.13")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v(".")]),s._v("gz\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\nsudo gzip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("d clash"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("amd64"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("v"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.13")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v(".")]),s._v("gz\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重命名")]),s._v("\nsudo mv clash"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("amd64"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("v"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.13")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v(".")]),s._v("gz clash\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 赋予二进制文件可执行权限")]),s._v("\nsudo chmod a"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("+")]),s._v("x clash\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行二进制文件会在~/.config下初始化生成文件夹clash(cache.db config.yaml Country.mmdb) ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("clash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("这里执行完后成功后，会在"),a("code",[s._v("~/.config")]),s._v("（一般在"),a("code",[s._v("root：/root/.config/clash")]),s._v("或者"),a("code",[s._v("home：/home/lighthouse/.config")]),s._v("文件夹下）文件下自动生成calsh目录并下载config.yaml配置文件和Country.mmdb文件。一般运行完"),a("code",[s._v("./calsh")]),s._v("界面会报错或者一直显示"),a("code",[s._v("download")]),s._v("。这是因为你配置文件不是根据订阅链接下载的。")]),s._v(" "),a("p",[s._v("这时我们需要删除config.yaml文件和Country.mmdb文件，找到自己clash账户给的订阅地址，那个就是下载配置文件的地址。")]),s._v(" "),a("div",{staticClass:"language-apl line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-apl"}},[a("code",[s._v("sudo wget "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("O config"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v(",")]),s._v("yaml 你的订阅地址\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("若果下载的问件里面是一大串的英文字母，在订阅连接后面添加 "),a("code",[s._v("&flag=clash")]),s._v("即可。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://image.ctrlcver.icu/group1/M00/00/07/CgAEDGQLOOuAe1C6AAFNvmeTK4M634.png",alt:"image-20230310185155509"}}),s._v(")")]),s._v(" "),a("p",[s._v("这样设置后在执行"),a("code",[s._v("./clash")]),s._v("就会自动下载Country.mmdb。")]),s._v(" "),a("div",{staticClass:"language-apl line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-apl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v("@")]),s._v("VM"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("centos "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /opt")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v("@")]),s._v("VM"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("centos opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./clash")]),s._v("\nINFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Can't find MMDB"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v(",")]),s._v(" start download    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("它会一直卡在这里，实际文件已经下载好了，关闭终端重新运行就行了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://image.ctrlcver.icu/group1/M00/00/07/CgAEDGQLOOuALnSyAAC5OXGAvbs203.png",alt:"image-20230310204651050"}}),s._v("显示如上就证明服务开启成功。")]),s._v(" "),a("p",[s._v("如果Country.mmdb文件不删除的话会报错。")]),s._v(" "),a("div",{staticClass:"language-apl line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-apl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v("@")]),s._v("devops clash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./clash -d .")]),s._v("\nWARN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" MMDB invalid"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v(",")]),s._v(" remove and download \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("就是因为Country.mmdb文件受损或者不完全导致的。")]),s._v(" "),a("h3",{attrs:{id:"添加ui管理界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加ui管理界面"}},[s._v("#")]),s._v(" 添加UI管理界面")]),s._v(" "),a("p",[s._v("ui 控制面板，目前有两款，分别是 clash 原作者的 "),a("a",{attrs:{href:"https://github.com/Dreamacro/clash-dashboard",target:"_blank",rel:"noopener noreferrer"}},[s._v("clash-dashboard"),a("OutboundLink")],1),s._v(" 以及另一位大佬的 "),a("a",{attrs:{href:"https://github.com/haishanh/yacd",target:"_blank",rel:"noopener noreferrer"}},[s._v("yacd-dashboard"),a("OutboundLink")],1),s._v(" ，大家自选其一即可，我常用的是 "),a("code",[s._v("clash-dashboard")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-apl line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-apl"}},[a("code",[s._v("git clone https"),a("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("Dreamacro"),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("clash"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("dashboard"),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v(".")]),s._v("git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("问了方便管理，我将ui和clash发在一起：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://image.ctrlcver.icu/group1/M00/00/07/CgAEDGQLOOyAcu5ZAAB_qJr46NE581.png",alt:"image-20230310205446574"}})]),s._v(" "),a("p",[s._v("同时配置config.yaml")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://image.ctrlcver.icu/group1/M00/00/07/CgAEDGQLOOyAfe0SAAA-HdD0MR8255.png",alt:"image-20230310205743361"}})]),s._v(" "),a("div",{staticClass:"language-apl line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-apl"}},[a("code",[s._v("external"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("controller"),a("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0.0.0.0:9090'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ui控制界面端口")]),s._v("\nsecret"),a("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("#")]),s._v("访问密码\nexternal"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("ui"),a("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("opt"),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("clashui\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ui静态文件目录位置")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("配置好后重新加载clash服务即可，记得关闭端口防火墙。")]),s._v(" "),a("p",[s._v("访问http://ip:9090/ui")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://image.ctrlcver.icu/group1/M00/00/07/CgAEDGQLOO2Ae4__AABlRDaCr3E071.png",alt:"image-20230310210438080"}})]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("API Base URL")]),s._v("一栏中输入："),a("a",{attrs:{href:"http://ip:9090/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://IP:9090"),a("OutboundLink")],1),s._v(" ，在"),a("code",[s._v("Secret(optional)")]),s._v("一栏中输入config.yaml的Secret。")]),s._v(" "),a("p",[s._v("点击Add并选择刚刚输入的管理界面地址，之后便可在浏览器上进行一些配置。切换节点或者代理模式。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://image.ctrlcver.icu/group1/M00/00/07/CgAEDGQLOO2AfWijAADTQghtk0k294.png",alt:"image-20230310210830921"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://image.ctrlcver.icu/group1/M00/00/07/CgAEDGQLOO2AIXjxAAFJKTkZmVo905.png",alt:"image-20230310210837259"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://image.ctrlcver.icu/group1/M00/00/07/CgAEDGQLOwCAMck7AAEsF_nqyAs465.png",alt:"image-20230310210844017"}})]),s._v(" "),a("p",[s._v("ui控制界面可以添加nginx反向代理使用二级域名访问")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://image.ctrlcver.icu/group1/M00/00/07/CgAEDGQLOO6AdKpBAADeo2lLZ5o596.png",alt:"image-20230310213616534"}})]),s._v(" "),a("h3",{attrs:{id:"注册systemctl服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册systemctl服务"}},[s._v("#")]),s._v(" 注册systemctl服务")]),s._v(" "),a("p",[s._v("首先将clash注册为systemctl服务 /usr/lib/systemd/system下新建一个文件clash.service")]),s._v(" "),a("div",{staticClass:"language-apl line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-apl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nDescription"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("Clash Service\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nType"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("simple\nUser"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("root\nExecStart"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("opt"),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[s._v("/")]),s._v("clash\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nWantedBy"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("multi"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v(".")]),s._v("target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language-apl line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-apl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新加载配置文件 ")]),s._v("\nsudo systemctl daemon"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-apl line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-apl"}},[a("code",[s._v("systemctl start clash"),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v(".")]),s._v("service\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("#")]),s._v("开启\nsystemctl stop clash"),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v(".")]),s._v("service\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("#")]),s._v("关闭\nsystemctl restart clash"),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v(".")]),s._v("service\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("#")]),s._v("重启\nsystemctl status clash"),a("span",{pre:!0,attrs:{class:"token dyadic-operator operator"}},[s._v(".")]),s._v("service\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("#")]),s._v("查询状态\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://image.ctrlcver.icu/group1/M00/00/07/CgAEDGQLOO2ACwQBAADXZC1OiwA244.png",alt:"image-20230310211653961"}}),s._v(")")]),s._v(" "),a("h3",{attrs:{id:"移动端配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端配置"}},[s._v("#")]),s._v(" 移动端配置")]),s._v(" "),a("p",[s._v("windows：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://image.ctrlcver.icu/group1/M00/00/07/CgAEDGQLOO2ATYqYAACgIPBqVww319.png",alt:"image-20230310212537605"}})]),s._v(" "),a("p",[s._v("地址为服务器ip，端口为clash监听的端口。")]),s._v(" "),a("p",[s._v("ipad：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://image.ctrlcver.icu/group1/M00/00/07/CgAEDGQLOO2ALHooAAC0w3C9Bg4361.png",alt:"image-20230310212938223"}})]),s._v(" "),a("p",[s._v("phone：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://image.ctrlcver.icu/group1/M00/00/07/CgAEDGQLOO2ATnyUAAR5GQOUPzM574.png",alt:"image-20230310213032230"}})]),s._v(" "),a("p",[s._v("这样移动或者pc端就不用下载代理应用就可以实现网上冲浪了！")]),s._v(" "),a("p",[s._v("但是这样因为代理走的你服务器的带宽，所以相对来说网速会慢一点，但是github等网文还是很快的。")]),s._v(" "),a("p",[s._v("如有问题发送邮件2196728181@qq.com欢迎交流!")])])}),[],!1,null,null,null);a.default=r.exports}}]);