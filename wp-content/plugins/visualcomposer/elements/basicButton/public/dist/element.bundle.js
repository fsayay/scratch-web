(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./basicButton/index.js":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/vc-cake/index.js"),s=n.n(o),a=n("./node_modules/@babel/runtime/helpers/extends.js"),c=n.n(a),l=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),i=n.n(l),r=n("./node_modules/@babel/runtime/helpers/createClass.js"),u=n.n(r),b=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),d=n.n(b),v=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),p=n.n(v),g=n("./node_modules/@babel/runtime/helpers/inherits.js"),y=n.n(g),m=n("./node_modules/react/index.js"),h=n.n(m),x=function(e){function t(){return i()(this,t),d()(this,p()(t).apply(this,arguments))}return y()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.atts,o=e.editor,s=n.buttonUrl,a=n.buttonText,l=n.shape,i=n.alignment,r=n.customClass,u=n.toggleCustomHover,b=n.metaCustomId,d=n.size,v=n.toggleStretchButton,p="vce-button--style-basic-container",g="vce-button--style-basic-wrapper vce",y="vce-button--style-basic",m=a,x={},f="button";s&&s.url&&(f="a",x={href:s.url,title:s.title,target:s.targetBlank?"_blank":void 0,rel:s.relNofollow?"nofollow":void 0});"string"==typeof r&&r&&(p+=" "+r),l&&(y+=" vce-button--style-basic--border-".concat(l)),i&&(p+=" vce-button--style-basic-container--align-".concat(i)),d&&(y+=" vce-button--style-basic--size-".concat(d)),v&&(g+=" vce-button--style-basic-wrapper--stretched");var C=this.getMixinData("basicColor");C&&(y+=" vce-button--style-basic--color-".concat(C.selector)),u&&(C=this.getMixinData("basicHoverColor"))&&(y+=" vce-button--style-basic--hover-color-".concat(C.selector)),b&&(x.id=b);var k=this.applyDO("margin"),w=this.applyDO("padding border background animation");return h.a.createElement("div",c()({className:p},o),h.a.createElement("span",c()({className:g,id:"el-"+t},k),h.a.createElement(f,c()({className:y},x,w),m)))}}]),t}(s.a.getService("api").elementComponent);(0,s.a.getService("cook").add)(n("./basicButton/settings.json"),function(e){e.add(x)},{css:n("./node_modules/raw-loader/index.js!./basicButton/styles.css"),editorCss:n("./node_modules/raw-loader/index.js!./basicButton/editor.css"),mixins:{basicColor:{mixin:n("./node_modules/raw-loader/index.js!./basicButton/cssMixins/basicColor.pcss")},basicHoverColor:{mixin:n("./node_modules/raw-loader/index.js!./basicButton/cssMixins/basicHoverColor.pcss")}}},"")},"./basicButton/settings.json":function(e){e.exports={groups:{type:"string",access:"protected",value:"Buttons"},buttonUrl:{type:"url",access:"public",value:{url:"",title:"",targetBlank:!1,relNofollow:!1},options:{label:"Link selection"}},toggleCustomHover:{type:"toggle",access:"public",value:!1,options:{label:"Custom hover colors"}},hoverColor:{type:"color",access:"public",value:"#fff",options:{label:"Title hover color",cssMixin:{mixin:"basicHoverColor",property:"hoverColor",namePattern:"[\\da-f]+"},onChange:{rules:{toggleCustomHover:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},hoverBackground:{type:"color",access:"public",value:"#4d70ac",options:{label:"Background hover color",cssMixin:{mixin:"basicHoverColor",property:"hoverBackground",namePattern:"[\\da-f]+"},onChange:{rules:{toggleCustomHover:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},buttonText:{type:"string",access:"public",value:"Apply Now",options:{label:"Button text",dynamicField:!0}},color:{type:"color",access:"public",value:"#fff",options:{label:"Title color",cssMixin:{mixin:"basicColor",property:"color",namePattern:"[\\da-f]+"}}},background:{type:"color",access:"public",value:"#557cbf",options:{label:"Background color",cssMixin:{mixin:"basicColor",property:"background",namePattern:"[\\da-f]+"}}},shape:{type:"buttonGroup",access:"public",value:"square",options:{label:"Shape",values:[{label:"Square",value:"square",icon:"vcv-ui-icon-attribute-shape-square"},{label:"Rounded",value:"rounded",icon:"vcv-ui-icon-attribute-shape-rounded"},{label:"Round",value:"round",icon:"vcv-ui-icon-attribute-shape-round"}]}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["buttonText","buttonUrl","alignment","shape","size","toggleStretchButton","color","background","toggleCustomHover","hoverColor","hoverBackground","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General","Buttons"]},assetsLibrary:{access:"public",type:"string",value:["animate"]},alignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},size:{type:"buttonGroup",access:"public",value:"medium",options:{label:"Size",values:[{label:"Small",value:"small",text:"S"},{label:"Medium",value:"medium",text:"M"},{label:"Large",value:"large",text:"L"}]}},toggleStretchButton:{type:"toggle",access:"public",value:!1,options:{label:"Stretch button"}},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaBackendLabels:{type:"group",access:"protected",value:[{value:["buttonText","buttonUrl","background","shape"]}]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"basicButton"}}},"./node_modules/raw-loader/index.js!./basicButton/cssMixins/basicColor.pcss":function(e,t){e.exports=".vce-button--style-basic.vce-button--style-basic--color-$selector {\n  a&,\n  button& {\n    @if $color != false {\n      color: $color;\n    }\n    @if $background != false {\n      background-color: $background;\n    }\n    &:hover {\n      @if $color != false {\n        color: $color;\n      }\n      @if $background != false {\n        background-color: color($background shade(10%));\n      }\n    }\n    &:focus {\n      @if $color != false {\n        color: $color;\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./basicButton/cssMixins/basicHoverColor.pcss":function(e,t){e.exports=".vce-button--style-basic-container a.vce-button--style-basic.vce-button--style-basic--hover-color-$selector {\n  &:hover {\n    @if $hoverColor != false {\n      color: $hoverColor;\n    }\n    @if $hoverBackground != false {\n      background-color: $hoverBackground;\n    }\n  }\n}\n\n.vce-button--style-basic-container button.vce-button--style-basic.vce-button--style-basic--hover-color-$selector {\n  &:hover {\n    @if $hoverColor != false {\n      color: $hoverColor;\n    }\n    @if $hoverBackground != false {\n      background-color: $hoverBackground;\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./basicButton/editor.css":function(e,t){e.exports=".vce-button--style-basic-container {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./basicButton/styles.css":function(e,t){e.exports='/* ----------------------------------------------\n * Basic Button\n * ---------------------------------------------- */\n.vce-button--style-basic-container--align-left {\n  text-align: left;\n}\n.vce-button--style-basic-container--align-right {\n  text-align: right;\n}\n.vce-button--style-basic-container--align-center {\n  text-align: center;\n}\n.vce-button--style-basic-wrapper {\n  display: inline-block;\n  vertical-align: top;\n  max-width: 100%;\n}\n.vce-button--style-basic-wrapper .vce-button--style-basic {\n  box-shadow: none;\n}\n.vce-button--style-basic-wrapper .vce-button--style-basic:hover,\n.vce-button--style-basic-wrapper .vce-button--style-basic:focus,\n.vce-button--style-basic-wrapper .vce-button--style-basic:link {\n  box-shadow: none;\n}\n.vce-button--style-basic-wrapper--stretched {\n  width: 100%;\n}\n.vce-button--style-basic-wrapper--stretched .vce-button--style-basic {\n  width: 100%;\n}\na.vce-button--style-basic,\nbutton.vce-button--style-basic {\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  margin: 0;\n  max-width: 100%;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  white-space: normal;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: normal;\n  border-radius: 0;\n  transition: all 0.2s ease-in-out;\n}\na.vce-button--style-basic:hover,\nbutton.vce-button--style-basic:hover,\na.vce-button--style-basic:focus,\nbutton.vce-button--style-basic:focus {\n  text-decoration: none;\n  outline: none;\n}\nbutton.vce-button--style-basic {\n  -webkit-appearance: none;\n}\n.vce-button--style-basic.vce-button--style-basic--size-small {\n  font-size: 11px;\n  padding: 10px 30px;\n}\n.vce-button--style-basic.vce-button--style-basic--size-medium {\n  font-size: 16px;\n  padding: 15px 43px;\n}\n.vce-button--style-basic.vce-button--style-basic--size-large {\n  font-size: 21px;\n  padding: 20px 56px;\n}\na.vce-button--style-basic--border-rounded,\na.vce-button--style-basic--border-round,\na.vce-button--style-basic--border-square,\nbutton.vce-button--style-basic--border-rounded,\nbutton.vce-button--style-basic--border-round,\nbutton.vce-button--style-basic--border-square {\n  position: relative;\n  overflow: hidden;\n}\n.vce-button--style-basic--border-rounded,\na.vce-button--style-basic--border-rounded,\nbutton.vce-button--style-basic--border-rounded {\n  border-radius: 5px;\n}\n.vce-button--style-basic--border-round,\na.vce-button--style-basic--border-round,\nbutton.vce-button--style-basic--border-round {\n  border-radius: 4em;\n}\n.vce-button--style-basic--border-square,\na.vce-button--style-basic--border-square,\nbutton.vce-button--style-basic--border-square {\n  border-radius: 0;\n}\n.rtl.vce-button--style-basic,\n[dir="rlt"].vce-button--style-basic,\n.rtl .vce-button--style-basic,\n[dir="rlt"] .vce-button--style-basic {\n  direction: rtl;\n  unicode-bidi: embed;\n}\n.ltr.vce-button--style-basic,\n[dir="ltr"].vce-button--style-basic,\n.ltr .vce-button--style-basic,\n[dir="ltr"] .vce-button--style-basic {\n  direction: ltr;\n  unicode-bidi: normal;\n}\n'}},[["./basicButton/index.js"]]]);