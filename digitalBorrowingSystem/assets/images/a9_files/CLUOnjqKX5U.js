if (self.CavalryLogger) { CavalryLogger.start_js(["y8NY2"]); }

__d("csx",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){throw new Error("csx: Unexpected class selector transformation.")}}),null);
__d("BlueBar",["csx","CSS","DOMQuery","Style","ge"],(function(a,b,c,d,e,f,g){f.hasFixedBlueBar=c;f.getBar=l;f.getNavRoot=d;f.getMaybeFixedRoot=e;f.getLoggedOutRoot=g;f.getNewLoggedOutRoot=m;var h=document,i={};function j(a){return b("DOMQuery").scry(h,a)[0]}function k(a,b){return i[a]?i[a]:i[a]=j(b)}function a(){h=b("ge")("blueBarDOMInspector")||document,i={}}function c(){var a=this.getMaybeFixedRoot();return!a?!1:b("CSS").matchesSelector(a,"._5rmj")||b("Style").isFixed(a)}function l(){return k("bar","div._1s4v")}function d(){return k("navRoot","div._cx4")||l()}function e(){return k("maybeFixedRoot","div._26aw")}function g(){return k("maybeFixedRootLoggedOut","div._1pmx")}function m(){return k("maybeFixedRootLogin","div._53jh")}a()}),null);
__d("FocusEvent",["Event","Run","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f){"use strict";f.listen=a;var g={},h=!1;function i(a,b){if(g[a]){b=g[a].indexOf(b);b>=0&&g[a].splice(b,1);g[a].length===0&&delete g[a]}}function j(a){var b=a.getTarget();if(g[b.id]&&g[b.id].length>0){var c=a.type==="focusin"||a.type==="focus";g[b.id].forEach(function(a){a(c)})}}function k(){if(h)return;b("Event").listen(document.documentElement,"focusout",j);b("Event").listen(document.documentElement,"focusin",j);h=!0}function a(a,c){k();var d=b("getOrCreateDOMID")(a);g[d]||(g[d]=[]);g[d].push(c);var e=!1;function f(){e||(i(d,c),h&&(h.remove(),h=null),e=!0)}var h=b("Run").onLeave(function(){b("ge")(d)||f()});return{remove:function(){f()}}}}),null);
__d("BasicVector",[],(function(a,b,c,d,e,f){a=function(){function a(a,b){this.x=a,this.y=b}var b=a.prototype;b.derive=function(b,c){return new a(b,c)};b.toString=function(){return"("+this.x+", "+this.y+")"};b.add=function(a,b){b===void 0&&(b=a.y,a=a.x);a=parseFloat(a);b=parseFloat(b);return this.derive(this.x+a,this.y+b)};b.mul=function(a,b){b===void 0&&(b=a);return this.derive(this.x*a,this.y*b)};b.div=function(a,b){b===void 0&&(b=a);return this.derive(this.x*1/a,this.y*1/b)};b.sub=function(a,b){if(arguments.length===1)return this.add(a.mul(-1));else return this.add(-a,-b)};b.distanceTo=function(a){return this.sub(a).magnitude()};b.magnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y)};b.rotate=function(a){return this.derive(this.x*Math.cos(a)-this.y*Math.sin(a),this.x*Math.sin(a)+this.y*Math.cos(a))};return a}();e.exports=a}),null);
__d("DOMVector",["BasicVector","getDocumentScrollElement","getElementPosition","getUnboundedScrollPosition","getViewportDimensions"],(function(a,b,c,d,e,f){a=function(a){babelHelpers.inheritsLoose(c,a);function c(b,c,d){b=a.call(this,b,c)||this;b.domain=d||"pure";return b}var d=c.prototype;d.derive=function(a,b,d){return new c(a,b,d||this.domain)};d.add=function(b,d){b instanceof c&&b.getDomain()!=="pure"&&(b=b.convertTo(this.domain));return a.prototype.add.call(this,b,d)};d.convertTo=function(a){if(a!="pure"&&a!="viewport"&&a!="document")return this.derive(0,0);if(a==this.domain)return this.derive(this.x,this.y,this.domain);if(a=="pure")return this.derive(this.x,this.y);if(this.domain=="pure")return this.derive(0,0);var b=c.getScrollPosition("document"),d=this.x,e=this.y;this.domain=="document"?(d-=b.x,e-=b.y):(d+=b.x,e+=b.y);return this.derive(d,e,a)};d.getDomain=function(){return this.domain};c.from=function(a,b,d){return new c(a,b,d)};c.getScrollPosition=function(a){a=a||"document";var c=b("getUnboundedScrollPosition")(window);return this.from(c.x,c.y,"document").convertTo(a)};c.getElementPosition=function(a,c){c=c||"document";a=b("getElementPosition")(a);return this.from(a.x,a.y,"viewport").convertTo(c)};c.getElementDimensions=function(a){return this.from(a.offsetWidth||0,a.offsetHeight||0)};c.getViewportDimensions=function(){var a=b("getViewportDimensions")();return this.from(a.width,a.height,"viewport")};c.getLayoutViewportDimensions=function(){var a=b("getViewportDimensions").layout();return this.from(a.width,a.height,"viewport")};c.getViewportWithoutScrollbarDimensions=function(){var a=b("getViewportDimensions").withoutScrollbars();return this.from(a.width,a.height,"viewport")};c.getDocumentDimensions=function(a){a=b("getDocumentScrollElement")(a);return this.from(a.scrollWidth,a.scrollHeight,"document")};return c}(b("BasicVector"));e.exports=a}),null);
__d("Vector",["DOMVector","Event","Scroll"],(function(a,b,c,d,e,f){a=function(a){babelHelpers.inheritsLoose(c,a);function c(b,c,d){return a.call(this,parseFloat(b),parseFloat(c),d)||this}var d=c.prototype;d.derive=function(a,b,d){return new c(a,b,d||this.domain)};d.setElementPosition=function(a){var b=this.convertTo("document");a.style.left=parseInt(b.x,10)+"px";a.style.top=parseInt(b.y,10)+"px";return this};d.setElementDimensions=function(a){return this.setElementWidth(a).setElementHeight(a)};d.setElementWidth=function(a){a.style.width=parseInt(this.x,10)+"px";return this};d.setElementHeight=function(a){a.style.height=parseInt(this.y,10)+"px";return this};d.scrollElementBy=function(a){if(a==document.body)window.scrollBy(this.x,this.y);else{var c;(c=b("Scroll")).setLeft(a,c.getLeft(a)+this.x);c.setTop(a,c.getTop(a)+this.y)}return this};c.from=function(a,b,d){return new c(a,b,d)};c.getEventPosition=function(a,c){c===void 0&&(c="document");a=b("Event").getPosition(a);a=this.from(a.x,a.y,"document");return a.convertTo(c)};c.getTouchEventPosition=function(a,b){b===void 0&&(b="document");a=a.touches[0];a=this.from(a.pageX,a.pageY,"document");return a.convertTo(b)};c.deserialize=function(a){a=a.split(",");return this.from(a[0],a[1])};return c}(b("DOMVector"));e.exports=a}),null);
__d("ViewportBounds",["Arbiter","ArbiterMixin","BlueBar","ExecutionEnvironment","PageEvents","Vector","emptyFunction","removeFromArray"],(function(a,b,c,d,e,f){var g={top:[],right:[],bottom:[],left:[]};function a(a){return function(){return g[a].reduce(function(a,b){return Math.max(a,b.getSize())},0)}}function c(a,b){return function(c){return new h(a,c,b)}}var h=function(){"use strict";function a(a,c,d){d===void 0&&(d=!1),this.getSide=b("emptyFunction").thatReturns(a),this.getSize=function(){return typeof c==="function"?c():c},this.isPersistent=b("emptyFunction").thatReturns(d),g[a].push(this),i.inform("change")}var c=a.prototype;c.remove=function(){b("removeFromArray")(g[this.getSide()],this),i.inform("change")};return a}();b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONUNLOAD,function(){["top","right","bottom","left"].forEach(function(a){a=g[a];for(var b=a.length-1;b>=0;b--){var c=a[b];c.isPersistent()||c.remove()}})});var i=babelHelpers["extends"]({},b("ArbiterMixin"),{getTop:a("top"),getRight:a("right"),getBottom:a("bottom"),getLeft:a("left"),getElementPosition:function(a){a=b("Vector").getElementPosition(a);a.y-=i.getTop();return a},addTop:c("top"),addRight:c("right"),addBottom:c("bottom"),addLeft:c("left"),addPersistentTop:c("top",!0),addPersistentRight:c("right",!0),addPersistentBottom:c("bottom",!0),addPersistentLeft:c("left",!0)});i.addPersistentTop(function(){if(b("ExecutionEnvironment").canUseDOM&&b("BlueBar").hasFixedBlueBar()){var a=b("BlueBar").getMaybeFixedRoot();return a?a.offsetHeight:0}return 0});e.exports=i}),null);
__d("isAsyncScrollQuery",["UserAgent"],(function(a,b,c,d,e,f){e.exports=a;var g=null;function a(){g===null&&(g=b("UserAgent").isPlatform("Mac OS X >= 10.8")&&b("UserAgent").isBrowser("Safari >= 6.0"));return g}}),null);
__d("CSSFade",["cx","invariant","CSS","DataStore","Event","Style","requestAnimationFrameAcrossTransitions"],(function(a,b,c,d,e,f,g,h){"use strict";var i="css-fade-animation",j="css-show-animation",k="CSSFade_hide",l="CSSFade_show";a=document.createElement("div").animate!==void 0;var m={cancel:function(){}};function n(a,c){a!=null||h(0,5875);a=b("DataStore").get(a,c);a&&a.cancel();return a}function o(a,b,c){a=((a=a)!=null?(a=a.style)!=null?a.animation:a:a)||"";b=b+"s "+c;a.length>5&&(b=a.slice(0,-1)+(", "+b));return b}function p(a,b){a=((a=a)!=null?(a=a.style)!=null?a.animation:a:a)||"";a=a.split(",");var c=a.findIndex(function(a){return a.indexOf(b)>-1});c!==-1&&a.splice(c,1);return a.join(",")}c={show:function(a,c){c===void 0&&(c={});var d=c.duration!=null?c.duration/1e3:.3;n(a,i);n(a,j);b("CSS").removeClass(a,c.invisible?"invisible_elem":"hidden_elem");b("requestAnimationFrameAcrossTransitions")(function(){a.style.animation=o(a,d,l)});var e=b("Event").listen(a,"animationend",function(){c.callback&&c.callback(),a.style.animation=p(a,l)}),f={cancel:function(){a.style.animation=p(a,l),e.remove(),f.cancel=function(){}}};b("DataStore").set(a,j,f);return f},hide:function(a,c){c===void 0&&(c={});var d=function(){b("CSS").addClass(a,c.invisible?"invisible_elem":"hidden_elem"),c.callback&&c.callback(),a.style.animation=p(a,k)};if(c.simple){d();return m}var e=c.duration!=null?c.duration/1e3:.3;n(a,j);n(a,i);b("requestAnimationFrameAcrossTransitions")(function(){a.style.animation=o(a,e,k)});var f=b("Event").listen(a,"animationend",d),g={cancel:function(){a.style.animation=p(a,k),f.remove(),g.cancel=function(){}}};b("DataStore").set(a,i,g);return g}};d={show:function(a,c){c===void 0&&(c={});var d=c.duration!=null?c.duration:300;n(a,i);n(a,j);b("CSS").removeClass(a,c.invisible?"invisible_elem":"hidden_elem");b("Style").set(a,"opacity","1");var e=c.peekStateFade?"0.6":"0";e=a.animate([{opacity:e},{opacity:"1.0"}],{duration:d});c.callback&&(e.onfinish=c.callback);b("DataStore").set(a,j,e);return e},hide:function(a,c){c===void 0&&(c={});var d=c.duration!=null?c.duration:300;n(a,j);if(c.simple===!0){b("CSS").addClass(a,c.invisible?"invisible_elem":"hidden_elem");return m}else{n(a,i);b("Style").set(a,"opacity","0");var e=c.peekStateFade?"0.4":"0";e=a.animate([{opacity:"1.0"},{opacity:e}],{duration:d});e.onfinish=function(){b("CSS").addClass(a,c.invisible?"invisible_elem":"hidden_elem"),c.callback&&c.callback()};b("DataStore").set(a,i,e);return e}}};e.exports=a?d:c}),null);
__d("queryThenMutateDOM",["ErrorUtils","Run","TimeSlice","emptyFunction","gkx","requestAnimationFrame"],(function(a,b,c,d,e,f){var g,h,i,j=[],k={};function l(a,c,d){if(!a&&!c)return{cancel:b("emptyFunction")};if(d&&Object.prototype.hasOwnProperty.call(k,d))return{cancel:b("emptyFunction")};else d&&(k[d]=1);c=b("TimeSlice").guard(c||b("emptyFunction"),"queryThenMutateDOM mutation callback",{propagationType:b("TimeSlice").PropagationType.CONTINUATION,registerCallStack:!0});a=b("TimeSlice").guard(a||b("emptyFunction"),"queryThenMutateDOM query callback",{propagationType:b("TimeSlice").PropagationType.CONTINUATION,registerCallStack:!0});var e={queryFunction:a,mutateFunction:c,output:null,deleted:!1};j.push(e);n();h||(h=!0,b("gkx")("708253")||b("Run").onLeave(function(){h=!1,i=!1,k={},j.length=0}));return{cancel:function(){e.deleted=!0,d&&delete k[d]}}}l.prepare=function(a,b,c){return function(){for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];e.unshift(this);var g=Function.prototype.bind.apply(a,e),h=b.bind(this);l(g,h,c)}};var m=b("TimeSlice").guard(function(){while(j.length){k={};var a=[];window.document.body.getClientRects();while(j.length){var b=j.shift();b.deleted||(b.output=o(b.queryFunction),a.push(b))}while(a.length){b=a.shift();b.deleted||o(b.mutateFunction,null,[b.output])}}i=!1},"queryThenMutateDOM runScheduledQueriesAndMutations",{propagationType:b("TimeSlice").PropagationType.ORPHAN});function n(){!i&&j.length&&(i=!0,b("requestAnimationFrame")(m))}function o(a,c,d,e,f){return(g||(g=b("ErrorUtils"))).applyWithGuard(a,c,d,e,f)}e.exports=l}),null);