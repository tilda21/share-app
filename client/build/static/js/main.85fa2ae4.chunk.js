(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,n,t){e.exports=t(43)},24:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(17),r=t.n(i),c=(t(24),t(3)),l=t(4),s=t(6),u=t(5),f=t(7),d=t(2),h=t.n(d),w=t(18),g=function(e){function n(){var e,t;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={information:""},t.addNewInfo=function(){var e={information:t.state.information};e.information&&e.information.length>0?h.a.post("/api/newInfos",e).then((function(e){e.data&&(t.props.getNewInfos(),t.setState({information:""}))})).catch((function(e){return console.log(e)})):console.log("input field required")},t.handleChange=function(e){var n=e.target.id;t.setState(Object(w.a)({},n,e.target.value))},t}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.state.information;return a.a.createElement("div",{id:"inputs"},a.a.createElement("input",{id:"information",type:"text",onChange:this.handleChange,value:e}),a.a.createElement("button",{onClick:this.addNewInfo},"Adicionar"))}}]),n}(o.Component),v=function(e){var n=e.newInfos,t=e.deleteNewInfo;return a.a.createElement("ul",null,a.a.createElement("li",{id:"title"},a.a.createElement("div",null,"Informa\xe7\xf5es")),n&&n.length>0?n.map((function(e){return a.a.createElement("li",{key:e._id,onClick:function(){return t(e._id)}},a.a.createElement("div",null,e.information))})):a.a.createElement("li",null,"Nada partilhado"))},m=function(e){function n(){var e,t;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={newInfos:[]},t.getNewInfos=function(){h.a.get("/api/newInfos").then((function(e){e.data&&t.setState({newInfos:e.data})})).catch((function(e){return console.log(e)}))},t.deleteNewInfo=function(e){h.a.delete("/api/newInfos/".concat(e)).then((function(e){e.data&&t.getNewInfos()})).catch((function(e){return console.log(e)}))},t}return Object(f.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getNewInfos()}},{key:"render",value:function(){var e=this.state.newInfos;return a.a.createElement("div",null,a.a.createElement("h1",null,"Informa\xe7\xe3o Partilhada"),a.a.createElement(g,{getNewInfos:this.getNewInfos}),a.a.createElement(v,{newInfos:e,deleteNewInfo:this.deleteNewInfo}))}}]),n}(o.Component),p=(t(42),function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,null))}),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(a.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");I?(!function(e,n){fetch(e).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(n,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.85fa2ae4.chunk.js.map