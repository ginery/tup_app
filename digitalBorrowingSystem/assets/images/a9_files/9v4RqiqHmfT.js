if (self.CavalryLogger) { CavalryLogger.start_js(["EcYTd"]); }

__d("EncryptedImgUtils",[],(function(a,b,c,d,e,f){f.extractKey=a;f.isEncrypted=b;var g="ek",h=/^data\:/,i=/\?(ek\=|.*&ek\=)/;function a(a){var b=a.getQueryData(),c=b[g];delete b[g];a.setQueryData(b);return c}function b(a){return!h.test(a)&&i.test(a)}}),null);
__d("SubscriptionsHandler",["invariant"],(function(a,b,c,d,e,f,g){"use strict";function h(a){return a.remove||a.reset||a.unsubscribe||a.cancel||a.dispose}function i(a){h(a).call(a)}a=function(){function a(){this.$1=[]}var b=a.prototype;b.addSubscriptions=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];b.every(h)||g(0,3659);this.$1!=null?this.$1=this.$1.concat(b):b.forEach(i)};b.engage=function(){this.$1==null&&(this.$1=[])};b.release=function(){this.$1!=null&&(this.$1.forEach(i),this.$1=null)};b.releaseOne=function(a){var b=this.$1;if(b==null)return;var c=b.indexOf(a);c!==-1&&(i(a),b.splice(c,1),b.length===0&&(this.$1=null))};return a}();e.exports=a}),null);
__d("getImageSourceURLFromImageish",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){if(typeof a==="string")return a;return a!=null&&typeof a==="object"&&(!a.sprited&&a.uri&&typeof a.uri==="string")?a.uri:""}}),null);
__d("validateImageSrcPropType",["URI","coerceImageishSprited","getImageSourceURLFromImageish"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g;function a(a,c,d){a=a[c];return a==null||b("coerceImageishSprited")(a)||b("getImageSourceURLFromImageish")(a)!==""||a instanceof(g||(g=b("URI")))?null:new Error("Provided `"+c+"` to `"+d+"`. Must be `null`, `undefined`, a string, a `URI` or an `ix` call.")}}),null);
__d("warnUnsupportedProp",["warning"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c,d){b("warning")(!1,"%s component does not support prop `%s`.%s",a,c,d?" "+d:"")}}),null);
__d("ImageCore.react",["Bootloader","EncryptedImgUtils","FBLogger","React","SubscriptionsHandler","URI","coerceImageishSprited","coerceImageishURL","createCancelableFunction","getImageSourceURLFromImageish","ifRequired","joinClasses","validateImageSrcPropType","warnUnsupportedProp"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c={alt:""};function i(a){return a instanceof(g||(g=b("URI")))?a.toString():a}var j=function(c){babelHelpers.inheritsLoose(a,c);function a(){var a,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(a=d=c.call.apply(c,[this].concat(f))||this,d.$1=!1,d.$2=null,d.$3=new(b("SubscriptionsHandler"))(),d.state={decryptedSrc:null},a)||babelHelpers.assertThisInitialized(d)}var d=a.prototype;d.$4=function(a){var c=this;this.$2&&this.$2.cancel();var d=b("getImageSourceURLFromImageish")(this.props.encryptedSrc),e=b("createCancelableFunction")(function(a){d===b("getImageSourceURLFromImageish")(c.props.encryptedSrc)&&c.setState({decryptedSrc:a})});a.load(d,e);this.$3.addSubscriptions({remove:function(){e.cancel()}});this.$2=e};d.$5=function(){var a=this;b("ifRequired")("EncryptedImg",function(b){a.$4(b)},function(){if(a.$1)return;a.$1=!0;a.$3.addSubscriptions(b("Bootloader").loadModules(["EncryptedImg"],function(b){return a.$4(b)},"ImageCore.react"))})};d.componentDidMount=function(){this.$5()};d.componentDidUpdate=function(a){a.encryptedSrc!==this.props.encryptedSrc&&this.$5()};d.componentWillUnmount=function(){this.$3.release()};d.render=function(){var a=this.props,c=a.encryptedSrc,d=a.forwardedRef;a=babelHelpers.objectWithoutPropertiesLoose(a,["encryptedSrc","forwardedRef"]);var e=this.state.decryptedSrc;b("EncryptedImgUtils").isEncrypted(c)===!1&&(b("FBLogger")("image").mustfix("The `EncryptedImage` component was rendered with a non-encrypted image (%s). Only images that meet the encrypted image test (see `EncryptedImgUtils.isEncrypted()`) should be rendered with this component. Falling back to `ImageishRenderer`.",JSON.stringify(c)),e=c);return h.jsx(k,babelHelpers["extends"]({},a,{forwardedRef:d,src:e}))};return a}(h.Component);j.defaultProps=c;j.propTypes={encryptedSrc:b("validateImageSrcPropType")};function k(a){var c=a.forwardedRef;a=babelHelpers.objectWithoutPropertiesLoose(a,["forwardedRef"]);var d=b("joinClasses")(a.className,"img"),e=i(a.src);if(e==null)return h.jsx("img",babelHelpers["extends"]({},a,{className:d,ref:c}));var f=b("coerceImageishSprited")(e),g=!!f&&a.alt!=null&&String(a.alt)!==""?h.jsx("u",{children:a.alt}):null;if(typeof e==="string")return h.jsx("img",babelHelpers["extends"]({},a,{className:d,ref:c,src:e,children:g}));if(f){a.src;var j=a.style,k=babelHelpers.objectWithoutPropertiesLoose(a,["src","style"]);return h.jsx("i",babelHelpers["extends"]({},k,{className:b("joinClasses")(d,f.type==="css"?f.className:void 0),ref:c,style:f.type==="cssless"?babelHelpers["extends"]({},j,f.style):j,children:g}))}k=b("getImageSourceURLFromImageish")(e);f=b("coerceImageishURL")(e);return a.width===void 0&&a.height===void 0&&f?h.jsx("img",babelHelpers["extends"]({},a,{className:d,height:f.height,src:k,ref:c,width:f.width,children:g})):h.jsx("img",babelHelpers["extends"]({},a,{className:d,ref:c,src:k,children:g}))}k.defaultProps=c;k.propTypes={src:b("validateImageSrcPropType")};function a(a,c){Object.prototype.hasOwnProperty.call(a,"source")&&b("warnUnsupportedProp")("ImageCore","source","Did you mean `src`?");var d=i(a.src);d=b("getImageSourceURLFromImageish")(d);if(b("EncryptedImgUtils").isEncrypted(d)){a.src;var e=babelHelpers.objectWithoutPropertiesLoose(a,["src"]);return h.jsx(j,babelHelpers["extends"]({},e,{encryptedSrc:d,forwardedRef:c}))}else return h.jsx(k,babelHelpers["extends"]({},a,{forwardedRef:c}))}a.displayName="ImageCore";d=h.forwardRef(a);e.exports=d}),null);
__d("Image.react",["ImageCore.react"],(function(a,b,c,d,e,f){a=b("ImageCore.react");e.exports=a}),null);
__d("isValidReactElement",[],(function(a,b,c,d,e,f){e.exports=a;var g=typeof Symbol==="function"&&Symbol["for"]&&Symbol["for"]("react.element")||60103;function a(a){return!!(typeof a==="object"&&a!==null&&a.$$typeof===g)}}),null);
__d("BootloadedReact",["Bootloader","isValidReactElement"],(function(a,b,c,d,e,f){var g=function(a){b("Bootloader").loadModules(["ReactDOM"],a,"BootloadedReact")};a={isValidElement:function(a){return b("isValidReactElement")(a)},render:function(a,b,c){g(function(d){d.render(a,b,function(){c&&c(this)})})},unmountComponentAtNode:function(a,b){g(function(c){c.unmountComponentAtNode(a),b&&b()})}};e.exports=a}),null);
__d("getOrCreateDOMID",["uniqueID"],(function(a,b,c,d,e,f){e.exports=a;function a(a){a.id||(a.id=b("uniqueID")());return a.id}}),null);
__d("ContextualThing",["CSS","containsNode","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f){f.register=a;f.containsIncludingLayers=c;f.getContext=g;f.parentByClass=d;function a(a,c){a.setAttribute("data-ownerid",b("getOrCreateDOMID")(c))}function c(a,c){c=c;while(c){if(b("containsNode")(a,c))return!0;c=g(c)}return!1}function g(a){a=a;var c;while(a){if(a.getAttribute&&(c=a.getAttribute("data-ownerid")))return b("ge")(c);a=a.parentNode}return null}function d(a,c){a=a;var d;while(a&&!b("CSS").hasClass(a,c))a.getAttribute&&(d=a.getAttribute("data-ownerid"))?a=b("ge")(d):a=a.parentNode;return a}}),null);
__d("DOMDimensions",["Style","getDocumentScrollElement"],(function(a,b,c,d,e,f){"use strict";f.getElementDimensions=a;f.getDocumentDimensions=c;f.measureElementBox=d;function a(a){var b=a?a.offsetHeight:0;a=a?a.offsetWidth:0;return{height:b,width:a}}function c(a){a=b("getDocumentScrollElement")(a);var c=a.scrollWidth||0;a=a.scrollHeight||0;return{width:c,height:a}}function d(a,c,d,e,f){var g;switch(c){case"left":case"right":case"top":case"bottom":g=[c];break;case"width":g=["left","right"];break;case"height":g=["top","bottom"];break;default:throw Error("Invalid plane: "+c)}c=function(c,d){var e=0;for(var f=0;f<g.length;f++)e+=parseFloat(b("Style").get(a,c+"-"+g[f]+d))||0;return e};return(d?c("padding",""):0)+(e?c("border","-width"):0)+(f?c("margin",""):0)}}),null);
__d("getElementText",["isElementNode","isTextNode"],(function(a,b,c,d,e,f){e.exports=a;var g=null;function a(a){if(b("isTextNode")(a))return a.data;else if(b("isElementNode")(a)){if(g===null){var c=document.createElement("div");g=c.textContent!=null?"textContent":"innerText"}return a[g]}else return""}}),null);
__d("isContentEditable",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){a=a;while(a instanceof HTMLElement){if(a.contentEditable==="true"||a.contentEditable==="plaintext-only")return!0;a=a.parentElement}return!1}}),null);
__d("isElementInteractive",["isContentEditable"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=new Set(["EMBED","INPUT","OBJECT","SELECT","TEXTAREA"]),h=new Set(["button","checkbox","radio","submit"]);function a(a){if(!a instanceof HTMLElement)return!1;var c=b("isContentEditable")(a),d=g.has(a.nodeName);a=a instanceof HTMLInputElement&&h.has(a.type);return(c||d)&&!a}}),null);
__d("KeyEventController",["Bootloader","DOMQuery","Event","Run","emptyFunction","getElementText","isContentEditable","isElementInteractive","isEmpty"],(function(a,b,c,d,e,f){var g,h=null,i={BACKSPACE:[8],TAB:[9],RETURN:[13],ALT:[18],ESCAPE:[27],LEFT:[37,63234],UP:[38,63232],RIGHT:[39,63235],DOWN:[40,63233],NUMPAD_ADD:[43],NUMPAD_SUBSTRACT:[45],DELETE:[46],COMMA:[188],PERIOD:[190],SLASH:[191],"`":[192],"[":[219],"]":[221],PAGE_UP:[33],PAGE_DOWN:[34],END:[35],HOME:[36],SPACE:[32],KP_DOT:[46,110],"-":[189],"=":[187],FORWARD_SLASH:[191]},j=(a={},a[8]=1,a[9]=1,a[13]=1,a[27]=1,a[32]=1,a[37]=1,a[63234]=1,a[38]=1,a[63232]=1,a[39]=1,a[63235]=1,a[40]=1,a[63233]=1,a[46]=1,a);c=function(){function a(){var a=this;this.handlers={};["keyup","keydown","keypress"].forEach(function(b){return document.addEventListener(b,a.onkeyevent.bind(a,"on"+b))})}var c=a.prototype;c.mapKey=function(a){if(/^[0-9]$/.test(a+"")){typeof a!=="number"&&(a=a.charCodeAt(0)-48);return[48+a,96+a]}a+="";var b=i[a.toUpperCase()];return b?b:[a.toUpperCase().charCodeAt(0)]};c.onkeyevent=function(a,c){c=b("Event").$E(c);var d=this.handlers[c.keyCode]||this.handlers[c.which];if(d)for(var e=0;e<d.length;e++){var f=d[e].callback,g=d[e].filter;try{if(!g||g(c,a)){g=function(){var d=f(c,a),e=c.which||c.keyCode;b("Bootloader").loadModules(["KeyEventTypedLogger"],function(a){new a().setAction("key_shortcut").setKey(c.key||"").setKeyChar(String.fromCharCode(e)).setKeyCode(e).addToExtraData("is_trusted",c.isTrusted).log()},"KeyEventController");if(d===!1)return{v:b("Event").kill(c)}}();if(typeof g==="object")return g.v}}catch(a){}}return!0};c.resetHandlers=function(){for(var a in this.handlers)if(Object.prototype.hasOwnProperty.call(this.handlers,a)){var b=this.handlers[a].filter(function(a){return a.preserve()});b.length?this.handlers[a]=b:delete this.handlers[a]}};a.getInstance=function(){return h||(h=new a())};a.defaultFilter=function(c,d){c=b("Event").$E(c);return a.filterEventTypes(c,d)&&a.filterEventTargets(c,d)&&a.filterEventModifiers(c,d)};a.filterEventTypes=function(a,b){return b==="onkeydown"?!0:!1};a.filterEventTargets=function(a,c){c=a.getTarget();return!b("isElementInteractive")(c)||a.keyCode in j&&(b("DOMQuery").isNodeOfType(c,["input","textarea"])&&c.value.length===0||b("isContentEditable")(c)&&b("getElementText")(c).length===0)};a.filterEventModifiers=function(a,b){return a.ctrlKey||a.altKey||a.metaKey||a.repeat?!1:!0};a.registerKeyAcrossTransitions=function(c,d,e,f){e===void 0&&(e=a.defaultFilter);f===void 0&&(f=!1);return a.registerKey(c,d,e,f,b("emptyFunction").thatReturnsTrue)};a.registerKey=function(c,d,e,f,h){e===void 0&&(e=a.defaultFilter);f===void 0&&(f=!1);h===void 0&&(h=b("emptyFunction").thatReturnsFalse);var i=a.getInstance(),j=c==null?[]:i.mapKey(c);(g||(g=b("isEmpty")))(i.handlers)&&b("Run").onLeave(i.resetHandlers.bind(i));var k={};for(var l=0;l<j.length;l++){c=""+j[l];(!i.handlers[c]||f)&&(i.handlers[c]=[]);var m={callback:d,filter:e,preserve:h};k[c]=m;i.handlers[c].push(m)}return{remove:function(){for(var a in k){if(i.handlers[a]&&i.handlers[a].length){var b=i.handlers[a].indexOf(k[a]);b>=0&&i.handlers[a].splice(b,1)}delete k[a]}}}};return a}();e.exports=c}),null);
__d("KeyStatus",["Event","ExecutionEnvironment"],(function(a,b,c,d,e,f){f.isKeyDown=d;f.getKeyDownCode=e;var g=null,h=null;function i(){h||(h=b("Event").listen(window,"blur",function(){g=null,j()}))}function j(){h&&(h.remove(),h=null)}function a(a){g=b("Event").getKeyCode(a),i()}function c(){g=null,j()}if(b("ExecutionEnvironment").canUseDOM){d=document.documentElement;if(d)if(d.addEventListener)d.addEventListener("keydown",a,!0),d.addEventListener("keyup",c,!0);else if(d.attachEvent){f=d.attachEvent;f("onkeydown",a);f("onkeyup",c)}}function d(){return!!g}function e(){return g}}),null);
__d("BehaviorsMixin",[],(function(a,b,c,d,e,f){var g=function(){function a(a){this.$1=a,this.$2=!1}var b=a.prototype;b.enable=function(){this.$2||(this.$2=!0,this.$1.enable())};b.disable=function(){this.$2&&(this.$2=!1,this.$1.disable())};return a}(),h=1;function i(a){a.__BEHAVIOR_ID||(a.__BEHAVIOR_ID=h++);return a.__BEHAVIOR_ID}a={enableBehavior:function(a){this._behaviors||(this._behaviors={});var b=i(a);this._behaviors[b]||(this._behaviors[b]=new g(new a(this)));this._behaviors[b].enable();return this},disableBehavior:function(a){if(this._behaviors){a=i(a);this._behaviors[a]&&this._behaviors[a].disable()}return this},enableBehaviors:function(a){a.forEach(this.enableBehavior,this);return this},destroyBehaviors:function(){if(this._behaviors){for(var a in this._behaviors)this._behaviors[a].disable();this._behaviors={}}},hasBehavior:function(a){return this._behaviors&&i(a)in this._behaviors}};b=a;e.exports=b}),null);
__d("Layer",["invariant","ArbiterMixin","BehaviorsMixin","BootloadedReact","CSS","ContextualThing","DOM","DataStore","Event","FBLogger","HTML","KeyEventController","KeyStatus","Parent","Style","ge","isNode","mixin","react","removeFromArray","setImmediate"],(function(a,b,c,d,e,f,g){var h;h||b("react");b("KeyStatus");var i=[],j=function(c){babelHelpers.inheritsLoose(a,c);function a(a,d){var e;e=c.call(this)||this;e._config=a||{};if(d){e._configure(e._config,d);a=e._config.addedBehaviors||[];e.enableBehaviors(e._getDefaultBehaviors().concat(a))}else b("FBLogger")("layer").warn("The markup param wasn't provided to the Layer constructor");return e}var d=a.prototype;d.init=function(a){this._configure(this._config,a);a=this._config.addedBehaviors||[];this.enableBehaviors(this._getDefaultBehaviors().concat(a));this._initialized=!0;return this};d._configure=function(a,c){var d=this;if(c){var e=b("isNode")(c),f=typeof c==="string"||b("HTML").isHTML(c);this.containsReactComponent=b("BootloadedReact").isValidElement(c);!e&&!f&&!this.containsReactComponent&&b("FBLogger")("layer").warn("Layer must be init with HTML, DOM node or React instance");if(f)c=b("HTML")(c).getRootNode();else if(this.containsReactComponent){e=document.createElement("div");var g=!0;b("BootloadedReact").render(c,e,function(){d.inform("reactshow"),g||d.updatePosition()});g=!1;c=this._reactContainer=e}}this._root=this._buildWrapper(a,c);a.attributes&&b("DOM").setAttributes(this._root,a.attributes);a.classNames&&a.classNames.forEach(b("CSS").addClass.bind(null,this._root));b("CSS").addClass(this._root,"uiLayer");a.causalElement&&(this._causalElement=b("ge")(a.causalElement));a.permanent&&(this._permanent=a.permanent);a.isStrictlyControlled&&(this._isStrictlyControlled=a.isStrictlyControlled);b("DataStore").set(this._root,"layer",this)};d._getDefaultBehaviors=function(){return[]};d.getCausalElement=function(){return this._causalElement};d.setCausalElement=function(a){this._causalElement=a;return this};d.getInsertParent=function(){return this._insertParent||document.body};d.getRoot=function(){this._root||(this._destroyed?b("FBLogger")("layer").warn("No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed."):b("FBLogger")("layer").warn("No root node for this Layer. It has probably not been set."));return this._root};d.getContentRoot=function(){return this.getRoot()};d._buildWrapper=function(a,b){return b};d.setInsertParent=function(a){a&&(this._shown&&a!==this.getInsertParent()&&(b("DOM").appendContent(a,this.getRoot()),this.updatePosition()),this._insertParent=a);return this};d.showAfterDelay=function(a){window.setTimeout(this.show.bind(this),a)};d.show=function(){var c=this;if(this._shown)return this;var d=this.getRoot();d!=null||g(0,5142);this.inform("beforeshow");b("Style").set(d,"visibility","hidden");b("Style").set(d,"overflow","hidden");b("CSS").show(d);b("DOM").appendContent(this.getInsertParent(),d);this.updatePosition()!==!1?(this._shown=!0,this.inform("show"),a.inform("show",this),this._permanent||window.setTimeout(function(){c._shown&&i.push(c)},0)):b("CSS").hide(d);b("Style").set(d,"visibility","");b("Style").set(d,"overflow","");b("Style").set(d,"opacity","1");this.inform("aftershow");return this};d.hide=function(a){if(this._isStrictlyControlled){this._shown&&this.inform("runhide",a);return this}return this._hide()};d._hide=function(){if(this._hiding||!this._shown||this.inform("beforehide")===!1)return this;this._hiding=!0;this.inform("starthide")!==!1&&this.finishHide();return this};d.conditionShow=function(a){return a?this.show():this._hide()};d.finishHide=function(){if(this._shown){this._permanent||b("removeFromArray")(i,this);this._hiding=!1;this._shown=!1;var c=this.getRoot();c!=null||g(0,5143);b("CSS").hide(c);this.inform("hide");a.inform("hide",this)}};d.isShown=function(){return this._shown};d.updatePosition=function(){return!0};d.destroy=function(){this.containsReactComponent&&b("BootloadedReact").unmountComponentAtNode(this._reactContainer);this.finishHide();var c=this.getRoot();b("DOM").remove(c);this.destroyBehaviors();this.inform("destroy");a.inform("destroy",this);b("DataStore").remove(c,"layer");this._root=this._causalElement=null;this._destroyed=!0};a.init=function(a,b){a.init(b)};a.initAndShow=function(a,b){a.init(b).show()};a.show=function(a){a.show()};a.showAfterDelay=function(a,b){a.showAfterDelay(b)};a.getTopmostLayer=function(){return i[i.length-1]};a.informBlur=function(a){k=null;l=null;var c=i.length;if(!c)return;while(c--){var d=i[c],e=d.getContentRoot();e!=null||g(0,5144);if(b("ContextualThing").containsIncludingLayers(e,a))return;if(d.inform("blur",{target:a})===!1||d.isShown())return}};return a}(b("mixin")(b("ArbiterMixin"),b("BehaviorsMixin")));e.exports=j;Object.assign(j,b("ArbiterMixin"));Object.assign(j.prototype,{_destroyed:!1,_initialized:!1,_root:null,_shown:!1,_hiding:!1,_causalElement:null,_reactContainer:null});b("Event").listen(document.documentElement,"keydown",function(a){if(b("KeyEventController").filterEventTargets(a,"keydown"))for(var c=i.length-1;c>=0;c--)if(i[c].inform("key",a)===!1)return!1;return!0},b("Event").Priority.URGENT);var k;b("Event").listen(document.documentElement,"mousedown",function(a){k=a.getTarget()});var l;b("Event").listen(document.documentElement,"mouseup",function(a){l=a.getTarget(),b("setImmediate")(function(){k=null,l=null})});b("Event").listen(document.documentElement,"click",function(a){var c=k,d=l;k=null;l=null;var e=i.length;if(!e)return;e=a.getTarget();if(e!==d||e!==c)return;if(!b("DOM").contains(document.documentElement,e))return;if(e.offsetWidth!=null&&!e.offsetWidth)return;if(b("Parent").byClass(e,"generic_dialog"))return;j.informBlur(e)})}),null);
__d("getVendorPrefixedName",["invariant","ExecutionEnvironment","UserAgent","camelize"],(function(a,b,c,d,e,f,g){e.exports=a;var h={},i=["Webkit","ms","Moz","O"],j=new RegExp("^("+i.join("|")+")"),k=b("ExecutionEnvironment").canUseDOM?document.createElement("div").style:{};function l(a){for(var b=0;b<i.length;b++){var c=i[b]+a;if(c in k)return c}return null}function m(a){switch(a){case"lineClamp":return b("UserAgent").isEngine("WebKit >= 315.14.2")?"WebkitLineClamp":null;default:return null}}function a(a){var c=b("camelize")(a);if(h[c]===void 0){var d=c.charAt(0).toUpperCase()+c.slice(1);j.test(d)&&g(0,957,a);b("ExecutionEnvironment").canUseDOM?h[c]=c in k?c:l(d):h[c]=m(c)}return h[c]}}),null);
__d("isTruthy",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return a!=null&&Boolean(a)}}),null);
__d("shield",[],(function(a,b,c,d,e,f){e.exports=a;function a(a,b){for(var c=arguments.length,d=new Array(c>2?c-2:0),e=2;e<c;e++)d[e-2]=arguments[e];if(typeof a!=="function")throw new TypeError("shield expects a function as the first argument");return function(){return a.apply(b,d)}}}),null);
__d("BrowserSupportCore",["getVendorPrefixedName"],(function(a,b,c,d,e,f){a={hasCSSAnimations:function(){return!!b("getVendorPrefixedName")("animationName")},hasCSSTransforms:function(){return!!b("getVendorPrefixedName")("transform")},hasCSS3DTransforms:function(){return!!b("getVendorPrefixedName")("perspective")},hasCSSTransitions:function(){return!!b("getVendorPrefixedName")("transition")}};c=a;e.exports=c}),null);
__d("idx",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,d){try{return d(a)}catch(a){if(a instanceof TypeError)if(b(a))return null;else if(c(a))return void 0;throw a}}var g;function b(a){a=a.message;g||(g=i("null"));return g.test(a)}var h;function c(a){a=a.message;h||(h=i("undefined"));return h.test(a)}function i(a){return new RegExp("^"+a+" | "+a+"$|^[^\\(]* "+a+" ")}}),null);
__d("BrowserSupport",["BrowserSupportCore","ExecutionEnvironment","UserAgent_DEPRECATED","getVendorPrefixedName","memoize"],(function(a,b,c,d,e,f){var g=null;function h(){if(b("ExecutionEnvironment").canUseDOM){g||(g=document.createElement("div"));return g}return null}c=function(a){return b("memoize")(function(){var b=h();return!b?!1:a(b)})};e=(d=b("BrowserSupportCore")).hasCSSAnimations;f.hasCSSAnimations=e;e=d.hasCSSTransforms;f.hasCSSTransforms=e;e=d.hasCSS3DTransforms;f.hasCSS3DTransforms=e;e=d.hasCSSTransitions;f.hasCSSTransitions=e;d=c(function(a){a.style.cssText="position:-moz-sticky;position:-webkit-sticky;position:-o-sticky;position:-ms-sticky;position:sticky;";return/sticky/.test(a.style.position)});f.hasPositionSticky=d;e=c(function(a){return"scrollSnapType"in a.style||"webkitScrollSnapType"in a.style||"msScrollSnapType"in a.style});f.hasScrollSnapPoints=e;d=c(function(a){return"scrollBehavior"in a.style});f.hasScrollBehavior=d;e=c(function(a){if(!("pointerEvents"in a.style))return!1;a.style.cssText="pointer-events:auto";return a.style.pointerEvents==="auto"});f.hasPointerEvents=e;c=(d=b("memoize"))(function(){return!(b("UserAgent_DEPRECATED").webkit()&&!b("UserAgent_DEPRECATED").chrome()&&b("UserAgent_DEPRECATED").windows())&&"FileList"in window&&"FormData"in window});f.hasFileAPI=c;e=d(function(){return!!a.blob});f.hasBlobFactory=e;c=d(function(){return b("ExecutionEnvironment").canUseDOM&&document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","foreignObject").toString().includes("SVGForeignObject")});f.hasSVGForeignObject=c;e=d(function(){return!!window.MutationObserver});f.hasMutationObserver=e;c=d(function(){var a={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd"},c=b("getVendorPrefixedName")("transition");return a[c]||null});f.getTransitionEndEvent=c;e=function(){return!!window.CanvasRenderingContext2D};f.hasCanvasRenderingContext2D=e}),null);
__d("fbjs/lib/emptyFunction",["emptyFunction"],(function(a,b,c,d,e,f){"use strict";e.exports=b("emptyFunction")}),null);
__d("fbjs/lib/invariant",["invariant"],(function(a,b,c,d,e,f){"use strict";e.exports=b("invariant")}),null);
__d("fbjs/lib/warning",["warning"],(function(a,b,c,d,e,f){"use strict";e.exports=b("warning")}),null);
__d("prop-types/lib/ReactPropTypesSecret",[],(function(a,b,c,d,e,f){"use strict";a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=a}),null);
__d("prop-types/checkPropTypes",["fbjs/lib/invariant","fbjs/lib/warning","prop-types/lib/ReactPropTypesSecret"],(function(a,b,c,d,e,f){"use strict";var g;function a(a,b,c,d,e){}e.exports=a}),null);
__d("ReactFbPropTypes",["FbtResultBase","warning"],(function(a,b,c,d,e,f){function a(a){var c=function(c,d,e,f,g,h,i){var j=d[e];if(j instanceof b("FbtResultBase"))return null;if(c)return a.isRequired(d,e,f,g,h,i);else return a(d,e,f,g,h,i)},d=c.bind(null,!1);d.isRequired=c.bind(null,!0);return d}f.wrapStringTypeChecker=a}),null);
__d("prop-types/prop-types",["fbjs/lib/emptyFunction","fbjs/lib/invariant","fbjs/lib/warning","prop-types/checkPropTypes","prop-types/lib/ReactPropTypesSecret"],(function(a,b,c,d,e,f){var g,h=function(){b("fbjs/lib/invariant")(0,1492)};a=function(){return h};h.isRequired=h;c={array:h,bool:h,func:h,number:h,object:h,string:h,symbol:h,any:h,arrayOf:a,element:h,instanceOf:a,node:h,objectOf:a,oneOf:a,oneOfType:a,shape:a};c.checkPropTypes=b("fbjs/lib/emptyFunction");c.PropTypes=c;e.exports=c}),null);
__d("prop-types",["ReactFbPropTypes","prop-types/prop-types"],(function(a,b,c,d,e,f){e.exports=b("prop-types/prop-types")}),null);