$(document).ready(function(){function m(a){var c=WiziCore_AppContext.getInstance().inputParameters(),b=function(a){var b=a[0],a=a[1];c[b]!=void 0?(c[b]instanceof Array||(c[b]=[c[b]]),c[b].push(a)):c[b]=a},d=a[0],e=a[1];if(e==void 0)b([d]);else if(d!=""&&e!="")try{if(d=="inputParams"&&(e=unescape(e),e=JSON.parse(e),typeof e=="string"&&o(e,m)),typeof e=="object")for(var f in e)b([f,e[f]]);else b(a)}catch(g){acDebugger.systemLog("setInputParameters error",g),b([d,e])}}function o(a,c){for(var b=a.split("&"),
d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(c(f)===!0)break}}function u(){var a=null;return a=AC.Core.cookie().cookie("swirlSession")}function p(a){var c=WiziCore_Helper.getPrintData();if(c&&typeof c.instance=="object"&&typeof c.instance!="string")a.instance=c.instance;AC.Advertising.initLive(h,function(){WiziCore_AppContext.getInstance().forms()._populateFormResult(a,v)})}function q(a){function c(b,c,h){if(b.sessionId!=void 0)try{n!=null&&n.stop();var g=f;h==g&&(g=c!=void 0&&c!=""?c:g);a.loadFullForm(b.sessionId,
g,d,function(a){a.error==!1?p(a.object.result):(WiziCore_Helper.enableInterface(),a=AC.Core.lang().tr("live_load_error"),k(AC.Core.lang().tr("live_create_sess"),a,18))},e)}catch(i){acDebugger.systemLog1("onSessionFullLogin :: error",i)}else WiziCore_Helper.enableInterface(),b=AC.Core.lang().tr("live_create_sess_error"),k(AC.Core.lang().tr("live_create_sess"),b,19)}var b=u(),d=l("instanceId"),e=l("roleId"),f=window.WiziFormId?window.WiziFormId:l("formId"),g=WiziCore_AppContext.getInstance(),h=WiziCore_Helper.getPrintData();
$(a).bind(WiziCore_Api_SessionRequester.onLiveLogin,function(a,b,d,e){c(b,d,e)});if(window.formObject)typeof window.formObject.formResult=="string"?(b=window.formObject.formResult,b=WiziCore_AppContext.getInstance().config().localAppsPath()+b+".json",$.ajax({url:b,dataType:"json",success:function(a){window.formObject.formResult=a;g.widgetScripts().getCsses(window.formObject.formResult.widgetCsses);g.widgetScripts().getScripts(window.formObject.formResult.widgetScripts,function(){i({error:!1,object:{result:window.formObject}})},
!1)},error:function(){i({error:!0})}})):(g.widgetScripts().getCsses(window.formObject.formResult.widgetCsses),g.widgetScripts().getScripts(window.formObject.formResult.widgetScripts,function(){i({error:!1,object:{result:window.formObject}})},!1));else{if(h&&typeof h.instanceId=="string")d=h.instanceId;b==void 0||b==null?r(f,d,e):a.loginAndLoadFormWithSession(b,f,d,function(a){a.error?r(f,d,e):i(a)},e)}}function r(a,c,b){j.loginAndLoadForm(null,null,a,c,function(a){i(a)},b)}function i(a){if(a.error){h.empty();
var c=AC.Core.lang().tr("live_create_sess_error");a.object!=void 0&&(c+=a.object.message!=void 0?"<br>\n"+a.object.message:"",c+="<br>\n"+a.status);k(AC.Core.lang().tr("live_create_sess"),c,20)}else a=a.object.result,j.populateLoginResult(a.loginResult),p(a.formResult)}function l(a){for(var c=window.location.search.substring(1).split("&"),b=null,d=0,e=c.length;d<e;d++){var f=c[d].split("=");f[0]==a&&f.length>1&&(b=f[1])}return b}function v(a,c,b,d){a?(h.empty(),k(AC.Core.lang().tr("live_load_inst"),
c,17)):s(b,d)}function k(a,c,b){a=WiziCore_Helper.showError(a,c,b);$(a).one(WiziCore_UI_MessageBoxWidget.onDialogClose,function(a,b){switch(b){case WiziCore_UI_MessageBoxWidget.IDOK:setTimeout(function(){},200)}});WiziCore_Helper.callPrint()}function s(a,c){if(AC.trialSplashSkipped){window.swirlDebugger!=void 0&&typeof window.swirlDebugger.openMode=="function"&&swirlDebugger.openMode(WiziCore_Api_Debugger.MODE_USER_OPEN);var b={session:j,pageId:l("pageId")},d=new WiziCore_UI_FormRuntime(WiziCore_UI_FormRuntime.LIVE_MODE),
e=h.children();WiziCore_Helper.appLoadSplashHide(e);d.show(a,c,h,b);WiziCore_Helper.enableInterface();n=d}else setTimeout(function(){s(a,c)},50)}AC.ssjDebug.bindHotkey();WiziCore_OnErrorEvent.initOnError();o(window.location.search.substring(1),m);AC.inputParams&&m(["inputParams",AC.inputParams]);AC.Core.lang(AC.Lng.ENGLISH).lang(SwirlLangObjectEn);var t=WiziCore_AppContext.getInstance(),j=t.getSession();t.widgetScripts().initList();var h=$("#wiziLiveMode");window.PhoneGap?document.addEventListener("deviceready",
function(){q(j)},!1):q(j);var n=null});
