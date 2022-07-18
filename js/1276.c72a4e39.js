"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[1276],{91276:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component searchable-list",class:{expandable:null!==e.collapsed,expanded:e.showList,noResults:0===e.filteredCount}},[e._t("heading",(function(){return[e.heading?t("h2",{staticClass:"heading",on:{click:function(t){return e.toggleHeading(null)}}},[e._v(" "+e._s(e.heading)+" "),null!==e.filteredCount?[e._v("("+e._s(e.filteredCount)+"/"+e._s(e.totalCount)+")")]:[e._v("("+e._s(e.totalCount)+")")]],2):e._e()]}),{filteredCount:e.filteredCount,totalCount:e.totalCount}),null!==e.showList?t("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.showList,expression:"showList === true"}],staticClass:"body"},[e._t("content-start"),0===e.totalCount?[t("p",[e._v("No data available.")])]:[null===e.externalSearchTerm?t("SearchBox",{attrs:{placeholder:e.searchPlaceholder,minLength:e.searchMinLength},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}):e._e(),e._t("after-search-box",null,{filteredCount:e.filteredCount,summaries:e.summaries}),0===e.filteredCount?t("p",[e._v("No search results found.")]):t("ul",{staticClass:"list",class:{expandable:e.offerDetails}},e._l(e.summaries,(function(a,s){return t("li",{directives:[{name:"show",rawName:"v-show",value:a.show,expression:"summary.show"}],key:a.identifier,class:{expanded:e.showDetails[s]}},[t("summary",{staticClass:"summary",class:{experimental:a.experimental,deprecated:a.deprecated},on:{click:function(t){return e.toggleDetails(s)}}},[e._t("summary",(function(){return[t("strong",[e._v(" "+e._s(a.identifier)+" "),e.allowCopy&&e.canCopy?t("span",{staticClass:"copy",attrs:{title:"Copy identifier"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.copyIdentifier(t,a)}}},[e._v("📋")]):e._e()]),a.summary?t("small",{class:{hideOnExpand:!e.showSummaryOnExpand}},[e._v(e._s(a.summary))]):e._e(),e.showKeywords&&a.keywords.length>0?t("ul",{staticClass:"badges small block hideOnExpand"},e._l(a.keywords,(function(a){return t("li",{key:a,staticClass:"badge"},[e._v(e._s(a))])})),0):e._e()]}),{summary:a,item:a.data})],2),"boolean"===typeof e.showDetails[s]?t("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.showDetails[s],expression:"showDetails[i] === true"}],staticClass:"details"},[a.loaded?e._t("details",(function(){return[e._v(" No details available! ")]}),{summary:a,item:a.data}):t("Loading")],2):e._e()])})),0)]],2):e._e()],2)},i=[],r=a(65973),n=a(13739),l=a(20144),o=a(25108);const d={name:"SearchableList",components:{Loading:n.Z,SearchBox:()=>a.e(4929).then(a.bind(a,24929))},props:{data:{type:[Array,Object],default:()=>[]},identifierKey:{type:String,default:"id"},summaryKey:{type:String,default:"summary"},keywordsKey:{type:String,default:null},showKeywords:{type:Boolean,default:!1},externalSearchTerm:{type:String,default:null},searchPlaceholder:{type:String,default:"Search"},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},showSummaryOnExpand:{type:Boolean,default:!0},heading:{type:String,default:null},collapsed:{type:Boolean,default:null},searchMinLength:{type:Number,default:2},loadAdditionalData:{type:Function,default:null},allowCopy:{type:Boolean,default:!1}},data(){return{searchTerm:"",showDetails:{},showList:!this.collapsed||null,summaries:[],canCopy:!1}},watch:{loadAdditionalData:{handler(){this.generateSummaries(this.summaries)}},data:{immediate:!0,handler(e,t){e!==t&&this.generateSummaries(e)}},externalSearchTerm:{immediate:!0,handler(e){this.searchTerm="string"===typeof e?e:""}},summaries:{immediate:!0,handler(){this.$emit("summaries",this.summaries)}},searchTerm:{immediate:!0,handler(e){e.length>=this.searchMinLength?this.summaries.forEach((e=>{this.$set(e,"show",r.Z.search(this.searchTerm,[e.identifier,e.summary].concat(e.keywords)))})):this.summaries.forEach((e=>this.$set(e,"show",!0))),this.$emit("summaries",this.summaries)}},collapsed(e){!1===e?this.showList=!0:null!==this.showList&&(this.showList=!1)}},computed:{totalCount(){return r.Z.size(this.data)},filteredCount(){return this.searchTerm.length>=this.searchMinLength?this.summaries.filter((e=>!0===e.show)).length:null}},mounted(){this.canCopy=navigator&&navigator.clipboard&&"function"===typeof navigator.clipboard.writeText},methods:{copyIdentifier(e,t){if(this.allowCopy&&this.canCopy){let a=e.composedPath()[0];navigator.clipboard.writeText(t.identifier).then((()=>this.toggleIcon(a,"✅"))).catch((()=>this.toggleIcon(a,"❌")))}},toggleIcon(e,t){if(e){let a=e.innerText;e.innerText=t,setTimeout((()=>e.innerText=a),2e3)}},generateSummaries(){let e="function"===typeof this.loadAdditionalData,t=[];for(let a in this.data){let s=this.data[a],i={identifier:a,summary:"",show:!0,loaded:!e,index:a,experimental:s.experimental,deprecated:s.deprecated,data:null};"string"===typeof this.identifierKey&&"string"===typeof s[this.identifierKey]&&(i.identifier=s[this.identifierKey]),"string"===typeof this.summaryKey&&"string"===typeof s[this.summaryKey]&&(i.summary=s[this.summaryKey]),"string"===typeof this.keywordsKey&&Array.isArray(s[this.keywordsKey])?i.keywords=s[this.keywordsKey]:i.keywords=[];let r=l.ZP.observable(i);r.data=s,t.push(r)}this.sort&&t.sort(((e,t)=>r.Z.compareStringCaseInsensitive(e.identifier,t.identifier))),this.summaries=t},toggleHeading(e=null){null!==this.collapsed&&(this.showList=null===e?!this.showList:e,this.$emit("headingToggled",this.showList),this.$parent&&this.$parent.$emit("headingToggled",this.showList))},async toggleDetails(e,t){if(!this.offerDetails)return;if("undefined"===typeof t&&(t=!this.showDetails[e]),"undefined"===typeof this.showDetails[e]&&!1===t)return;this.$set(this.showDetails,e,t);let a=this.summaries[e];if(t&&"function"===typeof this.loadAdditionalData&&!a.loaded)try{a.data=await this.loadAdditionalData(a.index,a.identifier,a.data),a.loaded=!0}catch(s){o.error(s)}this.$emit("detailsToggled",t,a.index,a.identifier,a.data)}}},h=d;var u=a(1001),m=(0,u.Z)(h,s,i,!1,null,null,null);const c=m.exports}}]);
//# sourceMappingURL=1276.c72a4e39.js.map