(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"06ef":function(n,t,e){"use strict";var i=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(e("f418")),r={data:function(){return{isLogin:!1,title:"Hello"}},onLoad:function(){var n=o.default.get("https://api.ipify.org?format=json").then((function(n){var t=n.data.ip;console.log(t)})).catch((function(n){console.log(n)}));uni.setStorageSync("ip",n),this.isLogin=uni.getStorageSync("isLogin"),this.isLogin?uni.redirectTo({url:"/pages/my/my"}):uni.redirectTo({url:"/pages/login/login"})},components:{},methods:{}};t.default=r},5737:function(n,t,e){"use strict";e.r(t);var i=e("06ef"),o=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=o.a},"9d55":function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}));var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.isLogin?e("v-uni-view",{}):n._e()},r=[]},fea0:function(n,t,e){"use strict";e.r(t);var i=e("9d55"),o=e("5737");for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);var u,a=e("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"bfa53f5a",null,!1,i["a"],u);t["default"]=c.exports}}]);