"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[6294],{86294:(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});var i=function(){var t=this,e=t._self._c;return e("Modal",{attrs:{show:t.show,title:t.title},on:{closed:function(e){return t.$emit("closed")}}},[0==t.listCount?e("strong",{staticClass:"listEmpty"},[t._v("No data available.")]):e("ul",{staticClass:"modal-list"},t._l(t.listItems,(function(s,i){return e("li",{key:i,on:{click:function(e){return t.doMainListAction(s,i)}}},[e("strong",[t._v(t._s(Array.isArray(t.listItems)?s:i))]),t._l(t.otherListActions,(function(o){return e("button",{key:o.icon,attrs:{type:"button",title:o.title},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.doListAction(s,i,o.callback)}}},[e("i",{class:"fas fa-"+o.icon})])}))],2)})),0)])},o=[],n=s(58661),l=s(73466);const a={name:"ListModal",components:{Modal:l.Z},props:{title:{type:String,default:null},list:{type:Array,default:()=>[]},listActions:{type:Array,default:()=>[]}},data(){return{show:!0}},computed:{listCount(){return n.Z.size(this.listItems)},listItems(){return"function"==typeof this.list?this.list():this.list},otherListActions(){return Array.isArray(this.listActions)&&this.listActions.length>1?this.listActions.slice(1):[]}},methods:{doListAction(t,e,s){const i=s(Array.isArray(this.listItems)?t:e);!0===i&&(this.show=!1)},doMainListAction(t,e){this.listActions.length>0&&this.doListAction(t,e,this.listActions[0].callback)}}},r=a;var c=s(1001),d=(0,c.Z)(r,i,o,!1,null,"4a2be02e",null);const h=d.exports},73466:(t,e,s)=>{s.d(e,{Z:()=>h});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[e("div",{ref:"container",staticClass:"modal-container",style:t.style},[e("header",{staticClass:"modal-header",on:{mousedown:t.startMove}},[t._t("header",(function(){return[e("h2",[t._v(t._s(t.title))]),e("span",{staticClass:"close",on:{click:t.close}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),e("main",{staticClass:"modal-content"},[t._t("default")],2),e("footer",{staticClass:"modal-footer"},[t._t("footer")],2)])])},o=[],n=s(37787),l=s(58661);const a={name:"Modal",mixins:[n.Z],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...l.Z.mapState("editor",["hightestModalZIndex"]),style(){let t={width:this.width};return this.minWidth&&(t["min-width"]=this.minWidth),Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}}},methods:{...l.Z.mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){"H2"!==t.target.tagName&&(this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),t.preventDefault(),t.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},r=a;var c=s(1001),d=(0,c.Z)(r,i,o,!1,null,null,null);const h=d.exports}}]);
//# sourceMappingURL=6294.969e5373.js.map