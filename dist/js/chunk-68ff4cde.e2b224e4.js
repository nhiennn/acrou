(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68ff4cde"],{"056c":function(e,t,n){},1148:function(e,t,n){"use strict";var r=n("a691"),o=n("1d80");e.exports="".repeat||function(e){var t=String(o(this)),n="",i=r(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},1276:function(e,t,n){"use strict";var r=n("d784"),o=n("44e7"),i=n("825a"),a=n("1d80"),c=n("4840"),u=n("8aa5"),f=n("50c4"),l=n("14c3"),d=n("9263"),s=n("d039"),p=[].push,b=Math.min,g=4294967295,h=!s((function(){return!RegExp(g,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),i=void 0===n?g:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!o(e))return t.call(r,e,i);var c,u,f,l=[],s=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),b=0,h=new RegExp(e.source,s+"g");while(c=d.call(h,r)){if(u=h.lastIndex,u>b&&(l.push(r.slice(b,c.index)),c.length>1&&c.index<r.length&&p.apply(l,c.slice(1)),f=c[0].length,b=u,l.length>=i))break;h.lastIndex===c.index&&h.lastIndex++}return b===r.length?!f&&h.test("")||l.push(""):l.push(r.slice(b)),l.length>i?l.slice(0,i):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=a(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,o,n):r.call(String(o),t,n)},function(e,o){var a=n(r,e,this,o,r!==t);if(a.done)return a.value;var d=i(e),s=String(this),p=c(d,RegExp),m=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(h?"y":"g"),_=new p(h?d:"^(?:"+d.source+")",v),x=void 0===o?g:o>>>0;if(0===x)return[];if(0===s.length)return null===l(_,s)?[s]:[];var y=0,C=0,w=[];while(C<s.length){_.lastIndex=h?C:0;var E,A=l(_,h?s:s.slice(C));if(null===A||(E=b(f(_.lastIndex+(h?0:C)),s.length))===y)C=u(s,C,m);else{if(w.push(s.slice(y,C)),w.length===x)return w;for(var F=1;F<=A.length-1;F++)if(w.push(A[F]),w.length===x)return w;C=y=E}}return w.push(s.slice(y)),w}]}),!h)},"25c3":function(e,t,n){var r,o,i;
/**
 *  PDFObject v2.2.12
 *  https://github.com/pipwerks/PDFObject
 *  @license
 *  Copyright (c) 2008-2023 Philip Hutchison
 *  MIT-style license: http://pipwerks.mit-license.org/
 *  UMD module pattern from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
 */(function(n,a){o=[],r=a,i="function"===typeof r?r.apply(t,o):r,void 0===i||(e.exports=i)})(0,(function(){"use strict";if("undefined"===typeof window||void 0===window.navigator||void 0===window.navigator.userAgent||void 0===window.navigator.mimeTypes)return!1;let e="2.2.12",t=window.navigator,n=window.navigator.userAgent,r="ActiveXObject"in window,o=void 0!==window.Promise,i=void 0!==t.mimeTypes["application/pdf"],a=void 0!==t.platform&&"MacIntel"===t.platform&&void 0!==t.maxTouchPoints&&t.maxTouchPoints>1,c=a||/Mobi|Tablet|Android|iPad|iPhone/.test(n),u=!c&&void 0!==t.vendor&&/Apple/.test(t.vendor)&&/Safari/.test(n),f=!!(!c&&/irefox/.test(n)&&n.split("rv:").length>1)&&parseInt(n.split("rv:")[1].split(".")[0],10)>18,l=function(e){var t;try{t=new ActiveXObject(e)}catch(n){t=null}return t},d=function(){return!(!l("AcroPDF.PDF")&&!l("PDF.PdfCtrl"))},s=!c&&(o||f||i||r&&d()),p=function(e){let t,n="";if(e){for(t in e)e.hasOwnProperty(t)&&(n+=encodeURIComponent(t)+"="+encodeURIComponent(e[t])+"&");n&&(n="#"+n,n=n.slice(0,n.length-1))}return n},b=function(e,t){return t||console.log("[PDFObject] "+e),!1},g=function(e){while(e.firstChild)e.removeChild(e.firstChild)},h=function(e){let t=document.body;return"string"===typeof e?t=document.querySelector(e):void 0!==window.jQuery&&e instanceof jQuery&&e.length?t=e.get(0):void 0!==e.nodeType&&1===e.nodeType&&(t=e),t},m=function(e,t,n,r,o,i,a,c,u,f,l){g(t);let d=n;if("pdfjs"===e){let e=-1!==l.indexOf("?")?"&":"?";d=l+e+"file="+encodeURIComponent(n)+r}else d+=r;let s="pdfjs"===e||"iframe"===e?"iframe":"embed",p=document.createElement(s);if(p.className="pdfobject",p.type="application/pdf",p.title=c,p.src=d,a&&(p.id=a),"iframe"===s&&(p.allow="fullscreen",p.frameborder="0"),!u){let e="embed"===s?"overflow: auto;":"border: none;";t!==document.body?e+="width: "+o+"; height: "+i+";":e+="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;",p.style.cssText=e}let b=["className","type","title","src","style","id","allow","frameborder"];return f&&f.key&&-1===b.indexOf(f.key)&&p.setAttribute(f.key,"undefined"!==typeof f.value?f.value:""),t.classList.add("pdfobject-container"),t.appendChild(p),t.getElementsByTagName(s)[0]},v=function(e,t,n){let r=t||!1,o=n||{},i="string"===typeof o.id?o.id:"",a=o.page||!1,f=o.pdfOpenParams||{},l="string"!==typeof o.fallbackLink&&"boolean"!==typeof o.fallbackLink||o.fallbackLink,d=o.width||"100%",g=o.height||"100%",v=o.title||"Embedded PDF",_="boolean"!==typeof o.assumptionMode||o.assumptionMode,x="boolean"===typeof o.forcePDFJS&&o.forcePDFJS,y="boolean"===typeof o.supportRedirect&&o.supportRedirect,C="boolean"===typeof o.omitInlineStyles&&o.omitInlineStyles,w="boolean"===typeof o.suppressConsole&&o.suppressConsole,E="boolean"===typeof o.forceIframe&&o.forceIframe,A=o.PDFJS_URL||!1,F=h(r),R="",D="",S=o.customAttribute||{},B="<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>";if("string"!==typeof e)return b("URL is not valid",w);if(!F)return b("Target element cannot be determined",w);if(a&&(f.page=a),D=p(f),x&&A)return m("pdfjs",F,e,D,d,g,i,v,C,S,A);if(s||_&&!c){let t=E||y||u?"iframe":"embed";return m(t,F,e,D,d,g,i,v,C,S)}return A?m("pdfjs",F,e,D,d,g,i,v,C,S,A):(l&&(R="string"===typeof l?l:B,F.innerHTML=R.replace(/\[url\]/g,e)),b("This browser does not support embedded PDFs",w))};return{embed:function(e,t,n){return v(e,t,n)},pdfobjectversion:function(){return e}(),supportsPDFs:function(){return s}()}}))},"25f0":function(e,t,n){"use strict";var r=n("6eeb"),o=n("825a"),i=n("d039"),a=n("ad6d"),c="toString",u=RegExp.prototype,f=u[c],l=i((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),d=f.name!=c;(l||d)&&r(RegExp.prototype,c,(function(){var e=o(this),t=String(e.source),n=e.flags,r=String(void 0===n&&e instanceof RegExp&&!("flags"in u)?a.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"27ae":function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(e,t){module.exports=t(e)})("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:this,(function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.2",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(err){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var t={},n=0,r=e.length;n<r;n++)t[e.charAt(n)]=n;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)}t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var t=[0,2,1][e.length%3],n=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0),r=[b64chars.charAt(n>>>18),b64chars.charAt(n>>>12&63),t>=2?"=":b64chars.charAt(n>>>6&63),t>=1?"=":b64chars.charAt(63&n)];return r.join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=function(e){var t="[object Uint8Array]"===Object.prototype.toString.call(e);return t?e.toString("base64"):btoa(utob(String(e)))},encode=function(e,t){return t?_encode(String(e)).replace(/[+\/]/g,(function(e){return"+"==e?"-":"_"})).replace(/=/g,""):_encode(e)},encodeURI=function(e){return encode(e,!0)},re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=function(e){switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),n=t-65536;return fromCharCode(55296+(n>>>10))+fromCharCode(56320+(1023&n));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var t=e.length,n=t%4,r=(t>0?b64tab[e.charAt(0)]<<18:0)|(t>1?b64tab[e.charAt(1)]<<12:0)|(t>2?b64tab[e.charAt(2)]<<6:0)|(t>3?b64tab[e.charAt(3)]:0),o=[fromCharCode(r>>>16),fromCharCode(r>>>8&255),fromCharCode(255&r)];return o.length-=[0,0,2,1][n],o.join("")},_atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/\S{1,4}/g,cb_decode)},atob=function(e){return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(_atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,(function(e){return"-"==e?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"===typeof Object.defineProperty){var noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum((function(){return decode(this)}))),Object.defineProperty(String.prototype,"toBase64",noEnum((function(e){return encode(this,e)}))),Object.defineProperty(String.prototype,"toBase64URI",noEnum((function(){return encode(this,!0)})))}}return global["Meteor"]&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}}))}).call(this,__webpack_require__("c8ba"))},"408a":function(e,t,n){var r=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"44e7":function(e,t,n){var r=n("861d"),o=n("c6b6"),i=n("b622"),a=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==o(e))}},"45d8":function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return b})),n.d(t,"g",(function(){return g})),n.d(t,"f",(function(){return h})),n.d(t,"e",(function(){return m}));n("99af"),n("c975"),n("b680"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("1276");var r=n("9bd2"),o=n("27ae").Base64,i=["html","php","css","go","java","js","json","txt","sh","md"],a=["mp4","webm","mkv","m3u8","flv","mov","m4v"],c=["bmp","jpg","jpeg","png","gif"],u=["pdf"],f=function(e){return e.replace(/(.*)/,(function(e,t){return t.replace().replace(/\//g,"%2F").replace(/#/g,"%23")}))},l=function(e,t){return e=f(e),"application/vnd.google-apps.folder"===t.mimeType&&"/"!==e.substr(-1)&&(e+="/"),e},d=function(e){var t=e.split("/").pop(),n=t.split(".").pop().toLowerCase(),r=p(e);return-1!=i.indexOf("".concat(n))&&(e=e.replace(/\/(\d+:)\/.*/,(function(e,t){return"/".concat(t,"text/").concat(r)}))),-1!=u.indexOf("".concat(n))&&(e=e.replace(/\/(\d+:)\/.*/,(function(e,t){return"/".concat(t,"pdf/").concat(r)}))),-1!=a.indexOf("".concat(n))&&(e=e.replace(/\/(\d+:)\/.*/,(function(e,t){return"/".concat(t,"video/").concat(r)}))),-1!=c.indexOf("".concat(n))&&(e=e.replace(/\/(\d+:)\/.*/,(function(e,t){return"/".concat(t,"image/").concat(r)}))),e},s=function(e){var t=e.split("/").pop(),n=t.split(".").pop().toLowerCase(),r=i.concat.apply(i,a.concat(c,u));return-1!=r.indexOf("".concat(n))},p=function(e){return o.encodeURI(e)},b=function(e){return o.decode(e)};function g(e,t){var n=e.path,o=e.file,i=o?o.modifiedTime:null,a="file_path_"+n+i,c=i?localStorage.getItem(a):null;if(c)return t(c);r["a"].get(n).then((function(e){var n=e.data;localStorage.setItem(a,n),t(n)}))}function h(e){return e>=1e9?e=(e/1e9).toFixed(2)+" GB":e>=1e6?e=(e/1e6).toFixed(2)+" MB":e>=1e3?e=(e/1e3).toFixed(2)+" KB":e>1?e+=" bytes":1==e?e+=" byte":e="",e}function m(e,t){t=t||"YYYY-MM-DD HH:mm:ss","string"===typeof e&&(e=new Date(e)),"number"===typeof e&&(e=new Date(e));var n={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours()%12===0?12:e.getHours()%12,"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()},r={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"};for(var o in/(Y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(t)&&(t=t.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+r[e.getDay()+""])),n)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return t}},"4d63":function(e,t,n){var r=n("83ab"),o=n("da84"),i=n("94ca"),a=n("7156"),c=n("9bf2").f,u=n("241c").f,f=n("44e7"),l=n("ad6d"),d=n("9f7f"),s=n("6eeb"),p=n("d039"),b=n("69f3").set,g=n("2626"),h=n("b622"),m=h("match"),v=o.RegExp,_=v.prototype,x=/a/g,y=/a/g,C=new v(x)!==x,w=d.UNSUPPORTED_Y,E=r&&i("RegExp",!C||w||p((function(){return y[m]=!1,v(x)!=x||v(y)==y||"/a/i"!=v(x,"i")})));if(E){var A=function(e,t){var n,r=this instanceof A,o=f(e),i=void 0===t;if(!r&&o&&e.constructor===A&&i)return e;C?o&&!i&&(e=e.source):e instanceof A&&(i&&(t=l.call(e)),e=e.source),w&&(n=!!t&&t.indexOf("y")>-1,n&&(t=t.replace(/y/g,"")));var c=a(C?new v(e,t):v(e,t),r?this:_,A);return w&&n&&b(c,{sticky:n}),c},F=function(e){e in A||c(A,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},R=u(v),D=0;while(R.length>D)F(R[D++]);_.constructor=A,A.prototype=_,s(o,"RegExp",A)}g("RegExp")},5618:function(e,t,n){"use strict";var r=n("056c"),o=n.n(r);o.a},7156:function(e,t,n){var r=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var i,a;return o&&"function"==typeof(i=t.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(e,a),e}},b680:function(e,t,n){"use strict";var r=n("23e7"),o=n("a691"),i=n("408a"),a=n("1148"),c=n("d039"),u=1..toFixed,f=Math.floor,l=function(e,t,n){return 0===t?n:t%2===1?l(e,t-1,n*e):l(e*e,t/2,n)},d=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},s=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){u.call({})}));r({target:"Number",proto:!0,forced:s},{toFixed:function(e){var t,n,r,c,u=i(this),s=o(e),p=[0,0,0,0,0,0],b="",g="0",h=function(e,t){var n=-1,r=t;while(++n<6)r+=e*p[n],p[n]=r%1e7,r=f(r/1e7)},m=function(e){var t=6,n=0;while(--t>=0)n+=p[t],p[t]=f(n/e),n=n%e*1e7},v=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==p[e]){var n=String(p[e]);t=""===t?n:t+a.call("0",7-n.length)+n}return t};if(s<0||s>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(b="-",u=-u),u>1e-21)if(t=d(u*l(2,69,1))-69,n=t<0?u*l(2,-t,1):u/l(2,t,1),n*=4503599627370496,t=52-t,t>0){h(0,n),r=s;while(r>=7)h(1e7,0),r-=7;h(l(10,r,1),0),r=t-1;while(r>=23)m(1<<23),r-=23;m(1<<r),h(1,1),m(2),g=v()}else h(0,n),h(1<<-t,0),g=v()+a.call("0",s);return s>0?(c=g.length,g=b+(c<=s?"0."+a.call("0",s-c)+g:g.slice(0,c-s)+"."+g.slice(c-s))):g=b+g,g}})},fe7f:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content g2-content"},[n("div",{attrs:{id:"pdf-viewer"}})])}],i=n("45d8"),a=n("25c3"),c=n.n(a),u={data:function(){return{}},computed:{url:function(){return this.$route.params.path?Object(i["d"])(this.$route.params.path):""}},mounted:function(){c.a.embed(this.url,"#pdf-viewer",{height:"100vh"})},methods:{error:function(e){console.log(e)}}},f=u,l=(n("5618"),n("2877")),d=Object(l["a"])(f,r,o,!1,null,"f6f7a262",null);t["default"]=d.exports}}]);