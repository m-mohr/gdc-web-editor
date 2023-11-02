(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[2257,4220],{27428:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var i=s(40465),a=s(52590),r=s(46166),n=s.n(r),o=s(25108);const l=["image/apng","image/gif","image/png","image/jpeg","image/webp"],m=["gif","png","jpg","jpeg","webp"],c={components:{Description:()=>Promise.all([s.e(8522),s.e(6795)]).then(s.bind(s,8522)),DeprecationNotice:()=>s.e(1413).then(s.bind(s,71413)),LinkList:()=>s.e(4571).then(s.bind(s,4571)),StacAsset:()=>Promise.all([s.e(5062),s.e(5834),s.e(8522),s.e(177)]).then(s.bind(s,33557)),StacFields:()=>Promise.all([s.e(5062),s.e(5834),s.e(7939)]).then(s.bind(s,87939))},props:{data:{type:Object,default:()=>({})},mapOptions:{type:Object,default:()=>({}),validator:function(e){const t={height:"string",width:"string",basemap:"string",attribution:"string",wrapAroundAntimeridian:"boolean",scrollWheelZoom:"boolean"},s=Object.keys(t);return"object"==typeof e&&Object.keys(e).every((i=>-1!=s.indexOf(i)&&typeof e[i]==t[i]))}}},data(){return{map:null}},computed:{stac(){let e=i.Z.deepClone(this.data);return n().stac(e)},leafletOptions(){return{height:this.mapOptions.height||"250px",width:this.mapOptions.width||"auto",basemap:this.mapOptions.basemap||"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:this.mapOptions.attribution||'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>',noWrap:void 0===this.mapOptions.wrapAroundAntimeridian||!this.mapOptions.wrapAroundAntimeridian,scrollWheelZoom:void 0!==this.mapOptions.scrollWheelZoom&&this.mapOptions.scrollWheelZoom}},thumbnails(){return i.Z.isObject(this.stac.assets)?Object.values(this.stac.assets).filter(this.assetIsImage):[]},hasAssets(){return i.Z.size(this.stac.assets)>0}},watch:{data(){this.initMap()},showMap(e){e&&this.initMap()}},beforeCreate(){i.Z.enableHtmlProps(this)},mounted(){this.initMap()},methods:{assetIsImage(e){let t="string"===typeof e.href?e.href.split(".").pop():"";return Array.isArray(e.roles)&&(e.roles.includes("thumbnail")||e.roles.includes("overview"))&&(l.includes(e.type)||m.includes(t))},initLeafletPlugins(){},async initMap(){if(this.$refs.mapContainer||await this.$nextTick(),!this.$refs.mapContainer||null!==this.map||!this.showMap)return!1;let e=window.L;try{this.map={leaflet:null,instance:null,geometries:null};let n=()=>i.Z.isObject(window.L)&&a.Versions.validate(window.L.version)&&a.Versions.compare(window.L.version,"1.x.x","=");if(n()||(window.L=await Promise.resolve().then(s.t.bind(s,18031,23))),!n())return o.warn("Leaflet is not available"),!1;this.map.leaflet=window.L;let l=await s.e(3729).then(s.bind(s,13729));this.$root&&this.$root.$options.shadowRoot&&l.__inject__&&l.__inject__(this.$root.$options.shadowRoot);var t=this.map.leaflet.map(this.$refs.mapContainer,{scrollWheelZoom:this.leafletOptions.scrollWheelZoom});this.map.instance=t;var r=this.map.leaflet.tileLayer(this.leafletOptions.basemap,{name:"Basemap",attribution:this.leafletOptions.attribution,noWrap:this.leafletOptions.noWrap});return r.addTo(t),"function"===typeof this.addFeatures&&(this.map.geometries=this.addFeatures(),this.map.geometries&&this.map.geometries.addTo(t)),this.$refs.mapContainer.style.width=this.leafletOptions.width,this.$refs.mapContainer.style.height=this.leafletOptions.height,t.invalidateSize(!1),this.updateMapView(),"function"===typeof this.mapOptions.onAfterMapInit&&this.mapOptions.onAfterMapInit(t,this.map.geometries),window.L=e,!0}catch(n){return o.error(n),window.L=e,!1}},updateMapView(){if(this.map&&this.map.geometries){var e=this.map.geometries.getBounds(),t=this.map.instance.getBoundsZoom(e),s=Math.min(t,11);t>8?s-=3:t>5?s-=2:t>2&&s--,this.map.instance.fitBounds(e),this.map.instance.setZoom(s),this.map.instance.once("moveend zoomend",(()=>this.map.instance.invalidateSize(!1)))}}}}},46166:(e,t,s)=>{var i=s(25108),a=s(74247);const r="1.0.0",n=!0,o={datacube:"https://stac-extensions.github.io/datacube/v1.0.0/schema.json",eo:"https://stac-extensions.github.io/eo/v1.0.0/schema.json",file:"https://stac-extensions.github.io/file/v1.0.0/schema.json","item-assets":"https://stac-extensions.github.io/item-assets/v1.0.0/schema.json",label:"https://stac-extensions.github.io/label/v1.0.0/schema.json",pointcloud:"https://stac-extensions.github.io/pointcloud/v1.0.0/schema.json",processing:"https://stac-extensions.github.io/processing/v1.0.0/schema.json",projection:"https://stac-extensions.github.io/projection/v1.0.0/schema.json",raster:"https://stac-extensions.github.io/raster/v1.0.0/schema.json",sar:"https://stac-extensions.github.io/sar/v1.0.0/schema.json",sat:"https://stac-extensions.github.io/sat/v1.0.0/schema.json",scientific:"https://stac-extensions.github.io/scientific/v1.0.0/schema.json",timestamps:"https://stac-extensions.github.io/timestamps/v1.0.0/schema.json",version:"https://stac-extensions.github.io/version/v1.0.0/schema.json",view:"https://stac-extensions.github.io/view/v1.0.0/schema.json"},l={itemAndCollection:{"cube:":o.datacube,"eo:":o.eo,"file:":o.file,"label:":o.label,"pc:":o.pointcloud,"processing:":o.processing,"proj:":o.projection,"raster:":o.raster,"sar:":o.sar,"sat:":o.sat,"sci:":o.scientific,"view:":o.view,version:o.version,deprecated:o.version,published:o.timestamps,expires:o.timestamps,unpublished:o.timestamps},catalog:{},collection:{item_assets:o["item-assets"]},item:{}};l.collection=Object.assign(l.collection,l.itemAndCollection),l.item=Object.assign(l.item,l.itemAndCollection);var m={version:r,set(e){e||(e="0.6.0"),m.version=e},before(e){return a.compare(m.version,e,"<")}},c={type(e){let t=typeof e;if("object"===t){if(null===e)return"null";if(Array.isArray(e))return"array"}return t},is(e,t){return c.type(e)===t},isDefined(e){return"undefined"!==typeof e},isObject(e){return"object"===typeof e&&e===Object(e)&&!Array.isArray(e)},rename(e,t,s){return"undefined"!==typeof e[t]&&"undefined"===typeof e[s]&&(e[s]=e[t],delete e[t],!0)},toArray(e,t){return"undefined"!==typeof e[t]&&!Array.isArray(e[t])&&(e[t]=[e[t]],!0)},flattenArray(e,t,s,i=!1){if(Array.isArray(e[t])){for(let a in e[t])if("string"===typeof s[a]){let r=e[t][a];e[s[a]]=i?[r]:r}return delete e[t],!0}return!1},flattenOneElementArray(e,t,s=!1){return!(!s&&Array.isArray(e[t]))||1===e[t].length&&(e[t]=e[t][0],!0)},removeFromArray(e,t,s){if(Array.isArray(e[t])){let i=e[t].indexOf(s);return i>-1&&e[t].splice(i,1),!0}return!1},addToArrayIfNotExists(e,t,s){if(Array.isArray(e[t])){let i=e[t].indexOf(s);return-1===i&&e[t].push(s),e[t].sort(),!0}return!1},ensure(e,t,s){return c.type(s)!==c.type(e[t])&&(e[t]=s),!0},addExtension(e,t){return!c.isObject(e)||c.addToArrayIfNotExists(e,"stac_extensions",t)&&n},removeExtension(e,t){return!c.isObject(e)||c.removeFromArray(e,"stac_extensions",t)&&n},migrateExtensionShortnames(e){let t=Object.keys(o),s=Object.values(o);return c.mapValues(e,"stac_extensions",t,s)},populateExtensions(e,t){let s=[];"catalog"!=t&&"collection"!=t||s.push(e),"item"!=t&&"collection"!=t||!c.isObject(e.assets)||(s=s.concat(Object.values(e.assets))),"collection"==t&&c.isObject(e.item_assets)&&(s=s.concat(Object.values(e.item_assets))),"collection"==t&&c.isObject(e.summaries)&&(s=s.concat(Object.values(e.summaries))),"item"==t&&c.isObject(e.properties)&&s.push(e.properties);for(let i of s)Object.keys(i).forEach((s=>{let i=s.match(/^(\w+:|[^:]+$)/i);if(Array.isArray(i)){let s=l[t][i[0]];c.is(s,"string")&&c.addExtension(e,s)}}))},mapValues(e,t,s,i){let a=e=>{let t=s.indexOf(e);return t>=0?i[t]:e};return Array.isArray(e[t])?e[t]=e[t].map(a):"undefined"!==typeof e[t]&&(e[t]=a(e[t])),!0},mapObject(e,t){for(let s in e)e[s]=t(e[s],s)},moveTo(e,t,s,i=!1,a=!1){let r;return r=i?a?e=>Array.isArray(e):e=>Array.isArray(e)&&1===e.length:c.isDefined,!!r(e[t])&&(s[t]=i&&!a?e[t][0]:e[t],delete e[t],!0)},runAll(e,t,s=null){for(let i in e)i.startsWith("migrate")||e[i](t,s)},toUTC(e,t){if("string"===typeof e[t])try{return e[t]=this.toISOString(e[t]),!0}catch(s){}return delete e[t],!1},toISOString(e){return e instanceof Date||(e=new Date(e)),e.toISOString().replace(".000","")}},p={hexToUint8(e){if(0===e.length||e.length%2!==0)throw new Error(`The string "${e}" is not valid hex.`);return new Uint8Array(e.match(/.{1,2}/g).map((e=>parseInt(e,16))))},uint8ToHex(e){return e.reduce(((e,t)=>e+t.toString(16).padStart(2,"0")),"")},toMultihash(e,t,a){if(!c.is(e[t],"string"))return!1;try{const i=s(18370),r=i.encode(p.hexToUint8(e[t]),a);return e[t]=p.uint8ToHex(r),!0}catch(r){return i.warn(r),!1}}},u={migrate(e,t=!0){m.set(e.stac_version),t&&(e.stac_version=r),e.type="Catalog",m.before("1.0.0-rc.1")&&c.migrateExtensionShortnames(e),c.ensure(e,"id",""),c.ensure(e,"description",""),c.ensure(e,"links",[]),c.runAll(u,e,e),c.ensure(e,"stac_extensions",[]),m.before("0.8.0")&&c.populateExtensions(e,"catalog")},openeo(e){c.rename(e,"api_version","openeo:api_version"),c.rename(e,"backend_version","openeo:backend_version"),c.rename(e,"production","openeo:production"),c.rename(e,"endpoints","openeo:endpoints"),c.rename(e,"billing","openeo:billing")}},h={migrate(e,t=!0){u.migrate(e,t),e.type="Collection",m.before("1.0.0-rc.1")&&c.migrateExtensionShortnames(e),c.ensure(e,"license","proprietary"),c.ensure(e,"extent",{spatial:{bbox:[]},temporal:{interval:[]}}),c.runAll(h,e,e),c.isObject(e.properties)&&(c.removeFromArray(e,"stac_extensions","commons"),delete e.properties),m.before("0.8.0")&&c.populateExtensions(e,"collection"),m.before("1.0.0-beta.1")&&c.mapValues(e,"stac_extensions",["assets"],["item-assets"])},extent(e){if(c.ensure(e,"extent",{}),m.before("0.8.0")&&(Array.isArray(e.extent.spatial)&&(e.extent.spatial={bbox:[e.extent.spatial]}),Array.isArray(e.extent.temporal)&&(e.extent.temporal={interval:[e.extent.temporal]})),c.ensure(e.extent,"spatial",{}),c.ensure(e.extent.spatial,"bbox",[]),c.ensure(e.extent,"temporal",{}),c.ensure(e.extent.temporal,"interval",[]),m.before("1.0.0-rc.3")){if(e.extent.temporal.interval.length>1){let s,i;for(let a of e.extent.temporal.interval){if(null===a[0])s=null;else if("string"===typeof a[0]&&null!==s)try{let e=new Date(a[0]);("undefined"===typeof s||e<s)&&(s=e)}catch(t){}if(null===a[1])i=null;else if("string"===typeof a[1]&&null!==i)try{let e=new Date(a[1]);("undefined"===typeof i||e>i)&&(i=e)}catch(t){}}e.extent.temporal.interval.unshift([s?c.toISOString(s):null,i?c.toISOString(i):null])}if(e.extent.spatial.bbox.length>1){let t=e.extent.spatial.bbox.reduce(((e,t)=>Array.isArray(t)?Math.max(t.length,e):e),4);if(t>=4){let s=new Array(t).fill(null),i=t/2;for(let t of e.extent.spatial.bbox){if(!Array.isArray(t)||t.length<4)break;for(let e in t){let a=t[e];null===s[e]?s[e]=a:s[e]=e<i?Math.min(a,s[e]):Math.max(a,s[e])}}-1===s.findIndex((e=>null===e))&&e.extent.spatial.bbox.unshift(s)}}}},collectionAssets(e){m.before("1.0.0-rc.1")&&c.removeExtension(e,"collection-assets"),f.migrateAll(e)},itemAsset(e){m.before("1.0.0-beta.2")&&c.rename(e,"item_assets","assets"),f.migrateAll(e,"item_assets")},summaries(e){if(c.ensure(e,"summaries",{}),m.before("0.8.0")&&c.isObject(e.other_properties)){for(let t in e.other_properties){let s=e.other_properties[t];Array.isArray(s.extent)&&2===s.extent.length?e.summaries[t]={minimum:s.extent[0],maximum:s.extent[1]}:Array.isArray(s.values)&&(s.values.filter((e=>Array.isArray(e))).length===s.values.length?e.summaries[t]=s.values.reduce(((e,t)=>e.concat(t)),[]):e.summaries[t]=s.values)}delete e.other_properties}if(m.before("1.0.0-beta.1")&&c.isObject(e.properties)&&!e.links.find((e=>["child","item"].includes(e.rel))))for(let t in e.properties){let s=e.properties[t];Array.isArray(s)||(s=[s]),e.summaries[t]=s}m.before("1.0.0-rc.1")&&c.mapObject(e.summaries,(e=>(c.rename(e,"min","minimum"),c.rename(e,"max","maximum"),e))),b.migrate(e.summaries),c.moveTo(e.summaries,"sci:doi",e,!0)&&c.addExtension(e,o.scientific),c.moveTo(e.summaries,"sci:publications",e,!0,!0)&&c.addExtension(e,o.scientific),c.moveTo(e.summaries,"sci:citation",e,!0)&&c.addExtension(e,o.scientific),c.moveTo(e.summaries,"cube:dimensions",e,!0)&&c.addExtension(e,o.datacube),0===Object.keys(e.summaries).length&&delete e.summaries}},d={migrate(e,t=null,s=!0){m.set(e.stac_version),s&&(e.stac_version=r),m.before("1.0.0-rc.1")&&c.migrateExtensionShortnames(e),c.ensure(e,"id",""),c.ensure(e,"type","Feature"),c.isObject(e.geometry)||(e.geometry=null),null!==e.geometry&&c.ensure(e,"bbox",[]),c.ensure(e,"properties",{}),c.ensure(e,"links",[]),c.ensure(e,"assets",{});let i=!1;c.isObject(t)&&c.isObject(t.properties)&&(c.removeFromArray(e,"stac_extensions","commons"),e.properties=Object.assign({},t.properties,e.properties),i=!0),c.runAll(d,e,e),b.migrate(e.properties,e),f.migrateAll(e),c.ensure(e,"stac_extensions",[]),(m.before("0.8.0")||i)&&c.populateExtensions(e,"item")}},f={migrateAll(e,t="assets"){for(let s in e[t])f.migrate(e[t][s],e)},migrate(e,t){c.runAll(f,e,t),b.migrate(e,t)},mediaTypes(e){c.is(e.type,"string")&&c.mapValues(e,"type",["image/vnd.stac.geotiff","image/vnd.stac.geotiff; cloud-optimized=true"],["image/tiff; application=geotiff","image/tiff; application=geotiff; profile=cloud-optimized"])},eo(e,t){let s=c.isObject(t.properties)&&Array.isArray(t.properties["eo:bands"])?t.properties["eo:bands"]:[];if(Array.isArray(e["eo:bands"]))for(let i in e["eo:bands"]){let t=e["eo:bands"][i];c.is(t,"number")&&c.isObject(s[t])?t=s[t]:c.isObject(t)||(t={}),e["eo:bands"][i]=t}}},b={migrate(e,t){c.runAll(b,e,t)},_commonMetadata(e){m.before("1.0.0-rc.3")&&(c.toUTC(e,"created"),c.toUTC(e,"updated"))},_timestamps(e){c.toUTC(e,"published"),c.toUTC(e,"expires"),c.toUTC(e,"unpublished")},_versioningIndicator(e){},checksum(e,t){m.before("0.9.0")&&(c.rename(e,"checksum:md5","checksum:multihash")&&p.toMultihash(e,"checksum:multihash","md5"),c.rename(e,"checksum:sha1","checksum:multihash")&&p.toMultihash(e,"checksum:multihash","sha1"),c.rename(e,"checksum:sha2","checksum:multihash")&&p.toMultihash(e,"checksum:multihash","sha2-256"),c.rename(e,"checksum:sha3","checksum:multihash")&&p.toMultihash(e,"checksum:multihash","sha3-256")),m.before("1.0.0-rc.1")&&c.rename(e,"checksum:multihash","file:checksum")&&c.addExtension(t,o.file)},cube(){},dtr(e,t){m.before("0.9.0")&&(c.rename(e,"dtr:start_datetime","start_datetime"),c.rename(e,"dtr:end_datetime","end_datetime"),c.removeExtension(t,"datetime-range"))},eo(e,t){m.before("0.9.0")&&(c.rename(e,"eo:epsg","proj:epsg")&&c.addExtension(t,o.projection),c.rename(e,"eo:platform","platform"),c.rename(e,"eo:instrument","instruments")&&c.toArray(e,"instruments"),c.rename(e,"eo:constellation","constellation"),c.rename(e,"eo:off_nadir","view:off_nadir")&&c.addExtension(t,o.view),c.rename(e,"eo:azimuth","view:azimuth")&&c.addExtension(t,o.view),c.rename(e,"eo:incidence_angle","view:incidence_angle")&&c.addExtension(t,o.view),c.rename(e,"eo:sun_azimuth","view:sun_azimuth")&&c.addExtension(t,o.view),c.rename(e,"eo:sun_elevation","view:sun_elevation")&&c.addExtension(t,o.view)),m.before("1.0.0-beta.1")&&c.rename(e,"eo:gsd","gsd")},label(e){m.before("0.8.0")&&(c.rename(e,"label:property","label:properties"),c.rename(e,"label:task","label:tasks"),c.rename(e,"label:overview","label:overviews")&&c.toArray(e,"label:overviews"),c.rename(e,"label:method","label:methods"),c.toArray(e,"label:classes"))},pc(e){m.before("0.8.0")&&c.rename(e,"pc:schema","pc:schemas")},proj(e){},sar(e,t){let s=!t;c.rename(e,"sar:incidence_angle","view:incidence_angle")&&c.addExtension(t,o.view),c.rename(e,"sar:pass_direction","sat:orbit_state")&&c.mapValues(e,"sat:orbit_state",[null],["geostationary"])&&c.addExtension(t,o.sat),m.before("0.7.0")&&(c.flattenArray(e,"sar:resolution",["sar:resolution_range","sar:resolution_azimuth"],s),c.flattenArray(e,"sar:pixel_spacing",["sar:pixel_spacing_range","sar:pixel_spacing_azimuth"],s),c.flattenArray(e,"sar:looks",["sar:looks_range","sar:looks_azimuth","sar:looks_equivalent_number"],s),c.rename(e,"sar:off_nadir","view:off_nadir")&&c.addExtension(t,o.view)),m.before("0.9.0")&&(c.rename(e,"sar:platform","platform"),c.rename(e,"sar:instrument","instruments")&&c.toArray(e,"instruments"),c.rename(e,"sar:constellation","constellation"),c.rename(e,"sar:type","sar:product_type"),c.rename(e,"sar:polarization","sar:polarizations"),c.flattenOneElementArray(e,"sar:absolute_orbit",s)&&c.rename(e,"sar:absolute_orbit","sat:absolute_orbit")&&c.addExtension(t,o.sat),c.flattenOneElementArray(e,"sar:relative_orbit",s)&&c.rename(e,"sar:relative_orbit","sat:relative_orbit")&&c.addExtension(t,o.sat))},sat(e){m.before("0.9.0")&&(c.rename(e,"sat:off_nadir_angle","sat:off_nadir"),c.rename(e,"sat:azimuth_angle","sat:azimuth"),c.rename(e,"sat:sun_azimuth_angle","sat:sun_azimuth"),c.rename(e,"sat:sun_elevation_angle","sat:sun_elevation"))},sci(e){},item(e){m.before("0.8.0")&&(c.rename(e,"item:license","license"),c.rename(e,"item:providers","providers"))},view(e){}},g={item(e,t=null,s=!0){return d.migrate(e,t,s),e},catalog(e,t=!0){return u.migrate(e,t),e},collection(e,t=!0){return h.migrate(e,t),e},stac(e,t=!0){return"Feature"===e.type?g.item(e,null,t):"Collection"===e.type||c.isDefined(e.extent)||c.isDefined(e.license)?g.collection(e,t):g.catalog(e,t)}};e.exports=g},62257:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var i=function(){var e=this,t=e._self._c;return t("article",{staticClass:"vue-component stac item"},[e._t("title",(function(){return[t("a",{staticClass:"anchor",attrs:{name:e.stac.id}}),t("h2",[e._v(e._s(e.title))])]}),null,e.$props),e._t("before-description",null,null,e.$props),e.properties.description?t("summary",{staticClass:"description"},[t("Description",{attrs:{description:e.properties.description}}),e.properties.deprecated?t("DeprecationNotice",{attrs:{entity:"item"}}):e._e(),e.stac["federation:missing"]?t("FederationMissingNotice",{attrs:{missing:e.stac["federation:missing"],federation:e.federation}}):e._e()],1):e._e(),e.thumbnails.length?t("section",{staticClass:"preview"},[t("h3",[e._v("Previews")]),t("div",{staticClass:"thumbnails"},e._l(e.thumbnails,(function(e){return t("a",{key:e.href,attrs:{href:e.href,target:"_blank"}},[t("img",{attrs:{src:e.href,title:e.title,alt:e.title||"Preview"}})])})),0)]):e._e(),t("section",{staticClass:"metadata properties"},[e.thumbnails.length?t("h3",[e._v("Metadata")]):e._e(),e.stac.geometry||Array.isArray(e.stac.bbox)?e._t("location",(function(){return[t("div",{staticClass:"tabular wrap"},[t("label",[e._v("Location")]),t("div",{ref:"mapContainer",staticClass:"value map"},[e.map?e._e():[e._v(" Latitudes: "+e._s(e.stac.bbox[1])+" / "+e._s(e.stac.bbox[3])+", Longitudes: "+e._s(e.stac.bbox[0])+" / "+e._s(e.stac.bbox[2])+" ")]],2)])]}),{geometry:e.stac.geometry,bbox:e.stac.bbox,mapOptions:e.mapOptions}):e._e(),t("StacFields",{attrs:{type:"Item",metadata:e.stac,headingTag:"h4",ignore:e.ignoredFields}})],2),e.hasAssets?t("section",{staticClass:"assets"},[t("h3",[e._v("Assets")]),t("ul",{staticClass:"list"},e._l(e.stac.assets,(function(s,i){return t("StacAsset",{key:i,attrs:{asset:s,id:i,context:e.stac}})})),1)]):e._e(),t("section",{staticClass:"links"},[t("LinkList",{attrs:{links:e.stac.links,heading:"See Also",headingTag:"h3",ignoreRel:["self","parent","root","license","cite-as"]}})],1),e._t("end",null,null,e.$props)],2)},a=[],r=s(15554),n=s(27428),o=s(40465);const l={name:"Item",mixins:[r.Z,n.Z],props:{...r.Z.props,...n.Z.props},data(){return{ignoredFields:["title","description","deprecated","federation:missing"]}},computed:{properties(){return o.Z.isObject(this.stac.properties)?this.stac.properties:{}},title(){return this.properties.title?`${this.properties.title} (${this.stac.id})`:this.stac.id},showMap(){return Boolean(this.stac.geometry)}},methods:{addFeatures(){let e=this.map.leaflet.geoJSON(this.stac);return e.setStyle({color:"#3388ff",fillOpacity:.2}),e}}},m=l;var c=s(1001),p=(0,c.Z)(m,i,a,!1,null,null,null);const u=p.exports}}]);
//# sourceMappingURL=2257.3c01a2a4.js.map