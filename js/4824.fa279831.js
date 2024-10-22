"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[4824,4477,1237,7186,7336],{35254:(e,t,s)=>{s.d(t,{A:()=>r});const r={components:{FederationNotice:()=>s.e(2604).then(s.bind(s,52604)),FederationMissingNotice:()=>s.e(5363).then(s.bind(s,35363))},props:{federation:{type:Object,default:()=>({})}}}},48312:(e,t,s)=>{s.d(t,{A:()=>d});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component processes"},[t("SearchableList",{attrs:{data:e.processes,keywordsKey:"categories",showKeywords:e.showCategories,showSummaryOnExpand:!1,externalSearchTerm:e.searchTerm,externalHideDeprecated:e.hideDeprecated,deprecatedFilter:e.deprecatedFilter,externalHideExperimental:e.hideExperimental,experimentalFilter:e.experimentalFilter,sort:e.sort,offerDetails:e.offerDetails,heading:e.heading,collapsed:e.collapsed,loadAdditionalData:e.loadAdditionalData,allowCopy:""},on:{detailsToggled:e.detailsToggled},scopedSlots:e._u([{key:"heading",fn:function(t){return[e._t("heading",null,null,t)]}},e.missing?{key:"content-start",fn:function(){return[t("FederationMissingNotice",{attrs:{missing:e.missing,federation:e.federation}})]},proxy:!0}:null,{key:"summary",fn:function(t){return[e._t("summary",null,null,t)]}},{key:"details",fn:function(s){return[t("Process",{attrs:{process:s.item,provideDownload:e.provideDownload,processUrl:e.processUrl,showGraph:e.showGraph,federation:e.federation},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{staticClass:"hidden"})]},proxy:!0},{key:"before-description",fn:function(t){return[e._t("process-before-description",null,null,t)]}},{key:"end",fn:function(t){return[e._t("process-end",null,null,t)]}}],null,!0)})]}}],null,!0)})],1)},o=[],a=s(86975),n=s(35254);const i={name:"Processes",components:{Process:()=>a.A.loadAsyncComponent(s.e(6660).then(s.bind(s,34279))),SearchableList:()=>a.A.loadAsyncComponent(s.e(4152).then(s.bind(s,34152)))},mixins:[n.A],props:{processes:{type:Array,default:()=>[]},provideDownload:{type:Boolean,default:!0},processUrl:String,searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"Processes"},collapsed:{type:Boolean,default:null},showCategories:{type:Boolean,default:!1},showGraph:{type:Boolean,default:!1},hideDeprecated:{type:Boolean,default:!1},deprecatedFilter:{type:Boolean,default:!1},hideExperimental:{type:Boolean,default:!1},experimentalFilter:{type:Boolean,default:!1},loadAdditionalData:{type:Function,default:null},missing:{type:Array,default:null},...n.A.props},beforeCreate(){a.A.enableHtmlProps(this)},methods:{detailsToggled(...e){this.$emit("detailsToggled",...e)}}},l=i;var c=s(81656),p=(0,c.A)(l,r,o,!1,null,null,null);const d=p.exports},4824:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wizard-tab-content"},[e.noProcessSelection?e._e():t("WizardTab",{attrs:{pos:e.tabPos[0],parent:e.parent,title:"Process",beforeChange:e.checkProcessRequirements}},[t("ChooseUserDefinedProcess",{attrs:{value:e.process,namespace:e.processNamespace,url:e.processUrl},on:{input:e.submitProcess}})],1),t("WizardTab",{attrs:{pos:e.tabPos[1],parent:e.parent,title:"Parameters",beforeChange:e.checkParameterRequirements}},[e.processSpec?t("ChooseProcessParameters",{attrs:{process:e.processSpec},model:{value:e.args,callback:function(t){e.args=t},expression:"args"}}):e.loading?t("p",{staticClass:"center"},[t("i",{staticClass:"fas fa-spinner fa-spin"}),e._v(" Loading process...")]):t("p",[e._v("Process not available.")])],1),t("WizardTab",{attrs:{pos:e.tabPos[2],parent:e.parent,title:"Finish"}},[t("ChooseProcessingMode",{attrs:{title:e.jobTitle},on:{"update:title":function(t){e.jobTitle=t}},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}})],1)],1)},o=[],a=s(37186),n=s(31237),i=s(37336),l=s(45699),c=s(2566),p=s(14894);const d={name:"UDP",mixins:[l.A],components:{ChooseUserDefinedProcess:i["default"],ChooseProcessingMode:a["default"],ChooseProcessParameters:n["default"]},data(){return{loading:!1,noProcessSelection:!1,process:null,processUrl:null,processSpec:null,processNamespace:null,args:{},jobTitle:"",mode:""}},computed:{...c.A.mapGetters(["processes"]),tabPos(){return this.noProcessSelection?[null,0,1]:[0,1,2]},graph(){if(!this.process||!this.processSpec)return null;let e={process_id:this.process,arguments:this.args,result:!0};return c.A.hasText(this.processNamespace)&&(e.namespace=this.processNamespace),c.A.hasText(this.processSpec.summary)&&(e.description=this.processSpec.summary),{process_graph:{[this.process]:e}}}},async beforeMount(){if("string"===typeof this.process&&this.process.length>0){const[e,t]=c.A.extractUDPParams(this.process);this.noProcessSelection=!0,this.process=e,t&&(this.processNamespace=t);let s=await this.checkProcessRequirements();s||this.$emit("close","Sorry, the wizard can't load the requested process.")}},methods:{...c.A.mapActions(["loadProcess"]),submitProcess(e,t=!1){t?this.processUrl=e:(this.process=e.id,e.namespace&&(this.processNamespace=e.namespace),this.parent.nextTab())},async loadFromUrl(e){if(!c.A.isUrl(e))throw new Error("Please provide a valid URL!");let t;try{const s=await axios(e);t=s.data}catch(s){throw new Error("Failed to load process from the given URL")}if("string"===typeof t)try{t=JSON.parse(t)}catch(s){throw new Error("Process is not valid JSON")}if(!c.A.isObject(t))throw new Error("Process does not contain any data");if(!c.A.hasText(t.id))throw new Error("Process does not contain an id");if(!c.A.isObject(t.process_graph))throw new Error("Process does not contain a process graph");return t},async checkProcessRequirements(){if(this.loading=!0,this.processUrl){const e=await this.loadFromUrl(this.processUrl);this.processes.add(e,this.processUrl),this.processNamespace=this.processUrl,this.process=e.id,this.processSpec=e}else{if(!this.process)throw new Error("Please select a user-defined process");this.processSpec=await this.loadProcess({id:this.process,namespace:this.processNamespace})}return this.loading=!1,this.processSpec&&(this.jobTitle=this.processSpec.id),!0},checkParameterRequirements(){if(this.graph){var e=new p.ProcessGraph(this.graph,this.processes);return e.validate()}return!1},async finish(){this.$emit("input",{process:this.graph,mode:this.mode,modeOptions:{title:this.jobTitle}})}}},u=d;var h=s(81656),m=(0,h.A)(u,r,o,!1,null,null,null);const f=m.exports},4477:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var r=function(){var e=this,t=e._self._c;return e.active?t("div",{staticClass:"wizard-tab-container"},[e._t("default",null,{active:e.active})],2):e._e()},o=[];const a={name:"WizardTab",props:{parent:{type:Object,required:!0},pos:{type:Number,required:!0},title:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function}},data(){return{active:!1,validationError:null,checked:!1}},mounted(){this.parent.addTab(this,this.pos)},beforeDestroy(){this.parent.removeTab(this)}},n=a;var i=s(81656),l=(0,i.A)(n,r,o,!1,null,null,null);const c=l.exports},31237:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"step choose-process-parameters"},[0===e.parameters.length?t("p",[e._v(" This process doesn't expose any parameters. You can skip this step. ")]):t("Parameters",{attrs:{parameters:e.parameters,parent:e.process},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},o=[],a=s(31572),n=s(10510),i=s(2566);const l={name:"ChooseProcessParameters",components:{Parameters:n.A},props:{process:{type:Object,required:!0},value:{type:Object,required:!0}},computed:{parameters(){return i.A.isObject(this.process)&&Array.isArray(this.process.parameters)?this.process.parameters.map((e=>new a.ProcessParameter(e))).filter((e=>e.isEditable())):[]}}},c=l;var p=s(81656),d=(0,p.A)(c,r,o,!1,null,null,null);const u=d.exports},37186:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"step choose-processing-mode"},[e.isAuthenticated&&(e.supportsJobs||e.supportsSync)?[t("p",[e._v("Please select how you'd like to execute this workflow?")]),t("ul",{staticClass:"mode"},[e.supportsJobs?t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",id:"job",value:"job"},domProps:{checked:e._q(e.mode,"job")},on:{change:function(t){e.mode="job"}}}),t("label",{attrs:{for:"job"}},[t("strong",[e._v("Batch Jobs")]),t("br"),e._v(" Slower processing mode for large amounts of data. Creates and queues a batch job."),t("br"),e._v(" It is recommended to provide a title for the batch job: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.titleInput,expression:"titleInput"}],ref:"title",attrs:{type:"text"},domProps:{value:e.titleInput},on:{input:function(t){t.target.composing||(e.titleInput=t.target.value)}}})])]):e._e(),e.supportsSync?t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",id:"sync",value:"sync"},domProps:{checked:e._q(e.mode,"sync")},on:{change:function(t){e.mode="sync"}}}),e._m(0)]):e._e(),e.supportsSync?t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",id:"model",value:""},domProps:{checked:e._q(e.mode,"")},on:{change:function(t){e.mode=""}}}),e._m(1)]):e._e()])]:t("p",[e._v(" The wizard has all information to create the workflow for you."),t("br"),e.isAuthenticated?[e._v("Unforntunately, this back-end can't process data,")]:[e._v("You are not logged in and thus you can't process data directly,")],e._v(" but you can insert the process into the visual model builder now. ")],2)],2)},o=[function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"sync"}},[t("strong",[e._v("Synchronous Processing")]),t("br"),e._v(" Fast processing mode for small amounts of data. ")])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"model"}},[t("strong",[e._v("Don't execute")]),t("br"),e._v(" Only show the generated workflow in the visual model builder. You can then export it or you can run it later. ")])}],a=s(2566);const n={name:"ChooseProcessingMode",props:{value:{type:String,default:null},title:{type:String,default:""}},data(){return{mode:this.value}},computed:{...a.A.mapState(["isAuthenticated"]),...a.A.mapGetters(["supports"]),titleInput:{get(){return this.title},set(e){this.$emit("update:title",e)}},supportsJobs(){return this.supports("createJob")&&this.supports("startJob")},supportsSync(){return this.supports("computeResult")}},watch:{value(){this.mode=this.value},mode(){this.$emit("input",this.mode),"job"===this.mode&&this.$refs.title.select()},title(){this.$emit("update:title",this.title)}}},i=n;var l=s(81656),c=(0,l.A)(i,r,o,!1,null,"449febe3",null);const p=c.exports},37336:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"step choose-process"},[t("p",[e._v("Please select the user-defined process to execute:")]),t("Processes",{attrs:{heading:"",processes:e.filteredProcesses,offerDetails:!1},scopedSlots:e._u([{key:"summary",fn:function({item:s}){return[t("div",{class:{element:!0,selected:s.id==e.value}},[t("div",{staticClass:"summary",on:{click:function(t){return e.update(s)}}},[t("strong",{attrs:{title:s.id}},[e._v(e._s(s.id))]),s.title?t("small",{attrs:{title:s.title}},[e._v(e._s(s.title))]):e._e()]),t("button",{staticClass:"button",attrs:{type:"button",title:"Show process details"},on:{click:function(t){return e.showProcess(s)}}},[t("i",{staticClass:"fas fa-info"})])])]}}])}),t("hr"),t("p",[e._v("Alternatively, provide a URL to a user-defined process:")]),t("input",{staticClass:"url",attrs:{type:"url",name:"url"},domProps:{value:e.url},on:{blur:e.updateUrl}})],1)},o=[],a=s(48312),n=s(2566),i=s(61663);const l={name:"ChooseUserDefinedProcess",mixins:[i.A],components:{Processes:a.A},props:{value:{type:String,default:null},namespace:{type:String,default:null},url:{type:String,default:null}},computed:{...n.A.mapGetters(["processes"]),filteredProcesses(){return this.processes.namespace(this.namespace||"user")}},methods:{...n.A.mapActions(["describeUserProcess"]),update(e){this.$emit("input",e)},updateUrl(e){const t=e.target.value;if(t){if(!n.A.isUrl(t))throw new Error("The provided URL is not valid.");this.$emit("input",t,!0)}},showProcess(e){this.broadcast("showProcess",e)}}},c=l;var p=s(81656),d=(0,p.A)(c,r,o,!1,null,null,null);const u=d.exports},45699:(e,t,s)=>{s.d(t,{A:()=>o});var r=s(4477);const o={components:{WizardTab:r["default"]},props:{parent:{type:Object,required:!0},options:{type:Object,default:()=>({})}},created(){for(let e in this.options)this[e]=this.options[e]}}}}]);
//# sourceMappingURL=4824.fa279831.js.map