(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56fad238"],{"0a2a":function(e,t,s){"use strict";s("c8ff")},"0f29":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"textEditor",class:e.languageString},[s("div",{staticClass:"sourceHeader"},[e.title?s("strong",[e._v(e._s(e.title))]):e._e(),s("div",{staticClass:"sourceToolbar"},[e.editable?s("span",{staticClass:"sepr"},[s("button",{attrs:{type:"button",title:"New script / Clear current script"},on:{click:e.confirmClear}},[s("i",{staticClass:"fas fa-file"})]),e._t("file-toolbar")],2):e._e(),e.editable?s("span",{staticClass:"sepr"},[s("button",{attrs:{type:"button",disabled:!e.canUndo,title:"Revert last change"},on:{click:function(t){return e.editor.undo()}}},[s("i",{staticClass:"fas fa-undo-alt"})]),s("button",{attrs:{type:"button",disabled:!e.canRedo,title:"Redo last reverted change"},on:{click:function(t){return e.editor.redo()}}},[s("i",{staticClass:"fas fa-redo-alt"})]),e._t("edit-toolbar")],2):e._e(),s("FullscreenButton",{attrs:{element:e.element}}),e._t("toolbar")],2)]),s("div",{staticClass:"sourceCodeEditor",attrs:{id:e.id}})])},a=[],o=s("025e"),r=s("5472"),n=s("a76e"),l=s("56b3"),c=s.n(l),u=(s("a7be"),s("f9d4"),s("959b"),s("ced6"),s("db91"),s("903e"),s("d7d5"),s("8c33"),s("10b2"),s("0dd0"),s("8822"),s("d2de"),s("4ebc")),d=s.n(u);window.jsonlint=d.a;var h={name:"TextEditor",components:{FullscreenButton:r["a"]},props:{id:String,editable:{type:Boolean,default:!0},value:{required:!0},language:{type:String,default:null},placeholder:{type:String,default:""},title:{type:String}},computed:{...o["a"].mapGetters(["processRegistry"]),languageString(){return"string"===typeof this.language?this.language.toLowerCase():""},editorOptions(){let e={indentUnit:2,lineNumbers:!0,indentWithTabs:!0,matchBrackets:!0,autoCloseBrackets:!0,readOnly:!this.editable,placeholder:this.placeholder};switch(this.languageString){case"r":e.mode="text/x-rsrc";break;case"python":e.mode="text/x-python";break;case"math":e.mode="text/x-mathematica";break;case"markdown":e.mode="text/x-markdown";break;case"json":case"processgraph":Object.assign(e,{mode:"application/json",gutters:["CodeMirror-lint-markers"],lint:!0});break}return e}},data(){return{canUndo:!1,canRedo:!1,editor:null,emitValue:this.value,element:null}},watch:{value(){this.emitValue!==this.value&&(this.updateContent(),this.editor.clearHistory())},editorOptions(){for(var e in this.editorOptions)this.editor.setOption(e,this.editorOptions[e])}},mounted(){this.editor=c()(document.getElementById(this.id),this.editorOptions),this.editor.setSize(null,"100%"),"processgraph"===this.languageString&&this.editor.on("change",()=>this.updateState()),this.updateContent(),this.editor.on("changes",(e,t)=>{try{0===Object.values(t).filter(e=>"setValue"===e.origin).length&&this.commit()}catch(s){this.$emit("error",s)}}),this.element=this.$el},methods:{confirmClear(){var e=confirm("Do you really want to clear the existing code?");e&&(this.insert(""),this.emit(null))},updateState(){this.editor.setOption("lint",!!this.editor.getValue().trim());let e=this.editor.getDoc().historySize();this.canUndo=e.undo>0,this.canRedo=e.redo>0,this.editor.refresh(),this.element=this.$el},commit(){var e=this.editor.getValue();switch(this.languageString){case"math":return this.emit(e.replace(/[\r\n\t]+/," "));case"processgraph":if(e){var t=JSON.parse(e);if(o["a"].size(t)>0){var s=new n["ProcessGraph"](t,this.processRegistry);return s.allowEmpty(),s.parse(),this.emit(t)}}return this.emit(null);case"json":return e?this.emit(JSON.parse(e)):this.emit(null);default:return this.emit(e)}},emit(e){this.emitValue=e,this.$emit("input",e)},insert(e,t=!0){if("string"!==typeof e&&(e=String(e)),t){const t=this.editor.getValue();if(e!==t){const t=this.editor.getScrollInfo();this.editor.setValue(e),this.editor.scrollTo(t.left,t.top)}}else this.editor.replaceSelection(e)},updateContent(){if(this.value)switch(this.languageString){case"processgraph":o["a"].isObject(this.value)?this.insert(JSON.stringify(this.value,null,this.editorOptions.indentUnit)):this.insert("");break;case"json":this.insert(JSON.stringify(this.value,null,this.editorOptions.indentUnit));break;default:this.insert(this.value)}else this.insert("");this.editor.getDoc().clearHistory(),this.updateState()},insertProcess(e){try{this.insert(JSON.stringify(e,null,2),!1)}catch(t){o["a"].exception(this,t)}}}},p=h,m=(s("0a2a"),s("ccbe"),s("2877")),f=Object(m["a"])(p,i,a,!1,null,"4834ed57",null);t["a"]=f.exports},"206d":function(e,t,s){},"22a2":function(e,t,s){},2930:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal",style:{"z-index":e.zIndex},on:{mousedown:e.backgroundClose}},[s("div",{ref:"container",staticClass:"modal-container",style:e.style},[s("header",{staticClass:"modal-header",on:{mousedown:function(t){return t.preventDefault(),t.stopPropagation(),e.startMove.apply(null,arguments)}}},[e._t("header",(function(){return[s("h2",[e._v(e._s(e.title))]),s("span",{staticClass:"close",on:{click:e.close}},[s("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),s("main",{staticClass:"modal-content"},[e._t("default")],2),s("footer",{staticClass:"modal-footer"},[e._t("footer")],2)])])},a=[],o=s("3115"),r=s("025e"),n={name:"Modal",mixins:[o["a"]],props:{title:{type:String,default:null},minWidth:{type:String,default:"30%"},maxWidth:{type:String,default:"85%"},minHeight:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...r["a"].mapState("editor",["hightestModalZIndex"]),style(){let e={"min-width":this.minWidth,"max-width":this.maxWidth,"min-height":this.minHeight};return Array.isArray(this.position)&&(e.position="absolute",e.left=this.position[0]+"px",e.top=this.position[1]+"px"),e}},watch:{show:{immediate:!0,handler(e){e?this.open():this.close()}}},methods:{...r["a"].mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(e){this.dragPosition=[e.clientX,e.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove)},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(e){e.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-e.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-e.clientY)],this.dragPosition=[e.clientX,e.clientY]},escCloseListener(e){if("Escape"==e.key)return this.close(),e.preventDefault(),e.stopPropagation(),!1},backgroundClose(e){e.target===this.$el&&this.close()}}},l=n,c=(s("8781"),s("2877")),u=Object(c["a"])(l,i,a,!1,null,null,null);t["a"]=u.exports},3150:function(e,t,s){"use strict";s("22a2")},3986:function(e,t,s){},4229:function(e,t,s){},4525:function(e,t,s){},"4d98":function(e,t,s){"use strict";s("c98e")},5472:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{directives:[{name:"show",rawName:"v-show",value:e.element,expression:"element"}],attrs:{type:"button",title:e.isFullscreen?"Close fullscreen":"Show fullscreen"},on:{click:e.toggleFullscreen}},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.isFullscreen,expression:"isFullscreen"}]},[s("i",{staticClass:"fas fa-compress"})]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.isFullscreen,expression:"!isFullscreen"}]},[s("i",{staticClass:"fas fa-expand"})])])},a=[],o=s("025e"),r={name:"FullscreenButton",props:{element:{required:!0}},data(){return{isFullscreen:!1,keyDownFn:null,oldZIndex:"auto"}},mounted(){this.keyDownFn=this.onkeyDown.bind(this);let e=this.getElement();e&&e.addEventListener("keydown",this.keyDownFn)},beforeDestroy(){let e=this.getElement();e&&e.removeEventListener("keydown",this.keyDownFn)},computed:{...o["a"].mapState("editor",["hightestModalZIndex"])},methods:{...o["a"].mapMutations("editor",["openModal","closeModal"]),onkeyDown(e){!this.isFullscreen||"F11"!==e.key&&"Escape"!==e.key||(this.toggleFullscreen(),e.preventDefault(),e.stopPropagation())},getElement(){return"string"===typeof this.element?document.querySelector(this.element):"function"===typeof this.element?this.element():this.element},toggleFullscreen(){let e=this.getElement();this.isFullscreen?(this.isFullscreen=!1,e.classList.remove("fullscreen"),e.style.zIndex=this.oldZIndex,this.closeModal()):(this.isFullscreen=!0,e.classList.add("fullscreen"),this.openModal(),this.oldZIndex=e.style.zIndex,e.style.zIndex=this.hightestModalZIndex),this.$emit("changed",this.isFullscreen)}}},n=r,l=(s("90f4"),s("2877")),c=Object(l["a"])(n,i,a,!1,null,null,null);t["a"]=c.exports},"58d3":function(e,t,s){"use strict";s("f08e")},"6b1e":function(e,t,s){},"7b86":function(e,t,s){"use strict";s("3986")},8781:function(e,t,s){"use strict";s("6b1e")},"8c66":function(e,t,s){"use strict";var i=function(){var e=this,t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"visualEditor",staticClass:"visualEditor"},[i("div",{staticClass:"sourceHeader"},[t.title?i("strong",[t._v(t._s(t.title))]):t._e(),i("div",{staticClass:"sourceToolbar"},[t.editable?i("span",{staticClass:"sepr"},[i("button",{attrs:{type:"button",title:"New script / Clear current script"},on:{click:t.confirmClear}},[i("i",{staticClass:"fas fa-file"})]),t._t("file-toolbar")],2):t._e(),t.editable?i("span",{staticClass:"sepr"},[i("button",{attrs:{type:"button",disabled:!t.canUndo,title:"Revert last change"},on:{click:function(e){return t.$refs.blocks.undo()}}},[i("i",{staticClass:"fas fa-undo-alt"})]),i("button",{attrs:{type:"button",disabled:!t.canRedo,title:"Redo last reverted change"},on:{click:function(e){return t.$refs.blocks.redo()}}},[i("i",{staticClass:"fas fa-redo-alt"})]),i("button",{attrs:{type:"button",disabled:!t.hasSelection,title:"Delete selected elements"},on:{click:function(e){return t.$refs.blocks.deleteSelected()}}},[i("i",{staticClass:"fas fa-trash"})])]):t._e(),t.editable?i("span",{staticClass:"sepr"},[i("button",{attrs:{type:"button",title:"Add Parameter"},on:{click:t.addParameter}},[i("i",{staticClass:"fas fa-parking"})]),t.supportsMath?i("button",{class:{highlightFormula:t.isMath},attrs:{type:"button",title:"Insert/Edit formula"},on:{click:t.showExpressionModal}},[i("i",{staticClass:"fas fa-square-root-alt"})]):t._e()]):t._e(),i("button",{class:{compactMode:t.compactMode},attrs:{type:"button",title:"Compact Mode"},on:{click:function(e){return t.$refs.blocks.toggleCompact()}}},[i("i",{staticClass:"fas fa-compress-arrows-alt"})]),i("button",{attrs:{type:"button",title:"Scale to perfect size"},on:{click:function(e){return t.$refs.blocks.perfectScale()}}},[i("i",{staticClass:"fas fa-arrows-alt"})]),i("FullscreenButton",{attrs:{element:function(){return e.$refs.visualEditor}},on:{changed:function(s){e.$refs.blocks.perfectScale(),t.isFullScreen=s}}}),t._t("toolbar")],2)]),i("div",{staticClass:"editorSplitter"},[(t.showDiscoveryToolbar||t.isFullScreen)&&t.editable?i("DiscoveryToolbar",{staticClass:"discoveryToolbar",attrs:{onAddProcess:t.insertProcess}}):t._e(),i("div",{staticClass:"graphBuilder",on:{drop:t.onDrop,dragover:t.allowDrop}},[i("ModelBuilder",{ref:"blocks",attrs:{editable:t.editable,id:t.id,processes:t.processRegistry,collections:t.collections,parent:t.parent,parentSchema:t.parentSchema,value:t.value},on:{input:t.commit,error:t.errorHandler,showProcess:function(e){return t.emit("showProcess",e)},showCollection:function(e){return t.emit("showCollection",e)},showParameter:function(e){return t.emit("showProcessParameter",e)},editParameter:t.editParameter,editArguments:t.openArgumentEditor,compactMode:function(t){return e.compactMode=t},selectionChanged:t.selectionChanged,historyChanged:t.historyChanged}})],1)],1)])},a=[],o=s("1d9a"),r=s("025e"),n=s("cbd9"),l=s("3115"),c=s("5472"),u={name:"VisualEditor",mixins:[l["a"]],components:{ModelBuilder:o["default"],DiscoveryToolbar:n["a"],FullscreenButton:c["a"]},props:{id:String,editable:{type:Boolean,default:!0},value:{type:Object,default:()=>null},parent:{type:Object,default:null},parentSchema:{type:Object,default:null},showDiscoveryToolbar:{type:Boolean,default:!1},title:{type:String},defaultValue:{}},computed:{...r["a"].mapState(["collections"]),...r["a"].mapGetters(["processRegistry"]),...r["a"].mapGetters("userProcesses",["supportsMath","isMathProcess"])},data(){return{canUndo:!1,canRedo:!1,compactMode:!1,hasSelection:!1,isMath:!1,isFullScreen:!1}},watch:{value(e){this.isMath=this.isMathProcess(e)}},methods:{commit(e){"undefined"!==typeof this.defaultValue&&r["a"].isObject(e)&&0===r["a"].size(e.process_graph)&&(e=this.defaultValue),this.$emit("input",e)},errorHandler(e,t=null){r["a"].exception(this,e,t)},selectionChanged(e,t){this.hasSelection=Boolean(e.filter(e=>e.$el.allowsDelete).length||t.length)},historyChanged(e,t){this.canUndo=!!e[t-1],this.canRedo=!!e[t+1]},allowDrop(e){e.preventDefault()},onDrop(e){var t=e.dataTransfer.getData("application/vnd.openeo-node");if(t){let s=JSON.parse(t);return this.insertProcess(s,e.pageX,e.pageY),e.preventDefault()}let s=e.dataTransfer.files;if(1===s.length){let t=e.dataTransfer.files[0];if("application/json"===t.type){var i=new FileReader;return i.onload=async e=>{try{let t=JSON.parse(e.target.result);await this.$refs.blocks.import(t)}catch(t){r["a"].exception(this,t,"Parsing JSON file failed")}},i.onerror=e=>{r["a"].exception(this,e,"Reading JSON file failed")},i.readAsText(t,"UTF-8"),e.preventDefault()}}},getNameField(e){return{value:e,name:"name",label:"Name",schema:{type:"string"},default:null}},getDescriptionField(e){return{value:e,name:"description",label:"Description",schema:{type:"string",subtype:"commonmark"}}},getOptionalField(e){return{value:e,name:"optional",label:"Optional",optional:!0,schema:{type:"boolean"},default:!1}},getExperimentalField(e){return{value:e,name:"experimental",label:"Experimental",optional:!0,schema:{type:"boolean"},default:!1}},getDeprecatedField(e){return{value:e,name:"deprecated",label:"Deprecated",optional:!0,schema:{type:"boolean"},default:!1}},getDefaultField(e){return{value:e,name:"default",label:"Default Value",optional:!0,schema:{}}},getSchemaField(e){let t=e?"json-schema":"openeo-datatype";return{value:e,name:"schema",label:"Data Types",description:"Allowed data type(s) for this parameter as JSON Schema.",schema:[{title:"Single data type",type:"object",subtype:t},{title:"Multiple data types",type:"array",minItems:1,items:{type:"object",subtype:t}}]}},addParameter(){var e=[this.getNameField(),this.getDescriptionField(),this.getOptionalField(),this.getExperimentalField(),this.getDeprecatedField(),this.getDefaultField(),this.getSchemaField()];this.emit("showDataForm","Add Parameter",e,async e=>{"string"===typeof e.name&&e.name.length>0&&await this.$refs.blocks.addPgParameter(e)})},editParameter(e,t="Edit Parameter",s=null){var i=[this.getNameField(e.name),this.getDescriptionField(e.description),this.getOptionalField(e.optional),this.getExperimentalField(e.experimental),this.getDeprecatedField(e.deprecated),this.getDefaultField(e.default),this.getSchemaField(e.schema)];this.emit("showDataForm",t,i,s)},showExpressionModal(){let e={process:this.value,pgParameters:this.$refs.blocks.getPgParameters()},t={save:this.insertNodes};this.emit("showModal","ExpressionModal",e,t)},openArgumentEditor(e,t,s="Edit",i=!0,a=null,o=null,r=null){let n={title:s,parameters:e,data:t,editable:i,selectParameterName:a,parent:r},l={};"function"===typeof o&&(l.save=o),this.emit("showModal","ParameterModal",n,l)},confirmClear(){var e=confirm("Do you really want to clear the existing model?");e&&this.clear()},clear(){this.$refs.blocks&&this.$refs.blocks.clear(),this.commit(null)},insertProcess(e,t=null,s=null){try{var i=this.$refs.blocks.getPositionForPageXY(t,s);this.$refs.blocks.addProcess(e.process_id,e.arguments,i)}catch(a){r["a"].exception(this,a)}},async insertNodes(e,t=!1){return await this.$refs.blocks.import({process_graph:e},{clear:t})}}},d=u,h=(s("4d98"),s("2877")),p=Object(h["a"])(d,i,a,!1,null,null,null);t["a"]=p.exports},"90f4":function(e,t,s){"use strict";s("206d")},c8ff:function(e,t,s){},c98e:function(e,t,s){},cbd9:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"discovery-toolbar"},[s("SearchBox",{model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}),s("div",{staticClass:"search-results"},[s("Collections",{staticClass:"category",attrs:{collections:e.collections,searchTerm:e.searchTerm,offerDetails:!1,collapsed:e.collapsed},scopedSlots:e._u([{key:"summary",fn:function(t){var i=t.item;return[s("div",{staticClass:"discovery-entity",attrs:{draggable:e.supportsLoadCollection},on:{dragstart:function(t){return e.onDrag(t,"collection",i)}}},[s("div",{staticClass:"discovery-info",on:{click:function(t){return e.showCollectionInfo(i.id)}}},[s("strong",{attrs:{title:i.id}},[e._v(e._s(i.id))]),i.title?s("small",{attrs:{title:i.title}},[e._v(e._s(i.title))]):e._e()]),e.hasCollectionPreview(i)?s("button",{staticClass:"discovery-button",attrs:{type:"button",title:"View on map"},on:{click:function(t){return e.showCollectionPreview(i)}}},[s("i",{staticClass:"fas fa-map"})]):e._e(),e.supportsLoadCollection?s("button",{staticClass:"discovery-button",attrs:{type:"button",title:"Insert"},on:{click:function(t){return e.insertCollection(i)}}},[s("i",{staticClass:"fas fa-plus"})]):e._e()])]}}])}),s("Processes",{staticClass:"category",attrs:{processes:e.processes,searchTerm:e.searchTerm,offerDetails:!1,collapsed:e.collapsed},scopedSlots:e._u([{key:"summary",fn:function(t){var i=t.item;return[s("div",{staticClass:"discovery-entity",attrs:{draggable:"true"},on:{dragstart:function(t){return e.onDrag(t,"process",i)}}},[s("div",{staticClass:"discovery-info",on:{click:function(t){return e.showProcess(i)}}},[i.native?e._e():s("i",{staticClass:"custom-process fas fa-xs fa-sitemap",attrs:{title:"Custom Process"}}),s("strong",{attrs:{title:i.id}},[e._v(e._s(i.id))]),i.summary?s("small",{attrs:{title:i.summary}},[e._v(e._s(i.summary))]):e._e()]),s("button",{staticClass:"discovery-button",attrs:{type:"button",title:"Insert"},on:{click:function(t){return e.insertProcess(i)}}},[s("i",{staticClass:"fas fa-plus"})])])]}}])}),e.hasUdfRuntimes?s("UdfRuntimes",{staticClass:"category",attrs:{runtimes:e.udfRuntimes,searchTerm:e.searchTerm,offerDetails:!1,collapsed:e.collapsed},scopedSlots:e._u([{key:"summary",fn:function(t){var i=t.summary,a=t.item;return[s("div",{staticClass:"discovery-entity",attrs:{draggable:e.supportsRunUdf},on:{dragstart:function(t){return e.onDrag(t,"udf",{runtime:i.identifier,version:a.default})}}},[s("div",{staticClass:"discovery-info",on:{click:function(t){return e.showUdfInfo(i.identifier,a)}}},[s("strong",{attrs:{title:i.identifier}},[e._v(e._s(i.identifier)+" ("+e._s(a.default)+")")]),i.summary?s("small",{attrs:{title:i.summary}},[e._v(e._s(i.summary))]):e._e()]),e.supportsRunUdf?s("button",{staticClass:"discovery-button",attrs:{type:"button",title:"Insert"},on:{click:function(t){return e.insertUdf(i.identifier,a.default)}}},[s("i",{staticClass:"fas fa-plus"})]):e._e()])]}}],null,!1,1122562181)}):e._e(),s("FileFormats",{staticClass:"category",attrs:{formats:e.fileFormats,showInput:!1,heading:"Export File Formats",searchTerm:e.searchTerm,offerDetails:!1,collapsed:e.collapsed},scopedSlots:e._u([{key:"summary",fn:function(t){var i=t.item;return[s("div",{staticClass:"discovery-entity",attrs:{draggable:e.supportsSaveResult},on:{dragstart:function(t){return e.onDrag(t,"fileformat",i)}}},[s("div",{staticClass:"discovery-info",on:{click:function(t){return e.showFileFormatInfo(i)}}},[s("strong",{attrs:{title:i.name}},[e._v(e._s(i.name))]),i.title?s("small",{attrs:{title:i.title}},[e._v(e._s(i.title))]):e._e()]),e.supportsSaveResult?s("button",{staticClass:"discovery-button",attrs:{type:"button",title:"Insert"},on:{click:function(t){return e.insertFileFormat(i)}}},[s("i",{staticClass:"fas fa-plus"})]):e._e()])]}}])})],1)],1)},a=[],o=s("3115"),r=s("025e"),n=s("69d2"),l=s("a0e2"),c=s("9b5d"),u=s("2979"),d=s("d235"),h={name:"DiscoveryToolbar",mixins:[o["a"]],components:{Collections:n["a"],FileFormats:l["a"],Processes:c["a"],SearchBox:u["default"],UdfRuntimes:d["a"]},props:{onAddProcess:{type:Function,required:!0},collectionPreview:{type:Boolean,default:!1}},data(){return{searchTerm:"",collapsed:!0}},computed:{...r["a"].mapState(["predefinedProcesses","collections","udfRuntimes"]),...r["a"].mapState("userProcesses",["userProcesses"]),...r["a"].mapGetters(["supports","collectionDefaults","fileFormats"]),...r["a"].mapGetters("userProcesses",{getProcessById:"getAllById"}),supportsLoadCollection(){return!!this.getProcessById("load_collection")},supportsRunUdf(){return!!this.getProcessById("run_udf")},supportsSaveResult(){return!!this.getProcessById("save_result")},hasUdfRuntimes(){return r["a"].size(this.udfRuntimes)},processes(){return this.predefinedProcesses.concat(this.userProcesses)}},watch:{searchTerm(e,t){!e&&t?this.collapsed=!0:e&&!t&&(this.collapsed=!1)}},methods:{onDrag(e,t,s){let i=this.getNode(t,s);e.dataTransfer.setData("application/vnd.openeo-node",JSON.stringify(i)),e.dataTransfer.setData("text/plain",JSON.stringify(i,null,2))},showCollectionInfo(e){this.emit("showCollection",e)},hasCollectionPreview(e){return Boolean(this.collectionPreview&&r["a"].getPreviewLinkFromSTAC(e))},showCollectionPreview(e){this.emit("showCollectionPreview",e)},showProcess(e){this.emit("showProcess",e)},showUdfInfo(e,t){this.emit("showModal","UdfRuntimeModal",{id:e,data:t,version:t.default})},showFileFormatInfo(e){let t={id:e.name,format:this.fileFormats.output[e.name],type:"output"};this.emit("showModal","FileFormatModal",t)},getNode(e,t){switch(e){case"collection":return{process_id:"load_collection",arguments:this.collectionDefaults(t.id)};case"process":return{process_id:t.id,arguments:{}};case"udf":return{process_id:"run_udf",arguments:t};case"fileformat":return{process_id:"save_result",arguments:{format:t.name,options:{}}}}},insertCollection(e){let t=this.getNode("collection",e);this.onAddProcess(t)},insertProcess(e){let t=this.getNode("process",e);this.onAddProcess(t)},insertUdf(e,t){let s=this.getNode("udf",{runtime:e,version:t});this.onAddProcess(s)},insertFileFormat(e){let t=this.getNode("fileformat",e);this.onAddProcess(t)}}},p=h,m=(s("7b86"),s("3150"),s("2877")),f=Object(m["a"])(p,i,a,!1,null,"7822e0f0",null);t["a"]=f.exports},ccbe:function(e,t,s){"use strict";s("4525")},ceb0:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Tabs",{ref:"tabs",staticClass:"editor",attrs:{id:"customProcessContent",position:"bottom"}},[s("Tab",{attrs:{id:"visual",name:"Visual Model",icon:"fa-project-diagram",selected:!0,allowShow:e.canSwitchView},on:{show:e.showModel}},[s("VisualEditor",{ref:"graphBuilder",staticClass:"visualEditorTab",attrs:{editable:e.editable,parent:e.parent,parentSchema:e.parentSchema,value:e.modelValue,title:e.title,id:e.id+"_visual",showDiscoveryToolbar:e.showDiscoveryToolbar,defaultValue:e.defaultValue},on:{input:e.commit,error:e.onError},scopedSlots:e._u([{key:"file-toolbar",fn:function(){return[e._t("file-toolbar")]},proxy:!0},{key:"toolbar",fn:function(){return[e._t("toolbar")]},proxy:!0}],null,!0)})],1),s("Tab",{attrs:{id:"source",name:"Code",icon:"fa-code",allowShow:e.canSwitchView},on:{show:e.showCode}},[s("TextEditor",{ref:"sourceEditor",staticClass:"textEditorTab",attrs:{editable:e.editable,value:e.codeValue,title:e.title,id:e.id+"_text",language:"processgraph"},on:{input:e.commit,error:e.onError},scopedSlots:e._u([{key:"file-toolbar",fn:function(){return[e._t("file-toolbar")]},proxy:!0},{key:"toolbar",fn:function(){return[e._t("toolbar")]},proxy:!0}],null,!0)})],1)],1)},a=[],o=s("025e"),r=s("e7ea"),n=s("bdb2"),l=s("8c66"),c=s("0f29"),u={name:"Editor",components:{VisualEditor:l["a"],TextEditor:c["a"],Tabs:r["default"],Tab:n["default"]},props:{id:String,editable:{type:Boolean,default:!0},value:{type:Object,default:()=>null},title:{type:String},parent:{type:Object,default:null},parentSchema:{type:Object,default:null},showDiscoveryToolbar:{type:Boolean,default:!1},defaultValue:{}},watch:{value(){this.updateTab()}},data(){return{modelValue:null,codeValue:null,error:null}},mounted(){this.updateTab()},computed:{...o["a"].mapGetters("userProcesses",{getProcessById:"getAllById"})},methods:{...o["a"].mapActions("userProcesses",{readUserProcess:"read"}),showModel(){this.error=null,this.modelValue=this.value},showCode(){this.error=null,this.codeValue=this.value,this.$refs.sourceEditor.updateState()},updateTab(){"source"===this.$refs.tabs.getActiveTabId()?this.showCode():this.showModel()},commit(e){this.error=null,this.$emit("input",e)},onError(e){this.error=e},activeEditor(){return"source"===this.$refs.tabs.getActiveTabId()?this.$refs.sourceEditor:this.$refs.graphBuilder},async insertProcess(e){try{let t=this.getProcessById(e.process_id);null==t||t.native||await this.readUserProcess({data:t}),this.activeEditor().insertProcess(e)}catch(t){o["a"].exception(this,t)}},canSwitchView(){return!this.editable||null===this.error||(o["a"].exception(this,this.error,"Process Invalid Error"),!1)}}},d=u,h=(s("58d3"),s("2877")),p=Object(h["a"])(d,i,a,!1,null,null,null);t["default"]=p.exports},e8d7:function(e,t,s){"use strict";s("4229")},f08e:function(e,t,s){},fd61:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Modal",{attrs:{minWidth:"85%",title:e.title},on:{closed:function(t){return e.$emit("closed")}}},[s("Job",{attrs:{job:e.job,currency:e.currency},scopedSlots:e._u([{key:"process-graph",fn:function(){return[s("Editor",{staticClass:"infoViewer",attrs:{value:e.job.process,editable:!1,id:"jobPgViewer"}})]},proxy:!0}])}),e.resultType?s("section",{staticClass:"vue-component result"},[s("h3",[e._v("Results")]),s("p",[s("em",[e._v("Below the metadata for the results of the batch job are shown.")])]),"Collection"===e.resultType?s("Collection",{attrs:{data:e.result},scopedSlots:e._u([{key:"title",fn:function(){return[s("span",{staticClass:"hidden"})]},proxy:!0},{key:"spatial-extents",fn:function(t){return[s("MapViewer",{attrs:{id:"collectionMap",show:e.showMap,extents:t.extents}})]}}],null,!1,1959136896)}):s("Item",{attrs:{data:e.result},scopedSlots:e._u([{key:"title",fn:function(){return[s("span",{staticClass:"hidden"})]},proxy:!0},{key:"location",fn:function(t){return[s("MapViewer",{attrs:{id:"itemMap",show:e.showMap,geoJson:t.geometry,extents:t.bbox}})]}}],null,!1,1029189681)})],1):e._e()],1)},a=[],o=s("025e"),r=s("2930"),n=s("7e7a"),l=s("ceb0"),c={name:"JobInfoModal",components:{Collection:()=>s.e("chunk-78794146").then(s.bind(null,"47ed")),Editor:l["default"],Item:()=>s.e("chunk-07b0a294").then(s.bind(null,"2263")),Job:n["a"],Modal:r["a"]},computed:{...o["a"].mapGetters(["currency"]),resultType(){return o["a"].isObject(this.result)?"Feature"===this.result.type?"Item":"Collection":null},title(){return"Batch Job: "+(this.job.title||"#"+this.job.id)}},props:{job:{type:Object},result:{type:Object,default:null}},data(){return{showMap:!1}},mounted(){this.$nextTick(()=>{this.showMap=!0})}},u=c,d=(s("e8d7"),s("2877")),h=Object(d["a"])(u,i,a,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-56fad238.5da1dbac.js.map