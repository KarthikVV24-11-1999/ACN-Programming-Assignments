(function(){var g=!0,h=null,j=!1,k=(new Date).getTime();var m=this,aa=function(a,b){var c=a.split("."),e=m;!(c[0]in e)&&e.execScript&&e.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)!c.length&&void 0!==b?e[d]=b:e=e[d]?e[d]:e[d]={}},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,
arguments)}},n=function(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return n.apply(h,arguments)};var da=/&/g,ea=/</g,ga=/>/g,ha=/\"/g,o={"\x00":"\\0","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\x0B",'"':'\\"',"\\":"\\\\"},r={"'":"\\'"},ja=function(a){for(var b=0,c=(""+ia).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),a=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,a.length),d=0;0==b&&d<e;d++){var f=c[d]||"",qa=a[d]||"",v=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var i=v.exec(f)||["","",""],l=p.exec(qa)||["","",""];
if(0==i[0].length&&0==l[0].length)break;b=((0==i[1].length?0:parseInt(i[1],10))<(0==l[1].length?0:parseInt(l[1],10))?-1:(0==i[1].length?0:parseInt(i[1],10))>(0==l[1].length?0:parseInt(l[1],10))?1:0)||((0==i[2].length)<(0==l[2].length)?-1:(0==i[2].length)>(0==l[2].length)?1:0)||(i[2]<l[2]?-1:i[2]>l[2]?1:0)}while(0==b)}return b};var ka=document,t=window;var u=function(a){return"true"==a?g:"false"==a?j:j},la=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,w=function(a){return!a?"pagead2.googlesyndication.com":(a=a.match(la))?a[0]:"pagead2.googlesyndication.com"};var x=parseFloat("0"),ma=isNaN(x)||1<x||0>x?0:x;var na=u("false"),oa=u("false"),pa=u("false"),ra=u("false");var sa=function(){return w("")};var z,A,B,C,ta=function(){return m.navigator?m.navigator.userAgent:h};C=B=A=z=j;var E;if(E=ta()){var ua=m.navigator;z=0==E.indexOf("Opera");A=!z&&-1!=E.indexOf("MSIE");B=!z&&-1!=E.indexOf("WebKit");C=!z&&!B&&"Gecko"==ua.product}var F=A,G=C,va=B,H;
a:{var I="",J;if(z&&m.opera)var K=m.opera.version,I="function"==typeof K?K():K;else if(G?J=/rv\:([^\);]+)(\)|;)/:F?J=/MSIE\s+([^\);]+)(\)|;)/:va&&(J=/WebKit\/(\S+)/),J)var wa=J.exec(ta()),I=wa?wa[1]:"";if(F){var L,xa=m.document;L=xa?xa.documentMode:void 0;if(L>parseFloat(I)){H=""+L;break a}}H=I}var ia=H,M={},ya={},za=function(){return ya[9]||(ya[9]=F&&document.documentMode&&9<=document.documentMode)};!F||za();if(G||F)if(!F||!za())G&&(M["1.9.1"]||(M["1.9.1"]=0<=ja("1.9.1")));F&&(M["9"]||(M["9"]=0<=ja("9")));w("");var N=function(a){return!!a&&"function"==typeof a&&!!a.call},Aa=function(a,b){if(!(2>arguments.length))for(var c=1,e=arguments.length;c<e;++c)a.push(arguments[c])};function O(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)}function Ba(a,b){a.addEventListener?a.addEventListener("load",b,j):a.attachEvent&&a.attachEvent("onload",b)};aa("google_protectAndRun",function(a,b,c){a=n(b,m,a);b=window.onerror;window.onerror=a;try{c()}catch(e){var c=e.toString(),d="";e.fileName&&(d=e.fileName);var f=-1;if(e.lineNumber)f=e.lineNumber;if(!a(c,d,f))throw e;}window.onerror=b});
aa("google_handleError",function(a,b,c,e){if(0.01>Math.random())a=["http://",sa(),"/pagead/gen_204","?id=jserror","&jscb=",na?1:0,"&jscd=",oa?1:0,"&context=",O(a),"&msg=",O(b),"&file=",O(c),"&line=",O(e.toString()),"&url=",O(ka.URL.substring(0,512)),"&ref=",O(ka.referrer.substring(0,512))],a.push(["&client=",O(t.google_ad_client),"&format=",O(t.google_ad_format),"&slotname=",O(t.google_ad_slot),"&output=",O(t.google_ad_output),"&ad_type=",O(t.google_ad_type)].join("")),a=a.join(""),t.google_image_requests||
(t.google_image_requests=[]),b=t.document.createElement("img"),b.src=a,t.google_image_requests.push(b);return!pa});var Ca=function(a){try{var b=a.google_test;a.google_test=!b;if(a.google_test===!b)return a.google_test=b,g}catch(c){}return j},Da=h,Ea=function(){if(!Da){for(var a=window;a!=a.parent&&Ca(a.parent);)a=a.parent;Da=a}return Da};var P,Q=function(a){this.c=[];this.a=a||window;this.b=0;this.d=h},Fa=function(a,b){this.l=a;this.i=b};Q.prototype.n=function(a,b){0==this.b&&0==this.c.length&&(!b||b==window)?(this.b=2,this.g(new Fa(a,window))):this.h(a,b)};Q.prototype.h=function(a,b){this.c.push(new Fa(a,b||this.a));Ga(this)};Q.prototype.o=function(a){this.b=1;if(a)this.d=this.a.setTimeout(n(this.f,this),a)};Q.prototype.f=function(){if(1==this.b){if(this.d!=h)this.a.clearTimeout(this.d),this.d=h;this.b=0}Ga(this)};
Q.prototype.p=function(){return g};Q.prototype.nq=Q.prototype.n;Q.prototype.nqa=Q.prototype.h;Q.prototype.al=Q.prototype.o;Q.prototype.rl=Q.prototype.f;Q.prototype.sz=Q.prototype.p;var Ga=function(a){a.a.setTimeout(n(a.m,a),0)};Q.prototype.m=function(){if(0==this.b&&this.c.length){var a=this.c.shift();this.b=2;a.i.setTimeout(n(this.g,this,a),0);Ga(this)}};Q.prototype.g=function(a){this.b=0;a.l()};
var Ha=function(a){try{return a.sz()}catch(b){return j}},Ja=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&Ha(a)&&N(a.nq)&&N(a.nqa)&&N(a.al)&&N(a.rl)},Ka=function(){if(P&&Ha(P))return P;var a=Ea(),b=a.google_jobrunner;return Ja(b)?P=b:a.google_jobrunner=P=new Q(a)},La=function(a,b){Ka().nq(a,b)},Ma=function(a,b){Ka().nqa(a,b)};var Na=/MSIE [2-7]|PlayStation|Gecko\/20090226/i,Oa=/Android|Opera/,Pa=function(){var a=S,b=T.google_ad_width,c=T.google_ad_height,e=["<iframe"],d;for(d in a)a.hasOwnProperty(d)&&Aa(e,d+"="+a[d]);e.push('style="left:0;position:absolute;top:0;"');e.push("></iframe>");b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px";return['<ins style="display:inline-table;',b,'"><ins id="',a.id+"_anchor",'" style="display:block;',b,'">',e.join(" "),"</ins></ins>"].join("")};var Qa=function(){},Sa=function(a,b,c){switch(typeof b){case "string":Ra(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==h){c.push("null");break}if(b instanceof Array){var e=b.length;c.push("[");for(var d="",f=0;f<e;f++)c.push(d),Sa(a,b[f],c),d=",";c.push("]");break}c.push("{");e="";for(d in b)b.hasOwnProperty(d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ra(d,c),c.push(":"),Sa(a,f,c),e=
","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Ta={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},Ua=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ra=function(a,b){b.push('"');b.push(a.replace(Ua,function(a){if(a in Ta)return Ta[a];var b=a.charCodeAt(0),d="\\u";16>b?d+="000":256>b?d+="00":4096>b&&(d+="0");return Ta[a]=d+b.toString(16)}));b.push('"')};var U="google_ad_block,google_ad_channel,google_ad_client,google_ad_format,google_ad_height,google_ad_host,google_ad_host_channel,google_ad_host_tier_id,google_ad_output,google_ad_override,google_ad_region,google_ad_section,google_ad_slot,google_ad_type,google_ad_width,google_adtest,google_allow_expandable_ads,google_alternate_ad_url,google_alternate_color,google_analytics_domain_name,google_analytics_uacct,google_bid,google_city,google_color_bg,google_color_border,google_color_line,google_color_link,google_color_text,google_color_url,google_container_id,google_contents,google_country,google_cpm,google_ctr_threshold,google_cust_age,google_cust_ch,google_cust_gender,google_cust_id,google_cust_interests,google_cust_job,google_cust_l,google_cust_lh,google_cust_u_url,google_disable_video_autoplay,google_ed,google_eids,google_enable_ose,google_encoding,google_font_face,google_font_size,google_frame_id,google_gl,google_hints,google_image_size,google_kw,google_kw_type,google_language,google_max_num_ads,google_max_radlink_len,google_num_radlinks,google_num_radlinks_per_unit,google_num_slots_to_rotate,google_only_ads_with_video,google_only_pyv_ads,google_only_userchoice_ads,google_override_format,google_page_url,google_previous_watch,google_previous_searches,google_referrer_url,google_region,google_reuse_colors,google_rl_dest_url,google_rl_filtering,google_rl_mode,google_rt,google_safe,google_scs,google_skip,google_tag_info,google_targeting,google_tfs,google_tl,google_ui_features,google_ui_version,google_video_doc_id,google_video_product_type,google_with_pyv_ads".split(",");var V=function(a){this.a=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},log:[],img:0.01>Math.random()?[]:h});this.e=a.google_iframe_oncopy;a.setTimeout(n(this.k,this),3E4)},Va;var W="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){i+='.call';setTimeout(h,0)}else if(h.match){i+='.nav';w.location.replace(h)}s.log&&s.log.push(i)}";
/[&<>\"]/.test(W)&&(-1!=W.indexOf("&")&&(W=W.replace(da,"&amp;")),-1!=W.indexOf("<")&&(W=W.replace(ea,"&lt;")),-1!=W.indexOf(">")&&(W=W.replace(ga,"&gt;")),-1!=W.indexOf('"')&&(W=W.replace(ha,"&quot;")));Va=W;V.prototype.set=function(a,b){this.e.handlers[a]=b;this.a.addEventListener&&this.a.addEventListener("load",n(this.j,this,a),j)};V.prototype.j=function(a){var a=this.a.document.getElementById(a),b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()};
V.prototype.k=function(){if(this.e.img){var a=this.e.log,b=this.a.document;if(a.length)b=["http://",sa(),"/pagead/gen_204?id=iframecopy&log=",O(a.join("-")),"&url=",O(b.URL.substring(0,512)),"&ref=",O(b.referrer.substring(0,512))].join(""),a.length=0,a=new Image,this.e.img.push(a),a.src=b}};var Wa=function(){var a="script",b=w(""),c="",c=ra?"https":"http";return["<",a,' src="',[c,"://",b,"/pagead/js/r20111207/r20110914/show_ads_impl.js"].join(""),'"></',a,">"].join("")},Xa=function(a,b,c,e){return function(){var d=j;e&&Ka().al(3E4);try{var f;try{f=!!a.document.getElementById(b).contentWindow.document}catch(qa){f=j}if(f){var v=
a.document.getElementById(b).contentWindow,p=v.document;if(!p.body||!p.body.firstChild)p.open(),v.google_async_iframe_close=g,p.write(c)}else{var i=a.document.getElementById(b).contentWindow,l;f=c;f=""+f;if(f.quote)l=f.quote();else{v=['"'];for(p=0;p<f.length;p++){var R=f.charAt(p),Ia=R.charCodeAt(0),ob=v,pb=p+1,fa;if(!(fa=o[R])){var D;if(31<Ia&&127>Ia)D=R;else{var s=R;if(s in r)D=r[s];else if(s in o)D=r[s]=o[s];else{var q=s,y=s.charCodeAt(0);if(31<y&&127>y)q=s;else{if(256>y){if(q="\\x",16>y||256<
y)q+="0"}else q="\\u",4096>y&&(q+="0");q+=y.toString(16).toUpperCase()}D=r[s]=q}}fa=D}ob[pb]=fa}v.push('"');l=v.join("")}i.location.replace("javascript:"+l)}d=g}catch(wb){i=Ea().google_jobrunner,Ja(i)&&i.rl()}d&&(new V(a)).set(b,Xa(a,b,c,j))}};window.google_loader_used=g;(function(a){if(!("google_onload_fired"in a))a.google_onload_fired=j,Ba(a,function(){a.google_onload_fired=g})})(window);if(!window.google_loader_experiment){var Ya;a:{var Za=["async_bad_black","block_bad_black"];if(!(1.0E-4>Math.random())){var $a=Math.random();if($a<ma){Ya=Za[Math.floor($a/ma*Za.length)];break a}}Ya=h}window.google_loader_experiment=Ya||""||"launch"}var ab;
a:{try{if(window.google_enable_async!==g&&"blockodd"==window.google_loader_experiment&&1==window.top.location.hostname.length%2){ab=j;break a}}catch(bb){}ab=g}var cb;if(cb=ab){var db;if(window.google_enable_async===j)db=0;else{var eb=navigator.userAgent,fb=window.google_loader_experiment;db=(Na.test(eb)?j:Oa.test(eb)?"async_bad_black"==fb:g)&&!window.google_container_id&&(!window.google_ad_output||"html"==window.google_ad_output)}cb=db}
if(cb){var gb=window;gb.google_unique_id?++gb.google_unique_id:gb.google_unique_id=1;var X=window;if(!X.google_slot_list||!X.google_slot_list.push)X.google_slot_list=[];X.google_slot_list.push([X.google_ad_slot||"",X.google_ad_format||"",X.google_ad_width||"",X.google_ad_height||""].join("."));for(var Y=window,_script$$inline_107="script",Z,T=Y,S={allowtransparency:'"true"',frameborder:'"0"',height:'"'+Y.google_ad_height+'"',hspace:'"0"',marginwidth:'"0"',marginheight:'"0"',onload:'"'+Va+'"',scrolling:'"no"',
vspace:'"0"',width:'"'+Y.google_ad_width+'"'},hb=T.document,$=S.id,ib=0;!$||T.document.getElementById($);)$="aswift_"+ib++;S.id=$;S.name=$;hb.write(Pa());Z=$;var jb;Y.google_page_url&&(Y.google_page_url=""+Y.google_page_url);for(var kb=[],lb=0,mb=U.length;lb<mb;lb++){var nb=U[lb];if(Y[nb]!=h){var qb;try{var rb=[];Sa(new Qa,Y[nb],rb);qb=rb.join("")}catch(sb){}qb&&Aa(kb,nb,"=",qb,";")}}jb=kb.join("");for(var tb=0,ub=U.length;tb<ub;tb++)Y[U[tb]]=h;var vb=(new Date).getTime(),xb=window.google_loader_experiment,
yb=["<!doctype html><html><body><",_script$$inline_107,">",jb,"google_show_ads_impl=true;google_unique_id=",Y.google_unique_id,';google_async_iframe_id="',Z,'";google_start_time=',k,";",xb?'google_loader_experiment="'+xb+'";':"","google_bpp=",vb>k?vb-k:1,";</",_script$$inline_107,">",Wa(),"</body></html>"].join("");(Y.document.getElementById(Z)?La:Ma)(Xa(Y,Z,yb,g))}else window.q=k,document.write(Wa());})();