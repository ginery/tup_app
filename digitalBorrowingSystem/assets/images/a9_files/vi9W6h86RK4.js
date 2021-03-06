if (self.CavalryLogger) { CavalryLogger.start_js(["\/mkS0"]); }

__d("CometMenuFocusGroup",["fbt","CometComponentWithKeyCommands.react","CometKeys","FocusGroup.react","focusScopeQueries","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react");c=b("FocusGroup.react").createFocusGroup(b("focusScopeQueries").tabbableScopeQuery);var j=c[0];d=c[1];function a(a){var c=[{command:{key:b("CometKeys").UP},description:g._("Previous item"),handler:function(){}},{command:{key:b("CometKeys").DOWN},description:g._("Next item"),handler:function(){}}];return i.jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:c,children:i.jsx(j,babelHelpers["extends"]({},a))})}f={FocusGroup:a,FocusItem:d};e.exports=f}),null);
__d("CometMenuItemBaseRoleContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext(null);e.exports=c}),null);
__d("CometMenuItemHighlightContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext(!1);e.exports=c}),null);
__d("CometNonBreakingSpace.react",["react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=g||b("react"),j={.5:{marginEnd:"kvj6zsgd"},.25:{marginEnd:"f7ugub2p"},.75:{marginEnd:"zs26xb6x"},1:{marginEnd:"t113ifn3"}};function a(a){a=a.size;if(a!=null)return i.jsx("span",{className:(h||(h=b("stylex")))(j[a]),children:"\ufeff"});else return i.jsx(i.Fragment,{children:"\xa0"})}}),null);
__d("CometTextWithIcon.react",["BaseView.react","CometNonBreakingSpace.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i={icon:{alignItems:"bp9cbjyn",display:"pq6dq46d",verticalAlign:"sf5mxxl7"},iconContainer:{display:"nc684nl6",whiteSpace:"g0qnabr5"}};function a(a){var c=a.children,d=a.iconAfter,e=a.iconBefore,f=a.iconOverrideVerticalStyle,g=a.observeDirectionality;g=g===void 0?!1:g;a=a.spacing;a=a===void 0?.5:a;e=h.jsxs(h.Fragment,{children:[e!=null&&h.jsxs(b("BaseView.react"),{xstyle:i.iconContainer,children:[h.jsx(b("BaseView.react"),{xstyle:babelHelpers["extends"]({},i.icon,f),children:e}),h.jsx(b("CometNonBreakingSpace.react"),{size:a})]}),c,d!=null&&h.jsxs(b("BaseView.react"),{xstyle:i.iconContainer,children:[h.jsx(b("CometNonBreakingSpace.react"),{size:a}),h.jsx(b("BaseView.react"),{xstyle:babelHelpers["extends"]({},i.icon,f),children:d})]})]});return g?h.jsx("span",{dir:"auto",children:e}):e}}),null);
__d("CometMenuItemBase.react",["BaseFocusRing.react","CometMenuContext","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometMenuItemHighlightContext","CometNonBreakingSpace.react","CometPressable.react","CometPressableOverlay.react","CometTextWithIcon.react","TetraText.react","TetraTextPairing.react","mergeRefs","react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h,i=g||b("react"),j={aux:{marginStart:"ozuftl9m"},content:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"btwxx1t3",flexGrow:"buofh1pr",justifyContent:"i1fnvgqd",minWidth:"hpfvmrgz"},disabled:{cursor:"rj84mg9z"},listItem:{alignItems:"bp9cbjyn",appearance:"dwo3fsh8",boxSizing:"rq0escxv",cursor:"nhd2j8a9",display:"j83agx80",flexDirection:"btwxx1t3",flexShrink:"pfnyh3mw",marginTop:"kvgmc6g5",marginEnd:"oi9244e8",marginBottom:"oygrvhab",marginStart:"h676nmdw",paddingTop:"pybr56ya",paddingEnd:"dflh9lhu",paddingBottom:"f10w8fjw",paddingStart:"scb9dxdr",position:"l9j0dhe7",textAlign:"i1ao9s8h",zIndex:"du4w35lb"},listItemAlignedCenter:{alignItems:"bp9cbjyn"},listItemWithIcon:{paddingTop:"cxgpxx05",paddingEnd:"dflh9lhu",paddingBottom:"sj5x9vvc",paddingStart:"scb9dxdr"}};function a(a,c){var d=a.alignCenter;d=d===void 0?!1:d;var e=a.aux,f=a.badge,g=a.bodyColor,k=a.bodyText,l=a.disabled,m=l===void 0?!1:l;l=a.download;var n=a.href,o=a.iconNode,p=a.id,q=a.onClick,r=a.onHoverIn,s=a.onHoverOut,t=a.onPressIn,u=a.passthroughProps,v=a.prefetchQueries,w=a.preventClosingMenuOnSelect;w=w===void 0?!1:w;var x=a.preventLocalNavigation,y=a.primaryColor,z=a.primaryText,A=a.role,B=a.routeTarget,C=a.secondaryColor,D=a.secondaryText,E=a.target,F=a.testid;F=a.visuallyFocused;var G=F===void 0?!1:F;F=babelHelpers.objectWithoutPropertiesLoose(a,["alignCenter","aux","badge","bodyColor","bodyText","disabled","download","href","iconNode","id","onClick","onHoverIn","onHoverOut","onPressIn","passthroughProps","prefetchQueries","preventClosingMenuOnSelect","preventLocalNavigation","primaryColor","primaryText","role","routeTarget","secondaryColor","secondaryText","target","testid","visuallyFocused"]);var H=i.useRef(null);a=i.useContext(b("CometMenuContext"));var I=w!==!0&&a?a.onClose:null;w=n!=null||B!=null||E!=null?{download:l,passthroughProps:u,prefetchQueries:v,preventLocalNavigation:x,routeTarget:B,target:E,url:n}:void 0;a=i.useCallback(function(a){I!=null&&I(),q&&q(a)},[q,I]);l=i.useContext(b("CometMenuItemBaseRoleContext"));x=(v=(u=A)!=null?u:l)!=null?v:void 0;var J=i.useRef(G);i.useEffect(function(){var a=H.current;!J.current&&G&&a!=null&&a.scrollIntoView({block:"nearest"})},[G]);B=i.useMemo(function(){return b("mergeRefs")(c,H)},[c]);var K=f!=null?typeof f==="number"?i.jsxs(i.Fragment,{children:[z,i.jsx(b("CometNonBreakingSpace.react"),{size:.5}),i.jsx(b("TetraText.react"),{color:m?"disabled":y,type:"body4",children:f})]}):i.jsx(b("CometTextWithIcon.react"),{iconAfter:f,children:z}):z;return i.jsx(b("CometMenuFocusGroup").FocusItem,{children:i.jsx(b("CometPressable.react"),babelHelpers["extends"]({},F,{disabled:m,display:"inline",id:p,linkProps:w,onHoverIn:r,onHoverOut:s,onPress:a,onPressIn:t,overlayDisabled:!0,ref:B,role:x,testid:void 0,xstyle:[j.listItem,d&&j.listItemAlignedCenter,o!=null&&j.listItemWithIcon,m&&j.disabled,G&&b("BaseFocusRing.react").focusRingXStyle],children:function(a){var c=a.focused,d=a.focusVisible,f=a.hovered;a=a.pressed;return i.jsxs(b("CometMenuItemHighlightContext").Provider,{value:c&&d||f,children:[o,i.jsxs("div",{className:(h||(h=b("stylex")))(j.content),children:[i.jsx(b("TetraTextPairing.react"),{body:k,bodyColor:g,headline:K,headlineColor:m?"disabled":y,level:4,meta:D,metaColor:C,reduceEmphasis:!0}),e!=null&&i.jsx("div",{className:(h||(h=b("stylex")))(j.aux),children:e})]}),i.jsx(b("CometPressableOverlay.react"),{focusVisible:d||G,hovered:f,pressed:a,radius:4})]})}}))})}c=i.forwardRef(a);e.exports=c}),null);
__d("CometMenuItemIcon.react",["CometImageIcon.react","IconSource","ImageIconSource","TetraIcon.react","react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h,i=g||b("react"),j={contained:{backgroundColor:"tdjehn4e",borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",height:"tv7at329",minWidth:"odlk74j0"},root:{alignItems:"bp9cbjyn",alignSelf:"tiyi1ipj",display:"j83agx80",justifyContent:"taijpn5t",marginEnd:"tvfksri0"}};function a(a){var c=a.disabled,d=a.icon,e=a.iconColor,f=a.iconCssSelectorId;a=a.use;var g=a===void 0?"normal":a;a=i.useMemo(function(){if(d instanceof b("IconSource")){var a;return i.jsx(b("TetraIcon.react"),{color:(a=e)!=null?a:"primary",disabled:c,icon:d})}if(d instanceof b("ImageIconSource"))return i.jsx(b("TetraIcon.react"),{disabled:c,icon:d});return typeof d==="object"&&typeof d!=="function"?i.jsx(b("CometImageIcon.react"),babelHelpers["extends"]({},d,{size:g==="contained"?36:20})):i.jsx(b("TetraIcon.react"),{color:(a=e)!=null?a:"secondary",disabled:c,icon:d})},[c,d,e,g]);return i.jsx("div",{className:(h||(h=b("stylex")))([j.root,(g==="contained"||g==="contained_small_icon")&&j.contained]),id:f,children:a})}c=i.memo(a);e.exports=c}),null);
__d("CometMenuItem.react",["CometBadge.react","CometMenuItemBase.react","CometMenuItemIcon.react","TetraIcon.react","TetraTextPairing.react","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a,c){var d=a.auxItem,e=a.icon,f=a.iconCssSelectorId,g=a.iconStyle;g=g===void 0?"normal":g;a=babelHelpers.objectWithoutPropertiesLoose(a,["auxItem","icon","iconCssSelectorId","iconStyle"]);var i=null;if(d!=null)switch(d.type){case"text":i=h.jsx(b("TetraTextPairing.react"),{level:3,meta:d.auxText});break;case"badge":i=h.jsx(b("CometBadge.react"),{color:d.color});break;case"icon":i=h.jsx(b("TetraIcon.react"),{icon:d.icon});break}return h.jsx(b("CometMenuItemBase.react"),babelHelpers["extends"]({},a,{alignCenter:!0,aux:i,iconNode:e!=null?h.jsx(b("CometMenuItemIcon.react"),{disabled:a.disabled,icon:e,iconCssSelectorId:f,use:g}):null,ref:c}))}c=h.forwardRef(a);e.exports=c}),null);