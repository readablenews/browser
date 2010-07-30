window.addEventListener("load", function(){
  if (document.getElementById("appcontent")){
    document.getElementById("appcontent").addEventListener("DOMContentLoaded", function(evt){

      if (typeof(Firebug) !== undefined) console = Firebug.Console;

      var loadJQuery = function(){
        jQuery.noConflict();
        $ = function(selector, context){ return new jQuery.fn.init(selector, context || evt.originalTarget); };
        $.fn = $.prototype = jQuery.fn;
        console.log('loaded jQuery')
      }

      try{
        var url = evt.originalTarget.location.href
        if (url.search(/hk\.news\.yahoo\.com/) > 0){
          loadJQuery();
          console.log('hk.news.yahoo.com')
          $('head').append('<link rel="stylesheet" href="resource://hk.news.yahoo.com-readablenews-home.css" type="text/css" />');
          $('head').append('<link rel="stylesheet" href="resource://hk.news.yahoo.com-readablenews-site.css" type="text/css" />');
        }else if (url.search(/hk\.apple\.nextmedia\.com/) > 0){
          loadJQuery();
          console.log('hk.apple.nextmedia.com')
          $('head').append('<link rel="stylesheet" href="resource://hk.apple.nextmedia.com-readablenews-home.css" type="text/css" />');
          $('head').append('<link rel="stylesheet" href="resource://hk.apple.nextmedia.com-readablenews-site.css" type="text/css" />');
        }
      } catch(e){
        console.log('error: ' + e)
      }
    }, true);
  }
}, false);
/*
 try{
 var css = function(cssPath){
 var cssUrl = chrome.extension.getURL(cssPath) + '?r=' + Math.random();
 $('head').append('<link rel="stylesheet" href="' + cssUrl + '" type="text/css" />');
 }

 if (location.href.search(/hk\.news\.yahoo\.com/) > 0){
 alert('yahoo news')
 css("hk.news.yahoo.com/readablenews-home.css")
 css("hk.news.yahoo.com/readablenews-site.css")
 }
 } catch(e){
 alert(e)
 }


 */
