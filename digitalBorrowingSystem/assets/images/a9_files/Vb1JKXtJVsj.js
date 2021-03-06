if (self.CavalryLogger) { CavalryLogger.start_js(["2MQYd"]); }

__d("CometHovercardGroupContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext({groupID:void 0});d=c;e.exports=d}),null);
__d("VideoChatLinksUserActionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:VideoChatLinksUserActionsLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:VideoChatLinksUserActionsLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:VideoChatLinksUserActionsLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setCallEndReason=function(a){this.$1.call_end_reason=a;return this};c.setCallID=function(a){this.$1.call_id=a;return this};c.setCameraEnabled=function(a){this.$1.camera_enabled=a;return this};c.setClientAppVersion=function(a){this.$1.client_app_version=a;return this};c.setClientLockStatus=function(a){this.$1.client_lock_status=a;return this};c.setClientMonoTimeMs=function(a){this.$1.client_mono_time_ms=a;return this};c.setClienttime=function(a){this.$1.clienttime=a;return this};c.setComponent=function(a){this.$1.component=a;return this};c.setConferenceNameRaw=function(a){this.$1.conference_name_raw=a;return this};c.setCreationAction=function(a){this.$1.creation_action=a;return this};c.setErrorDetails=function(a){this.$1.error_details=a;return this};c.setErrorType=function(a){this.$1.error_type=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setEventDetails=function(a){this.$1.event_details=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setEventFireTimestamp=function(a){this.$1.event_fire_timestamp=a;return this};c.setEventFireTimestampOnClient=function(a){this.$1.event_fire_timestamp_on_client=a;return this};c.setExceptionObject=function(a){this.$1.exception_object=a;return this};c.setExperimentsEnabled=function(a){this.$1.experiments_enabled=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setFalcoBatchSequence=function(a){this.$1.falco_batch_sequence=a;return this};c.setFunnelSessionIDRaw=function(a){this.$1.funnel_session_id_raw=a;return this};c.setGroupSize=function(a){this.$1.group_size=a;return this};c.setGuestUserID=function(a){this.$1.guest_user_id=a;return this};c.setKickedUserID=function(a){this.$1.kicked_user_id=a;return this};c.setLinkShareTo=function(a){this.$1.link_share_to=a;return this};c.setLocalCallID=function(a){this.$1.local_call_id=a;return this};c.setMediaDevices=function(a){this.$1.media_devices=a;return this};c.setMicrophoneEnabled=function(a){this.$1.microphone_enabled=a;return this};c.setOpenLinkFrom=function(a){this.$1.open_link_from=a;return this};c.setOpenLinkFromAppVersion=function(a){this.$1.open_link_from_app_version=a;return this};c.setReason=function(a){this.$1.reason=a;return this};c.setReferralSurface=function(a){this.$1.referral_surface=a;return this};c.setRoomIDRaw=function(a){this.$1.room_id_raw=a;return this};c.setServerInfoData=function(a){this.$1.server_info_data=a;return this};c.setSource=function(a){this.$1.source=a;return this};c.setStatus=function(a){this.$1.status=a;return this};c.setSurface=function(a){this.$1.surface=a;return this};c.setTargetedUserIds=function(a){this.$1.targeted_user_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setThreadSyncRoomData=function(a){this.$1.thread_sync_room_data=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setThreadType=function(a){this.$1.thread_type=a;return this};c.setUserIdsToBeRemoved=function(a){this.$1.user_ids_to_be_removed=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setVideoCallLinkHashRaw=function(a){this.$1.video_call_link_hash_raw=a;return this};c.setVideoCallLinkIDRaw=function(a){this.$1.video_call_link_id_raw=a;return this};c.setVideoCallLinkIdentifierRaw=function(a){this.$1.video_call_link_identifier_raw=a;return this};c.setVideoCallLinkURLRaw=function(a){this.$1.video_call_link_url_raw=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={call_end_reason:!0,call_id:!0,camera_enabled:!0,client_app_version:!0,client_lock_status:!0,client_mono_time_ms:!0,clienttime:!0,component:!0,conference_name_raw:!0,creation_action:!0,error_details:!0,error_type:!0,event:!0,event_details:!0,event_fire_timestamp:!0,event_fire_timestamp_on_client:!0,exception_object:!0,experiments_enabled:!0,falco_batch_sequence:!0,funnel_session_id_raw:!0,group_size:!0,guest_user_id:!0,kicked_user_id:!0,link_share_to:!0,local_call_id:!0,media_devices:!0,microphone_enabled:!0,open_link_from:!0,open_link_from_app_version:!0,reason:!0,referral_surface:!0,room_id_raw:!0,server_info_data:!0,source:!0,status:!0,surface:!0,targeted_user_ids:!0,thread_sync_room_data:!0,thread_type:!0,user_ids_to_be_removed:!0,video_call_link_hash_raw:!0,video_call_link_id_raw:!0,video_call_link_identifier_raw:!0,video_call_link_url_raw:!0};e.exports=a}),null);