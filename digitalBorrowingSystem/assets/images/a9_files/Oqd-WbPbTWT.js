if (self.CavalryLogger) { CavalryLogger.start_js(["wlGML"]); }

__d("MWChatMediaRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3067366190029158",metadata:{},name:"MWChatMediaRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("JSResource",["JSResourceReference"],(function(a,b,c,d,e,f){e.exports=a;var g={};function h(a,b){g[a]=b}function i(a){return g[a]}function a(a){a=a;var c=i(a);if(c)return c;c=new(b("JSResourceReference"))(a);h(a,c);return c}a.Reference=b("JSResourceReference");a.loadAll=b("JSResourceReference").loadAll}),null);
__d("JSResourceForInteraction",["JSResource"],(function(a,b,c,d,e,f){function a(a){return b("JSResource").call(null,a)}c=a;e.exports=c}),null);
__d("WebPixelRatio",["SiteData"],(function(a,b,c,d,e,f){f.get=a;function a(){return b("SiteData").pr!=null&&b("SiteData").pr>0?b("SiteData").pr:window.devicePixelRatio||1}}),null);
__d("MWChatMediaRoot.entrypoint",["JSResourceForInteraction","MWChatMediaRootQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.routeParams;var c=a.message_id;a=a.thread_id;return{queries:{messengerMediaRootQueryReference:{parameters:b("MWChatMediaRootQuery$Parameters"),variables:{messageID:c,scale:b("WebPixelRatio").get(),threadID:a}}}}},root:b("JSResourceForInteraction")("MWChatMediaRoot.react").__setRef("MWChatMediaRoot.entrypoint")};e.exports=a}),null);