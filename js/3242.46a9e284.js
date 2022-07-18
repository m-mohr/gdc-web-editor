"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[3242],{24043:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var s=function(){var e=this,t=e._self._c;return t("Modal",{attrs:{show:e.show,width:"80%",title:"Formula Editor"},on:{closed:function(t){return e.$emit("closed")}},scopedSlots:e._u([{key:"default",fn:function(){return[t("div",{staticClass:"content"},[t("TextEditor",{ref:"editor",staticClass:"editor",attrs:{id:"input",language:"math",placeholder:"e.g. x * 2.5 / (x - y)"},on:{drop:e.onDrop,dragover:e.allowDrop},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),t("div",{staticClass:"description"},[t("p",[t("i",{staticClass:"fas fa-info-circle"}),e._v(" Above you can insert a mathematical formula and it will be converted to openEO code for you.")]),t("p",[t("strong",[e._v("Operators")]),e._v(":"),t("br"),e._l(e.operators,(function(r){return t("kbd",{key:r.op,staticClass:"click",attrs:{title:r.title,draggable:"true"},on:{click:function(t){return e.emit("showProcess",{id:r.processId})},dragstart:function(t){return e.onDrag(t,"operators",r.op)}}},[e._v(e._s(r.op))])}))],2),t("p",[e._v("Supported "),t("strong",[e._v("mathematical functions")]),e._v(": "),e.mathProcesses.length?[t("br"),e._l(e.mathProcesses,(function(r){return t("kbd",{key:r.id,staticClass:"click",attrs:{title:r.summary,draggable:"true"},on:{click:function(t){return e.emit("showProcess",r)},dragstart:function(t){return e.onDrag(t,"functions",r)}}},[e._v(e._s(r.id))])}))]:[e._v("None")]],2),t("p",[e._v("Available "),t("strong",[e._v("output from processes")]),e._v(": "),e.results.length?[t("br"),e._l(e.results,(function(r){return t("kbd",{key:r,attrs:{draggable:"true"},on:{dragstart:function(t){return e.onDrag(t,"results",r)}}},[e._v("#"+e._s(r))])}))]:[e._v("None")]],2),t("p",[t("strong",[e._v("Parameters")]),e._v(": If a variable is found in the formula which can't be resolved to a pre-defined parameter, a new parameter will be created for it. Available pre-defined parameters: "),e.pgParameters.length?[t("br"),e._l(e.pgParameters,(function(r){return t("kbd",{key:r.id,staticClass:"click",attrs:{draggable:"true"},on:{click:function(t){return e.emit("showProcessParameter",r)},dragstart:function(t){return e.onDrag(t,"pgParameters",r.name)}}},[e._v(e._s(r.name))])}))]:[e._v("None")]],2),e.supportsArrayElement?t("p",[e._v("If the first pre-defined parameter is a (labeled) "),t("strong",[e._v("array")]),e._v(", the value for a specific index or label can be accessed by typing the numeric index or textual label with a "),t("kbd",[e._v("$")]),e._v(" in front, for example "),t("kbd",[e._v("$B1")]),e._v(" for the label B1 or "),t("kbd",[e._v("$0")]),e._v(" for the first element in the array. You can access subsequent parameters by adding additional $ characters at the beginning, e.g. "),t("kbd",[e._v("$$0")]),e._v(" for the first element of an array in the second parameter, "),t("kbd",[e._v("$$$0")]),e._v(" for the same behavior in the third parameter etc. Numeric labels are not supported.")]):e._e()])],1)]},proxy:!0},{key:"footer",fn:function(){return[t("div",{staticClass:"footer"},[t("button",{attrs:{type:"button"},on:{click:e.createResult}},[e._v("Insert")])])]},proxy:!0}])})},a=[],o=(r(26699),r(73466)),i=r(58661),n=r(2591),l=r(37787),p=r(51155),c=r(6139),u=r(25108);const d={name:"ExpressionModal",mixins:[l.Z],components:{Modal:o.Z,TextEditor:n.Z},props:{process:{type:Object,default:()=>({})}},data(){return{show:!0,input:"",arrayElements:{},result:{},replace:!1}},created(){try{this.importFormula()}catch(e){u.info(e)}if(this.arrayElements={},!this.replace)for(let t in this.process.getNodes()){let e=this.process.getNode(t);if("array_element"===e.process_id){let t=this.process.getArrayElementPlaceholder(e);this.arrayElements[t]={from_node:e.id}}}},computed:{...i.Z.mapGetters(["processes"]),mathProcesses(){return this.processes.getMathProcesses()},pgParameters(){return this.process.getCallbackParameters()},operators(){var e=[];for(var t in c.Formula.operatorMapping){let r=c.Formula.operatorMapping[t],s=this.processes.get(r).summary;e.push({op:t,processId:r,title:s})}return e},results(){let e=[];for(var t in this.process.getNodes()){var r=this.process.getNode(t),s=this.processes.get(r.process_id);p.Z.isMathProcess(s)&&e.push(t)}return e},supportsArrayElement(){return 0!==this.pgParameters.length&&this.processes.has("array_element")}},methods:{onDrag(e,t,r){switch(t){case"functions":let e=(r.parameters||[]).map((e=>e.name));r=r.id+"("+e.join(", ")+")";break;case"results":r="#"+r;break}e.dataTransfer.setData("text/plain",r)},allowDrop(e){e.preventDefault()},onDrop(e){var t=e.dataTransfer.getData("text/plain");t&&(e.preventDefault(),this.$refs.editor.insert(t,!1))},importFormula(){let e=this.process.toFormulaString();e&&(this.input=e,this.replace=!0)},createResult(){if(0!==this.input.length)try{this.result={};let e=new c.Formula(this.input),t=this.parseTree(e.tree);if(!i.Z.isObject(t)||!t.from_node)throw new Error("Invalid formula specified.");this.result[t.from_node].result=!0,this.$emit("save",this.result,this.replace),this.show=!1}catch(e){i.Z.exception(this,e)}else this.show=!1},parseTree(e){let t=Object.keys(e)[0];switch(t){case"Number":return Number.parseFloat(e.Number);case"Identifier":return this.getRef(e.Identifier);case"Expression":return this.parseTree(e.Expression);case"FunctionCall":let r=[];for(let t in e.FunctionCall.args)r.push(this.parseTree(e.FunctionCall.args[t]));return this.addProcess(e.FunctionCall.name,r);case"Binary":return this.addOperatorProcess(e.Binary.operator,this.parseTree(e.Binary.left),this.parseTree(e.Binary.right));case"Unary":let s=this.parseTree(e.Unary.expression);return"-"===e.Unary.operator?"number"===typeof s?-s:this.addOperatorProcess("*",-1,s):s;default:throw new Error("Operation "+t+" not supported.")}},getRef(e){if("true"===e)return!0;if("false"===e)return!1;if("null"===e)return null;if("string"===typeof e&&e.startsWith("#")){let t=e.substring(1);if(this.results.includes(t))return{from_node:t}}if(this.supportsArrayElement&&"string"===typeof e){let t=e.match(/^\$+/),r=t?t[0].length:0;if(r>0){let t=e.substring(r);if(!(e in this.arrayElements)){let s={data:{from_parameter:this.pgParameters[r-1].name}};t.match(/^\d+$/)?s.index=Number.parseInt(t,10):s.label=t,this.arrayElements[e]=this.addProcess("array_element",s)}return this.arrayElements[e]}}return this.pgParameters.filter((t=>t.name===e)).length,{from_parameter:e}},addOperatorProcess(e,t,r){if("undefined"!==typeof c.Formula.operatorMapping[e]){let s=this.processes.get(c.Formula.operatorMapping[e]),a={};if(!s||!Array.isArray(s.parameters)||s.parameters.length<2)throw new Error("Process for operator "+e+" must have at least two parameters");return a[s.parameters[0].name||"x"]=t,a[s.parameters[1].name||"y"]=r,this.addProcess(s,a)}throw new Error("Operator "+e+" not supported.")},addProcess(e,t){if("string"===typeof e&&(e=this.processes.get(e)),!e)throw new Error("Process not available: "+name);if(t.length>i.Z.size(e.parameters))throw new Error("Number of given arguments exceeds number of process parameters for process '"+name+"'.");if(Array.isArray(t)){let r={};for(let s in t){let a=e.parameters[s];r[a.name]=t[s]}t=r}let r=i.Z.getUniqueId(),s={process_id:e.id,arguments:t};return this.result[r]=s,{from_node:r}}}},h=d;var m=r(1001),f=(0,m.Z)(h,s,a,!1,null,"2b7202fc",null);const g=f.exports},73466:(e,t,r)=>{r.d(t,{Z:()=>u});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"modal",style:{"z-index":e.zIndex},on:{mousedown:e.backgroundClose}},[t("div",{ref:"container",staticClass:"modal-container",style:e.style},[t("header",{staticClass:"modal-header",on:{mousedown:e.startMove}},[e._t("header",(function(){return[t("h2",[e._v(e._s(e.title))]),t("span",{staticClass:"close",on:{click:e.close}},[t("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),t("main",{staticClass:"modal-content"},[e._t("default")],2),t("footer",{staticClass:"modal-footer"},[e._t("footer")],2)])])},a=[],o=r(37787),i=r(58661);const n={name:"Modal",mixins:[o.Z],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...i.Z.mapState("editor",["hightestModalZIndex"]),style(){let e={width:this.width};return this.minWidth&&(e["min-width"]=this.minWidth),Array.isArray(this.position)&&(e.position="absolute",e.left=this.position[0]+"px",e.top=this.position[1]+"px"),e}},watch:{show:{immediate:!0,handler(e){e?this.open():this.close()}}},methods:{...i.Z.mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(e){"H2"!==e.target.tagName&&(this.dragPosition=[e.clientX,e.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),e.preventDefault(),e.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(e){e.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-e.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-e.clientY)],this.dragPosition=[e.clientX,e.clientY]},escCloseListener(e){if("Escape"==e.key)return this.close(),e.preventDefault(),e.stopPropagation(),!1},backgroundClose(e){e.target===this.$el&&this.close()}}},l=n;var p=r(1001),c=(0,p.Z)(l,s,a,!1,null,null,null);const u=c.exports}}]);
//# sourceMappingURL=3242.46a9e284.js.map