(function(e){function t(t){for(var r,s,l=t[0],u=t[1],c=t[2],p=0,d=[];p<l.length;p++)s=l[p],a[s]&&d.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);i&&i(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var i=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Board")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("table",{staticClass:"table"},[e._m(0),n("tbody",e._l(e.users,function(t){return n("tr",[n("td",[e._v(e._s(t.email))]),n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.date))]),n("td",[n("span",{staticClass:"badge",class:{"badge-success":t.challengePassed,"badge-danger":!1===t.challengePassed}},[e._v(e._s(e.getChallengeStatus(t.challengePassed)))])])])}))])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",{staticClass:"thead-dark"},[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("Email")]),n("th",{attrs:{scope:"col"}},[e._v("Name")]),n("th",{attrs:{scope:"col"}},[e._v("Last Try")]),n("th",{attrs:{scope:"col"}},[e._v("Challenge Status")])])])}],u=n("bc3a"),c=n.n(u),i={data:function(){return{users:[]}},created:function(){var e=this;c.a.get("/challenges").then(function(t){e.users=t.data.data,e.users.map(function(e){e.name=e.firstName.charAt(0).toUpperCase()+e.firstName.slice(1)+" "+e.lastName.toUpperCase(),delete e.firstName,delete e.lastName})}).catch(function(e){throw new Error(e)})},methods:{getChallengeStatus:function(e){return!0===e?"Passed":"Failed"}}},p=i,d=n("2877"),f=Object(d["a"])(p,s,l,!1,null,null,null);f.options.__file="Board.vue";var h=f.exports,v={name:"app",components:{Board:h}},_=v,b=Object(d["a"])(_,a,o,!1,null,null,null);b.options.__file="App.vue";var g=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(g)}}).$mount("#app")}});
//# sourceMappingURL=app.23f4b294.js.map