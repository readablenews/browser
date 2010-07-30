try{

  var css = function(cssPath){
    var cssUrl = chrome.extension.getURL(cssPath) + '?r=' + Math.random();
    $('head').append('<link rel="stylesheet" href="' + cssUrl + '" type="text/css" />');
  }

  var url = location.href
  if (url.search(/hk\.news\.yahoo\.com/) > 0){
    //css
    css("hk.news.yahoo.com/readablenews-home.css")
    css("hk.news.yahoo.com/readablenews-site.css")


    //js
    /*var script = document.createElement("script")
    script.id = 'readablenews-loader'
    script.src = chrome.extension.getURL("js/loader.js") + '?js=' + chrome.extension.getURL("js/hk/hk.news.yahoo.com.js");
    document.getElementsByTagName("head")[0].appendChild(script);*/

  } else if (location.href.search(/hk\.apple\.nextmedia\.com/) > 0){
    // css
    writeCss("css/hk/hk.apple.nextmedia.com.css")

    //js
    var script = document.createElement("script")
    script.id = 'readablenews-loader'
    script.src = chrome.extension.getURL("js/loader.js") + '?js=' + chrome.extension.getURL("js/hk/hk.apple.nextmedia.com.js");
    document.getElementsByTagName("head")[0].appendChild(script);

  }

} catch(e){
  alert(e);
}
