"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[7438],{65973:(t,e,a)=>{a.d(e,{Z:()=>f});var s=a(52590),i=a(13739),r=function(){var t=this,e=t._self._c;return e("p",{staticClass:"vue-component component-error-notice"},[t._v(" Sorry, could not load user interface from server. Please try again. ")])},n=[];const o={name:"Errored"},l=o;var c=a(1001),d=(0,c.Z)(l,r,n,!1,null,null,null);const u=d.exports;var p=a(25108);class h extends s.Utils{static kebabToCamelCase(t){return t.replace(/-(\w)/g,((t,e)=>e?e.toUpperCase():""))}static enableHtmlProps(t){h.isObject(t.$root)&&t.$root.$options.shadowRoot&&("complete"===document.readyState?h.readHtmlProps(t):document.addEventListener("readystatechange",(()=>h.enableHtmlProps(t)),{once:!0}))}static readHtmlProps(t){if(!h.isObject(t)||!h.isObject(t.$slots)||!Array.isArray(t.$slots.default))return;let e=t.$slots.default.filter((t=>"string"===typeof t.tag&&"SCRIPT"===t.tag.toUpperCase()&&"string"===typeof t.data.attrs.type&&t.data.attrs.type.includes("application/json")));for(let s of e){let e=null;try{"string"===typeof s.data.attrs.prop&&s.data.attrs.prop.length>0&&(e=h.kebabToCamelCase(s.data.attrs.prop));let a=JSON.parse(s.data.domProps.innerHTML);if(e)h.setProp(t,e,a);else if(h.isObject(a))for(let e in a)h.setProp(t,e,a[e]);else p.error("Props passed via script tag must be contained in an object.")}catch(a){e?p.error(`Prop '${e}' passed via script tag is invalid: ${a.message}`):p.error(`Props passed via script tag are invalid: ${a.message}`)}}}static loadFontAwesome(t){let e=h.isObject(t.$root)&&t.$root.$options.shadowRoot,a=Array.from((e||document).styleSheets);for(let i of a)if("string"===typeof i.href&&i.href.includes("fontawesome"))return;if(!e){let t=document.createElement("link");t.as="font",t.type="font/woff2",t.crossOrigin=!0,t.href="https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-solid-900.woff2",document.head.appendChild(t)}let s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.media="all",s.href="https://use.fontawesome.com/releases/v5.13.0/css/all.css",(e||document.head).appendChild(s)}static setProp(t,e,a){let s=h.isObject(t.$props)?t.$props:t.$options.propsData;t.$set(s,h.kebabToCamelCase(e),a)}static loadAsyncComponent(t){return{component:t,loading:i.Z,error:u,delay:0,timeout:1e4}}static dataType(t,e=!1,a=2,i=0){let r=new s.ProcessSchema(t);var n=new Set;for(let s in r.schemas){let t=r.schemas[s],o=t.nativeDataType(),l=t.dataType();if(t.isEditable()){if(e&&r.schemas.filter((t=>t.nativeDataType()===o)).length>a){n.add(o);continue}}else o=l;let c=o===l?l:`${l}:${o}`;if("array"===o&&h.isObject(t.schema.items)){let s=h.dataType(t.schema.items,e,a,i+1);"any"!==s&&(c+=`<${s}>`)}n.add(c)}return n.has("any")?"any":Array.from(n).join(e||i>0?"|":", ")}static htmlentities_decode(t){return"string"!==typeof t&&(t=String(t)),t.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")}static htmlentities(t){return"string"!==typeof t&&(t=String(t)),t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}static countObjectKeys(t){var e={};for(var a in t){var s=t[a];if("object"!==typeof s||null===s||Array.isArray(s))return null;for(var i in s)"undefined"===typeof e[i]?e[i]=1:e[i]++}return e}static isTableLike(t,e=!1){if("object"!==typeof t||null===t)return[];var a=h.countObjectKeys(t);if(null!==a){if(!0===e)return Object.keys(a);var s=0,i=0;for(var r in a)s++,i+=a[r];var n=i/s,o=Array.isArray(o)?t.length:Object.keys(t).length;if(n>o/2)return Object.keys(a)}return[]}static isUrl(t,e=!0){if(!h.hasText(t))return!1;try{let a=new URL(t);return!(e&&!a.protocol.match(/^https?:$/i))}catch(a){return!1}}static prettifyAbbreviation(t){return"string"===typeof t&&null===t.match(/[A-Z]+/)?t.toUpperCase():t}static ensurePoint(t,e=null){return"function"!==typeof e&&(e=()=>[0,0]),Array.isArray(t)?("number"!==typeof t[0]&&(t[0]=e()[0]||0),"number"!==typeof t[1]&&(t[1]=e()[1]||0),t):e()}static formatRef(t){if(this.isRef(t)){if(t.from_node)return"#"+t.from_node;if(t.from_parameter)return"$"+t.from_parameter}return t}static isRef(t){return h.isObject(t)&&(t.from_parameter||t.from_node)}static isRefEqual(t,e){return!(!h.isRef(t)||!h.isRef(e))&&(!(!t.from_parameter||t.from_parameter!==e.from_parameter)||!(!t.from_node||t.from_node!==e.from_node))}static detectGeoJson(t){if(!h.isObject(t))return!1;if("string"!==typeof t.type)return!1;switch(t.type){case"Point":case"MultiPoint":case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":return!!Array.isArray(t.coordinates);case"GeometryCollection":return!!Array.isArray(t.geometries);case"Feature":return!(null!==t.geometry&&!h.isObject(t.geometry))&&!(null!==t.properties&&!h.isObject(t.properties));case"FeatureCollection":return!!Array.isArray(t.features);default:return!1}}static toProcessParameters(t){if(h.isObject(t)){let e=[];for(let a in t){let s=t[a],i=h.omitFromObject(s,["description","required","default","federation:backends"]);e.push({name:a,description:s.description,optional:!s.required,default:s.default,"federation:backends":s["federation:backends"],schema:i})}return e.sort(((t,e)=>h.compareStringCaseInsensitive(t.name,e.name)))}return[]}static formatCurrency(t,e,a=""){if("number"!==typeof t)return a;try{return t.toLocaleString(void 0,{style:"currency",currency:e})}catch(s){let a=t.toLocaleString(void 0,{maximumFractionDigits:2});return"string"===typeof e&&(a+=" ",a+=e),a.trim()}}static formatBudget(t,e,a="Unlimited"){return null===t?a:h.formatCurrency(t,e)}static formatTimestamp(t,e="n/a"){if("string"===typeof t)try{return new Date(t).toLocaleString(void 0,{timeZone:"UTC",timeZoneName:"short"})}catch(a){}return e}static formatFileSize(t,e="n/a"){let a=["B","kB","MB","GB","TB","PB"];if("number"!==typeof t)return e;let s=0==t?0:Math.floor(Math.log(t)/Math.log(1024)),i=t/Math.pow(1024,s),r=i.toLocaleString(void 0,{maximumFractionDigits:1});return`${r} ${a[s]}`}static formatProcessSignature(t,e=!0){let a=[];if(Array.isArray(t.parameters))for(let n in t.parameters){let s,i=t.parameters[n],r=h.dataType(i.schema,!0,1),o=i.optional?"?":"",l="";i.optional&&"undefined"!==typeof i.default&&(l=JSON.stringify(i.default)),e?(s=`<span class="param-optional">${o}</span><span class="data-type">${h.htmlentities(r)}</span> <span class="param-name">${h.htmlentities(i.name)}</span>`,l&&(l.length>30&&(l=`<span title="${h.htmlentities(l)}">…</span>`),s+=` = <span class="param-argument">${l}</span>`)):s=o+r+" "+i.name+l,a.push(s)}let s="("+a.join(", ")+") : ",i=h.isObject(t.returns)&&t.returns.schema&&"object"===typeof t.returns.schema?t.returns.schema:{},r=h.dataType(i,!0,2);return e?`<span class="process-name">${h.htmlentities(t.process.id)}</span>${s}<span class="data-type">${h.htmlentities(r)}</span>`:t.process.id+s+r}static search(t,e,a=!0){if("string"!==typeof t||0===t.length)return!1;if(h.isObject(e)?e=Object.values(e):"string"===typeof e&&(e=[e]),!Array.isArray(e))return!1;let s=/[\s\.,;!&\(\{\[\)\}\]]+/g;t=t.toLowerCase().split(s),e=e.filter((t=>"string"===typeof t)).join(" ").replace(s," ").toLowerCase();let i=a?"every":"some";return t[i]((t=>e.includes(t)))}}const f=h},45518:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var s=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.enabled&&t.active,expression:"enabled && active"}],staticClass:"tabContent"},[t._t("default",null,{tab:this})],2)},i=[],r=a(65973);const n={name:"Tab",props:{id:{type:String,required:!0},name:{type:String,required:!0},icon:{type:String,default:null},selected:{type:Boolean,default:!1},enabled:{type:Boolean,default:!0},data:{},closable:{type:Boolean,default:!1},allowShow:{type:Function,default:null}},data(){return{active:!1}},beforeCreate(){r.Z.enableHtmlProps(this)},mounted(){this.updateState(),this.$on("hide",(()=>this.active=!1)),this.$on("show",(()=>this.active=!0)),this.icon&&r.Z.loadFontAwesome(this)},watch:{selected(){this.updateState()},enabled(){this.updateState()}},methods:{updateState(){this.active=this.selected,this.enabled&&this.active?this.getTabs().selectTab(this):this.getTabs().resetActiveTab(!0)},getTabs(){let t=this.$parent;while(t&&"Tabs"!==t.$options.name)t=t.$parent;return t},async canShow(){return!!this.active||!("function"===typeof this.allowShow&&!await this.allowShow(this))}}},o=n;var l=a(1001),c=(0,l.Z)(o,s,i,!1,null,null,null);const d=c.exports},49495:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u});var s=function(){var t=this,e=t._self._c;return e("div",{class:t.classes,attrs:{id:t.id}},[t.hasEnabledTabs?t._e():e("div",{staticClass:"tabsEmpty"},[t._t("empty")],2),e("div",{ref:"tabsHeader",staticClass:"tabsHeader"},t._l(t.tabs,(function(a){return e("button",{directives:[{name:"show",rawName:"v-show",value:a.enabled,expression:"tab.enabled"}],key:a.id,class:{tabItem:!0,tabActive:a.active,tabHasIcon:!!a.icon,[a.id]:!0},attrs:{type:"button",title:a.name},on:{click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.selectTab(a)},mouseup:function(e){return"button"in e&&1!==e.button?null:t.closeTab(a)}}},[a.icon?e("i",{class:["tabIcon","fas",a.icon]}):t._e(),e("span",{staticClass:"tabName"},[t._t("tabName",(function(){return[t._v(t._s(a.name))]}),{tab:a})],2),a.closable?e("svg",{staticClass:"tabClose",attrs:{xmlns:"http://www.w3.org/2000/svg",title:"Close",viewBox:"0 0 24 24"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.closeTab(a)}}},[e("circle",{attrs:{cx:"12",cy:"12",r:"11",stroke:"black","stroke-width":"2",fill:"none"}}),e("path",{attrs:{stroke:"black","stroke-width":"2",fill:"none",d:"M7,7,17,17"}}),e("path",{attrs:{stroke:"black","stroke-width":"2",fill:"none",d:"M7,17,17,7"}})]):t._e()])})),0),e("div",{staticClass:"tabsBody"},[t._t("default",null,{tabs:this}),t._l(this.dynamicTabs,(function(a){return e("Tab",{key:a.id,attrs:{id:a.id,name:a.name,icon:a.icon,selected:a.selected,data:a.data,enabled:a.enabled,closable:a.closable,allowShow:()=>t.onDynamicAllowShow(a)},on:{close:function(e){return t.onDynamic(a,"close")},hide:function(e){return t.onDynamic(a,"hide")},show:function(e){return t.onDynamic(a,"show")}}},[t._t(a.id,(function(){return[t._t("dynamic",null,{tab:a})]}),{tab:a})],2)}))],2)])},i=[],r=a(45518),n=a(65973);const o={name:"Tabs",components:{Tab:r["default"]},props:{id:{type:String,required:!0},pills:{type:Boolean,default:!1},pillsMultiline:{type:Boolean,default:!1},position:{type:String,default:"top"}},data(){return{tabIdCounter:0,tabs:[],activeTab:null,dynamicTabs:[],spaceLimited:!1}},mounted(){if(Array.isArray(this.$children)){this.tabs=this.$children;let t=this.tabs.filter((t=>!0===t.active));1===t.length?this.activeTab=t[0]:this.resetActiveTab()}this.$root.$on("windowResized",this.adjustSizes),this.$nextTick(this.adjustSizes)},computed:{hasEnabledTabs(){return this.tabs.filter((t=>t.enabled)).length>0},classes(){var t=["vue-component","tabs",this.pills?"pills":"boxed",this.position];return this.hasEnabledTabs||t.push("hide"),this.spaceLimited&&t.push("spaceLimited"),this.pills&&this.pillsMultiline&&t.push("multiline"),t}},watch:{hasEnabledTabs(t){this.$emit("empty",!t)},activeTab(){this.adjustSizes()}},beforeCreate(){n.Z.enableHtmlProps(this)},methods:{addTab(t,e=null,a=null,s=null,i=!1,r=!1,n=null,o=null,l=null,c=null){s||(s=this.id+"_tab_"+this.tabIdCounter++),this.dynamicTabs.push({id:s,name:t,icon:e,data:a,selected:i,enabled:!0,closable:r,show:n,hide:o,close:l,allowShow:c}),i&&this.$nextTick((()=>{this.selectTab(s),this.adjustSizes()}))},onDynamic(t,e){var a=this.tabs.findIndex((e=>e.id===t.id));"function"===typeof t[e]&&-1!==a&&t[e](this.tabs[a])},async onDynamicAllowShow(t){var e=this.tabs.findIndex((e=>e.id===t.id));return"function"!==typeof t.allowShow||-1===e||await t.allowShow(this.tabs[e])},adjustSizes(){this.$refs.tabsHeader&&(this.spaceLimited=this.$refs.tabsHeader.getBoundingClientRect().width<96*this.tabs.length,this.$nextTick((()=>{if(this.$refs.tabsHeader){var t=this.$refs.tabsHeader.scrollWidth>this.$refs.tabsHeader.parentNode.getBoundingClientRect().width;this.$refs.tabsHeader.style.overflowX=t?"auto":"visible",this.$refs.tabsHeader.style.overflowY=t?"hidden":"visible"}})))},getTab(t){for(let e in this.tabs)if(this.tabs[e].id==t)return this.tabs[e];return null},getActiveTab(){return this.activeTab},getActiveTabId(){return null!==this.activeTab?this.activeTab.id:null},async selectTab(t){"string"===typeof t&&(t=this.getTab(t)),this.activeTab!==t&&t&&await t.canShow()&&(null!==this.activeTab&&(this.activeTab.active=!1,this.activeTab.$emit("hide",this.activeTab)),this.activeTab=t,this.activeTab.active=!0,this.$emit("selected",t),this.$nextTick((()=>this.activeTab.$emit("show",this.activeTab))))},closeTab(t){if("string"===typeof t&&(t=this.getTab(t)),t.closable){var e=this.tabs.findIndex((e=>e.id===t.id));if(-1!==e){t.$emit("close",t),this.tabs.splice(e,1);var a=this.dynamicTabs.findIndex((e=>e.id===t.id));-1!==a&&this.dynamicTabs.splice(a,1),t===this.activeTab&&(this.activeTab=null),this.resetActiveTab(),this.adjustSizes()}}},resetActiveTab(t=!1){0!==this.tabs.length&&(t||null===this.getActiveTab())&&this.selectTab(this.tabs.find((t=>t.enabled)))}}},l=o;var c=a(1001),d=(0,c.Z)(l,s,i,!1,null,null,null);const u=d.exports},13739:(t,e,a)=>{a.d(e,{Z:()=>c});var s=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-component loading-notice"},[e("span",{staticClass:"loading"},[t._v("Loading")])])}];const r={name:"Loading"},n=r;var o=a(1001),l=(0,o.Z)(n,s,i,!1,null,null,null);const c=l.exports}}]);
//# sourceMappingURL=chunk-vendors-28f76c41.f85f6f84.js.map