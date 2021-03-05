if (self.CavalryLogger) { CavalryLogger.start_js(["2oaM8"]); }

__d("useCometPrerenderer",["cr:956931"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:956931")}),null);
__d("useCometEntryPointDialog",["CometDialogContext","CometRelay","CometSuspendedDialogImpl.react","clearTimeout","react","recoverableViolation","requireDeferred","setTimeout","stableStringify","useCometPrerenderer","useCometRelayEntrypointContextualEnvironmentProvider"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i=b("requireDeferred")("CometRelayEF"),j=3e4;function k(a){var c=a.onClose,d=a.otherProps;a=a.preloadedEntryPoint;d=babelHelpers["extends"]({},d,{onClose:c});return h.jsx(b("CometRelay").EntryPointContainer,{entryPointReference:a,props:d})}function a(a,c,d,e,f){var g=h.useRef(null),l=b("stableStringify")(c),m=h.useRef(null),n=h.useCallback(function(){if(m.current==null)return;b("clearTimeout")(m.current);m.current=null},[]),o=h.useCallback(function(){var a;n();a=(a=g.current)==null?void 0:(a=a.preloadedEntryPoint)==null?void 0:a.dispose;a&&a();g.current=null},[n]),p=h.useCallback(function(){m.current=b("setTimeout")(function(){o()},j)},[o]);h.useEffect(o,[o]);var q=b("useCometRelayEntrypointContextualEnvironmentProvider")(),r=h.useCallback(function(){n();if(c==null)return;if(g.current==null||g.current.dialogEntryPoint!==a||g.current.preloadParamsHash!==l){o();g.current={dialogEntryPoint:a,preloadParamsHash:l,preloadedEntryPoint:b("CometRelay").loadEntryPoint(q,a,c)};var d=i.getModuleIfRequireable();d&&a&&d.fetchPredictedResources(a,c)}return(d=g.current)==null?void 0:d.preloadedEntryPoint},[n,a,o,q,l]);d=b("useCometPrerenderer")(d,!1,function(){var b=i.getModuleIfRequireable();c&&b&&b.fetchPredictions(a,c);a.root.preload();Boolean(f==null?void 0:f.queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)&&r()},r,p);d[0];p=d[1];var s=d[2];d=d[3];var t=h.useRef(null),u=h.useContext(b("CometDialogContext")),v=h.useCallback(function(a,c,d){var f=r();if(f==null){b("recoverableViolation")("Unable to present comet EntryPoint dialog, preloadParams not set","comet_ui");return}g.current=null;var h=k,i=function(){c&&c.apply(void 0,arguments);var a=f==null?void 0:f.dispose;a&&a()};u(b("CometSuspendedDialogImpl.react"),{dialog:h,dialogProps:{otherProps:a,preloadedEntryPoint:f},fallback:e},i,d)},[u,e,r]);return[v,t,p,s,d]}}),null);
__d("objectEntries",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){return Object.entries(a)}}),null);
__d("MaybeNativePromise",["Promise"],(function(a,b,c,d,e,f){"use strict";c=a.Promise||b("Promise");b("Promise").resolve();d=c;e.exports=d}),null);
__d("useArmadilloRedirectToMessengerQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"nuxId"}],b=[{kind:"Variable",name:"nux_id",variableName:"nuxId"}],c={alias:null,args:null,kind:"ScalarField",name:"should_show",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useArmadilloRedirectToMessengerQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[c],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useArmadilloRedirectToMessengerQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{id:"3929380407124073",metadata:{},name:"useArmadilloRedirectToMessengerQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("ArmadilloDiodeTest.bs",["qex"],(function(a,b,c,d,e,f){"use strict";a=b("qex")._("1893872");c=b("qex")._("1895495");d=c==null||c!=="m_dot_com"?!1:!0;e=b("qex")._("1895495");c=e==null||e!=="desktop"?!1:!0;f.isChatDisabled=a;f.diodeToMessenger=d;f.diodeToDesktop=c}),null);
__d("ArmadilloDiodeTest.re",["ArmadilloDiodeTest.bs"],(function(a,b,c,d,e,f){a=b("ArmadilloDiodeTest.bs").isChatDisabled;f.isChatDisabled=a;c=b("ArmadilloDiodeTest.bs").diodeToMessenger;f.diodeToMessenger=c;d=b("ArmadilloDiodeTest.bs").diodeToDesktop;f.diodeToDesktop=d}),null);
__d("useArmadilloRedirectToMessenger",["CometDismissFBNuxMutation","CometRelay","JSResourceForInteraction","cr:1904236","promiseDone","react","useArmadilloRedirectToMessengerQuery.graphql","useCometLazyDialog"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react"),j=b("JSResourceForInteraction")("MWChatArmadilloDiodeDialog.react").__setRef("useArmadilloRedirectToMessenger"),k=8806,l=g!==void 0?g:g=b("useArmadilloRedirectToMessengerQuery.graphql");function a(){var a=b("useCometLazyDialog")(j),c=a[0],d=b("CometRelay").useRelayEnvironment(),e=b("cr:1904236")();return i.useCallback(function(a){b("promiseDone")(b("CometRelay").fetchQuery(d,l,{nuxId:k},{fetchPolicy:"store-or-network"}).toPromise().then(function(f){(f==null?void 0:(f=f.nux)==null?void 0:f.should_show)===!0?c({threadKey:a},function(){b("CometDismissFBNuxMutation").commit(d,k)}):e(a)}))},[c,d,e])}}),null);
__d("MWChatOpenTabForPage.bs",["LSThreadAttributionStore.bs","MWChatInteraction.bs","MWChatMultitabContext.bs","MWChatMultitabDispatcher.bs","MWChatOpenFantaTabForCoB","MWChatStateThread.bs","MWChatTabEntryPoints.bs","MercuryIDs","MessengerWebEvent","MessengerWebStgTypedLoggerLite.bs","ODS","React","useCometFeedNoRoutingNavigationEventLogger","useMWChatOpenTabTraceProvider"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c,d){var e=a!==void 0?a:!1,f=c!==void 0?c:"unknown",h=g.useContext(b("MWChatMultitabContext.bs").context),i=b("useMWChatOpenTabTraceProvider")(),j=b("useCometFeedNoRoutingNavigationEventLogger")(),k=b("MWChatOpenFantaTabForCoB").useHook();return g.useCallback(function(a){j(Date.now(),"","messenger");b("ODS").bumpEntityKey(3185,"mwchat_tab","open_page");b("MWChatTabEntryPoints.bs").tabEntryPoints[a]=d;b("LSThreadAttributionStore.bs").setSource(a,f);b("MessengerWebStgTypedLoggerLite.bs").log({entry_point:d,event_name:b("MessengerWebEvent").OPEN_CHAT_TAB,other_user_fbid:a,thread_fbid:null});return i(function(c){b("MWChatInteraction.bs").set(b("MWChatStateThread.bs").toString({_0:{NAME:"Page",VAL:a}}),c);if(h!==void 0)return b("MWChatMultitabDispatcher.bs").dispatch(void 0,h,{TAG:1,_0:{NAME:"Page",VAL:a},_1:{preventAutofocus:e}});else return k(b("MercuryIDs").getThreadIDFromUserID(a))},"page",d)},[d,h,j,i,k,e,f])}f.useHook=a}),null);
__d("usePrevious",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var b=g.useRef(null);g.useEffect(function(){b.current=a});return b.current}}),null);