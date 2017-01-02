!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("d3"),require("d3-hierarchy")):"function"==typeof define&&define.amd?define(["d3","d3-hierarchy"],e):"object"==typeof exports?exports.vueD3Tree=e(require("d3"),require("d3-hierarchy")):t.vueD3Tree=e(t.d3,t["d3-hierarchy"])}(this,function(t,e){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){var r,i;n(44),r=n(11);var o=n(42);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=r},function(t,e,n){t.exports=!n(2)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(17);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(7),i=n(6);t.exports=function(t){return r(i(t))}},function(t,e,n){var r,i,o;!function(n,a){i=[t,e],r=a,o="function"==typeof r?r.apply(e,i):r,!(void 0!==o&&(t.exports=o))}(this,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={size:function(t,e){t.size([e.height,e.width-160])},transformNode:function(t,e){return e+","+t},transformSvg:function(t,e){return t.attr("transform","translate("+2*e.x+",0)"),t}},t.exports=e.default})},function(t,e,n){var r,i,o;!function(a,u){i=[t,e,n(12),n(10),n(45),n(46)],r=u,o="function"==typeof r?r.apply(e,i):r,!(void 0!==o&&(t.exports=o))}(this,function(t,e,n,r,i,o){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function u(t){return t&&t.__esModule?t:{default:t}}function s(t,e){return t<e?-1:t>e?1:0}function c(t,e,n){var r=n.transformNode;return"M"+r(t.x,t.y)+"C"+r(t.x,(t.y+e.y)/2)+" "+r(e.x,(t.y+e.y)/2)+" "+r(e.x,e.y)}function f(t){return t.children||t._children}function l(t){["circle","text"].forEach(function(e){t.selectAll(e).remove()})}function d(t){return"translate("+t.y+","+t.x+")"}Object.defineProperty(e,"__esModule",{value:!0});var p=u(n),h=u(r),v=a(i),y=a(o);(0,p.default)(v,y);var x=0,g=null,m={data:Object,duration:{type:Number,default:750},type:{type:String,default:"tree"},marginX:{type:Number,default:20},marginY:{type:Number,default:20}};e.default={props:m,mounted:function(){this.layout=h.default;var t=this.getSize(),e=v.select(this.$el).append("svg").attr("width",t.width).attr("height",t.height),n=e,r=this.tree;this.internaldata={svg:e,g:n,tree:r},this.sizeSvg(),window.onresize=this.resize.bind(this),this.data&&this.onData(this.data)},methods:{sizeSvg:function(){this.layout.transformSvg(this.internaldata.svg,this.margin)},getSize:function(){var t=this.$el.clientWidth,e=this.$el.clientHeight;return{width:t,height:e}},resize:function(){var t=this.getSize();this.internaldata.svg.attr("width",t.width).attr("height",t.height),this.layout.size(this.internaldata.tree,t),this.redraw()},updateGraph:function(t){var e=this,n={x:t.x0,y:t.y0},r=this.internaldata.root,i=this.internaldata.g.selectAll(".linktree").data(this.internaldata.tree(r).descendants().slice(1),function(t){return t.id}),o=i.enter().append("path").attr("class","linktree").attr("d",function(t){return c(n,n,e.layout)}),a=i.merge(o);a.transition().duration(this.duration).attr("d",function(t){return c(t,t.parent,e.layout)}),i.exit().transition().duration(this.duration).attr("d",function(n){return c(t,t,e.layout)}).remove();var u=this.internaldata.g.selectAll(".nodetree").data(r.descendants(),function(t){return t.id}),s=u.enter().append("g").attr("class","nodetree").attr("transform",function(t){return d(n)}),p=s.merge(u);p.classed("node--internal",function(t){return f(t)}).classed("node--leaf",function(t){return!f(t)}).classed("selected",function(t){return t===g}).on("click",this.onNodeClick),p.transition().duration(this.duration).attr("transform",function(t){return d(t)}).attr("opacity",1),l(u),p.append("circle"),p.append("text").attr("x",function(t){return f(t)?-13:13}).attr("dy",".35em").attr("text-anchor",function(t){return f(t)?"end":"start"}).text(function(t){return t.data.text}).on("click",function(t){g=g===t?null:t,v.event.stopPropagation(),e.redraw()}),p.each(function(t){t.x0=t.x,t.y0=t.y});var h=u.exit();h.transition().duration(this.duration).attr("transform",function(e){return d(t)}).attr("opacity",0).remove(),h.select("circle").attr("r",1e-6)},onNodeClick:function(t){t.children?(t._children=t.children,t.children=null):(t.children=t._children,t._children=null),this.updateGraph(t)},onData:function(t){if(!t)return this.internaldata.root=null,void this.clean();var e=v.hierarchy(t).sort(function(t,e){return s(t.data.text,e.data.text)});this.internaldata.root=e,e.each(function(t){t.id=x++});var n=this.getSize();e.x=n.height/2,e.y=0,e.x0=e.x,e.y0=e.y,this.redraw()},clean:function(){var t=this;[".linktree",".nodetree","text","circle"].forEach(function(e){t.internaldata.g.selectAll(e).transition().duration(t.duration).attr("opacity",0).remove()})},redraw:function(){var t=this.internaldata.root;t&&this.updateGraph(t)}},computed:{tree:function t(){var e=this.getSize(),t="cluster"===this.type?v.cluster():v.tree();return this.layout.size(t,e),t},margin:function(){return{x:this.marginX,y:this.marginY}}},watch:{data:function(t,e){this.onData(t)},type:function(){this.internaldata.tree&&(this.internaldata.tree=this.tree,this.redraw())}}},t.exports=e.default})},function(t,e,n){t.exports={default:n(13),__esModule:!0}},function(t,e,n){n(39),t.exports=n(5).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(9),i=n(35),o=n(34);t.exports=function(t){return function(e,n,a){var u,s=r(e),c=i(s.length),f=o(a,c);if(t&&n!=n){for(;c>f;)if(u=s[f++],u!=u)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(14);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(4),i=n(3).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(3),i=n(5),o=n(18),a=n(23),u="prototype",s=function(t,e,n){var c,f,l,d=t&s.F,p=t&s.G,h=t&s.S,v=t&s.P,y=t&s.B,x=t&s.W,g=p?i:i[e]||(i[e]={}),m=g[u],A=p?r:h?r[e]:(r[e]||{})[u];p&&(n=e);for(c in n)f=!d&&A&&void 0!==A[c],f&&c in g||(l=f?A[c]:n[c],g[c]=p&&"function"!=typeof A[c]?n[c]:y&&f?o(l,r):x&&A[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(l):v&&"function"==typeof l?o(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[c]=l,t&s.R&&m&&!m[c]&&a(m,c,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(26),i=n(31);t.exports=n(1)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(1)&&!n(2)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(29),i=n(27),o=n(30),a=n(36),u=n(7),s=Object.assign;t.exports=!s||n(2)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r})?function(t,e){for(var n=a(t),s=arguments.length,c=1,f=i.f,l=o.f;s>c;)for(var d,p=u(arguments[c++]),h=f?r(p).concat(f(p)):r(p),v=h.length,y=0;v>y;)l.call(p,d=h[y++])&&(n[d]=p[d]);return n}:s},function(t,e,n){var r=n(15),i=n(24),o=n(37),a=Object.defineProperty;e.f=n(1)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(22),i=n(9),o=n(16)(!1),a=n(32)("IE_PROTO");t.exports=function(t,e){var n,u=i(t),s=0,c=[];for(n in u)n!=a&&r(u,n)&&c.push(n);for(;e.length>s;)r(u,n=e[s++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(28),i=n(20);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(33)("keys"),i=n(38);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(3),i="__core-js_shared__",o=r[i]||(r[i]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(8),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(8),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(6);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(21);r(r.S+r.F,"Object",{assign:n(25)})},function(t,e,n){e=t.exports=n(41)(),e.push([t.id,".treeclass .nodetree circle{fill:#999;r:2.5}.treeclass .node--internal circle{cursor:pointer;fill:#555;r:3}.treeclass .nodetree text{font:10px sans-serif;cursor:pointer}.treeclass .nodetree.selected text{font-weight:700}.treeclass .node--internal text{text-shadow:0 1px 0 #fff,0 -1px 0 #fff,1px 0 0 #fff,-1px 0 0 #fff}.treeclass .linktree{fill:none;stroke:#555;stroke-opacity:.4;stroke-width:1.5px}","",{version:3,sources:["/./src/D3tree.vue"],names:[],mappings:"AACA,4BACE,UAAW,AACX,KAAO,CACR,AACD,kCACE,eAAgB,AAChB,UAAY,AACZ,GAAK,CACN,AACD,0BACE,qBAAsB,AACtB,cAAgB,CACjB,AACD,mCACE,eAAkB,CACnB,AACD,gCACE,iEAAsE,CACvE,AACD,qBACE,UAAW,AACX,YAAa,AACb,kBAAoB,AACpB,kBAAoB,CACrB",file:"D3tree.vue",sourcesContent:["\n.treeclass .nodetree  circle {\r\n  fill: #999;\r\n  r: 2.5;\n}\n.treeclass .node--internal circle {\r\n  cursor: pointer;\r\n  fill:  #555;\r\n  r: 3;\n}\n.treeclass .nodetree text {\r\n  font: 10px sans-serif;\r\n  cursor: pointer;\n}\n.treeclass .nodetree.selected text {\r\n  font-weight: bold;\n}\n.treeclass .node--internal text {\r\n  text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;\n}\n.treeclass .linktree {\r\n  fill: none;\r\n  stroke: #555;\r\n  stroke-opacity: 0.4;\r\n  stroke-width: 1.5px;\n}\r\n"],sourceRoot:"webpack://"}])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"viewport treeclass"})},staticRenderFns:[]}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=l[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(s(r.parts[o],e))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(s(r.parts[o],e));l[r.id]={id:r.id,refs:1,parts:a}}}}function i(t){for(var e=[],n={},r=0;r<t.length;r++){var i=t[r],o=i[0],a=i[1],u=i[2],s=i[3],c={css:a,media:u,sourceMap:s};n[o]?n[o].parts.push(c):e.push(n[o]={id:o,parts:[c]})}return e}function o(t,e){var n=h(),r=x[x.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),x.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function u(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function s(t,e){var n,r,i;if(e.singleton){var o=y++;n=v||(v=u(e)),r=c.bind(null,n,o,!1),i=c.bind(null,n,o,!0)}else n=u(e),r=f.bind(null,n),i=function(){a(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function c(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function f(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,x=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=i(t);return r(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var u=n[a],s=l[u.id];s.refs--,o.push(s)}if(t){var c=i(t);r(c,e)}for(var a=0;a<o.length;a++){var s=o[a];if(0===s.refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete l[s.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var r=n(40);"string"==typeof r&&(r=[[t.id,r,""]]);n(43)(r,{});r.locals&&(t.exports=r.locals)},function(e,n){e.exports=t},function(t,n){t.exports=e}])});
//# sourceMappingURL=vueD3Tree.js.map