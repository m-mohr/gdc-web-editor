"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[9194],{75505:(e,t,r)=>{var a=r(82109),n=r(17854),s=r(35005),i=r(1702),o=r(46916),c=r(47293),u=r(41340),l=r(92597),h=r(48053),f=r(14170).ctoi,p=/[^\d+/a-z]/i,g=/[\t\n\f\r ]+/g,m=/[=]{1,2}$/,d=s("atob"),v=String.fromCharCode,y=i("".charAt),b=i("".replace),w=i(p.exec),k=c((function(){return""!==d(" ")})),A=!c((function(){d("a")})),E=!k&&!A&&!c((function(){d()})),S=!k&&!A&&1!==d.length;a({global:!0,bind:!0,enumerable:!0,forced:k||A||E||S},{atob:function(e){if(h(arguments.length,1),E||S)return o(d,n,e);var t,r,a=b(u(e),g,""),i="",c=0,k=0;if(a.length%4===0&&(a=b(a,m,"")),a.length%4===1||w(p,a))throw new(s("DOMException"))("The string is not correctly encoded","InvalidCharacterError");while(t=y(a,c++))l(f,t)&&(r=k%4?64*r+f[t]:f[t],k++%4&&(i+=v(255&r>>(-2*k&6))));return i}})},27479:(e,t,r)=>{var a=r(82109),n=r(17854),s=r(35005),i=r(1702),o=r(46916),c=r(47293),u=r(41340),l=r(48053),h=r(14170).itoc,f=s("btoa"),p=i("".charAt),g=i("".charCodeAt),m=!!f&&!c((function(){f()})),d=!!f&&c((function(){return"bnVsbA=="!==f(null)})),v=!!f&&1!==f.length;a({global:!0,bind:!0,enumerable:!0,forced:m||d||v},{btoa:function(e){if(l(arguments.length,1),m||d||v)return o(f,n,u(e));var t,r,a=u(e),i="",c=0,y=h;while(p(a,c)||(y="=",c%1)){if(r=g(a,c+=3/4),r>255)throw new(s("DOMException"))("The string contains characters outside of the Latin1 range","InvalidCharacterError");t=t<<8|r,i+=p(y,63&t>>8-c%1*8)}return i}})},11091:(e,t,r)=>{var a=r(82109),n=r(17854),s=r(20261).clear;a({global:!0,bind:!0,enumerable:!0,forced:n.clearImmediate!==s},{clearImmediate:s})},54747:(e,t,r)=>{var a=r(17854),n=r(48324),s=r(98509),i=r(18533),o=r(68880),c=function(e){if(e&&e.forEach!==i)try{o(e,"forEach",i)}catch(t){e.forEach=i}};for(var u in n)n[u]&&c(a[u]&&a[u].prototype);c(s)},33948:(e,t,r)=>{var a=r(17854),n=r(48324),s=r(98509),i=r(66992),o=r(68880),c=r(5112),u=c("iterator"),l=c("toStringTag"),h=i.values,f=function(e,t){if(e){if(e[u]!==h)try{o(e,u,h)}catch(a){e[u]=h}if(e[l]||o(e,l,t),n[t])for(var r in i)if(e[r]!==i[r])try{o(e,r,i[r])}catch(a){e[r]=i[r]}}};for(var p in n)f(a[p]&&a[p].prototype,p);f(s,"DOMTokenList")},87714:(e,t,r)=>{var a=r(82109),n=r(44038),s=r(35005),i=r(47293),o=r(70030),c=r(79114),u=r(3070).f,l=r(98052),h=r(47045),f=r(92597),p=r(25787),g=r(19670),m=r(7762),d=r(56277),v=r(93678),y=r(11060),b=r(29909),w=r(19781),k=r(31913),A="DOMException",E="DATA_CLONE_ERR",S=s("Error"),U=s(A)||function(){try{var e=s("MessageChannel")||n("worker_threads").MessageChannel;(new e).port1.postMessage(new WeakMap)}catch(t){if(t.name===E&&25===t.code)return t.constructor}}(),R=U&&U.prototype,P=S.prototype,O=b.set,L=b.getterFor(A),B="stack"in S(A),C=function(e){return f(v,e)&&v[e].m?v[e].c:0},D=function(){p(this,M);var e=arguments.length,t=d(e<1?void 0:arguments[0]),r=d(e<2?void 0:arguments[1],"Error"),a=C(r);if(O(this,{type:A,name:r,message:t,code:a}),w||(this.name=r,this.message=t,this.code=a),B){var n=S(t);n.name=A,u(this,"stack",c(1,y(n.stack,1)))}},M=D.prototype=o(P),I=function(e){return{enumerable:!0,configurable:!0,get:e}},x=function(e){return I((function(){return L(this)[e]}))};w&&(h(M,"code",x("code")),h(M,"message",x("message")),h(M,"name",x("name"))),u(M,"constructor",c(1,D));var H=i((function(){return!(new U instanceof S)})),q=H||i((function(){return P.toString!==m||"2: 1"!==String(new U(1,2))})),T=H||i((function(){return 25!==new U(1,"DataCloneError").code})),j=H||25!==U[E]||25!==R[E],F=k?q||T||j:H;a({global:!0,constructor:!0,forced:F},{DOMException:F?D:U});var z=s(A),_=z.prototype;for(var V in q&&(k||U===z)&&l(_,"toString",m),T&&w&&U===z&&h(_,"code",I((function(){return C(g(this).name)}))),v)if(f(v,V)){var $=v[V],G=$.s,Q=c(6,$.c);f(z,G)||u(z,G,Q),f(_,G)||u(_,G,Q)}},82801:(e,t,r)=>{var a=r(82109),n=r(17854),s=r(35005),i=r(79114),o=r(3070).f,c=r(92597),u=r(25787),l=r(79587),h=r(56277),f=r(93678),p=r(11060),g=r(19781),m=r(31913),d="DOMException",v=s("Error"),y=s(d),b=function(){u(this,w);var e=arguments.length,t=h(e<1?void 0:arguments[0]),r=h(e<2?void 0:arguments[1],"Error"),a=new y(t,r),n=v(t);return n.name=d,o(a,"stack",i(1,p(n.stack,1))),l(a,this,b),a},w=b.prototype=y.prototype,k="stack"in v(d),A="stack"in new y(1,2),E=y&&g&&Object.getOwnPropertyDescriptor(n,d),S=!!E&&!(E.writable&&E.configurable),U=k&&!S&&!A;a({global:!0,constructor:!0,forced:m||U},{DOMException:U?b:y});var R=s(d),P=R.prototype;if(P.constructor!==R)for(var O in m||o(P,"constructor",i(1,R)),f)if(c(f,O)){var L=f[O],B=L.s;c(R,B)||o(R,B,i(6,L.c))}},1174:(e,t,r)=>{var a=r(35005),n=r(58003),s="DOMException";n(a(s),s)},84633:(e,t,r)=>{r(11091),r(12986)},85844:(e,t,r)=>{var a=r(82109),n=r(17854),s=r(95948),i=r(19662),o=r(48053),c=r(35268),u=n.process;a({global:!0,enumerable:!0,dontCallGetSet:!0},{queueMicrotask:function(e){o(arguments.length,1),i(e);var t=c&&u.domain;s(t?t.bind(e):e)}})},71550:(e,t,r)=>{var a=r(82109),n=r(17854),s=r(47045),i=r(19781),o=TypeError,c=Object.defineProperty,u=n.self!==n;try{if(i){var l=Object.getOwnPropertyDescriptor(n,"self");!u&&l&&l.get&&l.enumerable||s(n,"self",{get:function(){return n},set:function(e){if(this!==n)throw o("Illegal invocation");c(n,"self",{value:e,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})}else a({global:!0,simple:!0,forced:u},{self:n})}catch(h){}},12986:(e,t,r)=>{var a=r(82109),n=r(17854),s=r(20261).set,i=r(17152),o=n.setImmediate?i(s,!1):s;a({global:!0,bind:!0,enumerable:!0,forced:n.setImmediate!==o},{setImmediate:o})},96815:(e,t,r)=>{var a=r(82109),n=r(17854),s=r(17152),i=s(n.setInterval,!0);a({global:!0,bind:!0,forced:n.setInterval!==i},{setInterval:i})},88417:(e,t,r)=>{var a=r(82109),n=r(17854),s=r(17152),i=s(n.setTimeout,!0);a({global:!0,bind:!0,forced:n.setTimeout!==i},{setTimeout:i})},61295:(e,t,r)=>{var a=r(31913),n=r(82109),s=r(17854),i=r(35005),o=r(1702),c=r(47293),u=r(69711),l=r(60614),h=r(4411),f=r(68554),p=r(70111),g=r(52190),m=r(20408),d=r(19670),v=r(70648),y=r(92597),b=r(86135),w=r(68880),k=r(26244),A=r(48053),E=r(34706),S=r(75706),U=r(79405),R=r(22914),P=r(64124),O=s.Object,L=s.Array,B=s.Date,C=s.Error,D=s.EvalError,M=s.RangeError,I=s.ReferenceError,x=s.SyntaxError,H=s.TypeError,q=s.URIError,T=s.PerformanceMark,j=s.WebAssembly,F=j&&j.CompileError||C,z=j&&j.LinkError||C,_=j&&j.RuntimeError||C,V=i("DOMException"),$=S.Map,G=S.has,Q=S.get,N=S.set,W=U.Set,J=U.add,K=i("Object","keys"),X=o([].push),Y=o((!0).valueOf),Z=o(1..valueOf),ee=o("".valueOf),te=o(B.prototype.getTime),re=u("structuredClone"),ae="DataCloneError",ne="Transferring",se=function(e){return!c((function(){var t=new s.Set([7]),r=e(t),a=e(O(7));return r===t||!r.has(7)||"object"!=typeof a||7!==a}))&&e},ie=function(e,t){return!c((function(){var r=new t,a=e({a:r,b:r});return!(a&&a.a===a.b&&a.a instanceof t&&a.a.stack===r.stack)}))},oe=function(e){return!c((function(){var t=e(new s.AggregateError([1],re,{cause:3}));return"AggregateError"!==t.name||1!==t.errors[0]||t.message!==re||3!==t.cause}))},ce=s.structuredClone,ue=a||!ie(ce,C)||!ie(ce,V)||!oe(ce),le=!ce&&se((function(e){return new T(re,{detail:e}).detail})),he=se(ce)||le,fe=function(e){throw new V("Uncloneable type: "+e,ae)},pe=function(e,t){throw new V((t||"Cloning")+" of "+e+" cannot be properly polyfilled in this engine",ae)},ge=function(e,t){return he||pe(t),he(e)},me=function(){var e;try{e=new s.DataTransfer}catch(t){try{e=new s.ClipboardEvent("").clipboardData}catch(r){}}return e&&e.items&&e.files?e:null},de=function(e,t,r){if(G(t,e))return Q(t,e);var a,n,i,o,c,u,l=r||v(e);if("SharedArrayBuffer"===l)a=he?he(e):e;else{var h=s.DataView;h||"function"==typeof e.slice||pe("ArrayBuffer");try{if("function"!=typeof e.slice||e.resizable){n=e.byteLength,i="maxByteLength"in e?{maxByteLength:e.maxByteLength}:void 0,a=new ArrayBuffer(n,i),o=new h(e),c=new h(a);for(u=0;u<n;u++)c.setUint8(u,o.getUint8(u))}else a=e.slice(0)}catch(f){throw new V("ArrayBuffer is detached",ae)}}return N(t,e,a),a},ve=function(e,t,r,a,n){var i=s[t];return p(i)||pe(t),new i(de(e.buffer,n),r,a)},ye=function(e,t,r){this.object=e,this.type=t,this.metadata=r},be=function(e,t,r){if(g(e)&&fe("Symbol"),!p(e))return e;if(t){if(G(t,e))return Q(t,e)}else t=new $;var a,n,o,c,u,h,f,m,d=v(e);switch(d){case"Array":o=L(k(e));break;case"Object":o={};break;case"Map":o=new $;break;case"Set":o=new W;break;case"RegExp":o=new RegExp(e.source,E(e));break;case"Error":switch(n=e.name,n){case"AggregateError":o=i("AggregateError")([]);break;case"EvalError":o=D();break;case"RangeError":o=M();break;case"ReferenceError":o=I();break;case"SyntaxError":o=x();break;case"TypeError":o=H();break;case"URIError":o=q();break;case"CompileError":o=F();break;case"LinkError":o=z();break;case"RuntimeError":o=_();break;default:o=C()}break;case"DOMException":o=new V(e.message,e.name);break;case"ArrayBuffer":case"SharedArrayBuffer":o=r?new ye(e,d):de(e,t,d);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":h="DataView"===d?e.byteLength:e.length,o=r?new ye(e,d,{offset:e.byteOffset,length:h}):ve(e,d,e.byteOffset,h,t);break;case"DOMQuad":try{o=new DOMQuad(be(e.p1,t,r),be(e.p2,t,r),be(e.p3,t,r),be(e.p4,t,r))}catch(A){o=ge(e,d)}break;case"File":if(he)try{o=he(e),v(o)!==d&&(o=void 0)}catch(A){}if(!o)try{o=new File([e],e.name,e)}catch(A){}o||pe(d);break;case"FileList":if(c=me(),c){for(u=0,h=k(e);u<h;u++)c.items.add(be(e[u],t,r));o=c.files}else o=ge(e,d);break;case"ImageData":try{o=new ImageData(be(e.data,t,r),e.width,e.height,{colorSpace:e.colorSpace})}catch(A){o=ge(e,d)}break;default:if(he)o=he(e);else switch(d){case"BigInt":o=O(e.valueOf());break;case"Boolean":o=O(Y(e));break;case"Number":o=O(Z(e));break;case"String":o=O(ee(e));break;case"Date":o=new B(te(e));break;case"Blob":try{o=e.slice(0,e.size,e.type)}catch(A){pe(d)}break;case"DOMPoint":case"DOMPointReadOnly":a=s[d];try{o=a.fromPoint?a.fromPoint(e):new a(e.x,e.y,e.z,e.w)}catch(A){pe(d)}break;case"DOMRect":case"DOMRectReadOnly":a=s[d];try{o=a.fromRect?a.fromRect(e):new a(e.x,e.y,e.width,e.height)}catch(A){pe(d)}break;case"DOMMatrix":case"DOMMatrixReadOnly":a=s[d];try{o=a.fromMatrix?a.fromMatrix(e):new a(e)}catch(A){pe(d)}break;case"AudioData":case"VideoFrame":l(e.clone)||pe(d);try{o=e.clone()}catch(A){fe(d)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":pe(d);default:fe(d)}}switch(N(t,e,o),d){case"Array":case"Object":for(f=K(e),u=0,h=k(f);u<h;u++)m=f[u],b(o,m,be(e[m],t,r));break;case"Map":e.forEach((function(e,a){N(o,be(a,t,r),be(e,t,r))}));break;case"Set":e.forEach((function(e){J(o,be(e,t,r))}));break;case"Error":w(o,"message",be(e.message,t,r)),y(e,"cause")&&w(o,"cause",be(e.cause,t,r)),"AggregateError"===n&&(o.errors=be(e.errors,t,r));case"DOMException":R&&w(o,"stack",be(e.stack,t,r))}return o},we=function(e,t){if(!p(e))return e;if(G(t,e))return Q(t,e);var r,a,n,s,i,o,c,u;if(e instanceof ye)switch(r=e.type,a=e.object,r){case"ArrayBuffer":case"SharedArrayBuffer":u=de(a,t,r);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":n=e.metadata,u=ve(a,r,n.offset,n.length,t)}else switch(v(e)){case"Array":case"Object":for(o=K(e),s=0,i=k(o);s<i;s++)c=o[s],e[c]=we(e[c],t);break;case"Map":u=new $,e.forEach((function(e,r){N(u,we(r,t),we(e,t))}));break;case"Set":u=new W,e.forEach((function(e){J(u,we(e,t))}));break;case"Error":e.message=we(e.message,t),y(e,"cause")&&(e.cause=we(e.cause,t)),"AggregateError"===e.name&&(e.errors=we(e.errors,t));case"DOMException":R&&(e.stack=we(e.stack,t))}return N(t,e,u||e),u||e},ke=function(e,t){if(!p(e))throw H("Transfer option cannot be converted to a sequence");var r=[];m(e,(function(e){X(r,d(e))}));var a,n,i,o,c,u,f=0,g=k(r),y=[];while(f<g)if(a=r[f++],n=v(a),"ArrayBuffer"!==n){if(G(t,a))throw new V("Duplicate transferable",ae);if(P)o=ce(a,{transfer:[a]});else switch(n){case"ImageBitmap":i=s.OffscreenCanvas,h(i)||pe(n,ne);try{c=new i(a.width,a.height),u=c.getContext("bitmaprenderer"),u.transferFromImageBitmap(a),o=c.transferToImageBitmap()}catch(b){}break;case"AudioData":case"VideoFrame":l(a.clone)&&l(a.close)||pe(n,ne);try{o=a.clone(),a.close()}catch(b){}break;case"MediaSourceHandle":case"MessagePort":case"OffscreenCanvas":case"ReadableStream":case"TransformStream":case"WritableStream":pe(n,ne)}if(void 0===o)throw new V("This object cannot be transferred: "+n,ae);N(t,a,o)}else X(y,a);return y},Ae=function(e,t){var r,a,n=0,s=k(e);while(n<s){if(r=e[n++],G(t,r))throw new V("Duplicate transferable",ae);P?a=ce(r,{transfer:[r]}):(l(r.transfer)||pe("ArrayBuffer",ne),a=r.transfer()),N(t,r,a)}};n({global:!0,enumerable:!0,sham:!P,forced:ue},{structuredClone:function(e){var t,r,a=A(arguments.length,1)>1&&!f(arguments[1])?d(arguments[1]):void 0,n=a?a.transfer:void 0,s=!1;void 0!==n&&(t=new $,r=ke(n,t),s=!!k(r));var i=be(e,t,s);return s&&(t=new $,Ae(n,t),i=we(i,t)),i}})},32564:(e,t,r)=>{r(96815),r(88417)},65556:(e,t,r)=>{r(66992);var a=r(82109),n=r(17854),s=r(46916),i=r(1702),o=r(19781),c=r(85143),u=r(98052),l=r(47045),h=r(89190),f=r(58003),p=r(63061),g=r(29909),m=r(25787),d=r(60614),v=r(92597),y=r(49974),b=r(70648),w=r(19670),k=r(70111),A=r(41340),E=r(70030),S=r(79114),U=r(18554),R=r(71246),P=r(48053),O=r(5112),L=r(94362),B=O("iterator"),C="URLSearchParams",D=C+"Iterator",M=g.set,I=g.getterFor(C),x=g.getterFor(D),H=Object.getOwnPropertyDescriptor,q=function(e){if(!o)return n[e];var t=H(n,e);return t&&t.value},T=q("fetch"),j=q("Request"),F=q("Headers"),z=j&&j.prototype,_=F&&F.prototype,V=n.RegExp,$=n.TypeError,G=n.decodeURIComponent,Q=n.encodeURIComponent,N=i("".charAt),W=i([].join),J=i([].push),K=i("".replace),X=i([].shift),Y=i([].splice),Z=i("".split),ee=i("".slice),te=/\+/g,re=Array(4),ae=function(e){return re[e-1]||(re[e-1]=V("((?:%[\\da-f]{2}){"+e+"})","gi"))},ne=function(e){try{return G(e)}catch(t){return e}},se=function(e){var t=K(e,te," "),r=4;try{return G(t)}catch(a){while(r)t=K(t,ae(r--),ne);return t}},ie=/[!'()~]|%20/g,oe={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},ce=function(e){return oe[e]},ue=function(e){return K(Q(e),ie,ce)},le=p((function(e,t){M(this,{type:D,iterator:U(I(e).entries),kind:t})}),"Iterator",(function(){var e=x(this),t=e.kind,r=e.iterator.next(),a=r.value;return r.done||(r.value="keys"===t?a.key:"values"===t?a.value:[a.key,a.value]),r}),!0),he=function(e){this.entries=[],this.url=null,void 0!==e&&(k(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===N(e,0)?ee(e,1):e:A(e)))};he.prototype={type:C,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,r,a,n,i,o,c,u=R(e);if(u){t=U(e,u),r=t.next;while(!(a=s(r,t)).done){if(n=U(w(a.value)),i=n.next,(o=s(i,n)).done||(c=s(i,n)).done||!s(i,n).done)throw $("Expected sequence with length 2");J(this.entries,{key:A(o.value),value:A(c.value)})}}else for(var l in e)v(e,l)&&J(this.entries,{key:l,value:A(e[l])})},parseQuery:function(e){if(e){var t,r,a=Z(e,"&"),n=0;while(n<a.length)t=a[n++],t.length&&(r=Z(t,"="),J(this.entries,{key:se(X(r)),value:se(W(r,"="))}))}},serialize:function(){var e,t=this.entries,r=[],a=0;while(a<t.length)e=t[a++],J(r,ue(e.key)+"="+ue(e.value));return W(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var fe=function(){m(this,pe);var e=arguments.length>0?arguments[0]:void 0,t=M(this,new he(e));o||(this.size=t.entries.length)},pe=fe.prototype;if(h(pe,{append:function(e,t){var r=I(this);P(arguments.length,2),J(r.entries,{key:A(e),value:A(t)}),o||this.length++,r.updateURL()},delete:function(e){var t=I(this),r=P(arguments.length,1),a=t.entries,n=A(e),s=r<2?void 0:arguments[1],i=void 0===s?s:A(s),c=0;while(c<a.length){var u=a[c];if(u.key!==n||void 0!==i&&u.value!==i)c++;else if(Y(a,c,1),void 0!==i)break}o||(this.size=a.length),t.updateURL()},get:function(e){var t=I(this).entries;P(arguments.length,1);for(var r=A(e),a=0;a<t.length;a++)if(t[a].key===r)return t[a].value;return null},getAll:function(e){var t=I(this).entries;P(arguments.length,1);for(var r=A(e),a=[],n=0;n<t.length;n++)t[n].key===r&&J(a,t[n].value);return a},has:function(e){var t=I(this).entries,r=P(arguments.length,1),a=A(e),n=r<2?void 0:arguments[1],s=void 0===n?n:A(n),i=0;while(i<t.length){var o=t[i++];if(o.key===a&&(void 0===s||o.value===s))return!0}return!1},set:function(e,t){var r=I(this);P(arguments.length,1);for(var a,n=r.entries,s=!1,i=A(e),c=A(t),u=0;u<n.length;u++)a=n[u],a.key===i&&(s?Y(n,u--,1):(s=!0,a.value=c));s||J(n,{key:i,value:c}),o||(this.size=n.length),r.updateURL()},sort:function(){var e=I(this);L(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){var t,r=I(this).entries,a=y(e,arguments.length>1?arguments[1]:void 0),n=0;while(n<r.length)t=r[n++],a(t.value,t.key,this)},keys:function(){return new le(this,"keys")},values:function(){return new le(this,"values")},entries:function(){return new le(this,"entries")}},{enumerable:!0}),u(pe,B,pe.entries,{name:"entries"}),u(pe,"toString",(function(){return I(this).serialize()}),{enumerable:!0}),o&&l(pe,"size",{get:function(){return I(this).entries.length},configurable:!0,enumerable:!0}),f(fe,C),a({global:!0,constructor:!0,forced:!c},{URLSearchParams:fe}),!c&&d(F)){var ge=i(_.has),me=i(_.set),de=function(e){if(k(e)){var t,r=e.body;if(b(r)===C)return t=e.headers?new F(e.headers):new F,ge(t,"content-type")||me(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),E(e,{body:S(0,A(r)),headers:S(0,t)})}return e};if(d(T)&&a({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(e){return T(e,arguments.length>1?de(arguments[1]):{})}}),d(j)){var ve=function(e){return m(this,z),new j(e,arguments.length>1?de(arguments[1]):{})};z.constructor=ve,ve.prototype=z,a({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:ve})}}e.exports={URLSearchParams:fe,getState:I}},41637:(e,t,r)=>{r(65556)},7994:(e,t,r)=>{var a=r(82109),n=r(35005),s=r(47293),i=r(48053),o=r(41340),c=r(85143),u=n("URL"),l=c&&s((function(){u.canParse()}));a({target:"URL",stat:!0,forced:!l},{canParse:function(e){var t=i(arguments.length,1),r=o(e),a=t<2||void 0===arguments[1]?void 0:o(arguments[1]);try{return!!new u(r,a)}catch(n){return!1}}})},68789:(e,t,r)=>{r(78783);var a,n=r(82109),s=r(19781),i=r(85143),o=r(17854),c=r(49974),u=r(1702),l=r(98052),h=r(47045),f=r(25787),p=r(92597),g=r(21574),m=r(48457),d=r(41589),v=r(28710).codeAt,y=r(33197),b=r(41340),w=r(58003),k=r(48053),A=r(65556),E=r(29909),S=E.set,U=E.getterFor("URL"),R=A.URLSearchParams,P=A.getState,O=o.URL,L=o.TypeError,B=o.parseInt,C=Math.floor,D=Math.pow,M=u("".charAt),I=u(/./.exec),x=u([].join),H=u(1..toString),q=u([].pop),T=u([].push),j=u("".replace),F=u([].shift),z=u("".split),_=u("".slice),V=u("".toLowerCase),$=u([].unshift),G="Invalid authority",Q="Invalid scheme",N="Invalid host",W="Invalid port",J=/[a-z]/i,K=/[\d+-.a-z]/i,X=/\d/,Y=/^0x/i,Z=/^[0-7]+$/,ee=/^\d+$/,te=/^[\da-f]+$/i,re=/[\0\t\n\r #%/:<>?@[\\\]^|]/,ae=/[\0\t\n\r #/:<>?@[\\\]^|]/,ne=/^[\u0000-\u0020]+/,se=/(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,ie=/[\t\n\r]/g,oe=function(e){var t,r,a,n,s,i,o,c=z(e,".");if(c.length&&""===c[c.length-1]&&c.length--,t=c.length,t>4)return e;for(r=[],a=0;a<t;a++){if(n=c[a],""===n)return e;if(s=10,n.length>1&&"0"===M(n,0)&&(s=I(Y,n)?16:8,n=_(n,8===s?1:2)),""===n)i=0;else{if(!I(10===s?ee:8===s?Z:te,n))return e;i=B(n,s)}T(r,i)}for(a=0;a<t;a++)if(i=r[a],a===t-1){if(i>=D(256,5-t))return null}else if(i>255)return null;for(o=q(r),a=0;a<r.length;a++)o+=r[a]*D(256,3-a);return o},ce=function(e){var t,r,a,n,s,i,o,c=[0,0,0,0,0,0,0,0],u=0,l=null,h=0,f=function(){return M(e,h)};if(":"===f()){if(":"!==M(e,1))return;h+=2,u++,l=u}while(f()){if(8===u)return;if(":"!==f()){t=r=0;while(r<4&&I(te,f()))t=16*t+B(f(),16),h++,r++;if("."===f()){if(0===r)return;if(h-=r,u>6)return;a=0;while(f()){if(n=null,a>0){if(!("."===f()&&a<4))return;h++}if(!I(X,f()))return;while(I(X,f())){if(s=B(f(),10),null===n)n=s;else{if(0===n)return;n=10*n+s}if(n>255)return;h++}c[u]=256*c[u]+n,a++,2!==a&&4!==a||u++}if(4!==a)return;break}if(":"===f()){if(h++,!f())return}else if(f())return;c[u++]=t}else{if(null!==l)return;h++,u++,l=u}}if(null!==l){i=u-l,u=7;while(0!==u&&i>0)o=c[u],c[u--]=c[l+i-1],c[l+--i]=o}else if(8!==u)return;return c},ue=function(e){for(var t=null,r=1,a=null,n=0,s=0;s<8;s++)0!==e[s]?(n>r&&(t=a,r=n),a=null,n=0):(null===a&&(a=s),++n);return n>r&&(t=a,r=n),t},le=function(e){var t,r,a,n;if("number"==typeof e){for(t=[],r=0;r<4;r++)$(t,e%256),e=C(e/256);return x(t,".")}if("object"==typeof e){for(t="",a=ue(e),r=0;r<8;r++)n&&0===e[r]||(n&&(n=!1),a===r?(t+=r?":":"::",n=!0):(t+=H(e[r],16),r<7&&(t+=":")));return"["+t+"]"}return e},he={},fe=g({},he,{" ":1,'"':1,"<":1,">":1,"`":1}),pe=g({},fe,{"#":1,"?":1,"{":1,"}":1}),ge=g({},pe,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),me=function(e,t){var r=v(e,0);return r>32&&r<127&&!p(t,e)?e:encodeURIComponent(e)},de={ftp:21,file:null,http:80,https:443,ws:80,wss:443},ve=function(e,t){var r;return 2===e.length&&I(J,M(e,0))&&(":"===(r=M(e,1))||!t&&"|"===r)},ye=function(e){var t;return e.length>1&&ve(_(e,0,2))&&(2===e.length||"/"===(t=M(e,2))||"\\"===t||"?"===t||"#"===t)},be=function(e){return"."===e||"%2e"===V(e)},we=function(e){return e=V(e),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},ke={},Ae={},Ee={},Se={},Ue={},Re={},Pe={},Oe={},Le={},Be={},Ce={},De={},Me={},Ie={},xe={},He={},qe={},Te={},je={},Fe={},ze={},_e=function(e,t,r){var a,n,s,i=b(e);if(t){if(n=this.parse(i),n)throw L(n);this.searchParams=null}else{if(void 0!==r&&(a=new _e(r,!0)),n=this.parse(i,null,a),n)throw L(n);s=P(new R),s.bindURL(this),this.searchParams=s}};_e.prototype={type:"URL",parse:function(e,t,r){var n,s,i,o,c=this,u=t||ke,l=0,h="",f=!1,g=!1,v=!1;e=b(e),t||(c.scheme="",c.username="",c.password="",c.host=null,c.port=null,c.path=[],c.query=null,c.fragment=null,c.cannotBeABaseURL=!1,e=j(e,ne,""),e=j(e,se,"$1")),e=j(e,ie,""),n=m(e);while(l<=n.length){switch(s=n[l],u){case ke:if(!s||!I(J,s)){if(t)return Q;u=Ee;continue}h+=V(s),u=Ae;break;case Ae:if(s&&(I(K,s)||"+"===s||"-"===s||"."===s))h+=V(s);else{if(":"!==s){if(t)return Q;h="",u=Ee,l=0;continue}if(t&&(c.isSpecial()!==p(de,h)||"file"===h&&(c.includesCredentials()||null!==c.port)||"file"===c.scheme&&!c.host))return;if(c.scheme=h,t)return void(c.isSpecial()&&de[c.scheme]===c.port&&(c.port=null));h="","file"===c.scheme?u=Ie:c.isSpecial()&&r&&r.scheme===c.scheme?u=Se:c.isSpecial()?u=Oe:"/"===n[l+1]?(u=Ue,l++):(c.cannotBeABaseURL=!0,T(c.path,""),u=je)}break;case Ee:if(!r||r.cannotBeABaseURL&&"#"!==s)return Q;if(r.cannotBeABaseURL&&"#"===s){c.scheme=r.scheme,c.path=d(r.path),c.query=r.query,c.fragment="",c.cannotBeABaseURL=!0,u=ze;break}u="file"===r.scheme?Ie:Re;continue;case Se:if("/"!==s||"/"!==n[l+1]){u=Re;continue}u=Le,l++;break;case Ue:if("/"===s){u=Be;break}u=Te;continue;case Re:if(c.scheme=r.scheme,s===a)c.username=r.username,c.password=r.password,c.host=r.host,c.port=r.port,c.path=d(r.path),c.query=r.query;else if("/"===s||"\\"===s&&c.isSpecial())u=Pe;else if("?"===s)c.username=r.username,c.password=r.password,c.host=r.host,c.port=r.port,c.path=d(r.path),c.query="",u=Fe;else{if("#"!==s){c.username=r.username,c.password=r.password,c.host=r.host,c.port=r.port,c.path=d(r.path),c.path.length--,u=Te;continue}c.username=r.username,c.password=r.password,c.host=r.host,c.port=r.port,c.path=d(r.path),c.query=r.query,c.fragment="",u=ze}break;case Pe:if(!c.isSpecial()||"/"!==s&&"\\"!==s){if("/"!==s){c.username=r.username,c.password=r.password,c.host=r.host,c.port=r.port,u=Te;continue}u=Be}else u=Le;break;case Oe:if(u=Le,"/"!==s||"/"!==M(h,l+1))continue;l++;break;case Le:if("/"!==s&&"\\"!==s){u=Be;continue}break;case Be:if("@"===s){f&&(h="%40"+h),f=!0,i=m(h);for(var y=0;y<i.length;y++){var w=i[y];if(":"!==w||v){var k=me(w,ge);v?c.password+=k:c.username+=k}else v=!0}h=""}else if(s===a||"/"===s||"?"===s||"#"===s||"\\"===s&&c.isSpecial()){if(f&&""===h)return G;l-=m(h).length+1,h="",u=Ce}else h+=s;break;case Ce:case De:if(t&&"file"===c.scheme){u=He;continue}if(":"!==s||g){if(s===a||"/"===s||"?"===s||"#"===s||"\\"===s&&c.isSpecial()){if(c.isSpecial()&&""===h)return N;if(t&&""===h&&(c.includesCredentials()||null!==c.port))return;if(o=c.parseHost(h),o)return o;if(h="",u=qe,t)return;continue}"["===s?g=!0:"]"===s&&(g=!1),h+=s}else{if(""===h)return N;if(o=c.parseHost(h),o)return o;if(h="",u=Me,t===De)return}break;case Me:if(!I(X,s)){if(s===a||"/"===s||"?"===s||"#"===s||"\\"===s&&c.isSpecial()||t){if(""!==h){var A=B(h,10);if(A>65535)return W;c.port=c.isSpecial()&&A===de[c.scheme]?null:A,h=""}if(t)return;u=qe;continue}return W}h+=s;break;case Ie:if(c.scheme="file","/"===s||"\\"===s)u=xe;else{if(!r||"file"!==r.scheme){u=Te;continue}switch(s){case a:c.host=r.host,c.path=d(r.path),c.query=r.query;break;case"?":c.host=r.host,c.path=d(r.path),c.query="",u=Fe;break;case"#":c.host=r.host,c.path=d(r.path),c.query=r.query,c.fragment="",u=ze;break;default:ye(x(d(n,l),""))||(c.host=r.host,c.path=d(r.path),c.shortenPath()),u=Te;continue}}break;case xe:if("/"===s||"\\"===s){u=He;break}r&&"file"===r.scheme&&!ye(x(d(n,l),""))&&(ve(r.path[0],!0)?T(c.path,r.path[0]):c.host=r.host),u=Te;continue;case He:if(s===a||"/"===s||"\\"===s||"?"===s||"#"===s){if(!t&&ve(h))u=Te;else if(""===h){if(c.host="",t)return;u=qe}else{if(o=c.parseHost(h),o)return o;if("localhost"===c.host&&(c.host=""),t)return;h="",u=qe}continue}h+=s;break;case qe:if(c.isSpecial()){if(u=Te,"/"!==s&&"\\"!==s)continue}else if(t||"?"!==s)if(t||"#"!==s){if(s!==a&&(u=Te,"/"!==s))continue}else c.fragment="",u=ze;else c.query="",u=Fe;break;case Te:if(s===a||"/"===s||"\\"===s&&c.isSpecial()||!t&&("?"===s||"#"===s)){if(we(h)?(c.shortenPath(),"/"===s||"\\"===s&&c.isSpecial()||T(c.path,"")):be(h)?"/"===s||"\\"===s&&c.isSpecial()||T(c.path,""):("file"===c.scheme&&!c.path.length&&ve(h)&&(c.host&&(c.host=""),h=M(h,0)+":"),T(c.path,h)),h="","file"===c.scheme&&(s===a||"?"===s||"#"===s))while(c.path.length>1&&""===c.path[0])F(c.path);"?"===s?(c.query="",u=Fe):"#"===s&&(c.fragment="",u=ze)}else h+=me(s,pe);break;case je:"?"===s?(c.query="",u=Fe):"#"===s?(c.fragment="",u=ze):s!==a&&(c.path[0]+=me(s,he));break;case Fe:t||"#"!==s?s!==a&&("'"===s&&c.isSpecial()?c.query+="%27":c.query+="#"===s?"%23":me(s,he)):(c.fragment="",u=ze);break;case ze:s!==a&&(c.fragment+=me(s,fe));break}l++}},parseHost:function(e){var t,r,a;if("["===M(e,0)){if("]"!==M(e,e.length-1))return N;if(t=ce(_(e,1,-1)),!t)return N;this.host=t}else if(this.isSpecial()){if(e=y(e),I(re,e))return N;if(t=oe(e),null===t)return N;this.host=t}else{if(I(ae,e))return N;for(t="",r=m(e),a=0;a<r.length;a++)t+=me(r[a],he);this.host=t}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"===this.scheme},includesCredentials:function(){return""!==this.username||""!==this.password},isSpecial:function(){return p(de,this.scheme)},shortenPath:function(){var e=this.path,t=e.length;!t||"file"===this.scheme&&1===t&&ve(e[0],!0)||e.length--},serialize:function(){var e=this,t=e.scheme,r=e.username,a=e.password,n=e.host,s=e.port,i=e.path,o=e.query,c=e.fragment,u=t+":";return null!==n?(u+="//",e.includesCredentials()&&(u+=r+(a?":"+a:"")+"@"),u+=le(n),null!==s&&(u+=":"+s)):"file"===t&&(u+="//"),u+=e.cannotBeABaseURL?i[0]:i.length?"/"+x(i,"/"):"",null!==o&&(u+="?"+o),null!==c&&(u+="#"+c),u},setHref:function(e){var t=this.parse(e);if(t)throw L(t);this.searchParams.update()},getOrigin:function(){var e=this.scheme,t=this.port;if("blob"===e)try{return new Ve(e.path[0]).origin}catch(r){return"null"}return"file"!==e&&this.isSpecial()?e+"://"+le(this.host)+(null!==t?":"+t:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(e){this.parse(b(e)+":",ke)},getUsername:function(){return this.username},setUsername:function(e){var t=m(b(e));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var r=0;r<t.length;r++)this.username+=me(t[r],ge)}},getPassword:function(){return this.password},setPassword:function(e){var t=m(b(e));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var r=0;r<t.length;r++)this.password+=me(t[r],ge)}},getHost:function(){var e=this.host,t=this.port;return null===e?"":null===t?le(e):le(e)+":"+t},setHost:function(e){this.cannotBeABaseURL||this.parse(e,Ce)},getHostname:function(){var e=this.host;return null===e?"":le(e)},setHostname:function(e){this.cannotBeABaseURL||this.parse(e,De)},getPort:function(){var e=this.port;return null===e?"":b(e)},setPort:function(e){this.cannotHaveUsernamePasswordPort()||(e=b(e),""===e?this.port=null:this.parse(e,Me))},getPathname:function(){var e=this.path;return this.cannotBeABaseURL?e[0]:e.length?"/"+x(e,"/"):""},setPathname:function(e){this.cannotBeABaseURL||(this.path=[],this.parse(e,qe))},getSearch:function(){var e=this.query;return e?"?"+e:""},setSearch:function(e){e=b(e),""===e?this.query=null:("?"===M(e,0)&&(e=_(e,1)),this.query="",this.parse(e,Fe)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var e=this.fragment;return e?"#"+e:""},setHash:function(e){e=b(e),""!==e?("#"===M(e,0)&&(e=_(e,1)),this.fragment="",this.parse(e,ze)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var Ve=function(e){var t=f(this,$e),r=k(arguments.length,1)>1?arguments[1]:void 0,a=S(t,new _e(e,!1,r));s||(t.href=a.serialize(),t.origin=a.getOrigin(),t.protocol=a.getProtocol(),t.username=a.getUsername(),t.password=a.getPassword(),t.host=a.getHost(),t.hostname=a.getHostname(),t.port=a.getPort(),t.pathname=a.getPathname(),t.search=a.getSearch(),t.searchParams=a.getSearchParams(),t.hash=a.getHash())},$e=Ve.prototype,Ge=function(e,t){return{get:function(){return U(this)[e]()},set:t&&function(e){return U(this)[t](e)},configurable:!0,enumerable:!0}};if(s&&(h($e,"href",Ge("serialize","setHref")),h($e,"origin",Ge("getOrigin")),h($e,"protocol",Ge("getProtocol","setProtocol")),h($e,"username",Ge("getUsername","setUsername")),h($e,"password",Ge("getPassword","setPassword")),h($e,"host",Ge("getHost","setHost")),h($e,"hostname",Ge("getHostname","setHostname")),h($e,"port",Ge("getPort","setPort")),h($e,"pathname",Ge("getPathname","setPathname")),h($e,"search",Ge("getSearch","setSearch")),h($e,"searchParams",Ge("getSearchParams")),h($e,"hash",Ge("getHash","setHash"))),l($e,"toJSON",(function(){return U(this).serialize()}),{enumerable:!0}),l($e,"toString",(function(){return U(this).serialize()}),{enumerable:!0}),O){var Qe=O.createObjectURL,Ne=O.revokeObjectURL;Qe&&l(Ve,"createObjectURL",c(Qe,O)),Ne&&l(Ve,"revokeObjectURL",c(Ne,O))}w(Ve,"URL"),n({global:!0,constructor:!0,forced:!i,sham:!s},{URL:Ve})},60285:(e,t,r)=>{r(68789)},83753:(e,t,r)=>{var a=r(82109),n=r(46916);a({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return n(URL.prototype.toString,this)}})}}]);
//# sourceMappingURL=9194.9528e206.js.map