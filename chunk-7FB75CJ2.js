import{$ as Tn,$a as Ci,Ab as W,Ac as _,B as So,Bb as Y,Bc as Ue,Cb as Z,Cc as Fe,Db as ct,Dc as Re,E as Ao,Eb as ut,Ec as Kt,Fb as dt,Gb as On,Ib as fe,J as To,Jb as j,Kb as ge,Lb as V,Mb as ht,Nb as pt,P as Fo,Qb as ue,Rb as $o,S as le,Sb as oe,T as ve,Ta as T,Tb as re,U as y,Ua as Mo,Ub as wi,V as P,Va as Ct,Vb as Vo,X as L,Xa as Be,Xb as wt,Ya as v,Yb as St,Z as te,_ as f,_a as Wt,a as E,b as Ee,ba as Io,ca as xo,cc as M,d as Sn,da as ce,dc as Bo,ea as _t,eb as U,ec as Xe,fa as Dt,fb as $,fc as Mn,g as _i,ga as Ye,gb as S,hb as xn,ia as D,ib as w,j as he,ka as Fn,kb as G,mb as Ei,n as An,na as Oo,nb as ko,o as Di,oa as J,pa as In,qb as I,ra as Ze,rb as C,rc as Uo,s as at,sa as Ae,sb as Ro,ta as pe,tb as Te,ub as lt,uc as Si,vb as ee,vc as jo,wb as Et,wc as At,xa as Ve,xb as Lo,xc as Ho,y as wo,yb as No,yc as zo,zb as Po}from"./chunk-RFMYBWBP.js";function Wo(e,n){return e?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}function Qe(e,n){if(e&&n){let t=i=>{Wo(e,i)||(e.classList?e.classList.add(i):e.className+=" "+i)};[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(t))}}function Ia(){return window.innerWidth-document.documentElement.offsetWidth}function Tt(e){for(let n of document?.styleSheets)try{for(let t of n?.cssRules)for(let i of t?.style)if(e.test(i))return{name:i,value:t.style.getPropertyValue(i).trim()}}catch{}return null}function rd(e="p-overflow-hidden"){let n=Tt(/-scrollbar-width$/);n?.name&&document.body.style.setProperty(n.name,Ia()+"px"),Qe(document.body,e)}function ft(e,n){if(e&&n){let t=i=>{e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")};[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(t))}}function sd(e="p-overflow-hidden"){let n=Tt(/-scrollbar-width$/);n?.name&&document.body.style.removeProperty(n.name),ft(document.body,e)}function Ko(e){let n={width:0,height:0};return e&&(e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),n}function Fi(){let e=window,n=document,t=n.documentElement,i=n.getElementsByTagName("body")[0],o=e.innerWidth||t.clientWidth||i.clientWidth,r=e.innerHeight||t.clientHeight||i.clientHeight;return{width:o,height:r}}function xa(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function Oa(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function ad(e,n,t=!0){var i,o,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Ko(e),l=a.height,c=a.width,u=n.offsetHeight,d=n.offsetWidth,p=n.getBoundingClientRect(),h=Oa(),m=xa(),g=Fi(),b,x,F="top";p.top+u+l>g.height?(b=p.top+h-l,F="bottom",b<0&&(b=h)):b=u+p.top+h,p.left+c>g.width?x=Math.max(0,p.left+m+d-c):x=p.left+m,e.style.top=b+"px",e.style.left=x+"px",e.style.transformOrigin=F,t&&(e.style.marginTop=F==="bottom"?`calc(${(o=(i=Tt(/-anchor-gutter$/))==null?void 0:i.value)!=null?o:"2px"} * -1)`:(s=(r=Tt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function qo(e,n){e&&(typeof n=="string"?e.style.cssText=n:Object.entries(n||{}).forEach(([t,i])=>e.style[t]=i))}function Ii(e,n){if(e instanceof HTMLElement){let t=e.offsetWidth;if(n){let i=getComputedStyle(e);t+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return t}return 0}function ld(e,n,t=!0){var i,o,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Ko(e),l=n.offsetHeight,c=n.getBoundingClientRect(),u=Fi(),d,p,h="top";c.top+l+a.height>u.height?(d=-1*a.height,h="bottom",c.top+d<0&&(d=-1*c.top)):d=l,a.width>u.width?p=c.left*-1:c.left+a.width>u.width?p=(c.left+a.width-u.width)*-1:p=0,e.style.top=d+"px",e.style.left=p+"px",e.style.transformOrigin=h,t&&(e.style.marginTop=h==="bottom"?`calc(${(o=(i=Tt(/-anchor-gutter$/))==null?void 0:i.value)!=null?o:"2px"} * -1)`:(s=(r=Tt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function Ft(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function xi(e){let n=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?n=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?n=e.el.nativeElement:n=e.el)),Ft(n)?n:void 0}function cd(e,n){let t=xi(e);if(t)t.appendChild(n);else throw new Error("Cannot append "+n+" to "+e)}var Ai=void 0;function ud(e){if(e){let n=getComputedStyle(e);return e.offsetHeight-e.clientHeight-parseFloat(n.borderTopWidth)-parseFloat(n.borderBottomWidth)}else{if(Ai!=null)return Ai;let n=document.createElement("div");qo(n,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(n);let t=n.offsetHeight-n.clientHeight;return document.body.removeChild(n),Ai=t,t}}var Ti=void 0;function Go(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(Ti!=null)return Ti;let n=document.createElement("div");qo(n,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(n);let t=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),Ti=t,t}}function dd(){if(window.getSelection){let e=window.getSelection()||{};e.empty?e.empty():e.removeAllRanges&&e.rangeCount>0&&e.getRangeAt(0).getClientRects().length>0&&e.removeAllRanges()}}function kn(e,n={}){if(Ft(e)){let t=(i,o)=>{var r,s;let a=(r=e?.$attrs)!=null&&r[i]?[(s=e?.$attrs)==null?void 0:s[i]]:[];return[o].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?t(i,c):Object.entries(c).map(([p,h])=>i==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([i,o])=>{if(o!=null){let r=i.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),o):i==="p-bind"||i==="pBind"?kn(e,o):(o=i==="class"?[...new Set(t("class",o))].join(" ").trim():i==="style"?t("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[i]=o),e.setAttribute(i,o))}})}}function hd(e,n={},...t){if(e){let i=document.createElement(e);return kn(i,n),i.append(...t),i}}function pd(e,n){if(e){e.style.opacity="0";let t=+new Date,i="0",o=function(){i=`${+e.style.opacity+(new Date().getTime()-t)/n}`,e.style.opacity=i,t=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}}function Ma(e,n){return Ft(e)?Array.from(e.querySelectorAll(n)):[]}function It(e,n){return Ft(e)?e.matches(n)?e:e.querySelector(n):null}function fd(e,n){e&&document.activeElement!==e&&e.focus(n)}function gd(e,n){if(Ft(e)){let t=e.getAttribute(n);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function Yo(e,n=""){let t=Ma(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`),i=[];for(let o of t)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&i.push(o);return i}function md(e,n){let t=Yo(e,n);return t.length>0?t[0]:null}function Oi(e){if(e){let n=e.offsetHeight,t=getComputedStyle(e);return n-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),n}return 0}function ka(e){if(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}return 0}function Ra(e){if(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}return 0}function Zo(e){if(e){let n=e.parentNode;return n&&n instanceof ShadowRoot&&n.host&&(n=n.host),n}return null}function bd(e){var n;if(e){let t=(n=Zo(e))==null?void 0:n.childNodes,i=0;if(t)for(let o=0;o<t.length;o++){if(t[o]===e)return i;t[o].nodeType===1&&i++}}return-1}function yd(e,n){let t=Yo(e,n);return t.length>0?t[t.length-1]:null}function Mi(e){if(e){let n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Rn(e,n){if(e){let t=e.offsetHeight;if(n){let i=getComputedStyle(e);t+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return t}return 0}function vd(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function La(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&Zo(e))}function _d(e,n){var t;if(e)switch(e){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return(t=n?.parentElement)==null?void 0:t.parentElement;default:if(typeof e=="string")return document.querySelector(e);let o=xi((r=>!!(r&&r.constructor&&r.call&&r.apply))(e)?e():e);return o?.nodeType===9||La(o)?o:void 0}}function ki(e){if(e){let n=e.offsetWidth,t=getComputedStyle(e);return n-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),n}return 0}function Dd(){return/(android)/i.test(navigator.userAgent)}function Na(e){return!!(e&&e.offsetParent!=null)}function Cd(e){return!Na(e)}function Ed(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}function wd(e){return e?getComputedStyle(e).direction==="rtl":!1}function Sd(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Ad(e,n){var t,i;if(e){let o=e.parentElement,r=Mi(o),s=Fi(),a=e.offsetParent?e.offsetWidth:Ra(e),l=e.offsetParent?e.offsetHeight:ka(e),c=Ii((t=o?.children)==null?void 0:t[0]),u=Rn((i=o?.children)==null?void 0:i[0]),d="",p="";r.left+c+a>s.width-Go()?r.left<a?n%2===1?d=r.left?"-"+r.left+"px":"100%":n%2===0&&(d=s.width-a-Go()+"px"):d="-100%":d="100%",e.getBoundingClientRect().top+u+l>s.height?p=`-${l-u}px`:p="0px",e.style.top=p,e.style.left=d}}function Xo(e){var n;e&&("remove"in Element.prototype?e.remove():(n=e.parentNode)==null||n.removeChild(e))}function Td(e,n){let t=xi(e);if(t)t.removeChild(n);else throw new Error("Cannot remove "+n+" from "+e)}function Fd(e,n){let t=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=t?parseFloat(t):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=e.getBoundingClientRect(),l=n.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-i-r,c=e.scrollTop,u=e.clientHeight,d=Rn(n);l<0?e.scrollTop=c+l:l+d>u&&(e.scrollTop=c+l-u+d)}function Qo(e,n="",t){Ft(e)&&t!==null&&t!==void 0&&e.setAttribute(n,t)}function Jo(){let e=new Map;return{on(n,t){let i=e.get(n);return i?i.push(t):i=[t],e.set(n,i),this},off(n,t){let i=e.get(n);return i&&i.splice(i.indexOf(t)>>>0,1),this},emit(n,t){let i=e.get(n);i&&i.slice().map(o=>{o(t)})},clear(){e.clear()}}}var Pa=Object.defineProperty,er=Object.getOwnPropertySymbols,$a=Object.prototype.hasOwnProperty,Va=Object.prototype.propertyIsEnumerable,tr=(e,n,t)=>n in e?Pa(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Ba=(e,n)=>{for(var t in n||(n={}))$a.call(n,t)&&tr(e,t,n[t]);if(er)for(var t of er(n))Va.call(n,t)&&tr(e,t,n[t]);return e};function ne(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function Ri(e,n,t=new WeakSet){if(e===n)return!0;if(!e||!n||typeof e!="object"||typeof n!="object"||t.has(e)||t.has(n))return!1;t.add(e).add(n);let i=Array.isArray(e),o=Array.isArray(n),r,s,a;if(i&&o){if(s=e.length,s!=n.length)return!1;for(r=s;r--!==0;)if(!Ri(e[r],n[r],t))return!1;return!0}if(i!=o)return!1;let l=e instanceof Date,c=n instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==n.getTime();let u=e instanceof RegExp,d=n instanceof RegExp;if(u!=d)return!1;if(u&&d)return e.toString()==n.toString();let p=Object.keys(e);if(s=p.length,s!==Object.keys(n).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!Ri(e[a],n[a],t))return!1;return!0}function Ua(e,n){return Ri(e,n)}function ir(e){return!!(e&&e.constructor&&e.call&&e.apply)}function k(e){return!ne(e)}function Je(e,n){if(!e||!n)return null;try{let t=e[n];if(k(t))return t}catch{}if(Object.keys(e).length){if(ir(n))return n(e);if(n.indexOf(".")===-1)return e[n];{let t=n.split("."),i=e;for(let o=0,r=t.length;o<r;++o){if(i==null)return null;i=i[t[o]]}return i}}return null}function Le(e,n,t){return t?Je(e,t)===Je(n,t):Ua(e,n)}function or(e,n){if(e!=null&&n&&n.length){for(let t of n)if(Le(e,t))return!0}return!1}function ja(e,n){let t=-1;if(n){for(let i=0;i<n.length;i++)if(n[i]===e){t=i;break}}return t}function Md(e,n){let t;if(k(e))try{t=e.findLast(n)}catch{t=[...e].reverse().find(n)}return t}function kd(e,n){let t=-1;if(k(e))try{t=e.findLastIndex(n)}catch{t=e.lastIndexOf([...e].reverse().find(n))}return t}function Ie(e,n=!0){return e instanceof Object&&e.constructor===Object&&(n||Object.keys(e).length!==0)}function we(e,...n){return ir(e)?e(...n):e}function et(e,n=!0){return typeof e=="string"&&(n||e!=="")}function nr(e){return et(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function Ln(e,n="",t={}){let i=nr(n).split("."),o=i.shift();return o?Ie(e)?Ln(we(e[Object.keys(e).find(r=>nr(r)===o)||""],t),i.join("."),t):void 0:we(e,t)}function Rd(e,n,t,i){if(t.length>0){let o=!1;for(let r=0;r<t.length;r++)if(ja(t[r],i)>n){t.splice(r,0,e),o=!0;break}o||t.push(e)}else t.push(e)}function Nn(e,n=!0){return Array.isArray(e)&&(n||e.length!==0)}function Ld(e){return e instanceof Date&&e.constructor===Date}function rr(e){return k(e)&&!isNaN(e)}function Nd(e=""){return k(e)&&e.length===1&&!!e.match(/\S| /)}function _e(e,n){if(n){let t=n.test(e);return n.lastIndex=0,t}return!1}function gt(...e){let n=(t={},i={})=>{let o=Ba({},t);return Object.keys(i).forEach(r=>{Ie(i[r])&&r in t&&Ie(t[r])?o[r]=n(t[r],i[r]):o[r]=i[r]}),o};return e.reduce((t,i,o)=>o===0?i:n(t,i),{})}function mt(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function De(e){if(e&&/[\xC0-\xFF\u0100-\u017E]/.test(e)){let t={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let i in t)e=e.replace(t[i],i)}return e}function Pd(e,n,t){e&&n!==t&&(t>=e.length&&(t%=e.length,n%=e.length),e.splice(t,0,e.splice(n,1)[0]))}function Pn(e){return et(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(n,t)=>t===0?n:"-"+n.toLowerCase()).toLowerCase():e}function Li(e){return et(e)?e.replace(/[A-Z]/g,(n,t)=>t===0?n:"."+n.toLowerCase()).toLowerCase():e}var $n={};function qt(e="pui_id_"){return $n.hasOwnProperty(e)||($n[e]=0),$n[e]++,`${e}${$n[e]}`}function Ha(){let e=[],n=(s,a,l=999)=>{let c=o(s,a,l),u=c.value+(c.key===s?0:l)+1;return e.push({key:s,value:u}),u},t=s=>{e=e.filter(a=>a.value!==s)},i=(s,a)=>o(s,a).value,o=(s,a,l=0)=>[...e].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,a,l)=>{a&&(a.style.zIndex=String(n(s,!0,l)))},clear:s=>{s&&(t(r(s)),s.style.zIndex="")},getCurrent:s=>i(s,!0)}}var Bd=Ha();var de=new L("");var lr=null;function bt(){return lr}function za(e){lr??=e}var Ni=class{},Yt=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||e)};static \u0275prov=y({token:e,factory:()=>f(cr),providedIn:"platform"})}return e})(),Ga=new L(""),cr=(()=>{class e extends Yt{_location;_history;_doc=f(de);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return bt().getBaseHref(this._doc)}onPopState(t){let i=bt().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=bt().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,o){this._history.pushState(t,i,o)}replaceState(t,i,o){this._history.replaceState(t,i,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||e)};static \u0275prov=y({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function Vn(e,n){return e?n?e.endsWith("/")?n.startsWith("/")?e+n.slice(1):e+n:n.startsWith("/")?e+n:`${e}/${n}`:e:n}function sr(e){let n=e.search(/#|\?|$/);return e[n-1]==="/"?e.slice(0,n-1)+e.slice(n):e}function xe(e){return e&&e[0]!=="?"?`?${e}`:e}var xt=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||e)};static \u0275prov=y({token:e,factory:()=>f(ur),providedIn:"root"})}return e})(),Bn=new L(""),ur=(()=>{class e extends xt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??f(de).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Vn(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+xe(this._platformLocation.search),o=this._platformLocation.hash;return o&&t?`${i}${o}`:i}pushState(t,i,o,r){let s=this.prepareExternalUrl(o+xe(r));this._platformLocation.pushState(t,i,s)}replaceState(t,i,o,r){let s=this.prepareExternalUrl(o+xe(r));this._platformLocation.replaceState(t,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||e)(te(Yt),te(Bn,8))};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),dr=(()=>{class e{_subject=new he;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=qa(sr(ar(i))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+xe(i))}normalize(t){return e.stripTrailingSlash(Ka(this._basePath,ar(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",o=null){this._locationStrategy.pushState(o,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+xe(i)),o)}replaceState(t,i="",o=null){this._locationStrategy.replaceState(o,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+xe(i)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(o=>o(t,i))}subscribe(t,i,o){return this._subject.subscribe({next:t,error:i??void 0,complete:o??void 0})}static normalizeQueryParams=xe;static joinWithSlash=Vn;static stripTrailingSlash=sr;static \u0275fac=function(i){return new(i||e)(te(xt))};static \u0275prov=y({token:e,factory:()=>Wa(),providedIn:"root"})}return e})();function Wa(){return new dr(te(xt))}function Ka(e,n){if(!e||!n.startsWith(e))return n;let t=n.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:n}function ar(e){return e.replace(/\/index.html$/,"")}function qa(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var Ya=(()=>{class e extends xt{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(t){let i=Vn(this._baseHref,t);return i.length>0?"#"+i:i}pushState(t,i,o,r){let s=this.prepareExternalUrl(o+xe(r))||this._platformLocation.pathname;this._platformLocation.pushState(t,i,s)}replaceState(t,i,o,r){let s=this.prepareExternalUrl(o+xe(r))||this._platformLocation.pathname;this._platformLocation.replaceState(t,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||e)(te(Yt),te(Bn,8))};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),yr={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},zi=function(e){return e[e.Decimal=0]="Decimal",e[e.Percent=1]="Percent",e[e.Currency=2]="Currency",e[e.Scientific=3]="Scientific",e}(zi||{});var se=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(se||{}),R=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(R||{}),me=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(me||{}),be={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function vr(e){return fe(e)[j.LocaleId]}function _r(e,n,t){let i=fe(e),o=[i[j.DayPeriodsFormat],i[j.DayPeriodsStandalone]],r=Se(o,n);return Se(r,t)}function Dr(e,n,t){let i=fe(e),o=[i[j.DaysFormat],i[j.DaysStandalone]],r=Se(o,n);return Se(r,t)}function Cr(e,n,t){let i=fe(e),o=[i[j.MonthsFormat],i[j.MonthsStandalone]],r=Se(o,n);return Se(r,t)}function Er(e,n){let i=fe(e)[j.Eras];return Se(i,n)}function Zt(e,n){let t=fe(e);return Se(t[j.DateFormat],n)}function Xt(e,n){let t=fe(e);return Se(t[j.TimeFormat],n)}function Qt(e,n){let i=fe(e)[j.DateTimeFormat];return Se(i,n)}function Ne(e,n){let t=fe(e),i=t[j.NumberSymbols][n];if(typeof i>"u"){if(n===be.CurrencyDecimal)return t[j.NumberSymbols][be.Decimal];if(n===be.CurrencyGroup)return t[j.NumberSymbols][be.Group]}return i}function wr(e,n){return fe(e)[j.NumberFormats][n]}function Za(e){return fe(e)[j.Currencies]}function Sr(e){if(!e[j.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[j.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Ar(e){let n=fe(e);return Sr(n),(n[j.ExtraData][2]||[]).map(i=>typeof i=="string"?Pi(i):[Pi(i[0]),Pi(i[1])])}function Tr(e,n,t){let i=fe(e);Sr(i);let o=[i[j.ExtraData][0],i[j.ExtraData][1]],r=Se(o,n)||[];return Se(r,t)||[]}function Se(e,n){for(let t=n;t>-1;t--)if(typeof e[t]<"u")return e[t];throw new Error("Locale data API: locale data undefined")}function Pi(e){let[n,t]=e.split(":");return{hours:+n,minutes:+t}}function Fr(e,n,t="en"){let i=Za(t)[e]||yr[e]||[],o=i[1];return n==="narrow"&&typeof o=="string"?o:i[0]||e}var Xa=2;function Ir(e){let n,t=yr[e];return t&&(n=t[2]),typeof n=="number"?n:Xa}var Qa=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Un={},Ja=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function xr(e,n,t,i){let o=ll(e);n=je(t,n)||n;let s=[],a;for(;n;)if(a=Ja.exec(n),a){s=s.concat(a.slice(1));let u=s.pop();if(!u)break;n=u}else{s.push(n);break}let l=o.getTimezoneOffset();i&&(l=Mr(i,l),o=al(o,i));let c="";return s.forEach(u=>{let d=rl(u);c+=d?d(o,t,l):u==="''"?"'":u.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function Wn(e,n,t){let i=new Date(0);return i.setFullYear(e,n,t),i.setHours(0,0,0),i}function je(e,n){let t=vr(e);if(Un[t]??={},Un[t][n])return Un[t][n];let i="";switch(n){case"shortDate":i=Zt(e,me.Short);break;case"mediumDate":i=Zt(e,me.Medium);break;case"longDate":i=Zt(e,me.Long);break;case"fullDate":i=Zt(e,me.Full);break;case"shortTime":i=Xt(e,me.Short);break;case"mediumTime":i=Xt(e,me.Medium);break;case"longTime":i=Xt(e,me.Long);break;case"fullTime":i=Xt(e,me.Full);break;case"short":let o=je(e,"shortTime"),r=je(e,"shortDate");i=jn(Qt(e,me.Short),[o,r]);break;case"medium":let s=je(e,"mediumTime"),a=je(e,"mediumDate");i=jn(Qt(e,me.Medium),[s,a]);break;case"long":let l=je(e,"longTime"),c=je(e,"longDate");i=jn(Qt(e,me.Long),[l,c]);break;case"full":let u=je(e,"fullTime"),d=je(e,"fullDate");i=jn(Qt(e,me.Full),[u,d]);break}return i&&(Un[t][n]=i),i}function jn(e,n){return n&&(e=e.replace(/\{([^}]+)}/g,function(t,i){return n!=null&&i in n?n[i]:t})),e}function Oe(e,n,t="-",i,o){let r="";(e<0||o&&e<=0)&&(o?e=-e+1:(e=-e,r=t));let s=String(e);for(;s.length<n;)s="0"+s;return i&&(s=s.slice(s.length-n)),r+s}function el(e,n){return Oe(e,3).substring(0,n)}function X(e,n,t=0,i=!1,o=!1){return function(r,s){let a=tl(e,r);if((t>0||a>-t)&&(a+=t),e===3)a===0&&t===-12&&(a=12);else if(e===6)return el(a,n);let l=Ne(s,be.MinusSign);return Oe(a,n,l,i,o)}}function tl(e,n){switch(e){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function N(e,n,t=se.Format,i=!1){return function(o,r){return nl(o,r,e,n,t,i)}}function nl(e,n,t,i,o,r){switch(t){case 2:return Cr(n,o,i)[e.getMonth()];case 1:return Dr(n,o,i)[e.getDay()];case 0:let s=e.getHours(),a=e.getMinutes();if(r){let c=Ar(n),u=Tr(n,o,i),d=c.findIndex(p=>{if(Array.isArray(p)){let[h,m]=p,g=s>=h.hours&&a>=h.minutes,b=s<m.hours||s===m.hours&&a<m.minutes;if(h.hours<m.hours){if(g&&b)return!0}else if(g||b)return!0}else if(p.hours===s&&p.minutes===a)return!0;return!1});if(d!==-1)return u[d]}return _r(n,o,i)[s<12?0:1];case 3:return Er(n,i)[e.getFullYear()<=0?0:1];default:let l=t;throw new Error(`unexpected translation type ${l}`)}}function Hn(e){return function(n,t,i){let o=-1*i,r=Ne(t,be.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(e){case 0:return(o>=0?"+":"")+Oe(s,2,r)+Oe(Math.abs(o%60),2,r);case 1:return"GMT"+(o>=0?"+":"")+Oe(s,1,r);case 2:return"GMT"+(o>=0?"+":"")+Oe(s,2,r)+":"+Oe(Math.abs(o%60),2,r);case 3:return i===0?"Z":(o>=0?"+":"")+Oe(s,2,r)+":"+Oe(Math.abs(o%60),2,r);default:throw new Error(`Unknown zone width "${e}"`)}}}var il=0,Gn=4;function ol(e){let n=Wn(e,il,1).getDay();return Wn(e,0,1+(n<=Gn?Gn:Gn+7)-n)}function Or(e){let n=e.getDay(),t=n===0?-3:Gn-n;return Wn(e.getFullYear(),e.getMonth(),e.getDate()+t)}function $i(e,n=!1){return function(t,i){let o;if(n){let r=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,s=t.getDate();o=1+Math.floor((s+r)/7)}else{let r=Or(t),s=ol(r.getFullYear()),a=r.getTime()-s.getTime();o=1+Math.round(a/6048e5)}return Oe(o,e,Ne(i,be.MinusSign))}}function zn(e,n=!1){return function(t,i){let r=Or(t).getFullYear();return Oe(r,e,Ne(i,be.MinusSign),n)}}var Vi={};function rl(e){if(Vi[e])return Vi[e];let n;switch(e){case"G":case"GG":case"GGG":n=N(3,R.Abbreviated);break;case"GGGG":n=N(3,R.Wide);break;case"GGGGG":n=N(3,R.Narrow);break;case"y":n=X(0,1,0,!1,!0);break;case"yy":n=X(0,2,0,!0,!0);break;case"yyy":n=X(0,3,0,!1,!0);break;case"yyyy":n=X(0,4,0,!1,!0);break;case"Y":n=zn(1);break;case"YY":n=zn(2,!0);break;case"YYY":n=zn(3);break;case"YYYY":n=zn(4);break;case"M":case"L":n=X(1,1,1);break;case"MM":case"LL":n=X(1,2,1);break;case"MMM":n=N(2,R.Abbreviated);break;case"MMMM":n=N(2,R.Wide);break;case"MMMMM":n=N(2,R.Narrow);break;case"LLL":n=N(2,R.Abbreviated,se.Standalone);break;case"LLLL":n=N(2,R.Wide,se.Standalone);break;case"LLLLL":n=N(2,R.Narrow,se.Standalone);break;case"w":n=$i(1);break;case"ww":n=$i(2);break;case"W":n=$i(1,!0);break;case"d":n=X(2,1);break;case"dd":n=X(2,2);break;case"c":case"cc":n=X(7,1);break;case"ccc":n=N(1,R.Abbreviated,se.Standalone);break;case"cccc":n=N(1,R.Wide,se.Standalone);break;case"ccccc":n=N(1,R.Narrow,se.Standalone);break;case"cccccc":n=N(1,R.Short,se.Standalone);break;case"E":case"EE":case"EEE":n=N(1,R.Abbreviated);break;case"EEEE":n=N(1,R.Wide);break;case"EEEEE":n=N(1,R.Narrow);break;case"EEEEEE":n=N(1,R.Short);break;case"a":case"aa":case"aaa":n=N(0,R.Abbreviated);break;case"aaaa":n=N(0,R.Wide);break;case"aaaaa":n=N(0,R.Narrow);break;case"b":case"bb":case"bbb":n=N(0,R.Abbreviated,se.Standalone,!0);break;case"bbbb":n=N(0,R.Wide,se.Standalone,!0);break;case"bbbbb":n=N(0,R.Narrow,se.Standalone,!0);break;case"B":case"BB":case"BBB":n=N(0,R.Abbreviated,se.Format,!0);break;case"BBBB":n=N(0,R.Wide,se.Format,!0);break;case"BBBBB":n=N(0,R.Narrow,se.Format,!0);break;case"h":n=X(3,1,-12);break;case"hh":n=X(3,2,-12);break;case"H":n=X(3,1);break;case"HH":n=X(3,2);break;case"m":n=X(4,1);break;case"mm":n=X(4,2);break;case"s":n=X(5,1);break;case"ss":n=X(5,2);break;case"S":n=X(6,1);break;case"SS":n=X(6,2);break;case"SSS":n=X(6,3);break;case"Z":case"ZZ":case"ZZZ":n=Hn(0);break;case"ZZZZZ":n=Hn(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":n=Hn(1);break;case"OOOO":case"ZZZZ":case"zzzz":n=Hn(2);break;default:return null}return Vi[e]=n,n}function Mr(e,n){e=e.replace(/:/g,"");let t=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(t)?n:t}function sl(e,n){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+n),e}function al(e,n,t){let o=e.getTimezoneOffset(),r=Mr(n,o);return sl(e,-1*(r-o))}function ll(e){if(hr(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[o,r=1,s=1]=e.split("-").map(a=>+a);return Wn(o,r-1,s)}let t=parseFloat(e);if(!isNaN(e-t))return new Date(t);let i;if(i=e.match(Qa))return cl(i)}let n=new Date(e);if(!hr(n))throw new Error(`Unable to convert "${e}" into a date`);return n}function cl(e){let n=new Date(0),t=0,i=0,o=e[8]?n.setUTCFullYear:n.setFullYear,r=e[8]?n.setUTCHours:n.setHours;e[9]&&(t=Number(e[9]+e[10]),i=Number(e[9]+e[11])),o.call(n,Number(e[1]),Number(e[2])-1,Number(e[3]));let s=Number(e[4]||0)-t,a=Number(e[5]||0)-i,l=Number(e[6]||0),c=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return r.call(n,s,a,l,c),n}function hr(e){return e instanceof Date&&!isNaN(e.valueOf())}var ul=/^(\d+)?\.((\d+)(-(\d+))?)?$/,pr=22,Kn=".",Jt="0",dl=";",hl=",",Bi="#",fr="\xA4";function pl(e,n,t,i,o,r,s=!1){let a="",l=!1;if(!isFinite(e))a=Ne(t,be.Infinity);else{let c=ml(e);s&&(c=gl(c));let u=n.minInt,d=n.minFrac,p=n.maxFrac;if(r){let F=r.match(ul);if(F===null)throw new Error(`${r} is not a valid digit info`);let O=F[1],z=F[3],ae=F[5];O!=null&&(u=Ui(O)),z!=null&&(d=Ui(z)),ae!=null?p=Ui(ae):z!=null&&d>p&&(p=d)}bl(c,d,p);let h=c.digits,m=c.integerLen,g=c.exponent,b=[];for(l=h.every(F=>!F);m<u;m++)h.unshift(0);for(;m<0;m++)h.unshift(0);m>0?b=h.splice(m,h.length):(b=h,h=[0]);let x=[];for(h.length>=n.lgSize&&x.unshift(h.splice(-n.lgSize,h.length).join(""));h.length>n.gSize;)x.unshift(h.splice(-n.gSize,h.length).join(""));h.length&&x.unshift(h.join("")),a=x.join(Ne(t,i)),b.length&&(a+=Ne(t,o)+b.join("")),g&&(a+=Ne(t,be.Exponential)+"+"+g)}return e<0&&!l?a=n.negPre+a+n.negSuf:a=n.posPre+a+n.posSuf,a}function kr(e,n,t,i,o){let r=wr(n,zi.Currency),s=fl(r,Ne(n,be.MinusSign));return s.minFrac=Ir(i),s.maxFrac=s.minFrac,pl(e,s,n,be.CurrencyGroup,be.CurrencyDecimal,o).replace(fr,t).replace(fr,"").trim()}function fl(e,n="-"){let t={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},i=e.split(dl),o=i[0],r=i[1],s=o.indexOf(Kn)!==-1?o.split(Kn):[o.substring(0,o.lastIndexOf(Jt)+1),o.substring(o.lastIndexOf(Jt)+1)],a=s[0],l=s[1]||"";t.posPre=a.substring(0,a.indexOf(Bi));for(let u=0;u<l.length;u++){let d=l.charAt(u);d===Jt?t.minFrac=t.maxFrac=u+1:d===Bi?t.maxFrac=u+1:t.posSuf+=d}let c=a.split(hl);if(t.gSize=c[1]?c[1].length:0,t.lgSize=c[2]||c[1]?(c[2]||c[1]).length:0,r){let u=o.length-t.posPre.length-t.posSuf.length,d=r.indexOf(Bi);t.negPre=r.substring(0,d).replace(/'/g,""),t.negSuf=r.slice(d+u).replace(/'/g,"")}else t.negPre=n+t.posPre,t.negSuf=t.posSuf;return t}function gl(e){if(e.digits[0]===0)return e;let n=e.digits.length-e.integerLen;return e.exponent?e.exponent+=2:(n===0?e.digits.push(0,0):n===1&&e.digits.push(0),e.integerLen+=2),e}function ml(e){let n=Math.abs(e)+"",t=0,i,o,r,s,a;for((o=n.indexOf(Kn))>-1&&(n=n.replace(Kn,"")),(r=n.search(/e/i))>0?(o<0&&(o=r),o+=+n.slice(r+1),n=n.substring(0,r)):o<0&&(o=n.length),r=0;n.charAt(r)===Jt;r++);if(r===(a=n.length))i=[0],o=1;else{for(a--;n.charAt(a)===Jt;)a--;for(o-=r,i=[],s=0;r<=a;r++,s++)i[s]=Number(n.charAt(r))}return o>pr&&(i=i.splice(0,pr-1),t=o-1,o=1),{digits:i,exponent:t,integerLen:o}}function bl(e,n,t){if(n>t)throw new Error(`The minimum number of digits after fraction (${n}) is higher than the maximum (${t}).`);let i=e.digits,o=i.length-e.integerLen,r=Math.min(Math.max(n,o),t),s=r+e.integerLen,a=i[s];if(s>0){i.splice(Math.max(e.integerLen,s));for(let d=s;d<i.length;d++)i[d]=0}else{o=Math.max(0,o),e.integerLen=1,i.length=Math.max(1,s=r+1),i[0]=0;for(let d=1;d<s;d++)i[d]=0}if(a>=5)if(s-1<0){for(let d=0;d>s;d--)i.unshift(0),e.integerLen++;i.unshift(1),e.integerLen++}else i[s-1]++;for(;o<Math.max(0,r);o++)i.push(0);let l=r!==0,c=n+e.integerLen,u=i.reduceRight(function(d,p,h,m){return p=p+d,m[h]=p<10?p:p-10,l&&(m[h]===0&&h>=c?m.pop():l=!1),p>=10?1:0},0);u&&(i.unshift(u),e.integerLen++)}function Ui(e){let n=parseInt(e);if(isNaN(n))throw new Error("Invalid integer literal when parsing "+e);return n}var ji=/\s+/,gr=[],yt=(()=>{class e{_ngEl;_renderer;initialClasses=gr;rawClass;stateMap=new Map;constructor(t,i){this._ngEl=t,this._renderer=i}set klass(t){this.initialClasses=t!=null?t.trim().split(ji):gr}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(ji):t}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let i of t)this._updateState(i,!0);else if(t!=null)for(let i of Object.keys(t))this._updateState(i,!!t[i]);this._applyStateDiff()}_updateState(t,i){let o=this.stateMap.get(t);o!==void 0?(o.enabled!==i&&(o.changed=!0,o.enabled=i),o.touched=!0):this.stateMap.set(t,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let i=t[0],o=t[1];o.changed?(this._toggleClass(i,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),o.touched=!1}}_toggleClass(t,i){t=t.trim(),t.length>0&&t.split(ji).forEach(o=>{i?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(i){return new(i||e)(v(Ae),v(Be))};static \u0275dir=S({type:e,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return e})();var qn=class{$implicit;ngForOf;index;count;constructor(n,t,i,o){this.$implicit=n,this.ngForOf=t,this.index=i,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Rr=(()=>{class e{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,i,o){this._viewContainer=t,this._template=i,this._differs=o}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((o,r,s)=>{if(o.previousIndex==null)i.createEmbeddedView(this._template,new qn(o.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)i.remove(r===null?void 0:r);else if(r!==null){let a=i.get(r);i.move(a,s),mr(a,o)}});for(let o=0,r=i.length;o<r;o++){let a=i.get(o).context;a.index=o,a.count=r,a.ngForOf=this._ngForOf}t.forEachIdentityChange(o=>{let r=i.get(o.currentIndex);mr(r,o)})}static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||e)(v(Wt),v(Ct),v(Ho))};static \u0275dir=S({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return e})();function mr(e,n){e.context.$implicit=n.item}var en=(()=>{class e{_viewContainer;_context=new Yn;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,i){this._viewContainer=t,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){br(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){br(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||e)(v(Wt),v(Ct))};static \u0275dir=S({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return e})(),Yn=class{$implicit=null;ngIf=null};function br(e,n){if(e&&!e.createEmbeddedView)throw new le(2020,!1)}var Hi=class{_viewContainerRef;_templateRef;_created=!1;constructor(n,t){this._viewContainerRef=n,this._templateRef=t}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(n){n&&!this._created?this.create():!n&&this._created&&this.destroy()}},Lr=(()=>{class e{_defaultViews=[];_defaultUsed=!1;_caseCount=0;_lastCaseCheckIndex=0;_lastCasesMatched=!1;_ngSwitch;set ngSwitch(t){this._ngSwitch=t,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(t){this._defaultViews.push(t)}_matchCase(t){let i=t===this._ngSwitch;return this._lastCasesMatched||=i,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),i}_updateDefaultCases(t){if(this._defaultViews.length>0&&t!==this._defaultUsed){this._defaultUsed=t;for(let i of this._defaultViews)i.enforceState(t)}}static \u0275fac=function(i){return new(i||e)};static \u0275dir=S({type:e,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}})}return e})(),yl=(()=>{class e{ngSwitch;_view;ngSwitchCase;constructor(t,i,o){this.ngSwitch=o,o._addCase(),this._view=new Hi(t,i)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static \u0275fac=function(i){return new(i||e)(v(Wt),v(Ct),v(Lr,9))};static \u0275dir=S({type:e,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}})}return e})();var Gi=(()=>{class e{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(t,i,o){this._ngEl=t,this._differs=i,this._renderer=o}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,i){let[o,r]=t.split("."),s=o.indexOf("-")===-1?void 0:Mo.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,r?`${i}${r}`:i,s):this._renderer.removeStyle(this._ngEl.nativeElement,o,s)}_applyChanges(t){t.forEachRemovedItem(i=>this._setStyle(i.key,null)),t.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),t.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||e)(v(Ae),v(zo),v(Be))};static \u0275dir=S({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return e})(),He=(()=>{class e{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,i,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,o):!1,get:(t,i,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,o)}})}static \u0275fac=function(i){return new(i||e)(v(Wt))};static \u0275dir=S({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ce]})}return e})();function Wi(e,n){return new le(2100,!1)}var vl="mediumDate",Nr=new L(""),Pr=new L(""),_l=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(t,i,o){this.locale=t,this.defaultTimezone=i,this.defaultOptions=o}transform(t,i,o,r){if(t==null||t===""||t!==t)return null;try{let s=i??this.defaultOptions?.dateFormat??vl,a=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return xr(t,s,r||this.locale,a)}catch(s){throw Wi(e,s.message)}}static \u0275fac=function(i){return new(i||e)(v(Si,16),v(Nr,24),v(Pr,24))};static \u0275pipe=xn({name:"date",type:e,pure:!0})}return e})();var Dl=(()=>{class e{_locale;_defaultCurrencyCode;constructor(t,i="USD"){this._locale=t,this._defaultCurrencyCode=i}transform(t,i=this._defaultCurrencyCode,o="symbol",r,s){if(!Cl(t))return null;s||=this._locale,typeof o=="boolean"&&(o=o?"symbol":"code");let a=i||this._defaultCurrencyCode;o!=="code"&&(o==="symbol"||o==="symbol-narrow"?a=Fr(a,o==="symbol"?"wide":"narrow",s):a=o);try{let l=El(t);return kr(l,s,a,i,r)}catch(l){throw Wi(e,l.message)}}static \u0275fac=function(i){return new(i||e)(v(Si,16),v(jo,16))};static \u0275pipe=xn({name:"currency",type:e,pure:!0})}return e})();function Cl(e){return!(e==null||e===""||e!==e)}function El(e){if(typeof e=="string"&&!isNaN(Number(e)-parseFloat(e)))return Number(e);if(typeof e!="number")throw new Error(`${e} is not a number`);return e}var wl=(()=>{class e{transform(t,i,o){if(t==null)return null;if(!(typeof t=="string"||Array.isArray(t)))throw Wi(e,t);return t.slice(i,o)}static \u0275fac=function(i){return new(i||e)};static \u0275pipe=xn({name:"slice",type:e,pure:!1})}return e})();var ye=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=$({type:e});static \u0275inj=P({})}return e})();function Ki(e,n){n=encodeURIComponent(n);for(let t of e.split(";")){let i=t.indexOf("="),[o,r]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(o.trim()===n)return decodeURIComponent(r)}return null}var $r="browser",Vr="server";function nn(e){return e===$r}function qi(e){return e===Vr}var tn=class{};var pp=(()=>{class e{static \u0275prov=y({token:e,providedIn:"root",factory:()=>new Yi(f(de),window)})}return e})(),Yi=class{document;window;offset=()=>[0,0];constructor(n,t){this.document=n,this.window=t}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n){this.window.scrollTo(n[0],n[1])}scrollToAnchor(n){let t=Al(this.document,n);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(n){this.window.history.scrollRestoration=n}scrollToElement(n){let t=n.getBoundingClientRect(),i=t.left+this.window.pageXOffset,o=t.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(i-r[0],o-r[1])}};function Al(e,n){let t=e.getElementById(n)||e.getElementsByName(n)[0];if(t)return t;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let i=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),o=i.currentNode;for(;o;){let r=o.shadowRoot;if(r){let s=r.getElementById(n)||r.querySelector(`[name="${n}"]`);if(s)return s}o=i.nextNode()}}return null}var Br=["*"],Tl=function(e){return e[e.ACCEPT=0]="ACCEPT",e[e.REJECT=1]="REJECT",e[e.CANCEL=2]="CANCEL",e}(Tl||{}),Dp=(()=>{class e{requireConfirmationSource=new he;acceptConfirmationSource=new he;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(t){return this.requireConfirmationSource.next(t),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var ie=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})(),Cp=(()=>{class e{static AND="and";static OR="or"}return e})(),Ep=(()=>{class e{filter(t,i,o,r,s){let a=[];if(t)for(let l of t)for(let c of i){let u=Je(l,c);if(this.filters[r](u,o,s)){a.push(l);break}}return a}filters={startsWith:(t,i,o)=>{if(i==null||i.trim()==="")return!0;if(t==null)return!1;let r=De(i.toString()).toLocaleLowerCase(o);return De(t.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(t,i,o)=>{if(i==null||typeof i=="string"&&i.trim()==="")return!0;if(t==null)return!1;let r=De(i.toString()).toLocaleLowerCase(o);return De(t.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(t,i,o)=>{if(i==null||typeof i=="string"&&i.trim()==="")return!0;if(t==null)return!1;let r=De(i.toString()).toLocaleLowerCase(o);return De(t.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(t,i,o)=>{if(i==null||i.trim()==="")return!0;if(t==null)return!1;let r=De(i.toString()).toLocaleLowerCase(o),s=De(t.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(t,i,o)=>i==null||typeof i=="string"&&i.trim()===""?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()===i.getTime():t==i?!0:De(t.toString()).toLocaleLowerCase(o)==De(i.toString()).toLocaleLowerCase(o),notEquals:(t,i,o)=>i==null||typeof i=="string"&&i.trim()===""?!1:t==null?!0:t.getTime&&i.getTime?t.getTime()!==i.getTime():t==i?!1:De(t.toString()).toLocaleLowerCase(o)!=De(i.toString()).toLocaleLowerCase(o),in:(t,i)=>{if(i==null||i.length===0)return!0;for(let o=0;o<i.length;o++)if(Le(t,i[o]))return!0;return!1},between:(t,i)=>i==null||i[0]==null||i[1]==null?!0:t==null?!1:t.getTime?i[0].getTime()<=t.getTime()&&t.getTime()<=i[1].getTime():i[0]<=t&&t<=i[1],lt:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()<i.getTime():t<i,lte:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()<=i.getTime():t<=i,gt:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()>i.getTime():t>i,gte:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()>=i.getTime():t>=i,is:(t,i,o)=>this.filters.equals(t,i,o),isNot:(t,i,o)=>this.filters.notEquals(t,i,o),before:(t,i,o)=>this.filters.lt(t,i,o),after:(t,i,o)=>this.filters.gt(t,i,o),dateIs:(t,i)=>i==null?!0:t==null?!1:t.toDateString()===i.toDateString(),dateIsNot:(t,i)=>i==null?!0:t==null?!1:t.toDateString()!==i.toDateString(),dateBefore:(t,i)=>i==null?!0:t==null?!1:t.getTime()<i.getTime(),dateAfter:(t,i)=>i==null?!0:t==null?!1:(t.setHours(0,0,0,0),t.getTime()>i.getTime())};register(t,i){this.filters[t]=i}static \u0275fac=function(i){return new(i||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),wp=(()=>{class e{messageSource=new he;clearSource=new he;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(t){t&&this.messageSource.next(t)}addAll(t){t&&t.length&&this.messageSource.next(t)}clear(t){this.clearSource.next(t||null)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),Sp=(()=>{class e{clickSource=new he;clickObservable=this.clickSource.asObservable();add(t){t&&this.clickSource.next(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ap=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=U({type:e,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Br,decls:1,vars:0,template:function(i,o){i&1&&(ht(),pt(0))},encapsulation:2})}return e})(),Tp=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=U({type:e,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Br,decls:1,vars:0,template:function(i,o){i&1&&(ht(),pt(0))},encapsulation:2})}return e})(),tt=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(i){return new(i||e)(v(Ct))};static \u0275dir=S({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),Q=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=$({type:e});static \u0275inj=P({imports:[ye]})}return e})(),Fp=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return e})(),Ip=(()=>{class e{dragStartSource=new he;dragStopSource=new he;dragStart$=this.dragStartSource.asObservable();dragStop$=this.dragStopSource.asObservable();startDrag(t){this.dragStartSource.next(t)}stopDrag(t){this.dragStopSource.next(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var Fl=Object.defineProperty,Il=Object.defineProperties,xl=Object.getOwnPropertyDescriptors,Xn=Object.getOwnPropertySymbols,Hr=Object.prototype.hasOwnProperty,zr=Object.prototype.propertyIsEnumerable,Ur=(e,n,t)=>n in e?Fl(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,B=(e,n)=>{for(var t in n||(n={}))Hr.call(n,t)&&Ur(e,t,n[t]);if(Xn)for(var t of Xn(n))zr.call(n,t)&&Ur(e,t,n[t]);return e},Mt=(e,n)=>Il(e,xl(n)),ze=(e,n)=>{var t={};for(var i in e)Hr.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&Xn)for(var i of Xn(e))n.indexOf(i)<0&&zr.call(e,i)&&(t[i]=e[i]);return t};var Ol=Jo(),Ce=Ol;function jr(e,n){Nn(e)?e.push(...n||[]):Ie(e)&&Object.assign(e,n)}function Ml(e){return Ie(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function kl(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Zi(e="",n=""){return kl(`${et(e,!1)&&et(n,!1)?`${e}-`:e}${n}`)}function Gr(e="",n=""){return`--${Zi(e,n)}`}function Rl(e=""){let n=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(n+t)%2!==0}function Wr(e,n="",t="",i=[],o){if(et(e)){let r=/{([^}]*)}/g,s=e.trim();if(Rl(s))return;if(_e(s,r)){let a=s.replaceAll(r,u=>{let p=u.replace(/{|}/g,"").split(".").filter(h=>!i.some(m=>_e(h,m)));return`var(${Gr(t,Pn(p.join("-")))}${k(o)?`, ${o}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return _e(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(rr(e))return e}function Ll(e,n,t){et(n,!1)&&e.push(`${n}:${t};`)}function Ot(e,n){return e?`${e}{${n}}`:""}var $p=e=>{var n;let t=A.getTheme(),i=Xi(t,e,void 0,"variable"),o=(n=i?.match(/--[\w-]+/g))==null?void 0:n[0],r=Xi(t,e,void 0,"value");return{name:o,variable:i,value:r}},kt=(...e)=>Xi(A.getTheme(),...e),Xi=(e={},n,t,i)=>{if(n){let{variable:o,options:r}=A.defaults||{},{prefix:s,transform:a}=e?.options||r||{},c=_e(n,/{([^}]*)}/g)?n:`{${n}}`;return i==="value"||ne(i)&&a==="strict"?A.getTokenValue(n):Wr(c,void 0,s,[o.excludedKeyRegex],t)}return""};var Nl=(e={})=>{let{preset:n,options:t}=e;return{preset(i){return n=n?gt(n,i):i,this},options(i){return t=t?B(B({},t),i):i,this},primaryPalette(i){let{semantic:o}=n||{};return n=Mt(B({},n),{semantic:Mt(B({},o),{primary:i})}),this},surfacePalette(i){var o,r;let{semantic:s}=n||{},a=i?.hasOwnProperty("light")?i?.light:i,l=i?.hasOwnProperty("dark")?i?.dark:i,c={colorScheme:{light:B(B({},(o=s?.colorScheme)==null?void 0:o.light),!!a&&{surface:a}),dark:B(B({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return n=Mt(B({},n),{semantic:B(B({},s),c)}),this},define({useDefaultPreset:i=!1,useDefaultOptions:o=!1}={}){return{preset:i?A.getPreset():n,options:o?A.getOptions():t}},update({mergePresets:i=!0,mergeOptions:o=!0}={}){let r={preset:i?gt(A.getPreset(),n):n,options:o?B(B({},A.getOptions()),t):t};return A.setTheme(r),r},use(i){let o=this.define(i);return A.setTheme(o),o}}};function Pl(e,n={}){let t=A.defaults.variable,{prefix:i=t.prefix,selector:o=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=n,s=(c,u="")=>Object.entries(c).reduce((d,[p,h])=>{let m=_e(p,r)?Zi(u):Zi(u,Pn(p)),g=Ml(h);if(Ie(g)){let{variables:b,tokens:x}=s(g,m);jr(d.tokens,x),jr(d.variables,b)}else d.tokens.push((i?m.replace(`${i}-`,""):m).replaceAll("-",".")),Ll(d.variables,Gr(m),Wr(g,m,i,[r]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(e,i);return{value:a,tokens:l,declarations:a.join(""),css:Ot(o,a.join(""))}}var Me={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let n=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var i;return(i=n.map(o=>o.resolve(t)).find(o=>o.matched))!=null?i:this.rules.custom.resolve(t)})}},_toVariables(e,n){return Pl(e,{prefix:n?.prefix})},getCommon({name:e="",theme:n={},params:t,set:i,defaults:o}){var r,s,a,l,c,u,d;let{preset:p,options:h}=n,m,g,b,x,F,O,z;if(k(p)&&h.transform!=="strict"){let{primitive:ae,semantic:ke,extend:st}=p,Ht=ke||{},{colorScheme:pn}=Ht,fn=ze(Ht,["colorScheme"]),gn=st||{},{colorScheme:mn}=gn,zt=ze(gn,["colorScheme"]),Gt=pn||{},{dark:bn}=Gt,yn=ze(Gt,["dark"]),vn=mn||{},{dark:_n}=vn,Dn=ze(vn,["dark"]),Cn=k(ae)?this._toVariables({primitive:ae},h):{},En=k(fn)?this._toVariables({semantic:fn},h):{},wn=k(yn)?this._toVariables({light:yn},h):{},_o=k(bn)?this._toVariables({dark:bn},h):{},Do=k(zt)?this._toVariables({semantic:zt},h):{},Co=k(Dn)?this._toVariables({light:Dn},h):{},Eo=k(_n)?this._toVariables({dark:_n},h):{},[da,ha]=[(r=Cn.declarations)!=null?r:"",Cn.tokens],[pa,fa]=[(s=En.declarations)!=null?s:"",En.tokens||[]],[ga,ma]=[(a=wn.declarations)!=null?a:"",wn.tokens||[]],[ba,ya]=[(l=_o.declarations)!=null?l:"",_o.tokens||[]],[va,_a]=[(c=Do.declarations)!=null?c:"",Do.tokens||[]],[Da,Ca]=[(u=Co.declarations)!=null?u:"",Co.tokens||[]],[Ea,wa]=[(d=Eo.declarations)!=null?d:"",Eo.tokens||[]];m=this.transformCSS(e,da,"light","variable",h,i,o),g=ha;let Sa=this.transformCSS(e,`${pa}${ga}`,"light","variable",h,i,o),Aa=this.transformCSS(e,`${ba}`,"dark","variable",h,i,o);b=`${Sa}${Aa}`,x=[...new Set([...fa,...ma,...ya])];let Ta=this.transformCSS(e,`${va}${Da}color-scheme:light`,"light","variable",h,i,o),Fa=this.transformCSS(e,`${Ea}color-scheme:dark`,"dark","variable",h,i,o);F=`${Ta}${Fa}`,O=[...new Set([..._a,...Ca,...wa])],z=we(p.css,{dt:kt})}return{primitive:{css:m,tokens:g},semantic:{css:b,tokens:x},global:{css:F,tokens:O},style:z}},getPreset({name:e="",preset:n={},options:t,params:i,set:o,defaults:r,selector:s}){var a,l,c;let u,d,p;if(k(n)&&t.transform!=="strict"){let h=e.replace("-directive",""),m=n,{colorScheme:g,extend:b,css:x}=m,F=ze(m,["colorScheme","extend","css"]),O=b||{},{colorScheme:z}=O,ae=ze(O,["colorScheme"]),ke=g||{},{dark:st}=ke,Ht=ze(ke,["dark"]),pn=z||{},{dark:fn}=pn,gn=ze(pn,["dark"]),mn=k(F)?this._toVariables({[h]:B(B({},F),ae)},t):{},zt=k(Ht)?this._toVariables({[h]:B(B({},Ht),gn)},t):{},Gt=k(st)?this._toVariables({[h]:B(B({},st),fn)},t):{},[bn,yn]=[(a=mn.declarations)!=null?a:"",mn.tokens||[]],[vn,_n]=[(l=zt.declarations)!=null?l:"",zt.tokens||[]],[Dn,Cn]=[(c=Gt.declarations)!=null?c:"",Gt.tokens||[]],En=this.transformCSS(h,`${bn}${vn}`,"light","variable",t,o,r,s),wn=this.transformCSS(h,Dn,"dark","variable",t,o,r,s);u=`${En}${wn}`,d=[...new Set([...yn,..._n,...Cn])],p=we(x,{dt:kt})}return{css:u,tokens:d,style:p}},getPresetC({name:e="",theme:n={},params:t,set:i,defaults:o}){var r;let{preset:s,options:a}=n,l=(r=s?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:i,defaults:o})},getPresetD({name:e="",theme:n={},params:t,set:i,defaults:o}){var r;let s=e.replace("-directive",""),{preset:a,options:l}=n,c=(r=a?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:c,options:l,params:t,set:i,defaults:o})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,n){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?n.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:n.options.darkModeSelector):[]},getLayerOrder(e,n={},t,i){let{cssLayer:o}=n;return o?`@layer ${we(o.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:n={},params:t,props:i={},set:o,defaults:r}){let s=this.getCommon({name:e,theme:n,params:t,set:o,defaults:r}),a=Object.entries(i).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u?.css){let d=mt(u?.css),p=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:n={},params:t,props:i={},set:o,defaults:r}){var s;let a={name:e,theme:n,params:t,set:o,defaults:r},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(i).reduce((u,[d,p])=>u.push(`${d}="${p}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${mt(l)}</style>`:""},createTokens(e={},n,t="",i="",o={}){return Object.entries(e).forEach(([r,s])=>{let a=_e(r,n.variable.excludedKeyRegex)?t:t?`${t}.${Li(r)}`:Li(r),l=i?`${i}.${r}`:r;Ie(s)?this.createTokens(s,n,a,l,o):(o[a]||(o[a]={paths:[],computed(c,u={}){var d,p;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(p=this.paths.find(h=>h.scheme===c))==null?void 0:p.computed(c,u.binding):this.paths.map(h=>h.computed(h.scheme,u[h.scheme]))}}),o[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,p=s;if(u.name=this.path,u.binding||(u.binding={}),_e(s,d)){let m=s.trim().replaceAll(d,x=>{var F;let O=x.replace(/{|}/g,""),z=(F=o[O])==null?void 0:F.computed(c,u);return Nn(z)&&z.length===2?`light-dark(${z[0].value},${z[1].value})`:z?.value}),g=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,b=/var\([^)]+\)/g;p=_e(m.replace(b,"0"),g)?`calc(${m})`:m}return ne(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:p.includes("undefined")?void 0:p}}}))}),o},getTokenValue(e,n,t){var i;let r=(l=>l.split(".").filter(u=>!_e(u.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(n),s=n.includes("colorScheme.light")?"light":n.includes("colorScheme.dark")?"dark":void 0,a=[(i=e[r])==null?void 0:i.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let u=c,{colorScheme:d}=u,p=ze(u,["colorScheme"]);return l[d]=p,l},void 0)},getSelectorRule(e,n,t,i){return t==="class"||t==="attr"?Ot(k(n)?`${e}${n},${e} ${n}`:e,i):Ot(e,k(n)?Ot(n,i):i)},transformCSS(e,n,t,i,o={},r,s,a){if(k(n)){let{cssLayer:l}=o;if(i!=="style"){let c=this.getColorSchemeOption(o,s);n=t==="dark"?c.reduce((u,{type:d,selector:p})=>(k(p)&&(u+=p.includes("[CSS]")?p.replace("[CSS]",n):this.getSelectorRule(p,a,d,n)),u),""):Ot(a??":root",n)}if(l){let c={name:"primeui",order:"primeui"};Ie(l)&&(c.name=we(l.name,{name:e,type:i})),k(c.name)&&(n=Ot(`@layer ${c.name}`,n),r?.layerNames(c.name))}return n}return""}},A={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:n}=e;n&&(this._theme=Mt(B({},n),{options:B(B({},this.defaults.options),n.options)}),this._tokens=Me.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),Ce.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=Mt(B({},this.theme),{preset:e}),this._tokens=Me.createTokens(e,this.defaults),this.clearLoadedStyleNames(),Ce.emit("preset:change",e),Ce.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=Mt(B({},this.theme),{options:e}),this.clearLoadedStyleNames(),Ce.emit("options:change",e),Ce.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return Me.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",n){return Me.getCommon({name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",n){let t={name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Me.getPresetC(t)},getDirective(e="",n){let t={name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Me.getPresetD(t)},getCustomPreset(e="",n,t,i){let o={name:e,preset:n,options:this.options,selector:t,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Me.getPreset(o)},getLayerOrderCSS(e=""){return Me.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",n,t="style",i){return Me.transformCSS(e,n,i,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",n,t={}){return Me.getCommonStyleSheet({name:e,theme:this.theme,params:n,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,n,t={}){return Me.getStyleSheet({name:e,theme:this.theme,params:n,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:n}){this._loadingStyles.size&&(this._loadingStyles.delete(n),Ce.emit(`theme:${n}:load`,e),!this._loadingStyles.size&&Ce.emit("theme:load"))}};function Up(...e){let n=gt(A.getPreset(),...e);return A.setPreset(n),n}function jp(e){return Nl().surfacePalette(e).update().preset}var $l=0,Kr=(()=>{class e{document=f(de);use(t,i={}){let o=!1,r=t,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++$l}`,id:u=void 0,media:d=void 0,nonce:p=void 0,first:h=!1,props:m={}}=i;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){r=t,kn(s,{type:"text/css",media:d,nonce:p});let g=this.document.head;h&&g.firstChild?g.insertBefore(s,g.firstChild):g.appendChild(s),Qo(s,"data-primeng-style-id",c)}return s.textContent!==r&&(s.textContent=r),{id:u,name:c,el:s,css:r}}}static \u0275fac=function(i){return new(i||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Rt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Vl=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Bl=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,H=(()=>{class e{name="base";useStyle=f(Kr);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,i={},o=r=>r)=>{let r=o(we(t,{dt:kt}));return r?this.useStyle.use(mt(r),E({name:this.name},i)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},i="")=>this.load(this.theme,t,(o="")=>A.transformCSS(t.name||this.name,`${o}${i}`));loadGlobalCSS=(t={})=>this.load(Bl,t);loadGlobalTheme=(t={},i="")=>this.load(Vl,t,(o="")=>A.transformCSS(t.name||this.name,`${o}${i}`));getCommonTheme=t=>A.getCommon(this.name,t);getComponentTheme=t=>A.getComponent(this.name,t);getDirectiveTheme=t=>A.getDirective(this.name,t);getPresetTheme=(t,i,o)=>A.getCustomPreset(this.name,t,i,o);getLayerOrderThemeCSS=()=>A.getLayerOrderCSS(this.name);getStyleSheet=(t="",i={})=>{if(this.css){let o=we(this.css,{dt:kt}),r=mt(`${o}${t}`),s=Object.entries(i).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,i={})=>A.getCommonStyleSheet(this.name,t,i);getThemeStyleSheet=(t,i={})=>{let o=[A.getStyleSheet(this.name,t,i)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=we(this.theme,{dt:kt}),a=mt(A.transformCSS(r,s)),l=Object.entries(i).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(i){return new(i||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ul=(()=>{class e{theme=pe(void 0);csp=pe({nonce:void 0});isThemeChanged=!1;document=f(de);baseStyle=f(H);constructor(){Kt(()=>{Ce.on("theme:change",t=>{Fe(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),Kt(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){A.clearLoadedStyleNames(),Ce.clear()}onThemeChange(t){A.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!A.isStyleNameLoaded("common")){let{primitive:t,semantic:i,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,E({name:"primitive-variables"},s)),this.baseStyle.load(i?.css,E({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,E({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(E({name:"global-style"},s),r),A.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:i,csp:o}=t||{};i&&this.theme.set(i),o&&this.csp.set(o)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Qi=(()=>{class e extends Ul{ripple=pe(!1);platformId=f(Ve);inputStyle=pe(null);inputVariant=pe(null);overlayOptions={};csp=pe({nonce:void 0});filterMatchModeOptions={text:[ie.STARTS_WITH,ie.CONTAINS,ie.NOT_CONTAINS,ie.ENDS_WITH,ie.EQUALS,ie.NOT_EQUALS],numeric:[ie.EQUALS,ie.NOT_EQUALS,ie.LESS_THAN,ie.LESS_THAN_OR_EQUAL_TO,ie.GREATER_THAN,ie.GREATER_THAN_OR_EQUAL_TO],date:[ie.DATE_IS,ie.DATE_IS_NOT,ie.DATE_BEFORE,ie.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new he;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=E(E({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:i,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:c}=t||{};i&&this.csp.set(i),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),c&&this.setTranslation(c),a&&this.setThemeConfig({theme:a,csp:i})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),jl=new L("PRIME_NG_CONFIG");function df(...e){let n=e?.map(i=>({provide:jl,useValue:i,multi:!1})),t=ko(()=>{let i=f(Qi);e?.forEach(o=>i.setConfig(o))});return Tn([...n,t])}var qr=(()=>{class e extends H{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),q=(()=>{class e{document=f(de);platformId=f(Ve);el=f(Ae);injector=f(Fn);cd=f(At);renderer=f(Be);config=f(Qi);baseComponentStyle=f(qr);baseStyle=f(H);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=qt("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,i="",o={}){return Ln(t,i,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!qi(this.platformId)){let{dt:i}=t;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>Ce.off("theme:change",t))}_loadStyles(){let t=()=>{Rt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Rt.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!Rt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Rt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!A.isStyleNameLoaded("common")){let{primitive:t,semantic:i,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,E({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,E({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,E({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(E({name:"global-style"},this.styleOptions),r),A.setLoadedStyleName("common")}if(!A.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,E({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(E({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),A.setLoadedStyleName(this.componentStyle?.name)}if(!A.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,E({name:"layer-order",first:!0},this.styleOptions)),A.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:i}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(i,E({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Rt.clearLoadedStyleNames(),Ce.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,i){let o=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:t}sx(t){let i=this.componentStyle?.inlineStyles?.[t];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:E({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||e)};static \u0275dir=S({type:e,inputs:{dt:"dt"},features:[M([qr,H]),ce]})}return e})();var Ji=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,i){t&&i&&(t.classList?t.classList.add(i):t.className+=" "+i)}static addMultipleClasses(t,i){if(t&&i)if(t.classList){let o=i.trim().split(" ");for(let r=0;r<o.length;r++)t.classList.add(o[r])}else{let o=i.split(" ");for(let r=0;r<o.length;r++)t.className+=" "+o[r]}}static removeClass(t,i){t&&i&&(t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,i){t&&i&&[i].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,i){return t&&i?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(i){return i!==t})}static find(t,i){return Array.from(t.querySelectorAll(i))}static findSingle(t,i){return this.isElement(t)?t.querySelector(i):null}static index(t){let i=t.parentNode.childNodes,o=0;for(var r=0;r<i.length;r++){if(i[r]==t)return o;i[r].nodeType==1&&o++}return-1}static indexWithinGroup(t,i){let o=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==t)return r;o[s].attributes&&o[s].attributes[i]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(t,i,o="self"){o!=="self"&&t&&i&&this.appendChild(t,i)}static alignOverlay(t,i,o="self",r=!0){t&&i&&(r&&(t.style.minWidth=`${e.getOuterWidth(i)}px`),o==="self"?this.relativePosition(t,i):this.absolutePosition(t,i))}static relativePosition(t,i,o=!0){let r=F=>{if(F)return getComputedStyle(F).getPropertyValue("position")==="relative"?F:r(F.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=i.offsetHeight,l=i.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),h=r(t)?.getBoundingClientRect()||{top:-1*c,left:-1*u},m,g;l.top+a+s.height>d.height?(m=l.top-h.top-s.height,t.style.transformOrigin="bottom",l.top+m<0&&(m=-1*l.top)):(m=a+l.top-h.top,t.style.transformOrigin="top");let b=l.left+s.width-d.width,x=l.left-h.left;s.width>d.width?g=(l.left-h.left)*-1:b>0?g=x-b:g=l.left-h.left,t.style.top=m+"px",t.style.left=g+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,i,o=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=i.offsetHeight,c=i.offsetWidth,u=i.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport(),m,g;u.top+l+s>h.height?(m=u.top+d-s,t.style.transformOrigin="bottom",m<0&&(m=d)):(m=l+u.top+d,t.style.transformOrigin="top"),u.left+a>h.width?g=Math.max(0,u.left+p+c-a):g=u.left+p,t.style.top=m+"px",t.style.left=g+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,i=[]){return t.parentNode===null?i:this.getParents(t.parentNode,i.concat([t.parentNode]))}static getScrollableParents(t){let i=[];if(t){let o=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let d=this.findSingle(a,u);d&&s(d)&&i.push(d)}}a.nodeType!==9&&s(a)&&i.push(a)}}return i}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",i}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",i}static getHiddenElementDimensions(t){let i={};return t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",i}static scrollInView(t,i){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),u=i.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=t.scrollTop,p=t.clientHeight,h=this.getOuterHeight(i);u<0?t.scrollTop=d+u:u+h>p&&(t.scrollTop=d+u-p+h)}static fadeIn(t,i){t.style.opacity=0;let o=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/i,t.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,i){var o=1,r=50,s=i,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),t.style.opacity=o},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,i){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,i)}static getOuterWidth(t,i){let o=t.offsetWidth;if(i){let r=getComputedStyle(t);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(t){let i=getComputedStyle(t);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(t){let i=getComputedStyle(t);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(t){let i=t.offsetWidth,o=getComputedStyle(t);return i+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static width(t){let i=t.offsetWidth,o=getComputedStyle(t);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static getInnerHeight(t){let i=t.offsetHeight,o=getComputedStyle(t);return i+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),i}static getOuterHeight(t,i){let o=t.offsetHeight;if(i){let r=getComputedStyle(t);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(t){let i=t.offsetHeight,o=getComputedStyle(t);return i-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),i}static getWidth(t){let i=t.offsetWidth,o=getComputedStyle(t);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),i}static getViewport(){let t=window,i=document,o=i.documentElement,r=i.getElementsByTagName("body")[0],s=t.innerWidth||o.clientWidth||r.clientWidth,a=t.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,i){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(i,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,i=t.indexOf("MSIE ");if(i>0)return!0;var o=t.indexOf("Trident/");if(o>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,i){if(this.isElement(i))i.appendChild(t);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(t);else throw"Cannot append "+i+" to "+t}static removeChild(t,i){if(this.isElement(i))i.removeChild(t);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+i}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let i=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let o=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let i=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(t,i,o){t[i].apply(t,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,i){t&&document.activeElement!==t&&t.focus(i)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,i=""){let o=this.find(t,this.getFocusableSelectorString(i)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,i=""){let o=this.findSingle(t,this.getFocusableSelectorString(i));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,i=""){let o=this.getFocusableElements(t,i);return o.length>0?o[0]:null}static getLastFocusableElement(t,i){let o=this.getFocusableElements(t,i);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,i=!1){let o=e.getFocusableElements(t),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);i?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,i){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,i){if(t){let o=t.getAttribute(i);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,i={},...o){if(t){let r=document.createElement(t);return this.setAttributes(r,i),r.append(...o),r}}static setAttribute(t,i="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(i,o)}static setAttributes(t,i={}){if(this.isElement(t)){let o=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?o(r,c):Object.entries(c).map(([p,h])=>r==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(i).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,i=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return e})(),Yr=class{element;listener;scrollableParents;constructor(n,t=()=>{}){this.element=n,this.listener=t}bindScrollListener(){this.scrollableParents=Ji.getScrollableParents(this.element);for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Zr=(()=>{class e extends q{autofocus=!1;_autofocus=!1;focused=!1;platformId=f(Ve);document=f(de);host=f(Ae);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){nn(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=Ji.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275dir=S({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",_],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[w]})}return e})(),kf=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=$({type:e});static \u0275inj=P({})}return e})();var Hl=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,zl={root:({props:e,instance:n})=>["p-badge p-component",{"p-badge-circle":k(e.value)&&String(e.value).length===1,"p-badge-dot":ne(e.value)&&!n.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},Xr=(()=>{class e extends H{name="badge";theme=Hl;classes=zl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var eo=(()=>{class e extends q{styleClass=Ze();style=Ze();badgeSize=Ze();size=Ze();severity=Ze();value=Ze();badgeDisabled=Ze(!1,{transform:_});_componentStyle=f(Xr);containerClass=Re(()=>{let t="p-badge p-component";return k(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),ne(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275cmp=U({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,o){i&2&&(lt(o.style()),ee(o.containerClass()),Ro("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[M([Xr]),w],decls:1,vars:1,template:function(i,o){i&1&&wt(0),i&2&&St(o.value())},dependencies:[ye,Q],encapsulation:2,changeDetection:0})}return e})(),Qr=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=$({type:e});static \u0275inj=P({imports:[eo,Q,Q]})}return e})();var Wl=["*"],Kl=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ql=(()=>{class e extends H{name="baseicon";inlineStyles=Kl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var nt=(()=>{class e extends q{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=ne(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275cmp=U({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",_],styleClass:"styleClass"},features:[M([ql]),w],ngContentSelectors:Wl,decls:1,vars:0,template:function(i,o){i&1&&(ht(),pt(0))},encapsulation:2,changeDetection:0})}return e})();var Jr=(()=>{class e extends nt{static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275cmp=U({type:e,selectors:[["CheckIcon"]],features:[w],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(i,o){i&1&&(Ye(),W(0,"svg",0),Z(1,"path",1),Y()),i&2&&(ee(o.getClassNames()),I("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var es=(()=>{class e extends nt{static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275cmp=U({type:e,selectors:[["MinusIcon"]],features:[w],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(i,o){i&1&&(Ye(),W(0,"svg",0),Z(1,"path",1),Y()),i&2&&(ee(o.getClassNames()),I("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var ts=(()=>{class e extends nt{pathId;ngOnInit(){this.pathId="url(#"+qt()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275cmp=U({type:e,selectors:[["SpinnerIcon"]],features:[w],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(Ye(),W(0,"svg",0)(1,"g"),Z(2,"path",1),Y(),W(3,"defs")(4,"clipPath",2),Z(5,"rect",3),Y()()()),i&2&&(ee(o.getClassNames()),I("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),T(),I("clip-path",o.pathId),T(3),C("id",o.pathId))},encapsulation:2})}return e})();var hg=(()=>{class e extends nt{static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275cmp=U({type:e,selectors:[["TimesIcon"]],features:[w],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,o){i&1&&(Ye(),W(0,"svg",0),Z(1,"path",1),Y()),i&2&&(ee(o.getClassNames()),I("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var Yl=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Zl={root:"p-ink"},ns=(()=>{class e extends H{name="ripple";theme=Yl;classes=Zl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var Qn=(()=>{class e extends q{zone=f(In);_componentStyle=f(ns);animationListener;mouseDownListener;timeout;constructor(){super(),Kt(()=>{nn(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(ft(i,"p-ink-active"),!Oi(i)&&!ki(i)){let a=Math.max(Ii(this.el.nativeElement),Rn(this.el.nativeElement));i.style.height=a+"px",i.style.width=a+"px"}let o=Mi(this.el.nativeElement),r=t.pageX-o.left+this.document.body.scrollTop-ki(i)/2,s=t.pageY-o.top+this.document.body.scrollLeft-Oi(i)/2;this.renderer.setStyle(i,"top",s+"px"),this.renderer.setStyle(i,"left",r+"px"),Qe(i,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&ft(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let i=0;i<t.length;i++)if(typeof t[i].className=="string"&&t[i].className.indexOf("p-ink")!==-1)return t[i];return null}resetInk(){let t=this.getInk();t&&ft(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),ft(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Xo(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=S({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[M([ns]),w]})}return e})(),Cg=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=$({type:e});static \u0275inj=P({})}return e})();var Xl=["content"],Ql=["loading"],Jl=["icon"],ec=["*"],rs=e=>({class:e});function tc(e,n){e&1&&dt(0)}function nc(e,n){if(e&1&&Z(0,"span",8),e&2){let t=V(3);C("ngClass",t.iconClass()),I("aria-hidden",!0)("data-pc-section","loadingicon")}}function ic(e,n){if(e&1&&Z(0,"SpinnerIcon",9),e&2){let t=V(3);C("styleClass",t.spinnerIconClass())("spin",!0),I("aria-hidden",!0)("data-pc-section","loadingicon")}}function oc(e,n){if(e&1&&(ct(0),G(1,nc,1,3,"span",6)(2,ic,1,4,"SpinnerIcon",7),ut()),e&2){let t=V(2);T(),C("ngIf",t.loadingIcon),T(),C("ngIf",!t.loadingIcon)}}function rc(e,n){}function sc(e,n){if(e&1&&G(0,rc,0,0,"ng-template",10),e&2){let t=V(2);C("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function ac(e,n){if(e&1&&(ct(0),G(1,oc,3,2,"ng-container",2)(2,sc,1,1,null,5),ut()),e&2){let t=V();T(),C("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),T(),C("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Xe(3,rs,t.iconClass()))}}function lc(e,n){if(e&1&&Z(0,"span",8),e&2){let t=V(2);ee(t.icon),C("ngClass",t.iconClass()),I("data-pc-section","icon")}}function cc(e,n){}function uc(e,n){if(e&1&&G(0,cc,0,0,"ng-template",10),e&2){let t=V(2);C("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function dc(e,n){if(e&1&&(ct(0),G(1,lc,1,4,"span",11)(2,uc,1,1,null,5),ut()),e&2){let t=V();T(),C("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),T(),C("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Xe(3,rs,t.iconClass()))}}function hc(e,n){if(e&1&&(W(0,"span",12),wt(1),Y()),e&2){let t=V();I("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),T(),St(t.label)}}function pc(e,n){if(e&1&&Z(0,"p-badge",13),e&2){let t=V();C("value",t.badge)("severity",t.badgeSeverity)}}var fc=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,gc={root:({instance:e,props:n})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!n.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading,"p-button-link":n.link,[`p-button-${n.severity}`]:n.severity,"p-button-raised":n.raised,"p-button-rounded":n.rounded,"p-button-text":n.text,"p-button-outlined":n.outlined,"p-button-sm":n.size==="small","p-button-lg":n.size==="large","p-button-plain":n.plain,"p-button-fluid":n.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},ot=(()=>{class e extends H{name="button";theme=fc;classes=gc;static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var it={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},is=(()=>{class e extends q{_componentStyle=f(ot);static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275dir=S({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(i,o){i&2&&Te("p-button-label",!0)},features:[M([ot]),w]})}return e})(),os=(()=>{class e extends q{_componentStyle=f(ot);static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275dir=S({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(i,o){i&2&&Te("p-button-icon",!0)},features:[M([ot]),w]})}return e})(),zg=(()=>{class e extends q{iconPos="left";loadingIcon;set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Ci(os);labelSignal=Ci(is);isIconOnly=Re(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(it);isTextButton=Re(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=f(ot);ngAfterViewInit(){super.ngAfterViewInit(),Qe(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:i}=t;if(i){let o=i.currentValue;for(let r in o)this[r]=o[r]}}getStyleClass(){let t=[it.button,it.component];return this.icon&&!this.label&&ne(this.htmlElement.textContent)&&t.push(it.iconOnly),this.loading&&(t.push(it.disabled,it.loading),!this.icon&&this.label&&t.push(it.labelOnly),this.icon&&!this.label&&!ne(this.htmlElement.textContent)&&t.push(it.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return ne(this.fluid)?!!i:this.fluid}setStyleClass(){let t=this.getStyleClass();this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}createLabel(){if(!It(this.htmlElement,".p-button-label")&&this.label){let i=this.document.createElement("span");this.icon&&!this.label&&i.setAttribute("aria-hidden","true"),i.className="p-button-label",i.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(i)}}createIcon(){if(!It(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let i=this.document.createElement("span");i.className="p-button-icon",i.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&Qe(i,o);let r=this.getIconClass();r&&Qe(i,r),!this.loadingIcon&&this.loading&&(i.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(i,this.htmlElement.firstChild)}}updateLabel(){let t=It(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=It(this.htmlElement,".p-button-icon"),i=It(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(i?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275dir=S({type:e,selectors:[["","pButton",""]],contentQueries:function(i,o,r){i&1&&(wi(r,o.iconSignal,os,5),wi(r,o.labelSignal,is,5)),i&2&&Vo(2)},hostVars:4,hostBindings:function(i,o){i&2&&Te("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",_],rounded:[2,"rounded","rounded",_],text:[2,"text","text",_],outlined:[2,"outlined","outlined",_],size:"size",plain:[2,"plain","plain",_],fluid:[2,"fluid","fluid",_],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[M([ot]),w,ce]})}return e})(),mc=(()=>{class e extends q{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new J;onFocus=new J;onBlur=new J;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return ne(this.fluid)?!!i:this.fluid}_componentStyle=f(ot);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:i}=t;if(i){let o=i.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[i])=>t+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275cmp=U({type:e,selectors:[["p-button"]],contentQueries:function(i,o,r){if(i&1&&(ue(r,Xl,5),ue(r,Ql,5),ue(r,Jl,5),ue(r,tt,4)),i&2){let s;oe(s=re())&&(o.contentTemplate=s.first),oe(s=re())&&(o.loadingIconTemplate=s.first),oe(s=re())&&(o.iconTemplate=s.first),oe(s=re())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",_],loading:[2,"loading","loading",_],loadingIcon:"loadingIcon",raised:[2,"raised","raised",_],rounded:[2,"rounded","rounded",_],text:[2,"text","text",_],plain:[2,"plain","plain",_],severity:"severity",outlined:[2,"outlined","outlined",_],link:[2,"link","link",_],tabindex:[2,"tabindex","tabindex",Ue],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",_],fluid:[2,"fluid","fluid",_],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[M([ot]),w,ce],ngContentSelectors:ec,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,o){i&1&&(ht(),W(0,"button",0),ge("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),pt(1),G(2,tc,1,0,"ng-container",1)(3,ac,3,5,"ng-container",2)(4,dc,3,5,"ng-container",2)(5,hc,2,3,"span",3)(6,pc,1,2,"p-badge",4),Y()),i&2&&(C("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),I("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),T(2),C("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),T(),C("ngIf",o.loading),T(),C("ngIf",!o.loading),T(),C("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),T(),C("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[ye,yt,en,He,Gi,Qn,Zr,ts,Qr,eo,Q],encapsulation:2,changeDetection:0})}return e})(),Gg=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=$({type:e});static \u0275inj=P({imports:[ye,mc,Q,Q]})}return e})();var gs=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||e)(v(Be),v(Ae))};static \u0275dir=S({type:e})}return e})(),ms=(()=>{class e extends gs{static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275dir=S({type:e,features:[w]})}return e})(),Pe=new L("");var bc={provide:Pe,useExisting:ve(()=>bs),multi:!0};function yc(){let e=bt()?bt().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var vc=new L(""),bs=(()=>{class e extends gs{_compositionMode;_composing=!1;constructor(t,i,o){super(t,i),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!yc())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||e)(v(Be),v(Ae),v(vc,8))};static \u0275dir=S({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&ge("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[M([bc]),w]})}return e})();function ao(e){return e==null||lo(e)===0}function lo(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var li=new L(""),co=new L(""),_c=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ss=class{static min(n){return Dc(n)}static max(n){return Cc(n)}static required(n){return ys(n)}static requiredTrue(n){return Ec(n)}static email(n){return wc(n)}static minLength(n){return Sc(n)}static maxLength(n){return Ac(n)}static pattern(n){return Tc(n)}static nullValidator(n){return ei()}static compose(n){return ws(n)}static composeAsync(n){return As(n)}};function Dc(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}function Cc(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}function ys(e){return ao(e.value)?{required:!0}:null}function Ec(e){return e.value===!0?null:{required:!0}}function wc(e){return ao(e.value)||_c.test(e.value)?null:{email:!0}}function Sc(e){return n=>{let t=n.value?.length??lo(n.value);return t===null||t===0?null:t<e?{minlength:{requiredLength:e,actualLength:t}}:null}}function Ac(e){return n=>{let t=n.value?.length??lo(n.value);return t!==null&&t>e?{maxlength:{requiredLength:e,actualLength:t}}:null}}function Tc(e){if(!e)return ei;let n,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),i=>{if(ao(i.value))return null;let o=i.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function ei(e){return null}function vs(e){return e!=null}function _s(e){return Ei(e)?An(e):e}function Ds(e){let n={};return e.forEach(t=>{n=t!=null?E(E({},n),t):n}),Object.keys(n).length===0?null:n}function Cs(e,n){return n.map(t=>t(e))}function Fc(e){return!e.validate}function Es(e){return e.map(n=>Fc(n)?n:t=>n.validate(t))}function ws(e){if(!e)return null;let n=e.filter(vs);return n.length==0?null:function(t){return Ds(Cs(t,n))}}function Ss(e){return e!=null?ws(Es(e)):null}function As(e){if(!e)return null;let n=e.filter(vs);return n.length==0?null:function(t){let i=Cs(t,n).map(_s);return wo(i).pipe(at(Ds))}}function Ts(e){return e!=null?As(Es(e)):null}function as(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Fs(e){return e._rawValidators}function Is(e){return e._rawAsyncValidators}function to(e){return e?Array.isArray(e)?e:[e]:[]}function ti(e,n){return Array.isArray(e)?e.includes(n):e===n}function ls(e,n){let t=to(n);return to(e).forEach(o=>{ti(t,o)||t.push(o)}),t}function cs(e,n){return to(n).filter(t=>!ti(e,t))}var ni=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Ss(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Ts(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},vt=class extends ni{name;get formDirective(){return null}get path(){return null}},Ge=class extends ni{_parent=null;name=null;valueAccessor=null},ii=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Ic={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},lm=Ee(E({},Ic),{"[class.ng-submitted]":"isSubmitted"}),xs=(()=>{class e extends ii{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(v(Ge,2))};static \u0275dir=S({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&Te("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[w]})}return e})(),cm=(()=>{class e extends ii{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(v(vt,10))};static \u0275dir=S({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){i&2&&Te("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[w]})}return e})();var on="VALID",Jn="INVALID",Lt="PENDING",rn="DISABLED",rt=class{},oi=class extends rt{value;source;constructor(n,t){super(),this.value=n,this.source=t}},sn=class extends rt{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},an=class extends rt{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},Nt=class extends rt{status;source;constructor(n,t){super(),this.status=n,this.source=t}},no=class extends rt{source;constructor(n){super(),this.source=n}},io=class extends rt{source;constructor(n){super(),this.source=n}};function uo(e){return(ci(e)?e.validators:e)||null}function xc(e){return Array.isArray(e)?Ss(e):e||null}function ho(e,n){return(ci(n)?n.asyncValidators:e)||null}function Oc(e){return Array.isArray(e)?Ts(e):e||null}function ci(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function Os(e,n,t){let i=e.controls;if(!(n?Object.keys(i):i).length)throw new le(1e3,"");if(!i[t])throw new le(1001,"")}function Ms(e,n,t){e._forEachChild((i,o)=>{if(t[o]===void 0)throw new le(1002,"")})}var Pt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Fe(this.statusReactive)}set status(n){Fe(()=>this.statusReactive.set(n))}_status=Re(()=>this.statusReactive());statusReactive=pe(void 0);get valid(){return this.status===on}get invalid(){return this.status===Jn}get pending(){return this.status==Lt}get disabled(){return this.status===rn}get enabled(){return this.status!==rn}errors;get pristine(){return Fe(this.pristineReactive)}set pristine(n){Fe(()=>this.pristineReactive.set(n))}_pristine=Re(()=>this.pristineReactive());pristineReactive=pe(!0);get dirty(){return!this.pristine}get touched(){return Fe(this.touchedReactive)}set touched(n){Fe(()=>this.touchedReactive.set(n))}_touched=Re(()=>this.touchedReactive());touchedReactive=pe(!1);get untouched(){return!this.touched}_events=new he;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(ls(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(ls(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(cs(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(cs(n,this._rawAsyncValidators))}hasValidator(n){return ti(this._rawValidators,n)}hasAsyncValidator(n){return ti(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(Ee(E({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new an(!0,i))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),t&&n.emitEvent!==!1&&this._events.next(new an(!1,i))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(Ee(E({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new sn(!1,i))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),t&&n.emitEvent!==!1&&this._events.next(new sn(!0,i))}markAsPending(n={}){this.status=Lt;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Nt(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(Ee(E({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=rn,this.errors=null,this._forEachChild(o=>{o.disable(Ee(E({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new oi(this.value,i)),this._events.next(new Nt(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Ee(E({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=on,this._forEachChild(i=>{i.enable(Ee(E({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Ee(E({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,t){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===on||this.status===Lt)&&this._runAsyncValidator(i,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new oi(this.value,t)),this._events.next(new Nt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(Ee(E({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?rn:on}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=Lt,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=_s(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(n,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Nt(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,i)}_initObservables(){this.valueChanges=new J,this.statusChanges=new J}_calculateStatus(){return this._allControlsDisabled()?rn:this.errors?Jn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Lt)?Lt:this._anyControlsHaveStatus(Jn)?Jn:on}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,t),o&&this._events.next(new sn(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new an(this.touched,t)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){ci(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let t=this._parent&&this._parent.dirty;return!n&&!!t&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=xc(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Oc(this._rawAsyncValidators)}},ri=class extends Pt{constructor(n,t,i){super(uo(t),ho(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,i={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){Ms(this,!0,n),Object.keys(n).forEach(i=>{Os(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(i=>{let o=this.controls[i];o&&o.patchValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((i,o)=>{i.reset(n?n[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,i)=>(n[i]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&n(i,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(t,i,o)=>((i.enabled||this.disabled)&&(t[o]=i.value),t))}_reduceChildren(n,t){let i=n;return this._forEachChild((o,r)=>{i=t(i,o,r)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var oo=class extends ri{};var ui=new L("",{providedIn:"root",factory:()=>di}),di="always";function ks(e,n){return[...n.path,e]}function ro(e,n,t=di){po(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),kc(e,n),Lc(e,n),Rc(e,n),Mc(e,n)}function us(e,n,t=!0){let i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),ai(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function si(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function Mc(e,n){if(n.valueAccessor.setDisabledState){let t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function po(e,n){let t=Fs(e);n.validator!==null?e.setValidators(as(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let i=Is(e);n.asyncValidator!==null?e.setAsyncValidators(as(i,n.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let o=()=>e.updateValueAndValidity();si(n._rawValidators,o),si(n._rawAsyncValidators,o)}function ai(e,n){let t=!1;if(e!==null){if(n.validator!==null){let o=Fs(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==n.validator);r.length!==o.length&&(t=!0,e.setValidators(r))}}if(n.asyncValidator!==null){let o=Is(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==n.asyncValidator);r.length!==o.length&&(t=!0,e.setAsyncValidators(r))}}}let i=()=>{};return si(n._rawValidators,i),si(n._rawAsyncValidators,i),t}function kc(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Rs(e,n)})}function Rc(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Rs(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function Rs(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Lc(e,n){let t=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Nc(e,n){e==null,po(e,n)}function Pc(e,n){return ai(e,n)}function Ls(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function $c(e){return Object.getPrototypeOf(e.constructor)===ms}function Vc(e,n){e._syncPendingControls(),n.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Ns(e,n){if(!n)return null;Array.isArray(n);let t,i,o;return n.forEach(r=>{r.constructor===bs?t=r:$c(r)?i=r:o=r}),o||i||t||null}function Bc(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function ds(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function hs(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var ln=class extends Pt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,i){super(uo(t),ho(i,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ci(t)&&(t.nonNullable||t.initialValueIsDefault)&&(hs(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){ds(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){ds(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){hs(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Uc=e=>e instanceof ln;var jc={provide:Ge,useExisting:ve(()=>cn)},ps=Promise.resolve(),cn=(()=>{class e extends Ge{_changeDetectorRef;callSetDisabledState;control=new ln;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new J;constructor(t,i,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=Ns(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Ls(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ro(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){ps.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,o=i!==0&&_(i);ps.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ks(t,this._parent):[t]}static \u0275fac=function(i){return new(i||e)(v(vt,9),v(li,10),v(co,10),v(Pe,10),v(At,8),v(ui,8))};static \u0275dir=S({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[M([jc]),w,ce]})}return e})();var dm=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=S({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return e})(),Hc={provide:Pe,useExisting:ve(()=>zc),multi:!0},zc=(()=>{class e extends ms{writeValue(t){let i=t??"";this.setProperty("value",i)}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275dir=S({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,o){i&1&&ge("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[M([Hc]),w]})}return e})();var Ps=new L("");var Gc={provide:vt,useExisting:ve(()=>Wc)},Wc=(()=>{class e extends vt{callSetDisabledState;get submitted(){return Fe(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=Re(()=>this._submittedReactive());_submittedReactive=pe(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new J;constructor(t,i,o){super(),this.callSetDisabledState=o,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(ai(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let i=this.form.get(t.path);return ro(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){us(t.control||null,t,!1),Bc(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this._submittedReactive.set(!0),Vc(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new no(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new io(this.form))}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,o=this.form.get(t.path);i!==o&&(us(i||null,t),Uc(o)&&(ro(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);Nc(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let i=this.form.get(t.path);i&&Pc(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){po(this.form,this),this._oldForm&&ai(this._oldForm,this)}static \u0275fac=function(i){return new(i||e)(v(li,10),v(co,10),v(ui,8))};static \u0275dir=S({type:e,selectors:[["","formGroup",""]],hostBindings:function(i,o){i&1&&ge("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[M([Gc]),w,ce]})}return e})();var Kc={provide:Ge,useExisting:ve(()=>qc)},qc=(()=>{class e extends Ge{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new J;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,o,r,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=Ns(this,r)}ngOnChanges(t){this._added||this._setUpControl(),Ls(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return ks(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||e)(v(vt,13),v(li,10),v(co,10),v(Pe,10),v(Ps,8))};static \u0275dir=S({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[M([Kc]),w,ce]})}return e})();var Yc=(()=>{class e{_validator=ei;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):ei,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(i){return new(i||e)};static \u0275dir=S({type:e,features:[ce]})}return e})();var Zc={provide:li,useExisting:ve(()=>Xc),multi:!0};var Xc=(()=>{class e extends Yc{required;inputName="required";normalizeInput=_;createValidator=t=>ys;enabled(t){return t}static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275dir=S({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,o){i&2&&I("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[M([Zc]),w]})}return e})();var $s=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=$({type:e});static \u0275inj=P({})}return e})(),so=class extends Pt{constructor(n,t,i){super(uo(t),ho(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,i={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,t={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,i={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),t&&(this.controls.splice(o,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){Ms(this,!1,n),n.forEach((i,o)=>{Os(this,!1,o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(n.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((i,o)=>{i.reset(n[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,i)=>i._syncPendingControls()?!0:t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,i)=>{n(t,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};function fs(e){return!!e&&(e.asyncValidators!==void 0||e.validators!==void 0||e.updateOn!==void 0)}var hm=(()=>{class e{useNonNullable=!1;get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,i=null){let o=this._reduceControls(t),r={};return fs(i)?r=i:i!==null&&(r.validators=i.validator,r.asyncValidators=i.asyncValidator),new ri(o,r)}record(t,i=null){let o=this._reduceControls(t);return new oo(o,i)}control(t,i,o){let r={};return this.useNonNullable?(fs(i)?r=i:(r.validators=i,r.asyncValidators=o),new ln(t,Ee(E({},r),{nonNullable:!0}))):new ln(t,i,o)}array(t,i,o){let r=t.map(s=>this._createControl(s));return new so(r,i,o)}_reduceControls(t){let i={};return Object.keys(t).forEach(o=>{i[o]=this._createControl(t[o])}),i}_createControl(t){if(t instanceof ln)return t;if(t instanceof Pt)return t;if(Array.isArray(t)){let i=t[0],o=t.length>1?t[1]:null,r=t.length>2?t[2]:null;return this.control(i,o,r)}else return this.control(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Vs=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:ui,useValue:t.callSetDisabledState??di}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=$({type:e});static \u0275inj=P({imports:[$s]})}return e})(),pm=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Ps,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:ui,useValue:t.callSetDisabledState??di}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=$({type:e});static \u0275inj=P({imports:[$s]})}return e})();var Qc=({dt:e})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,Jc={root:({instance:e,props:n})=>["p-inputtext p-component",{"p-filled":e.filled,"p-inputtext-sm":n.size==="small","p-inputtext-lg":n.size==="large","p-invalid":n.invalid,"p-variant-filled":n.variant==="filled","p-inputtext-fluid":n.fluid}]},Us=(()=>{class e extends H{name="inputtext";theme=Qc;classes=Jc;static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var Sm=(()=>{class e extends q{ngModel;variant;fluid;pSize;filled;_componentStyle=f(Us);get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return ne(this.fluid)?!!i:this.fluid}constructor(t){super(),this.ngModel=t}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(i){return new(i||e)(v(cn,8))};static \u0275dir=S({type:e,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(i,o){if(i&1&&ge("input",function(s){return o.onInput(s)}),i&2){let r;Te("p-filled",o.filled)("p-variant-filled",((r=o.variant)!==null&&r!==void 0?r:o.config.inputStyle()||o.config.inputVariant())==="filled")("p-inputtext-fluid",o.hasFluid)("p-inputtext-sm",o.pSize==="small")("p-inputfield-sm",o.pSize==="small")("p-inputtext-lg",o.pSize==="large")("p-inputfield-lg",o.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",_],pSize:"pSize"},features:[M([Us]),w]})}return e})(),Am=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=$({type:e});static \u0275inj=P({})}return e})();var Vt=class{},Bt=class{},$e=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let o=t.slice(0,i),r=t.slice(i+1).trim();this.addHeaderEntry(o,r)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,i)=>{this.addHeaderEntry(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,t);let o=(n.op==="a"?this.headers.get(t):void 0)||[];o.push(...i),this.headers.set(t,o);break;case"d":let r=n.value;if(!r)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=this.headers.get(t);if(!s)return;s=s.filter(a=>r.indexOf(a)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}addHeaderEntry(n,t){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(t):this.headers.set(i,[t])}setHeaderEntries(n,t){let i=(Array.isArray(t)?t:[t]).map(r=>r.toString()),o=n.toLowerCase();this.headers.set(o,i),this.maybeSetNormalizedName(n,o)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var fi=class{encodeKey(n){return js(n)}encodeValue(n){return js(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function eu(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{let r=o.indexOf("="),[s,a]=r==-1?[n.decodeKey(o),""]:[n.decodeKey(o.slice(0,r)),n.decodeValue(o.slice(r+1))],l=t.get(s)||[];l.push(a),t.set(s,l)}),t}var tu=/%(\d[a-f0-9])/gi,nu={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function js(e){return encodeURIComponent(e).replace(tu,(n,t)=>nu[t]??n)}function hi(e){return`${e}`}var Ke=class e{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new fi,n.fromString){if(n.fromObject)throw new le(2805,!1);this.map=eu(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let i=n.fromObject[t],o=Array.isArray(i)?i.map(hi):[hi(i)];this.map.set(t,o)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(i=>{let o=n[i];Array.isArray(o)?o.forEach(r=>{t.push({param:i,value:r,op:"a"})}):t.push({param:i,value:o,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(i=>t+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=(n.op==="a"?this.map.get(n.param):void 0)||[];t.push(hi(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],o=i.indexOf(hi(n.value));o!==-1&&i.splice(o,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var gi=class{map=new Map;set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function iu(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Hs(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function zs(e){return typeof Blob<"u"&&e instanceof Blob}function Gs(e){return typeof FormData<"u"&&e instanceof FormData}function ou(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var un="Content-Type",mi="Accept",yo="X-Request-URL",Ks="text/plain",qs="application/json",Ys=`${qs}, ${Ks}, */*`,$t=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(n,t,i,o){this.url=t,this.method=n.toUpperCase();let r;if(iu(this.method)||o?(this.body=i!==void 0?i:null,r=o):r=i,r&&(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),this.transferCache=r.transferCache),this.headers??=new $e,this.context??=new gi,!this.params)this.params=new Ke,this.urlWithParams=t;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),l=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Hs(this.body)||zs(this.body)||Gs(this.body)||ou(this.body)?this.body:this.body instanceof Ke?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Gs(this.body)?null:zs(this.body)?this.body.type||null:Hs(this.body)?null:typeof this.body=="string"?Ks:this.body instanceof Ke?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?qs:null}clone(n={}){let t=n.method||this.method,i=n.url||this.url,o=n.responseType||this.responseType,r=n.transferCache??this.transferCache,s=n.body!==void 0?n.body:this.body,a=n.withCredentials??this.withCredentials,l=n.reportProgress??this.reportProgress,c=n.headers||this.headers,u=n.params||this.params,d=n.context??this.context;return n.setHeaders!==void 0&&(c=Object.keys(n.setHeaders).reduce((p,h)=>p.set(h,n.setHeaders[h]),c)),n.setParams&&(u=Object.keys(n.setParams).reduce((p,h)=>p.set(h,n.setParams[h]),u)),new e(t,i,s,{params:u,headers:c,context:d,reportProgress:l,responseType:o,withCredentials:a,transferCache:r})}},qe=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(qe||{}),Ut=class{headers;status;statusText;url;ok;type;constructor(n,t=200,i="OK"){this.headers=n.headers||new $e,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||i,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}},dn=class e extends Ut{constructor(n={}){super(n)}type=qe.ResponseHeader;clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},jt=class e extends Ut{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=qe.Response;clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},We=class extends Ut{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},Zs=200,ru=204;function fo(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Xs=(()=>{class e{handler;constructor(t){this.handler=t}request(t,i,o={}){let r;if(t instanceof $t)r=t;else{let l;o.headers instanceof $e?l=o.headers:l=new $e(o.headers);let c;o.params&&(o.params instanceof Ke?c=o.params:c=new Ke({fromObject:o.params})),r=new $t(t,i,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:c,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let s=Di(r).pipe(Ao(l=>this.handler.handle(l)));if(t instanceof $t||o.observe==="events")return s;let a=s.pipe(So(l=>l instanceof jt));switch(o.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return a.pipe(at(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new le(2806,!1);return l.body}));case"blob":return a.pipe(at(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new le(2807,!1);return l.body}));case"text":return a.pipe(at(l=>{if(l.body!==null&&typeof l.body!="string")throw new le(2808,!1);return l.body}));case"json":default:return a.pipe(at(l=>l.body))}case"response":return a;default:throw new le(2809,!1)}}delete(t,i={}){return this.request("DELETE",t,i)}get(t,i={}){return this.request("GET",t,i)}head(t,i={}){return this.request("HEAD",t,i)}jsonp(t,i){return this.request("JSONP",t,{params:new Ke().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,i={}){return this.request("OPTIONS",t,i)}patch(t,i,o={}){return this.request("PATCH",t,fo(o,i))}post(t,i,o={}){return this.request("POST",t,fo(o,i))}put(t,i,o={}){return this.request("PUT",t,fo(o,i))}static \u0275fac=function(i){return new(i||e)(te(Vt))};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),su=/^\)\]\}',?\n/;function Ws(e){if(e.url)return e.url;let n=yo.toLocaleLowerCase();return e.headers.get(n)}var Qs=new L(""),pi=(()=>{class e{fetchImpl=f(go,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=f(In);handle(t){return new _i(i=>{let o=new AbortController;return this.doRequest(t,o.signal,i).then(mo,r=>i.error(new We({error:r}))),()=>o.abort()})}doRequest(t,i,o){return Sn(this,null,function*(){let r=this.createRequestInit(t),s;try{let h=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,E({signal:i},r)));au(h),o.next({type:qe.Sent}),s=yield h}catch(h){o.error(new We({error:h,status:h.status??0,statusText:h.statusText,url:t.urlWithParams,headers:h.headers}));return}let a=new $e(s.headers),l=s.statusText,c=Ws(s)??t.urlWithParams,u=s.status,d=null;if(t.reportProgress&&o.next(new dn({headers:a,status:u,statusText:l,url:c})),s.body){let h=s.headers.get("content-length"),m=[],g=s.body.getReader(),b=0,x,F,O=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>Sn(this,null,function*(){for(;;){let{done:ae,value:ke}=yield g.read();if(ae)break;if(m.push(ke),b+=ke.length,t.reportProgress){F=t.responseType==="text"?(F??"")+(x??=new TextDecoder).decode(ke,{stream:!0}):void 0;let st=()=>o.next({type:qe.DownloadProgress,total:h?+h:void 0,loaded:b,partialText:F});O?O.run(st):st()}}}));let z=this.concatChunks(m,b);try{let ae=s.headers.get(un)??"";d=this.parseBody(t,z,ae)}catch(ae){o.error(new We({error:ae,headers:new $e(s.headers),status:s.status,statusText:s.statusText,url:Ws(s)??t.urlWithParams}));return}}u===0&&(u=d?Zs:0),u>=200&&u<300?(o.next(new jt({body:d,headers:a,status:u,statusText:l,url:c})),o.complete()):o.error(new We({error:d,headers:a,status:u,statusText:l,url:c}))})}parseBody(t,i,o){switch(t.responseType){case"json":let r=new TextDecoder().decode(i).replace(su,"");return r===""?null:JSON.parse(r);case"text":return new TextDecoder().decode(i);case"blob":return new Blob([i],{type:o});case"arraybuffer":return i.buffer}}createRequestInit(t){let i={},o=t.withCredentials?"include":void 0;if(t.headers.forEach((r,s)=>i[r]=s.join(",")),t.headers.has(mi)||(i[mi]=Ys),!t.headers.has(un)){let r=t.detectContentTypeHeader();r!==null&&(i[un]=r)}return{body:t.serializeBody(),method:t.method,headers:i,credentials:o}}concatChunks(t,i){let o=new Uint8Array(i),r=0;for(let s of t)o.set(s,r),r+=s.length;return o}static \u0275fac=function(i){return new(i||e)};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),go=class{};function mo(){}function au(e){e.then(mo,mo)}function lu(e,n){return n(e)}function cu(e,n,t){return(i,o)=>xo(t,()=>n(i,r=>e(r,o)))}var vo=new L(""),Js=new L(""),ea=new L("",{providedIn:"root",factory:()=>!0});var bi=(()=>{class e extends Vt{backend;injector;chain=null;pendingTasks=f(Oo);contributeToStability=f(ea);constructor(t,i){super(),this.backend=t,this.injector=i}handle(t){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(vo),...this.injector.get(Js,[])]));this.chain=i.reduceRight((o,r)=>cu(o,r,this.injector),lu)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(t,o=>this.backend.handle(o)).pipe(To(()=>this.pendingTasks.remove(i)))}else return this.chain(t,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||e)(te(Bt),te(Io))};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var uu=/^\)\]\}',?\n/,du=RegExp(`^${yo}:`,"m");function hu(e){return"responseURL"in e&&e.responseURL?e.responseURL:du.test(e.getAllResponseHeaders())?e.getResponseHeader(yo):null}var bo=(()=>{class e{xhrFactory;constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new le(-2800,!1);let i=this.xhrFactory;return(i.\u0275loadImpl?An(i.\u0275loadImpl()):Di(null)).pipe(Fo(()=>new _i(r=>{let s=i.build();if(s.open(t.method,t.urlWithParams),t.withCredentials&&(s.withCredentials=!0),t.headers.forEach((g,b)=>s.setRequestHeader(g,b.join(","))),t.headers.has(mi)||s.setRequestHeader(mi,Ys),!t.headers.has(un)){let g=t.detectContentTypeHeader();g!==null&&s.setRequestHeader(un,g)}if(t.responseType){let g=t.responseType.toLowerCase();s.responseType=g!=="json"?g:"text"}let a=t.serializeBody(),l=null,c=()=>{if(l!==null)return l;let g=s.statusText||"OK",b=new $e(s.getAllResponseHeaders()),x=hu(s)||t.url;return l=new dn({headers:b,status:s.status,statusText:g,url:x}),l},u=()=>{let{headers:g,status:b,statusText:x,url:F}=c(),O=null;b!==ru&&(O=typeof s.response>"u"?s.responseText:s.response),b===0&&(b=O?Zs:0);let z=b>=200&&b<300;if(t.responseType==="json"&&typeof O=="string"){let ae=O;O=O.replace(uu,"");try{O=O!==""?JSON.parse(O):null}catch(ke){O=ae,z&&(z=!1,O={error:ke,text:O})}}z?(r.next(new jt({body:O,headers:g,status:b,statusText:x,url:F||void 0})),r.complete()):r.error(new We({error:O,headers:g,status:b,statusText:x,url:F||void 0}))},d=g=>{let{url:b}=c(),x=new We({error:g,status:s.status||0,statusText:s.statusText||"Unknown Error",url:b||void 0});r.error(x)},p=!1,h=g=>{p||(r.next(c()),p=!0);let b={type:qe.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(b.total=g.total),t.responseType==="text"&&s.responseText&&(b.partialText=s.responseText),r.next(b)},m=g=>{let b={type:qe.UploadProgress,loaded:g.loaded};g.lengthComputable&&(b.total=g.total),r.next(b)};return s.addEventListener("load",u),s.addEventListener("error",d),s.addEventListener("timeout",d),s.addEventListener("abort",d),t.reportProgress&&(s.addEventListener("progress",h),a!==null&&s.upload&&s.upload.addEventListener("progress",m)),s.send(a),r.next({type:qe.Sent}),()=>{s.removeEventListener("error",d),s.removeEventListener("abort",d),s.removeEventListener("load",u),s.removeEventListener("timeout",d),t.reportProgress&&(s.removeEventListener("progress",h),a!==null&&s.upload&&s.upload.removeEventListener("progress",m)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||e)(te(tn))};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),ta=new L(""),pu="XSRF-TOKEN",fu=new L("",{providedIn:"root",factory:()=>pu}),gu="X-XSRF-TOKEN",mu=new L("",{providedIn:"root",factory:()=>gu}),hn=class{},bu=(()=>{class e{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(t,i,o){this.doc=t,this.platform=i,this.cookieName=o}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ki(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(i){return new(i||e)(te(de),te(Ve),te(fu))};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();function yu(e,n){let t=e.url.toLowerCase();if(!f(ta)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return n(e);let i=f(hn).getToken(),o=f(mu);return i!=null&&!e.headers.has(o)&&(e=e.clone({headers:e.headers.set(o,i)})),n(e)}var yi=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(yi||{});function na(e,n){return{\u0275kind:e,\u0275providers:n}}function vu(...e){let n=[Xs,bo,bi,{provide:Vt,useExisting:bi},{provide:Bt,useFactory:()=>f(Qs,{optional:!0})??f(bo)},{provide:vo,useValue:yu,multi:!0},{provide:ta,useValue:!0},{provide:hn,useClass:bu}];for(let t of e)n.push(...t.\u0275providers);return Tn(n)}function _u(e){return na(yi.Interceptors,e.map(n=>({provide:vo,useValue:n,multi:!0})))}function Du(){return na(yi.Fetch,[pi,{provide:Qs,useExisting:pi},{provide:Bt,useExisting:pi}])}var Cu=["icon"],Eu=["content"],oa=e=>({$implicit:e}),wu=(e,n)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":e,"p-togglebutton-icon-right":n});function Su(e,n){e&1&&dt(0)}function Au(e,n){if(e&1&&Z(0,"span",1),e&2){let t=V(3);ee(t.checked?t.onIcon:t.offIcon),C("ngClass",Mn(4,wu,t.iconPos==="left",t.iconPos==="right")),I("data-pc-section","icon")}}function Tu(e,n){if(e&1&&G(0,Au,1,7,"span",3),e&2){let t=V(2);Et(t.onIcon||t.offIcon?0:-1)}}function Fu(e,n){e&1&&dt(0)}function Iu(e,n){if(e&1&&G(0,Fu,1,0,"ng-container",2),e&2){let t=V(2);C("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Xe(2,oa,t.checked))}}function xu(e,n){if(e&1&&(G(0,Tu,1,1)(1,Iu,1,4,"ng-container"),W(2,"span",1),wt(3),Y()),e&2){let t=V();Et(t.iconTemplate?1:0),T(2),C("ngClass",t.cx("label")),I("data-pc-section","label"),T(),St(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var Ou=({dt:e})=>`
p-togglebutton {
    display: inline-flex;
}

.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("togglebutton.color")};
    background: ${e("togglebutton.background")};
    border: 1px solid ${e("togglebutton.border.color")};
    padding: ${e("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
        outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    border-radius: ${e("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${e("togglebutton.font.weight")};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${e("togglebutton.gap")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
            outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    position: absolute;
    inset-inline-start: ${e("togglebutton.content.left")};
    top: ${e("togglebutton.content.top")};
    width: calc(100% - calc(2 *  ${e("togglebutton.content.left")}));
    height: calc(100% - calc(2 *  ${e("togglebutton.content.top")}));
    border-radius: ${e("togglebutton.border.radius")};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${e("togglebutton.content.checked.background")};
    box-shadow: ${e("togglebutton.content.checked.shadow")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${e("togglebutton.hover.background")};
    color: ${e("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${e("togglebutton.checked.background")};
    border-color: ${e("togglebutton.checked.border.color")};
    color: ${e("togglebutton.checked.color")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${e("togglebutton.focus.ring.shadow")};
    outline: ${e("togglebutton.focus.ring.width")} ${e("togglebutton.focus.ring.style")} ${e("togglebutton.focus.ring.color")};
    outline-offset: ${e("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${e("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${e("togglebutton.disabled.background")};
    border-color: ${e("togglebutton.disabled.border.color")};
    color: ${e("togglebutton.disabled.color")};
}

.p-togglebutton-icon {
    color: ${e("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${e("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${e("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${e("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${e("togglebutton.sm.padding")};
    font-size: ${e("togglebutton.sm.font.size")};
}

.p-togglebutton-lg {
    padding: ${e("togglebutton.lg.padding")};
    font-size: ${e("togglebutton.lg.font.size")};
}

/* For PrimeNG (iconPos) */

.p-togglebutton-icon-right {
    order: 1;
}

p-togglebutton.ng-invalid.ng-dirty > .p-togglebutton {
    border-color: ${e("togglebutton.invalid.border.color")};
}
`,Mu={root:({instance:e})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":e.checked,"p-disabled":e.disabled,"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},ia=(()=>{class e extends H{name="togglebutton";theme=Ou;classes=Mu;static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var ku={provide:Pe,useExisting:ve(()=>vi),multi:!0},vi=(()=>{class e extends q{onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;get hostClass(){return this.styleClass||""}inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new J;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=f(ia);toggle(t){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275cmp=U({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(i,o,r){if(i&1&&(ue(r,Cu,4),ue(r,Eu,4),ue(r,tt,4)),i&2){let s;oe(s=re())&&(o.iconTemplate=s.first),oe(s=re())&&(o.contentTemplate=s.first),oe(s=re())&&(o.templates=s)}},hostVars:2,hostBindings:function(i,o){i&2&&ee(o.hostClass)},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",_],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",Ue],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",_],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[M([ku,ia]),w],decls:4,vars:15,consts:[["pRipple","","type","button",3,"click","ngClass","tabindex","disabled"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(i,o){i&1&&(W(0,"button",0),ge("click",function(s){return o.toggle(s)}),W(1,"span",1),G(2,Su,1,0,"ng-container",2)(3,xu,4,4),Y()()),i&2&&(ee(o.styleClass),C("ngClass",o.cx("root"))("tabindex",o.tabindex)("disabled",o.disabled),I("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("data-p-checked",o.active)("data-p-disabled",o.disabled),T(),C("ngClass",o.cx("content")),T(),C("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",Xe(13,oa,o.checked)),T(),Et(o.contentTemplate?-1:3))},dependencies:[Qn,ye,yt,He,Q],encapsulation:2,changeDetection:0})}return e})(),Db=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=$({type:e});static \u0275inj=P({imports:[vi,Q,Q]})}return e})();var Ru=["item"],Lu=(e,n)=>({$implicit:e,index:n});function Nu(e,n){e&1&&dt(0)}function Pu(e,n){if(e&1&&G(0,Nu,1,0,"ng-container",3),e&2){let t=V(2),i=t.$implicit,o=t.$index,r=V();C("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",Mn(2,Lu,i,o))}}function $u(e,n){e&1&&G(0,Pu,1,5,"ng-template",null,0,Uo)}function Vu(e,n){if(e&1){let t=On();W(0,"p-toggleButton",2),ge("onChange",function(o){let r=_t(t),s=r.$implicit,a=r.$index,l=V();return Dt(l.onOptionSelect(o,s,a))}),G(1,$u,2,0),Y()}if(e&2){let t=n.$implicit,i=V();C("autofocus",i.autofocus)("styleClass",i.styleClass)("ngModel",i.isSelected(t))("onLabel",i.getOptionLabel(t))("offLabel",i.getOptionLabel(t))("disabled",i.disabled||i.isOptionDisabled(t))("allowEmpty",i.allowEmpty)("size",i.size),T(),Et(i.itemTemplate||i._itemTemplate?1:-1)}}var Bu=({dt:e})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton p-togglebutton:first-child .p-togglebutton {
    border-left-width: 1px;
    border-start-start-radius: ${e("selectbutton.border.radius")};
    border-end-start-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton p-togglebutton:last-child .p-togglebutton{
    border-start-end-radius: ${e("selectbutton.border.radius")};
    border-end-end-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${e("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,Uu={root:({props:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid}]},ra=(()=>{class e extends H{name="selectbutton";theme=Bu;classes=Uu;static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var ju={provide:Pe,useExisting:ve(()=>sa),multi:!0},sa=(()=>{class e extends q{options;optionLabel;optionValue;optionDisabled;unselectable=!1;tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new J;onChange=new J;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=f(ra);getOptionLabel(t){return this.optionLabel?Je(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?Je(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?Je(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionSelect(t,i,o){if(this.disabled||this.isOptionDisabled(i))return;let r=this.isSelected(i);if(r&&this.unselectable)return;let s=this.getOptionValue(i),a;if(this.multiple)r?a=this.value.filter(l=>!Le(l,s,this.equalityKey)):a=this.value?[...this.value,s]:[s];else{if(r&&!this.allowEmpty)return;a=r?null:s}this.focusedIndex=o,this.value=a,this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:i,index:o})}changeTabIndexes(t,i){let o,r;for(let s=0;s<=this.el.nativeElement.children.length-1;s++)this.el.nativeElement.children[s].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[s],index:s});i==="prev"?o.index===0?r=this.el.nativeElement.children.length-1:r=o.index-1:o.index===this.el.nativeElement.children.length-1?r=0:r=o.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(t,i){this.focusedIndex=i}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(i=>!Le(i,this.getOptionValue(t),this.dataKey))}isSelected(t){let i=!1,o=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(Le(r,o,this.dataKey)){i=!0;break}}}else i=Le(this.getOptionValue(t),this.value,this.equalityKey);return i}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275cmp=U({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(i,o,r){if(i&1&&(ue(r,Ru,4),ue(r,tt,4)),i&2){let s;oe(s=re())&&(o.itemTemplate=s.first),oe(s=re())&&(o.templates=s)}},hostVars:10,hostBindings:function(i,o){i&2&&(I("role","group")("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),lt(o.style),Te("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",_],tabindex:[2,"tabindex","tabindex",Ue],multiple:[2,"multiple","multiple",_],allowEmpty:[2,"allowEmpty","allowEmpty",_],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",_],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",_]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[M([ju,ra]),w],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&No(0,Vu,2,9,"p-toggleButton",1,Lo),i&2&&Po(o.options)},dependencies:[vi,Vs,xs,cn,ye,He,Q],encapsulation:2,changeDetection:0})}return e})(),Bb=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=$({type:e});static \u0275inj=P({imports:[sa,Q,Q]})}return e})();var aa=class e{static isArray(n,t=!0){return Array.isArray(n)&&(t||n.length!==0)}static isObject(n,t=!0){return typeof n=="object"&&!Array.isArray(n)&&n!=null&&(t||Object.keys(n).length!==0)}static equals(n,t,i){return i?this.resolveFieldData(n,i)===this.resolveFieldData(t,i):this.equalsByValue(n,t)}static equalsByValue(n,t){if(n===t)return!0;if(n&&t&&typeof n=="object"&&typeof t=="object"){var i=Array.isArray(n),o=Array.isArray(t),r,s,a;if(i&&o){if(s=n.length,s!=t.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(n[r],t[r]))return!1;return!0}if(i!=o)return!1;var l=this.isDate(n),c=this.isDate(t);if(l!=c)return!1;if(l&&c)return n.getTime()==t.getTime();var u=n instanceof RegExp,d=t instanceof RegExp;if(u!=d)return!1;if(u&&d)return n.toString()==t.toString();var p=Object.keys(n);if(s=p.length,s!==Object.keys(t).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.equalsByValue(n[a],t[a]))return!1;return!0}return n!==n&&t!==t}static resolveFieldData(n,t){if(n&&t){if(this.isFunction(t))return t(n);if(t.indexOf(".")==-1)return n[t];{let i=t.split("."),o=n;for(let r=0,s=i.length;r<s;++r){if(o==null)return null;o=o[i[r]]}return o}}else return null}static isFunction(n){return!!(n&&n.constructor&&n.call&&n.apply)}static reorderArray(n,t,i){let o;n&&t!==i&&(i>=n.length&&(i%=n.length,t%=n.length),n.splice(i,0,n.splice(t,1)[0]))}static insertIntoOrderedArray(n,t,i,o){if(i.length>0){let r=!1;for(let s=0;s<i.length;s++)if(this.findIndexInList(i[s],o)>t){i.splice(s,0,n),r=!0;break}r||i.push(n)}else i.push(n)}static findIndexInList(n,t){let i=-1;if(t){for(let o=0;o<t.length;o++)if(t[o]==n){i=o;break}}return i}static contains(n,t){if(n!=null&&t&&t.length){for(let i of t)if(this.equals(n,i))return!0}return!1}static removeAccents(n){return n&&(n=n.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),n}static isDate(n){return Object.prototype.toString.call(n)==="[object Date]"}static isEmpty(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!this.isDate(n)&&typeof n=="object"&&Object.keys(n).length===0}static isNotEmpty(n){return!this.isEmpty(n)}static compare(n,t,i,o=1){let r=-1,s=this.isEmpty(n),a=this.isEmpty(t);return s&&a?r=0:s?r=o:a?r=-o:typeof n=="string"&&typeof t=="string"?r=n.localeCompare(t,i,{numeric:!0}):r=n<t?-1:n>t?1:0,r}static sort(n,t,i=1,o,r=1){let s=e.compare(n,t,o,i),a=i;return(e.isEmpty(n)||e.isEmpty(t))&&(a=r===1?i:r),a*s}static merge(n,t){if(!(n==null&&t==null)){{if((n==null||typeof n=="object")&&(t==null||typeof t=="object"))return E(E({},n||{}),t||{});if((n==null||typeof n=="string")&&(t==null||typeof t=="string"))return[n||"",t||""].join(" ")}return t||n}}static isPrintableCharacter(n=""){return this.isNotEmpty(n)&&n.length===1&&n.match(/\S| /)}static getItemValue(n,...t){return this.isFunction(n)?n(...t):n}static findLastIndex(n,t){let i=-1;if(this.isNotEmpty(n))try{i=n.findLastIndex(t)}catch{i=n.lastIndexOf([...n].reverse().find(t))}return i}static findLast(n,t){let i;if(this.isNotEmpty(n))try{i=n.findLast(t)}catch{i=[...n].reverse().find(t)}return i}static deepEquals(n,t){if(n===t)return!0;if(n&&t&&typeof n=="object"&&typeof t=="object"){var i=Array.isArray(n),o=Array.isArray(t),r,s,a;if(i&&o){if(s=n.length,s!=t.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(n[r],t[r]))return!1;return!0}if(i!=o)return!1;var l=n instanceof Date,c=t instanceof Date;if(l!=c)return!1;if(l&&c)return n.getTime()==t.getTime();var u=n instanceof RegExp,d=t instanceof RegExp;if(u!=d)return!1;if(u&&d)return n.toString()==t.toString();var p=Object.keys(n);if(s=p.length,s!==Object.keys(t).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.deepEquals(n[a],t[a]))return!1;return!0}return n!==n&&t!==t}static minifyCSS(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(n){return this.isString(n)?n.replace(/(-|_)/g,"").toLowerCase():n}static isString(n,t=!0){return typeof n=="string"&&(t||n!=="")}},la=0;function ay(e="pn_id_"){return la++,`${e}${la}`}function Hu(){let e=[],n=(r,s)=>{let a=e.length>0?e[e.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return e.push({key:r,value:l}),l},t=r=>{e=e.filter(s=>s.value!==r)},i=()=>e.length>0?e[e.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(n(r,a)))},clear:r=>{r&&(t(o(r)),r.style.zIndex="")},getCurrent:()=>i(),generateZIndex:n,revertZIndex:t}}var ly=Hu(),cy=e=>!!e;var zu=["checkboxicon"],Gu=["input"],Wu=()=>({"p-checkbox-input":!0}),Ku=e=>({checked:e,class:"p-checkbox-icon"});function qu(e,n){if(e&1&&Z(0,"span",8),e&2){let t=V(3);C("ngClass",t.checkboxIcon),I("data-pc-section","icon")}}function Yu(e,n){e&1&&Z(0,"CheckIcon",9),e&2&&(C("styleClass","p-checkbox-icon"),I("data-pc-section","icon"))}function Zu(e,n){if(e&1&&(ct(0),G(1,qu,1,2,"span",7)(2,Yu,1,2,"CheckIcon",6),ut()),e&2){let t=V(2);T(),C("ngIf",t.checkboxIcon),T(),C("ngIf",!t.checkboxIcon)}}function Xu(e,n){e&1&&Z(0,"MinusIcon",9),e&2&&(C("styleClass","p-checkbox-icon"),I("data-pc-section","icon"))}function Qu(e,n){if(e&1&&(ct(0),G(1,Zu,3,2,"ng-container",4)(2,Xu,1,2,"MinusIcon",6),ut()),e&2){let t=V();T(),C("ngIf",t.checked),T(),C("ngIf",t._indeterminate())}}function Ju(e,n){}function ed(e,n){e&1&&G(0,Ju,0,0,"ng-template")}var td=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,nd={root:({instance:e,props:n})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":n.disabled,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},ca=(()=>{class e extends H{name="checkbox";theme=td;classes=nd;static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var id={provide:Pe,useExisting:ve(()=>ua),multi:!0},ua=(()=>{class e extends q{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new J;onFocus=new J;onBlur=new J;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:or(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=pe(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=f(ca);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._checkboxIconTemplate=t.template;break;case"checkboxicon":this._checkboxIconTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t),t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}updateModel(t){let i,o=this.injector.get(Ge,null,{optional:!0,self:!0}),r=o&&!this.formControl?o.value:this.model;this.binary?(i=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=i,this.onModelChange(i)):(this.checked||this._indeterminate()?i=r.filter(s=>!Le(s,this.value)):i=r?[...r,this.value]:[this.value],this.onModelChange(i),this.model=i,this.formControl&&this.formControl.setValue(i)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:i,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){setTimeout(()=>{this.disabled=t,this.cd.markForCheck()})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(e)))(o||e)}})();static \u0275cmp=U({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(i,o,r){if(i&1&&(ue(r,zu,4),ue(r,tt,4)),i&2){let s;oe(s=re())&&(o.checkboxIconTemplate=s.first),oe(s=re())&&(o.templates=s)}},viewQuery:function(i,o){if(i&1&&$o(Gu,5),i&2){let r;oe(r=re())&&(o.inputViewChild=r.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",_],binary:[2,"binary","binary",_],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Ue],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",_],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",_],required:[2,"required","required",_],autofocus:[2,"autofocus","autofocus",_],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[M([id,ca]),w,ce],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(i,o){if(i&1){let r=On();W(0,"div",1)(1,"input",2,0),ge("focus",function(a){return _t(r),Dt(o.onInputFocus(a))})("blur",function(a){return _t(r),Dt(o.onInputBlur(a))})("change",function(a){return _t(r),Dt(o.handleChange(a))}),Y(),W(3,"div",3),G(4,Qu,3,2,"ng-container",4)(5,ed,1,0,null,5),Y()()}i&2&&(lt(o.style),ee(o.styleClass),C("ngClass",o.containerClass),I("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.disabled),T(),lt(o.inputStyle),ee(o.inputClass),C("value",o.value)("checked",o.checked)("disabled",o.disabled)("readonly",o.readonly)("ngClass",Bo(26,Wu)),I("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("required",o.required?!0:null)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),T(3),C("ngIf",!o.checkboxIconTemplate&&!o._checkboxIconTemplate),T(),C("ngTemplateOutlet",o.checkboxIconTemplate||o._checkboxIconTemplate)("ngTemplateOutletContext",Xe(27,Ku,o.checked)))},dependencies:[ye,yt,en,He,Jr,es,Q],encapsulation:2,changeDetection:0})}return e})(),xy=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=$({type:e});static \u0275inj=P({imports:[ua,Q,Q]})}return e})();export{de as a,bt as b,za as c,Ni as d,Ga as e,xt as f,ur as g,dr as h,Ya as i,yt as j,Rr as k,en as l,Lr as m,yl as n,Gi as o,He as p,_l as q,Dl as r,wl as s,ye as t,Ki as u,$r as v,nn as w,qi as x,tn as y,pp as z,qe as A,Xs as B,vu as C,_u as D,Du as E,Wo as F,Qe as G,rd as H,ft as I,sd as J,Fi as K,xa as L,Oa as M,ad as N,qo as O,Ii as P,ld as Q,cd as R,ud as S,Go as T,dd as U,hd as V,pd as W,Ma as X,It as Y,fd as Z,gd as _,Yo as $,md as aa,Oi as ba,ka as ca,Ra as da,bd as ea,yd as fa,Mi as ga,Rn as ha,vd as ia,_d as ja,ki as ka,Dd as la,Na as ma,Cd as na,Ed as oa,wd as pa,Sd as qa,Ad as ra,Td as sa,Fd as ta,Qo as ua,ne as va,Ua as wa,ir as xa,k as ya,Je as za,Le as Aa,ja as Ba,Md as Ca,kd as Da,we as Ea,Rd as Fa,Nn as Ga,Ld as Ha,Nd as Ia,De as Ja,Pd as Ka,qt as La,Tl as Ma,Dp as Na,ie as Oa,Cp as Pa,Ep as Qa,wp as Ra,Sp as Sa,Ap as Ta,Tp as Ua,tt as Va,Q as Wa,Fp as Xa,Ip as Ya,$p as Za,Nl as _a,Up as $a,jp as ab,H as bb,Qi as cb,df as db,Pe as eb,bs as fb,ss as gb,Ge as hb,xs as ib,cm as jb,cn as kb,dm as lb,zc as mb,Wc as nb,qc as ob,Xc as pb,hm as qb,Vs as rb,pm as sb,q as tb,Qn as ub,Cg as vb,vi as wb,Db as xb,sa as yb,Bb as zb,Ji as Ab,Yr as Bb,Zr as Cb,kf as Db,eo as Eb,Qr as Fb,nt as Gb,Jr as Hb,es as Ib,ts as Jb,hg as Kb,zg as Lb,mc as Mb,Gg as Nb,aa as Ob,ay as Pb,ly as Qb,cy as Rb,ua as Sb,xy as Tb,Sm as Ub,Am as Vb};
