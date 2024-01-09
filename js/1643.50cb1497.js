"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[1643],{15554:(e,t,s)=>{s.d(t,{Z:()=>o});const o={components:{FederationNotice:()=>s.e(8407).then(s.bind(s,78407)),FederationMissingNotice:()=>s.e(3559).then(s.bind(s,73559))},props:{federation:{type:Object,default:()=>({})}}}},51659:(e,t,s)=>{s.d(t,{Z:()=>c});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component processes"},[t("SearchableList",{attrs:{data:e.processes,keywordsKey:"categories",showKeywords:e.showCategories,showSummaryOnExpand:!1,externalSearchTerm:e.searchTerm,sort:e.sort,offerDetails:e.offerDetails,heading:e.heading,collapsed:e.collapsed,loadAdditionalData:e.loadAdditionalData,allowCopy:""},on:{detailsToggled:e.detailsToggled},scopedSlots:e._u([{key:"heading",fn:function(t){return[e._t("heading",null,null,t)]}},e.missing?{key:"content-start",fn:function(){return[t("FederationMissingNotice",{attrs:{missing:e.missing,federation:e.federation}})]},proxy:!0}:null,{key:"summary",fn:function(t){return[e._t("summary",null,null,t)]}},{key:"details",fn:function(s){return[t("Process",{attrs:{process:s.item,provideDownload:e.provideDownload,processUrl:e.processUrl,showGraph:e.showGraph,federation:e.federation},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{staticClass:"hidden"})]},proxy:!0},{key:"before-description",fn:function(t){return[e._t("process-before-description",null,null,t)]}},{key:"end",fn:function(t){return[e._t("process-end",null,null,t)]}}],null,!0)})]}}],null,!0)})],1)},n=[],r=s(40465),l=s(15554);const a={name:"Processes",components:{Process:()=>r.Z.loadAsyncComponent(s.e(3965).then(s.bind(s,16157))),SearchableList:()=>r.Z.loadAsyncComponent(s.e(3250).then(s.bind(s,33250)))},mixins:[l.Z],props:{processes:{type:Array,default:()=>[]},provideDownload:{type:Boolean,default:!0},processUrl:String,searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"Processes"},collapsed:{type:Boolean,default:null},showCategories:{type:Boolean,default:!1},showGraph:{type:Boolean,default:!1},loadAdditionalData:{type:Function,default:null},missing:{type:Array,default:null},...l.Z.props},beforeCreate(){r.Z.enableHtmlProps(this)},methods:{detailsToggled(...e){this.$emit("detailsToggled",...e)}}},i=a;var d=s(1001),u=(0,d.Z)(i,o,n,!1,null,null,null);const c=u.exports},91643:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"step choose-process"},[t("p",[e._v("Please select the user-defined process to execute:")]),t("Processes",{attrs:{heading:"",processes:e.filteredProcesses,offerDetails:!1},scopedSlots:e._u([{key:"summary",fn:function({item:s}){return[t("div",{class:{element:!0,selected:s.id==e.value}},[t("div",{staticClass:"summary",on:{click:function(t){return e.update(s)}}},[t("strong",{attrs:{title:s.id}},[e._v(e._s(s.id))]),s.title?t("small",{attrs:{title:s.title}},[e._v(e._s(s.title))]):e._e()]),t("button",{staticClass:"button",attrs:{type:"button",title:"Show process details"},on:{click:function(t){return e.showProcess(s)}}},[t("i",{staticClass:"fas fa-info"})])])]}}])}),t("hr"),t("p",[e._v("Alternatively, provide a URL to a user-defined process:")]),t("input",{staticClass:"url",attrs:{type:"url",name:"url"},domProps:{value:e.url},on:{blur:e.updateUrl}})],1)},n=[],r=s(51659),l=s(79879),a=s(43334);const i={name:"ChooseUserDefinedProcess",mixins:[a.Z],components:{Processes:r.Z},props:{value:{type:String,default:null},namespace:{type:String,default:null},url:{type:String,default:null}},computed:{...l.Z.mapGetters(["processes"]),filteredProcesses(){return this.processes.namespace(this.namespace||"user")}},methods:{...l.Z.mapActions(["describeUserProcess"]),update(e){this.$emit("input",e)},updateUrl(e){const t=e.target.value;if(t){if(!l.Z.isUrl(t))throw new Error("The provided URL is not valid.");this.$emit("input",t,!0)}},showProcess(e){this.broadcast("showProcess",e)}}},d=i;var u=s(1001),c=(0,u.Z)(d,o,n,!1,null,null,null);const p=c.exports}}]);
//# sourceMappingURL=1643.50cb1497.js.map