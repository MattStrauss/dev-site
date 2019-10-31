(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Projects.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Projects.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      projectsFilteredBy: '',
      projects: [{
        'name': 'Swift Grocery List',
        'skills': ['laravel', 'vueJS', 'bootstrap4'],
        'link': 'https://swiftgrocerylist.com',
        'img': '/images/grocery.jpg',
        'description': "A web application that helps you create a grocery shopping list fast. Built with Laravel and Vue.js. Includes recipes, drag-and-drop aisle sorting and much more."
      }, {
        'name': 'Other Project',
        'skills': ['rails', 'reactJS', 'tailwind'],
        'link': 'https://google.com',
        'img': '/images/grocery.jpg',
        'description': "Another project"
      }]
    };
  },
  computed: {
    filteredProjects: function filteredProjects() {
      var _this = this;

      if (this.projectsFilteredBy) {
        return this.projects.filter(function (project) {
          return project.skills.includes(_this.projectsFilteredBy);
        });
      } else {
        return this.projects;
      }
    }
  },
  methods: {
    filterProjects: function filterProjects(skill) {
      this.projectsFilteredBy = skill;
    },
    clearFilter: function clearFilter() {
      this.projectsFilteredBy = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      navMenuOpen: false,
      title: this.$page.title
    };
  },
  methods: {
    toggleNavMenu: function toggleNavMenu() {
      this.navMenuOpen = !this.navMenuOpen;
    }
  },
  computed: {
    getCurrentYear: function getCurrentYear() {
      var currentDate = new Date();
      return currentDate.getFullYear();
    },
    getCopyright: function getCopyright() {
      return "&copy;" + this.getCurrentYear + " Matt Strauss. All Rights Reserved.";
    }
  },
  watch: {
    title: {
      immediate: true,
      handler: function handler(title) {
        document.title = title;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Projects.vue?vue&type=template&id=42e41223&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Projects.vue?vue&type=template&id=42e41223& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("layout", [
    _c(
      "div",
      { staticClass: "bg-gray-600 p-6 inset-y-auto object-center" },
      [
        _c("div", { staticClass: "text-center text-gray-100" }, [
          _c("h2", { staticClass: "text-3xl font-hairline text-yellow-500" }, [
            _vm._v("Projects")
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3"
          })
        ]),
        _vm._v(" "),
        _vm.projectsFilteredBy
          ? _c("div", { staticClass: "text-center" }, [
              _c(
                "span",
                {
                  staticClass:
                    "inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2"
                },
                [
                  _vm._v(
                    '\n               "' + _vm._s(_vm.projectsFilteredBy) + '" '
                  ),
                  _c("i", {
                    staticClass:
                      "fas fa-times-circle parent hover:text-red-500",
                    on: { click: _vm.clearFilter }
                  })
                ]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.filteredProjects, function(project) {
          return _c(
            "div",
            {
              staticClass:
                "max-w-lg rounded overflow-hidden bg-gray-200 mt-3 mb-3 shadow-lg mx-auto border-gray-700 border-2"
            },
            [
              _c("img", { staticClass: "w-full", attrs: { src: project.img } }),
              _vm._v(" "),
              _c("div", { staticClass: "px-6 py-4" }, [
                _c(
                  "div",
                  { staticClass: "font-bold text-xl mb-2 text-yellow-600" },
                  [
                    _c("a", {
                      staticClass: "hover:text-yellow-500",
                      attrs: { href: project.link },
                      domProps: { textContent: _vm._s(project.name) }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("p", {
                  staticClass: "text-gray-700 text-base",
                  domProps: { textContent: _vm._s(project.description) }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "px-6 py-4" },
                _vm._l(project.skills, function(skill) {
                  return _c(
                    "span",
                    {
                      staticClass:
                        "inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2"
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-yellow-500 cursor-pointer",
                          on: {
                            click: function($event) {
                              return _vm.filterProjects(skill)
                            }
                          }
                        },
                        [_vm._v(" #" + _vm._s(skill))]
                      )
                    ]
                  )
                }),
                0
              )
            ]
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "border-t-8 border-yellow-500" }, [
    _c("header", { staticClass: "text-gray-100 p-3" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex" },
        [
          _c("i", {
            staticClass: "fas fa-bars fa-fw p-2 mr-2 cursor-pointer",
            on: { click: _vm.toggleNavMenu }
          }),
          _vm._v(" "),
          _vm.navMenuOpen
            ? _c(
                "inertia-link",
                {
                  staticClass: "p-1 hover:text-yellow-500 ml-1 mr-1",
                  class: _vm.$page.route === "welcome" ? "text-yellow-500" : "",
                  attrs: { href: "/" }
                },
                [
                  _c("i", { staticClass: "fa fa-home fa-fw" }),
                  _c(
                    "span",
                    {
                      staticClass: "uppercase tracking-wide text-xs font-bold"
                    },
                    [_vm._v(" Home")]
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.navMenuOpen
            ? _c(
                "inertia-link",
                {
                  staticClass: "p-1 hover:text-yellow-500 mr-1",
                  class:
                    _vm.$page.route === "projects" ? "text-yellow-500" : "",
                  attrs: { href: "/projects" }
                },
                [
                  _c("i", { staticClass: "fa fa-lightbulb fa-fw" }),
                  _c(
                    "span",
                    {
                      staticClass: "uppercase tracking-wide text-xs font-bold"
                    },
                    [_vm._v(" Projects")]
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.navMenuOpen
            ? _c(
                "inertia-link",
                {
                  staticClass: "p-1 hover:text-yellow-500 ml-1",
                  class: _vm.$page.route === "contact" ? "text-yellow-500" : "",
                  attrs: { href: "/contact" }
                },
                [
                  _c("i", { staticClass: "fas fa-mail-bulk fa-fw" }),
                  _c(
                    "span",
                    {
                      staticClass: "uppercase tracking-wide text-xs font-bold"
                    },
                    [_vm._v(" Contact")]
                  )
                ]
              )
            : _vm._e()
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("article", [_vm._t("default")], 2),
    _vm._v(" "),
    _c("div", {
      staticClass: "bg-gray-800 p-4 text-center text-yellow-500 text-xs",
      domProps: { innerHTML: _vm._s(_vm.getCopyright) }
    })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "social flex flex-row-reverse float-right pt-1" },
      [
        _c(
          "a",
          {
            staticClass: "px-2 hover:text-yellow-500",
            attrs: { href: "https://github.com/MattStrauss" }
          },
          [_c("i", { staticClass: "fab fa-github fa-fw" })]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "px-2 hover:text-yellow-500",
            attrs: { href: "https://twitter.com/mstrauss_dev" }
          },
          [_c("i", { staticClass: "fab fa-twitter fa-fw" })]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "px-2 hover:text-yellow-500",
            attrs: { href: "https://laracasts.com/@mstrauss" }
          },
          [_c("i", { staticClass: "fab fa-laravel fa-fw" })]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Pages/Projects.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Projects.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projects_vue_vue_type_template_id_42e41223___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=42e41223& */ "./resources/js/Pages/Projects.vue?vue&type=template&id=42e41223&");
/* harmony import */ var _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Projects_vue_vue_type_template_id_42e41223___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Projects_vue_vue_type_template_id_42e41223___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Projects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Projects.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Projects.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Projects.vue?vue&type=template&id=42e41223&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Projects.vue?vue&type=template&id=42e41223& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_42e41223___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=template&id=42e41223& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Projects.vue?vue&type=template&id=42e41223&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_42e41223___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_42e41223___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/Layout.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Layout.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6bf30086& */ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=6bf30086& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);