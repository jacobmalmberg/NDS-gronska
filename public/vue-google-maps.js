!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("MarkerClusterer")):"function"==typeof define&&define.amd?define(["MarkerClusterer"],t):"object"==typeof exports?exports.VueGoogleMaps=t(require("MarkerClusterer")):e.VueGoogleMaps=t(e.MarkerClusterer)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e){var t=e.mappedProps,n=e.name,r=e.ctr,s=e.ctrArgs,l=e.events,p=e.beforeCreate,d=e.afterCreate,f=e.props,m=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["mappedProps","name","ctr","ctrArgs","events","beforeCreate","afterCreate","props"]),h="$"+n+"Promise",v="$"+n+"Object";return function(e,t){if(!e)throw new Error(t)}(!(m.props instanceof Array),"`props` should be an object, not Array"),o({},"undefined"!=typeof GENERATE_DOC?{$vgmOptions:e}:{},{mixins:[u.default],props:o({},f,c(t)),render:function(){return""},provide:function(){var e=this,n=this.$mapPromise.then(function(n){e.$map=n;var r=o({},e.options,{map:n},(0,i.getPropsValues)(e,t));if(delete r.options,p){var a=p.bind(e)(r);if(a instanceof Promise)return a.then(function(){return{options:r}})}return{options:r}}).then(function(n){var o,u=n.options,c=r();return e[v]=s?new((o=Function.prototype.bind).call.apply(o,[c,null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(s(u,(0,i.getPropsValues)(e,f||{})))))):new c(u),(0,i.bindProps)(e,e[v],t),(0,a.default)(e,e[v],l),d&&d.bind(e)(e[v]),e[v]});return this[h]=n,function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}({},h,n)},destroyed:function(){this[v]&&this[v].setMap&&this[v].setMap(null)}},m)},t.mappedPropsToVueProps=c;var a=s(n(8)),i=n(2),u=s(n(16));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return Object.entries(e).map(function(e){var t=r(e,2),n=t[0],o=t[1],a={};return"type"in o&&(a.type=o.type),"default"in o&&(a.default=o.default),"required"in o&&(a.required=o.required),[n,a]}).reduce(function(e,t){var n=r(t,2),o=n[0],a=n[1];return e[o]=a,e},{})}},function(e,t,n){"use strict";function r(e,t,n,r,o,a,i,u){var s=typeof(e=e||{}).default;"object"!==s&&"function"!==s||(e=e.default);var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),a&&(l._scopeId=a),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):o&&(c=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var p=l.render;l.render=function(e,t){return c.call(t),p(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPropsValues=function(e,t){return Object.keys(t).reduce(function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t},{})},t.bindProps=function(e,t,n){var r=function(r){var o=n[r],u=o.twoWay,s=o.type,c=o.trackProperties,l=o.noBind;if(l)return"continue";var p="set"+i(r),d="get"+i(r),f=r.toLowerCase()+"_changed",m=e[r];if(void 0===t[p])throw new Error(p+" is not a method of (the Maps object corresponding to) "+e.$options._componentTag);s===Object&&c?(0,a.default)(e,c.map(function(e){return r+"."+e}),function(){t[p](e[r])},void 0!==e[r]):e.$watch(r,function(){var n=e[r];t[p](n)},{immediate:void 0!==m,deep:s===Object}),u&&(e.$gmapOptions.autobindAllEvents||e.$listeners[f])&&t.addListener(f,function(){e.$emit(f,t[d]())})};for(var o in n)r(o)};var r,o=n(9),a=(r=o)&&r.__esModule?r:{default:r};function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=(r=n(31)).default||r},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=(r=n(35)).default||r},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=(r=n(39)).default||r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),a=n(19),i=(r=a)&&r.__esModule?r:{default:r};var u={bounds:{type:Object},defaultPlace:{type:String,default:""},componentRestrictions:{type:Object,default:null},types:{type:Array,default:function(){return[]}},placeholder:{required:!1,type:String},className:{required:!1,type:String},label:{required:!1,type:String,default:null},selectFirstOnEnter:{require:!1,type:Boolean,default:!1}};t.default={mounted:function(){var e=this,t=this.$refs.input;t.value=this.defaultPlace,this.$watch("defaultPlace",function(){t.value=e.defaultPlace}),this.$gmapApiPromiseLazy().then(function(){var t=(0,o.getPropsValues)(e,u);if(e.selectFirstOnEnter&&(0,i.default)(e.$refs.input),"function"!=typeof google.maps.places.Autocomplete)throw new Error("google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?");e.autoCompleter=new google.maps.places.Autocomplete(e.$refs.input,t);var n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(u,["placeholder","place","defaultPlace","className","label","selectFirstOnEnter"]);(0,o.bindProps)(e,e.autoCompleter,n),e.autoCompleter.addListener("place_changed",function(){e.$emit("place_changed",e.autoCompleter.getPlace())})})},created:function(){console.warn("The PlaceInput class is deprecated! Please consider using the Autocomplete input instead")},props:u}},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=(r=n(42)).default||r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=function(n){(e.$gmapOptions.autobindAllEvents||e.$listeners[n])&&t.addListener(n,function(t){e.$emit(n,t)})},o=!0,a=!1,i=void 0;try{for(var u,s=n[Symbol.iterator]();!(o=(u=s.next()).done);o=!0){r(u.value)}}catch(e){a=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(a)throw i}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=!1;function a(){o||(o=!0,e.$nextTick(function(){o=!1,n()}))}var i=!0,u=!1,s=void 0;try{for(var c,l=t[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var p=c.value;e.$watch(p,a,{immediate:r})}}catch(e){u=!0,s=e}finally{try{!i&&l.return&&l.return()}finally{if(u)throw s}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["resizeBus"],data:function(){return{_actualResizeBus:null}},created:function(){void 0===this.resizeBus?this.$data._actualResizeBus=this.$gmapDefaultResizeBus:this.$data._actualResizeBus=this.resizeBus},methods:{_resizeCallback:function(){this.resize()},_delayedResizeCallback:function(){var e=this;this.$nextTick(function(){return e._resizeCallback()})}},watch:{resizeBus:function(e){this.$data._actualResizeBus=e},"$data._actualResizeBus":function(e,t){t&&t.$off("resize",this._delayedResizeCallback),e&&e.$on("resize",this._delayedResizeCallback)}},destroyed:function(){this.$data._actualResizeBus&&this.$data._actualResizeBus.$off("resize",this._delayedResizeCallback)}}},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{ref:"flyaway"},[this._t("default")],2)])},o=[]},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vue-map-container"},[t("div",{ref:"vue-map",staticClass:"vue-map"}),this._v(" "),t("div",{staticClass:"vue-map-hidden"},[this._t("default")],2),this._v(" "),this._t("visible")],2)},o=[]},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vue-street-view-pano-container"},[t("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),this._v(" "),this._t("default")],2)},o=[]},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",{domProps:{textContent:this._s(this.label)}}),this._v(" "),t("input",{ref:"input",class:this.className,attrs:{type:"text",placeholder:this.placeholder}})])},o=[]},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(){var e=this.$createElement;return(this._self._c||e)("input",this._g(this._b({ref:"input"},"input",this.$attrs,!1),this.$listeners))},o=[]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={inject:{$mapPromise:{default:"abcdef"}},provide:function(){var e=this;return this.$mapPromise.then(function(t){e.$map=t}),{}}}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=0;e(function(){t+=1},function(){t=Math.max(0,t-1)},function(){return 0===t})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.addEventListener?e.addEventListener:e.attachEvent;function n(n,r){if("keydown"===n){var o=r;r=function(t){var n=document.getElementsByClassName("pac-item-selected").length>0;if(13===t.which&&!n){var r=document.createEvent("Event");r.keyCode=40,r.which=40,o.apply(e,[r])}o.apply(e,[t])}}t.apply(e,[n,r])}e.addEventListener=n,e.attachEvent=n}},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],u={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(u):n.push(r[i]={id:i,parts:[u]})}return n}n.r(t),n.d(t,"default",function(){return m});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),u=null,s=0,c=!1,l=function(){},p=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,n,o){c=n,p=o||{};var i=r(e,t);return h(i),function(t){for(var n=[],o=0;o<i.length;o++){var u=i[o];(s=a[u.id]).refs--,n.push(s)}t?h(i=r(e,t)):i=[];for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(y(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(y(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:i}}}}function v(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function y(e){var t,n,r=document.querySelector("style["+d+'~="'+e.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(f){var o=s++;r=u||(u=v()),t=_.bind(null,r,o,!1),n=_.bind(null,r,o,!0)}else r=v(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);p.ssrId&&e.setAttribute(d,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,g=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function _(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t,n){e.exports=n(22)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StreetViewPanorama=t.MountableMixin=t.Autocomplete=t.MapElementFactory=t.MapElementMixin=t.PlaceInput=t.Map=t.InfoWindow=t.Rectangle=t.Cluster=t.Circle=t.Polygon=t.Polyline=t.Marker=t.loadGmapApi=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.install=function(e,t){t=r({installComponents:!0,autobindAllEvents:!1},t),w=new e({data:{gmapApi:null}});var n=new e,v=function(e){function t(){return w.gmapApi={},window.google}if(e.load)return(0,o.default)(function(){return"undefined"==typeof window?new Promise(function(){}).then(t):new Promise(function(t,n){try{window.vueGoogleMapsInit=t,(0,a.loadGmapApi)(e.load,e.loadCn)}catch(e){n(e)}}).then(t)});var n=new Promise(function(e){"undefined"!=typeof window&&(window.vueGoogleMapsInit=e)}).then(t);return(0,o.default)(function(){return n})}(t);e.mixin({created:function(){this.$gmapDefaultResizeBus=n,this.$gmapOptions=t,this.$gmapApiPromiseLazy=v}}),e.$gmapDefaultResizeBus=n,e.$gmapApiPromiseLazy=v,t.installComponents&&(e.component("GmapMap",d.default),e.component("GmapMarker",i.default),e.component("GmapInfoWindow",p.default),e.component("GmapPolyline",u.default),e.component("GmapPolygon",s.default),e.component("GmapCircle",c.default),e.component("GmapRectangle",l.default),e.component("GmapAutocomplete",h.default),e.component("GmapPlaceInput",m.default),e.component("GmapStreetViewPanorama",f.default))},t.gmapApi=function(){return w.gmapApi&&window.google};var o=g(n(23)),a=n(24),i=g(n(25)),u=g(n(26)),s=g(n(27)),c=g(n(28)),l=g(n(29)),p=g(n(30)),d=g(n(32)),f=g(n(36)),m=g(n(40)),h=g(n(41)),v=g(n(16)),y=g(n(0)),b=g(n(10));function g(e){return e&&e.__esModule?e:{default:e}}var _,j=(_=n(43)).default||_,w=null;t.loadGmapApi=a.loadGmapApi,t.Marker=i.default,t.Polyline=u.default,t.Polygon=s.default,t.Circle=c.default,t.Cluster=j,t.Rectangle=l.default,t.InfoWindow=p.default,t.Map=d.default,t.PlaceInput=m.default,t.MapElementMixin=v.default,t.MapElementFactory=y.default,t.Autocomplete=h.default,t.MountableMixin=b.default,t.StreetViewPanorama=f.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=!1,n=void 0;return function(){return t||(t=!0,n=e()),n}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=!1;t.loadGmapApi=function(e,t){if("undefined"!=typeof document){if(o)throw new Error("You already started the loading of google maps");o=!0;var n=document.createElement("SCRIPT");if("object"!==(void 0===e?"undefined":r(e)))throw new Error("options should  be an object");Array.prototype.isPrototypeOf(e.libraries)&&(e.libraries=e.libraries.join(",")),e.callback="vueGoogleMapsInit";var a="https://maps.googleapis.com/";"boolean"==typeof t&&!0===t&&(a="https://maps.google.cn/");var i=a+"maps/api/js?"+Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&");n.setAttribute("src",i),n.setAttribute("async",""),n.setAttribute("defer",""),document.head.appendChild(n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=(r=o)&&r.__esModule?r:{default:r};var i={animation:{twoWay:!0,type:Number},attribution:{type:Object},clickable:{type:Boolean,twoWay:!0,default:!0},cursor:{type:String,twoWay:!0},draggable:{type:Boolean,twoWay:!0,default:!1},icon:{twoWay:!0},label:{},opacity:{type:Number,default:1},options:{type:Object},place:{type:Object},position:{type:Object,twoWay:!0},shape:{type:Object,twoWay:!0},title:{type:String,twoWay:!0},zIndex:{type:Number,twoWay:!0},visible:{twoWay:!0,default:!0}};t.default=(0,a.default)({mappedProps:i,events:["click","rightclick","dblclick","drag","dragstart","dragend","mouseup","mousedown","mouseover","mouseout"],name:"marker",ctr:function(){return google.maps.Marker},inject:{$clusterPromise:{default:null}},render:function(e){return this.$slots.default&&0!==this.$slots.default.length?1===this.$slots.default.length?this.$slots.default[0]:e("div",this.$slots.default):""},destroyed:function(){this.$markerObject&&(this.$clusterObject?this.$clusterObject.removeMarker(this.$markerObject,!0):this.$markerObject.setMap(null))},beforeCreate:function(e){return this.$clusterPromise&&(e.map=null),this.$clusterPromise},afterCreate:function(e){var t=this;this.$clusterPromise&&this.$clusterPromise.then(function(n){n.addMarker(e),t.$clusterObject=n})}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r};var u={draggable:{type:Boolean},editable:{type:Boolean},options:{twoWay:!1,type:Object},path:{type:Array,twoWay:!0}};t.default=(0,i.default)({mappedProps:u,props:{deepWatch:{type:Boolean,default:!1}},events:["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],name:"polyline",ctr:function(){return google.maps.Polyline},afterCreate:function(){var e=this,t=function(){};this.$watch("path",function(n){if(n){t(),e.$polylineObject.setPath(n);var r=e.$polylineObject.getPath(),a=[],i=function(){e.$emit("path_changed",e.$polylineObject.getPath())};a.push([r,r.addListener("insert_at",i)]),a.push([r,r.addListener("remove_at",i)]),a.push([r,r.addListener("set_at",i)]),t=function(){a.map(function(e){var t=o(e,2),n=(t[0],t[1]);return google.maps.event.removeListener(n)})}}},{deep:this.deepWatch,immediate:!0})}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r};var u={draggable:{type:Boolean},editable:{type:Boolean},options:{type:Object},path:{type:Array,twoWay:!0,noBind:!0},paths:{type:Array,twoWay:!0,noBind:!0}};t.default=(0,i.default)({props:{deepWatch:{type:Boolean,default:!1}},events:["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],mappedProps:u,name:"polygon",ctr:function(){return google.maps.Polygon},beforeCreate:function(e){e.path||delete e.path,e.paths||delete e.paths},afterCreate:function(e){var t=this,n=function(){};this.$watch("paths",function(r){if(r){n(),e.setPaths(r);for(var a=function(){t.$emit("paths_changed",e.getPaths())},i=[],u=e.getPaths(),s=0;s<u.getLength();s++){var c=u.getAt(s);i.push([c,c.addListener("insert_at",a)]),i.push([c,c.addListener("remove_at",a)]),i.push([c,c.addListener("set_at",a)])}i.push([u,u.addListener("insert_at",a)]),i.push([u,u.addListener("remove_at",a)]),i.push([u,u.addListener("set_at",a)]),n=function(){i.map(function(e){var t=o(e,2),n=(t[0],t[1]);return google.maps.event.removeListener(n)})}}},{deep:this.deepWatch,immediate:!0}),this.$watch("path",function(r){if(r){n(),e.setPaths(r);var a=e.getPath(),i=[],u=function(){t.$emit("path_changed",e.getPath())};i.push([a,a.addListener("insert_at",u)]),i.push([a,a.addListener("remove_at",u)]),i.push([a,a.addListener("set_at",u)]),n=function(){i.map(function(e){var t=o(e,2),n=(t[0],t[1]);return google.maps.event.removeListener(n)})}}},{deep:this.deepWatch,immediate:!0})}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=(r=o)&&r.__esModule?r:{default:r};var i={center:{type:Object,twoWay:!0,required:!0},radius:{type:Number,twoWay:!0},draggable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},options:{type:Object,twoWay:!1}};t.default=(0,a.default)({mappedProps:i,name:"circle",ctr:function(){return google.maps.Circle},events:["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"]})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=(r=o)&&r.__esModule?r:{default:r};var i={bounds:{type:Object,twoWay:!0},draggable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},options:{type:Object,twoWay:!1}};t.default=(0,a.default)({mappedProps:i,name:"rectangle",ctr:function(){return google.maps.Rectangle},events:["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"]})},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var i=n(11),u=n(1),s=Object(u.a)(o.a,i.a,i.b,!1,null,null,null);t.default=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=(r=o)&&r.__esModule?r:{default:r};var i={options:{type:Object,required:!1,default:function(){return{}}},position:{type:Object,twoWay:!0},zIndex:{type:Number,twoWay:!0}};t.default=(0,a.default)({mappedProps:i,events:["domready","closeclick","content_changed"],name:"infoWindow",ctr:function(){return google.maps.InfoWindow},props:{opened:{type:Boolean,default:!0}},inject:{$markerPromise:{default:null}},mounted:function(){var e=this.$refs.flyaway;e.parentNode.removeChild(e)},beforeCreate:function(e){var t=this;if(e.content=this.$refs.flyaway,this.$markerPromise)return delete e.position,this.$markerPromise.then(function(e){return t.$markerObject=e,e})},methods:{_openInfoWindow:function(){this.opened?null!==this.$markerObject?this.$infoWindowObject.open(this.$map,this.$markerObject):this.$infoWindowObject.open(this.$map):this.$infoWindowObject.close()}},afterCreate:function(){var e=this;this._openInfoWindow(),this.$watch("opened",function(){e._openInfoWindow()})}})},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var i=n(12),u=n(1);var s=function(e){n(33)},c=Object(u.a)(o.a,i.a,i.b,!1,s,null,null);t.default=c.exports},function(e,t,n){var r=n(34);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(20).default)("01ed1b0e",r,!0,{})},function(e,t,n){(e.exports=n(17)()).push([e.i,".vue-map-container{position:relative}.vue-map-container .vue-map{left:0;right:0;top:0;bottom:0;position:absolute}.vue-map-hidden{display:none}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n(8)),a=n(2),i=l(n(10)),u=l(n(18)),s=l(n(9)),c=n(0);function l(e){return e&&e.__esModule?e:{default:e}}var p={center:{required:!0,twoWay:!0,type:Object,noBind:!0},zoom:{required:!1,twoWay:!0,type:Number,noBind:!0},heading:{type:Number,twoWay:!0},mapTypeId:{twoWay:!0,type:String},tilt:{twoWay:!0,type:Number},options:{type:Object,default:function(){return{}}}},d=["bounds_changed","click","dblclick","drag","dragend","dragstart","idle","mousemove","mouseout","mouseover","resize","rightclick","tilesloaded"],f=["panBy","panTo","panToBounds","fitBounds"].reduce(function(e,t){return e[t]=function(){this.$mapObject&&this.$mapObject[t].apply(this.$mapObject,arguments)},e},{}),m={resize:function(){this.$mapObject&&google.maps.event.trigger(this.$mapObject,"resize")},resizePreserveCenter:function(){if(this.$mapObject){var e=this.$mapObject.getCenter();google.maps.event.trigger(this.$mapObject,"resize"),this.$mapObject.setCenter(e)}},_resizeCallback:function(){this.resizePreserveCenter()}};t.default={mixins:[i.default],props:(0,c.mappedPropsToVueProps)(p),provide:function(){var e=this;return this.$mapPromise=new Promise(function(t,n){e.$mapPromiseDeferred={resolve:t,reject:n}}),{$mapPromise:this.$mapPromise}},computed:{finalLat:function(){return this.center&&"function"==typeof this.center.lat?this.center.lat():this.center.lat},finalLng:function(){return this.center&&"function"==typeof this.center.lng?this.center.lng():this.center.lng},finalLatLng:function(){return{lat:this.finalLat,lng:this.finalLng}}},watch:{zoom:function(e){this.$mapObject&&this.$mapObject.setZoom(e)}},mounted:function(){var e=this;return this.$gmapApiPromiseLazy().then(function(){var t=e.$refs["vue-map"],n=r({},e.options,(0,a.getPropsValues)(e,p));return delete n.options,e.$mapObject=new google.maps.Map(t,n),(0,a.bindProps)(e,e.$mapObject,p),(0,o.default)(e,e.$mapObject,d),(0,u.default)(function(t,n,r){e.$mapObject.addListener("center_changed",function(){r()&&e.$emit("center_changed",e.$mapObject.getCenter()),n()}),(0,s.default)(e,["finalLat","finalLng"],function(){t(),e.$mapObject.setCenter(e.finalLatLng)})}),e.$mapObject.addListener("zoom_changed",function(){e.$emit("zoom_changed",e.$mapObject.getZoom())}),e.$mapObject.addListener("bounds_changed",function(){e.$emit("bounds_changed",e.$mapObject.getBounds())}),e.$mapPromiseDeferred.resolve(e.$mapObject),e.$mapObject}).catch(function(e){throw e})},methods:r({},m,f)}},function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var i=n(13),u=n(1);var s=function(e){n(37)},c=Object(u.a)(o.a,i.a,i.b,!1,s,null,null);t.default=c.exports},function(e,t,n){var r=n(38);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(20).default)("31fa8950",r,!0,{})},function(e,t,n){(e.exports=n(17)()).push([e.i,".vue-street-view-pano-container{position:relative}.vue-street-view-pano-container .vue-street-view-pano{left:0;right:0;top:0;bottom:0;position:absolute}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n(8)),a=n(2),i=l(n(10)),u=l(n(18)),s=l(n(9)),c=n(0);function l(e){return e&&e.__esModule?e:{default:e}}var p={zoom:{twoWay:!0,type:Number},pov:{twoWay:!0,type:Object,trackProperties:["pitch","heading"]},position:{twoWay:!0,type:Object,noBind:!0},pano:{twoWay:!0,type:String},motionTracking:{twoWay:!1,type:Boolean},visible:{twoWay:!0,type:Boolean,default:!0},options:{twoWay:!1,type:Object,default:function(){return{}}}},d=["closeclick","status_changed"];t.default={mixins:[i.default],props:(0,c.mappedPropsToVueProps)(p),replace:!1,methods:{resize:function(){this.$panoObject&&google.maps.event.trigger(this.$panoObject,"resize")}},provide:function(){var e=this,t=new Promise(function(t,n){e.$panoPromiseDeferred={resolve:t,reject:n}});return{$panoPromise:t,$mapPromise:t}},computed:{finalLat:function(){return this.position&&"function"==typeof this.position.lat?this.position.lat():this.position.lat},finalLng:function(){return this.position&&"function"==typeof this.position.lng?this.position.lng():this.position.lng},finalLatLng:function(){return{lat:this.finalLat,lng:this.finalLng}}},watch:{zoom:function(e){this.$panoObject&&this.$panoObject.setZoom(e)}},mounted:function(){var e=this;return this.$gmapApiPromiseLazy().then(function(){var t=e.$refs["vue-street-view-pano"],n=r({},e.options,(0,a.getPropsValues)(e,p));return delete n.options,e.$panoObject=new google.maps.StreetViewPanorama(t,n),(0,a.bindProps)(e,e.$panoObject,p),(0,o.default)(e,e.$panoObject,d),(0,u.default)(function(t,n,r){t(),e.$panoObject.addListener("position_changed",function(){r()&&e.$emit("position_changed",e.$panoObject.getPosition()),n()}),(0,s.default)(e,["finalLat","finalLng"],function(){t(),e.$panoObject.setPosition(e.finalLatLng)})}),e.$panoPromiseDeferred.resolve(e.$panoObject),e.$panoPromise}).catch(function(e){throw e})}}},function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var i=n(14),u=n(1),s=Object(u.a)(o.a,i.a,i.b,!1,null,null,null);t.default=s.exports},function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var i=n(15),u=n(1),s=Object(u.a)(o.a,i.a,i.b,!1,null,null,null);t.default=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),i=n(19),u=(r=i)&&r.__esModule?r:{default:r},s=n(0);var c={bounds:{type:Object},componentRestrictions:{type:Object,noBind:!0},types:{type:Array,default:function(){return[]}}},l={selectFirstOnEnter:{required:!1,type:Boolean,default:!1},options:{type:Object}};t.default={mounted:function(){var e=this;this.$gmapApiPromiseLazy().then(function(){if(e.selectFirstOnEnter&&(0,u.default)(e.$refs.input),"function"!=typeof google.maps.places.Autocomplete)throw new Error("google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?");var t=o({},(0,a.getPropsValues)(e,c),e.options);e.$autocomplete=new google.maps.places.Autocomplete(e.$refs.input,t),(0,a.bindProps)(e,e.$autocomplete,c),e.$watch("componentRestrictions",function(t){void 0!==t&&e.$autocomplete.setComponentRestrictions(t)}),e.$autocomplete.addListener("place_changed",function(){e.$emit("place_changed",e.$autocomplete.getPlace())})})},props:o({},(0,s.mappedPropsToVueProps)(c),l)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(44)),o=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}var i={maxZoom:{type:Number,twoWay:!1},batchSizeIE:{type:Number,twoWay:!1},calculator:{type:Function,twoWay:!1},enableRetinaIcons:{type:Boolean,twoWay:!1},gridSize:{type:Number,twoWay:!1},ignoreHidden:{type:Boolean,twoWay:!1},imageExtension:{type:String,twoWay:!1},imagePath:{type:String,twoWay:!1},imageSizes:{type:Array,twoWay:!1},minimumClusterSize:{type:Number,twoWay:!1},styles:{type:Array,twoWay:!1},zoomOnClick:{type:Boolean,twoWay:!1}};t.default=(0,o.default)({mappedProps:i,events:["click","rightclick","dblclick","drag","dragstart","dragend","mouseup","mousedown","mouseover","mouseout"],name:"cluster",ctr:function(){if(void 0===r.default)throw console.error("MarkerClusterer is not installed! require() it or include it from https://cdnjs.cloudflare.com/ajax/libs/js-marker-clusterer/1.0.0/markerclusterer.js"),new Error("MarkerClusterer is not installed! require() it or include it from https://cdnjs.cloudflare.com/ajax/libs/js-marker-clusterer/1.0.0/markerclusterer.js");return r.default},ctrArgs:function(e){return[e.map,[],function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["map"])]},render:function(e){return e("div",this.$slots.default)},afterCreate:function(e){var t=function(){var t=e.getMarkers();e.clearMarkers(),e.addMarkers(t)};for(var n in i)i[n].twoWay&&this.$on(n.toLowerCase()+"_changed",t)},updated:function(){this.$clusterObject&&this.$clusterObject.repaint()},beforeDestroy:function(){var e=this;this.$children.forEach(function(t){t.$clusterObject===e.$clusterObject&&(t.$clusterObject=null)}),this.$clusterObject&&this.$clusterObject.clearMarkers()}})},function(t,n){t.exports=e}])});
