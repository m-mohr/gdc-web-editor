"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[7759],{27759:(n,e,l)=>{l.r(e),l.d(e,{default:()=>o});var a=function(){var n=this,e=n._self._c;return e("section",{staticClass:"vue-component billing-plans"},[n.heading?e(n.headingTag,{tag:"component"},[n._v(n._s(n.heading))]):n._e(),e("strong",[n._v("Plans")]),null!==n.currency&&n.plans.length?e("ul",n._l(n.plans,(function(l){return e("li",{key:l.name},[e("div",{staticClass:"plan-header"},[e("strong",{staticClass:"plan-name"},[l.url?e("a",{attrs:{href:l.url,target:"_blank"}},[n._v(n._s(l.name))]):[n._v(n._s(l.name))]],2),e("ul",{staticClass:"badges small inline"},[n.defaultPlan==l.name?e("li",{staticClass:"badge default"},[n._v("default")]):n._e(),!0===l.paid?e("li",{staticClass:"badge red"},[n._v("paid")]):!1===l.paid?e("li",{staticClass:"badge green"},[n._v("free")]):n._e()])]),l.description?e("Description",{attrs:{description:l.description,compact:!0}}):n._e()],1)})),0):e("p",[n._v("No plans available.")]),e("div",{staticClass:"billing-currency"},[null!==n.currency?[e("strong",[n._v("Currency:")]),n._v(" "+n._s(n.currency)+" ")]:[n._v("No billing information provided.")]],2)],1)},i=[],t=l(86975);const s={name:"BillingPlans",components:{Description:()=>Promise.all([l.e(7261),l.e(1194)]).then(l.bind(l,27261))},props:{billing:{type:Object,default:()=>({})},heading:{type:String,default:"Billing"},headingTag:{type:String,default:"h2"}},computed:{currency(){return"string"===typeof this.billing.currency?this.billing.currency:null},defaultPlan(){return"string"===typeof this.billing.default_plan?this.billing.default_plan:null},plans(){return Array.isArray(this.billing.plans)?this.billing.plans:[]}},beforeCreate(){t.A.enableHtmlProps(this)}},r=s;var c=l(81656),u=(0,c.A)(r,a,i,!1,null,null,null);const o=u.exports}}]);
//# sourceMappingURL=7759.155e8fe5.js.map