//tealium universal tag - utag.4 ut4.0.201705181812, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={"_siteId":"siteid","_sitePrimaryRsid":"rsid","_pageType":"pagetype","_topicPrimaryName":"topic","_topicPrimaryId":"topicguid","_articleId":"assetguid","_articleTitle":"assettitle","_articleType":"assettype","_authorPrimaryId":"authorid","_authorPrimaryName":"author","_articlePubDate":"pubdate","_pageViewGuid":"viewguid","_collectionPrimaryId":"colguid","_topicBreadCrumb":"topicbrcrm","_deviceType":"devicetype","_siteType":"sitetype","_siteTypeDevice":"v21","_ctype":"ctype","_cval":"cval","_testName":"testname","_testGroup":"testgroup"};u.extend=[function(a,b){if(a=="view"&&(b['pageType']=="video_share"||b['pageType']=="article_amp")){return false;}},function(a,b){try{if(1){b['_ctype']='viewguid';b['_cval']=b['pageViewGuid']}}catch(e){utag.DB(e)}},function(a,b){annotateLinks=function(e){var links=document.getElementsByTagName("a");var link_cnt=links.length;var oldTagLevels=DW.tagLevels;for(x=0;x<link_cnt;x++){var a=links[x];var tag=DW.buildTag(a);a.setAttribute("data-s-object-id",tag);}
DW.tagLevels=oldTagLevels;}
jQuery(window).load(function(){annotateLinks();});}];if(window.console){window.console.log("Service: dw");}
u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.loader_cb=function(){u.initialized=true;DW.pageParams=u.data;DW.tagComscore=false;DW.tagNielsen=false;DW.detectYahoo=false;DW.tagYahoo=false;DW.noTagClickHandler2=function(a){var c=DW.getEventTarget(a),b=DW.getLinkObject(c);if(!(null==b||DW.ignoreClick(b)||DW.isInternalLink(b)&&DW.hasTagParam(b))){var d=DW.buildTag(c);DW.setCookie("dw-tag",d,"","/",DW.ldc_domain,0);DW.setCookie("prevPageType",utag_data['pageType'],"","/",DW.ldc_domain,0);DW.isInternalLink(b)||DW.trackClickInBackground(b,d,c.nodeName,a.type)}}
document.body.addEventListener("mousedown",DW.noTagClickHandler2,false);DW.clear();};if(!u.initialized){if(document.location.protocol=="http:"){u.loader({"type":"script","charset":"utf-8","src":"http://dw.cbsimg.net/js/cbsi/ds.js","cb":u.loader_cb,"loc":"script","id":'utag_4'});}else{u.loader({"type":"script","charset":"utf-8","src":"https://dw.cbsi.com/js/cbsi/ds.js","cb":u.loader_cb,"loc":"script","id":'utag_4'});}}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);})("4","cbsi.cnetglobalsite");}catch(error){utag.DB(error);}
