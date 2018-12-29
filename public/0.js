webpackJsonp([0],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(52)
/* template */
var __vue_template__ = __webpack_require__(63)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/layouts/backend/layout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-396189d6", Component.options)
  } else {
    hotAPI.reload("data-v-396189d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sidebar__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footer__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_footer__);
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
        'header-component': __WEBPACK_IMPORTED_MODULE_0__components_header___default.a,
        'sidebar-component': __WEBPACK_IMPORTED_MODULE_1__components_sidebar___default.a,
        'footer-component': __WEBPACK_IMPORTED_MODULE_2__components_footer___default.a
    }
});

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(54)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/layouts/backend/components/header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04daf5aa", Component.options)
  } else {
    hotAPI.reload("data-v-04daf5aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "app-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row gutters" }, [
          _c(
            "div",
            { staticClass: "col-xl-5 col-lg-5 col-md-5 col-sm-3 col-4" },
            [
              _c(
                "a",
                {
                  staticClass: "mini-nav-btn",
                  attrs: { href: "#", id: "app-side-mini-toggler" }
                },
                [_c("i", { staticClass: "icon-sort" })]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "onoffcanvas-toggler",
                  attrs: {
                    href: "#app-side",
                    "data-toggle": "onoffcanvas",
                    "aria-expanded": "true"
                  }
                },
                [_c("i", { staticClass: "icon-chevron-thin-left" })]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-2 col-lg-2 col-md-2 col-sm-6 col-4" },
            [
              _c("a", { staticClass: "logo", attrs: { href: "index.html" } }, [
                _c("img", {
                  attrs: {
                    src: "/themes/backend/unity/img/unify.png",
                    alt: "Unify Admin Dashboard"
                  }
                })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-5 col-lg-5 col-md-5 col-sm-3 col-4" },
            [
              _c("ul", { staticClass: "header-actions" }, [
                _c("li", { staticClass: "dropdown" }, [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "#",
                        id: "notifications",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true"
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-notifications_none" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "count-label" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown-menu dropdown-menu-right lg",
                      attrs: { "aria-labelledby": "notifications" }
                    },
                    [
                      _c("ul", { staticClass: "imp-notify" }, [
                        _c("li", [
                          _c("div", { staticClass: "icon" }, [_vm._v("W")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "details" }, [
                            _c("p", [
                              _c("span", [_vm._v("Wilson")]),
                              _vm._v(
                                " The best Dashboard design I have seen ever."
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("div", { staticClass: "icon" }, [_vm._v("J")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "details" }, [
                            _c("p", [
                              _c("span", [_vm._v("John Smith")]),
                              _vm._v(" Jhonny sent you a message. Read now!")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("div", { staticClass: "icon secondary" }, [
                            _vm._v("R")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "details" }, [
                            _c("p", [
                              _c("span", [_vm._v("Justin Mezzell")]),
                              _vm._v(
                                " Stella, Added you as a Friend. Accept it!"
                              )
                            ])
                          ])
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "#",
                        id: "todos",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true"
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-person_outline" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "count-label red" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown-menu dropdown-menu-right lg",
                      attrs: { "aria-labelledby": "todos" }
                    },
                    [
                      _c("ul", { staticClass: "stats-widget" }, [
                        _c("li", [
                          _c("h4", [_vm._v("$37895")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Revenue "),
                            _c("span", [_vm._v("+2%")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress" }, [
                            _c(
                              "div",
                              {
                                staticClass: "progress-bar",
                                staticStyle: { width: "87%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": "87",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100"
                                }
                              },
                              [
                                _c("span", { staticClass: "sr-only" }, [
                                  _vm._v("87% Complete (success)")
                                ])
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("h4", [_vm._v("4,897")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Downloads "),
                            _c("span", [_vm._v("+39%")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress" }, [
                            _c(
                              "div",
                              {
                                staticClass: "progress-bar",
                                staticStyle: { width: "65%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": "65",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100"
                                }
                              },
                              [
                                _c("span", { staticClass: "sr-only" }, [
                                  _vm._v("65% Complete (success)")
                                ])
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("h4", [_vm._v("2,219")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Uploads "),
                            _c("span", { staticClass: "text-secondary" }, [
                              _vm._v("-7%")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress" }, [
                            _c(
                              "div",
                              {
                                staticClass: "progress-bar bg-danger",
                                staticStyle: { width: "42%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": "42",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100"
                                }
                              },
                              [
                                _c("span", { staticClass: "sr-only" }, [
                                  _vm._v("42% Complete (success)")
                                ])
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "dropdown" }, [
                  _c(
                    "a",
                    {
                      staticClass: "user-settings",
                      attrs: {
                        href: "#",
                        id: "userSettings",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true"
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "avatar",
                        attrs: {
                          src: "/themes/backend/unity/img/user.png",
                          alt: "User Thumb"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "user-name" }, [
                        _vm._v("Sofia Vergara")
                      ]),
                      _vm._v(" "),
                      _c("i", { staticClass: "icon-chevron-small-down" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown-menu lg dropdown-menu-right",
                      attrs: { "aria-labelledby": "userSettings" }
                    },
                    [
                      _c("ul", { staticClass: "user-settings-list" }, [
                        _c("li", [
                          _c("a", { attrs: { href: "profile.html" } }, [
                            _c("div", { staticClass: "icon" }, [
                              _c("i", { staticClass: "icon-account_circle" })
                            ]),
                            _vm._v(" "),
                            _c("p", [_vm._v("Profile")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "profile.html" } }, [
                            _c("div", { staticClass: "icon red" }, [
                              _c("i", { staticClass: "icon-cog3" })
                            ]),
                            _vm._v(" "),
                            _c("p", [_vm._v("Settings")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { attrs: { href: "filters.html" } }, [
                            _c("div", { staticClass: "icon yellow" }, [
                              _c("i", { staticClass: "icon-schedule" })
                            ]),
                            _vm._v(" "),
                            _c("p", [_vm._v("Activity")])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "logout-btn" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { href: "login.html" }
                          },
                          [_vm._v("Logout")]
                        )
                      ])
                    ]
                  )
                ])
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-04daf5aa", module.exports)
  }
}

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(56)
/* template */
var __vue_template__ = __webpack_require__(60)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/layouts/backend/components/sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a14218f", Component.options)
  } else {
    hotAPI.reload("data-v-3a14218f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebarMenuItem__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebarMenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__sidebarMenuItem__);
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
    name: 'sidebar',
    components: {
        'sidebar-menu-item': __WEBPACK_IMPORTED_MODULE_0__sidebarMenuItem___default.a
    },
    computed: {
        routes: function routes() {
            return this.$routes[0].children;
        }
    },
    mounted: function mounted() {
        this.mountSidebar();
    },

    methods: {
        mountSidebar: function mountSidebar() {
            if ($(window).width() < 992) {
                $('#app-side').onoffcanvas('hide');
            } else {
                $('#app-side').onoffcanvas('show');
            }

            $('.side-nav .unifyMenu').unifyMenu({ toggle: true });

            $('#app-side-hoverable-toggler').on('click', function () {
                $('.app-side').toggleClass('is-hoverable');
                $(undefined).children('i.fa').toggleClass('fa-angle-right fa-angle-left');
            });

            $('#app-side-mini-toggler').on('click', function () {
                $('.app-side').toggleClass('is-mini');
                $("#app-side-mini-toggler i").toggleClass('icon-sort icon-menu5');
            });

            $('#onoffcanvas-nav').on('click', function () {
                $('.app-side').toggleClass('left-toggle');
                $('.app-main').toggleClass('left-toggle');
                $("#onoffcanvas-nav i").toggleClass('icon-sort icon-menu5');
            });

            $('.onoffcanvas-toggler').on('click', function () {
                $(".onoffcanvas-toggler i").toggleClass('icon-chevron-thin-left icon-chevron-thin-right');
            });
        }
    }
});

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(58)
/* template */
var __vue_template__ = __webpack_require__(59)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/layouts/backend/components/sidebarMenuItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-762df2c1", Component.options)
  } else {
    hotAPI.reload("data-v-762df2c1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    props: ['routes'],
    methods: {
        goToRoute: function goToRoute(routeName) {
            return this.$router.push({ name: routeName });
        }
    }
});

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.routes, function(route, index) {
      return _c("li", { key: index, staticClass: "active selected" }, [
        _c(
          "a",
          {
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.goToRoute(route.name)
              }
            }
          },
          [
            _vm._m(0, true),
            _vm._v(" "),
            _c("span", { staticClass: "nav-title" }, [
              _vm._v(_vm._s(route.meta.title))
            ])
          ]
        )
      ])
    })
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "has-icon" }, [
      _c("i", { staticClass: "icon-chat_bubble_outline" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-762df2c1", module.exports)
  }
}

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("aside", { staticClass: "app-side", attrs: { id: "app-side" } }, [
    _c("div", { staticClass: "side-content " }, [
      _vm._m(0),
      _vm._v(" "),
      _c("nav", { staticClass: "side-nav" }, [
        _c(
          "ul",
          { staticClass: "unifyMenu", attrs: { id: "unifyMenu" } },
          [_c("sidebar-menu-item", { attrs: { routes: _vm.routes } })],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "user-profile" }, [
      _c("img", {
        staticClass: "profile-thumb",
        attrs: { src: "/themes/backend/unity/img/user.png", alt: "User Thumb" }
      }),
      _vm._v(" "),
      _c("h6", { staticClass: "profile-name" }, [_vm._v("Sofia Vergara")]),
      _vm._v(" "),
      _c("ul", { staticClass: "profile-actions" }, [
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "icon-social-skype" }),
            _vm._v(" "),
            _c("span", { staticClass: "count-label red" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "icon-social-twitter" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "login.html" } }, [
            _c("i", { staticClass: "icon-export" })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3a14218f", module.exports)
  }
}

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(62)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/layouts/backend/components/footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38aedc90", Component.options)
  } else {
    hotAPI.reload("data-v-38aedc90", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("footer", { staticClass: "main-footer fixed-btm" }, [
    _vm._v("\n    Copyright Unify Admin 2017.\n")
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-38aedc90", module.exports)
  }
}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "app-wrap" },
      [
        _c("header-component"),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "app-container" },
          [
            _c("sidebar-component"),
            _vm._v(" "),
            _c("div", { staticClass: "app-main" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "main-content" }, [_c("router-view")], 1)
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("footer-component")
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "main-heading" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12" },
            [
              _c("div", { staticClass: "page-icon" }, [
                _c("i", { staticClass: "icon-laptop_windows" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "page-title" }, [
                _c("h5", [_vm._v("Dashboard")]),
                _vm._v(" "),
                _c("h6", { staticClass: "sub-heading" }, [
                  _vm._v("Welcome to Unify Admin Template")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" },
            [
              _c(
                "div",
                { staticClass: "input-group form-group search-block" },
                [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Search for...",
                      "aria-label": "Search for..."
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "input-group-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Search")]
                    )
                  ])
                ]
              )
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-396189d6", module.exports)
  }
}

/***/ })

});