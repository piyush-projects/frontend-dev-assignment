(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{213:function(e,t,n){},214:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(21),i=n(67),c=n(69),u=n(20),l=n(2),f=(n(213),function(e){var t=e.movie,n=Object(l.g)();return a.a.createElement("div",{className:"movie_card",onClick:function(){n.push("/movie/".concat(t.title))}},a.a.createElement("img",{src:t.poster,width:"150px",height:"150px"}),a.a.createElement("span",{className:"title"},t.title))});n(214);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=v(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e})).movieList,n=d(Object(r.useState)([]),2),l=n[0],s=n[1],y=d(Object(r.useState)(!0),2),v=y[0],p=y[1];return Object(r.useEffect)((function(){Object(i.a)().then((function(t){e({type:u.a,payload:t.data}),p(!1)}))}),[]),Object(r.useEffect)((function(){t.length>0?s(function(){var e,n=[],r=b(t);try{var a=function(){var t,r=e.value,a=b(r.genres);try{var o=function(){var e=t.value;n.filter((function(t){return t.genre===e})).length>0?n.map((function(t){return t.genre===e?m(m({},t),{},{movies:t.movies.push(r)}):t})):n.push({genre:e,movies:[r]})};for(a.s();!(t=a.n()).done;)o()}catch(e){a.e(e)}finally{a.f()}};for(r.s();!(e=r.n()).done;)a()}catch(e){r.e(e)}finally{r.f()}return n}()):s([])}),[t]),a.a.createElement(a.a.Fragment,null,v?a.a.createElement(c.a,null):l.length>0?l.map((function(e,t){return a.a.createElement("div",{key:t},a.a.createElement("div",{className:"row"},a.a.createElement("h2",null,e.genre)),a.a.createElement("div",{className:"card_layout"},e.movies.map((function(e,t){return a.a.createElement("div",{key:t},a.a.createElement(f,{movie:e}))}))))})):a.a.createElement("div",null,"No Result Found"))}},68:function(e,t,n){},69:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n.p+"d907618c387b0316e70dc80376b5c80a.gif";n(68),t.a=function(e){var t=e.size,n=void 0===t?"l":t;return a.a.createElement("div",{className:"LoadingScreen"},"s"===n&&a.a.createElement("img",{src:o,id:"loader",alt:"Loading...",style:{height:"25px",width:"25px"}}),"l"===n&&a.a.createElement("img",{src:o,id:"loader",alt:"Loading..."}))}}}]);