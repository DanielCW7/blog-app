"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[757],{37288:function(e,t,r){r.d(t,{Z:function(){return n}});function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];let i=e.length-1;return e.slice(0,i).reduce((e,t,n)=>e+t+r[n],"")+e[i]}},82729:function(e,t,r){r.d(t,{_:function(){return n}});function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},30200:function(e,t,r){r.d(t,{e:function(){return D}});var n,i,o=r(79668),a=r(86713),l=r(29127),s={0:8203,1:8204,2:8205,3:8290,4:8291,5:8288,6:65279,7:8289,8:119155,9:119156,a:119157,b:119158,c:119159,d:119160,e:119161,f:119162},c={0:8203,1:8204,2:8205,3:65279},u=[,,,,].fill(String.fromCodePoint(c[0])).join("");Object.fromEntries(Object.entries(c).map(e=>e.reverse())),Object.fromEntries(Object.entries(s).map(e=>e.reverse()));var f=`${Object.values(s).map(e=>`\\u{${e.toString(16)}}`).join("")}`;RegExp(`[${f}]{4,}`,"gu");let p={enabled:!1,filter:e=>e.filterDefault(e)};function d(e){let{stega:t={},...r}=e;return{clientConfig:r,stegaConfig:"boolean"==typeof t?{enabled:t}:t}}let g=(e,t)=>{let r=Object.assign({},p,Object.assign({},t,e));if("encodeSourceMap"in r)throw Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client/stega'. Did you mean 'enabled'?");if("encodeSourceMapAtPath"in r)throw Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client/stega'. Did you mean 'filter'?");if("boolean"!=typeof r.enabled)throw Error("config.enabled must be a boolean, received ".concat(r.enabled));if(r.enabled&&void 0===r.studioUrl)throw Error("config.studioUrl must be defined when config.enabled is true");if(r.enabled&&"string"!=typeof r.studioUrl&&"function"!=typeof r.studioUrl)throw Error("config.studioUrl must be a string or a function, received ".concat(r.studioUrl));return r},h="drafts.",y=/_key\s*==\s*['"](.*)['"]/;function m(e){if(!Array.isArray(e))throw Error("Path is not an array");return e.reduce((e,t,r)=>{let n=typeof t;if("number"===n)return"".concat(e,"[").concat(t,"]");if("string"===n)return"".concat(e).concat(0===r?"":".").concat(t);if(("string"==typeof t?y.test(t.trim()):"object"==typeof t&&"_key"in t)&&t._key)return"".concat(e,'[_key=="').concat(t._key,'"]');if(Array.isArray(t)){let[r,n]=t;return"".concat(e,"[").concat(r,":").concat(n,"]")}throw Error("Unsupported path segment `".concat(JSON.stringify(t),"`"))},"")}let v={"\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","'":"\\'","\\":"\\\\"},b={"\\f":"\f","\\n":"\n","\\r":"\r","\\t":"	","\\'":"'","\\\\":"\\"};function w(e){let t;let r=[],n=/\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;for(;null!==(t=n.exec(e));){if(void 0!==t[1]){let e=t[1].replace(/\\(\\|f|n|r|t|')/g,e=>b[e]);r.push(e);continue}if(void 0!==t[2]){r.push(parseInt(t[2],10));continue}if(void 0!==t[3]){let e=t[3].replace(/\\(\\')/g,e=>b[e]);r.push({_key:e,_index:-1});continue}}return r}function _(e){return e.map(e=>{if("string"==typeof e||"number"==typeof e)return e;if(""!==e._key)return{_key:e._key};if(-1!==e._index)return e._index;throw Error("invalid segment:".concat(JSON.stringify(e)))})}function k(e){return"object"==typeof e&&null!==e}let E=e=>{let{sourcePath:t,value:r}=e;if(Number.isNaN(Number(r))&&Date.parse(r)||function(e){try{new URL(e,e.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}(r))return!1;let n=t.at(-1);return!("slug"===t.at(-2)&&"current"===n||"string"==typeof n&&n.startsWith("_")||"number"==typeof n&&"marks"===t.at(-2)||"href"===n&&"number"==typeof t.at(-2)&&"markDefs"===t.at(-3)||"style"===n||"listItem"===n||t.some(e=>"meta"===e||"metadata"===e||"openGraph"===e||"seo"===e)||"string"==typeof n&&S.has(n))},S=new Set(["color","colour","currency","email","format","gid","hex","href","hsl","hsla","icon","id","index","key","language","layout","link","linkAction","locale","lqip","page","path","ref","rgb","rgba","route","secret","slug","status","tag","template","theme","type","unit","url","username","variant","website"]);function C(e,t,r){var n,i,o,a,l,s,f,p,d,g;let{filter:b,logger:S,enabled:C}=r;if(!C){let i="config.enabled must be true, don't call this function otherwise";throw null==(n=null==S?void 0:S.error)||n.call(S,"[@sanity/client/stega]: ".concat(i),{result:e,resultSourceMap:t,config:r}),TypeError(i)}if(!t)return null==(i=null==S?void 0:S.error)||i.call(S,"[@sanity/client/stega]: Missing Content Source Map from response body",{result:e,resultSourceMap:t,config:r}),e;if(!r.studioUrl){let n="config.studioUrl must be defined";throw null==(o=null==S?void 0:S.error)||o.call(S,"[@sanity/client/stega]: ".concat(n),{result:e,resultSourceMap:t,config:r}),TypeError(n)}let U={encoded:[],skipped:[]},A=(g=e=>{var t;let n,{sourcePath:i,sourceDocument:o,resultPath:a,value:l}=e;if(("function"==typeof b?b({sourcePath:i,resultPath:a,filterDefault:E,sourceDocument:o,value:l}):E({sourcePath:i,resultPath:a,filterDefault:E,sourceDocument:o,value:l}))===!1)return S&&U.skipped.push({path:m(_(i)),value:"".concat(l.slice(0,20)).concat(l.length>20?"...":""),length:l.length}),l;S&&U.encoded.push({path:m(_(i)),value:"".concat(l.slice(0,20)).concat(l.length>20?"...":""),length:l.length});let{baseUrl:s,workspace:f,tool:p}=("/"!==(n="string"==typeof(t="function"==typeof r.studioUrl?r.studioUrl(o):r.studioUrl)?t:t.baseUrl)&&(n=n.replace(/\/$/,"")),"string"==typeof t)?{baseUrl:n}:{...t,baseUrl:n};if(!s)return l;let{_id:d,_type:g}=o;return function(e,t,r="auto"){let n;return!0===r||"auto"===r&&(Number.isNaN(Number(e))&&Date.parse(e)||function(e){try{new URL(e,e.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}(e))?e:`${e}${n=JSON.stringify(t),`${u}${Array.from(n).map(e=>{let t=e.charCodeAt(0);if(t>255)throw Error(`Only ASCII edit info can be encoded. Error attempting to encode ${n} on character ${e} (${t})`);return Array.from(t.toString(4).padStart(4,"0")).map(e=>String.fromCodePoint(c[e])).join("")}).join("")}`}`}(l,{origin:"sanity.io",href:function(e){let{baseUrl:t,workspace:r="default",tool:n="default",id:i,type:o,path:a}=e;if(!t)throw Error("baseUrl is required");if(!a)throw Error("path is required");if(!i)throw Error("id is required");if("/"!==t&&t.endsWith("/"))throw Error("baseUrl must not end with a slash");let l="default"===r?void 0:r,s="default"===n?void 0:n,c=i.startsWith(h)?i.slice(h.length):i,u=Array.isArray(a)?m(_(a)):a,f=new URLSearchParams({baseUrl:t,id:c,type:o,path:u});l&&f.set("workspace",l),s&&f.set("tool",s);let p=["/"===t?"":t];l&&p.push(l);let d=["id=".concat(c),"type=".concat(o),"path=".concat(encodeURIComponent(u))];return s&&d.push("tool=".concat(s)),p.push("intent","edit","".concat(d.join(";"),"?").concat(f)),p.join("/")}({baseUrl:s,workspace:f,tool:p,id:d,type:g,path:i})},!1)},function e(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return null!==t&&Array.isArray(t)?t.map((t,i)=>{if(k(t)){let o=t._key;if("string"==typeof o)return e(t,r,n.concat({_key:o,_index:i}))}return e(t,r,n.concat(i))}):k(t)?Object.fromEntries(Object.entries(t).map(t=>{let[i,o]=t;return[i,e(o,r,n.concat(i))]})):r(t,n)}(e,(e,r)=>{if("string"!=typeof e)return e;let n=function(e,t){var r;if(!(null==t?void 0:t.mappings))return;let n=(r=e.map(e=>{if("string"==typeof e||"number"==typeof e)return e;if(-1!==e._index)return e._index;throw Error("invalid segment:".concat(JSON.stringify(e)))}),"$".concat(r.map(e=>{if("string"==typeof e){let t=e.replace(/[\f\n\r\t'\\]/g,e=>v[e]);return"['".concat(t,"']")}if("number"==typeof e)return"[".concat(e,"]");if(""!==e._key){let t=e._key.replace(/['\\]/g,e=>v[e]);return"[?(@._key=='".concat(t,"')]")}return"[".concat(e._index,"]")}).join("")));if(void 0!==t.mappings[n])return{mapping:t.mappings[n],matchedPath:n,pathSuffix:""};let i=Object.entries(t.mappings).filter(e=>{let[t]=e;return n.startsWith(t)}).sort((e,t)=>{let[r]=e,[n]=t;return n.length-r.length});if(0==i.length)return;let[o,a]=i[0],l=n.substring(o.length);return{mapping:a,matchedPath:o,pathSuffix:l}}(r,t);if(!n)return e;let{mapping:i,matchedPath:o}=n;if("value"!==i.type||"documentValue"!==i.source.type)return e;let a=t.documents[i.source.document],l=t.paths[i.source.path],s=w(o);return g({sourcePath:w(l).concat(r.slice(s.length)),sourceDocument:a,resultPath:r,value:e})}));if(S){let e=U.skipped.length,t=U.encoded.length;if((e||t)&&(null==(a=(null==S?void 0:S.groupCollapsed)||S.log)||a("[@sanity/client/stega]: Encoding source map into result"),null==(l=S.log)||l.call(S,"[@sanity/client/stega]: Paths encoded: ".concat(U.encoded.length,", skipped: ").concat(U.skipped.length))),U.encoded.length>0&&(null==(s=null==S?void 0:S.log)||s.call(S,"[@sanity/client/stega]: Table of encoded paths"),null==(f=(null==S?void 0:S.table)||S.log)||f(U.encoded)),U.skipped.length>0){let e=new Set;for(let{path:t}of U.skipped)e.add(t.replace(y,"0").replace(/\[\d+\]/g,"[]"));null==(p=null==S?void 0:S.log)||p.call(S,"[@sanity/client/stega]: List of skipped paths",[...e.values()])}(e||t)&&(null==(d=null==S?void 0:S.groupEnd)||d.call(S))}return A}var U=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},A=(e,t,r)=>(U(e,t,"read from private field"),r?r.call(e):t.get(e)),j=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},N=(e,t,r,n)=>(U(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);let O=class e extends a.u9{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.u_,{clientConfig:r,stegaConfig:i}=d(t);super(e,r),j(this,n,void 0),N(this,n,e),this.stegaConfig=g(i,p)}clone(){return new e(A(this,n),this.config())}config(e){if(void 0===e)return{...super.config(),stega:{...this.stegaConfig}};let{clientConfig:t,stegaConfig:r}=d(e);return super.config(t),this.stegaConfig=g(r,this.stegaConfig||{}),this}withConfig(t){let r=this.config(),{stegaConfig:i}=d(t||{});return new e(A(this,n),{...r,...t,stega:{...r.stega||{},...i||{}}})}fetch(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!this.stegaConfig.enabled)return super.fetch(e,t,r);let{filterResponse:n=!0}=r;return super.fetch(e,t,Object.assign({},r,{filterResponse:!1,resultSourceMap:"withKeyArraySelector"})).pipe((0,l.U)(e=>{let{result:t,resultSourceMap:r}=e,i=C(t,r,this.stegaConfig);return n?i:{...e,result:i}}))}};n=new WeakMap;let I=class e extends a.aN{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.u_,{clientConfig:r,stegaConfig:n}=d(t);super(e,r),j(this,i,void 0),N(this,i,e),this.stegaConfig=g(n,p),this.observable=new O(e,t)}clone(){return new e(A(this,i),this.config())}config(e){if(void 0===e)return{...super.config(),stega:{...this.stegaConfig}};let{clientConfig:t,stegaConfig:r}=d(e);return super.config(t),this.stegaConfig=g(r,{...this.stegaConfig||{}}),this}withConfig(t){let r=this.config(),{stegaConfig:n}=d(t||{});return new e(A(this,i),{...r,...t,stega:{...r.stega||{},...n||{}}})}fetch(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!this.stegaConfig.enabled)return super.fetch(e,t,r);let{filterResponse:n=!0}=r;return super.fetch(e,t,Object.assign({},r,{filterResponse:!1,resultSourceMap:"withKeyArraySelector"})).then(e=>{let{result:t,resultSourceMap:r}=e,i=C(t,r,this.stegaConfig);return n?i:{...e,result:i}})}};i=new WeakMap;let R=(0,a.if)(a.jR,I);R.requester;let M=R.createClient;var P=r(34155);let T=e=>{var t,r;let{encodeSourceMap:n=function(){try{return"true"===(void 0).SANITY_SOURCE_MAP||"auto"}catch{}try{return"true"===P.env.SANITY_SOURCE_MAP||"auto"}catch{}return"auto"}(),encodeSourceMapAtPath:i,studioUrl:a=function(){try{return(void 0).SANITY_STUDIO_URL}catch{}try{return P.env.SANITY_STUDIO_URL}catch{}}(),logger:l,...s}=e,c=!0===n;if("auto"===n&&(c=function(){try{return"preview"===(void 0).VERCEL_ENV}catch{}try{return"preview"===P.env.VERCEL_ENV}catch{}return!1}()),"string"==typeof n&&"auto"!==n)throw Error("Invalid value for encodeSourceMap: ".concat(n,". Did you mean 'auto'?"));try{if(c&&!1!==e.resultSourceMap){if(!a)return null==(t=null==l?void 0:l.error)||t.call(l,"[@sanity/preview-kit]: Content source map enabled client is enabled, but no studioUrl is provided. Falling back to @sanity/client"),(0,o.eI)(s);return null==(r=null==l?void 0:l.debug)||r.call(l,"[@sanity/preview-kit]: Creating source map enabled client"),M({...s,resultSourceMap:e.resultSourceMap?e.resultSourceMap:"withKeyArraySelector",stega:{enabled:!0,studioUrl:a,logger:l,filter:i?e=>i({path:e.sourcePath,filterDefault:()=>e.filterDefault(e)}):void 0}})}}catch(e){console.error("[@sanity/preview-kit]: Error creating client",e,"falling back to non-embedded sourcemap mode")}return(0,o.eI)(s)};var x=r(34155);function D(e){let{studioUrl:t=x.env.NEXT_PUBLIC_SANITY_STUDIO_URL,encodeSourceMap:r=!!t&&"auto"}=e;return"auto"===r&&"preview"===x.env.NEXT_PUBLIC_VERCEL_ENV&&(r=!0),T({...e,studioUrl:t,encodeSourceMap:r})}}}]);