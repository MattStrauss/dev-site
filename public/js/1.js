(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+SZM":function(t,e,s){"use strict";var a={data:function(){return{navMenuOpen:!1,title:this.$page.title}},methods:{toggleNavMenu:function(){this.navMenuOpen=!this.navMenuOpen}},computed:{getCurrentYear:function(){return(new Date).getFullYear()},getCopyright:function(){return"&copy;"+this.getCurrentYear+" Matt Strauss. All Rights Reserved."}},watch:{title:{immediate:!0,handler:function(t){document.title=t}}}},r=s("KHd+"),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"border-t-8 border-yellow-500"},[s("header",{staticClass:"text-gray-100 p-3"},[t._m(0),t._v(" "),s("div",{staticClass:"flex"},[s("i",{staticClass:"fas fa-bars fa-fw p-2 mr-2 cursor-pointer",on:{click:t.toggleNavMenu}}),t._v(" "),t.navMenuOpen?s("inertia-link",{staticClass:"p-1 hover:text-yellow-500 ml-1 mr-1",class:"welcome"===t.$page.route?"text-yellow-500":"",attrs:{href:"/"}},[s("i",{staticClass:"fa fa-home fa-fw"}),s("span",{staticClass:"uppercase tracking-wide text-xs font-bold"},[t._v(" Home")])]):t._e(),t._v(" "),t.navMenuOpen?s("inertia-link",{staticClass:"p-1 hover:text-yellow-500 mr-1",class:"projects"===t.$page.route?"text-yellow-500":"",attrs:{href:"/projects"}},[s("i",{staticClass:"fa fa-lightbulb fa-fw"}),s("span",{staticClass:"uppercase tracking-wide text-xs font-bold"},[t._v(" Projects")])]):t._e(),t._v(" "),t.navMenuOpen?s("inertia-link",{staticClass:"p-1 hover:text-yellow-500 ml-1",class:"contact"===t.$page.route?"text-yellow-500":"",attrs:{href:"/contact"}},[s("i",{staticClass:"fas fa-mail-bulk fa-fw"}),s("span",{staticClass:"uppercase tracking-wide text-xs font-bold"},[t._v(" Contact")])]):t._e()],1)]),t._v(" "),s("article",[t._t("default")],2),t._v(" "),s("div",{staticClass:"bg-gray-800 p-4 text-center text-yellow-500 text-xs",domProps:{innerHTML:t._s(t.getCopyright)}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social flex flex-row-reverse float-right pt-1"},[e("a",{staticClass:"px-2 hover:text-yellow-500",attrs:{href:"https://github.com/MattStrauss"}},[e("i",{staticClass:"fab fa-github fa-fw"})]),this._v(" "),e("a",{staticClass:"px-2 hover:text-yellow-500",attrs:{href:"https://twitter.com/mstrauss_dev"}},[e("i",{staticClass:"fab fa-twitter fa-fw"})]),this._v(" "),e("a",{staticClass:"px-2 hover:text-yellow-500",attrs:{href:"https://laracasts.com/@mstrauss"}},[e("i",{staticClass:"fab fa-laravel fa-fw"})])])}],!1,null,null,null);e.a=i.exports},"KHd+":function(t,e,s){"use strict";function a(t,e,s,a,r,i,n,l){var o,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),n?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=o):r&&(o=l?function(){r.call(this,this.$root.$options.shadowRoot)}:r),o)if(c.functional){c._injectStyles=o;var u=c.render;c.render=function(t,e){return o.call(e),u(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,o):[o]}return{exports:t,options:c}}s.d(e,"a",(function(){return a}))},y5VQ:function(t,e,s){"use strict";s.r(e);var a={components:{Layout:s("+SZM").a}},r=s("KHd+"),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout",[s("div",{staticClass:"bg-gray-600 p-6 inset-y-auto object-center"},[s("div",{staticClass:"max-w-sm rounded overflow-hidden bg-gray-200 mt-3 mb-3 shadow-lg mx-auto "},[s("img",{staticClass:"w-full",attrs:{src:"/images/grocery.jpg",alt:"Grocery Aisle"}}),t._v(" "),s("div",{staticClass:"px-6 py-4"},[s("div",{staticClass:"font-bold text-xl mb-2 text-yellow-600"},[s("a",{staticClass:"hover:text-yellow-500",attrs:{href:"https://swiftgrocerylist.com"}},[t._v("Swift Grocery List")])]),t._v(" "),s("p",{staticClass:"text-gray-700 text-base"},[t._v("\n                    A grocery list making web application built with Laravel and Vue.js. Includes recipes, aisle sorting and much more.\n                ")])]),t._v(" "),s("div",{staticClass:"px-6 py-4"},[s("span",{staticClass:"inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb2"},[t._v("#laravel")]),t._v(" "),s("span",{staticClass:"inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2"},[t._v("#vueJS")]),t._v(" "),s("span",{staticClass:"inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2"},[t._v("#bootstrap4")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);