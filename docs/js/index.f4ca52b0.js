(function(e){function t(t){for(var r,i,c=t[0],u=t[1],p=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={index:0,test:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1771:function(e,t,n){var r={"./ippan_men2/ico_ippan_men2.png":"bb7d","./ippan_men2/ippan_men2.2048/texture_00.png":"a865","./ippan_men2/model":"f7e7","./ippan_men2/model.json":"f7e7","./logo.png":"cf05"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="1771"},"439b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("フレカフェ福笑い")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.active_avatar,expression:"active_avatar"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.active_avatar=t.target.multiple?n:n[0]}}},e._l(e.avatars,(function(t){return n("option",{key:t.key,domProps:{value:t.key}},[e._v(e._s(t.name))])})),0),n("button",{on:{click:e.start}},[e._v("スタート")]),n("Fukuwarai",{ref:"game",attrs:{msg:"Message"}})],1)},o=[],i=n("6a4a"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"game",style:"width: "+e.width+"px; height: "+e.height+"px"},[n("div",{staticStyle:{position:"absolute",margin:"0",padding:"0"}},e._l(e.parts,(function(t){return n("div",{key:t,style:"\n    position: absolute;\n    background-image: url("+t.src+");\n    overflow: hidden;\n    object-fit: none;\n    background-position: -"+t.rect[0]*t.scale+"px -"+t.rect[1]*t.scale+"px;\n    background-size: "+t.size[0]*t.scale+"px "+t.size[1]*t.scale+"px;\n    width: "+t.rect[2]*t.scale+"px;\n    height: "+t.rect[3]*t.scale+"px;\n    left: "+(e.width-t.r*t.scale)*t.position[0]+"px;\n    top: "+(e.height-t.r*t.scale)*t.position[1]+"px;\n    z-index: "+t.index+";\n    transform-origin: 50% 50%;\n    transform: rotate("+t.index+"deg);\n  "})})),0)]),n("div",{staticClass:"game",style:"width: "+e.height+"px; height: "+e.height+"px; border-radius: 50% 50%;"})])},u=[],p=(n("a9e3"),n("7db0"),n("d81d"),n("99af"),[{key:"ippan_men2",data:n("f7e7")}]),s={name:"Fukuwarai",props:{width:{type:Number,default:480},height:{type:Number,default:640}},data:function(){return{parts:[]}},methods:{start:function(e){var t=p.find((function(t){return t.key==e})).data;this.parts=t.parts.map((function(r){return{src:n("1771")("./".concat(e,"/").concat(t.texture)),rect:r,r:1.2*Math.sqrt(r[2]*r[2]+r[3]*r[3]),size:[2048,2048],index:parseInt(1024*Math.random()),position:[Math.random(),Math.random()],scale:t.scale}})),console.log(t)}}},l=s,f=(n("5c29"),n("2877")),d=Object(f["a"])(l,c,u,!1,null,"f5a15f3e",null),m=d.exports,v={name:"App",components:{Fukuwarai:m},data:function(){return{avatars:i,active_avatar:i[0].key}},methods:{start:function(){this.$refs.game.start(this.active_avatar)}}},h=v,g=(n("034f"),Object(f["a"])(h,a,o,!1,null,null,null)),_=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(_)}}).$mount("#app")},"5c29":function(e,t,n){"use strict";n("439b")},"6a4a":function(e){e.exports=JSON.parse('[{"key":"ippan_men2","name":"男性店員2"}]')},"85ec":function(e,t,n){},a865:function(e,t,n){e.exports=n.p+"img/texture_00.1234ce52.png"},bb7d:function(e,t,n){e.exports=n.p+"img/ico_ippan_men2.0d7a8367.png"},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},f7e7:function(e){e.exports=JSON.parse('{"texture":"ippan_men2.2048/texture_00.png","target":"ico_ippan_men2.png","scale":0.33,"parts":[[40,36,573,866],[672,33,600,600],[1328,32,391,452],[1776,42,58,134],[1890,41,68,123],[1903,223,39,45],[713,683,87,197],[825,684,109,287],[983,688,409,331],[1410,552,224,339],[1723,551,153,48],[1741,664,98,67],[47,1000,377,445],[528,965,95,136],[527,1123,101,127],[495,1272,90,90],[494,1426,90,90],[653,966,151,391],[40,1496,382,164],[40,1740,380,167],[647,1356,155,390],[940,1035,407,333],[1460,958,183,295],[1736,960,137,58],[1416,1303,154,90],[922,1384,175,301],[1567,1311,98,206],[905,1694,201,91],[905,1795,155,68],[1223,1442,84,54],[1460,1443,85,59],[1208,1507,226,123],[1561,1570,143,87],[907,1690,202,83],[902,1784,164,82],[1242,1700,141,105],[1544,1674,150,84],[1468,1765,137,102]]}')}});
//# sourceMappingURL=index.f4ca52b0.js.map