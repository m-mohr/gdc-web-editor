"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[4823],{93134:(e,t,s)=>{s(50511)},44413:(e,t,s)=>{s.d(t,{s:()=>a,x:()=>r});var a=function(){var e=this,t=e._self._c;return t("div",{ref:"visualEditor",staticClass:"visualEditor"},[t("div",{staticClass:"sourceHeader"},[e.title?t("strong",[e._v(e._s(e.title))]):e._e(),t("div",{staticClass:"sourceToolbar"},[e.editable?t("span",{staticClass:"sepr"},[t("button",{attrs:{type:"button",title:"New script / Clear current script"},on:{click:e.confirmClear}},[t("i",{staticClass:"fas fa-file"})]),e._t("file-toolbar")],2):e._e(),e.editable?t("span",{staticClass:"sepr"},[t("button",{attrs:{type:"button",disabled:!e.canUndo,title:"Revert last change"},on:{click:function(t){return e.$refs.blocks.undo()}}},[t("i",{staticClass:"fas fa-undo-alt"})]),t("button",{attrs:{type:"button",disabled:!e.canRedo,title:"Redo last reverted change"},on:{click:function(t){return e.$refs.blocks.redo()}}},[t("i",{staticClass:"fas fa-redo-alt"})]),t("button",{attrs:{type:"button",disabled:!e.hasSelection,title:"Delete selected elements"},on:{click:function(t){return e.$refs.blocks.deleteSelected()}}},[t("i",{staticClass:"fas fa-trash"})])]):e._e(),e.editable?t("span",{staticClass:"sepr"},[e.parent?e._e():t("button",{attrs:{type:"button",title:"Edit Process Metadata"},on:{click:()=>e.editProcess(e.value)}},[t("i",{staticClass:"fas fa-edit"})]),t("button",{attrs:{type:"button",title:"Add Parameter"},on:{click:e.addParameter}},[t("i",{staticClass:"fas fa-parking"})]),e.supportsMath?t("button",{class:{highlightFormula:e.isMath},attrs:{type:"button",title:"Insert/Edit formula"},on:{click:e.showExpressionModal}},[t("i",{staticClass:"fas fa-square-root-alt"})]):e._e()]):e._e(),t("button",{class:{compactMode:e.compactMode},attrs:{type:"button",title:"Compact Mode"},on:{click:function(t){return e.$refs.blocks.toggleCompact()}}},[t("i",{staticClass:"fas fa-compress-arrows-alt"})]),t("button",{attrs:{type:"button",title:"Scale to perfect size"},on:{click:function(t){return e.$refs.blocks.perfectScale()}}},[t("i",{staticClass:"fas fa-arrows-alt"})]),t("FullscreenButton",{attrs:{element:()=>this.$refs.visualEditor},on:{changed:t=>{this.$refs.blocks.perfectScale(),e.isFullScreen=t}}}),e._t("toolbar")],2)]),t("div",{staticClass:"editorSplitter"},[(e.showDiscoveryToolbar||e.isFullScreen)&&e.editable?t("DiscoveryToolbar",{staticClass:"discoveryToolbar",attrs:{onAddProcess:e.insertProcess}}):e._e(),t("div",{staticClass:"graphBuilder",on:{drop:e.onDrop,dragover:e.allowDrop}},[e.showHelpOverlay?t("div",{staticClass:"model-overlay"},[t("h2",[e._v("Welcome!")]),t("p",[e._v(" What you are seeing in this area of the "+e._s(e.$config.appName)+" is the visual model builder. You can start building your model by dragging collections, processes etc. from the left area and dropping them here. ")]),t("p",[e._v(" Alternatively, you can also import existing processes into the model builder: "),t("ul",[e.canPaste?t("li",[e._v("Paste the JSON from your clipboard by clicking "),t("button",{attrs:{type:"button",title:"Paste from clipboard"},on:{click:e.paste}},[t("i",{staticClass:"fas fa-paste"})]),e._v(" or use "),t("kbd",[e._v("CTRL")]),e._v(" + "),t("kbd",[e._v("V")]),e._v(" (Windows, Linux) or "),t("kbd",[e._v("⌘")]),e._v(" + "),t("kbd",[e._v("V")]),e._v(" (MacOS) when the model builder is in focus.")]):e._e(),t("li",[e._v("Drag and drop a JSON file from your computer")]),t("li",[e._v("Import a JSON file from your computer or another source such as the internet by clicking "),t("button",{attrs:{type:"button",title:"Import process from external source"},on:{click:e.importProcess}},[t("i",{staticClass:"fas fa-cloud-download-alt"})])])])]),e._m(0),t("p",[e._v("Once you start interacting with this area, this message will disappear.")])]):e._e(),t("ModelBuilder",{ref:"blocks",attrs:{editable:e.editable,id:e.id,processes:e.processes,collections:e.collections,parent:e.parent,parentSchema:e.parentSchema,value:e.value},on:{input:e.commit,error:e.errorHandler,showProcess:(t,s)=>e.broadcast("showProcess",{id:t,namespace:s}),showCollection:t=>e.broadcast("showCollection",t),showParameter:(t,s)=>e.broadcast("showProcessParameter",t,s),editParameter:e.editParameter,editArguments:e.openArgumentEditor,compactMode:e=>this.compactMode=e,selectionChanged:e.selectionChanged,historyChanged:e.historyChanged}})],1)],1)])},r=[function(){var e=this,t=e._self._c;return t("p",[e._v(" You can also import the processes from the Python and R client. You need to export your process to JSON first: "),t("ul",[t("li",[e._v("In Python use "),t("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/cookbook/tricks.html#process-graph-export",target:"_blank"}},[t("code",[e._v("print(result.to_json())")])])]),t("li",[e._v("In R use "),t("a",{attrs:{href:"https://open-eo.github.io/openeo-r-client/reference/index.html",target:"_blank"}},[t("code",[e._v('toJSON(as(result, "Process"))')])])])]),e._v(" In both cases, "),t("code",[e._v("result")]),e._v(" is your last return value from a data cube process such as "),t("code",[e._v("save_result")]),e._v(". For more details, please read the corresponding chapter in the "),t("a",{attrs:{href:"https://openeo.org/documentation/1.0/cookbook/#output-process-as-json",target:"_blank"}},[e._v("openEO cookbook")]),e._v(". ")])}]},74588:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(29081),r=s(79879),i=s(25108);const o=(e,t,s,o=!0)=>({components:{DataTable:a.Z},data(){return{syncTimer:null,lastSyncTime:null}},mounted(){o&&this.updateData()},beforeDestroy(){this.stopSyncTimer()},computed:{...r.Z.mapState(e,{data:e}),...r.Z.mapGetters(e,["supportsList","supportsCreate","supportsRead","supportsUpdate","supportsDelete"])},methods:{...r.Z.mapActions(e,["list","create","read","update","delete"]),getTable(){return this.$refs&&this.$refs.table?this.$refs.table:null},onShow(){this.updateData().catch((e=>r.Z.exception(this,e,`Updating ${s} failed`))),this.startSyncTimer()},onHide(){this.stopSyncTimer()},startSyncTimer(){this.supportsList&&null===this.syncTimer&&(this.syncTimer=setInterval(this.updateData,this.getSyncInterval()))},stopSyncTimer(){null!==this.syncTimer&&(clearInterval(this.syncTimer),this.syncTimer=null)},getSyncInterval(){return 60*this.$config.dataRefreshInterval*1e3},async refreshElement(e,s=null){var a=Object.assign({},e);try{let t=await this.read({data:e});"function"===typeof s&&s(t,a)}catch(i){r.Z.exception(this,i,"Load "+t+" error")}},async updateData(e=!1){var a=this.getTable(),o=Date.now()-this.getSyncInterval();if(!a||!e&&this.lastSyncTime>o)return!1;if(this.supportsList){var l=this.data.length>0;l||a.setNoData("Loading "+s+"..."),this.lastSyncTime=Date.now();try{let e=await this.list();return 0==e.length&&a.setNoData("Add your first "+t+" here..."),!0}catch(n){l?i.log(n):(r.Z.exception(this,n),a.setNoData("Sorry, unable to load data from the server."))}}else a.setNoData("Sorry, listing stored "+s+" is not supported by the server.");return!1}}})},65040:(e,t,s)=>{s.d(t,{Z:()=>p});var a=s(58871),r=s(79879),i=s(30979),o=s(43334),l=s(62283),n=s(52590),c=s(66541);const p={name:"VisualEditor",mixins:[o.Z],components:{ModelBuilder:a["default"],DiscoveryToolbar:i.Z,FullscreenButton:l.Z},props:{id:String,editable:{type:Boolean,default:!0},value:{type:Object,default:()=>null},parent:{type:Object,default:null},parentSchema:{type:Object,default:null},showDiscoveryToolbar:{type:Boolean,default:!1},showIntro:{type:Boolean,default:!1},title:{type:String},defaultValue:{}},computed:{...r.Z.mapState(["connection","collections"]),...r.Z.mapGetters(["processes","supportsMath"]),...r.Z.mapState("editor",["initialNode"]),...r.Z.mapGetters("editor",["getModelNodeFromDnD"]),isMath(){return this.supportsMath&&this.processes.isMath(this.value)}},data(){return{showHelpOverlay:this.showIntro,canUndo:!1,canRedo:!1,canPaste:!1,compactMode:!1,hasSelection:!1,formula:null,isFullScreen:!1}},watch:{value:{immediate:!0,handler(e){if(e&&(this.showHelpOverlay=!1),this.initialNode&&r.Z.isObject(e)&&r.Z.isObject(e.process_graph))try{let t=this.initialNode;"1"==t&&r.Z.size(e.process_graph)&&(t=Object.keys(e.process_graph)[0]),this.openArgumentEditorForNode(t)}catch(t){r.Z.exception(this,t)}finally{this.setInitialNode(null)}}}},mounted(){this.canPaste=navigator&&navigator.clipboard&&"function"===typeof navigator.clipboard.readText},methods:{...r.Z.mapMutations("editor",["setInitialNode","setModelDnD"]),commit(e){"undefined"!==typeof this.defaultValue&&r.Z.isObject(e)&&0===r.Z.size(e.process_graph)&&(e=this.defaultValue),this.$emit("input",e)},async paste(){this.canPaste||r.Z.error(this,"error","Pasting is not supported by your browser.");try{const e=await navigator.clipboard.readText();let t=JSON.parse(e);await this.$refs.blocks.import(t)}catch(e){r.Z.exception(this,e,"Paste Error")}},importProcess(){this.broadcast("importProcess")},errorHandler(e,t=null){r.Z.exception(this,e,t)},selectionChanged(e,t){this.hasSelection=Boolean(e.filter((e=>e.$el.allowsDelete)).length||t.length)},historyChanged(e,t){this.canUndo=!!e[t-1],this.canRedo=!!e[t+1]},allowDrop(e){this.showHelpOverlay=!1,e.preventDefault()},async onDrop(e){const t=await this.getModelNodeFromDnD();if(t)return this.insertProcess(t,e.pageX,e.pageY),this.setModelDnD(),e.preventDefault();let s=e.dataTransfer.files;if(1===s.length){let t=e.dataTransfer.files[0];if("application/json"===t.type){var a=new FileReader;return a.onload=async e=>{try{let t=JSON.parse(e.target.result);await this.$refs.blocks.import(t)}catch(t){r.Z.exception(this,t,"Parsing JSON file failed")}},a.onerror=e=>r.Z.exception(this,e,"Reading JSON file failed"),a.readAsText(t,"UTF-8"),e.preventDefault()}}},getNameField(e=void 0,t="name"){return{value:e,name:t,description:"A unique identifier. Must contain only letters (`a`-`z`), digits (`0`-`9`) and underscores (`_`). `snake_case` is recommended.",label:"Name",schema:{type:"string",pattern:"^\\w+$"},default:null}},getDescriptionField(e=void 0,t=!1,s="description",a="Description"){return{value:e,name:s,description:"Provides a detailed description. CommonMark (Markdown) syntax can be used for rich text formatting.",label:a,optional:t,schema:{type:"string",subtype:"commonmark"}}},getOptionalField(e=void 0){return{value:e,name:"optional",label:"Optional",description:"Parameters by default are required. CHeck this option to make the parameter optional. For optional parameters a default value should be specified.",optional:!0,schema:{type:"boolean"},default:!1}},getDefaultField(e=void 0){return{value:e,name:"default",label:"Default Value",description:"This value is used whenever the user of this process did not specify a value for this parameter.",toggledBy:"optional",optional:!0,schema:{}}},getExperimentalField(e=void 0){return{value:e,name:"experimental",label:"Experimental",description:"Declares that this is experimental, which means that it is unstable and likely to change.",optional:!0,schema:{type:"boolean"},default:!1}},getDeprecatedField(e=void 0){return{value:e,name:"deprecated",label:"Deprecated",description:"Declares that this is deprecated with the potential to be removed in any of the next versions. It should be transitioned out of usage.",optional:!0,schema:{type:"boolean"},default:!1}},getSchemaField(e=void 0,t="schema",s="Data Types"){let a=e?"json-schema":"openeo-datatype";return{value:e,name:t,label:s,description:"Allowed data type(s) as JSON Schema.",schema:[{title:"Single data type",type:"object",subtype:a},{title:"Multiple data types",type:"array",minItems:2,items:{type:"object",subtype:a}}]}},editProcess(e){e=r.Z.isObject(e)?e:{};let t=r.Z.isObject(e.returns)?e.returns:{};var s=[this.getNameField(e.id,"id"),{value:e.summary,name:"summary",description:"A very short description of the process with usually less than 60 characters.",label:"Summary",optional:!0,schema:{type:"string"}},this.getDescriptionField(e.description,!0),{value:e.categories,name:"categories",label:"Categories",optional:!0,schema:{type:"array",items:{type:"string"}}},this.getExperimentalField(e.experimental),this.getDeprecatedField(e.deprecated),{label:"Parameters",description:'The parameters can be edited directly in the "Visual Model" interface.',info:!0},this.getDescriptionField(t.description,!0,"returns_description","Return Value > Description"),this.getSchemaField(t.schema,"returns_schema","Return Value > Data Type"),{value:e.exceptions,name:"exceptions",description:"Declares exceptions (errors) that might occur during execution of this process. This list is just for informative purposes.\n\nThe keys of the object are the error codes, which should only consist of alphanumerical characters. `PascalCase` is recommended.",label:"Errors",optional:!0,schema:{type:"object",additionalProperties:{type:"object",required:["message"],properties:{message:{title:"Error Message",type:"string"},description:{title:"Description",type:"string",subtype:"commonmark"},http:{title:"HTTP Status Code",type:"integer",enum:[400,500,501]}}}}},{value:e.examples,name:"examples",label:"Examples",description:"Example calls for this process with specific values for the parameters (arguments) and the result (return value).",optional:!0,schema:{type:"array",items:{type:"object",required:["arguments"],properties:{title:{title:"Title",type:"string"},title:{title:"Description",type:"string",subtype:"commonmark"},arguments:{title:"Arguments",type:"object",default:{}},returns:{title:"Return Value"}}}}},{value:e.links,name:"links",label:"Links",description:"Links related to this process, e.g. additional documentation.",optional:!0,schema:{type:"array",items:{type:"object",required:["href","rel"],properties:{href:{title:"URL",type:"string"},rel:{title:"Relation",description:"For examples see [IANA relation types](https://www.iana.org/assignments/link-relations/link-relations.xhtml)",type:"string",default:"about"},title:{title:"Title",type:"string"},type:{title:"Media Type",description:"For examples see [IANA media types](https://www.iana.org/assignments/media-types/media-types.xhtml)",type:"string"}}}}}];this.broadcast("showDataForm","Edit Process",s,(async e=>{let t=r.Z.pickFromObject(e,["id","summary","description","categories","experimental","deprecated","exception","examples","links"]);("string"===typeof t.description||r.Z.isObject(t.schema))&&(t.returns={description:e.returns_description,schema:e.returns_schema});let s=this.$refs.blocks.export(!0),a=Object.assign({},s,t);const i={id:"",summary:"",description:"",categories:[],experimental:!1,deprecated:!1,examples:[],links:[],process_graph:{}};for(let o in i)r.Z.equals(i[o],a[o])&&delete a[o];this.commit(a)}))},addParameter(){var e=[this.getNameField(),this.getDescriptionField(),this.getOptionalField(),this.getDefaultField(),this.getExperimentalField(),this.getDeprecatedField(),this.getSchemaField()];this.broadcast("showDataForm","Add Parameter",e,(async e=>{"string"===typeof e.name&&e.name.length>0&&await this.$refs.blocks.addPgParameter(e)}))},editParameter(e,t="Edit Parameter",s=null){var a=[this.getNameField(e.name),this.getDescriptionField(e.description),this.getOptionalField(e.optional),this.getDefaultField(e.default),this.getExperimentalField(e.experimental),this.getDeprecatedField(e.deprecated),this.getSchemaField(e.schema)];this.broadcast("showDataForm",t,a,s)},showExpressionModal(){let e=new c.Z(this.value,this.processes,this.connection,!0);e.setCallbackParameters(this.$refs.blocks.getPgParameters().map((e=>e.spec)));try{e.parse();let t={process:e},s={save:this.insertNodes};this.broadcast("showModal","ExpressionModal",t,s)}catch(t){r.Z.exception(this,t)}},openArgumentEditorForNode(e){let t=r.Z.deepClone(this.value),s=t.process_graph[e],a=this.processes.get(s.process_id,s.namespace);Array.isArray(a.parameters)&&a.parameters.length>0&&this.openArgumentEditor(a.parameters.map((e=>new n.ProcessParameter(e))).filter((e=>e.isEditable())),s.arguments,a.id,!0,null,(e=>{Object.assign(s,{arguments:e}),this.commit(t)}))},openArgumentEditor(e,t,s="Edit",a=!0,r=null,i=null,o=null){let l={title:s,parameters:e,data:t,editable:a,selectParameterName:r,parent:o},n={};"function"===typeof i&&(n.save=i),this.broadcast("showModal","ParameterModal",l,n)},confirmClear(){var e=confirm("Do you really want to clear the existing model?");e&&this.clear()},clear(){this.$refs.blocks&&this.$refs.blocks.clear(),this.commit(null)},insertProcess(e,t=null,s=null){try{var a=this.$refs.blocks.getPositionForPageXY(t,s);let r=e.namespace;"backend"!==r&&"user"!==r||(r=null),this.$refs.blocks.addProcess(e.process_id,e.arguments,a,r)}catch(i){r.Z.exception(this,i)}},async insertNodes(e,t=!1){return await this.$refs.blocks.import({process_graph:e},{clear:t})}}}}}]);
//# sourceMappingURL=4823.dba90a8b.js.map