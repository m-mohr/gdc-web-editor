"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[4258,8922,2720],{34023:(t,e,i)=>{i.d(e,{Z:()=>a});var n=i(10044),o=i(88775),s=function(t){t||(t={});var e=document.createElement("div");if(e.classList.add("ol-unselectable","ol-control","ol-bar"),t.className){var i=t.className.split(" ").filter((function(t){return t.length>0}));e.classList.add.apply(e.classList,i)}if(t.group&&e.classList.add("ol-group"),o.Z.call(this,{element:e,target:t.target}),this.set("toggleOne",t.toggleOne),this.set("autoDeactivate",t.autoDeactivate),this.controls_=[],t.controls instanceof Array)for(var n=0;n<t.controls.length;n++)this.addControl(t.controls[n])};(0,n.Z)(s,o.Z),s.prototype.setVisible=function(t){this.element.style.display=t?"":"none"},s.prototype.getVisible=function(){return"none"!=this.element.style.display},s.prototype.setMap=function(t){o.Z.prototype.setMap.call(this,t);for(var e=0;e<this.controls_.length;e++){var i=this.controls_[e];i.setMap(t)}},s.prototype.getControls=function(){return this.controls_},s.prototype.setPosition=function(t){this.element.classList.remove("ol-left","ol-top","ol-bottom","ol-right"),t=t.split("-");for(var e=0;e<t.length;e++)switch(t[e]){case"top":case"left":case"bottom":case"right":this.element.classList.add("ol-"+t[e]);break;default:break}},s.prototype.addControl=function(t){this.controls_.push(t),t.setTarget(this.element),this.getMap()&&this.getMap().addControl(t),t.on("change:active",function(e){this.onActivateControl_(e,t)}.bind(this)),t.getActive&&this.onActivateControl_({target:t,active:t.getActive()},t)},s.prototype.deactivateControls=function(t){for(var e=0;e<this.controls_.length;e++)this.controls_[e]!==t&&this.controls_[e].setActive&&this.controls_[e].setActive(!1)},s.prototype.getActiveControls=function(){for(var t,e=[],i=0;t=this.controls_[i];i++)t.getActive&&t.getActive()&&e.push(t);return e},s.prototype.setActive=function(t){if(!t&&this.get("autoDeactivate")&&this.deactivateControls(),t)for(var e,i=this.getControls(),n=0;e=i[n];n++)e.get("autoActivate")&&e.setActive(!0)},s.prototype.onActivateControl_=function(t,e){if(this.get("toggleOne"))if(t.active){var i;for(i=0;i<this.controls_.length;i++)if(this.controls_[i]===e)break;if(i==this.controls_.length)return;this.deactivateControls(this.controls_[i])}else if(!this.getActiveControls().length)for(var n,o=0;n=this.controls_[o];o++)if(n.get("autoActivate")){n.setActive(!0);break}},s.prototype.getControlsByName=function(t){var e=this.getControls();return e.filter((function(e){return e.get("name")===t}))};const a=s},65561:(t,e,i)=>{i.d(e,{Z:()=>r});var n=i(10044),o=i(88775),s=i(52463),a=function(t){t=t||{};var e=document.createElement("div");e.className=(t.className||"")+" ol-button ol-unselectable ol-control";var i=this,n=this.button_=document.createElement(/ol-text-button/.test(t.className)?"div":"button");n.type="button",t.title&&(n.title=t.title),t.name&&(n.name=t.name),t.html instanceof Element?n.appendChild(t.html):n.innerHTML=t.html||"";var s=function(e){e&&e.preventDefault&&(e.preventDefault(),e.stopPropagation()),t.handleClick&&t.handleClick.call(i,e)};n.addEventListener("click",s),e.appendChild(n),!t.title&&n.firstElementChild&&(n.title=n.firstElementChild.title),o.Z.call(this,{element:e,target:t.target}),t.title&&this.set("title",t.title),t.title&&this.set("title",t.title),t.name&&this.set("name",t.name)};(0,n.Z)(a,o.Z),a.prototype.setVisible=function(t){t?s.Z.show(this.element):s.Z.hide(this.element)},a.prototype.setTitle=function(t){this.button_.setAttribute("title",t)},a.prototype.setHtml=function(t){s.Z.setHTML(this.button_,t)},a.prototype.getButtonElement=function(){return this.button_};const r=a},29169:(t,e,i)=>{i.d(e,{Z:()=>Z});var n=i(10044),o=i(98683),s=i(35010),a=i(92083),r=i(2033),c=i(7517),l=i(34023),h=i(65561),g=i(50164),f=i(68457),d=i(61806),p=i(52463),u=i(2884),_=i(65310),w=i(73159),m=i(43179),v=i(11308),D=i(60900),y=function(t){t=t||{},t.interactions=t.interactions||{},l.Z.call(this,{className:(t.className?t.className+" ":"")+"ol-editbar",toggleOne:!0,target:t.target}),this._source=t.source,this._interactions={},this._setSelectInteraction(t),!1!==t.edition&&this._setEditInteraction(t),this._setModifyInteraction(t)};(0,n.Z)(y,l.Z),y.prototype.setMap=function(t){this.getMap()&&(this._interactions.Delete&&this.getMap().removeInteraction(this._interactions.Delete),this._interactions.ModifySelect&&this.getMap().removeInteraction(this._interactions.ModifySelect)),l.Z.prototype.setMap.call(this,t),this.getMap()&&(this._interactions.Delete&&this.getMap().addInteraction(this._interactions.Delete),this._interactions.ModifySelect&&this.getMap().addInteraction(this._interactions.ModifySelect))},y.prototype.getInteraction=function(t){return this._interactions[t]},y.prototype._getTitle=function(t){if(t)return t.get?t.get("title"):"string"===typeof t?t:t.title},y.prototype._setSelectInteraction=function(t){var e,i=this,n=new l.Z;if(!1!==t.interactions.Delete){t.interactions.Delete instanceof d.Z?this._interactions.Delete=t.interactions.Delete:this._interactions.Delete=new d.Z;var s=this._interactions.Delete;s.setActive(!1),this.getMap()&&this.getMap().addInteraction(s),n.addControl(new h.Z({className:"ol-delete",title:this._getTitle(t.interactions.Delete)||"Delete",name:"Delete",handleClick:function(t){s.delete(e.getInteraction().getFeatures());var i={type:"select",selected:[],deselected:e.getInteraction().getFeatures().getArray().slice(),mapBrowserEvent:t.mapBrowserEvent};e.getInteraction().getFeatures().clear(),e.getInteraction().dispatchEvent(i)}}))}if(!1!==t.interactions.Info&&n.addControl(new h.Z({className:"ol-info",name:"Info",title:this._getTitle(t.interactions.Info)||"Show informations",handleClick:function(){i.dispatchEvent({type:"info",features:e.getInteraction().getFeatures()})}})),!1!==t.interactions.Select){t.interactions.Select instanceof c.Z?this._interactions.Select=t.interactions.Select:this._interactions.Select=new c.Z({condition:o.V4});var a=this._interactions.Select;e=new g.Z({className:"ol-selection",name:"Select",title:this._getTitle(t.interactions.Select)||"Select",interaction:a,bar:n.getControls().length?n:void 0,autoActivate:!0,active:!0}),this.addControl(e),a.on("change:active",(function(){a.getActive()||a.getFeatures().clear()}))}},y.prototype._setEditInteraction=function(t){if(!1!==t.interactions.DrawPoint){t.interactions.DrawPoint instanceof s.ZP?this._interactions.DrawPoint=t.interactions.DrawPoint:this._interactions.DrawPoint=new s.ZP({type:"Point",source:this._source});var e=new g.Z({className:"ol-drawpoint",name:"DrawPoint",title:this._getTitle(t.interactions.DrawPoint)||"Point",interaction:this._interactions.DrawPoint});this.addControl(e)}if(!1!==t.interactions.DrawLine){t.interactions.DrawLine instanceof s.ZP?this._interactions.DrawLine=t.interactions.DrawLine:this._interactions.DrawLine=new s.ZP({type:"LineString",source:this._source,geometryFunction:function(t,e){return e?e.setCoordinates(t):e=new a.Z(t),this.nbpts=e.getCoordinates().length,e}});var i=new g.Z({className:"ol-drawline",title:this._getTitle(t.interactions.DrawLine)||"LineString",name:"DrawLine",interaction:this._interactions.DrawLine,bar:new l.Z({controls:[new f.Z({html:this._getTitle(t.interactions.UndoDraw)||"undo",title:this._getTitle(t.interactions.UndoDraw)||"delete last point",handleClick:function(){i.getInteraction().nbpts>1&&i.getInteraction().removeLastPoint()}}),new f.Z({html:this._getTitle(t.interactions.FinishDraw)||"finish",title:this._getTitle(t.interactions.FinishDraw)||"finish",handleClick:function(){i.getInteraction().nbpts>2&&i.getInteraction().finishDrawing()}})]})});this.addControl(i)}if(!1!==t.interactions.DrawPolygon&&(t.interactions.DrawPolygon instanceof s.ZP?this._interactions.DrawPolygon=t.interactions.DrawPolygon:this._interactions.DrawPolygon=new s.ZP({type:"Polygon",source:this._source,geometryFunction:function(t,e){return this.nbpts=t[0].length,e?e.setCoordinates([t[0].concat([t[0][0]])]):e=new r.ZP(t),e}}),this._setDrawPolygon("ol-drawpolygon",this._interactions.DrawPolygon,this._getTitle(t.interactions.DrawPolygon)||"Polygon","DrawPolygon",t)),!1!==t.interactions.DrawHole&&(t.interactions.DrawHole instanceof D.Z?this._interactions.DrawHole=t.interactions.DrawHole:this._interactions.DrawHole=new D.Z,this._setDrawPolygon("ol-drawhole",this._interactions.DrawHole,this._getTitle(t.interactions.DrawHole)||"Hole","DrawHole",t)),!1!==t.interactions.DrawRegular){var n={pts:"pts",circle:"circle"};t.interactions.DrawRegular instanceof v.Z?(this._interactions.DrawRegular=t.interactions.DrawRegular,n.pts=this._interactions.DrawRegular.get("ptsLabel")||n.pts,n.circle=this._interactions.DrawRegular.get("circleLabel")||n.circle):(this._interactions.DrawRegular=new v.Z({source:this._source,sides:4}),t.interactions.DrawRegular&&(n.pts=t.interactions.DrawRegular.ptsLabel||n.pts,n.circle=t.interactions.DrawRegular.circleLabel||n.circle));var o=this._interactions.DrawRegular,c=document.createElement("DIV"),h=p.Z.create("DIV",{parent:c});p.Z.addListener(h,["click","touchstart"],function(){var t=o.getSides()-1;t<2&&(t=2),o.setSides(t),d.textContent=t>2?t+" "+n.pts:n.circle}.bind(this));var d=p.Z.create("TEXT",{html:"4 "+n.pts,parent:c}),u=p.Z.create("DIV",{parent:c});p.Z.addListener(u,["click","touchstart"],function(){var t=o.getSides()+1;t<3&&(t=3),o.setSides(t),d.textContent=t+" "+n.pts}.bind(this));var _=new g.Z({className:"ol-drawregular",title:this._getTitle(t.interactions.DrawRegular)||"Regular",name:"DrawRegular",interaction:this._interactions.DrawRegular,bar:new l.Z({controls:[new f.Z({html:c})]})});this.addControl(_)}},y.prototype._setDrawPolygon=function(t,e,i,n,o){var s=new g.Z({className:t,name:n,title:i,interaction:e,bar:new l.Z({controls:[new f.Z({html:this._getTitle(o.interactions.UndoDraw)||"undo",title:this._getTitle(o.interactions.UndoDraw)||"undo last point",handleClick:function(){s.getInteraction().nbpts>1&&s.getInteraction().removeLastPoint()}}),new f.Z({html:this._getTitle(o.interactions.FinishDraw)||"finish",title:this._getTitle(o.interactions.FinishDraw)||"finish",handleClick:function(){s.getInteraction().nbpts>3&&s.getInteraction().finishDrawing()}})]})});return this.addControl(s),s},y.prototype._setModifyInteraction=function(t){if(!1!==t.interactions.ModifySelect&&!1!==t.interactions.Select&&(t.interactions.ModifySelect instanceof m.Z?this._interactions.ModifySelect=t.interactions.ModifySelect:this._interactions.ModifySelect=new m.Z({features:this.getInteraction("Select").getFeatures()}),this.getMap()&&this.getMap().addInteraction(this._interactions.ModifySelect),this._interactions.ModifySelect.setActive(this._interactions.Select.getActive()),this._interactions.Select.on("change:active",function(){this._interactions.ModifySelect.setActive(this._interactions.Select.getActive())}.bind(this))),!1!==t.interactions.Transform){t.interactions.Transform instanceof w.Z?this._interactions.Transform=t.interactions.Transform:this._interactions.Transform=new w.Z({addCondition:o.vY});var e=new g.Z({html:"<i></i>",className:"ol-transform",title:this._getTitle(t.interactions.Transform)||"Transform",name:"Transform",interaction:this._interactions.Transform});this.addControl(e)}if(!1!==t.interactions.Split){t.interactions.Split instanceof _.Z?this._interactions.Split=t.interactions.Split:this._interactions.Split=new _.Z({sources:this._source});var i=new g.Z({className:"ol-split",title:this._getTitle(t.interactions.Split)||"Split",name:"Split",interaction:this._interactions.Split});this.addControl(i)}if(!1!==t.interactions.Offset){t.interactions.Offset instanceof u.Z?this._interactions.Offset=t.interactions.Offset:this._interactions.Offset=new u.Z({source:this._source});var n=new g.Z({html:"<i></i>",className:"ol-offset",title:this._getTitle(t.interactions.Offset)||"Offset",name:"Offset",interaction:this._interactions.Offset});this.addControl(n)}};const Z=y}}]);
//# sourceMappingURL=4258.d27872a1.js.map