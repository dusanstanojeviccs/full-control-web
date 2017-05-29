!function(){var e={},t=function(t){for(var n=e[t],i=n.deps,o=n.defn,a=i.length,s=new Array(a),l=0;l<a;++l)s[l]=r(i[l]);var u=o.apply(null,s);if(void 0===u)throw"module ["+t+"] returned undefined";n.instance=u},n=function(t,n,r){if("string"!=typeof t)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+t;if(void 0===r)throw"no definition function for "+t;e[t]={deps:n,defn:r,instance:void 0}},r=function(n){var r=e[n];if(void 0===r)throw"module ["+n+"] was undefined";return void 0===r.instance&&t(n),r.instance},i=function(e,t){for(var n=e.length,i=new Array(n),o=0;o<n;++o)i.push(r(e[o]));t.apply(null,t)},o={};o.bolt={module:{api:{define:n,require:i,demand:r}}};var a=n,s=function(e,t){a(e,[],function(){return t})};s("1",tinymce.PluginManager),s("6",tinymce.util.Delay),s("e",tinymce.util.Tools),s("9",tinymce.html.SaxParser),s("a",tinymce.html.Schema),s("b",tinymce.dom.DOMUtils.DOM),a("h",[],function(){var e=function(e,t){if(e)for(var n=0;n<e.length;n++)if(t.indexOf(e[n].filter)!==-1)return e[n]};return{getVideoScriptMatch:e}}),a("c",[],function(){var e=function(e){return e.replace(/px$/,"")},t=function(e){return/^[0-9.]+$/.test(e)?e+"px":e},n=function(t){return function(n){return n?e(n.style[t]):""}},r=function(e){return function(n,r){n&&(n.style[e]=t(r))}};return{getMaxWidth:n("maxWidth"),getMaxHeight:n("maxHeight"),setMaxWidth:r("maxWidth"),setMaxHeight:r("maxHeight")}}),a("7",["e","9","a","b","h","c"],function(e,t,n,r,i,o){var a=function(e){return r.getAttrib(e,"data-ephox-embed-iri")},s=function(e){var t=r.createFragment(e);return""!==a(t.firstChild)},l=function(n,r){var o={};return new t({validate:!1,allow_conditional_comments:!0,special:"script,noscript",start:function(t,r){if(o.source1||"param"!==t||(o.source1=r.map.movie),"iframe"!==t&&"object"!==t&&"embed"!==t&&"video"!==t&&"audio"!==t||(o.type||(o.type=t),o=e.extend(r.map,o)),"script"===t){var a=i.getVideoScriptMatch(n,r.map.src);if(!a)return;o={type:"script",source1:r.map.src,width:a.width,height:a.height}}"source"===t&&(o.source1?o.source2||(o.source2=r.map.src):o.source1=r.map.src),"img"!==t||o.poster||(o.poster=r.map.src)}}).parse(r),o.source1=o.source1||o.src||o.data,o.source2=o.source2||"",o.poster=o.poster||"",o},u=function(e){var t=r.createFragment(e),n=t.firstChild;return{type:"ephox-embed-iri",source1:a(n),source2:"",poster:"",width:o.getMaxWidth(n),height:o.getMaxHeight(n)}},c=function(e,t){return s(t)?u(t):l(e,t)};return{htmlToData:c}}),s("8",tinymce.html.Writer),a("4",["8","9","a","b","c"],function(e,t,n,r,i){var o=function(e,t){var n,r,i,o;for(n in t)if(i=""+t[n],e.map[n])for(r=e.length;r--;)o=e[r],o.name===n&&(i?(e.map[n]=i,o.value=i):(delete e.map[n],e.splice(r,1)));else i&&(e.push({name:n,value:i}),e.map[n]=i)},a=function(n){var r=new e,i=new t(r);return i.parse(n),r.getContent()},s=function(r,i,a){var s,l=new e,u=0;return new t({validate:!1,allow_conditional_comments:!0,special:"script,noscript",comment:function(e){l.comment(e)},cdata:function(e){l.cdata(e)},text:function(e,t){l.text(e,t)},start:function(e,t,n){switch(e){case"video":case"object":case"embed":case"img":case"iframe":o(t,{width:i.width,height:i.height})}if(a)switch(e){case"video":o(t,{poster:i.poster,src:""}),i.source2&&o(t,{src:""});break;case"iframe":o(t,{src:i.source1});break;case"source":if(u++,u<=2&&(o(t,{src:i["source"+u],type:i["source"+u+"mime"]}),!i["source"+u]))return;break;case"img":if(!i.poster)return;s=!0}l.start(e,t,n)},end:function(e){if("video"===e&&a)for(var t=1;t<=2;t++)if(i["source"+t]){var n=[];n.map={},u<t&&(o(n,{src:i["source"+t],type:i["source"+t+"mime"]}),l.start("source",n,!0))}if(i.poster&&"object"===e&&a&&!s){var r=[];r.map={},o(r,{src:i.poster,width:i.width,height:i.height}),l.start("img",r,!0)}l.end(e)}},new n({})).parse(r),l.getContent()},l=function(e){var t=r.createFragment(e);return""!==r.getAttrib(t.firstChild,"data-ephox-embed-iri")},u=function(e,t){var n=r.createFragment(e),o=n.firstChild;return i.setMaxWidth(o,t.width),i.setMaxHeight(o,t.height),a(o.outerHTML)},c=function(e,t,n){return l(e)?u(e,t):s(e,t,n)};return{updateHtml:c}}),a("l",[],function(){var e=function(e){var t={mp3:"audio/mpeg",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"},n=e.toLowerCase().split(".").pop(),r=t[n];return r?r:""};return{guess:e}}),a("m",[],function(){var e=[{regex:/youtu\.be\/([\w\-.]+)/,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)/,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$2",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\-_]+(?:\?.+)?)/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowfullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$2?title=0&amp;byline=0",allowfullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'//maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"//www.dailymotion.com/embed/video/$1",allowFullscreen:!0}];return{urlPatterns:e}}),a("j",["l","7","m","h","4","e"],function(e,t,n,r,i,o){var a=function(a,s){var l="",u=o.extend({},s);if(!u.source1&&(o.extend(u,t.htmlToData(a.settings.media_scripts,u.embed)),!u.source1))return"";if(u.source2||(u.source2=""),u.poster||(u.poster=""),u.source1=a.convertURL(u.source1,"source"),u.source2=a.convertURL(u.source2,"source"),u.source1mime=e.guess(u.source1),u.source2mime=e.guess(u.source2),u.poster=a.convertURL(u.poster,"poster"),o.each(n.urlPatterns,function(e){var t,n,r=e.regex.exec(u.source1);if(r){for(n=e.url,t=0;r[t];t++)n=n.replace("$"+t,function(){return r[t]});u.source1=n,u.type=e.type,u.allowFullscreen=e.allowFullscreen,u.width=u.width||e.w,u.height=u.height||e.h}}),u.embed)l=i.updateHtml(u.embed,u,!0);else{var c=r.getVideoScriptMatch(a.settings.media_scripts,u.source1);if(c&&(u.type="script",u.width=c.width,u.height=c.height),u.width=u.width||300,u.height=u.height||150,o.each(u,function(e,t){u[t]=a.dom.encode(e)}),"iframe"===u.type){var d=u.allowFullscreen?' allowFullscreen="1"':"";l+='<iframe src="'+u.source1+'" width="'+u.width+'" height="'+u.height+'"'+d+"></iframe>"}else"application/x-shockwave-flash"===u.source1mime?(l+='<object data="'+u.source1+'" width="'+u.width+'" height="'+u.height+'" type="application/x-shockwave-flash">',u.poster&&(l+='<img src="'+u.poster+'" width="'+u.width+'" height="'+u.height+'" />'),l+="</object>"):u.source1mime.indexOf("audio")!==-1?a.settings.audio_template_callback?l=a.settings.audio_template_callback(u):l+='<audio controls="controls" src="'+u.source1+'">'+(u.source2?'\n<source src="'+u.source2+'"'+(u.source2mime?' type="'+u.source2mime+'"':"")+" />\n":"")+"</audio>":"script"===u.type?l+='<script src="'+u.source1+'"></script>':l=a.settings.video_template_callback?a.settings.video_template_callback(u):'<video width="'+u.width+'" height="'+u.height+'"'+(u.poster?' poster="'+u.poster+'"':"")+' controls="controls">\n<source src="'+u.source1+'"'+(u.source1mime?' type="'+u.source1mime+'"':"")+" />\n"+(u.source2?'<source src="'+u.source2+'"'+(u.source2mime?' type="'+u.source2mime+'"':"")+" />\n":"")+"</video>"}return l};return{dataToHtml:a}}),s("k",tinymce.util.Promise),a("d",["j","k"],function(e,t){var n=function(e,n,r){var i={};return new t(function(t,o){var a=function(r){return r.html&&(i[e.source1]=r),t({url:e.source1,html:r.html?r.html:n(e)})};i[e.source1]?a(i[e.source1]):r({url:e.source1},a,o)})},r=function(e,n){return new t(function(t){t({html:n(e),url:e.source1})})},i=function(t){return function(n){return e.dataToHtml(t,n)}},o=function(e,t){var o=e.settings.media_url_resolver;return o?n(t,i(e),o):r(t,i(e))};return{getEmbedHtml:o}}),s("f",tinymce.Env),a("g",[],function(){var e=function(e,t){e.state.set("oldVal",e.value()),t.state.set("oldVal",t.value())},t=function(e,t){var n=e.find("#width")[0],r=e.find("#height")[0],i=e.find("#constrain")[0];n&&r&&i&&t(n,r,i.checked())},n=function(t,n,r){var i=t.state.get("oldVal"),o=n.state.get("oldVal"),a=t.value(),s=n.value();r&&i&&o&&a&&s&&(a!==i?(s=Math.round(a/i*s),isNaN(s)||n.value(s)):(a=Math.round(s/o*a),isNaN(a)||t.value(a))),e(t,n)},r=function(n){t(n,e)},i=function(e){t(e,n)},o=function(e){var t=function(){e(function(e){i(e)})};return{type:"container",label:"Dimensions",layout:"flex",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:5,onchange:t,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:5,onchange:t,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}};return{createUi:o,syncSize:r,updateSize:i}}),a("2",["6","7","4","d","c","e","f","g"],function(e,t,n,r,i,o,a,s){var l=a.ie&&a.ie<=8?"onChange":"onInput",u=function(e){return function(t){var n=t&&t.msg?"Media embed handler error: "+t.msg:"Media embed handler threw unknown error.";e.notificationManager.open({type:"error",text:n})}},c=function(e){var n=e.selection.getNode(),r=n.getAttribute("data-ephox-embed-iri");return r?{source1:r,"data-ephox-embed-iri":r,width:i.getMaxWidth(n),height:i.getMaxHeight(n)}:n.getAttribute("data-mce-object")?t.htmlToData(e.settings.media_scripts,e.serializer.serialize(n,{selection:!0})):{}},d=function(e){var t=e.selection.getNode();if(t.getAttribute("data-mce-object")||t.getAttribute("data-ephox-embed-iri"))return e.selection.getContent()},f=function(e,n){return function(r){var i=r.html,a=e.find("#embed")[0],l=o.extend(t.htmlToData(n.settings.media_scripts,i),{source1:r.url});e.fromJSON(l),a&&(a.value(i),s.updateSize(e))}},p=function(e,t){var n,r,i=e.dom.select("img[data-mce-object]");for(n=0;n<t.length;n++)for(r=i.length-1;r>=0;r--)t[n]===i[r]&&i.splice(r,1);e.selection.select(i[0])},h=function(e,t){var n=e.dom.select("img[data-mce-object]");e.insertContent(t),p(e,n),e.nodeChanged()},m=function(e,t){var i=e.toJSON();i.embed=n.updateHtml(i.embed,i),i.embed?h(t,i.embed):r.getEmbedHtml(t,i).then(function(e){h(t,e.html)})["catch"](u(t))},g=function(e,t){o.each(t,function(t,n){e.find("#"+n).value(t)})},v=function(e){var i,a,p=[{name:"source1",type:"filepicker",filetype:"media",size:40,autofocus:!0,label:"Source",onpaste:function(){setTimeout(function(){r.getEmbedHtml(e,i.toJSON()).then(f(i,e))["catch"](u(e))},1)},onchange:function(t){r.getEmbedHtml(e,i.toJSON()).then(f(i,e))["catch"](u(e)),g(i,t.meta)},onbeforecall:function(e){e.meta=i.toJSON()}}],h=[],v=function(e){e(i),a=i.toJSON(),i.find("#embed").value(n.updateHtml(a.embed,a))};if(e.settings.media_alt_source!==!1&&h.push({name:"source2",type:"filepicker",filetype:"media",size:40,label:"Alternative source"}),e.settings.media_poster!==!1&&h.push({name:"poster",type:"filepicker",filetype:"image",size:40,label:"Poster"}),e.settings.media_dimensions!==!1){var y=s.createUi(v);p.push(y)}a=c(e);var b={id:"mcemediasource",type:"textbox",flex:1,name:"embed",value:d(e),multiline:!0,rows:5,label:"Source"},C=function(){a=o.extend({},t.htmlToData(e.settings.media_scripts,this.value())),this.parent().parent().fromJSON(a)};b[l]=C,i=e.windowManager.open({title:"Insert/edit media",data:a,bodyType:"tabpanel",body:[{title:"General",type:"form",items:p},{title:"Embed",type:"container",layout:"flex",direction:"column",align:"stretch",padding:10,spacing:10,items:[{type:"label",text:"Paste your embed code below:",forId:"mcemediasource"},b]},{title:"Advanced",type:"form",items:h}],onSubmit:function(){s.updateSize(i),m(i,e)}}),s.syncSize(i)};return{showDialog:v}}),a("3",["e","8","9","a"],function(e,t,n,r){var i=function(e,i){if(e.settings.media_filter_html===!1)return i;var o,a=new t;return new n({validate:!1,allow_conditional_comments:!1,special:"script,noscript",comment:function(e){a.comment(e)},cdata:function(e){a.cdata(e)},text:function(e,t){a.text(e,t)},start:function(t,n,r){if(o=!0,"script"!==t&&"noscript"!==t){for(var i=0;i<n.length;i++){if(0===n[i].name.indexOf("on"))return;"style"===n[i].name&&(n[i].value=e.dom.serializeStyle(e.dom.parseStyle(n[i].value),t))}a.start(t,n,r),o=!1}},end:function(e){o||a.end(e)}},new r({})).parse(i),a.getContent()};return{sanitize:i}}),s("i",tinymce.html.Node),a("5",["3","h","i","f"],function(e,t,n,r){var i=function(e,t){var i,o=t.name;return i=new n("img",1),i.shortEnded=!0,a(e,t,i),i.attr({width:t.attr("width")||"300",height:t.attr("height")||("audio"===o?"30":"150"),style:t.attr("style"),src:r.transparentSrc,"data-mce-object":o,"class":"mce-object mce-object-"+o}),i},o=function(e,t){var r,i,o,s=t.name;return r=new n("span",1),r.attr({contentEditable:"false",style:t.attr("style"),"data-mce-object":s,"class":"mce-preview-object mce-object-"+s}),a(e,t,r),i=new n(s,1),i.attr({src:t.attr("src"),allowfullscreen:t.attr("allowfullscreen"),width:t.attr("width")||"300",height:t.attr("height")||("audio"===s?"30":"150"),frameborder:"0"}),o=new n("span",1),o.attr("class","mce-shim"),r.append(i),r.append(o),r},a=function(t,n,r){var i,o,a,s,l;for(a=n.attributes,s=a.length;s--;)i=a[s].name,o=a[s].value,"width"!==i&&"height"!==i&&"style"!==i&&("data"!==i&&"src"!==i||(o=t.convertURL(o,i)),r.attr("data-mce-p-"+i,o));l=n.firstChild&&n.firstChild.value,l&&(r.attr("data-mce-html",escape(e.sanitize(t,l))),r.firstChild=null)},s=function(e){for(;e=e.parent;)if(e.attr("data-ephox-embed-iri"))return!0;return!1},l=function(e){return function(n){for(var a,l,u=n.length;u--;)a=n[u],a.parent&&(a.parent.attr("data-mce-object")||("script"!==a.name||(l=t.getVideoScriptMatch(e.settings.media_scripts,a.attr("src"))))&&(l&&(l.width&&a.attr("width",l.width.toString()),l.height&&a.attr("height",l.height.toString())),"iframe"===a.name&&e.settings.media_live_embeds!==!1&&r.ceFalse?s(a)||a.replace(o(e,a)):s(a)||a.replace(i(e,a))))}};return{createPreviewIframeNode:o,createPlaceholderNode:i,placeHolderConverter:l}}),a("0",["1","2","3","4","5"],function(e,t,n,r,i){var o=function(e){e.on("ResolveName",function(e){var t;1===e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)}),e.on("preInit",function(){var t=e.schema.getSpecialElements();tinymce.each("video audio iframe object".split(" "),function(e){t[e]=new RegExp("</"+e+"[^>]*>","gi")});var r=e.schema.getBoolAttrs();tinymce.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(e){r[e]={}}),e.parser.addNodeFilter("iframe,video,audio,object,embed,script",i.placeHolderConverter(e)),e.serializer.addAttributeFilter("data-mce-object",function(t,r){for(var i,o,a,s,l,u,c,d,f=t.length;f--;)if(i=t[f],i.parent){for(c=i.attr(r),o=new tinymce.html.Node(c,1),"audio"!==c&&"script"!==c&&(d=i.attr("class"),d&&d.indexOf("mce-preview-object")!==-1?o.attr({width:i.firstChild.attr("width"),height:i.firstChild.attr("height")}):o.attr({width:i.attr("width"),height:i.attr("height")})),o.attr({style:i.attr("style")}),s=i.attributes,a=s.length;a--;){var p=s[a].name;0===p.indexOf("data-mce-p-")&&o.attr(p.substr(11),s[a].value)}"script"===c&&o.attr("type","text/javascript"),l=i.attr("data-mce-html"),l&&(u=new tinymce.html.Node("#text",3),u.raw=!0,u.value=n.sanitize(e,unescape(l)),o.append(u)),i.replace(o)}})}),e.on("click keyup",function(){var t=e.selection.getNode();t&&e.dom.hasClass(t,"mce-preview-object")&&e.dom.getAttrib(t,"data-mce-selected")&&t.setAttribute("data-mce-selected","2")}),e.on("ObjectSelected",function(e){var t=e.target.getAttribute("data-mce-object");"audio"!==t&&"script"!==t||e.preventDefault()}),e.on("objectResized",function(e){var t,n=e.target;n.getAttribute("data-mce-object")&&(t=n.getAttribute("data-mce-html"),t&&(t=unescape(t),n.setAttribute("data-mce-html",escape(r.updateHtml(t,{width:e.width,height:e.height})))))}),this.showDialog=function(){t.showDialog(e)},e.addButton("media",{tooltip:"Insert/edit media",onclick:this.showDialog,stateSelector:["img[data-mce-object]","span[data-mce-object]","div[data-ephox-embed-iri]"]}),e.addMenuItem("media",{icon:"media",text:"Media",onclick:this.showDialog,context:"insert",prependToContext:!0}),e.on("setContent",function(){e.$("span.mce-preview-object").each(function(t,n){var r=e.$(n);0===r.find("span.mce-shim",n).length&&r.append('<span class="mce-shim"></span>')})}),e.addCommand("mceMedia",this.showDialog)};return e.add("media",o),function(){}}),r("0")()}();