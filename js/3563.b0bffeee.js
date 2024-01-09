"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[3563],{58036:(e,t,s)=>{s.d(t,{Z:()=>y});var a=s(65948),i=s(45930),r=s(79879),o=s(94478),n=s(43334),l=s(41469),c=s(52590),p=s(66541);const d={name:"VisualEditor",mixins:[n.Z],components:{ModelBuilder:i["default"],DiscoveryToolbar:o.Z,FullscreenButton:l.Z},props:{id:String,editable:{type:Boolean,default:!0},value:{type:Object,default:()=>null},parent:{type:Object,default:null},parentSchema:{type:Object,default:null},showDiscoveryToolbar:{type:Boolean,default:!1},showIntro:{type:Boolean,default:!1},title:{type:String},defaultValue:{}},computed:{...r.Z.mapState(["connection","collections"]),...r.Z.mapGetters(["processes","supportsMath"]),...r.Z.mapState("editor",["initialNode"]),...r.Z.mapGetters("editor",["getModelNodeFromDnD"]),isMath(){return this.supportsMath&&this.processes.isMath(this.value)}},data(){return{showHelpOverlay:this.showIntro,canUndo:!1,canRedo:!1,canPaste:!1,compactMode:!1,hasSelection:!1,formula:null,isFullScreen:!1}},watch:{value:{immediate:!0,handler(e){if(e&&(this.showHelpOverlay=!1),this.initialNode&&r.Z.isObject(e)&&r.Z.isObject(e.process_graph))try{let t=this.initialNode;"1"==t&&r.Z.size(e.process_graph)&&(t=Object.keys(e.process_graph)[0]),this.openArgumentEditorForNode(t)}catch(t){r.Z.exception(this,t)}finally{this.setInitialNode(null)}}}},mounted(){this.canPaste=navigator&&navigator.clipboard&&"function"===typeof navigator.clipboard.readText},methods:{...r.Z.mapMutations("editor",["setInitialNode","setModelDnD"]),commit(e){"undefined"!==typeof this.defaultValue&&r.Z.isObject(e)&&0===r.Z.size(e.process_graph)&&(e=this.defaultValue),this.$emit("input",e)},async paste(){this.canPaste||r.Z.error(this,"error","Pasting is not supported by your browser.");try{const e=await navigator.clipboard.readText();let t=JSON.parse(e);await this.$refs.blocks.import(t)}catch(e){r.Z.exception(this,e,"Paste Error")}},importProcess(){this.broadcast("importProcess")},errorHandler(e,t=null){r.Z.exception(this,e,t)},selectionChanged(e,t){this.hasSelection=Boolean(e.filter((e=>e.$el.allowsDelete)).length||t.length)},historyChanged(e,t){this.canUndo=!!e[t-1],this.canRedo=!!e[t+1]},allowDrop(e){this.showHelpOverlay=!1,e.preventDefault()},async onDrop(e){const t=await this.getModelNodeFromDnD();if(t)return this.insertProcess(t,e.pageX,e.pageY),this.setModelDnD(),e.preventDefault();let s=e.dataTransfer.files;if(1===s.length){let t=e.dataTransfer.files[0];if("application/json"===t.type){var a=new FileReader;return a.onload=async e=>{try{let t=JSON.parse(e.target.result);await this.$refs.blocks.import(t)}catch(t){r.Z.exception(this,t,"Parsing JSON file failed")}},a.onerror=e=>r.Z.exception(this,e,"Reading JSON file failed"),a.readAsText(t,"UTF-8"),e.preventDefault()}}},getNameField(e=void 0,t="name"){return{value:e,name:t,description:"A unique identifier. Must contain only letters (`a`-`z`), digits (`0`-`9`) and underscores (`_`). `snake_case` is recommended.",label:"Name",schema:{type:"string",pattern:"^\\w+$"},default:null}},getDescriptionField(e=void 0,t=!1,s="description",a="Description"){return{value:e,name:s,description:"Provides a detailed description. CommonMark (Markdown) syntax can be used for rich text formatting.",label:a,optional:t,schema:{type:"string",subtype:"commonmark"}}},getOptionalField(e=void 0){return{value:e,name:"optional",label:"Optional",description:"Parameters by default are required. CHeck this option to make the parameter optional. For optional parameters a default value should be specified.",optional:!0,schema:{type:"boolean"},default:!1}},getDefaultField(e=void 0){return{value:e,name:"default",label:"Default Value",description:"This value is used whenever the user of this process did not specify a value for this parameter.",toggledBy:"optional",optional:!0,schema:{}}},getExperimentalField(e=void 0){return{value:e,name:"experimental",label:"Experimental",description:"Declares that this is experimental, which means that it is unstable and likely to change.",optional:!0,schema:{type:"boolean"},default:!1}},getDeprecatedField(e=void 0){return{value:e,name:"deprecated",label:"Deprecated",description:"Declares that this is deprecated with the potential to be removed in any of the next versions. It should be transitioned out of usage.",optional:!0,schema:{type:"boolean"},default:!1}},getSchemaField(e=void 0,t="schema",s="Data Types"){let a=e?"json-schema":"openeo-datatype";return{value:e,name:t,label:s,description:"Allowed data type(s) as JSON Schema.",schema:[{title:"Single data type",type:"object",subtype:a},{title:"Multiple data types",type:"array",minItems:2,items:{type:"object",subtype:a}}]}},editProcess(e){e=r.Z.isObject(e)?e:{};let t=r.Z.isObject(e.returns)?e.returns:{};var s=[this.getNameField(e.id,"id"),{value:e.summary,name:"summary",description:"A very short description of the process with usually less than 60 characters.",label:"Summary",optional:!0,schema:{type:"string"}},this.getDescriptionField(e.description,!0),{value:e.categories,name:"categories",label:"Categories",optional:!0,schema:{type:"array",items:{type:"string"}}},this.getExperimentalField(e.experimental),this.getDeprecatedField(e.deprecated),{label:"Parameters",description:'The parameters can be edited directly in the "Visual Model" interface.',info:!0},this.getDescriptionField(t.description,!0,"returns_description","Return Value > Description"),this.getSchemaField(t.schema,"returns_schema","Return Value > Data Type"),{value:e.exceptions,name:"exceptions",description:"Declares exceptions (errors) that might occur during execution of this process. This list is just for informative purposes.\n\nThe keys of the object are the error codes, which should only consist of alphanumerical characters. `PascalCase` is recommended.",label:"Errors",optional:!0,schema:{type:"object",additionalProperties:{type:"object",required:["message"],properties:{message:{title:"Error Message",type:"string"},description:{title:"Description",type:"string",subtype:"commonmark"},http:{title:"HTTP Status Code",type:"integer",enum:[400,500,501]}}}}},{value:e.examples,name:"examples",label:"Examples",description:"Example calls for this process with specific values for the parameters (arguments) and the result (return value).",optional:!0,schema:{type:"array",items:{type:"object",required:["arguments"],properties:{title:{title:"Title",type:"string"},title:{title:"Description",type:"string",subtype:"commonmark"},arguments:{title:"Arguments",type:"object",default:{}},returns:{title:"Return Value"}}}}},{value:e.links,name:"links",label:"Links",description:"Links related to this process, e.g. additional documentation.",optional:!0,schema:{type:"array",items:{type:"object",required:["href","rel"],properties:{href:{title:"URL",type:"string"},rel:{title:"Relation",description:"For examples see [IANA relation types](https://www.iana.org/assignments/link-relations/link-relations.xhtml)",type:"string",default:"about"},title:{title:"Title",type:"string"},type:{title:"Media Type",description:"For examples see [IANA media types](https://www.iana.org/assignments/media-types/media-types.xhtml)",type:"string"}}}}}];this.broadcast("showDataForm","Edit Process",s,(async e=>{let t=r.Z.pickFromObject(e,["id","summary","description","categories","experimental","deprecated","exception","examples","links"]);("string"===typeof t.description||r.Z.isObject(t.schema))&&(t.returns={description:e.returns_description,schema:e.returns_schema});let s=this.$refs.blocks.export(!0),a=Object.assign({},s,t);const i={id:"",summary:"",description:"",categories:[],experimental:!1,deprecated:!1,examples:[],links:[],process_graph:{}};for(let o in i)r.Z.equals(i[o],a[o])&&delete a[o];this.commit(a)}))},addParameter(){var e=[this.getNameField(),this.getDescriptionField(),this.getOptionalField(),this.getDefaultField(),this.getExperimentalField(),this.getDeprecatedField(),this.getSchemaField()];this.broadcast("showDataForm","Add Parameter",e,(async e=>{"string"===typeof e.name&&e.name.length>0&&await this.$refs.blocks.addPgParameter(e)}))},editParameter(e,t="Edit Parameter",s=null){var a=[this.getNameField(e.name),this.getDescriptionField(e.description),this.getOptionalField(e.optional),this.getDefaultField(e.default),this.getExperimentalField(e.experimental),this.getDeprecatedField(e.deprecated),this.getSchemaField(e.schema)];this.broadcast("showDataForm",t,a,s)},showExpressionModal(){let e=new p.Z(this.value,this.processes,this.connection,!0);e.setCallbackParameters(this.$refs.blocks.getPgParameters().map((e=>e.spec)));try{e.parse();let t={process:e},s={save:this.insertNodes};this.broadcast("showModal","ExpressionModal",t,s)}catch(t){r.Z.exception(this,t)}},openArgumentEditorForNode(e){let t=r.Z.deepClone(this.value),s=t.process_graph[e],a=this.processes.get(s.process_id,s.namespace);Array.isArray(a.parameters)&&a.parameters.length>0&&this.openArgumentEditor(a.parameters.map((e=>new c.ProcessParameter(e))).filter((e=>e.isEditable())),s.arguments,a.id,!0,null,(e=>{Object.assign(s,{arguments:e}),this.commit(t)}))},openArgumentEditor(e,t,s="Edit",a=!0,i=null,r=null,o=null){let n={title:s,parameters:e,data:t,editable:a,selectParameterName:i,parent:o},l={};"function"===typeof r&&(l.save=r),this.broadcast("showModal","ParameterModal",n,l)},confirmClear(){var e=confirm("Do you really want to clear the existing model?");e&&this.clear()},clear(){this.$refs.blocks&&this.$refs.blocks.clear(),this.commit(null)},insertProcess(e,t=null,s=null){try{var a=this.$refs.blocks.getPositionForPageXY(t,s);let i=e.namespace;"backend"!==i&&"user"!==i||(i=null),this.$refs.blocks.addProcess(e.process_id,e.arguments,a,i)}catch(i){r.Z.exception(this,i)}},async insertNodes(e,t=!1){return await this.$refs.blocks.import({process_graph:e},{clear:t})}}},h=d;var u=s(1001),m=(0,u.Z)(h,a.s,a.x,!1,null,null,null);const y=m.exports},74588:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(20745),i=s(79879),r=s(25108);const o=(e,t,s,o=!0)=>({components:{DataTable:a.Z},data(){return{syncTimer:null,lastSyncTime:null}},mounted(){o&&this.updateData()},beforeDestroy(){this.stopSyncTimer()},computed:{...i.Z.mapState(e,{data:e}),...i.Z.mapGetters(e,["supportsList","supportsCreate","supportsRead","supportsUpdate","supportsDelete"])},methods:{...i.Z.mapActions(e,["list","create","read","update","delete"]),getTable(){return this.$refs&&this.$refs.table?this.$refs.table:null},onShow(){this.updateData().catch((e=>i.Z.exception(this,e,`Updating ${s} failed`))),this.startSyncTimer()},onHide(){this.stopSyncTimer()},startSyncTimer(){this.supportsList&&null===this.syncTimer&&(this.syncTimer=setInterval(this.updateData,this.getSyncInterval()))},stopSyncTimer(){null!==this.syncTimer&&(clearInterval(this.syncTimer),this.syncTimer=null)},getSyncInterval(){return 60*this.$config.dataRefreshInterval*1e3},async refreshElement(e,s=null){var a=Object.assign({},e);try{let t=await this.read({data:e});"function"===typeof s&&s(t,a)}catch(r){i.Z.exception(this,r,"Load "+t+" error")}},async updateData(e=!1){var a=this.getTable(),o=Date.now()-this.getSyncInterval();if(!a||!e&&this.lastSyncTime>o)return!1;if(this.supportsList){var n=this.data.length>0;n||a.setNoData("Loading "+s+"..."),this.lastSyncTime=Date.now();try{let e=await this.list();return 0==e.length&&a.setNoData("Add your first "+t+" here..."),!0}catch(l){n?r.log(l):(i.Z.exception(this,l),a.setNoData("Sorry, unable to load data from the server."))}}else a.setNoData("Sorry, listing stored "+s+" is not supported by the server.");return!1}}})},97683:(e,t,s)=>{s.d(t,{C:()=>i,G:()=>o});var a=s(6139);class i extends Error{constructor(e,t=null,s=null,a=!0,i=!0){super(e,{cause:s}),this.title=t,this.close=a,this.isError=i}}let r={};async function o(e,t,s){r[s]?r[s]++:r[s]=1;const o=new a.AbortController,n=Object.assign({},e.$config.snotifyDefaults,{timeout:0,type:"async",buttons:[{text:"Cancel",action:()=>{o.abort()}}]});let l;const c=`${s} #${r[s]}`;try{const s="Processing in progress, please wait...",a=()=>new Promise((()=>{}));l=e.$snotify.async(s,c,a,n),await t(o)}catch(p){if(axios.isCancel(p))throw new i("Cancelled successfully",c,p,!1,!1);if("string"!==typeof p.message||!Utils.isObject(p.response)||![400,500].includes(p.response.status))throw new i(p.message,c,p,!1);e.broadcast("viewLogs",[{id:p.id,code:p.code,level:"error",message:p.message,links:p.links||[]}]),Utils.error(e,`${s} failed. Please see the logs for details.`,c)}finally{l&&e.$snotify.remove(l.id,!0)}}}}]);
//# sourceMappingURL=3563.b0bffeee.js.map