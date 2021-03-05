if (self.CavalryLogger) { CavalryLogger.start_js(["N5TKl"]); }

__d("CometPopover.react",["BaseContextualLayerContextSizeContext","BaseContextualLayerLayerAdjustmentContext","BaseContextualLayerOrientationContext","Locale","cr:1941981","cr:1941982","react","stylex","testID","useCometDisplayTimingTrackerForInteraction"],(function(a,b,c,d,e,f){"use strict";var g,h,i=g||b("react"),j=b("Locale").isRTL(),k=j?"start":"end",l=j?"end":"start",m=6,n=16,o={arrow:{borderBottomColor:"d06cv69u",borderEndColor:"r7dfy6xl",borderStartColor:"cdcbzqsl",borderTopStyle:"goun2846",borderEndStyle:"ccm00jje",borderBottomStyle:"s44p3ltw",borderStartStyle:"mk2mc5f4",borderTopColor:"jgf7e1nu",borderTopWidth:"tl61u9r6",borderEndWidth:"bcctvi4p",borderBottomWidth:"gcjuebxg",borderStartWidth:"kvs4odcb",pointerEvents:"hzruof5a",position:"pmk7jnqg"},arrowAlignBottom:{bottom:"i09qtzwb"},arrowAlignEnd:{end:"n7fi1qx3"},arrowAlignHorizontalCenter:{start:"h9efg1rk"},arrowAlignStart:{start:"j9ispegn"},arrowAlignTop:{top:"kr520xx4"},arrowAlignVerticalCenter:{top:"rarmybbq"},card:{boxSizing:"rq0escxv",minWidth:"jgsskzai"},cardBackground:{backgroundColor:"cwj9ozl2"},cardBorderRadius:{borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi"},cardOverflow:{overflowX:"ni8dbmo4",overflowY:"stjgntxs"},cardShadow:{boxShadow:"nwpbqux9"},root:{position:"l9j0dhe7"}},p={above:{marginBottom:"ama3r5zh"},below:{marginTop:"swg4t2nn"},end:{marginStart:"aoep172s"},start:{marginEnd:"r70wmyd8"}},q={above:{borderBottomColor:"j7g94pet",borderStartColor:"b74d5cxt",boxShadow:"tpe1gtqi",top:"i42f9fw1"},below:{borderEndColor:"et4y5ytx",borderTopColor:"np69z8it",bottom:"bssd97o4",boxShadow:"n4j0glhw"},end:{borderBottomColor:"j7g94pet",borderStartColor:"b74d5cxt",boxShadow:"tpe1gtqi",end:"p72yiolg"},start:{borderBottomColor:"j7g94pet",borderEndColor:"et4y5ytx",boxShadow:"jxfglsfo",start:"lu1ps8bl"}};function a(a,c){var d,e=a.animatedPopover;e=e===void 0?!1:e;var f=a.children,g=a.id,r=a.label,s=a.onBlur,t=a.onFocus,u=a.popoverName,v=a.role;v=v===void 0?"dialog":v;var w=a.testid;a=a.withArrow;a=a===void 0?!1:a;var x=i.useContext(b("BaseContextualLayerOrientationContext")),y=x.align;x=x.position;var z=i.useContext(b("BaseContextualLayerContextSizeContext"));d=(d=i.useContext(b("BaseContextualLayerLayerAdjustmentContext")))!=null?d:0;u=b("useCometDisplayTimingTrackerForInteraction")(u);e=e&&b("cr:1941981")!=null&&b("cr:1941982")!=null?i.jsx(b("cr:1941982"),{children:i.jsx(b("cr:1941981"),{backgroundColorXStyle:o.cardBackground,borderRadius:8,boxShadowXStyle:o.cardShadow,ref:u,springConfig:{bounciness:4,speed:40},xstyle:o.card,children:f})}):i.jsx("div",{className:(h||(h=b("stylex")))(o.card,o.cardBackground,o.cardShadow,o.cardBorderRadius,o.cardOverflow),ref:u,children:f});if(!a)return i.jsx("div",babelHelpers["extends"]({"aria-label":r,className:(h||(h=b("stylex")))(o.root),id:g,onBlur:s,onFocus:t,ref:c,role:v},b("testID")(w),{children:e}));u=0;f=0;a=0;var A=0,B=0;switch(x){case"above":a+=-d;A+=-7;B=45*(j?1:-1);break;case"below":a+=-d;A+=7;B=45*(j?1:-1);break;case l:a+=-6;A+=-d;B=-45;break;case k:a+=6;A+=-d;B=45;break}if(x==="start"||x==="end"){d=z?z.height/2:0;var C=Math.max(d,n);d=C-d;y==="start"?(A+=C-m,f-=d):y==="end"&&(A-=C-m,f+=d)}else if(x==="above"||x==="below"){C=z?z.width/2:0;d=Math.max(C,n);z=d-C;y===l?(a+=d-m,u-=z):y===k&&(a-=d-m,u+=z)}C="translate("+u+"px, "+f+"px)";d="translate("+a+"px, "+A+"px) rotate("+B+"deg)";return i.jsxs("div",babelHelpers["extends"]({"aria-label":r,className:(h||(h=b("stylex")))(o.root,p[x]),id:g,onBlur:s,onFocus:t,ref:c,role:v,style:{transform:C}},b("testID")(w),{children:[e,i.jsx("div",{className:h(o.arrow,q[x],(x==="above"||x==="below")&&[y==="middle"&&o.arrowAlignHorizontalCenter,y==="start"&&o.arrowAlignStart,y==="end"&&o.arrowAlignEnd],(x==="start"||x==="end")&&[y==="middle"&&o.arrowAlignVerticalCenter,y==="start"&&o.arrowAlignTop,y==="end"&&o.arrowAlignBottom]),style:{transform:d}})]}))}c=i.forwardRef(a);e.exports=c}),null);
__d("MWChatStateThread.bs",["MWChatThreadId.bs"],(function(a,b,c,d,e,f){"use strict";function a(a){if(a)return"thread:"+b("MWChatThreadId.bs").serializeFuture(a._0);else return"search"}c=a;f.toString=a;f.toInteractionIDKey=c}),null);
__d("MWChatOpenFantaTabForCoB",["ifRequired","react","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";f.useHook=a;var g,h=g||b("react");function a(){return h.useCallback(function(a){return b("ifRequired")("FantaTabActions",function(b){return b.openTab(a,"comet_on_blue")},function(){return b("recoverableViolation")("Trying to open a tab but neither MWChat or Fanta chat exist","messenger_comet")})},[])}}),null);
__d("MWChatInteraction.bs",[],(function(a,b,c,d,e,f){"use strict";var g={};function a(a,b){g[a]=b}function b(a){return g[a]}f.interactions=g;f.set=a;f.get=b}),null);
__d("MWChatMultitabContext.bs",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(void 0);f.context=c}),null);
__d("MWChatDeduplicateThreadIds.bs",["bs_caml_obj"],(function(a,b,c,d,e,f){"use strict";function a(a){return a.filter(function(c,d){return a.findIndex(function(a){return b("bs_caml_obj").caml_equal(a,c)})===d})}f.get=a}),null);
__d("BroadcastChannel.bs",["bs_caml_option"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=window.BroadcastChannel;if(!(c==null))return b("bs_caml_option").some(new BroadcastChannel(a))}f.make=a}),null);
__d("MWChatMultitabBroadcast.bs",["BroadcastChannel.bs","CurrentUser","bs_caml_option","bs_curry"],(function(a,b,c,d,e,f){"use strict";d="ChatHeadsPlus"+b("CurrentUser").getID();var g=b("BroadcastChannel.bs").make(d);function a(a){if(g!==void 0){b("bs_caml_option").valFromOption(g).postMessage(a);return}}function c(a){if(g===void 0)return function(a){};var c=b("bs_caml_option").valFromOption(g),d=function(c){return b("bs_curry")._1(a,c.data)};c.addEventListener("message",d);return function(a){c.removeEventListener("message",d)}}f.channelName=d;f.channel=g;f.send=a;f.subscribe=c}),null);
__d("MWChatMultitabDispatcher.bs",["MWChatDeduplicateThreadIds.bs","MWChatMultitabBroadcast.bs","bs_caml_obj","bs_curry","gkx","requireDeferred"],(function(a,b,c,d,e,f){"use strict";function g(a){a.listeners.forEach(function(a){return b("bs_curry")._1(a,void 0)})}var h=b("requireDeferred")("MWChatMultitabCookieWriter.bs");function a(a,c,d){a=a!==void 0?a:!0;var e=b("bs_curry")._3(c.reducer,c.state,d,c);if(e!==c.state){a&&(b("gkx")("1812641")&&h.onReady(function(a){return b("bs_curry")._1(a.write,e)}),b("gkx")("1812710")&&b("MWChatMultitabBroadcast.bs").send({openTabsState:[],chatHeads:e.chatHeads,forceCollapsedHeads:e.forceCollapsedHeads,notificationTimers:e.notificationTimers}));c.state=e;return g(c)}}function c(a,b){return{reducer:a,state:b,listeners:[]}}function d(a,b){a.listeners.push(b);return function(c){c=a.listeners.indexOf(b);a.listeners.splice(c,1)}}function i(a,c){var d=a.openTabsState.reduce(function(a,b){b=b.threadID;if(b)return a.concat([b._0]);else return a},[]);d=b("MWChatDeduplicateThreadIds.bs").get(c.chatHeads.concat(d));return{openTabsState:a.openTabsState,chatHeads:d,forceCollapsedHeads:c.forceCollapsedHeads,notificationTimers:c.notificationTimers}}function e(a){return b("MWChatMultitabBroadcast.bs").subscribe(function(c){if(b("bs_caml_obj").caml_notequal(c,a.state)){a.state=i(a.state,c);return g(a)}})}function j(a){return a.state}f._inform=g;f.$MWChatMultitabCookieWriter$Deferred=h;f.dispatch=a;f.make=c;f.listen=d;f.getNewState=i;f.subscribe=e;f.state=j}),null);
__d("MessengerWebEvent",[],(function(a,b,c,d,e,f){a=Object.freeze({RENDER_FIRST_THREAD_CONTENT:"render_first_thread_content",SEND_MSG:"send_msg",SENT_MSG:"sent_msg",RENDER_INCOMING_MSG:"render_incoming_msg",RENDER_INBOX:"render_inbox",SHOW_SIDEBAR_CONTACTS:"show_sidebar_contacts",SEARCH_RENDER_RESULT:"search_render_result",CREATE_THREAD:"create_thread",SEARCH_CLICK_RESULT:"search_click_result",CHANGE_NICKNAME:"change_nickname",SUPPRESS_NEW_MESSAGE:"suppress_new_message",DELIVERY_RECEIPT:"delivery_receipt",OPEN_CHAT_TAB:"open_chat_tab",SWITCH_CHAT_TAB:"switch_chat_tab",MINIMIZE_CHAT_TAB:"minimize_chat_tab",LOAD_TAB_FROM_COOKIE:"load_tab_from_cookie",OPEN_THREAD_SETTINGS_MENU:"open_thread_settings_menu",OPEN_EMOJI_FLYOUT:"open_emoji_flyout",OPEN_STICKER_FLYOUT:"open_sticker_flyout",MINIMIZE_ALL_CHAT_TABS:"minimize_all_chat_tabs",CLOSE_ALL_CHAT_TABS:"close_all_chat_tabs",SELECT_FILE_FOR_UPLOAD:"select_file_for_upload",UPLOAD_FILE_SUCCESS:"upload_file_success",HIT_SEND_MESSAGE_WITH_FILES_PENDING:"hit_send_message_with_files_pending",HIT_SEND_MESSAGE_WITH_ALL_FILES_UPLOADED:"hit_send_message_with_all_files_uploaded",SEND_FILES:"send_files",RENDER_QUICK_REPLIES:"render_quick_replies",CLICK_ICEBKREAKER:"click_icebreaker"});e.exports=a}),null);
__d("MessengerWebStgTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:MessengerWebStgLoggerConfig")}),null);
__d("MessengerWebStgTypedLoggerLite.bs",["MessengerWebStgTypedLoggerLite"],(function(a,b,c,d,e,f){"use strict";function a(a){b("MessengerWebStgTypedLoggerLite").log(a)}f.log=a}),null);
__d("useMWChatOpenTabTraceProvider",["CometHeroLogging","react","useCometInteractionTracing"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i=!1;function a(){var a=b("useCometInteractionTracing")(30605380,"responsive","INTERACTION"),c=h.useCallback(function(c,d,e){a(function(a){var f=b("CometHeroLogging").genCometHeroInteractionUUIDAndMarkStart(a.getTraceId());a.onComplete(function(){a.addMetadata("threadType",d),a.addMetadata("entrypoint",e),a.addMetadata("chatExperiment","chat_heads_plus"),i?a.addMetadata("revisit",1):(a.addMetadata("revisit",0),i=!0)});c(f)})},[a]);return c}}),null);
__d("jsExtraRouteBuilder",["jsRouteBuilder","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c,d,e){var f=b("jsRouteBuilder")(a,c,e),g=d.reduce(function(a,d){a===void 0&&(a={});typeof d==="string"&&(a[d]=b("jsRouteBuilder")(d,c,e,null,!0).buildURL);return a},{});return{buildExtraURL:function(a,c){if(typeof a!=="string"||g[a]==null)throw b("unrecoverableViolation")("Route builder for extra path does not exist","comet_infra");return g[a](c)},buildURL:function(a){return f.buildURL(a)}}}}),null);