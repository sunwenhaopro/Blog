(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{336:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"执行流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行流程图"}},[s._v("#")]),s._v(" 执行流程图")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20210601164443299.png?x-oss-process=style/pictureProcess1",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("过程分析")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("用户发起请求some.do")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("DispatcherServlet")]),s._v("接收请求some.do，把请求转交给处理器映射器")]),s._v(" "),a("p",[s._v("处理器映射器： 是springmvc框架中的一种对象，只要实现了"),a("code",[s._v("HandlerMapping")]),s._v("接口的类，都叫做映射器，存在多个")]),s._v(" "),a("p",[s._v("作用：处理器映射器根据请求，从springmvc容器中获取处理器对象，也就是")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bean`s id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("框架会把找到的这个处理器对象放到一个叫做处理器执行链("),a("code",[s._v("HandlerExecutionChain")]),s._v(")")]),s._v(" "),a("p",[s._v("这个过程对应着"),a("code",[s._v("doDispatch()")]),s._v("方法中的，获取处理器执行链")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HandlerExecutionChain")]),s._v(" mappedHandler "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("processedRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("HandlerExecutionChain")]),s._v("类中保存着处理器对象"),a("code",[s._v("Controller")]),s._v("，项目中所有的拦截器"),a("code",[s._v("List<HandlerInterceptor>")])]),s._v(" "),a("p",[s._v("在执行"),a("code",[s._v("doDispatch()")]),s._v("方法的时候，"),a("code",[s._v("HandleMapping")]),s._v("对象中的集合")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("servlet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mvc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("RequestMappingHandlerMapping")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@1033fc8c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("servlet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("BeanNameUrlHandlerMapping")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@1ef400fa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("servlet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("SimpleUrlHandlerMapping")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@1acb97fc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("获取"),a("code",[s._v("HandlerExecutionChain")]),s._v("对象方法分析")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HandlerExecutionChain")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpServletRequest")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" handler "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getHandlerInternal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("handler "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        handler "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getDefaultHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20210601173335831.png?x-oss-process=style/pictureProcess1",alt:""}})]),s._v(" "),a("p",[s._v("从图中，可以看到，执行"),a("code",[s._v("Object handler = this.getHandlerInternal(request);")]),s._v("方法时，返回的对象就是控制器对象，并且对象中，保存了控制器对象中的方法，这个方法就是我们请求的时候，对应的那个方法")]),s._v(" "),a("p",[s._v("最终")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HandlerExecutionChain")]),s._v(" mappedHandler "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("processedRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//mappedHandler=HandlerExecutionChain with [vin.cco.controller.MyControllerParameter#doAuto(String, Integer)] and 2 interceptors")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("所以处理器执行链"),a("code",[s._v("HandlerExecutionChain")]),s._v("中存放了控制器对象（当前请求对应的控制器对象）")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("DispatcherServlet")]),s._v("把2中的处理器执行链中的处理器对象交给适配器对象，存在多个")]),s._v(" "),a("p",[s._v("处理器适配器：springmvc框架中的对象，需要实现"),a("code",[s._v("HandlerAdapter")]),s._v("接口")]),s._v(" "),a("p",[s._v("作用：执行处理器方法（调用"),a("code",[s._v("Controller类中的方法")]),s._v("），从而通过方法得到返回值"),a("code",[s._v("ModeAndView")]),s._v("，这个过程就是")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HandlerAdapter")]),s._v(" ha "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getHandlerAdapter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mappedHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取ModeAndView对象")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ModeAndView")]),s._v(" mv "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ha"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("handle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("processedRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mappedHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//结果ModelAndView [view="parameter"; model={name=sdf, age=2}]')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20210601184213286.png?x-oss-process=style/pictureProcess1",alt:""}})])]),s._v(" "),a("li",[a("p",[a("code",[s._v("DispatcherServlet")]),s._v("把3中获取的"),a("code",[s._v("ModeAndView")]),s._v("交给视图解析器对象")]),s._v(" "),a("p",[s._v("视图解析器：springmvc中的对象，需要实现"),a("code",[s._v("ViewResoler")]),s._v("接口（可以存在多个）")]),s._v(" "),a("p",[a("code",[s._v("View")]),s._v("是一个接口，表示视图的，在框架中jsp，HTML不是String表示，而是使用"),a("code",[s._v("View")]),s._v("和他的实现类表示视图")]),s._v(" "),a("p",[a("code",[s._v("InternalResourceView")]),s._v("：视图类，表示jsp文件，视图解析器会创建"),a("code",[s._v("InternalResourceView")]),s._v("对象，这个对象里面存在属性"),a("code",[s._v("url = .....*jsp")]),s._v("，路径")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("DispatcherServlet")]),s._v("把4步骤中创建的View对象获取到，调用view类中的方法，把Model数据放入到requers作用域中，执行视图的forward，现在请求就已经结束了")])])]),s._v(" "),a("blockquote",[a("p",[s._v("（1）浏览器提交请求到中央调度器")]),s._v(" "),a("p",[s._v("（2）中央调度器直接将请求转给处理器映射器。")]),s._v(" "),a("p",[s._v("（3）处理器映射器会根据请求，找到处理该请求的处理器，并将其封装为处理器执行链后")]),s._v(" "),a("p",[s._v("返回给中央调度器。")]),s._v(" "),a("p",[s._v("（4）中央调度器根据处理器执行链中的处理器，找到能够执行该处理器的处理器适配器。")]),s._v(" "),a("p",[s._v("（5）处理器适配器调用执行处理器。")]),s._v(" "),a("p",[s._v("（6）处理器将处理结果及要跳转的视图封装到一个对象 ModelAndView 中，并将其返回给")]),s._v(" "),a("p",[s._v("处理器适配器。")]),s._v(" "),a("p",[s._v("（7）处理器适配器直接将结果返回给中央调度器。")]),s._v(" "),a("p",[s._v("（8）中央调度器调用视图解析器，将 ModelAndView 中的视图名称封装为视图对象。")]),s._v(" "),a("p",[s._v("（9）视图解析器将封装了的视图对象返回给中央调度器")]),s._v(" "),a("p",[s._v("（10）中央调度器调用视图对象，让其自己进行渲染，即进行数据填充，形成响应对象。")]),s._v(" "),a("p",[s._v("（11）中央调度器响应浏览器。")])]),s._v(" "),a("p",[s._v("这个过程最好自己整理一下，可能面试会问到")])])}),[],!1,null,null,null);a.default=e.exports}}]);