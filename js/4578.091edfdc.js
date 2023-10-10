"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[4578],{53092:(e,t,a)=>{a.r(t),a.d(t,{default:()=>we});var s=function(){var e=this,t=e._self._c;return e.selectedSchema?t("div",{staticClass:"fieldContainer"},[e.showDataTypeChooser?t("div",{staticClass:"dataTypeChooser"},[t("select",{attrs:{name:"dataType",disabled:!e.editable},domProps:{value:e.selectedType},on:{input:e.onSelectType}},[e.selectableTypes.length>1?e._l(e.selectableTypes,(function(a){return t("optgroup",{key:a.name,attrs:{label:a.name}},e._l(a.types,(function(a){return t("option",{key:a.dataType(),domProps:{value:a.dataType()}},[e._v(e._s(e._f("dataTypeTitle")(a)))])})),0)})):e._l(e.selectableTypes[0].types,(function(a){return t("option",{key:a.dataType(),domProps:{value:a.dataType()}},[e._v(e._s(e._f("dataTypeTitle")(a)))])}))],2)]):e._e(),!e.isItem&&e.selectedSchema.description()?t("div",{staticClass:"description"},[t("i",{staticClass:"fas fa-info-circle"}),t("Description",{attrs:{description:e.selectedSchema.description(),compact:!0}})],1):e._e(),t("ParameterDataType",{attrs:{editable:e.editable,parameter:e.parameter,schema:e.selectedSchema,context:e.context,parent:e.parent},on:{changeType:e.setSelected,reset:e.resetValue},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}})],1):e._e()},i=[],r=(a(57658),a(79879)),n=a(28954),o=a(65096),l=a.n(o),d=a(52590),u=null;class c extends n.JsonSchemaValidator{static create(e){return null===u&&(u=new c(e)),u}constructor(e){super(),this.store=e,this.setFileFormats(this.store.getters.fileFormats)}async validateBandName(e){return e.length>0}async validateEpsgCode(e){if(await this.store.dispatch("editor/loadEpsgCodes"),this.store.state.editor.epsgCodes[e])return!0;throw new(l().ValidationError)([{message:"Invalid EPSG code '"+e+"' specified."}])}async validateCollectionId(e){if(this.store.state.collections.filter((t=>t.id===e)).length>0)return!0;throw new(l().ValidationError)([{message:"Collection with id '"+e+"' doesn't exist."}])}async validateFilePath(e){if(this.store.getters["files/getById"](e))return!0;throw new(l().ValidationError)([{message:"File at '"+e+"' doesn't exist."}])}async validateInputFormatOptions(e){throw"Not supported"}async validateOutputFormatOptions(e){throw"Not supported"}async validateJobId(e){if(this.store.getters["jobs/getById"](e))return!0;throw new(l().ValidationError)([{message:"Job with id '"+e+"' doesn't exist."}])}async validateUri(e){if(e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/))return!0;throw new(l().ValidationError)([{message:"URI is invalid"}])}async validateUdfCode(e){if(e.match(/(\r|\n)/))return!0;throw new(l().ValidationError)([{message:"UDF Code is invalid"}])}async validateUdfRuntime(e){if(e in this.store.state.udfRuntimes)return!0;throw new(l().ValidationError)([{message:"UDF runtime '"+e+"' is not supported."}])}async validateUdfRuntimeVersion(e){if(d.Versions.validate(e))return!0;throw new(l().ValidationError)([{message:"UDF runtime version '"+e+"' is not a valid version number."}])}}var p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"fieldEditorContainer"},[e.isResult?[t("div",{staticClass:"fieldValue externalData fromNode"},[t("span",[e._v("Output of "),t("tt",[e._v("#"+e._s(e.state.from_node))])],1)]),"array"===e.nativeParameterType?t("button",{attrs:{type:"button"},on:{click:function(t){return e.convertToArray()}}},[t("i",{staticClass:"fas fa-list"}),e._v(" Convert to array")]):e._e()]:"raster-cube"===e.type||"vector-cube"===e.type||"datacube"===e.type?t("div",{staticClass:"fieldValue description"},[t("i",{staticClass:"fas fa-exclamation-circle"}),t("p",[e._v('This parameter can only be set by creating a connection between an "Output" / "Result" and this parameter in the Visual Model.')])]):e.isPgParameter?[t("div",{staticClass:"fieldValue externalData fromArgument"},[t("span",[e._v("Value of process parameter "),t("tt",[e._v(e._s(e.state.from_parameter))])],1)]),"array"===e.nativeParameterType?t("button",{attrs:{type:"button"},on:{click:function(t){return e.convertToArray()}}},[t("i",{staticClass:"fas fa-list"}),e._v(" Convert to array")]):e._e()]:"undefined"===e.type?t("div",{staticClass:"description"},[t("i",{staticClass:"fas fa-info-circle"}),t("p",[e._v("No value is set.")])]):"null"===e.type?t("div",{staticClass:"description"},[t("i",{staticClass:"fas fa-info-circle"}),t("p",[e._v("This is set to "),t("strong",[t("tt",[e._v("null")])],1),e._v(", which is usually used as placeholder for no-data values or a default value.")])]):e.isSelection?t("SelectBox",{key:e.type,attrs:{type:e.type,editable:e.editable,schema:e.schema,context:e.dependency},on:{onDetails:e.onSelectDetails},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):e.isTemporal?t("TemporalPicker",{key:e.type,attrs:{type:e.type,editable:e.editable},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"bounding-box"===e.type?t("MapAreaSelect",{key:e.type,staticClass:"areaSelector",attrs:{editable:e.editable},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"geojson"===e.type?t("GeoJsonEditor",{key:e.type,staticClass:"geoJsonEditor",attrs:{editable:e.editable},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"process-graph"===e.type?t("Editor",{staticClass:"callbackEditor",attrs:{editable:e.editable,parent:e.parent,parentSchema:e.schema,showDiscoveryToolbar:!0,defaultValue:e.editorDefaultValue},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"output-format-options"===e.type||"input-format-options"===e.type?t("FileFormatOptionsEditor",{ref:"fileFormatOptionsEditor",attrs:{type:e.type,format:e.dependency},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"budget"===e.type?t("Budget",{attrs:{editable:e.editable},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"duration"===e.type?t("Duration",{attrs:{editable:e.editable},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"kernel"===e.type?t("Kernel",{attrs:{editable:e.editable},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"udf-code"===e.type?t("TextEditor",{staticClass:"fieldValue textarea",attrs:{id:e.name,editable:e.editable,language:e.dependency},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"commonmark"===e.type?t("TextEditor",{staticClass:"fieldValue textarea",attrs:{id:e.name,editable:e.editable,language:"markdown"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"wkt2-definition"===e.type||"proj-definition"===e.type?t("TextEditor",{staticClass:"fieldValue textarea",attrs:{id:e.name,editable:e.editable},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"json"==e.type?t("TextEditor",{staticClass:"fieldValue textarea",attrs:{id:e.name,editable:e.editable,language:"json"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"boolean"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],staticClass:"fieldValue",attrs:{type:"checkbox",name:e.name,disabled:!e.editable},domProps:{checked:Array.isArray(e.state)?e._i(e.state,null)>-1:e.state},on:{change:function(t){var a=e.state,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&(e.state=a.concat([r])):n>-1&&(e.state=a.slice(0,n).concat(a.slice(n+1)))}else e.state=i}}}):"integer"===e.type||"number"===e.type?t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.state,expression:"state",modifiers:{number:!0}}],staticClass:"fieldValue",attrs:{type:"number",min:e.numericMin,max:e.numericMax,step:e.numericStep,name:e.name,disabled:!e.editable},domProps:{value:e.state},on:{input:function(t){t.target.composing||(e.state=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}):"url"===e.type||"uri"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],staticClass:"fieldValue",attrs:{type:"url",name:e.name,disabled:!e.editable},domProps:{value:e.state},on:{input:function(t){t.target.composing||(e.state=t.target.value)}}}):"object"===e.nativeType||"array"===e.nativeType?t("ObjectEditor",{attrs:{editable:e.editable,parameter:e.parameter,schema:e.schema,isObject:"object"===e.nativeType,parent:e.parent,context:e.context},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],staticClass:"fieldValue",attrs:{type:"text",name:e.name,disabled:!e.editable},domProps:{value:e.state},on:{input:function(t){t.target.composing||(e.state=t.target.value)}}})],2)},m=[],h=a(43334),f=function(){var e=this,t=e._self._c;return t("div",{class:{editor:!0,array:!e.isObject,object:e.isObject}},[t("div",{staticClass:"buttons"},[e.editable?t("button",{staticClass:"addBtn",attrs:{type:"button",disabled:e.count>=e.maxCount},on:{click:function(t){return e.add()}}},[t("i",{staticClass:"fas fa-plus"}),e._v(" Add")]):e._e(),t("FullscreenButton",{attrs:{element:()=>this.$el}})],1),e.elements.length?t("draggable",{attrs:{handle:".mover"},model:{value:e.elements,callback:function(t){e.elements=t},expression:"elements"}},e._l(e.elements,(function(a,s){return t("div",{key:a.id,staticClass:"fieldValue element"},[t("div",{staticClass:"row"},[t("label",{staticClass:"fieldLabel"},[e.isObject&&(a.prop.title||a.prop.required)?[e._v(e._s(a.prop.title||a.key))]:e.isObject?t("input",{directives:[{name:"model",rawName:"v-model",value:a.key,expression:"e.key"}],attrs:{type:"text",disabled:!e.editable},domProps:{value:a.key},on:{input:function(t){t.target.composing||e.$set(a,"key",t.target.value)}}}):[e._v(e._s(s+1))]],2),t("ParameterDataTypes",{attrs:{editable:e.editable,parameter:e.elementSchema(s,a.key),isItem:!0,parent:e.parent,context:e.context},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"e.value"}}),e.editable&&!a.prop.required?t("button",{staticClass:"deleteBtn",attrs:{disabled:e.count<=e.minCount,type:"button"},on:{click:function(t){return e.remove(s)}}},[t("i",{staticClass:"fas fa-trash"})]):e._e(),t("button",{directives:[{name:"show",rawName:"v-show",value:e.editable&&!e.isObject,expression:"editable && !isObject"}],staticClass:"mover",attrs:{type:"button"}},[t("i",{staticClass:"fas fa-arrows-alt"})])],1),a.prop.description?t("div",{staticClass:"row"},[t("div",{staticClass:"description"},[t("i",{staticClass:"fas fa-info-circle"}),t("Description",{attrs:{description:a.prop.description,compact:!0}})],1)]):e._e()])})),0):t("div",{staticClass:"empty description"},[t("i",{staticClass:"fas fa-info-circle"}),e.isObject?[e._v(" Object is empty")]:[e._v(" Array is empty")]],2)],1)},y=[],b=a(9980),g=a.n(b),v=a(79856),x=a(62283);const w={name:"ObjectEditor",components:{draggable:g(),Description:v["default"],FullscreenButton:x.Z,ParameterDataTypes:()=>Promise.resolve().then(a.bind(a,53092))},props:{parameter:Object,editable:{type:Boolean,default:!0},schema:Object,value:{},isObject:{type:Boolean,default:!1},parent:Object,context:{}},data(){return{elements:[]}},computed:{count(){return r.Z.size(this.elements)},maxCount(){return(this.isObject?this.schema.schema.maxProperties:this.schema.schema.maxItems)||Number.MAX_VALUE},minCount(){return(this.isObject?this.schema.schema.minProperties:this.schema.schema.minItems)||0},prefill(){let e=this.schema.schema;if(this.isObject&&r.Z.isObject(e.properties)){let t=[];for(let a in e.properties){let s=!1;Array.isArray(e.required)&&e.required.includes(a)&&(s=!0),t.push(Object.assign({name:a,required:s},e.properties[a]))}return t}return!this.isObject&&this.minCount>0?[...Array(this.minCount).keys()].map((e=>({name:e}))):[]},newValue(){if(this.isObject){let e={};for(let t of this.elements)e[t.key]=t.value;return e}return this.elements.map((e=>e.value))}},watch:{newValue:{deep:!0,handler(e){this.$emit("input",e)}},value:{immediate:!0,handler(e){if(this.newValue!==e)if(this.elements=[],0===r.Z.size(e)&&this.prefill.length>0)for(let t of this.prefill)this.add(t.name,void 0,t);else if(e&&"object"===typeof e)for(let t in e)this.add(t,e[t])}}},methods:{elementSchema(e,t=null){let a=d.ProcessUtils.getElementJsonSchema(this.schema.schema,t||e),s=new d.ProcessSchema(a);return this.schema.parent instanceof d.ProcessSchema&&(s.refs=this.schema.parent.refs||[]),s},add(e=null,t=void 0,a={}){let s={id:String(this.elements.length),value:t};this.isObject&&(s.key=e||"unnamed"+this.elements.length),s.prop=a,"undefined"===typeof s.value&&("undefined"!==typeof a.default?s.value=a.default:s.value=this.elementSchema(this.elements.length,s.key).default),this.elements.push(s)},remove(e){this.elements.splice(e,1)}}},T=w;var _=a(1001),S=(0,_.Z)(T,f,y,!1,null,"59cea796",null);const j=S.exports;var C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"datatypeEditor budget"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.hasBudget,expression:"hasBudget"}],attrs:{type:"checkbox",disabled:!e.editable},domProps:{checked:Array.isArray(e.hasBudget)?e._i(e.hasBudget,null)>-1:e.hasBudget},on:{change:function(t){var a=e.hasBudget,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&(e.hasBudget=a.concat([r])):n>-1&&(e.hasBudget=a.slice(0,n).concat(a.slice(n+1)))}else e.hasBudget=i}}}),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.amount,expression:"amount",modifiers:{number:!0}}],attrs:{type:"number",min:"0.00",max:e.max,step:"0.01",disabled:!e.hasBudget||!e.editable},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v(" "+e._s(e.capabilities.currency())+" ")])},P=[];const E={name:"Budget",computed:{...r.Z.mapState(["userInfo"]),...r.Z.mapGetters(["capabilities"]),max(){return this.userInfo.budget>0?this.userInfo.budget:Number.MAX_VALUE}},props:{value:{type:Number,default:null},editable:{type:Boolean,default:!0}},data(){return{hasBudget:"number"===typeof this.value,amount:this.value}},watch:{hasBudget(){this.updateData()},amount(){this.updateData()}},methods:{updateData(){this.$emit("input",this.hasBudget&&!Number.isNaN(this.amount)?this.amount:null)}}},O=E;var k=(0,_.Z)(O,C,P,!1,null,null,null);const V=k.exports;var D=a(81523),Z=function(){var e=this,t=e._self._c;return t("div",{staticClass:"geojson-editor",on:{drop:e.onDrop,dragover:e.allowDrop}},[t("Tabs",{ref:"tabs",attrs:{id:"geojson-tabs",position:"bottom"}},[t("Tab",{attrs:{id:"map",name:"Map",icon:"fa-map",selected:!0},on:{show:e.showMap}},[t("GeoJsonMapEditor",{ref:"map",attrs:{editable:e.editable},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}})],1),t("Tab",{attrs:{id:"source",name:"Code",icon:"fa-code"},on:{show:e.showCode}},[t("TextEditor",{ref:"sourceEditor",attrs:{editable:e.editable,id:"geojson-texteditor",language:"json"},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}})],1)],1),e.editable?t("small",{staticClass:"info"},[e._v(" To easily import your area of interest, you can drag & drop GeoJSON and KML files into this area. ")]):e._e()],1)},F=[],B=a(49495),N=a(45518),A=function(){var e=this,t=e._self._c;return t("div",{staticClass:"geojson-map-editor",attrs:{id:e.id}},[t("ProgressControl",{ref:"progress",attrs:{map:e.map}}),t("UserLocationControl",{attrs:{map:e.map}})],1)},I=[],J=a(18840),$=a(44717),R=a(38451),M=a(43086),G=a(10146),U=a(28641),L=a(93379),q=a(11887),W=a(50303),z=a(39606);const K={name:"GeoJsonMapEditor",mixins:[R.Z,J.Z,$.Z],props:{value:{type:Object,default:null}},data(){return{geoJsonLayer:null}},methods:{async renderMap(){let e=!0;if(this.value){let t=this.createGeoJsonSource(this.value),a=t.getExtent();(0,U.xb)(a)||(e=!1!==r.Z.isBboxInWebMercator(r.Z.extentToBBox(a)))}if(await this.createMap(e?"EPSG:3857":"EPSG:4326"),this.addBasemaps(),this.editable?this.geoJsonLayer=this.geoJsonEditor(e?this.value:source):this.geoJsonLayer=this.addGeoJson(e?this.value:source),this.editable){var t=()=>this.$emit("input",this.getGeoJson());this.geoJsonLayer.getSource().on("change",t),this.addGeocoder((e=>{if(!e)return;let t=(new M.Z).readFeature(e,{featureProjection:this.map.getView().getProjection()});this.geoJsonLayer.getSource().addFeature(t),this.map.getView().fit(this.geoJsonLayer.getSource().getExtent(),this.getFitOptions())}),!0)}},geoJsonEditor(e){var t=this.addGeoJson(e),a=new L.Z;this.map.addControl(a);var s=new W.Z({source:t.getSource(),interactions:{Info:!1,DrawHole:!1,Offset:!1,Split:!1}});a.addControl(s);var i=new z.Z;this.map.addInteraction(i),i.on("undo",(e=>{"addfeature"===e.action.type&&(s.getInteraction("Select").getFeatures().clear(),s.getInteraction("Transform").select())}));var r=new L.Z({group:!0,controls:[new q.Z({html:'<i class="fas fa-undo-alt"></i>',title:"Undo",handleClick:()=>i.undo()}),new q.Z({html:'<i class="fas fa-redo-alt"></i>',title:"Redo",handleClick:()=>i.redo()})]});return a.addControl(r),this.map.addInteraction(new G.Z({source:t.getSource()})),t},getGeoJson(){var e=new M.Z,t=this.geoJsonLayer.getSource().getFeatures(),a=[];for(var s in t)a.push(e.writeFeatureObject(t[s],{dataProjection:"EPSG:4326",featureProjection:this.map.getView().getProjection()}));return 0===a.length?null:1===a.length?!a[0].properties&&a[0].geometry?a[0].geometry:a[0]:{type:"FeatureCollection",features:a}}}},Y=K;var X=(0,_.Z)(Y,A,I,!1,null,null,null);const H=X.exports;var Q=a(52370),ee=a(75153),te=a(25108);const ae={name:"GeoJsonEditor",components:{GeoJsonMapEditor:H,Tab:N["default"],Tabs:B["default"],TextEditor:Q.Z},data(){return{data:this.value}},props:{editable:{type:Boolean,default:!0},value:{type:Object,default:null}},watch:{value(e){this.data=e},data(e){this.$emit("input",e)}},methods:{showMap(){this.$refs.map.renderMap()},showCode(){this.$refs.sourceEditor.updateState()},allowDrop(e){this.editable&&e.preventDefault()},onDrop(e){let t=e.dataTransfer.files;if(1===t.length){let t=e.dataTransfer.files[0],s=["text/json","application/json","application/geo+json","text/plain"],i=["text/xml","application/xml","application/vnd.google-earth.kml+xml"],n=t.name.toLowerCase(),o=s.includes(t.type)||n.endsWith(".geojson")||n.endsWith(".json"),l=i.includes(t.type)||n.endsWith(".kml")||n.endsWith(".xml");if(o||l){var a=new FileReader;a.onload=async e=>{let t;if(l)try{t=(0,ee.DS)((new DOMParser).parseFromString(e.target.result,"text/xml"))}catch(a){return te.error(a),r.Z.error(this,"The provided file is not a valid KML file")}else try{t=JSON.parse(e.target.result)}catch(a){return te.error(a),r.Z.error(this,"The provided file is not a valid JSON file")}r.Z.detectGeoJson(t)?(this.data=t,this.$refs.map&&this.$refs.map.renderMap()):r.Z.error(this,"The provided file doesn't seem to be a GeoJSON file")},a.onerror=e=>r.Z.exception(this,e,"Reading the file failed"),a.readAsText(t,"UTF-8")}}else r.Z.error(this,"Please provide a single JSON or GeoJSON file");return e.preventDefault()}}},se=ae;var ie=(0,_.Z)(se,Z,F,!1,null,"6d150dd6",null);const re=ie.exports;var ne=a(48664);const oe={name:"ParameterDataType",mixins:[h.Z],components:{ObjectEditor:j,Budget:V,MapAreaSelect:D.Z,GeoJsonEditor:re,TextEditor:Q.Z,Editor:()=>Promise.all([a.e(8871),a.e(4953)]).then(a.bind(a,3752)),FileFormatOptionsEditor:()=>a.e(9187).then(a.bind(a,99187)),ParameterDataTypes:()=>Promise.resolve().then(a.bind(a,53092)),Duration:()=>a.e(6974).then(a.bind(a,6974)),Kernel:()=>a.e(6669).then(a.bind(a,16669)),SelectBox:()=>Promise.all([a.e(7907),a.e(7133)]).then(a.bind(a,27133)),TemporalPicker:()=>Promise.all([a.e(2325),a.e(1476)]).then(a.bind(a,42325))},props:{parameter:Object,editable:{type:Boolean,default:!0},schema:Object,value:{},context:{},parent:{}},data(){return{state:this.value}},computed:{type(){return this.schema.dataType()},nativeType(){return this.schema.nativeDataType()},nativeParameterType(){return this.parameter.nativeDataType()},editorDefaultValue(){if("process-graph"===this.type){if("undefined"!==typeof this.parameter.default)return this.parameter.default;if(this.parameter.nullable())return null}},isTemporal(){return"date"===this.type||"time"===this.type||"date-time"===this.type||"temporal-interval"===this.type||"year"===this.type},isSelection(){switch(this.type){case"collection-id":case"job-id":case"file-path":case"file-paths":case"epsg-code":case"input-format":case"openeo-datatype":case"output-format":case"service-type":case"billing-plan":case"udf-runtime":case"udf-runtime-version":return!0;case"band-name":return!!this.dependency;default:return this.schema.isEnum()}},name(){return this.parameter.name+(Array.isArray(this.parameter.value)?"[]":"")},isResult(){return Boolean(r.Z.isObject(this.state)&&this.state.from_node&&1===r.Z.size(this.state)&&this.schema.schema.isRef)},isPgParameter(){return Boolean(r.Z.isObject(this.state)&&this.state.from_parameter&&1===r.Z.size(this.state)&&this.schema.schema.isRef)},numericMin(){return"number"===typeof this.schema.minimum?this.schema.minimum:""},numericMax(){return"number"===typeof this.schema.maximum?this.schema.maximum:""},numericStep(){return"number"===typeof this.schema.multipleOf?this.schema.multipleOf:"integer"===this.type?1:"any"},newValue(){if("number"===this.type){var e=Number.parseFloat(this.state);return Number.isNaN(e)?null:e}if("integer"===this.type){e=Number.parseInt(this.state);return Number.isNaN(e)?null:e}if("null"===this.type)return null;if("string"===typeof this.state&&this.state.length>0&&("any"===this.type||"mixed"===this.type)){e=Number(this.state);return Number.isNaN(e)?this.state:e}return this.state},dependency(){switch(this.type){case"output-format-options":case"input-format-options":return this.getValueFromOtherParameterByDataType(this.type.replace("-options",""));case"udf-runtime-version":case"udf-code":return this.getValueFromOtherParameterByDataType("udf-runtime");case"band-name":return this.getValueFromOtherParameterByDataType("collection-id");case"array":if("band-name"===ne.Z.arrayOf(this.schema))return this.getValueFromOtherParameterByDataType("collection-id");default:return}}},watch:{value(e){e!==this.newValue&&(this.state=this.value)},newValue(e){this.$emit("input",e)},dependency(e,t){"undefined"!==typeof t&&e!==t&&this.$emit("reset")}},methods:{getValueFromOtherParameterByDataType(e){if(r.Z.isObject(this.context)&&r.Z.isObject(this.context.schemas)&&r.Z.isObject(this.context.values))for(let t in this.context.schemas){let a=this.context.schemas[t];if(r.Z.isObject(a)&&a.dataType()===e)return this.context.values[t]}},convertToArray(){this.state=[this.state],this.$emit("input",this.state),this.$emit("changeType","array")},onSelectDetails(){"collection-id"===this.type&&this.broadcast("showCollection",this.state)}}},le=oe;var de=(0,_.Z)(le,p,m,!1,null,"d18c5a68",null);const ue=de.exports;var ce=a(9510),pe=a(25108);const me=["Basics","References","Spatial","Temporal","File and Folders","Resources","CRS","UDF","Other"],he=e=>e&&"object"===typeof e?r.Z.deepClone(e):e,fe=()=>(new Date).toISOString().replace(/\.\d+/,""),ye=[{subtype:"undefined",title:"No Value",const:void 0,not:{},group:"Basics"},{type:"null",const:null,group:"Basics"},{type:"string",default:"",group:"Basics"},{type:"integer",default:0,group:"Basics"},{type:"number",default:0,group:"Basics"},{type:"boolean",default:!1,group:"Basics"},{type:"array",default:[],group:"Basics"},{type:"object",default:{},group:"Basics",properties:{from_node:{not:{}},from_parameter:{not:{}}}},{type:"string",subtype:"date-time",format:"date-time",title:"Date and Time",group:"Temporal",default:()=>fe()},{type:"string",subtype:"date",format:"date",title:"Date only",group:"Temporal",default:()=>fe().substring(0,10)},{type:"string",subtype:"time",format:"time",title:"Time only",group:"Temporal",default:()=>fe().substring(11)},{type:"string",subtype:"year",title:"Year only",group:"Temporal"},{type:"array",subtype:"temporal-interval",title:"Temporal interval",group:"Temporal"},{type:"array",subtype:"temporal-intervals",title:"Temporal intervals (multiple)",group:"Temporal",default:[]},{type:"object",subtype:"geojson",title:"GeoJSON",group:"Spatial"},{type:"object",subtype:"bounding-box",title:"Bounding Box",group:"Spatial"},{type:"string",subtype:"band-name",title:"Band",group:"Resources"},{type:"string",subtype:"collection-id",title:"Collection",group:"Resources"},{type:"string",subtype:"job-id",title:"Batch Job",group:"Resources"},{type:"string",subtype:"udf-code",title:"UDF Source Code",group:"UDF",default:""},{type:"string",subtype:"udf-runtime",title:"UDF Runtime",group:"UDF"},{type:"string",subtype:"udf-runtime-version",title:"UDF Runtime Version",group:"UDF",any:!1},{type:"integer",subtype:"epsg-code",title:"EPSG Code (CRS)",group:"CRS"},{type:"string",subtype:"proj-definition",title:"PROJ defintiion (CRS)",group:"CRS",default:""},{type:"string",subtype:"wkt2-definition",title:"WKT2 defintiion (CRS)",group:"CRS",default:""},{type:"array",subtype:"file-path",title:"File path",group:"File and Folders"},{type:"array",subtype:"file-paths",title:"File paths (multiple)",group:"File and Folders",default:[]},{type:"string",subtype:"uri",format:"uri",title:"URI / URL",group:"File and Folders"},{type:"string",subtype:"output-format",title:"Export file format",group:"File and Folders"},{type:"object",subtype:"output-format-options",title:"Export file format parameters",group:"File and Folders",any:!1},{type:"string",subtype:"input-format",title:"Import file format",group:"File and Folders"},{type:"object",subtype:"input-format-options",title:"Import file format parameters",group:"File and Folders",any:!1},{type:"object",subtype:"process-graph",title:"Custom Process"},{tyoe:"object",subtype:"json-schema",title:"Data Type (JSON Schema)",any:!1},{subtype:"json",title:"JSON",noAutoDetect:!0}],be={type:"object",additionalProperties:!1,properties:{from_node:{type:"string"},from_parameter:{type:"string"}}},ge={name:"ParameterDataTypes",mixins:[h.Z],components:{Description:v["default"],ParameterDataType:ue},props:{parameter:{type:Object,default:()=>new d.ProcessParameter({})},editable:{type:Boolean,default:!0},value:{},isItem:{type:Boolean,default:!1},context:{},parent:{}},data(){return{state:void 0,selectedType:null,selectedNativeType:null,selectedSchema:null,jsonSchemaValidator:c.create(this.$store)}},filters:{dataTypeTitle(e){if(e.schema&&!e.schema.title){let t=ye.find((t=>t.subtype===e.schema.subtype||t.type===e.schema.type));if(t&&t.title)return t.title}return e.title()}},async created(){await this.detectType()},computed:{refSchemas(){if(!Array.isArray(this.parameter.refs))return{};let e={};for(let t of this.parameter.refs){let a;t.from_node?(a="from_node:"+t.from_node,e[a]=new d.ProcessDataType({type:"object",group:"References",subtype:a,isRef:"from_node",from_node:t.from_node,title:"Output of #"+t.from_node,required:["from_node"],properties:{from_node:{type:"string",const:t.from_node}},default:t,additionalProperties:!1})):t.from_parameter&&(a="from_parameter:"+t.from_parameter,e[a]=new d.ProcessDataType({type:"object",group:"References",subtype:a,isRef:"from_parameter",from_parameter:t.from_parameter,title:'Value of process parameter "'+t.from_parameter+'"',required:["from_parameter"],properties:{from_parameter:{type:"string",const:t.from_parameter}},default:t,additionalProperties:!1}))}return e},showDataTypeChooser(){return r.Z.size(this.allowedTypes)>1},allowedTypes(){let e={};if("any"===this.parameter.dataType())Object.assign(e,this.supportedTypes);else for(let t of this.parameter.schemas){let a=t.dataType();e[a]=t}return Object.assign(e,this.refSchemas),e},supportedTypes(){let e={};for(let t of ye){if(!1===t.any)continue;let a=t.subtype||t.type,s=Object.assign({},ce.API_TYPES[a],t);e[a]=new d.ProcessDataType(s,this.parameter)}return e},selectableTypes(){let e={};for(let a in this.allowedTypes){let t=this.allowedTypes[a],s=t.group();Array.isArray(e[s])?e[s].push(t):e[s]=[t]}let t=me.map((t=>({name:t,types:e[t]||[]}))).filter((e=>0!==e.types.length));return t}},watch:{value:{immediate:!0,handler(e){"undefined"!==typeof this.state&&e===this.state||("undefined"!==typeof e||this.allowedTypes.undefined?this.state=e:this.state=he(this.parameter.default))}},state:{deep:!0,handler(e){this.$emit("input",e)}},selectedType(e){this.$emit("schemaSelected",this.supportedTypes[e])}},methods:{async isValueInvalid(e,t){let a=r.Z.deepClone(t);"array"===a.type&&r.Z.isObject(a.items)&&(a.items={oneOf:[a.items,be]});let s=await this.jsonSchemaValidator.validateValue(e,a);return s.length>0},async getTypeForValue(e,t){var a=[];for(var s of e)try{if(await this.isValueInvalid(t,s.schema))continue;a.push(s.dataType())}catch(i){}return a},async detectType(){let e=Object.keys(this.allowedTypes),t="undefined"===typeof this.state;if(0===e.length)await this.setSelected("json");else if(1===e.length)await this.setSelected(e[0],t);else if(t)if(this.allowedTypes.undefined)await this.setSelected(this.allowedTypes.undefined,!1);else{let t=e.filter((e=>"null"!==e));await this.setSelected(t[0],!0)}else{let e=Object.values(this.allowedTypes).filter((e=>!e.schema.noAutoDetect)),t=await this.getTypeForValue(e,this.state);if(0===t.length)await this.setSelected("json");else if(1===t.length)await this.setSelected(t[0]);else{t.includes("integer")&&t.includes("number")&&(t=t.filter((e=>"integer"!==e))),!r.Z.isRef(this.state)&&t.length>1&&pe.warn("A parameter is ambiguous. Potential types: "+t.join(", ")+". Value: "+JSON.stringify(this.state));let e=t.findIndex((e=>ce.NATIVE_TYPES.includes(e)));-1===e&&(e=0),await this.setSelected(t[e])}}},async onSelectType(e){await this.setSelected(e.target.value,!0)},resetValue(){this.state=he(this.parameter.default),this.detectType()},async setSelected(e,t=!1){let a=e;if(e instanceof d.ProcessDataType?(this.selectedSchema=e,this.selectedType=e.dataType(),a=e.nativeDataType()):(this.selectedSchema=this.allowedTypes[e]?this.allowedTypes[e]:this.supportedTypes[e],this.selectedType=e),t){if("number"===typeof this.state&&"string"===a)this.state=String(this.state);else if("string"===typeof this.state&&"integer"===a){if(this.state.match(/^([+-]?\d+)$/)){let e=Number.parseInt(this.state,10);Number.isNaN(e)||(this.state=e)}}else if("string"===typeof this.state&&"number"===a){let e=Number.parseFloat(this.state);Number.isNaN(e)||(this.state=e)}if(this.selectedSchema.isNull())this.state=null;else if("undefined"!==typeof this.selectedSchema.const)this.state=this.selectedSchema.const;else if(this.selectedSchema.isEnum()&&1===this.selectedSchema.getEnumChoices().length)this.state=this.selectedSchema.getEnumChoices()[0];else{let e=he(this.selectedSchema.default());try{("undefined"===typeof this.state||await this.isValueInvalid(this.state,this.selectedSchema))&&(this.state=e)}catch(s){this.state=e}}}}}},ve=ge;var xe=(0,_.Z)(ve,s,i,!1,null,null,null);const we=xe.exports},64578:(e,t,a)=>{a.d(t,{Z:()=>p});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"parameters"},e._l(e.parameters,(function(a,s){return t("div",{directives:[{name:"show",rawName:"v-show",value:e.toggleParamVisibility(a),expression:"toggleParamVisibility(param)"}],key:s,staticClass:"fieldRow"},[t("label",{class:{fieldLabel:!0,highlight:a.name===e.selectParameter,info:a.info}},[e._v(" "+e._s(e.displayLabel(a))+" "),a.info||a.optional?e._e():t("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]),a.description?t("div",{staticClass:"description"},[t("Description",{attrs:{description:a.description}})],1):e._e()]),a.info?e._e():t("ParameterDataTypes",{ref:a.name,refInFor:!0,attrs:{editable:e.editable,parameter:a,context:e.context,parent:e.parent},on:{schemaSelected:function(t){return e.updateType(a,t)}},model:{value:e.value[a.name],callback:function(t){e.$set(e.value,a.name,t)},expression:"value[param.name]"}}),!a.info&&a.unspecified?t("button",{staticClass:"deleteBtn",attrs:{title:"Delete unspecified parameter",type:"button"},on:{click:function(t){return e.deleteParam(s)}}},[t("i",{staticClass:"fas fa-trash"})]):e._e()],1)})),0)},i=[],r=a(79879),n=a(79856),o=a(53092);const l={name:"Parameters",components:{Description:n["default"],ParameterDataTypes:o["default"]},props:{parameters:{type:Array,required:!0},value:{type:Object,required:!0},editable:{type:Boolean,default:!0},selectParameter:{type:String,default:null},parent:{type:Object,default:null}},data(){return{show:!0,schemas:{}}},computed:{context(){return{values:this.value,schemas:this.schemas,parameters:this.parameters}}},watch:{value:{deep:!0,handler(){this.$emit("input",this.value)}}},mounted(){this.$nextTick((()=>this.setSelected()))},methods:{toggleParamVisibility(e){return!e||!e.toggledBy||!!this.value[e.toggledBy]},deleteParam(e){let t=this.parameters[e].name;this.$delete(this.parameters,e),this.$delete(this.schemas,t),this.$delete(this.value,t)},updateType(e,t){this.$set(this.schemas,e.name,t)},displayLabel(e){return"string"===typeof e.label&&e.label.length>0?e.label:r.Z.prettifyString(e.name)},componentforParameter(e){return e&&Array.isArray(this.$refs[e])&&this.$refs[e][0]?this.$refs[e][0]:null},setSelected(e=0){let t;this.selectParameter?t=this.componentforParameter(this.selectParameter):this.parameters.length>0&&(t=this.componentforParameter(this.parameters[0].name)),t&&(t.$el&&t.$el.scrollIntoView?(this.selectParameter&&t.$el.scrollIntoView(),this.setInputFocus(t.$el)):e<10&&setTimeout((()=>this.setSelected(++e)),250))},setInputFocus(e,t=0){if(e.querySelector){let t=e.querySelector('input:not([type="hidden"]):not([disabled]):not([class~="multiselect__input"]), button:not([disabled]), textarea:not([disabled]), select:not([disabled]), datalist:not([disabled])');t&&t.focus()}else t<10&&setTimeout((()=>this.setInputFocus(e,++t)),250)}}},d=l;var u=a(1001),c=(0,u.Z)(d,s,i,!1,null,"e173c10e",null);const p=c.exports},38451:(e,t,a)=>{a.d(t,{Z:()=>p});var s=a(20530),i=a.n(s);class r{constructor(e,t=!1){this.url=e,this.geojson=t}getParameters(e){return{url:this.url,params:{q:e.query,format:"json",limit:10,"accept-language":"en",polygon_geojson:this.geojson?1:0,polygon_threshold:.001}}}handleResponse(e){return 0===e.length?[]:e.filter((e=>["boundary","geological","leisure","natural","place","water","waterway"].includes(e.class))).map((e=>({lon:e.lon,lat:e.lat,bbox:e.boundingbox,address:{name:e.display_name},original:{formatted:e.display_name,details:e.address,geojson:e.geojson}})))}}const n={methods:{addGeocoder(e,t=!1){if(!this.$config.geocoder)return;const a={provider:new r(this.$config.geocoder,t),placeholder:"Search for ...",keepOpen:!0,preventDefault:!0},s=new(i())("nominatim",a);s.on("addresschosen",(a=>{if(t)e(a.place?.original?.geojson,a);else if(a.place.bbox){let t=a.place.bbox.map((e=>parseFloat(e))),s={west:t[2],east:t[3],north:t[1],south:t[0]};e(s,a)}else e(null,a)})),this.map.addControl(s)}}},o=n;var l,d,u=a(1001),c=(0,u.Z)(o,l,d,!1,null,null,null);const p=c.exports},81523:(e,t,a)=>{a.d(t,{Z:()=>x});var s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:e.id}},[t("ProgressControl",{ref:"progress",attrs:{map:e.map}}),t("UserLocationControl",{attrs:{map:e.map}}),t("TextControl",{attrs:{text:e.help,map:e.map}})],1)},i=[],r=a(44717),n=a(38451),o=a(18840),l=a(79879),d=a(92420),u=a(63432),c=a(28641),p=a(47539),m=a(45723),h=a(58958),f=a(51345);const y={name:"MapAreaSelect",mixins:[r.Z,n.Z,o.Z],components:{TextControl:m.Z},props:{value:{type:[Object,Array],default:()=>null},showMaxExtent:{type:[Object,Array],default:()=>null}},data(){return{interaction:null,extent:this.toExtent(this.value)}},computed:{returnAsObject(){return!Array.isArray(this.value)},projectedExtent(){return this.extent?(0,u.transformExtent)(this.extent,"EPSG:4326",this.map.getView().getProjection()):null},outerArea(){if(!this.showMaxExtent)return null;let{west:e,east:t,north:a,south:s}=this.showMaxExtent;return{type:"Polygon",coordinates:[[[-180,90],[-180,-90],[180,-90],[180,90],[-180,90]],[[e,a],[e,s],[t,s],[t,a],[e,a]]]}},bbox(){return l.Z.extentToBBox(this.extent)},help(){return this.extent?"Click inside the bounding box to remove it.":"Click on the map to add a bounding box."}},methods:{update(e){e.extent?this.extent=(0,u.transformExtent)(e.extent,this.map.getView().getProjection(),"EPSG:4326"):this.extent=null,this.$emit("input",this.returnAsObject?this.bbox:this.extent)},async renderMap(){let e=!1!==l.Z.isBboxInWebMercator(this.bbox);if(await this.createMap(e?"EPSG:3857":"EPSG:4326"),this.addBasemaps(),this.addGeocoder((e=>{if(!e)return;let t=this.toExtent(e);t=(0,u.transformExtent)(t,"EPSG:4326",this.map.getView().getProjection()),this.interaction.setExtent(t),this.fitMap()})),this.showMaxExtent){const e=new p["default"]({fill:new f.Z({color:"#00000099"}),stroke:new h.Z({width:0,color:"#00000000"})});this.addGeoJson(this.outerArea,!1,"unsupported area",e);let t=this.toExtent(this.showMaxExtent);t=(0,u.transformExtent)(t,"EPSG:4326",this.map.getView().getProjection()),this.map.getView().fit(t,this.getFitOptions(1))}let t=e=>{if(!this.editable)return!1;if("singleclick"===e.type){if(!this.extent){let t=this.map.getSize().map((e=>.2*e)),a=this.map.getView().calculateExtent(t),s=[a[2]-a[0],a[3]-a[1]],i=[e.coordinate[0]-s[0],e.coordinate[1]-s[1],e.coordinate[0]+s[0],e.coordinate[1]+s[1]];return this.interaction.setExtent(i),!1}(0,c.jE)(this.projectedExtent,...e.coordinate)&&(this.interaction.setExtent(null),this.interaction.vertexOverlay_.getSource().clear(),this.interaction.vertexFeature_=null)}else if(this.interaction.handlingDownUpSequence||this.interaction.snapToVertex_(e.pixel,e.map))return!0;return!1};this.interaction=new d.Z({extent:this.projectedExtent,condition:t,boxStyle:(0,p.createDefaultStyle)(),pixelTolerance:15}),this.editable&&this.interaction.on("extentchanged",this.update),this.map.addInteraction(this.interaction),this.fitMap()},fitMap(){if(this.projectedExtent){var e=this.getFitOptions(this.editable?10:33);this.map.getView().fit(this.projectedExtent,e)}}}},b=y;var g=a(1001),v=(0,g.Z)(b,s,i,!1,null,null,null);const x=v.exports},45723:(e,t,a)=>{a.d(t,{Z:()=>u});var s=function(){var e=this,t=e._self._c;return e.texts.length>0?t("div",{staticClass:"ol-unselectable ol-control value",class:{pointer:e.texts.length>1},on:{click:e.toggle}},[e._v(" "+e._s(e.current)+" ")]):e._e()},i=[],r=a(89518);const n={name:"TextControl",mixins:[r.Z],data(){return{i:0}},computed:{texts(){return Array.isArray(this.text)?this.text:"string"===typeof this.text&&this.text.length>0?[this.text]:[]},current(){return 0===this.texts.length?"":this.texts[this.i%this.text.length]}},props:{text:{text:[String,Array],default:""}},methods:{toggle(){this.i++}}},o=n;var l=a(1001),d=(0,l.Z)(o,s,i,!1,null,"6d7a0f06",null);const u=d.exports},9510:(e,t,a)=>{a.r(t),a.d(t,{API_TYPES:()=>i,NATIVE_TYPES:()=>r});var s=a(79879);const i=s.Z.resolveJsonRefs(a(66027)).definitions,r=["string","integer","number","boolean","array","object"]}}]);
//# sourceMappingURL=4578.091edfdc.js.map