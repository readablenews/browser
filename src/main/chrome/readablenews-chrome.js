try{

  var css = function(path){
    var link = document.createElement("link")
    link.href = path
    link.type = "text/css"
    link.rel = "stylesheet"
    document.getElementsByTagName("head")[0].appendChild(link);
  }

  var js = function(path){
    /*var script = document.createElement("script")
     script.id = 'readablenews-loader'
     script.src = chrome.extension.getURL("js/loader.js") + '?js=' + chrome.extension.getURL("js/hk/hk.news.yahoo.com.js");
     document.getElementsByTagName("head")[0].appendChild(script);*/
  }

  var url = location.href
  if (url.search(/hk\.news\.yahoo\.com/) > 0){
    //css
    css(chrome.extension.getURL("hk.news.yahoo.com/readablenews-home.css") + '?r=' + Math.random())
    css(chrome.extension.getURL("hk.news.yahoo.com/readablenews-site.css") + '?r=' + Math.random())
    /*css("hk.news.yahoo.com/readablenews-site.css")*/
  } else if (location.href.search(/hk\.apple\.nextmedia\.com/) > 0){
    css(chrome.extension.getURL("hk.apple.nextmedia.com/readablenews-home.css") + '?r=' + Math.random())
    css(chrome.extension.getURL("hk.apple.nextmedia.com/readablenews-site.css") + '?r=' + Math.random())


  }

} catch(e){
  alert(e);
}
