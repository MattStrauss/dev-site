(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Contact.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Contact.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      fields: {},
      errors: {},
      success: false,
      processing: false
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.processing = true;
      this.success = false;
      this.errors = {};
      axios.post('/contact', this.fields).then(function (response) {
        _this.fields = {};
        _this.processing = false;
        _this.success = true;
      })["catch"](function (error) {
        _this.processing = false;

        if (error.response.status === 422) {
          _this.errors = error.response.data.errors || {};
        }
      });
    },
    clearForm: function clearForm() {
      this.fields = {};
      this.processing = false;
      this.success = false;
      this.errors = {};
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2& ***!
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
  return _c("layout", [
    _c("div", { staticClass: "bg-gray-600 p-6 inset-y-auto object-center" }, [
      _c("div", { staticClass: "text-center text-gray-100" }, [
        _c("h2", { staticClass: "text-3xl font-hairline text-yellow-500" }, [
          _vm._v("Contact")
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass:
            "w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3"
        })
      ]),
      _vm._v(" "),
      _c(
        "form",
        { staticClass: "w-full max-w-lg ml-auto mr-auto mt-5 text-gray-100" },
        [
          _vm.success
            ? _c(
                "div",
                {
                  staticClass:
                    "bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-yellow-900 mb-4 px-4 py-3 shadow-md",
                  attrs: { role: "alert" }
                },
                [
                  _c("div", { staticClass: "flex" }, [
                    _c("div", { staticClass: "py-1" }, [
                      _c(
                        "svg",
                        {
                          staticClass:
                            "fill-current h-6 w-6 text-yellow-500 mr-4",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("p", { staticClass: "font-bold" }, [
                        _vm._v("Message Sent Successfully")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-sm" }, [
                        _vm._v("I'll be in touch as soon as possible, thanks!")
                      ])
                    ])
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
            _c("div", { staticClass: "w-full md:w-1/2 px-3 mb-6 md:mb-0" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-xs font-bold mb-2",
                  attrs: { for: "grid-name" }
                },
                [_vm._v("\n                        Name\n                    ")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.name,
                    expression: "fields.name"
                  }
                ],
                staticClass:
                  "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                class: _vm.errors && _vm.errors.name ? "border-red-500" : "",
                attrs: {
                  id: "grid-name",
                  name: "name",
                  type: "text",
                  placeholder: "Your Name"
                },
                domProps: { value: _vm.fields.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "name", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.errors && _vm.errors.name
                ? _c("p", { staticClass: "text-red-400 text-xs italic" }, [
                    _vm._v(_vm._s(_vm.errors.name[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-full md:w-1/2 px-3" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-xs font-bold mb-2",
                  attrs: { for: "grid-email" }
                },
                [
                  _vm._v(
                    "\n                        Email\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.email,
                    expression: "fields.email"
                  }
                ],
                staticClass:
                  "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                class: _vm.errors && _vm.errors.email ? "border-red-500" : "",
                attrs: {
                  id: "grid-email",
                  name: "email",
                  type: "email",
                  placeholder: "you@company.com"
                },
                domProps: { value: _vm.fields.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "email", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.errors && _vm.errors.email
                ? _c("p", { staticClass: "text-red-400 text-xs italic" }, [
                    _vm._v(_vm._s(_vm.errors.email[0]))
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex flex-wrap -mx-3 mb-2" }, [
            _c("div", { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-xs font-bold mb-2",
                  attrs: { for: "grid-start" }
                },
                [
                  _vm._v(
                    "\n                        Start Date\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "relative" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields.start,
                        expression: "fields.start"
                      }
                    ],
                    staticClass:
                      "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                    class:
                      _vm.errors && _vm.errors.start ? "border-red-500" : "",
                    attrs: { name: "start", id: "grid-start" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.fields,
                          "start",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option"),
                    _vm._v(" "),
                    _c("option", [_vm._v("ASAP")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("Within the next Month")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("Within the next Six months")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("Not sure...")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "fill-current h-4 w-4",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          }
                        })
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.errors && _vm.errors.start
                ? _c("p", { staticClass: "text-red-400 text-xs italic" }, [
                    _vm._v(_vm._s(_vm.errors.start[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-xs font-bold mb-2",
                  attrs: { for: "grid-work-type" }
                },
                [
                  _vm._v(
                    "\n                        Work Type\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "relative" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields.type,
                        expression: "fields.type"
                      }
                    ],
                    staticClass:
                      "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                    class:
                      _vm.errors && _vm.errors.type ? "border-red-500" : "",
                    attrs: { name: "type", id: "grid-work-type" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.fields,
                          "type",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option"),
                    _vm._v(" "),
                    _c("option", [_vm._v("Full Stack")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("Backend")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("Frontend")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("Planning")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("Management")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "fill-current h-4 w-4",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          }
                        })
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.errors && _vm.errors.type
                ? _c("p", { staticClass: "text-red-400 text-xs italic" }, [
                    _vm._v(_vm._s(_vm.errors.type[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-xs font-bold mb-2",
                  attrs: { for: "grid-remote" }
                },
                [
                  _vm._v(
                    "\n                        Remote?\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "relative" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields.remote,
                        expression: "fields.remote"
                      }
                    ],
                    staticClass:
                      "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                    class:
                      _vm.errors && _vm.errors.remote ? "border-red-500" : "",
                    attrs: { name: "remote", id: "grid-remote" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.fields,
                          "remote",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option"),
                    _vm._v(" "),
                    _c("option", [_vm._v("Yes")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("Mostly")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("Some")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("No")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "fill-current h-4 w-4",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          }
                        })
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.errors && _vm.errors.remote
                ? _c("p", { staticClass: "text-red-400 text-xs italic" }, [
                    _vm._v(_vm._s(_vm.errors.remote[0]))
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6 mt-4" }, [
            _c("div", { staticClass: "w-full px-3" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-xs font-bold mb-2",
                  attrs: { for: "grid-description" }
                },
                [
                  _vm._v(
                    "\n                        Job Description\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.description,
                    expression: "fields.description"
                  }
                ],
                staticClass:
                  "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                class:
                  _vm.errors && _vm.errors.description ? "border-red-500" : "",
                attrs: {
                  rows: "8",
                  name: "description",
                  id: "grid-description",
                  placeholder:
                    "Some details you'd like to share about the job..."
                },
                domProps: { value: _vm.fields.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "description", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.errors && _vm.errors.description
                ? _c("p", { staticClass: "text-red-400 text-xs italic" }, [
                    _vm._v(_vm._s(_vm.errors.description[0]))
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.fields.custom,
                expression: "fields.custom"
              }
            ],
            attrs: { type: "hidden", id: "custom", name: "custom", value: "" },
            domProps: { value: _vm.fields.custom },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.fields, "custom", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "flex items-center justify-between" }, [
            _c(
              "button",
              {
                staticClass:
                  "bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline",
                attrs: { type: "button" },
                on: { click: _vm.clearForm }
              },
              [_vm._v("\n                    Reset Form\n                ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline",
                class: [
                  _vm.processing ? "bg-yellow-600 pointer-events-none" : ""
                ],
                attrs: { disabled: _vm.processing, type: "button" },
                on: { click: _vm.submit }
              },
              [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.processing,
                        expression: "processing"
                      }
                    ],
                    attrs: { role: "status", "aria-hidden": "true" }
                  },
                  [_c("i", { staticClass: "fas fa-spinner fa-pulse fa-fw" })]
                ),
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.processing ? "Sending..." : "Send") +
                    "\n                "
                )
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "bg-gray-700 p-4 object-center text-center pb-10" },
      [
        _c("div", { staticClass: "md:ml-64 md:mr-64  pb-5" }, [
          _c("p", { staticClass: "text-3xl text-yellow-500 font-hairline" }, [
            _vm._v("Hire Me")
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3"
          }),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "italic text-gray-100 text-hairline pt-2" },
            [
              _vm._v(
                "\n                If you'd like to hire me to work on your project or application, please fill out the form above with the details so we can discuss it.\n                Feel free to check out my "
              ),
              _c(
                "inertia-link",
                {
                  staticClass: "hover:text-yellow-500",
                  attrs: { href: "/projects" }
                },
                [_vm._v(" personal projects ")]
              ),
              _vm._v(" and my contributions on\n                "),
              _c(
                "a",
                {
                  staticClass: "hover:text-yellow-500",
                  attrs: { href: "https://github.com/MattStrauss" }
                },
                [_vm._v(" my GitHub page")]
              ),
              _vm._v(".\n            ")
            ],
            1
          )
        ])
      ]
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

/***/ "./resources/js/Pages/Contact.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Contact.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_2c2b26f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=2c2b26f2& */ "./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_2c2b26f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_2c2b26f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Contact.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Contact.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_2c2b26f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=2c2b26f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_2c2b26f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_2c2b26f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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