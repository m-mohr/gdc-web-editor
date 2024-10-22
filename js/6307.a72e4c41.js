"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[6307,4783],{34783:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"select-container"},[e.loaded?[t("MultiSelect",{key:e.type,ref:"htmlElement",attrs:{label:"label","track-by":"id",multiple:e.multiple,options:e.selectOptions,allowEmpty:!1,preselectFirst:e.preselect,disabled:!e.editable,deselectLabel:e.deselectLabel,taggable:e.taggable,tagPlaceholder:e.tagPlaceholder,openDirection:e.openDirection},on:{tag:e.addValue},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e.showDetails?t("button",{attrs:{type:"button",title:"Details"},on:{click:function(t){return e.$emit("onDetails")}}},[t("i",{staticClass:"fas fa-info"})]):e._e()]:t("div",{staticClass:"loading"},[t("i",{staticClass:"fas fa-spinner fa-spin"}),e._v(" Loading options...")])],2)},a=[],l=s(75262),r=s.n(l),n=s(2566);const o={name:"SelectBox",components:{MultiSelect:r()},props:{value:{},type:{type:String,default:""},editable:{type:Boolean,default:!0},options:{type:[Array,Object]},schema:{type:Object},context:{},optionFilter:{type:Function,default:null},openDirection:{type:String,default:"auto"}},computed:{selectOptions(){let e=[];switch(this.type){case"band-name":let t=this.$store.state.collections.find((e=>e.id==this.context));if(n.A.isObject(t)){try{e=t.summaries["bands"].map((e=>e.name))}catch(a){}if(0===e.length&&n.A.isObject(t["cube:dimensions"]))try{let s=Object.values(t["cube:dimensions"]).find((e=>"bands"===e.type));s&&Array.isArray(s.values)&&(e=s.values)}catch(a){}}break;case"collection-id":e=this.$store.state.collections;break;case"job-id":e=this.$store.state.jobs.jobs;break;case"file-path":case"file-paths":e=this.$store.state.files.files;break;case"epsg-code":e=this.$store.state.editor.epsgCodes;break;case"input-format":e=this.$store.state.fileFormats.getInputTypes();break;case"openeo-datatype":let i=s(63610),l={};for(let e of i.NATIVE_TYPES)l[e]={type:e};e=Object.assign(l,i.API_TYPES);break;case"output-format":e=this.$store.state.fileFormats.getOutputTypes();break;case"service-type":e=this.$store.state.serviceTypes;break;case"billing-plan":e=this.$store.state.connection.capabilities().listPlans();break;case"udf-runtime":e=Object.keys(this.$store.state.udfRuntimes);break;case"udf-runtime-version":e=this.context in this.$store.state.udfRuntimes?Object.keys(this.$store.state.udfRuntimes[this.context].versions):[];break;default:e=this.options}"function"===typeof this.optionFilter&&e&&"object"===typeof e&&(e=n.A.isObject(e)?Object.fromEntries(Object.entries(e).filter((([e,t])=>this.optionFilter(t,e)))):e.filter(((e,t)=>this.optionFilter(e,t))));let t=[];switch(this.type){case"collection-id":return e.map((e=>this.e(e.id))).sort(this.sortByLabel);case"crs":for(const i of e){let e=i.replace("http://www.opengis.net/def/crs/",""),s=e.match(/^EPSG\/\d+\/(\d+)/i);if(s){let t=Number.parseInt(s[1],10);t in this.$store.state.editor.epsgCodes&&(e=this.$store.state.editor.epsgCodes[t]+` (EPSG:${t})`)}let a=e.match(/^OGC\/([^\/]+)\/(.+)/i);a&&(e=a[2]+` (${i})`),t.push({id:i,label:e})}return t;case"job-id":return e.map((e=>({id:e.id,label:n.A.getResourceTitle(e)}))).sort(this.sortByLabel);case"openeo-datatype":for(let i in e){let s=e[i];t.push({id:i,label:s.title||n.A.prettifyString(i),value:s})}return t;case"file-path":case"file-paths":return e.map((e=>this.e(e.path))).sort(((e,t)=>n.A.sortByPath(e.id,t.id)));case"epsg-code":for(let i in e)t.push({id:Number.parseInt(i,10),label:i+": "+e[i]});return t;case"input-format":case"output-format":case"service-type":for(let i in e){let s=i.toUpperCase(),a=e[i].title;a?s!==a.toUpperCase()&&(a=`${a} - ${s}`):a=s,t.push({id:s,label:a})}return t.sort(this.sortByLabel);case"billing-plan":return e.map((e=>({id:e.name,label:e.name+(e.paid?" (paid)":" (free)")})));case"year":let s=(new Date).getFullYear(),a=Array.from({length:100},((e,t)=>this.e(String(s-t))));if("string"===typeof this.value&&this.value.length>0&&-1===a.findIndex((e=>e.id===this.value))){var i=this.e(this.value);this.value>s?a.unshift(i):a.push(this.e(this.value))}return a;case"band-name":case"udf-runtime":case"udf-runtime-version":return e.map((e=>this.e(e)));default:return n.A.isObject(this.schema)&&this.schema.isEnum()?this.schema.getEnumChoices().map((e=>this.e(e))):Array.isArray(this.options)?this.options.map((e=>n.A.isObject(e)?e:this.e(e))):[]}},showDetails(){return"collection-id"===this.type},deselectLabel(){return this.multiple?"Press enter to remove":""},tagPlaceholder(){return"year"===this.type?"Press enter to select":"Press enter to create a tag"},multiple(){return"file-paths"===this.type},taggable(){let e=["band-name","collection-id","job-id","input-format","output-format"];return"year"===this.type||0===this.selectOptions.length&&e.includes(this.type)},preselect(){return this.multiple?!Array.isArray(this.selected)||0===this.selected.length:null===this.selected}},data(){return{selected:null,loaded:!1}},created(){this.loadData()},watch:{type(){this.loadData()},selected(e){let t;if(null===e)t=null;else if(this.multiple)Array.isArray(e)||(e=[e]),t=e.map((e=>e.id));else switch(this.type){case"epsg-code":var s=Number.parseInt(e.id);t=Number.isNaN(s)?null:s;break;case"openeo-datatype":t=e.value;break;case"year":t=String(e.id);break;default:t=e.id}this.$emit("input",t)},context(){switch(this.type){case"udf-runtime":case"udf-runtime-version":this.selected=null,this.preselectFirst();break;case"band-name":this.selected=null,this.loadData();break}}},methods:{...n.A.mapActions(["describeCollection"]),...n.A.mapActions("editor",["loadEpsgCodes"]),e(e){return{id:e,label:e}},async loadData(){this.loaded=!1,"epsg-code"===this.type||"crs"===this.type?await this.loadEpsgCodes():"band-name"===this.type&&await this.describeCollection(this.context),this.initSelection(),this.loaded=!0},async preselectFirst(){await this.$nextTick();let e=this.$refs.htmlElement;e.preselectFirst&&Array.isArray(e.filteredOptions)&&e.filteredOptions.length&&e.select(e.filteredOptions[0])},initSelection(){let e="undefined"===typeof this.value?this.schema.default():this.value;if(this.multiple&&Array.isArray(e))this.selected=this.selectOptions.filter((t=>e.includes(t.id)));else{switch(this.type){case"input-format":case"output-format":case"service-type":"string"===typeof e&&(e=e.toUpperCase());break}let t=this.selectOptions.find((t=>t.id===e));void 0!==t&&(this.selected=t)}},sortByLabel(e,t){return n.A.compareStringCaseInsensitive(e.label,t.label)},addValue(e){this.selected=this.e(e)}}},c=o;var p=s(81656),d=(0,p.A)(c,i,a,!1,null,null,null);const u=d.exports},16307:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"step choose-crs"},[t("p",[e._v("Please select the coordinate reference system (CRS) you want to data be reprojected to.")]),t("SelectBox",{attrs:{type:"crs",options:e.options,value:e.value},on:{input:e.setCrs}})],1)},a=[],l=s(34783);const r={name:"ChooseCrs",components:{SelectBox:l["default"]},props:{value:{type:String,default:null},options:{type:Array,default:null}},methods:{setCrs(e){this.$emit("input",e)}}},n=r;var o=s(81656),c=(0,o.A)(n,i,a,!1,null,null,null);const p=c.exports},63610:(e,t,s)=>{s.r(t),s.d(t,{API_TYPES:()=>a,NATIVE_TYPES:()=>l});var i=s(2566);const a=i.A.resolveJsonRefs(s(96318)).definitions,l=["string","integer","number","boolean","array","object"]}}]);
//# sourceMappingURL=6307.a72e4c41.js.map