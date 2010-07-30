window.addEventListener("load", function(){
  if (document.getElementById("appcontent")){
    document.getElementById("appcontent").addEventListener("DOMContentLoaded", function(evt){

      if (typeof(Firebug) !== undefined) console = Firebug.Console;

      /*var loadJQuery = function(){
       jQuery.noConflict();
       $ = function(selector, context){ return new jQuery.fn.init(selector, context || evt.originalTarget); };
       $.fn = $.prototype = jQuery.fn;
       console.log('loaded jQuery')
       }*/

      var css = function(path){
        var link = evt.originalTarget.createElement("link")
        link.href = path
        link.type = "text/css"
        link.rel = "stylesheet"
        evt.originalTarget.getElementsByTagName("head")[0].appendChild(link);
      }

      try{
        var url = evt.originalTarget.location.href
        if (url.search(/hk\.news\.yahoo\.com/) > 0){
          console.log('hk.news.yahoo.com')
          css("resource://hk.news.yahoo.com-readablenews-home.css")
          css("resource://hk.news.yahoo.com-readablenews-site.css")
          /*$('head').append('<link rel="stylesheet" href="resource://hk.news.yahoo.com-readablenews-home.css" type="text/css" />');
           $('head').append('<link rel="stylesheet" href="resource://hk.news.yahoo.com-readablenews-site.css" type="text/css" />');*/
        } else if (url.search(/hk\.apple\.nextmedia\.com/) > 0){
          console.log('hk.apple.nextmedia.com')
          css("resource://hk.apple.nextmedia.com-readablenews-home.css")
          css("resource://hk.apple.nextmedia.com-readablenews-site.css")
        }
      } catch(e){
        console.log('error: ' + e)
      }
    }, true);
  }
}, false);
