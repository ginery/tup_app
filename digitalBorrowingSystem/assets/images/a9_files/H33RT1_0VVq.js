if (self.CavalryLogger) { CavalryLogger.start_js(["Tuo3u"]); }

__d("MWXMAComponentStyles.bs",[],(function(a,b,c,d,e,f){"use strict";a={card:{verticalAlign:"sf5mxxl7",backgroundColor:"b3i9ofy5",overflowX:"ni8dbmo4",overflowY:"stjgntxs",height:"datstx6m"},incoming:{borderTopEndRadius:"qlfml3jp",borderBottomEndRadius:"inkptoze"},incomingFirst:{borderTopStartRadius:"e72ty7fz"},incomingLast:{borderBottomStartRadius:"qmr60zad"},outgoing:{borderTopStartRadius:"e72ty7fz",borderBottomStartRadius:"qmr60zad"},outgoingFirst:{borderTopEndRadius:"qlfml3jp"},outgoingLast:{borderBottomEndRadius:"inkptoze"},centered:{marginTop:"km676qkl",marginEnd:"ad2k81qe",marginBottom:"myj7ivm5",marginStart:"f9o22wc5"},hasText:{borderTopStartRadius:"monazrh9",borderTopEndRadius:"h905i5nu"}};b={scroller:{position:"l9j0dhe7",start:"cvthrh62",width:"bsget9wy",marginBottom:"quq7zyon"},scrollerThinTab:{width:"k4urcfbm"},cardWrapper:{backgroundColor:"hybvsw6c",height:"datstx6m",width:"k4urcfbm"},spacer:{marginTop:"pcgkmkmd"}};c={styles:b};f.common=a;f.HorizontalLayout=c}),null);
__d("GetLSWebRequestForComet.bs",["requireDeferred"],(function(a,b,c,d,e,f){"use strict";var g=b("requireDeferred")("LSWebReq.bs");function a(a){return g.load()}c=g;f.$LSWebReq$Deferred=g;f.lsWebReqDeferred=c;f.get=a}),null);
__d("GetLsDatabaseForComet.bs",["bs_curry","requireDeferred"],(function(a,b,c,d,e,f){"use strict";c=b("requireDeferred")("MWLSSchemaEphemeral.bs");var g=c.load().then(function(a){return b("bs_curry")._1(a.createDB,void 0)});function a(a){return g}f.$MWLSSchemaEphemeral$Deferred=c;f.get=a}),null);