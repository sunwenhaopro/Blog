(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{355:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"seata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seata"}},[s._v("#")]),s._v(" seata")]),s._v(" "),a("p",[s._v("使用的话，我就不用讲了，直接看官方的教程")]),s._v(" "),a("p",[s._v("https://gitee.com/itCjb/spring-cloud-alibaba-seata-demo#https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Fseata%2Fseata%2Ftree%2Fdevelop%2Fscript%2Fclient")]),s._v(" "),a("h2",{attrs:{id:"使用nacos作为配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用nacos作为配置中心"}},[s._v("#")]),s._v(" 使用nacos作为配置中心")]),s._v(" "),a("p",[s._v("如果我们需要使用nacos作为配置中心的话，也就是我们将"),a("code",[s._v("registry.conf")]),s._v("中的type设置为"),a("code",[s._v("nacos")]),s._v("之后，我们需要配置，否则就会出现问题")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20220413145833453.png",alt:"image-20220413145833453"}})]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("seata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("FrameworkException")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("No")]),s._v(" available service\n    \ncan not get cluster name in registry config 'service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vgroupMapping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("aurora"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("message"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("seata"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("service"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("group'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" please make sure registry config correct\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",[a("li",[a("p",[s._v("设置"),a("code",[s._v("conf/registry.conf")]),s._v("中的type值，将其设置为nacos，并设置端口ip等")])]),s._v(" "),a("li",[a("p",[s._v("因为使用nacos作为配置中心，就需要我们将配置都上传到nacos，官方提供了一个工具，我们可以直接一键上传")])]),s._v(" "),a("li",[a("p",[s._v("https://github.com/seata/seata/blob/develop/script/config-center/nacos/nacos-config.sh将此文件下载下来，放在seata的conf目录")])]),s._v(" "),a("li",[a("p",[s._v("https://github.com/seata/seata/blob/develop/script/config-center/config.txt将此文件下载下来，放在"),a("code",[s._v("seata")]),s._v("根目录下，也就是bin同级目录那里，不能修改该文件的名字，这个文件里面的内容，就是我们上传到nacos中的")]),s._v(" "),a("p",[s._v("因为有一些配置是不需要的，我们可以删除，如果此文件中，某些配置项的值为空，并且没有注释掉，那么是不能上传成功的")])]),s._v(" "),a("li",[a("p",[s._v("在"),a("code",[s._v("nacos-config.sh")]),s._v("目录下，运行"),a("code",[s._v("sh nacos-config.sh -h localhost -p 8848")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20220413162657186.png",alt:"image-20220413162657186"}})]),s._v(" "),a("p",[s._v("像下图这样就可以了，如果有一个错误，都会导致上传失败，对于造成上传失败的项，如果我们不需要的话，可以直接注释，然后再次上传")])])]),s._v(" "),a("p",[s._v("然后回到nacos刷新，就可以看到这些配置")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20220413162813402.png",alt:"image-20220413162813402"}})]),s._v(" "),a("p",[s._v("这些配置的命名都是以"),a("code",[s._v("seata的配置名作为名字")]),s._v("，值就直接写")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20220413163233065.png",alt:"image-20220413163233065"}})]),s._v(" "),a("p",[s._v("然后就可以了")]),s._v(" "),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("bootstrap.yml")]),s._v("文件中，设置nacos配置中心的地址")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("在"),a("code",[s._v("application.yml")]),s._v("文件中，在配置一下")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("seata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enable-auto-data-source-proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tx-service-group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" default_tx_group\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nacos\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SEATA_GROUP"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nacos"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nacos"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("registry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nacos\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" seata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SEATA_GROUP"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nacos"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nacos"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("vgroup-mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("default_tx_group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" default\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("undo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("log-table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" undo_log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("blockquote",[a("p",[s._v("需要注意的是，如果我们的nacos配置中心和"),a("code",[s._v("application.yml")]),s._v("文件中的配置重合了，那么会使用"),a("code",[s._v("nacos")]),s._v("的配置作为默认配置，也就是"),a("code",[s._v("application.yml")]),s._v("会不生效")])]),s._v(" "),a("blockquote",[a("p",[s._v("如果在使用"),a("code",[s._v("feign")]),s._v("进行服务之间的远程调用的时候，如果对异常进行了处理，一定要设置响应码为5xxx，否则如果远程服务发生了异常，那么也是不能回滚的")])]),s._v(" "),a("h2",{attrs:{id:"mysql中使用datetime问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql中使用datetime问题"}},[s._v("#")]),s._v(" mysql中使用dateTime问题")]),s._v(" "),a("p",[s._v("将mysql中的时间存储格式修改为timesmap，添加依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<dependency>\n<groupId>com.esotericsoftware.kryo</groupId>\n<artifactId>kryo</artifactId>\n<version>2.24.0</version>\n</dependency>\n\n<dependency>\n<groupId>com.esotericsoftware</groupId>\n<artifactId>kryo</artifactId>\n<version>4.0.2</version>\n</dependency>\n\n<dependency>\n<groupId>de.javakaffee</groupId>\n<artifactId>kryo-serializers</artifactId>\n<version>0.44</version>\n</dependency>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("在"),a("code",[s._v("nacos")]),s._v("中增加一个配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("client.undo.logSerialization=kryo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20220423125359311.png",alt:"image-20220423125359311"}})]),s._v(" "),a("h2",{attrs:{id:"报错信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错信息"}},[s._v("#")]),s._v(" 报错信息")]),s._v(" "),a("p",[s._v("can not get cluster name in registry config 'service.vgroupMapping.account-service-fescar-service-group', please make sure registry config correc")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20220503162849313.png",alt:"image-20220503162849313"}})]),s._v(" "),a("p",[s._v("因为之前的tx-service-group的值为"),a("code",[s._v("aurora_blog_tx_group")]),s._v("，需要修改成"),a("code",[s._v("aurora-blog-tx-group")]),s._v("，nacos中也需要修改一下")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20220503162954948.png",alt:"image-20220503162954948"}})]),s._v(" "),a("p",[s._v("issue")]),s._v(" "),a("p",[s._v("https://github.com/seata/seata-samples/issues/408")])])}),[],!1,null,null,null);a.default=n.exports}}]);