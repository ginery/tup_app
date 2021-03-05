if (self.CavalryLogger) { CavalryLogger.start_js(["7kTs4"]); }

__d("BaseImage.react",["RecoverableViolationWithComponentStack.react","mergeRefs","react","stylex","testID"],(function(a,b,c,d,e,f){"use strict";var g,h,i=g||b("react"),j={contain:{objectFit:"r0294ipz"},cover:{objectFit:"bixrwtb6"},fill:{objectFit:"r50dw9up"}};function a(a,c){var d=a.alt;d=d===void 0?"":d;var e=a["aria-labelledby"],f=a.elementtiming,g=a.objectFit;g=g===void 0?"none":g;var k=a.onLoad,l=a.referrerPolicy;l=l===void 0?"origin-when-cross-origin":l;var m=a.src,n=a.testid,o=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["alt","aria-labelledby","elementtiming","objectFit","onLoad","referrerPolicy","src","testid","xstyle"]);var p=i.useRef(null),q=i.useMemo(function(){return b("mergeRefs")(p,c)},[p,c]);i.useEffect(function(){var a=p.current;k!=null&&a!=null&&a.complete&&k()},[k]);return m===""?i.jsx(b("RecoverableViolationWithComponentStack.react"),{errorMessage:"Invalid src provided to image",projectName:"comet_ui"}):i.jsx("img",babelHelpers["extends"]({},a,b("testID")(n),{alt:d,"aria-labelledby":e,className:g==="none"&&o==null?void 0:(h||(h=b("stylex")))(g!=="none"&&j[g],o),elementtiming:f,onLoad:k,ref:q,referrerPolicy:l,src:m}))}c=i.forwardRef(a);e.exports=c}),null);
__d("CometImageFromIXValue.react",["BaseImage.react","RecoverableViolationWithComponentStack.react","coerceImageishSprited","coerceImageishURL","react","testID"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a,c){var d=a.alt,e=a.source;a=a.testid;var f=b("coerceImageishSprited")(e);if(f!=null)return h.jsx("i",babelHelpers["extends"]({},b("testID")(a),{"aria-label":d===""?null:d,className:f.type==="css"?f.className:void 0,ref:c,role:d===""?null:"img",style:f.type==="cssless"?f.style:void 0}));a=b("coerceImageishURL")(e);if(a!=null){f=a.height;e=a.uri;a=a.width;return h.jsx(b("BaseImage.react"),{alt:d,draggable:!1,height:f,ref:c,src:e,testid:void 0,width:a})}return h.jsx(b("RecoverableViolationWithComponentStack.react"),{errorMessage:"asset provided to CometImageFromIXValue cannot be transformed by Haste",projectName:"comet_ui"})}c=h.forwardRef(a);e.exports=c}),null);
__d("BaseThemeDisplayModeContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext(null);e.exports=c}),null);
__d("useCurrentDisplayMode",["BaseThemeDisplayModeContext","cr:1637900","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(){var a=h.useContext(b("cr:1637900"));a=a.isDarkModeEnabled;var c=h.useContext(b("BaseThemeDisplayModeContext"));a=a?"dark":"light";return c==null?a:c}}),null);
__d("CometProgressRingUtils",["ix"],(function(a,b,c,d,e,f,g){"use strict";f.getCubicBezierPercentageFunc=a;f.getRingGifUrl=b;f.getRingColor=c;function a(a,b,c,d){function e(a,b){return 1-3*b+3*a}function f(a,b){return 3*b-6*a}function g(a){return 3*a}function h(a,b,c){return((e(b,c)*a+f(b,c))*a+g(b))*a}function i(a,b,c){return 3*e(b,c)*a*a+2*f(b,c)*a+g(b)}function j(b){var d=b;for(var e=0;e<4;++e){var f=i(d,a,c);if(f===0)return d;var g=h(d,a,c)-b;d-=g/f}return d}return function(e){return a===b&&c===d?e:h(j(e),b,d)}}function b(a,b,c){switch(b){case"12":switch(c){case"dark":switch(a){case"blue":return g("1876411");case"disabled":return g("1876443");case"dark":return g("1876427");default:return g("1876427")}case"light":switch(a){case"blue":return g("1876419");case"disabled":return g("1876451");case"dark":return g("1876435");default:return g("1876435")}default:return g("1876435")}case"16":switch(c){case"dark":switch(a){case"blue":return g("1876412");case"disabled":return g("1876444");case"dark":return g("1876428");default:return g("1876428")}case"light":switch(a){case"blue":return g("1876420");case"disabled":return g("1876452");case"dark":return g("1876436");default:return g("1876436")}default:return g("1876436")}case"20":switch(c){case"dark":switch(a){case"blue":return g("1876413");case"disabled":return g("1876445");case"dark":return g("1876429");default:return g("1876429")}case"light":switch(a){case"blue":return g("1876421");case"disabled":return g("1876453");case"dark":return g("1876437");default:return g("1876437")}default:return g("1876437")}case"24":switch(c){case"dark":switch(a){case"blue":return g("1876414");case"disabled":return g("1876446");case"dark":return g("1876430");default:return g("1876430")}case"light":switch(a){case"blue":return g("1876422");case"disabled":return g("1876454");case"dark":return g("1876438");default:return g("1876438")}default:return g("1876438")}case"32":switch(c){case"dark":switch(a){case"blue":return g("1876415");case"disabled":return g("1876447");case"dark":return g("1876431");default:return g("1876431")}case"light":switch(a){case"blue":return g("1876423");case"disabled":return g("1876455");case"dark":return g("1876439");default:return g("1876439")}default:return g("1876439")}case"48":switch(c){case"dark":switch(a){case"blue":return g("1876416");case"disabled":return g("1876448");case"dark":return g("1876432");default:return g("1876432")}case"light":switch(a){case"blue":return g("1876424");case"disabled":return g("1876456");case"dark":return g("1876440");default:return g("1876440")}default:return g("1876440")}case"60":switch(c){case"dark":switch(a){case"blue":return g("1940508");case"disabled":return g("1940512");case"dark":return g("1940510");default:return g("1940510")}case"light":switch(a){case"blue":return g("1940509");case"disabled":return g("1940513");case"dark":return g("1940511");default:return g("1940511")}default:return g("1940511")}case"64":switch(c){case"dark":switch(a){case"blue":return g("1876417");case"disabled":return g("1876449");case"dark":return g("1876433");default:return g("1876433")}case"light":switch(a){case"blue":return g("1876425");case"disabled":return g("1876457");case"dark":return g("1876441");default:return g("1876441")}default:return g("1876441")}case"72":switch(c){case"dark":switch(a){case"blue":return g("1876418");case"disabled":return g("1876450");case"dark":return g("1876434");default:return g("1876434")}case"light":switch(a){case"blue":return g("1876426");case"disabled":return g("1876458");case"dark":return g("1876442");default:return g("1876442")}default:return g("1876442")}default:return g("1876439")}}function c(a){switch(a){case"dark":return{backgroundColor:"var(--progress-ring-neutral-background)",foregroundColor:"var(--progress-ring-neutral-foreground)"};case"light":return{backgroundColor:"var(--progress-ring-on-media-background)",foregroundColor:"var(--progress-ring-on-media-foreground)"};case"blue":return{backgroundColor:"var(--progress-ring-blue-background)",foregroundColor:"var(--progress-ring-blue-foreground)"};case"disabled":return{backgroundColor:"var(--progress-ring-disabled-background)",foregroundColor:"var(--progress-ring-disabled-foreground)"};default:return{backgroundColor:"var(--progress-ring-neutral-background)",foregroundColor:"var(--progress-ring-neutral-foreground)"}}}}),null);
__d("CometProgressRingIndeterminate.react",["CometImageFromIXValue.react","CometProgressRingUtils","ariaGlimmerProps","gkx","react","stylex","useCurrentDisplayMode"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=g||b("react"),j={animationFillModeAndTimingFn:{animationFillMode:"ev399l9o",animationTimingFunction:"stwyh623"},foregroundCircle:{animationDuration:"r7fvqmod",animationFillMode:"ev399l9o",animationIterationCount:"ee40wjg4",animationTimingFunction:"emdzj9jj",transformOrigin:"pf5603km"},foregroundCircle12:{animationName:"b1vxuzj9"},foregroundCircle16:{animationName:"iikcx86x"},foregroundCircle20:{animationName:"l496fsh7"},foregroundCircle24:{animationName:"nbzcv6qa"},foregroundCircle32:{animationName:"d34kznaq"},foregroundCircle48:{animationName:"gr1pdu1k"},foregroundCircle60:{animationName:"im1og7op"},foregroundCircle72:{animationName:"dxlomfw1"},rotationCircle:{animationDuration:"r7fvqmod",animationIterationCount:"ee40wjg4",animationName:"ega7oslk",animationTimingFunction:"ku44ohm1",outline:"lzcic4wl",transformOrigin:"pf5603km"}},k=2;function a(a){var c=a.color;a=a.size;var d=b("CometProgressRingUtils").getRingColor(c);d=d.foregroundColor;var e=(a-k)*Math.PI,f=b("useCurrentDisplayMode")();f=f==="dark";c=b("CometProgressRingUtils").getRingGifUrl(c,a.toString(),f?"dark":"light");return b("gkx")("1902755")?i.jsx("div",babelHelpers["extends"]({height:a,width:a},b("ariaGlimmerProps"),{children:i.jsx(b("CometImageFromIXValue.react"),{source:c})})):i.jsx("svg",babelHelpers["extends"]({className:(h||(h=b("stylex")))(j.rotationCircle,j.animationFillModeAndTimingFn),height:a,viewBox:"0 0 "+a+" "+a,width:a},b("ariaGlimmerProps"),{children:i.jsx("circle",{className:(h||(h=b("stylex")))([j.foregroundCircle,a===12&&j.foregroundCircle12,a===16&&j.foregroundCircle16,a===20&&j.foregroundCircle20,a===24&&j.foregroundCircle24,a===32&&j.foregroundCircle32,a===48&&j.foregroundCircle48,a===60&&j.foregroundCircle60,a===72&&j.foregroundCircle72]),cx:a/2,cy:a/2,fill:"none",r:(a-k)/2,stroke:d,strokeDasharray:e,strokeWidth:k})}))}}),null);