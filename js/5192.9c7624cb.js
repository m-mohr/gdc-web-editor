"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[5192],{69636:(t,e,o)=>{o.d(e,{Z:()=>b});var n=o(24832),r=o(58661),s=o(81090),a=o(2033),i=o(92371),l=o(22556);const p={mixins:[n.Z],methods:{async addExtent(t,e=!0){let o=null;o=r.Z.isObject(t)?"Collection"===t.type?t.extent.spatial.bbox.map((t=>r.Z.extentToBBox(t))):"Feature"!==t.type||t.geometry||t.bbox?t:null:t,Array.isArray(o)&&o.length>0?this.addRectangles(o,e):o&&this.addGeoJson(o,!1,"Footprint",e)},addRectangles(t,e=!0){let o=this.map.getView().getProjection(),n=t.map((t=>{let e=(0,a.oJ)([t.west,t.south,t.east,t.north]).transform("EPSG:4326",o);return new s.Z(e)})),r=new l.Z({features:n,projection:o,wrapX:!1}),p=new i.Z({title:"Bounding Boxes",displayInLayerSwitcher:!1,source:r});return e||this.removeLayerFill(p),this.map.addLayer(p),this.map.getView().fit(r.getExtent(),this.getFitOptions()),p},removeLayerFill(t){let e=t.getStyle();"function"===typeof e&&(e=e()[0]),e.setFill(null)}}},c=p;var d,h,u=o(1001),x=(0,u.Z)(c,d,h,!1,null,null,null);const b=x.exports},29293:(t,e,o)=>{o.r(e),o.d(e,{default:()=>u});var n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:t.id}},[e("ProgressControl",{ref:"progress",attrs:{map:t.map}})],1)},r=[],s=o(12766),a=o(69636),i=o(58661),l=o(28641);const p={name:"MapExtentViewer",mixins:[s.Z,a.Z],props:{footprint:{type:[Array,Object],default:()=>null}},methods:{async renderMap(){let t,e;t=i.Z.isObject(this.footprint)&&"Collection"===this.footprint.type?this.footprint.extent.spatial.bbox:this.footprint;let o=!0;if(Array.isArray(t)&&t.length>0)e=t.map((t=>i.Z.extentToBBox(t))),o=!1!==i.Z.isBboxInWebMercator(e);else{let n=this.createGeoJsonSource(t),r=n.getExtent();e=t,(0,l.xb)(r)||(o=!1!==i.Z.isBboxInWebMercator(i.Z.extentToBBox(r)),o||(e=n))}await this.createMap(o?"EPSG:3857":"EPSG:4326"),this.addBasemaps(),this.addExtent(e)}}},c=p;var d=o(1001),h=(0,d.Z)(c,n,r,!1,null,null,null);const u=h.exports}}]);
//# sourceMappingURL=5192.9c7624cb.js.map