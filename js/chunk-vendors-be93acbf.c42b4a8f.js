(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[398],{26470:(e,t,r)=>{"use strict";var n=r(34155);function i(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function o(e,t){for(var r,n="",i=0,o=-1,l=0,a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else{if(47===r)break;r=47}if(47===r){if(o===a-1||1===l);else if(o!==a-1&&2===l){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var c=n.lastIndexOf("/");if(c!==n.length-1){-1===c?(n="",i=0):(n=n.slice(0,c),i=n.length-1-n.lastIndexOf("/")),o=a,l=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=a,l=0;continue}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(o+1,a):n=e.slice(o+1,a),i=a-o-1;o=a,l=0}else 46===r&&-1!==l?++l:l=-1}return n}function l(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}var a={resolve:function(){for(var e,t="",r=!1,l=arguments.length-1;l>=-1&&!r;l--){var a;l>=0?a=arguments[l]:(void 0===e&&(e=n.cwd()),a=e),i(a),0!==a.length&&(t=a+"/"+t,r=47===a.charCodeAt(0))}return t=o(t,!r),r?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(i(e),0===e.length)return".";var t=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return e=o(e,!t),0!==e.length||t||(e="."),e.length>0&&r&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return i(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var r=arguments[t];i(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":a.normalize(e)},relative:function(e,t){if(i(e),i(t),e===t)return"";if(e=a.resolve(e),t=a.resolve(t),e===t)return"";for(var r=1;r<e.length;++r)if(47!==e.charCodeAt(r))break;for(var n=e.length,o=n-r,l=1;l<t.length;++l)if(47!==t.charCodeAt(l))break;for(var c=t.length,u=c-l,h=o<u?o:u,f=-1,s=0;s<=h;++s){if(s===h){if(u>h){if(47===t.charCodeAt(l+s))return t.slice(l+s+1);if(0===s)return t.slice(l+s)}else o>h&&(47===e.charCodeAt(r+s)?f=s:0===s&&(f=0));break}var g=e.charCodeAt(r+s),d=t.charCodeAt(l+s);if(g!==d)break;47===g&&(f=s)}var v="";for(s=r+f+1;s<=n;++s)s!==n&&47!==e.charCodeAt(s)||(0===v.length?v+="..":v+="/..");return v.length>0?v+t.slice(l+f):(l+=f,47===t.charCodeAt(l)&&++l,t.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(i(e),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,o=!0,l=e.length-1;l>=1;--l)if(t=e.charCodeAt(l),47===t){if(!o){n=l;break}}else o=!1;return-1===n?r?"/":".":r&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');i(e);var r,n=0,o=-1,l=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var a=t.length-1,c=-1;for(r=e.length-1;r>=0;--r){var u=e.charCodeAt(r);if(47===u){if(!l){n=r+1;break}}else-1===c&&(l=!1,c=r+1),a>=0&&(u===t.charCodeAt(a)?-1===--a&&(o=r):(a=-1,o=c))}return n===o?o=c:-1===o&&(o=e.length),e.slice(n,o)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!l){n=r+1;break}}else-1===o&&(l=!1,o=r+1);return-1===o?"":e.slice(n,o)},extname:function(e){i(e);for(var t=-1,r=0,n=-1,o=!0,l=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===n&&(o=!1,n=a+1),46===c?-1===t?t=a:1!==l&&(l=1):-1!==t&&(l=-1);else if(!o){r=a+1;break}}return-1===t||-1===n||0===l||1===l&&t===n-1&&t===r+1?"":e.slice(t,n)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return l("/",e)},parse:function(e){i(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var r,n=e.charCodeAt(0),o=47===n;o?(t.root="/",r=1):r=0;for(var l=-1,a=0,c=-1,u=!0,h=e.length-1,f=0;h>=r;--h)if(n=e.charCodeAt(h),47!==n)-1===c&&(u=!1,c=h+1),46===n?-1===l?l=h:1!==f&&(f=1):-1!==l&&(f=-1);else if(!u){a=h+1;break}return-1===l||-1===c||0===f||1===f&&l===c-1&&l===a+1?-1!==c&&(t.base=t.name=0===a&&o?e.slice(1,c):e.slice(a,c)):(0===a&&o?(t.name=e.slice(1,l),t.base=e.slice(1,c)):(t.name=e.slice(a,l),t.base=e.slice(a,c)),t.ext=e.slice(l,c)),a>0?t.dir=e.slice(0,a-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};a.posix=a,e.exports=a},34155:e=>{var t,r,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}function a(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}})();var c,u=[],h=!1,f=-1;function s(){h&&c&&(h=!1,c.length?u=c.concat(u):f=-1,u.length&&g())}function g(){if(!h){var e=l(s);h=!0;var t=u.length;while(t){c=u,u=[];while(++f<t)c&&c[f].run();f=-1,t=u.length}c=null,h=!1,a(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new d(e,t)),1!==u.length||h||l(g)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=v,n.addListener=v,n.once=v,n.off=v,n.removeListener=v,n.removeAllListeners=v,n.emit=v,n.prependListener=v,n.prependOnceListener=v,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}}]);
//# sourceMappingURL=chunk-vendors-be93acbf.c42b4a8f.js.map