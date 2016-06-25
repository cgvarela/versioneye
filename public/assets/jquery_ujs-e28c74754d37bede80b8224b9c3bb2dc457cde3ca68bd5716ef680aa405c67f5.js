!function(t,e){"use strict";t.rails!==e&&t.error("jquery-ujs has already been loaded!");var n,r=t(document);t.rails=n={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:"button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",requiredInputSelector:"input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",fileInputSelector:"input[type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",csrfToken:function(){return t("meta[name=csrf-token]").attr("content")},csrfParam:function(){return t("meta[name=csrf-param]").attr("content")},CSRFProtection:function(t){var e=n.csrfToken();e&&t.setRequestHeader("X-CSRF-Token",e)},refreshCSRFTokens:function(){t('form input[name="'+n.csrfParam()+'"]').val(n.csrfToken())},fire:function(e,n,r){var i=t.Event(n);return e.trigger(i,r),i.result!==!1},confirm:function(t){return confirm(t)},ajax:function(e){return t.ajax(e)},href:function(t){return t[0].href},isRemote:function(t){return t.data("remote")!==e&&t.data("remote")!==!1},handleRemote:function(r){var i,o,s,a,u,l;if(n.fire(r,"ajax:before")){if(a=r.data("with-credentials")||null,u=r.data("type")||t.ajaxSettings&&t.ajaxSettings.dataType,r.is("form")){i=r.data("ujs:submit-button-formmethod")||r.attr("method"),o=r.data("ujs:submit-button-formaction")||r.attr("action"),s=t(r[0]).serializeArray();var c=r.data("ujs:submit-button");c&&(s.push(c),r.data("ujs:submit-button",null)),r.data("ujs:submit-button-formmethod",null),r.data("ujs:submit-button-formaction",null)}else r.is(n.inputChangeSelector)?(i=r.data("method"),o=r.data("url"),s=r.serialize(),r.data("params")&&(s=s+"&"+r.data("params"))):r.is(n.buttonClickSelector)?(i=r.data("method")||"get",o=r.data("url"),s=r.serialize(),r.data("params")&&(s=s+"&"+r.data("params"))):(i=r.data("method"),o=n.href(r),s=r.data("params")||null);return l={type:i||"GET",data:s,dataType:u,beforeSend:function(t,i){return i.dataType===e&&t.setRequestHeader("accept","*/*;q=0.5, "+i.accepts.script),n.fire(r,"ajax:beforeSend",[t,i])?void r.trigger("ajax:send",t):!1},success:function(t,e,n){r.trigger("ajax:success",[t,e,n])},complete:function(t,e){r.trigger("ajax:complete",[t,e])},error:function(t,e,n){r.trigger("ajax:error",[t,e,n])},crossDomain:n.isCrossDomain(o)},a&&(l.xhrFields={withCredentials:a}),o&&(l.url=o),n.ajax(l)}return!1},isCrossDomain:function(t){var e=document.createElement("a");e.href=location.href;var n=document.createElement("a");try{return n.href=t,n.href=n.href,!((!n.protocol||":"===n.protocol)&&!n.host||e.protocol+"//"+e.host==n.protocol+"//"+n.host)}catch(r){return!0}},handleMethod:function(r){var i=n.href(r),o=r.data("method"),s=r.attr("target"),a=n.csrfToken(),u=n.csrfParam(),l=t('<form method="post" action="'+i+'"></form>'),c='<input name="_method" value="'+o+'" type="hidden" />';u===e||a===e||n.isCrossDomain(i)||(c+='<input name="'+u+'" value="'+a+'" type="hidden" />'),s&&l.attr("target",s),l.hide().append(c).appendTo("body"),l.submit()},formElements:function(e,n){return e.is("form")?t(e[0].elements).filter(n):e.find(n)},disableFormElements:function(e){n.formElements(e,n.disableSelector).each(function(){n.disableFormElement(t(this))})},disableFormElement:function(t){var n,r;n=t.is("button")?"html":"val",r=t.data("disable-with"),r!==e&&(t.data("ujs:enable-with",t[n]()),t[n](r)),t.prop("disabled",!0),t.data("ujs:disabled",!0)},enableFormElements:function(e){n.formElements(e,n.enableSelector).each(function(){n.enableFormElement(t(this))})},enableFormElement:function(t){var n=t.is("button")?"html":"val";t.data("ujs:enable-with")!==e&&(t[n](t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.prop("disabled",!1),t.removeData("ujs:disabled")},allowAction:function(t){var e,r=t.data("confirm"),i=!1;if(!r)return!0;if(n.fire(t,"confirm")){try{i=n.confirm(r)}catch(o){(console.error||console.log).call(console,o.stack||o)}e=n.fire(t,"confirm:complete",[i])}return i&&e},blankInputs:function(e,n,r){var i,o,s,a,u=t(),l=n||"input,textarea",c=e.find(l),h={};return c.each(function(){i=t(this),i.is("input[type=radio]")?(a=i.attr("name"),h[a]||(0===e.find('input[type=radio]:checked[name="'+a+'"]').length&&(s=e.find('input[type=radio][name="'+a+'"]'),u=u.add(s)),h[a]=a)):(o=i.is("input[type=checkbox],input[type=radio]")?i.is(":checked"):!!i.val(),o===r&&(u=u.add(i)))}),u.length?u:!1},nonBlankInputs:function(t,e){return n.blankInputs(t,e,!0)},stopEverything:function(e){return t(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},disableElement:function(t){var r=t.data("disable-with");r!==e&&(t.data("ujs:enable-with",t.html()),t.html(r)),t.bind("click.railsDisable",function(t){return n.stopEverything(t)}),t.data("ujs:disabled",!0)},enableElement:function(t){t.data("ujs:enable-with")!==e&&(t.html(t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.unbind("click.railsDisable"),t.removeData("ujs:disabled")}},n.fire(r,"rails:attachBindings")&&(t.ajaxPrefilter(function(t,e,r){t.crossDomain||n.CSRFProtection(r)}),t(window).on("pageshow.rails",function(){t(t.rails.enableSelector).each(function(){var e=t(this);e.data("ujs:disabled")&&t.rails.enableFormElement(e)}),t(t.rails.linkDisableSelector).each(function(){var e=t(this);e.data("ujs:disabled")&&t.rails.enableElement(e)})}),r.delegate(n.linkDisableSelector,"ajax:complete",function(){n.enableElement(t(this))}),r.delegate(n.buttonDisableSelector,"ajax:complete",function(){n.enableFormElement(t(this))}),r.delegate(n.linkClickSelector,"click.rails",function(e){var r=t(this),i=r.data("method"),o=r.data("params"),s=e.metaKey||e.ctrlKey;if(!n.allowAction(r))return n.stopEverything(e);if(!s&&r.is(n.linkDisableSelector)&&n.disableElement(r),n.isRemote(r)){if(s&&(!i||"GET"===i)&&!o)return!0;var a=n.handleRemote(r);return a===!1?n.enableElement(r):a.fail(function(){n.enableElement(r)}),!1}return i?(n.handleMethod(r),!1):void 0}),r.delegate(n.buttonClickSelector,"click.rails",function(e){var r=t(this);if(!n.allowAction(r)||!n.isRemote(r))return n.stopEverything(e);r.is(n.buttonDisableSelector)&&n.disableFormElement(r);var i=n.handleRemote(r);return i===!1?n.enableFormElement(r):i.fail(function(){n.enableFormElement(r)}),!1}),r.delegate(n.inputChangeSelector,"change.rails",function(e){var r=t(this);return n.allowAction(r)&&n.isRemote(r)?(n.handleRemote(r),!1):n.stopEverything(e)}),r.delegate(n.formSubmitSelector,"submit.rails",function(r){var i,o,s=t(this),a=n.isRemote(s);if(!n.allowAction(s))return n.stopEverything(r);if(s.attr("novalidate")===e)if(s.data("ujs:formnovalidate-button")===e){if(i=n.blankInputs(s,n.requiredInputSelector,!1),i&&n.fire(s,"ajax:aborted:required",[i]))return n.stopEverything(r)}else s.data("ujs:formnovalidate-button",e);if(a){if(o=n.nonBlankInputs(s,n.fileInputSelector)){setTimeout(function(){n.disableFormElements(s)},13);var u=n.fire(s,"ajax:aborted:file",[o]);return u||setTimeout(function(){n.enableFormElements(s)},13),u}return n.handleRemote(s),!1}setTimeout(function(){n.disableFormElements(s)},13)}),r.delegate(n.formInputClickSelector,"click.rails",function(e){var r=t(this);if(!n.allowAction(r))return n.stopEverything(e);var i=r.attr("name"),o=i?{name:i,value:r.val()}:null,s=r.closest("form");0===s.length&&(s=t("#"+r.attr("form"))),s.data("ujs:submit-button",o),s.data("ujs:formnovalidate-button",r.attr("formnovalidate")),s.data("ujs:submit-button-formaction",r.attr("formaction")),s.data("ujs:submit-button-formmethod",r.attr("formmethod"))}),r.delegate(n.formSubmitSelector,"ajax:send.rails",function(e){this===e.target&&n.disableFormElements(t(this))}),r.delegate(n.formSubmitSelector,"ajax:complete.rails",function(e){this===e.target&&n.enableFormElements(t(this))}),t(function(){n.refreshCSRFTokens()}))}(jQuery);