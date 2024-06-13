(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();var me=/([:*])(\w+)/g,ye="([^/]+)",_e=/\*/g,Le="?(?:.*)",Ee=/\/\?/g,Oe="/?([^/]+|)",be="(?:/^|^)",Ae="";function V(e){return e===void 0&&(e="/"),N()?location.pathname+location.search+location.hash:e}function h(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function w(e){return typeof e=="string"}function we(e){return typeof e=="function"}function P(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function Pe(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(a,r,i){return a===null&&(a={}),a[t[i]]=decodeURIComponent(r),a},null)}function R(e){var t=h(e).split(/\?(.*)?$/);return[h(t[0]),t.slice(1).join("")]}function T(e){for(var t={},a=e.split("&"),r=0;r<a.length;r++){var i=a[r].split("=");if(i[0]!==""){var s=decodeURIComponent(i[0]);t[s]?(Array.isArray(t[s])||(t[s]=[t[s]]),t[s].push(decodeURIComponent(i[1]||""))):t[s]=decodeURIComponent(i[1]||"")}}return t}function Q(e,t){var a=R(h(e.currentLocationPath)),r=a[0],i=a[1],s=i===""?null:T(i),f=[],d;if(w(t.path)){if(d=be+h(t.path).replace(me,function(L,y,E){return f.push(E),ye}).replace(_e,Le).replace(Ee,Oe)+"$",h(t.path)===""&&h(r)==="")return{url:r,queryString:i,hashString:P(e.to),route:t,data:null,params:s}}else d=t.path;var m=new RegExp(d,Ae),p=r.match(m);if(p){var O=w(t.path)?Pe(p,f):p.groups?p.groups:p.slice(1);return{url:h(r.replace(new RegExp("^"+e.instance.root),"")),queryString:i,hashString:P(e.to),route:t,data:O,params:s}}return!1}function Y(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function _(e,t){return typeof e[t]>"u"||e[t]===!0}function Re(e){if(!e)return{};var t=e.split(","),a={},r;return t.forEach(function(i){var s=i.split(":").map(function(f){return f.replace(/(^ +| +$)/g,"")});switch(s[0]){case"historyAPIMethod":a.historyAPIMethod=s[1];break;case"resolveOptionsStrategy":r||(r={}),r.strategy=s[1];break;case"resolveOptionsHash":r||(r={}),r.hash=s[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":a[s[0]]=s[1]==="true";break}}),r&&(a.resolveOptions=r),a}function N(){return typeof window<"u"}function ke(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(a){return a}).forEach(function(a){["before","after","already","leave"].forEach(function(r){a[r]&&(t[r]||(t[r]=[]),t[r].push(a[r]))})}),t}function g(e,t,a){var r=t||{},i=0;(function s(){if(!e[i]){a&&a(r);return}Array.isArray(e[i])?(e.splice.apply(e,[i,1].concat(e[i][0](r)?e[i][1]:e[i][2])),s()):e[i](r,function(f){typeof f>"u"||f===!0?(i+=1,s()):a&&a(r)})})()}g.if=function(e,t,a){return Array.isArray(t)||(t=[t]),Array.isArray(a)||(a=[a]),[e,t,a]};function q(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=V(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function k(e,t){for(var a=0;a<e.instance.routes.length;a++){var r=e.instance.routes[a],i=Q(e,r);if(i&&(e.matches||(e.matches=[]),e.matches.push(i),e.resolveOptions.strategy==="ONE")){t();return}}t()}function Se(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function He(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var $=N(),Ce=Y();function Fe(e,t){if(_(e.navigateOptions,"updateBrowserURL")){var a=("/"+e.to).replace(/\/\//g,"/"),r=$&&e.resolveOptions&&e.resolveOptions.hash===!0;Ce?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",r?"#"+a:a),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!r){var i=location.hash;location.hash="",location.hash=i}e.instance.__freezeListening=!1},1))):$&&(window.location.href=e.to)}t()}function J(e,t){var a=e.instance;if(!a.lastResolved()){t();return}g(a.lastResolved().map(function(r){return function(i,s){if(!r.route.hooks||!r.route.hooks.leave){s();return}var f=!1,d=e.instance.matchLocation(r.route.path,e.currentLocationPath,!1);if(r.route.path!=="*")f=!d;else{var m=e.matches?e.matches.find(function(p){return r.route.path===p.route.path}):!1;f=!m}if(_(e.navigateOptions,"callHooks")&&f){g(r.route.hooks.leave.map(function(p){return function(O,L){return p(function(y){y===!1?e.instance.__markAsClean(e):L()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return s()}]));return}else s()}}),{},function(){return t()})}function Te(e,t){e.match.route.hooks&&e.match.route.hooks.before&&_(e.navigateOptions,"callHooks")?g(e.match.route.hooks.before.map(function(a){return function(i,s){return a(function(f){f===!1?e.instance.__markAsClean(e):s()},e.match)}}).concat([function(){return t()}])):t()}function Ne(e,t){_(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function Me(e,t){e.match.route.hooks&&e.match.route.hooks.after&&_(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(a){return a(e.match)}),t()}function Ie(e,t){var a=e.instance.lastResolved();if(a&&a[0]&&a[0].route===e.match.route&&a[0].url===e.match.url&&a[0].queryString===e.match.queryString){a.forEach(function(r){r.route.hooks&&r.route.hooks.already&&_(e.navigateOptions,"callHooks")&&r.route.hooks.already.forEach(function(i){return i(e.match)})}),t(!1);return}t()}function Ue(e,t){var a=e.instance._notFoundRoute;if(a){e.notFoundHandled=!0;var r=R(e.currentLocationPath),i=r[0],s=r[1],f=P(e.to);a.path=h(i);var d={url:a.path,queryString:s,hashString:f,data:null,route:a,params:s!==""?T(s):null};e.matches=[d],e.match=d}t()}function je(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function Be(e,t){e.instance._setCurrent(null),t()}function Z(e,t){_(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var x=[Ie,Te,Ne,Me],W=[J,Ue,g.if(function(e){var t=e.notFoundHandled;return t},x.concat([Z]),[je,Be])];function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},C.apply(this,arguments)}function z(e,t){var a=0;function r(){if(a===e.matches.length){Z(e,t);return}g(x,C({},e,{match:e.matches[a]}),function(){a+=1,r()})}J(e,r)}function S(e){e.instance.__markAsClean(e)}function F(){return F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},F.apply(this,arguments)}var X="[data-navigo]";function De(e,t){var a=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:X},r=this,i="/",s=null,f=[],d=!1,m,p=Y(),O=N();e?i=h(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function L(n){return n.indexOf("#")>=0&&(a.hash===!0?n=n.split("#")[1]||"/":n=n.split("#")[0]),n}function y(n){return h(i+"/"+h(n))}function E(n,o,u,l){return n=w(n)?y(n):n,{name:l||h(String(n)),path:n,handler:o,hooks:ke(u)}}function ee(n,o,u){var l=this;return typeof n=="object"&&!(n instanceof RegExp)?(Object.keys(n).forEach(function(c){if(typeof n[c]=="function")l.on(c,n[c]);else{var v=n[c],b=v.uses,ve=v.as,ge=v.hooks;f.push(E(c,b,[m,ge],ve))}}),this):(typeof n=="function"&&(u=o,o=n,n=i),f.push(E(n,o,[m,u])),this)}function I(n,o){if(r.__dirty){r.__waiting.push(function(){return r.resolve(n,o)});return}else r.__dirty=!0;n=n?h(i)+"/"+h(n):void 0;var u={instance:r,to:n,currentLocationPath:n,navigateOptions:{},resolveOptions:F({},a,o)};return g([q,k,g.if(function(l){var c=l.matches;return c&&c.length>0},z,W)],u,S),u.matches?u.matches:!1}function U(n,o){if(r.__dirty){r.__waiting.push(function(){return r.navigate(n,o)});return}else r.__dirty=!0;n=h(i)+"/"+h(n);var u={instance:r,to:n,navigateOptions:o||{},resolveOptions:o&&o.resolveOptions?o.resolveOptions:a,currentLocationPath:L(n)};g([Se,He,k,g.if(function(l){var c=l.matches;return c&&c.length>0},z,W),Fe,S],u,S)}function te(n,o,u){var l=B(n,o);return l!==null?(U(l.replace(new RegExp("^/?"+i),""),u),!0):!1}function ne(n){return this.routes=f=f.filter(function(o){return w(n)?h(o.path)!==h(n):we(n)?n!==o.handler:String(o.path)!==String(n)}),this}function re(){p&&(this.__popstateListener=function(){r.__freezeListening||I()},window.addEventListener("popstate",this.__popstateListener))}function ae(){this.routes=f=[],p&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=d=!0}function ie(n,o){return r._notFoundRoute=E("*",n,[m,o],"__NOT_FOUND__"),this}function j(){if(O)return oe().forEach(function(n){if(n.getAttribute("data-navigo")==="false"||n.getAttribute("target")==="_blank"){n.hasListenerAttached&&n.removeEventListener("click",n.navigoHandler);return}n.hasListenerAttached||(n.hasListenerAttached=!0,n.navigoHandler=function(o){if((o.ctrlKey||o.metaKey)&&o.target.tagName.toLowerCase()==="a")return!1;var u=n.getAttribute("href");if(typeof u>"u"||u===null)return!1;if(u.match(/^(http|https)/)&&typeof URL<"u")try{var l=new URL(u);u=l.pathname+l.search}catch{}var c=Re(n.getAttribute("data-navigo-options"));d||(o.preventDefault(),o.stopPropagation(),r.navigate(h(u),c))},n.addEventListener("click",n.navigoHandler))}),r}function oe(){return O?[].slice.call(document.querySelectorAll(a.linksSelector||X)):[]}function se(n){return"/"+i+"/"+h(n)}function ue(n){return m=n,this}function ce(){return s}function B(n,o,u){var l=f.find(function(b){return b.name===n}),c=null;if(l){if(c=l.path,o)for(var v in o)c=c.replace(":"+v,o[v]);c=c.match(/^\//)?c:"/"+c}return c&&u&&!u.includeRoot&&(c=c.replace(new RegExp("^/"+i),"")),c}function fe(n){return n.getAttribute("href")}function D(n){var o=R(h(n)),u=o[0],l=o[1],c=l===""?null:T(l),v=P(n),b=E(u,function(){},[m],u);return{url:u,queryString:l,hashString:v,route:b,data:null,params:c}}function le(){return D(h(V(i)).replace(new RegExp("^"+i),""))}function he(n){var o={instance:r,currentLocationPath:n,to:n,navigateOptions:{},resolveOptions:a};return k(o,function(){}),o.matches?o.matches:!1}function de(n,o,u){typeof o<"u"&&(typeof u>"u"||u)&&(o=y(o));var l={instance:r,to:o,currentLocationPath:o};q(l,function(){}),typeof n=="string"&&(n=typeof u>"u"||u?y(n):n);var c=Q(l,{name:String(n),path:n,handler:function(){},hooks:{}});return c||!1}function A(n,o,u){return typeof o=="string"&&(o=G(o)),o?(o.hooks[n]||(o.hooks[n]=[]),o.hooks[n].push(u),function(){o.hooks[n]=o.hooks[n].filter(function(l){return l!==u})}):(console.warn("Route doesn't exists: "+o),function(){})}function G(n){return typeof n=="string"?f.find(function(o){return o.name===y(n)}):f.find(function(o){return o.handler===n})}function pe(n){n.instance.__dirty=!1,n.instance.__waiting.length>0&&n.instance.__waiting.shift()()}this.root=i,this.routes=f,this.destroyed=d,this.current=s,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=pe,this.on=ee,this.off=ne,this.resolve=I,this.navigate=U,this.navigateByName=te,this.destroy=ae,this.notFound=ie,this.updatePageLinks=j,this.link=se,this.hooks=ue,this.extractGETParameters=function(n){return R(L(n))},this.lastResolved=ce,this.generate=B,this.getLinkPath=fe,this.match=he,this.matchLocation=de,this.getCurrentLocation=le,this.addBeforeHook=A.bind(this,"before"),this.addAfterHook=A.bind(this,"after"),this.addAlreadyHook=A.bind(this,"already"),this.addLeaveHook=A.bind(this,"leave"),this.getRoute=G,this._pathToMatchObject=D,this._clean=h,this._checkForAHash=L,this._setCurrent=function(n){return s=r.current=n},re.call(this),j.call(this)}const Ge=()=>`
        <div class="container max-w-[800px] mx-auto">
            <header class="text-5xl font-bold uppercase bg-gray-500 text-white w-full py-3">Header</header>
            <div class="grid grid-cols-2">
                <div>
                    <div class="mt-6">
                        <h2 class="text-3xl font-bold uppercase">Main Menu</h2>
                        <aside class="mt-6 px-3">
                            <ul class="flex flex-col justify-center gap-3">
                                <li class="nav-item">
                                    <a href="/" class="bg-yellow-400 px-4 py-1.5 w-32 inline-block hover:opacity-80 transition-opacity duration-300" data-navigo>Home</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/about" class="bg-yellow-400 px-4 py-1.5 w-32 inline-block hover:opacity-80 transition-opacity duration-300" data-navigo>About</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/products" class="bg-yellow-400 px-4 py-1.5 w-32 inline-block hover:opacity-80 transition-opacity duration-300" data-navigo>Products</a>
                                </li>
                               
                            </ul>
                        </aside>
                    </div>
                   
                </div>
                <main class="main max-w-screen-2xl mx-auto flex items-center justify-center" id="main"></main>
           </div>
            <footer class="text-5xl font-bold uppercase text-white bg-gray-500 w-full mt-6 py-3">Footer</footer>
        </div>
    `,qe=()=>`
       <h1 class="text-3xl font-bold">Page not found!</h1>;
    `,H=new De("/"),K=(e,t)=>{t.innerHTML=e};function $e(e){const t=document.getElementById("app");t.innerHTML=Ge();const a=document.getElementById("main");Array.isArray(e)&&(e.forEach(r=>{H.on(r.path,i=>K(r.component(i),a)),H.notFound(()=>K(qe(),a))}),H.resolve())}const We=()=>'<h1 class="text-3xl font-bold">Home Page</h1>',ze=()=>'<h1 class="text-3xl font-bold">About Page</h1>',M=[{id:1,name:"Sản phẩm 1"},{id:2,name:"Sản phẩm 2"},{id:3,name:"Sản phẩm 3"}];function Xe(e){return e=e.normalize("NFD").replace(/[\u0300-\u036f]/g,""),e.toLowerCase().replace(/[^a-z0-9]+/g,"-")}M.forEach(e=>{const t=Xe(e.name);e.path=t});const Ke=e=>e.map((t,a)=>`<li><a href="/products/${t.path}" class="text-2xl bg-gray-500 text-white px-3 py-1.5 flex justify-center mt-4 w-72" data-navigo>${a+1}. ${t.name}</a></li>`).join(""),Ve=()=>`<ul class="flex flex-col">
            <h1 class="text-3xl font-bold mt-3">Danh sách sản phẩm</h1>
            ${Ke(M)}
        </ul> `,Qe=({data:e})=>`
       <div>
          <h2 class="font-bold text-2xl"> Chi tiết ${M.find(a=>a.path===e.id).name.toLowerCase()}</h2>
          <a href="/products" data-navigo class="bg-gray-400 rounded-sm px-3 py-1 text-sm inline-block mt-3 text-white">Back</a>
       </div>
        `,Ye=()=>$e([{path:"/",component:We},{path:"/about",component:ze},{path:"/products",component:Ve},{path:"/products/:id",component:Qe}]);Ye();
