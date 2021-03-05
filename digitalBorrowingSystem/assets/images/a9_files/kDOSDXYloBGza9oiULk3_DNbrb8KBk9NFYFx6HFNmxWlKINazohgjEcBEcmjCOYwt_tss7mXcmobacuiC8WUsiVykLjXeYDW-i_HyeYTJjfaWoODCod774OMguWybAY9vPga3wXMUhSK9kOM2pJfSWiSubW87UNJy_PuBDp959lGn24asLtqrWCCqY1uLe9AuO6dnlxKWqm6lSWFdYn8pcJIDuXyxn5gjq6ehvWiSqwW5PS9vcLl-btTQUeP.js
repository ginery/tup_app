if (self.CavalryLogger) { CavalryLogger.start_js(["tFFrL"]); }

__d("SearchCometGlobalTypeaheadGlimmer.react",["CometTypeaheadRoundedInputGlimmer.react","react","stylex","useSearchCometGlobalTypeaheadStyles"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=g||b("react"),j={inputGlimmer:{flexGrow:"buofh1pr",height:"qypqp5cg"},inputStyle:{paddingEnd:"dflh9lhu"}};function a(a){a=a.inputStartContent;var c=b("useSearchCometGlobalTypeaheadStyles")();c=c.inputXStyle;return i.jsxs("div",{className:(h||(h=b("stylex")))(c,j.inputStyle),children:[a,i.jsx(b("CometTypeaheadRoundedInputGlimmer.react"),{xStyle:j.inputGlimmer})]})}}),null);
__d("CometProfileNavigationLinkRelayQuery_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometProfileNavigationLinkRelayQuery_user",selections:[{alias:null,args:[{kind:"Literal",name:"height",value:50},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:50}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("CometTypeaheadRoundedInputGlimmer.react",["BaseGlimmer.react","react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=g||b("react"),j={glimmer:{borderTopStartRadius:"br7hx15l",borderTopEndRadius:"h2jyy9rg",borderBottomEndRadius:"n3ddgdk9",borderBottomStartRadius:"owxd89k7",height:"datstx6m",width:"k4urcfbm"}};function a(a){a=a.xStyle;return i.jsx("div",{className:(h||(h=b("stylex")))(a),children:i.jsx(b("BaseGlimmer.react"),{className:h(j.glimmer),index:0})})}}),null);
__d("useCometCalloutNUX",["react","useCometCallout","useNUX.experimental"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a,c,d){var e=c.onClose,f=c.onHide,g=c.onShow;a=b("useNUX.experimental")(a,d);d=a[0];var i=a[1],j=h.useCallback(function(){i.onDismiss(),e&&e()},[i,e]),k=h.useCallback(function(){i.onHidden(),f&&f()},[i,f]),l=h.useCallback(function(){i.onVisible(),g&&g()},[i,g]);return b("useCometCallout")(h.useMemo(function(){return babelHelpers["extends"]({},c,{onClose:j,onHide:k,onShow:l})},[c,j,k,l]),d)}}),null);
__d("CometNotificationsDropdown.entrypoint",["CometNotificationsDropdownQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a={count:15,environment:"MAIN_SURFACE",menuUseEntryPoint:b("gkx")("1906915"),scale:b("WebPixelRatio").get()};return{queries:{notificationsDropdownQueryReference:{parameters:b("CometNotificationsDropdownQuery$Parameters"),variables:a}}}},root:b("JSResourceForInteraction")("CometNotificationsDropdown.react").__setRef("CometNotificationsDropdown.entrypoint")};e.exports=a}),null);
__d("CometProfilePlusAPPageInboxMessageButton.react",["fbt","CometIconMessengerFilled.react","TetraCircleButton.react","XCometPageVanityInboxControllerRouteBuilder","react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react");function a(a){a=a.mailboxID;a=b("XCometPageVanityInboxControllerRouteBuilder").buildURL({vanity:a});return i.jsx(b("TetraCircleButton.react"),{icon:b("CometIconMessengerFilled.react"),label:g._("Messenger"),linkProps:{url:a},size:40})}}),null);
__d("useAppLastUsedTimestamps",["CometRelay","react","requireDeferred"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i=b("requireDeferred")("AppLastUsedTimestampsFetcher");function a(a){var c=h.useState({}),d=c[0],e=c[1],f=b("CometRelay").useRelayEnvironment();h.useEffect(function(){var b=a.map(function(a){a=a.appID;return a}).filter(function(a){return a!=null}),c=null;i.onReady(function(a){c=a.fetch(f,b,e)});return function(){c!=null&&c.unsubscribe()}},[f,a]);return d}}),null);
__d("CometNotificationsListLoadingState.react",["fbt","CometNotificationsInteractionLogger","CometSettingsListDropdownLoadingState.react","clearTimeout","react","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react"),j=1e4;function a(){i.useEffect(function(){var a=b("setTimeout")(function(){b("CometNotificationsInteractionLogger").timeout()},j);return function(){b("clearTimeout")(a)}},[]);return i.jsx(b("CometSettingsListDropdownLoadingState.react"),{hasActions:!0,title:g._("Notifications")})}}),null);
__d("MWCometXACIntroView.react",["MWXACIntroView.react","react","useCometRouterState"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function i(){var a=b("useCometRouterState")(),c=a==null?void 0:a.main;a=a==null?void 0:a.pushViewStack;a=a&&a.length>0?a[a.length-1]:c;return(a==null?void 0:a.route.tracePolicy)==="comet.messenger.inbox"}function a(a){var c=i();return c&&a.entrypoint==="fbdotcom"?null:h.jsx(b("MWXACIntroView.react"),{entrypoint:a.entrypoint})}}),null);
__d("CometAppNavigationEndSection.react",["fbt","CometTooltipGroup.react","react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react");function a(a){a=a.children;return i.jsx(b("CometTooltipGroup.react"),{children:i.jsx("div",{"aria-label":g._("Account Controls and Settings"),className:"du4w35lb l9j0dhe7 byvelhso rl25f0pe j83agx80 bp9cbjyn",role:"navigation",children:a})})}}),null);
__d("CastingContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext(null);f.CastingStateContext=c;d=a.createContext(null);f.SetCastingControllerContext=d}),null);
__d("XCometGroupsTabControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/groups/",Object.freeze({from_ad:!1}),void 0);c=a;e.exports=c}),null);
__d("VideoHomeTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:VideoHomeLoggerConfig")}),null);
__d("getBreadcrumbTitleFromRouteState",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,b){if(!b)return a;var c=b.hosted,d=b.main;b=b.pushViewStack;var e=" | ",f=[];if(b!=null&&b.length>0){b=b[b.length-1];b=(b=b.route.meta)==null?void 0:b.title;b!=null&&f.push(b)}else{if(c!=null){c=(b=c.route.meta)==null?void 0:b.title;c!=null&&f.push(c)}c=(b=d.route.meta)==null?void 0:b.title;c!=null&&f.push(c);c=(b=d.route.meta)==null?void 0:b.accessory;c!=null&&f.push(c)}f.push(a);return f.join(e)}}),null);
__d("CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react",["CometMessagingJewelDropdown.entrypoint","CometSettingsBadgedDropdownTrigger.react","react","requireDeferred"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");c=b("requireDeferred")("CometMessagingJewelDropdown.react");c.getModuleId();function a(a){return h.jsx(b("CometSettingsBadgedDropdownTrigger.react"),babelHelpers["extends"]({},a,{dropdownEntryPoint:b("CometMessagingJewelDropdown.entrypoint"),preloadTrigger:"tooltip"}))}}),null);
__d("MWChatLogAndStoreEntrypoint.bs",["MWChatTabEntryPoints.bs","MessengerWebEvent","MessengerWebStgTypedLoggerLite.bs"],(function(a,b,c,d,e,f){"use strict";function a(a,c){if(a.NAME==="Group"){var d=a.VAL;b("MWChatTabEntryPoints.bs").tabEntryPoints[d]=c;return b("MessengerWebStgTypedLoggerLite.bs").log({entry_point:c,event_name:b("MessengerWebEvent").OPEN_CHAT_TAB,other_user_fbid:null,thread_fbid:d})}d=a.VAL;b("MWChatTabEntryPoints.bs").tabEntryPoints[d]=c;return b("MessengerWebStgTypedLoggerLite.bs").log({entry_point:c,event_name:b("MessengerWebEvent").OPEN_CHAT_TAB,other_user_fbid:d,thread_fbid:null})}f.log=a}),null);
__d("getSearchQueryFromRouterState",["getSearchCometResultsQuery","getTopMostRouteInfo","isSearchCometExploreTracePolicy","isSearchCometGlobalResultPageTracePolicy","isSearchCometScopedResultPageTracePolicy"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){a=b("getTopMostRouteInfo")(a);var c=a.route.tracePolicy;return c==null||!b("isSearchCometGlobalResultPageTracePolicy")(c)&&!b("isSearchCometScopedResultPageTracePolicy")(c)&&!b("isSearchCometExploreTracePolicy")(c)?null:b("getSearchCometResultsQuery")(a.route.rootView.props,a.route.params)}}),null);
__d("CometIconMoreFilled.react",["CometSVGIcon.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("CometSVGIcon.react"),babelHelpers["extends"]({viewBox:"0 0 28 28"},a,{children:h.jsx("path",{d:"M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"})}))}}),null);
__d("MWChatVisibleChatHeads.bs",["bs_caml_obj"],(function(a,b,c,d,e,f){"use strict";function a(a,c){a=a.filter(function(a){return c.findIndex(function(c){c=c.threadID;if(c)return b("bs_caml_obj").caml_equal(c._0,a);else return!1})===-1});var d=a.length;if(d<=6)return[a,[]];var e=a.slice(0,5);a=a.slice(5,d);return[e,a]}c=6;f.maxChatHeadBubbles=c;f.get=a}),null);
__d("useAppShellCombinedTracePolicy",["useCometRouterState"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(){var a=b("useCometRouterState")();if(a==null)return"unknown";var c=a.hosted,d=a.main;a=a.pushViewStack;var e=[];e[0]=d.route.tracePolicy;e[1]=c?c.route.tracePolicy:"";e[2]=a&&a.length>0?a[a.length-1].route.tracePolicy:"";return e.join("|")}}),null);
__d("CometRoot",["cx","BuildCometRoot","CometRootSSRClient","ExecutionEnvironment","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";f.initDeferred=a;f.initRoute=c;var h=b("requireDeferred")("CometRootDeferred");function a(a){h.onReady(function(b){b.initDeferred(a)})}function c(a,c,d,e,f){if(!b("ExecutionEnvironment").canUseDOM)return;b("CometRootSSRClient").initRoute({buildRootComponent:b("BuildCometRoot").buildRootComponent},a,c,d,e,f)}}),null);
__d("useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome",["useCometRouterState"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=["watch","marketplace","groups","gaming"];function a(){var a=b("useCometRouterState")();a=(a==null?void 0:a.main.route)||{};a=a.tabKey;return a!=="home"&&!g.includes(a)}}),null);
__d("CometMessagingJewelDropdown.entrypoint",["CometMessagingJewelDropdownQPBannerContainerQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(){return{queries:{qpBannerContainerQueryRef:{parameters:b("CometMessagingJewelDropdownQPBannerContainerQuery$Parameters"),variables:{}}}}},root:b("JSResourceForInteraction")("CometMessagingJewelDropdown.react").__setRef("CometMessagingJewelDropdown.entrypoint")};e.exports=a}),null);
__d("MWLSChatProvider.react",["LSChatBootstrapParams.re","MWChatMultiTabProvider.react","cr:1856782","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");b("cr:1856782")!=null&&b("cr:1856782").start({numThreads:b("LSChatBootstrapParams.re").numThreads});function a(a){a=a.children;return h.jsx(b("MWChatMultiTabProvider.react"),{children:a})}}),null);
__d("getGlobalSearchQueryFromRouterState",["getSearchQueryFromRouterState","getTopMostRouteInfo","isSearchCometExploreTracePolicy","isSearchCometGlobalResultPageTracePolicy"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){var c=b("getTopMostRouteInfo")(a);c=c.route.tracePolicy;return c==null||!b("isSearchCometGlobalResultPageTracePolicy")(c)&&!b("isSearchCometExploreTracePolicy")(c)?null:b("getSearchQueryFromRouterState")(a)}}),null);
__d("HiddenSubtreeContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext({backgrounded:!1,hidden:!1,hiddenOrBackgrounded:!1,hiddenOrBackgrounded_FIXME:!1});e.exports=c}),null);
__d("uniqueID",[],(function(a,b,c,d,e,f){e.exports=a;var g="js_",h=36,i=0;function a(){return g+(i++).toString(h)}}),null);
__d("CometMediaViewerFullscreenProvider.react",["CometMediaViewerFullscreenContext","CometSetMediaViewerFullscreenContext","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){a=a.children;var c=h.useState(!1),d=c[0];c=c[1];return h.jsx(b("CometMediaViewerFullscreenContext").Provider,{value:d,children:h.jsx(b("CometSetMediaViewerFullscreenContext").Provider,{value:c,children:a})})}}),null);
__d("cometSearchEventEmitter",["BaseEventEmitter","CometSearchRecentSearchEntryAddedEvent","CometSearchRecentSearchEntryRemovedEvent","SearchCometGlobalTypeaheadFocusEvent","SearchCometGlobalTypeaheadRecentSearchesClearedEvent","SearchCometScopedTypeaheadFocusEvent"],(function(a,b,c,d,e,f){"use strict";a=new(b("BaseEventEmitter"))();c=babelHelpers["extends"]({},b("CometSearchRecentSearchEntryAddedEvent")(a),b("CometSearchRecentSearchEntryRemovedEvent")(a),b("SearchCometGlobalTypeaheadFocusEvent")(a),b("SearchCometGlobalTypeaheadRecentSearchesClearedEvent")(a),b("SearchCometScopedTypeaheadFocusEvent")(a));e.exports=c}),null);
__d("PushNotificationsEventEmitter",["BaseEventEmitter","PushNotificationsEventEmitterQueue"],(function(a,b,c,d,e,f){"use strict";a=new(b("BaseEventEmitter"))();c=a;e.exports=c;a.once("openInstallPush",function(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];b("PushNotificationsEventEmitterQueue").push({args:c,type:"openInstallPush"})})}),null);
__d("MWChatMultitabCalc.bs",["bs_js_math","qex"],(function(a,b,c,d,e,f){"use strict";function a(a){if(window.innerWidth<1100)return 1;a=b("qex")._("1586109")?306:338;a=((window.innerWidth/2|0)-90|0)/a;if(a<1)return 1;else return b("bs_js_math").ceil_int(a)}f.calculateMaxOpenTabs=a}),null);
__d("useShouldPrefetchQueriesBasedOnLastUsedTimestamp",["react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i=7*24*60*60;function a(a,b){return h.useMemo(function(){if(a!==!0||b==null)return!1;var c=Date.now()/1e3;return c-b<i},[b,a])}}),null);
__d("CometMessagingJewelDropdownQPBannerContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3719048268118708",metadata:{},name:"CometMessagingJewelDropdownQPBannerContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);