(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,n,t){e.exports=t(42)},23:function(e,n,t){},41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(16),r=t.n(i),c=(t(23),t(3)),l=t(4),s=t(6),f=t(5),u=t(2),d=t.n(u),h=t(17),m=function(e){Object(s.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).state={information:""},e.addNewInfo=function(){var n={information:e.state.information};n.information&&n.information.length>0?d.a.post("/api/newInfos",n).then((function(n){n.data&&(e.props.getNewInfos(),e.setState({information:""}))})).catch((function(e){return console.log(e)})):console.log("input field required")},e.handleChange=function(n){var t=n.target.id;e.setState(Object(h.a)({},t,n.target.value))},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state.information;return o.a.createElement("div",{id:"inputs"},o.a.createElement("div",{className:"bigWidth"},o.a.createElement("input",{id:"information",type:"text",onChange:this.handleChange,value:e})),o.a.createElement("div",{className:"smallWidth"},o.a.createElement("button",{onClick:this.addNewInfo},"Adicionar")))}}]),t}(a.Component),v=function(e){var n=e.newInfos,t=e.deleteNewInfo;return o.a.createElement("ul",null,o.a.createElement("li",{id:"title"},o.a.createElement("div",null,"Informa\xe7\xf5es")),n&&n.length>0?n.map((function(e){return o.a.createElement("li",{key:e._id},o.a.createElement("div",{className:"bigWidth"},o.a.createElement("a",{href:e.information,target:"_blank",rel:"noopener noreferrer"},e.information)),o.a.createElement("div",{className:"smallWidth"},o.a.createElement("button",{className:"delete",onClick:function(){return t(e._id)}},"Delete")))})):o.a.createElement("li",null,o.a.createElement("div",null,"Nada partilhado")))},w=function(e){Object(s.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).state={newInfos:[]},e.getNewInfos=function(){d.a.get("/api/newInfos").then((function(n){n.data&&e.setState({newInfos:n.data})})).catch((function(e){return console.log(e)}))},e.deleteNewInfo=function(n){d.a.delete("/api/newInfos/".concat(n)).then((function(n){n.data&&e.getNewInfos()})).catch((function(e){return console.log(e)}))},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getNewInfos()}},{key:"render",value:function(){var e=this.state.newInfos;return o.a.createElement("div",null,o.a.createElement("h1",null,"Informa\xe7\xe3o Partilhada"),o.a.createElement(m,{getNewInfos:this.getNewInfos}),o.a.createElement(v,{newInfos:e,deleteNewInfo:this.deleteNewInfo}))}}]),t}(a.Component),g=(t(41),function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w,null))}),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");p?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(n,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.37120ff4.chunk.js.map