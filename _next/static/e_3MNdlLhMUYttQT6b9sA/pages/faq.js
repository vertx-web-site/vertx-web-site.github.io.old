(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"05nU":function(e,t,n){},"3ouP":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return j})),n.d(t,"__tfidf__terms",(function(){return v})),n.d(t,"default",(function(){return x}));var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=n.n(o),s=n("7ljp"),c=n("UMc4"),l=n("TSYQ"),p=n.n(l),u=n("17x9"),f=n.n(u);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=function(e){var t=e.color,n=e.size,r=b(e,["color","size"]);return i.a.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),i.a.createElement("polyline",{points:"9 18 15 12 9 6"}))};d.propTypes={color:f.a.string,size:f.a.oneOfType([f.a.string,f.a.number])},d.defaultProps={color:"currentColor",size:"24"};var g=d,O=(n("g+v8"),i.a.createElement),h=function(e){var t=e.question,n=e.children,r=Object(o.useState)(),a=r[0],i=r[1];return O("section",{className:"faq-question"},O("h3",{onClick:function(){i(!a)}},O(g,{className:p()("faq-question-chevron",{visible:a})}),t),O("div",{className:p()("faq-question-answer",{visible:a})},n))},j=(n("YFqc"),i.a.createElement,{title:"Frequently asked questions"}),v=[{term:"messag",tf:9},{term:"client",tf:7},{term:"not",tf:5},{term:"node",tf:5},{term:"rabbitmq",tf:4},{term:"option",tf:3},{term:"log",tf:3},{term:"network",tf:2},{term:"activ",tf:2},{term:"netti",tf:2},{term:"configur",tf:2},{term:"logger",tf:2},{term:"level",tf:2},{term:"send",tf:2},{term:"event",tf:2},{term:"bu",tf:2},{term:"sent",tf:2},{term:"recipi",tf:2},{term:"process",tf:2},{term:"persist",tf:2},{term:"disk",tf:2},{term:"databas",tf:2},{term:"consequ",tf:2},{term:"consid",tf:2},{term:"us",tf:2}],y={meta:j,__tfidf__terms:v},w=c.a;function x(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.a)(w,Object(r.a)({},y,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)("h2",null,"Frequently asked questions"),Object(s.a)(h,{question:Object(s.a)(i.a.Fragment,null,"The ",Object(s.a)("code",null,"logActivity")," option is enabled, but nothing is logged"),mdxType:"Question"},Object(s.a)("p",null,"Most Vert.x net\xadwork clients or servers have a ",Object(s.a)("inlineCode",{parentName:"p"},"logActivity")," op\xadtion which en\xadables net\xadwork ac\xadtiv\xadity log\xadging.\nWhen ac\xadtive, Netty\u2019s pipeline is con\xadfig\xadured for log\xadging on Netty\u2019s log\xadger, at ",Object(s.a)("inlineCode",{parentName:"p"},"DEBUG")," level"),Object(s.a)("p",null,"This is why switch\xading on the ",Object(s.a)("inlineCode",{parentName:"p"},"logActivity")," op\xadtion is not enough.\nYou also have to set the ",Object(s.a)("inlineCode",{parentName:"p"},"io.netty.handler.logging.LoggingHandler")," log\xadger to ",Object(s.a)("inlineCode",{parentName:"p"},"DEBUG")," level in your log\xadging frame\xadwork con\xadfig\xadu\xadra\xadtion.")),Object(s.a)(h,{question:"When Vert.x is clustered, what happens to event-bus messages if a node crashes?",mdxType:"Question"},Object(s.a)("p",null,"When you send a mes\xadsage on the event-\u200bbus, it is sent to the re\xadcip\xadi\xadent\u2019s node and stored in mem\xadory until it is processed.\nIt is ",Object(s.a)("strong",{parentName:"p"},"not")," per\xadsisted to disk or a data\xadbase."),Object(s.a)("p",null,"Con\xadse\xadquently, if the re\xadcip\xadi\xadent\u2019s node crashes be\xadfore the mes\xadsage is processed, the mes\xadsage is lost."),Object(s.a)("p",null,"If it\u2019s not pos\xadsi\xadble to tol\xader\xadate loss of some mes\xadsages, there are a few op\xadtions in\xadclud\xading:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"idem\xadpo\xadtent retry when send\xading fails with an error"),Object(s.a)("li",{parentName:"ul"},"asyn\xadchro\xadnous ac\xadknowl\xadegde\xadment")),Object(s.a)("p",null,"Oth\xader\xadwise, con\xadsider using a full-\u200bfledged broker-\u200bbased mes\xadsag\xading sys\xadtem like ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"http://activemq.apache.org/"}),"Apache Ac\xadtiveMQ")," or ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://www.rabbitmq.com/"}),"Rab\xadbitMQ"),"."),Object(s.a)("p",null,"Vert.x has clients for such so\xadlu\xadtions: ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://vertx.io/docs/vertx-amqp-client/java/"}),"Vert.x AMQP Client"),", ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://vertx.io/docs/vertx-rabbitmq-client/java/"}),"Rab\xadbitMQ Client for Vert.x")," or ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://vertx.io/docs/vertx-stomp/java/"}),"Vert.x-\u200bStomp"),".")),Object(s.a)(h,{question:"Why doesn't my event-bus consumer pickup messages sent previously?",mdxType:"Question"},Object(s.a)("p",null,"When you pub\xadlish a mes\xadsage on the event-\u200bbus, it is sent to all nodes hav\xading one or more con\xadsumers reg\xadis\xadtered for the cor\xadre\xadspond\xading mes\xadsage ad\xaddress.\nIt is ",Object(s.a)("strong",{parentName:"p"},"not")," per\xadsisted to disk or a data\xadbase."),Object(s.a)("p",null,"Con\xadse\xadquently, new con\xadsumers on ex\xadist\xading nodes or nodes join\xading the clus\xadter later will ",Object(s.a)("strong",{parentName:"p"},"not")," re\xadceive this mes\xadsage."),Object(s.a)("p",null,"If you need this fea\xadture, con\xadsider using a full-\u200bfledged broker-\u200bbased mes\xadsag\xading sys\xadtem like ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"http://activemq.apache.org/"}),"Apache Ac\xadtiveMQ")," or ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://www.rabbitmq.com/"}),"Rab\xadbitMQ"),"."),Object(s.a)("p",null,"Vert.x has clients for such so\xadlu\xadtions: ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://vertx.io/docs/vertx-amqp-client/java/"}),"Vert.x AMQP Client"),", ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://vertx.io/docs/vertx-rabbitmq-client/java/"}),"Rab\xadbitMQ Client for Vert.x")," or ",Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"https://vertx.io/docs/vertx-stomp/java/"}),"Vert.x-\u200bStomp"),".")))}x.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||f[m]||o;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"===typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},UMc4:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TSYQ"),i=n.n(o),s=n("Cgje"),c=n("naWs"),l=(n("05nU"),a.a.createElement);t.a=function(e){var t=e.meta,n=void 0===t?{}:t,r=e.narrow,a=e.children;return l("main",{className:"page"},l(s.a,{title:n.title}),l("div",{className:"page-content"},l("div",{className:i()("container",{"container-narrow":r})},a)),l(c.a,null))}},ijRy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n("3ouP")}])},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["ijRy",0,2,1,4,3]]]);