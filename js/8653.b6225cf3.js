"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[8653],{4702:(t,e,o)=>{o.d(e,{Z:()=>h});var s=o(88775);const a={props:{map:{type:Object}},data(){return{control:null}},mounted(){this.control=new s["default"]({element:this.$el})},watch:{map(t){t&&this.map.addControl(this.control)}},methods:{getControl(){return this.control}}},i=a;var r,n,l=o(1001),d=(0,l.Z)(i,r,n,!1,null,null,null);const h=d.exports},42820:(t,e,o)=>{o.d(e,{Z:()=>S});var s=o(79879),a=o(43334),i=o(28641),r=o(98683),n=o(43086),l=o(7517),d=o(92371),h=o(22556);const p={mixins:[a.Z],methods:{addGeoJson(t,e=!1,o="GeoJSON",a=!0){let n;n=t instanceof h["default"]?t:this.createGeoJsonSource(t,this.map.getView().getProjection());let p=new d["default"]({title:o,source:n});s.Z.isObject(a)?p.setStyle(a):!a&&this.removeLayerFill&&this.removeLayerFill(p),this.map.addLayer(p);let u=n.getExtent();if((0,i.xb)(u)||this.map.getView().fit(u,this.getFitOptions()),e){var c=new l.Z({hitTolerance:5,multi:!1,condition:r.Kf,layers:[p]});c.on("select",this.onSelect),this.map.addInteraction(c)}return p},onSelect(t){if(t.selected.length>0){let e=t.selected[0],o=s.Z.omitFromObject(e.getProperties(),["geometry"]),a=e.getId()||"Feature Properties";this.broadcast("showDataModal",o,a)}},createGeoJsonSource(t,e){let o=[];return s.Z.detectGeoJson(t)&&(o=(new n.Z).readFeatures(t,{featureProjection:e})),new h["default"]({features:o,wrapX:!1})}}},u=p;var c,m,g=o(1001),f=(0,g.Z)(u,c,m,!1,null,null,null);const w=f.exports;var y=o(81090),v=o(2033);const b={mixins:[w],methods:{addExtent(t,e=!0){let o=null;return o=s.Z.isObject(t)?"undefined"!==typeof t.west&&"undefined"!==typeof t.east&&"undefined"!==typeof t.south&&"undefined"!==typeof t.north?[t]:"Collection"===t.type?t.extent.spatial.bbox.map((t=>s.Z.extentToBBox(t))):"Feature"!==t.type||t.geometry||t.bbox?t:null:t,Array.isArray(o)&&o.length>0?this.addRectangles(o,e):o?this.addGeoJson(o,!1,"Footprint",e):null},addRectangles(t,e=!0){let o=this.map.getView().getProjection(),s=t.map((t=>{let e=(0,v.oJ)([t.west,t.south,t.east,t.north]).transform("EPSG:4326",o);return new y["default"](e)})),a=new h["default"]({features:s,projection:o,wrapX:!1}),i=new d["default"]({title:"Bounding Boxes",displayInLayerSwitcher:!1,source:a});return e||this.removeLayerFill(i),this.map.addLayer(i),this.map.getView().fit(a.getExtent(),this.getFitOptions()),i},removeLayerFill(t){let e=t.getStyle();"function"===typeof e&&(e=e()[0]),e.setFill(null)}}},L=b;var Z,x,C=(0,g.Z)(L,Z,x,!1,null,null,null);const S=C.exports},82072:(t,e,o)=>{o.d(e,{Z:()=>z});o(70560);var s=o(43334),a=o(79879),i=(o(71827),o(70097)),r=o(37494),n=o(83122),l=o(79258),d=o(86850),h=o(63432),p=o(29619),u=o(56933),c=o(41666),m=o(54680),g=o(23989),f=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"ol-unselectable ol-progress-control"},[e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"progress-bar-inner",style:{width:t.percent}})]),e("div",{staticClass:"progress-label"},[t._v(t._s(t.label))])])},w=[],y=o(4702);const v={name:"ProgressControl",mixins:[y.Z],data(){return{loading:0,loaded:0}},computed:{show(){return this.loading>0&&this.loaded<=this.loading},percent(){return(this.loaded/this.loading*100).toFixed(1)+"%"},label(){return"Loading Tiles ("+this.percent+")"}},methods:{addLoading(){this.loading++,this.update()},addLoaded(){this.loaded++,this.update()},update(){this.loading===this.loaded&&(this.loading=0,this.loaded=0),this.loading===this.loaded&&(this.loading=0,this.loaded=0)}}},b=v;var L=o(1001),Z=(0,L.Z)(b,f,w,!1,null,"1da4d958",null);const x=Z.exports;var C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ol-location ol-unselectable ol-control",staticStyle:{"pointer-events":"auto"}},[e("button",{attrs:{type:"button",title:"Go to your location"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.request.apply(null,arguments)}}},[e("i",{staticClass:"fas fa-location-arrow"})])])},S=[];const F={name:"UserLocationControl",mixins:[y.Z],methods:{request(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((t=>{let e=this.map.getView(),o=[t.coords.longitude,t.coords.latitude];e.setCenter((0,h.fromLonLat)(o,e.getProjection()))}),(t=>Utils.error(this,t,"Location Error")),{maximumAge:1/0})}}},P=F;var j=(0,L.Z)(P,C,S,!1,null,"71051cba",null);const M=j.exports;let $=1;const _={components:{ProgressControl:x,UserLocationControl:M},mixins:[s.Z],props:{show:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},removableLayers:{type:Boolean,default:!1}},data(){return{map:null,id:"map_"+$++,options:{}}},watch:{async show(){await this.showMap()}},async mounted(){await this.showMap()},methods:{async showMap(){this.show&&(await this.$nextTick(),await this.renderMap(),this.$emit("options",this.options))},async createMap(t="EPSG:3857"){let e,o={showFullExtent:!0};if("string"===typeof t?o.projection=await u.Z.get(t):t instanceof p.Z?o.projection=t:t instanceof d.ZP?e=t:a.Z.isObject(t)&&(o=t),!e){if(e=new d.ZP(o),!e.getCenter()){let t=this.$config.mapLocation;Array.isArray(t)&&2==t.length||(t=[0,0]),e.setCenter((0,h.fromLonLat)([t[1],t[0]],e.getProjection()))}e.getZoom()||e.setZoom(this.$config.mapZoom||0)}if(null!==this.map)return this.map.updateSize(),void this.map.render();var s=[new i.Z,new r.Z],c={target:this.id,view:e};this.editable?c.controls=(0,n.c)().extend(s):(c.interactions=[],c.controls=s),this.map=new l.Z(c),this.listen("windowResized",this.updateMapSize);let m=this.map.getLayers();m.on("add",(t=>{let e=t.element,o=e.get("events");for(let s in o)this.map.on(s,o[s])})),m.on("remove",(t=>{let e=t.element,o=e.get("events");for(let s in o)this.map.un(s,o[s])}))},addLayerSwitcher(){this.map.addControl(new g.Z({trash:this.removableLayers}))},addBasemaps(){let t={opaque:!0,attributionsCollapsible:!1,wrapX:!1},e=[];if(Array.isArray(this.$config.basemaps)){let o=!1;for(let s of this.$config.basemaps){let a=new m.Z(Object.assign({},t,s)),i=new c.Z({source:this.trackTileProgress(a),baseLayer:!0,title:s.title,noSwitcherDelete:!0,visible:!o});e.push(i),this.map.addLayer(i),o=!0}}return e},setOptions(t,e){this.options[t]=e,this.$emit("options",this.options)},onShow(){this.listen("windowResized",this.updateMapSize)},onHide(){this.unlisten("windowResized")},async renderMap(){await this.createMap(),this.addBasemaps()},async updateMapSize(){this.map&&(await this.$nextTick(),this.map.updateSize())},addLayerToMap(t){t.set("userLayer",!0),this.map.addLayer(t)},removeLayerFromMap(t){let e=this.getLayerFromMap(t);e&&this.map.removeLayer(e)},getLayerFromMap(t){let e=this.map.getLayers().getArray();for(let o of e)if(o.get("id")===t)return o;return null},getVisibleLayers(){let t=[],e=this.map.getLayers().getArray();for(let o of e)o.get("userLayer")&&o.getVisible()&&t.push(o);return t},getFitOptions(t=25){let e={};var o=this.map.getSize();return e.padding=o&&t>0?[o[0]*t/100,o[1]*t/100,o[0]*t/100,o[1]*t/100]:[30,30,30,30],e},trackTileProgress(t){if(this.$refs.progress){t.on("tileloadstart",(()=>this.$refs.progress&&this.$refs.progress.addLoading()));let e=()=>this.$refs.progress&&this.$refs.progress.addLoaded();t.on("tileloadend",e),t.on("tileloaderror",e)}return t},fromLonLat(t){return(0,h.fromLonLat)(t,this.map.getView().getProjection())},toExtent(t){let e=null;return a.Z.isObject(t)&&"west"in t&&"south"in t&&"east"in t&&"north"in t?e=[t.west,t.south,t.east,t.north]:Array.isArray(t)&&t.length>=4&&(e=t),e}}},O=_;var A,T,k=(0,L.Z)(O,A,T,!1,null,null,null);const z=k.exports}}]);
//# sourceMappingURL=8653.b6225cf3.js.map