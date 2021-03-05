if (self.CavalryLogger) { CavalryLogger.start_js(["BZWBe"]); }

__d("getCometBadgeColorStyle",["unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g={blue:{backgroundColor:"is6700om"},darkGray:{backgroundColor:"mvk259uv"},gray:{backgroundColor:"p2o8ms9n"},green:{backgroundColor:"jllm4f4h"},red:{backgroundColor:"gky8063y"}};function a(a){switch(a){case"blue":return g.blue;case"gray":return g.gray;case"darkGray":return g.darkGray;case"green":return g.green;case"red":return g.red;default:a;throw b("unrecoverableViolation")(" Invalid color in getCometBadgeColorStyle","comet_ui")}}}),null);
__d("CometBadge.react",["CometVisualCompletionAttributes","getCometBadgeColorStyle","react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=g||b("react"),j={isNoneProfileBadge:{marginEnd:"oi9244e8"},noBorder:{borderTop:"qu0x051f",borderEnd:"esr5mh6w",borderBottom:"e9989ue4",borderStart:"r7d6kgcz"},normalBorderRadius:{borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv"},root:{display:"pq6dq46d"}},k=(c={},c[6]={borderTop:"kwemeocd",borderEnd:"e0rrvugb",borderBottom:"lfmhomfa",borderStart:"adqv2e8f",borderTopStartRadius:"mvn70rh2",borderTopEndRadius:"r6rkryf2",borderBottomEndRadius:"cvi9pl0g",borderBottomStartRadius:"ksibw66d",height:"am38r5jf",width:"mx9os10e"},c[7]={borderTop:"iwuwq2lu",borderEnd:"g5oefq77",borderBottom:"oo8ov1ci",borderStart:"ce1xcart",borderTopStartRadius:"jie7ef34",borderTopEndRadius:"t8v3mibo",borderBottomEndRadius:"ldrydxgt",borderBottomStartRadius:"hrzhd2cr",height:"ooasylqa",width:"c0wkt4kp"},c[8]={borderTop:"iwuwq2lu",borderEnd:"g5oefq77",borderBottom:"oo8ov1ci",borderStart:"ce1xcart",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",height:"t6na6p9t",width:"c9rrlmt1"},c[9]={borderTop:"iwuwq2lu",borderEnd:"g5oefq77",borderBottom:"oo8ov1ci",borderStart:"ce1xcart",borderTopStartRadius:"kn8bj0zk",borderTopEndRadius:"lw3puv1o",borderBottomEndRadius:"f10nsz7o",borderBottomStartRadius:"qxnma5zn",height:"fz6q6hdd",width:"sx90ovx5"},c[10]={borderTop:"iwuwq2lu",borderEnd:"g5oefq77",borderBottom:"oo8ov1ci",borderStart:"ce1xcart",borderTopStartRadius:"dwerhba3",borderTopEndRadius:"kgjeooe1",borderBottomEndRadius:"kxcb68kb",borderBottomStartRadius:"mwvzfrdb",height:"bsodd3zb",width:"xthkpp0z"},c[12]={borderTop:"iwuwq2lu",borderEnd:"g5oefq77",borderBottom:"oo8ov1ci",borderStart:"ce1xcart",borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",height:"cyypbtt7",width:"fwizqjfa"},c[14]={borderTop:"iwuwq2lu",borderEnd:"g5oefq77",borderBottom:"oo8ov1ci",borderStart:"ce1xcart",borderTopStartRadius:"h1ci2mql",borderTopEndRadius:"mjfe6jtr",borderBottomEndRadius:"c6w6u7b1",borderBottomStartRadius:"hc21y3pz",height:"i4qgphn6",width:"gab7stmx"},c[15]={borderTop:"iwuwq2lu",borderEnd:"g5oefq77",borderBottom:"oo8ov1ci",borderStart:"ce1xcart",borderTopStartRadius:"a6h7caso",borderTopEndRadius:"jz6j5rt1",borderBottomEndRadius:"mg230der",borderBottomStartRadius:"t7cfk15d",height:"ed3p1gfi",width:"fhvfysw3"},c[18]={borderTop:"iwuwq2lu",borderEnd:"g5oefq77",borderBottom:"oo8ov1ci",borderStart:"ce1xcart",borderTopStartRadius:"t0qjyqq4",borderTopEndRadius:"jos75b7i",borderBottomEndRadius:"j6sty90h",borderBottomStartRadius:"kv0toi1t",height:"hm271qws",width:"ov9facns"},c[20]={borderTop:"q7z2992y",borderEnd:"dlurong2",borderBottom:"t9auik0z",borderStart:"drr2qr4a",borderTopStartRadius:"fni8adji",borderTopEndRadius:"hgaippwi",borderBottomEndRadius:"fykbt5ly",borderBottomStartRadius:"ns4ygwem",height:"jnigpg78",width:"odw8uiq3"},c[22]={borderTop:"q7z2992y",borderEnd:"dlurong2",borderBottom:"t9auik0z",borderStart:"drr2qr4a",borderTopStartRadius:"qw6c0r16",borderTopEndRadius:"kb8x4rkr",borderBottomEndRadius:"ed597pkb",borderBottomStartRadius:"omcyoz59",height:"p1ueia1e",width:"pgctjfs5"},c[24]={borderTop:"q7z2992y",borderEnd:"dlurong2",borderBottom:"t9auik0z",borderStart:"drr2qr4a",borderTopStartRadius:"lit7pgxp",borderTopEndRadius:"o3c63hce",borderBottomEndRadius:"hqlzco19",borderBottomStartRadius:"lsl2245n",height:"rgmg9uty",width:"b73ngqbp"},c[32]={borderTop:"q7z2992y",borderEnd:"dlurong2",borderBottom:"t9auik0z",borderStart:"drr2qr4a",borderTopStartRadius:"emml16de",borderTopEndRadius:"gmcszhul",borderBottomEndRadius:"ols5edhi",borderBottomStartRadius:"gob819ct",height:"k7cz35w2",width:"bsnbvmp4"},c[41]={borderTop:"q7z2992y",borderEnd:"dlurong2",borderBottom:"t9auik0z",borderStart:"drr2qr4a",borderTopStartRadius:"dak3gjt0",borderTopEndRadius:"to9glu75",borderBottomEndRadius:"mck1p2ct",borderBottomStartRadius:"e1qes44r",height:"c9yomchb",width:"chsygg5i"},c),l=(d={},d[6]={marginStart:"hytbnt81",width:"sx90ovx5"},d[7]={marginStart:"prsu3qqj",width:"bva0e6vj"},d[8]={marginStart:"kkf49tns",width:"fwizqjfa"},d[9]={marginStart:"gz69kkbn",width:"rj2mll0v"},d[10]={marginStart:"hnxzwevs",width:"fhvfysw3"},d[12]={marginStart:"ggphbty4",width:"ov9facns"},d[14]={marginStart:"gtad4xkn",width:"rgehdy3i"},d[15]={marginStart:"sj14oj9x",width:"cd5o6m78"},d[18]={marginStart:"dowus26g",width:"dly845st"},d[20]={marginStart:"gu00c43d",width:"la0tivve"},d[22]={marginStart:"no6464jc",width:"qlvp1f9n"},d[24]={marginStart:"ozuftl9m",width:"thwo4zme"},d[32]={marginStart:"dhix69tm",width:"tmrshh9y"},d[41]={marginStart:"qcvgcmnn",width:"lss6uy5u"},d),m=(f={},f[6]={marginStart:"ggphbty4",width:"fwizqjfa"},f[7]={marginStart:"gtad4xkn",width:"gab7stmx"},f[8]={marginStart:"h676nmdw",width:"hhz5lgdu"},f[9]={marginStart:"dowus26g",width:"ov9facns"},f[10]={marginStart:"gu00c43d",width:"odw8uiq3"},f[12]={marginStart:"ozuftl9m",width:"b73ngqbp"},f[14]={marginStart:"mww98ynv",width:"ciadx1gn"},f[15]={marginStart:"aoep172s",width:"la0tivve"},f[18]={marginStart:"audrk5ec",width:"thwo4zme"},f[20]={marginStart:"i0u1bx94",width:"q676j6op"},f[22]={marginStart:"mgyel2x5",width:"eim337gk"},f[24]={marginStart:"frluczxc",width:"tmrshh9y"},f[32]={marginStart:"t7yuvbsa",width:"nxfmr2wi"},f[41]={marginStart:"slxrqx5u",width:"t7sz67dt"},f);function a(a){var c=a.border;c=c===void 0?"none":c;var d=a.children,e=a.color;e=e===void 0?"blue":e;var f=a.isProfileBadge;f=f===void 0?!1:f;var g=a.label,n=a.role,o=a.size;o=o===void 0?8:o;var p=a.wide;p=p===void 0?"normal":p;return i.jsx("span",babelHelpers["extends"]({"aria-label":g,className:(h||(h=b("stylex")))(j.root,!f&&j.isNoneProfileBadge,(g=a.colorOverride)!=null?g:b("getCometBadgeColorStyle")(e),k[o],p==="wide"&&l[o],p==="extraWide"&&m[o],p==="normal"&&j.normalBorderRadius,c==="none"&&j.noBorder)},b("CometVisualCompletionAttributes").IGNORE,{role:n,children:d}))}}),null);
__d("focusKeyboardEventPropagation",[],(function(a,b,c,d,e,f){"use strict";f.hasFocusKeyboardEventPropagationStopped=a;f.stopFocusKeyboardEventPropagation=b;function a(a){return a._stopFocusKeyboardPropagation===!0}function b(a){a._stopFocusKeyboardPropagation=!0}}),null);
__d("FocusGroup.react",["FocusManager","Locale","ReactKeyboardEvent.react","focusKeyboardEventPropagation","react","setElementCanTab"],(function(a,b,c,d,e,f){f.createFocusGroup=a;var g,h=g||b("react"),i=5;function j(a){return a.length===1}function k(a,c,d,e){b("focusKeyboardEventPropagation").stopFocusKeyboardEventPropagation(d);c=c.DO_NOT_USE_queryFirstNode(a);c!==null&&(b("setElementCanTab")(c,!0),b("FocusManager").focusElement(c,e),d.preventDefault())}function l(a,b,c,d,e,f){b=b.onNavigate;if(b&&d){var g=!1,h=m(d,e);e={currentIndex:h,event:c,focusItem:function(a,b){a=a.scopeRef.current;a&&k(b||f,a,c)},getItem:function(a){return q(d,a)},getItemByTag:function(a){var b=d.length,c=h+1;while(!0){if(c===h)return null;if(c>b-1){c=0;continue}var e=d[c];if(e){var f=e.disabled,g=e.scopeRef,i=e.tag;g=g.current;if(g&&f!==!0&&i===a)return e}c++}return null},preventDefault:function(){g=!0},type:a};b(e);if(g)return!0}return!1}function m(a,b){for(var c=0;c<a.length;c++){var d=a[c];if(d&&d.scopeRef.current===b)return c}return-1}function n(a,b,c){var d=a.scopeRef.current;if(d===null)return null;if(c!==null){d=m(c,b);b=a.wrap;a=r(c,d-1);return!a&&b===!0?r(c,c.length-1):a}return null}function o(a,b,c){var d=a.scopeRef.current;if(d===null)return null;if(c.length>0){d=m(c,b);b=a.wrap;a=p(c,d+1);return!a&&b===!0?p(c,0):a}return null}function p(a,b){var c=a.length;if(b>c)return null;b=b;while(b<c){var d=a[b];if(d!==null&&d.disabled!==!0)return d.scopeRef.current;b++}return null}function q(a,b){b=b;while(b>=0){var c=a[b];if(c!==null&&c.disabled!==!0)return c;b--}return null}function r(a,b){a=q(a,b);return a?a.scopeRef.current:null}function s(a){var b=a.altKey,c=a.ctrlKey,d=a.metaKey;a=a.shiftKey;return b===!0||c===!0||d===!0||a===!0}function a(a){var c=h.unstable_Scope,d=h.createContext(null),e=h.createContext(null);function f(a){var b=a.children,e=a.orientation,f=a.wrap,g=a.tabScopeQuery,j=a.allowModifiers,k=a.preventScrollOnFocus,l=k===void 0?!1:k;k=a.pageJumpSize;var m=k===void 0?i:k,n=a.onNavigate,o=h.useRef(null);k=h.useMemo(function(){return{scopeRef:o,orientation:e,wrap:f,tabScopeQuery:g,allowModifiers:j,pageJumpSize:m,preventScrollOnFocus:l,onNavigate:n}},[e,f,g,j,m,l,n]);return h.jsx(d.Provider,{value:k,children:h.jsx(c,{ref:o,children:b})})}function g(f){var g=f.children,i=f.disabled;f=f.tag;var q=h.useRef(null),t=h.useContext(d);b("ReactKeyboardEvent.react").useKeyboard(q,h.useMemo(function(){return{onKeyDown:function(c){if(b("focusKeyboardEventPropagation").hasFocusKeyboardEventPropagationStopped(c))return;var d=q.current;if(d!==null&&t!==null){var f=t.orientation==="vertical"||t.orientation==="both",g=t.orientation==="horizontal"||t.orientation==="both",h=t.scopeRef.current,i=c.key,u=t.preventScrollOnFocus;if(i==="Tab"&&h!==null){var v=t.tabScopeQuery;if(v){if(t.onNavigate){var w=h.getChildContextValues(e);if(l("TAB",t,c,w,d,v))return}w=document.activeElement;v=h.DO_NOT_USE_queryAllNodes(v);if(v!==null)for(var x=0;x<v.length;x++){var y=v[x];y!==w?b("setElementCanTab")(y,!1):b("setElementCanTab")(y,!0)}}return}if(s(c)){y=t.allowModifiers;if(y!==!0)return}if(h===null)return;w=i;b("Locale").isRTL()&&(i==="ArrowRight"?w="ArrowLeft":i==="ArrowLeft"&&(w="ArrowRight"));switch(w){case"Home":x=h.getChildContextValues(e);if(l("HOME",t,c,x,d,a))return;v=p(x,0);if(v){k(a,v,c,u);return}break;case"End":y=h.getChildContextValues(e);if(l("END",t,c,y,d,a))return;w=r(y,y.length-1);if(w){k(a,w,c,u);return}break;case"PageUp":x=h.getChildContextValues(e);if(l("PAGE_UP",t,c,x,d,a))return;v=t.pageJumpSize;y=m(x,d);w=p(x,Math.max(0,y-v));if(w){k(a,w,c,u);return}break;case"PageDown":x=h.getChildContextValues(e);if(l("PAGE_DOWN",t,c,x,d,a))return;y=t.pageJumpSize;v=m(x,d);w=r(x,Math.min(x.length-1,v+y));if(w){k(a,w,c,u);return}break;case"ArrowUp":if(f){x=h.getChildContextValues(e);if(l("PREV_ITEM",t,c,x,d,a))return;v=c.metaKey||c.ctrlKey?p(x,0):n(t,d,x);if(v){k(a,v,c,u);return}}break;case"ArrowDown":if(f){y=h.getChildContextValues(e);if(l("NEXT_ITEM",t,c,y,d,a))return;w=c.metaKey||c.ctrlKey?r(y,y.length-1):o(t,d,y);if(w){k(a,w,c,u);return}}break;case"ArrowLeft":if(g){x=h.getChildContextValues(e);if(l("PREV_ITEM",t,c,x,d,a))return;v=c.metaKey||c.ctrlKey?p(x,0):n(t,d,x);if(v){k(a,v,c,u);return}}break;case"ArrowRight":if(g){f=h.getChildContextValues(e);if(l("NEXT_ITEM",t,c,f,d,a))return;y=c.metaKey||c.ctrlKey?r(f,f.length-1):o(t,d,f);y&&k(a,y,c,u)}break;default:if(j(i)&&t.onNavigate){w=h.getChildContextValues(e);l("PRINT_CHAR",t,c,w,d,a)}}}}}},[t]));i={scopeRef:q,disabled:i,tag:f};return h.jsx(e.Provider,{value:i,children:h.jsx(c,{ref:q,children:g})})}return[f,g]}}),null);