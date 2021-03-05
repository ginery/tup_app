if (self.CavalryLogger) { CavalryLogger.start_js(["UREMG"]); }

__d("CometIconNotificationsFilled.react",["CometSVGIcon.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("CometSVGIcon.react"),babelHelpers["extends"]({viewBox:"0 0 28 28"},a,{children:h.jsx("path",{d:"M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"})}))}}),null);
__d("CometProfileNavigationLinkRelayQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"scale"}],b={alias:null,args:[{kind:"Literal",name:"height",value:50},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:50}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometProfileNavigationLinkRelayQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"account_user",plural:!1,selections:[b,c],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometProfileNavigationLinkRelayQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"account_user",plural:!1,selections:[b,c,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"3142026525836820",metadata:{},name:"CometProfileNavigationLinkRelayQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometIconMessenger.react",["CometSVGIcon.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("CometSVGIcon.react"),babelHelpers["extends"]({viewBox:"0 0 28 28"},a,{children:h.jsx("path",{d:"M14 2.041c-6.841 0-12 5-12 11.64a11.373 11.373 0 0 0 3.77 8.61.965 .965 0 0 1 .321.684l.065 2.131a.96.96 0 0 0 1.348.852l2.381-1.051a.963.963 0 0 1 .641-.047A13.117 13.117 0 0 0 14 25.321c6.841 0 12-5 12-11.64S20.841 2.041 14 2.041Zm0 21.78a11.573 11.573 0 0 1-3.075-.408 2.479 2.479 0 0 0-1.646.122l-1.647.727-.041-1.333a2.473 2.473 0 0 0-.822-1.756A9.892 9.892 0 0 1 3.5 13.681C3.5 7.9 8.014 3.541 14 3.541s10.5 4.359 10.5 10.14S19.986 23.821 14 23.821ZM20.379 10.241l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481L6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592A.57.57 0 0 0 20.379 10.241Z"})}))}}),null);
__d("CometIconFriendsFilled.react",["CometSVGIcon.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("CometSVGIcon.react"),babelHelpers["extends"]({viewBox:"0 0 28 28"},a,{children:h.jsx("path",{d:"M20.34 22.428c.077-.455.16-1.181.16-2.18 0-1.998-.84-3.981-2.12-5.41-.292-.326-.077-.838.36-.838h2.205C24.284 14 27 16.91 27 20.489c0 1.385-1.066 2.51-2.378 2.51h-3.786a.496.496 0 01-.495-.571zM20 13c-1.93 0-3.5-1.794-3.5-4 0-2.467 1.341-4 3.5-4s3.5 1.533 3.5 4c0 2.206-1.57 4-3.5 4zm-9.5-1c-2.206 0-4-2.019-4-4.5 0-2.818 1.495-4.5 4-4.5s4 1.682 4 4.5c0 2.481-1.794 4.5-4 4.5zm2.251 2A6.256 6.256 0 0119 20.249v1.313A2.44 2.44 0 0116.563 24H4.438A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.249 14h4.502z"})}))}}),null);
__d("CometIconWatch.react",["CometSVGIcon.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("CometSVGIcon.react"),babelHelpers["extends"]({viewBox:"0 0 28 28"},a,{children:h.jsx("path",{d:"M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"})}))}}),null);
__d("CometIconFeedFilled.react",["CometSVGIcon.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("CometSVGIcon.react"),babelHelpers["extends"]({viewBox:"0 0 28 28"},a,{children:h.jsx("path",{d:"M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"})}))}}),null);
__d("CometAppNavigationEndSectionItem.react",["react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=g||b("react"),j={displayNone:{display:"mkhogb32"},layoutEndButton:{alignItems:"bp9cbjyn",display:"j83agx80",height:"datstx6m",justifyContent:"taijpn5t",marginEnd:"oi9244e8"},widePivotLink:{"@media (max-width: 1260px)":{display:"d74ut37n"},"@media (max-width: 1379px)":{maxWidth:"dt6l4hlj"},"@media (min-width: 1380px) and (max-height: 789px)":{maxWidth:"aferqb4h"},"@media (min-width: 1380px) and (min-height: 790px)":{maxWidth:"q5xnexhs"}}};function a(a){var c=a.children,d=a.displayNone;d=d===void 0?!1:d;var e=a.noWrapper;e=e===void 0?!1:e;a=a.widePivotLink;a=a===void 0?!1:a;return e?c:i.jsx("div",{className:(h||(h=b("stylex")))([j.layoutEndButton,a&&j.widePivotLink,d&&j.displayNone]),children:c})}}),null);
__d("MWChatBadgeUpdater.react",["CometRelay","cr:1872370","react","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i=b("cr:1872370").useBadgeCountUpdates;function a(){var a=b("CometRelay").useRelayEnvironment(),c=i(function(){});h.useEffect(function(){a.commitUpdate(function(a){var d=a.getRoot();if(d==null){b("recoverableViolation")("A store root must be present to move forward.","messenger_comet");return}d=d.getLinkedRecord("viewer");if(d==null){b("recoverableViolation")("A viewer record does not exist.","messenger_comet");return}var e=d.getLinkedRecord("message_threads");if(e==null){var f="client:root:viewer:message_threads";e=a.create(f,"ViewerMessageThreadsConnection");d.setLinkedRecord(e,"message_threads")}if(c!==null&&c!==void 0){a=e.getValue("unseen_count");(a===null||a!==c)&&e.setValue(c,"unseen_count")}})},[c,a]);return null}}),null);
__d("CometActorGatewayEnrollSubscription",["CometActorGatewayEnrollSubscription.graphql","CometRelay","CurrentUser","RelayRTIGraphQLSubscriptionTopicProvider","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";f.subscribeToActorGatewayEnrollments=a;var g,h=g!==void 0?g:g=b("CometActorGatewayEnrollSubscription.graphql");f.subscription=h;b("RelayRTIGraphQLSubscriptionTopicProvider").registerProviderForQuery(h,function(){return"gqls/actor_gateway_enroll_subscribe/actor_id_"+b("CurrentUser").getAccountID()});function a(a){var c=a.environment,d=a.input,e=a.onCompleted;a=a.onError;var f=function(a){var b=a.getRootField("actor_gateway_enroll_subscribe");if(b==null)return;b=b.getLinkedRecord("enrollment");if(b==null)return;var c=a.getRoot().getLinkedRecord("actor_gateway_open_enrollment");c==null&&a.getRoot().setLinkedRecord(b,"actor_gateway_open_enrollment")};return b("CometRelay").requestSubscription(c,{onCompleted:e,onError:a,subscription:h,updater:f,variables:{input:d,scale:b("WebPixelRatio").get()}})}}),null);
__d("useCreateMenuComposerDialog",["fbt","react","useFeedComposerCometDialog","useResumableComposerViewState"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react");function a(a){a=a===void 0?{}:a;var c=a.composerEntryPointName;c=c===void 0?"navbar_create_menu":c;var d=a.composerSourceSurface;d=d===void 0?"newsfeed":d;a=a.composerType;a=a===void 0?"feed":a;var e=b("useResumableComposerViewState")(),f=e.clearResumableViewState,h=e.getResumableViewState,j=e.saveResumableViewState;e=i.useCallback(function(){f()},[f]);var k=i.useCallback(function(a){j(a)},[j]);c=b("useFeedComposerCometDialog")({composerEntryPointName:c,composerSourceSurface:d,composerType:a,onBeforeClose:k,onSave:e,title:g._("Create Post"),tracePolicy:"comet.composer.feed.navbar_create_menu"});var l=c[0];d=i.useCallback(function(){var a=h();l({beginningViewState:a})},[h,l]);return[d]}}),null);
__d("CometIconWatchFilled.react",["CometSVGIcon.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("CometSVGIcon.react"),babelHelpers["extends"]({viewBox:"0 0 28 28"},a,{children:h.jsx("path",{d:"M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75"})}))}}),null);
__d("CometMetaManagerQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"environment"}],b=[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"environment",variableName:"environment"}],kind:"ScalarField",name:"notifications_unseen_count",storageKey:null},{alias:null,args:null,concreteType:"ViewerMessageThreadsConnection",kind:"LinkedField",name:"message_threads",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"unseen_count",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMetaManagerQuery",selections:b,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMetaManagerQuery",selections:b},params:{id:"2742458825861158",metadata:{},name:"CometMetaManagerQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometSettingsDropdownLoadingState.react",["CometListItemGlimmer.react","CometMenuSeparator.react","CometPopover.react","qex","react"],(function(a,b,c,d,e,f){"use strict";e.exports=j;var g,h=g||b("react"),i=b("qex")._("1875564");function j(a){a=a.iconSize;a=a===void 0?"large":a;return i===!0?h.jsx(j.WithoutPopover,{iconSize:a}):h.jsx("div",{className:"knvmm38d",children:h.jsx(b("CometPopover.react"),{children:h.jsx(j.WithoutPopover,{iconSize:a})})})}j.WithoutPopover=function(a){a=a.iconSize;return h.jsxs("div",{className:"o36gj0jk a8nywdso sj5x9vvc rz4wbd8a cxgpxx05",children:[h.jsx(b("CometListItemGlimmer.react"),{imageSize:a==="large"?60:36,imageStyle:"circle",numberOfItems:a==="large"?1:2}),h.jsx(b("CometMenuSeparator.react"),{}),h.jsx(b("CometListItemGlimmer.react"),{imageSize:36,imageStyle:"circle",numberOfItems:1}),h.jsx(b("CometMenuSeparator.react"),{}),h.jsx(b("CometListItemGlimmer.react"),{imageSize:36,imageStyle:"circle",numberOfItems:5})]})}}),null);
__d("CometWatchAndScrollProvider.react",["CometSetWatchAndScrollVideoContext","CometVideoHomeWatchAndScrollTriggerManager.react","CometWatchAndScrollSetStoryViewabilityLoggerContext","CometWatchAndScrollSoundContext","CometWatchAndScrollStoryViewabilityLoggerContext","CometWatchAndScrollVideoContext","react","useCometTahoeChainingDepth"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){a=a.children;var c=h.useState(null),d=c[0];c=c[1];var e=h.useState(null),f=e[0];e=e[1];var g=h.useState(null),i=g[0],j=g[1];g=h.useState(null);var k=g[0],l=g[1];g=h.useMemo(function(){return{muted:k,setMuted:l,setVolume:j,volume:i}},[k,l,j,i]);var m=b("useCometTahoeChainingDepth").useChainingDepth();return h.jsx(b("CometWatchAndScrollVideoContext").Provider,{value:d,children:h.jsx(b("CometSetWatchAndScrollVideoContext").Provider,{value:c,children:h.jsx(b("CometWatchAndScrollStoryViewabilityLoggerContext").Provider,{value:f,children:h.jsx(b("CometWatchAndScrollSetStoryViewabilityLoggerContext").Provider,{value:e,children:h.jsx(b("CometVideoHomeWatchAndScrollTriggerManager.react"),{children:h.jsx(b("CometWatchAndScrollSoundContext").Provider,{value:g,children:h.jsx(b("useCometTahoeChainingDepth").CometTahoeChainingDepthContextProvider,{value:m,children:a})})})})})})})}}),null);
__d("CometSettingsBadgeQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"device_switchable_account_has_notification",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometSettingsBadgeQuery",selections:a,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"CometSettingsBadgeQuery",selections:a},params:{id:"3134177003323250",metadata:{},name:"CometSettingsBadgeQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("useCometLogout",["CometPlaceholder.react","deferredLoadComponent","react","recoverableViolation","requireDeferred"],(function(a,b,c,d,e,f){"use strict";f.CometLogoutProvider=a;f.useCometLogout=c;var g,h=g||b("react"),i=b("deferredLoadComponent")(b("requireDeferred")("CometLogoutHandler.react")),j=h.createContext(function(){b("recoverableViolation")("No provider of CometLogoutContext exists","comet_infra")});function a(a){a=a.children;var c=h.useState(!1),d=c[0],e=c[1],f=h.useRef();c=h.useCallback(function(){f.current!=null?f.current.logout():e(!0)},[]);return h.jsxs(j.Provider,{value:c,children:[h.jsx(b("CometPlaceholder.react"),{fallback:null,children:h.jsx(i,{ref:f,shouldInitiateLogout:d})}),a]})}function c(){return h.useContext(j)}}),null);
__d("CometBaseAppNavigation.react",["CometContextualLayerAnchorRoot.react","CometProductAttributionContextProvider.react","CometSection.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=a.endSection,d=a.searchSection,e=a.startButtons;a=a.tabBar;return h.jsx(b("CometSection.react"),{role:"banner",children:h.jsxs(b("CometProductAttributionContextProvider.react"),{value:"topnav",children:[h.jsx("div",{className:"ehxjyohh kr520xx4 j9ispegn poy2od1o dhix69tm byvelhso buofh1pr j83agx80 rq0escxv bp9cbjyn",children:h.jsx(b("CometContextualLayerAnchorRoot.react"),{children:e})}),d,a,h.jsx("div",{className:"ehxjyohh kr520xx4 poy2od1o b3onmgus hv4rvrfc n7fi1qx3",children:h.jsx(b("CometContextualLayerAnchorRoot.react"),{children:c})})]})})}}),null);
__d("CometIconPagesFilled.react",["CometSVGIcon.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("CometSVGIcon.react"),babelHelpers["extends"]({viewBox:"0 0 28 28"},a,{children:h.jsx("path",{d:"M5 3.25v-1a.75.75 0 011.5 0v1a.75.75 0 01-1.5 0zm1.5 12.001a.75.75 0 01-1.5 0V8.749a.75.75 0 011.5 0v6.502zM5.75 20a.75.75 0 01.75.75v6.5a.75.75 0 01-1.5 0v-6.5a.75.75 0 01.75-.75zM24.857 5.328a.745.745 0 01.105.674L22.99 12l1.973 6.015a.75.75 0 01-.712.984H4.75a.75.75 0 010-1.5H7.5A.5.5 0 008 17V7.018a.5.5 0 00-.5-.5H4.75a.75.75 0 01-.003-1.5l4-.018c.078.01.11.006.164.018h15.34a.75.75 0 01.606.31z"})}))}}),null);
__d("CometInitializeNotificationToast.react",["CometRelay","react","requireDeferred","useHideNotificationsToasts","useToasterStateManager"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i=b("requireDeferred")("CometSetupNotificationStoreSubscription");function a(){var a=b("useHideNotificationsToasts")(),c=b("useToasterStateManager")(),d=h.useRef(null),e=h.useState(null),f=e[0],g=e[1],j=b("CometRelay").useRelayEnvironment();h.useEffect(function(){var a,b=!1;i.onReady(function(e){b||(a=e(c,j),d.current=a,g(!0))});return function(){a!=null&&(a.disposable.dispose(),a=null,b=!0)}},[c,j]);h.useEffect(function(){d.current!=null&&a!=null&&d.current.setFilter(a);return function(){d.current!=null&&a!=null&&d.current.setFilter(null)}},[a,f]);return null}}),null);
__d("CometWelcomeView.react",["CometPlaceholder.react","CometRelay","CometWelcomeViewQuery.graphql","emptyFunction","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c;a=a.ignoreNux;a=a===void 0?!1:a;a=b("CometRelay").useLazyLoadQuery(g!==void 0?g:g=b("CometWelcomeViewQuery.graphql"),{ignore_nux:a});c=a==null?void 0:(c=a.viewer)==null?void 0:c.comet_welcome_renderer;a=a==null?void 0:(a=a.viewer)==null?void 0:a.is_eligible_for_account_level_settings;return i.jsx(b("CometPlaceholder.react"),{fallback:null,children:c!=null?i.jsx(b("CometRelay").MatchContainer,{match:c,props:{eligibleForAccountSettings:a,onClose:b("emptyFunction")}}):null})}}),null);
__d("CometIconPages.react",["CometSVGIcon.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("CometSVGIcon.react"),babelHelpers["extends"]({viewBox:"0 0 28 28"},a,{children:h.jsx("path",{d:"M5.75 4A.75.75 0 015 3.25v-1a.75.75 0 011.5 0v1a.75.75 0 01-.75.75zm.75 11.251a.75.75 0 01-1.5 0V8.749a.75.75 0 011.5 0v6.502zM5.75 28a.75.75 0 01-.75-.75v-6.5a.75.75 0 011.5 0v6.5a.75.75 0 01-.75.75zm15.737-16.234L23.214 6.5H9.5v11h13.715l-1.728-5.266a.749.749 0 010-.468zM4.75 5h19.5a.75.75 0 01.713.986l-1.974 6.006 1.974 6.023a.75.75 0 01-.713.985H4.75a.75.75 0 010-1.502L8 17.5v-11H4.75a.749.749 0 110-1.5z"})}))}}),null);
__d("CometIconGamingFilled.react",["CometSVGIcon.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("CometSVGIcon.react"),babelHelpers["extends"]({viewBox:"0 0 28 28"},a,{children:h.jsx("path",{d:"M10.25 18.5h6.25a.5.5 0 01.5.5v5.5a.5.5 0 01-.5.5H4.25C3.56 25 3 24.44 3 23.75V4.25C3 3.56 3.56 3 4.25 3h19.5c.69 0 1.25.56 1.25 1.25V9a.5.5 0 01-.5.5H10.25a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75zM11.5 17a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v12.25c0 .69-.56 1.25-1.25 1.25H19a.5.5 0 01-.5-.5v-6.75a.75.75 0 00-.75-.75H11.5z"})}))}}),null);
__d("CometEventListener",["unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";function g(a,c,d,e){if(a.addEventListener){a.addEventListener(c,d,e);return{remove:function(){a.removeEventListener(c,d,e)}}}else throw b("unrecoverableViolation")('Attempted to listen to eventType "'+c+'" on a target that does not have addEventListener.',"comet_ui")}a={bubbleWithPassiveFlag:function(a,b,c,d){return g(a,b,c,{capture:!1,passive:d})},capture:function(a,b,c){return g(a,b,c,!0)},captureWithPassiveFlag:function(a,b,c,d){return g(a,b,c,{capture:!0,passive:d})},listen:function(a,b,c){return g(a,b,c,!1)},registerDefault:function(a,c){throw b("unrecoverableViolation")("EventListener.registerDefault is not implemented.","comet_ui")},suppress:function(a){a.preventDefault(),a.stopPropagation()}};e.exports=a}),null);
__d("MWChatMultitabProvider.bs",["MWChatCrushState.bs","MWChatMultitabContext.bs","MWChatMultitabCookieReader.bs","MWChatMultitabDispatcher.bs","MWChatMultitabReducer.bs","MWCount.bs","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h={contents:void 0};function i(a){b("MWCount.bs").Comet.load(void 0);a=b("MWChatMultitabDispatcher.bs").make(b("MWChatMultitabReducer.bs").reducer,b("MWChatMultitabCookieReader.bs").read(void 0));h.contents=a;return h.contents}function a(a){a=h.contents;if(a!==void 0)return a.state;else return b("MWChatCrushState.bs").none}function c(a){a=a.children;var c=h.contents;c=c!==void 0?c:i(void 0);return g.createElement(b("MWChatMultitabContext.bs").context.Provider,{value:c,children:a})}d=c;f.environment=h;f.createEnvironment=i;f.getStateSnapshot=a;f.make=d}),null);
__d("CometRoomsInterstitialPromotion.react",["CometRelay","CometRoomsInterstitialPromotionQuery.graphql","WebPixelRatio","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c;a=b("CometRelay").useLazyLoadQuery(g!==void 0?g:g=b("CometRoomsInterstitialPromotionQuery.graphql"),{scale:b("WebPixelRatio").get()});c=a==null?void 0:(c=a.viewer)==null?void 0:(c=c.eligible_promotions)==null?void 0:(c=c.nodes)==null?void 0:(c=c[0])==null?void 0:(c=c.comet_qp_sections)==null?void 0:c.renderer_strategy;return(a==null?void 0:(a=a.viewer)==null?void 0:(a=a.joinable_video_chats)==null?void 0:a.should_show_educational_qp)!==!0?null:i.jsx(b("CometRelay").MatchContainer,{match:c})}}),null);
__d("CometSettingsBadge.react",["CometBadge.react","CometRelay","CometSettingsBadgeQuery.graphql","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){a=a.isActive;var c=b("CometRelay").useLazyLoadQuery(g!==void 0?g:g=b("CometSettingsBadgeQuery.graphql"),{}),d=i.useState(!1),e=d[0];d=d[1];a&&!e&&d(!0);if(e)return null;d=Boolean(c==null?void 0:(a=c.viewer)==null?void 0:a.device_switchable_account_has_notification);return d===!1?null:i.jsx(b("CometBadge.react"),{border:"white",color:"red",isProfileBadge:!0,size:10})}}),null);
__d("CometIconGaming.react",["CometSVGIcon.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("CometSVGIcon.react"),babelHelpers["extends"]({viewBox:"0 0 28 28"},a,{children:h.jsx("path",{d:"M23.5 9.5H10.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75H17v5.5H4.5v-19h19v5zm0 14h-5v-6.25a.75.75 0 00-.75-.75H11V11h12.5v12.5zm1.5.25V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25v19.5c0 .689.561 1.25 1.25 1.25h19.5c.689 0 1.25-.561 1.25-1.25z"})}))}}),null);
__d("CastingProvider",["CastingContext","react","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){a=a.children;var c=h.useState(null),d=c[0],e=c[1];c=h.useState(null);var f=c[0],g=c[1];c=h.useCallback(function(a){if(d===a)return;e(a)},[d]);b("useLayoutEffect_SAFE_FOR_SSR")(function(){if(d==null)return;var a=d.getCastingState();g(a);var b=d.subscribeToCastingStateChange(g);return function(){b()}},[d]);return h.jsx(b("CastingContext").CastingStateContext.Provider,{value:f,children:h.jsx(b("CastingContext").SetCastingControllerContext.Provider,{value:c,children:a})})}}),null);
__d("CometProfileNavigationLinkWithTooltipRelayQuery_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometProfileNavigationLinkWithTooltipRelayQuery_user",selections:[{alias:null,args:[{kind:"Literal",name:"height",value:50},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:50}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("CometTopNav.react",["fbt","CometBackupPlaceholder.react","CometSection.react","react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react");function a(a){a=a.children;return i.jsx(b("CometBackupPlaceholder.react"),{fallback:null,children:i.jsx(b("CometSection.react"),{className:"taijpn5t byvelhso j83agx80",name:g._("Facebook"),role:"navigation",testid:void 0,children:i.jsx("ul",{className:"thodolrn ojvp67qx taijpn5t buofh1pr j83agx80 aovydwv3 bqdfd6uv",children:a})})})}}),null);