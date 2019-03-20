//commonError
var lang={
    "language":"en",
    "lang_toot":"Toot",
    "lang_there":"Yes",
    "lang_nothing":"None",
    "lang_yesno":"Yes",
    "lang_no":"No",
    "lang_progress":"Wait...",
    "lang_edit":"Edit",
    "lang_del":"Delete",
    "lang_add":"Add",
    "lang_fatalerroroccured":"Some errors are occured, please restart TheDesk.",
    "lang_speech":"Google US English",
    //language.html
    "lang_lang":"Language",
    "lang_langlocale":"English",
    "lang_back":"Back",
    "lang_set":"Set",
    "lang_langadd":"Translate TheDesk to other languages or proofread TheDesk on <a href=\"https://github.com/cutls/TheDesk\" target=\"_blank\">GitHub</a>. TheDesk needs your help.",
    //common/version.js
    "lang_version_usever":"No update is found({{ver}})",
    "lang_version_skipver":"Update was ignored.",
    "lang_version_platform":"Was this software installed at Microsoft Store? When select 'yes', any update was ignored.",
    "lang_version_platform_linux":"Was this software installed at Snapcraft(snapd)? When select 'yes', any update was ignored.",
    //login
    //login/login.js
    "lang_login_noauth":"Show TL of unlogined accounts",
    //login/manager.js
    "lang_manager_info":"About this instance",
    "lang_manager_refresh":"Refresh",
    "lang_manager_delete":"Logout",
    "lang_manager_color":"Account Color",
    "lang_manager_confirm":"is about to logout. Continue?",
    "lang_manager_mainAcct":"Done:choose main account",
    "lang_manager_def":"Default",
    "lang_manager_none":"None",
    "lang_manager_godev":"Open DevCenter of Misskey. We show also an official documents to refer.",
    //post/bb-md.js
    "lang_bbmd_misskey":"TheDesk regards \"@\" as reply, but put other parameter. Unlisted on Mastodon means Home on Misskey.",
    //post/emoji.js
    "lang_emoji_get":"Get emojis",
    "lang_emoji_custom":"Custom emojis",
    "lang_defaultemojis_text":"Emojis about {{cat}}",
    //post/img.js
    "lang_postimg_previewdis":"cannot preview",
    "lang_postimg_aftupload":"You cannot change accounts after uploading.",
    //post/post.js
    "lang_post_tagTL":"This toot does not contain a default tag. This toot will not be shown on Local TL. Continue?",
    "lang_post_tagVis":"This toot(not 'public' toot) is not shown on this tag's TL.",
    "lang_post_cwtitle":"Auto CW Alert",
    "lang_post_cwtxt":"You are about to post longer toot than you set.\nWarning text:",
    "lang_post_btn1":"Cancel (will not post)",
    "lang_post_btn2":"Make text hidden automatically",
    "lang_post_btn3":"Continue to post",
    //post/status.js
    "lang_status_favWarn":"It will take a miunte to favourite a remote toot.",
    "lang_status_btWarn":"It will take a miunte to boost a remote toot.",
    "lang_status_follow":"Follow",
    "lang_status_unfollow":"Unfollow",
    "lang_status_block":"Block",
    "lang_status_unblock":"Unblock",
    "lang_status_mute":"Mute",
    "lang_status_unmute":"Unmute",
    "lang_status_redraft":"Continue to delete & redraft? You lose statuses of this toot. This fanction may contain some bugs. Images of this toot will be deleted on older than Mastodon 2.4.1.",
    "lang_status_emphas":"'s toots are emphasized. Please reload after this action.",
    "lang_status_unemphas":"'s toots are not emphasized. Please reload after this action.",
    "lang_status_unendorse":"Not feature on profile",
    "lang_status_endorse":"Feature on profile",
    //post/suggest.js
    "lang_suggest_nodata":"Please get emojis list in order to show suggestion.",
    //post/use-txtbox.js
    "lang_usetxtbox_reply":"Reply Mode. Ctrl+Shift+C to clear.",
    //tl/card.js
    "lang_cards_check":" check",
    "lang_cards_pip":"PiP mode",
    //tl/details.js
    "lang_details_nodata":"No data",
    "lang_details_filtered":"Filtered toot",
    "lang_details_embed":"Embed HTML is cliped.",
    "lang_details_url":"URL of this toot is cliped.",
    "lang_details_txt":"Content of this toot is cliped.",
    //tl/filter.js
    "lang_filter_nodata":"No data",
    "lang_filter_errordegree":"Please check a context",
    //tl/list.js
    "lang_list_nodata":"No data",
    "lang_list_show":"Show",
    "lang_list_users":"Users list",
    "lang_list_nouser":"No users in this list.",
    "lang_list_add":"Add to the list",
    "lang_list_remove":"Remove from the list",
    //tl/notification.js
    "lang_notf_new":" new notifications",
    //tl/speech.js
    "lang_speech_refresh":"Save value about TTS config",
    //tl/src.js
    "lang_src_ts":"chronological order",
    "lang_src_people":" people toot",
    //tl/tag.js
    "lang_tags_always":"Always toots with ",
    "lang_tags_realtime":"Tag-stream toot",
    "lang_tags_tagunpin":"Unpin {{tag}}",
    "lang_tags_unrealtime":"Disable TsT",
    "lang_tags_tagwarn":"Auto complete {{tag}}, if toot without {{tag}}",
    //tl/tl.js
    "lang_tl_media":"Media",
    "lang_tl_reconnect":"Reconnect to streaming API",
    //ui/layout.js
    "lang_layout_gotop":"Go top of this column. When icon is red, this column cannot connect straming API. Please reload.",
    "lang_layout_thisacct":"{{notf}} of this account",
    "lang_layout_delthis":"Remove this column",
    "lang_layout_setthis":"Preferences of this column",
    "lang_layout_mediafil":"Media filtering",
    "lang_layout_linkana":"Auto Link Analyzer",
    "lang_layout_linkanades":"Auto link analyzer",
    "lang_layout_tts":"Text to speech ",
    "lang_layout_reconnect":"Reconnect to streaming API",
    "lang_layout_headercolor":"Header color of this column",
    "lang_layout_nodata":"[No data]<br>F5/⌘+R to reload",
    "lang_layout_dm":"Direct Message",
    "lang_layout_webviewmode":"Prefer WebView",
    "lang_excluded":"Excluded type of notification",
    "lang_layout_excludingbt":"Show BT mode(OFF/Exclude BT/Only BT)",
    "lang_layout_leftFold":"Stack to the left",
    "lang_layout_leftUnfold":"Dock on the right",
    //ui/sort.js
    "lang_sort_gothis":"Go to this column",
    "lang_sort_remthis":"Delete this column",
    //ui/spotify.js
    "lang_spotify_img":"Attach an album artwork",
    "lang_spotify_imgno":"Not attach an album artwork",
    "lang_spotify_acct":"Connect TheDesk to Spotify",
    "lang_spotify_np":"Done:templete of NowPlaying",
    "lang_setting_npprovide":"NowPlaying provider:{{set}}",
    //userdata/his-data.js
    "lang_hisdata_frcreq":"Required Mastodon 2.4.3 and above",
    "lang_hisdata_frcwarn":"Unfollow accounts will be shown.",
    "lang_hisdata_taketime":"It will take 30s ~ several minutes",
    "lang_hisdata_notonmisskey":"Misskey is unable to request.",
    //userdata/showOnTL.js
    "lang_showontl_movetxt":"This account was moved",
    "lang_showontl_movebtn":"Continue on the new account",
    "lang_showontl_botacct":"[bot]",
    "lang_showontl_followed":"Following you",
    "lang_showontl_notf":"Notification ",
    "lang_showontl_domain":"Domain ",
    "lang_showontl_listwarn":"Follow to add this user to lists.",
//parse
    "lang_parse_mentioned":" replied to you",
    "lang_parse_faved":" favourited your toot",
    "lang_parse_bted":" boosted your toot",
    "lang_parse_btedsimple":" boosted",
    "lang_parse_notftime":"Actioned at",
    "lang_parse_cwshow":"Show",
    "lang_parse_fulltext":"Full size text:",
    "lang_parse_autofold":"Auto folded",
    "lang_parse_more":"More",
    "lang_parse_url":"URL Analyzer",
    "lang_parse_tagTL":"Timeline of {{tag}}",
    "lang_parse_tagtoot":"Toot with {{tag}}",
    "lang_parse_tagpin":"Pin {{tag}}",
    "lang_parse_public":"Public",
    "lang_parse_unlisted":"Unlisted",
    "lang_parse_private":"Private",
    "lang_parse_direct":"Direct",
    "lang_parse_clickcopy":"Click to copy text of this toot",
    "lang_parse_clickcopyurl":"Click to copy URL of this toot",
    "lang_parse_trans":"Translate to Japanese",
    "lang_parse_replyto":"Reply to this toot",
    "lang_parse_bt":"Boost this toot",
    "lang_parse_fav":"Favourite this toot",
    "lang_parse_quote":"Quote this toot",
    "lang_parse_del":"Delete this toot",
    "lang_parse_pin":"Pin this toot",
    "lang_parse_det":"Details via your main account.",
    "lang_parse_redraft":"Delete & re-draft",
    "lang_parse_followed":"Followed you",
    "lang_parse_clientop":"Operation of this client",
    "lang_parse_clienttxt":" will be",
    "lang_parse_clientno":"done nothing",
    "lang_parse_clientemp":"emphasized(/not emphasized)",
    "lang_parse_clientmute":"muted",
    "lang_parse_mute":" will be muted. You can remove on preferences.",
    "lang_parse_voted":"Voted",
    "lang_parse_vote":"Voted",
    "lang_parse_unvoted":"Show the result without voting",
    "lang_parse_endedvote":"Expired",
    "lang_parse_thread":"Show thread",
    //misskey
    "lang_misskeyparse_renote":"Repost",
    "lang_misskeyparse_renoteqt":"Renote",
    "lang_misskeyparse_reaction":"Reaction",
    "lang_misskeyparse_tagnostr":"No streaming API on Tag TLs",
    "lang_misskeyparse_listnostr":"No streaming API on List TLs",
    "lang_misskeyparse_home":"Home",
    "lang_misskeyparse_followers":"Follower",
    "lang_misskeyparse_specified":"Specified User",
    "lang_misskeyparse_qt":"Misskey renote(quote) mode:Ctrl+Shift+Enter to clear",
    "lang_misskeyparse_renoted":" renoted your following post.",
    "lang_misskeyparse_quoted":" quoted your following post.",
    "lang_misskeyparse_reacted":" reacted your following post.",
//setting
    "lang_setting_time":"Time format:{{set}}",
    "lang_setting_theme":"Theme:{{set}}",
    "lang_setting_nsfw":"NSFW:{{set}}",
    "lang_setting_cw":"CW:{{set}}",
    "lang_setting_cwtext":"Default CW text:{{set}}",
    "lang_setting_cws":"Always CW on:{{set}}",
    "lang_setting_rp":"Reply counter:{{set}}",
    "lang_setting_vis":"Default visibility:{{set}}",
    "lang_setting_popup":"Popup notification:{{set}}",
    "lang_setting_off":"Off",
    "lang_setting_s":"s",
    "lang_setting_box":"Default toot box action:{{set}}",
    "lang_setting_gif":"GIF:{{set}}",
    "lang_setting_selt":"Auto fold:{{set1}} lines and above, {{set2}} letters and above",
    "lang_setting_autocw":"Auto CW:{{set1}} lines and above, {{set2}} letters and above",
    "lang_setting_width":"Minimam width:{{set}}",
    "lang_setting_fixwidth":"TweetDeck fixed width:{{set}}px",
    "lang_setting_img":"After posting an image:{{set}}",
    "lang_setting_font":"Fonts:{{set}}",
    "lang_setting_default":"default font",
    "lang_setting_size":"Font size:{{set}}px",
    "lang_setting_imgheight":"Image height:{{set}}px",
    "lang_setting_ticker":"#InstanceTicker:{{set}}px",
    "lang_setting_animation":"Animation: {{set}}",
    "lang_setting_tag":"Tag TL:{{set}}",
    "lang_setting_boxConfirm":"Post box:{{set}}",
    "lang_setting_ul":"Native locale:{{set}}",
    "lang_setting_notf":"Native notification:{{set}}",
    "lang_setting_quote":"Quote format:{{set}}",
    "lang_setting_via":"Via:{{set}}",
    "lang_setting_mov":"Action buttons hiding:{{set}}",
    "lang_setting_setasread":"Notification markers:{{set}}",
    "lang_setting_main":"Default account:{{set}}",
    "lang_setting_sec":"Secondary toot button:{{set}}",
    "lang_setting_ksref":"Keyboard shortcuts are refreshed.",
    "lang_setting_nomuting":"No client is muted.",
    "lang_setting_notftest":" Notification test ",
    "lang_setting_notftestprof":"Your icon is shown.",
    "lang_setting_exportwarn":"Only important data will be exported. You must keep this data secure.",
    "lang_setting_importwarn":"All data will be deleted.",
}