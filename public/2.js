webpackJsonp([2],{

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(64)
/* template */
var __vue_template__ = __webpack_require__(65)
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
Component.options.__file = "resources/js/components/backend/dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-325814c4", Component.options)
  } else {
    hotAPI.reload("data-v-325814c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 64:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 65:
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
    return _c("div", [
      _c("div", { staticClass: "row gutters" }, [
        _c("div", { staticClass: "col-xl-3 col-lg-3 col-md-6 col-sm-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "stats-widget" }, [
                _c("div", { staticClass: "stats-widget-header" }, [
                  _c("img", {
                    attrs: {
                      src: "/themes/backend/unity/img/thumb-up.svg",
                      alt: "Likes"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "stats-widget-body" }, [
                  _c("ul", { staticClass: "row no-gutters" }, [
                    _c(
                      "li",
                      {
                        staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-6 col"
                      },
                      [_c("h6", { staticClass: "title" }, [_vm._v("Likes")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-6 col"
                      },
                      [_c("h4", { staticClass: "total" }, [_vm._v("9,275")])]
                    )
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-lg-3 col-md-6 col-sm-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "stats-widget" }, [
                _c("div", { staticClass: "stats-widget-header" }, [
                  _c("img", {
                    attrs: {
                      src: "/themes/backend/unity/img/chat.svg",
                      alt: "Comments"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "stats-widget-body" }, [
                  _c("ul", { staticClass: "row no-gutters" }, [
                    _c(
                      "li",
                      {
                        staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-6 col"
                      },
                      [_c("h6", { staticClass: "title" }, [_vm._v("Comments")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-6 col"
                      },
                      [_c("h4", { staticClass: "total" }, [_vm._v("7,200")])]
                    )
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-lg-3 col-md-6 col-sm-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "stats-widget" }, [
                _c(
                  "a",
                  {
                    staticClass: "stats-label",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      title: "New Tasks"
                    }
                  },
                  [_vm._v("47")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "stats-widget-header" }, [
                  _c("img", {
                    attrs: {
                      src: "/themes/backend/unity/img/calendar.svg",
                      alt: "Calendar"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "stats-widget-body" }, [
                  _c("ul", { staticClass: "row no-gutters" }, [
                    _c(
                      "li",
                      {
                        staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-6 col"
                      },
                      [_c("h6", { staticClass: "title" }, [_vm._v("Tasks")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-6 col"
                      },
                      [_c("h4", { staticClass: "total" }, [_vm._v("390")])]
                    )
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-lg-3 col-md-6 col-sm-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "stats-widget" }, [
                _c(
                  "a",
                  {
                    staticClass: "stats-label",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      title: "New Servers"
                    }
                  },
                  [_vm._v("12")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "stats-widget-header" }, [
                  _c("img", {
                    attrs: {
                      src: "/themes/backend/unity/img/server.svg",
                      alt: "Servers"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "stats-widget-body" }, [
                  _c("ul", { staticClass: "row no-gutters" }, [
                    _c(
                      "li",
                      {
                        staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-6 col"
                      },
                      [_c("h6", { staticClass: "title" }, [_vm._v("Servers")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-6 col"
                      },
                      [_c("h4", { staticClass: "total" }, [_vm._v("1,950")])]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row gutters" }, [
        _c("div", { staticClass: "col-xl-12 col-lg-12 col-md-12 col-sm-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Overview"),
              _c(
                "a",
                { staticClass: "link", attrs: { href: "widgets.html" } },
                [_vm._v("More examples")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row gutters" }, [
                _c(
                  "div",
                  { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12" },
                  [
                    _c("div", { staticClass: "row gutters" }, [
                      _c(
                        "div",
                        { staticClass: "col-xl-8 col-lg-8 col-md-7 col-sm-7" },
                        [
                          _c("h6", { staticClass: "card-title mt-0" }, [
                            _vm._v("Facebook")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "chartist custom-one" }, [
                            _c("div", { staticClass: "donut-chart4" })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "download-details" }, [
                            _c("p", [
                              _vm._v("32"),
                              _c("sup", [_vm._v("%")]),
                              _vm._v(" more shares than last month")
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-xl-4 col-lg-4 col-md-5 col-sm-5" },
                        [
                          _c("div", { staticClass: "monthly-avg" }, [
                            _c("h6", [_vm._v("Average Shares")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "avg-block" }, [
                              _c(
                                "h4",
                                { staticClass: "avg-total text-primary" },
                                [_vm._v("2450")]
                              ),
                              _vm._v(" "),
                              _c("h6", { staticClass: "avg-label" }, [
                                _vm._v(
                                  "\n                                                Weekly\n                                            "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "avg-block" }, [
                              _c(
                                "h4",
                                { staticClass: "avg-total text-secondary" },
                                [_vm._v("9500")]
                              ),
                              _vm._v(" "),
                              _c("h6", { staticClass: "avg-label" }, [
                                _vm._v(
                                  "\n                                                Monthly\n                                            "
                                )
                              ])
                            ])
                          ])
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12" },
                  [
                    _c("div", { staticClass: "row gutters" }, [
                      _c(
                        "div",
                        { staticClass: "col-xl-4 col-lg-4 col-md-5 col-sm-5" },
                        [
                          _c("div", { staticClass: "monthly-avg" }, [
                            _c("h6", [_vm._v("Average Tweets")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "avg-block" }, [
                              _c(
                                "h4",
                                { staticClass: "avg-total text-primary" },
                                [_vm._v("3850")]
                              ),
                              _vm._v(" "),
                              _c("h6", { staticClass: "avg-label" }, [
                                _vm._v(
                                  "\n                                                Weekly\n                                            "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "avg-block" }, [
                              _c(
                                "h4",
                                { staticClass: "avg-total text-secondary" },
                                [_vm._v("8500")]
                              ),
                              _vm._v(" "),
                              _c("h6", { staticClass: "avg-label" }, [
                                _vm._v(
                                  "\n                                                Monthly\n                                            "
                                )
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-xl-8 col-lg-8 col-md-7 col-sm-7" },
                        [
                          _c("h6", { staticClass: "card-title mt-0" }, [
                            _vm._v("Twitter")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "chartist custom-one" }, [
                            _c("div", { staticClass: "donut-chart5" })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "download-details" }, [
                            _c("p", [
                              _vm._v("27"),
                              _c("sup", [_vm._v("%")]),
                              _vm._v(" more tweets than last month")
                            ])
                          ])
                        ]
                      )
                    ])
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row gutters" }, [
        _c("div", { staticClass: "col-xl-12 col-lg-12 col-md-12 col-sm-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Visitots vs Sales")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "toggle-switch tr" }, [
              _c("input", {
                staticClass: "check",
                attrs: { type: "checkbox" }
              }),
              _vm._v(" "),
              _c("b", { staticClass: "b switch" }),
              _vm._v(" "),
              _c("b", { staticClass: "b track" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row align-items-center" }, [
                _c(
                  "div",
                  { staticClass: "col-xl-5 col-lg-5 col-md-5 col-sm-5" },
                  [
                    _c("div", { staticClass: "chartist custom-one" }, [
                      _c("div", { staticClass: "compare-one" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "info-stats" }, [
                      _c("span", { staticClass: "info-label red" }),
                      _vm._v(" "),
                      _c("p", { staticClass: "info-title" }, [
                        _vm._v("Week #1")
                      ]),
                      _vm._v(" "),
                      _c("h4", { staticClass: "info-total" }, [
                        _vm._v("62,800")
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xl-2 col-lg-2 col-md-2 col-sm-2" },
                  [_c("div", { staticClass: "vs" })]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xl-5 col-lg-5 col-md-5 col-sm-5" },
                  [
                    _c("div", { staticClass: "chartist custom-two" }, [
                      _c("div", { staticClass: "compare-two" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "info-stats" }, [
                      _c("span", { staticClass: "info-label" }),
                      _vm._v(" "),
                      _c("p", { staticClass: "info-title" }, [
                        _vm._v("Week #2")
                      ]),
                      _vm._v(" "),
                      _c("h4", { staticClass: "info-total" }, [
                        _vm._v("86,200")
                      ])
                    ])
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row gutters" }, [
        _c("div", { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [_vm._v("Events")]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body p-0" }, [
              _c("div", { staticClass: "events" }, [
                _c("div", { staticClass: "all-events clearfix" }, [
                  _c("div", { attrs: { id: "today-date" } }),
                  _vm._v(" "),
                  _c("a", { staticClass: "btn btn-sm", attrs: { href: "#" } }, [
                    _vm._v("9 Events")
                  ])
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "event-list" }, [
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("div", { staticClass: "event-status-icon" }, [
                        _c("img", {
                          staticClass: "completed",
                          attrs: {
                            src: "/themes/backend/unity/img/checked.svg",
                            alt: "checked"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "event-info" }, [
                        _c("span", { staticClass: "event-time" }, [
                          _vm._v("8:45")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "event-desc text-truncate" }, [
                          _vm._v("Coffee with Hayashi")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("div", { staticClass: "event-status-icon" }, [
                        _c("img", {
                          staticClass: "completed",
                          attrs: {
                            src: "/themes/backend/unity/img/not-checked.svg",
                            alt: "Not checked"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "event-info" }, [
                        _c("span", { staticClass: "event-time" }, [
                          _vm._v("10:30")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "event-desc text-truncate" }, [
                          _vm._v("Product meeting with dev team")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [_vm._v("Income")]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body p-0" }, [
              _c("div", { staticClass: "row gutters" }, [
                _c(
                  "div",
                  { staticClass: "col-xl-4 col-lg-4 col-md-6 col-sm-6 col" },
                  [
                    _c("div", { staticClass: "income-stats" }, [
                      _c("h4", { staticClass: "total" }, [_vm._v("1465k")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "income-title" }, [
                        _c("span", { staticClass: "income-label" }),
                        _vm._v("Overall Income")
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-6 col" },
                  [
                    _c("div", { staticClass: "income-stats" }, [
                      _c("h4", { staticClass: "total" }, [_vm._v("1049k")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "income-title" }, [
                        _c("span", { staticClass: "income-label secondary" }),
                        _vm._v(
                          "Overall\n                                    Expenses"
                        )
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "chartist custom-two" }, [
                _c("div", { staticClass: "income-area-chart" })
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row gutters" }, [
        _c("div", { staticClass: "col-xl-4 col-lg-4 col-md-6 col-sm-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [_vm._v("Todo's")]),
            _vm._v(" "),
            _c("div", { staticClass: "customScroll" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("ul", { staticClass: "task-list" }, [
                  _c("li", { staticClass: "list completed" }, [
                    _c("span"),
                    _vm._v(" "),
                    _c("div", { staticClass: "task-details" }, [
                      _c("p", { staticClass: "date" }, [
                        _c("small", { staticClass: "text-secondary" }, [
                          _vm._v("Upgrade")
                        ]),
                        _vm._v(
                          " - Late 3 days\n                                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("Web server hardware needs to be upgraded")
                      ]),
                      _vm._v(" "),
                      _c("small", [_vm._v("Scheduled for 24th Mar, 2017")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list" }, [
                    _c("span"),
                    _vm._v(" "),
                    _c("div", { staticClass: "task-details" }, [
                      _c("p", { staticClass: "date" }, [
                        _c("small", { staticClass: "text-success" }, [
                          _vm._v("Bills")
                        ]),
                        _vm._v(
                          " - Pay in 3 days\n                                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Prepare for bi-weekly meeting to discuss new features"
                        )
                      ]),
                      _vm._v(" "),
                      _c("small", [_vm._v("Scheduled for 20th Mar, 2017")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list completed" }, [
                    _c("span"),
                    _vm._v(" "),
                    _c("div", { staticClass: "task-details" }, [
                      _c("p", { staticClass: "date" }, [
                        _c("small", { staticClass: "text-secondary" }, [
                          _vm._v("Meeting")
                        ]),
                        _vm._v(
                          " - Upcoming in 5 days\n                                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Meeting with Sara in the Caffee Caldo for Brunch"
                        )
                      ]),
                      _vm._v(" "),
                      _c("small", [_vm._v("Scheduled for 16th Mar, 2017")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list" }, [
                    _c("span"),
                    _vm._v(" "),
                    _c("div", { staticClass: "task-details" }, [
                      _c("p", { staticClass: "date" }, [
                        _c("small", { staticClass: "text-secondary" }, [
                          _vm._v("Meeting")
                        ]),
                        _vm._v(
                          " - Upcoming in 5 days\n                                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Meeting with Sara in the Caffee Caldo for Brunch"
                        )
                      ]),
                      _vm._v(" "),
                      _c("small", [_vm._v("Scheduled for 16th Mar, 2017")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list" }, [
                    _c("span"),
                    _vm._v(" "),
                    _c("div", { staticClass: "task-details" }, [
                      _c("p", { staticClass: "date" }, [
                        _c("small", { staticClass: "text-primary" }, [
                          _vm._v("Meeting")
                        ]),
                        _vm._v(
                          " - Delay 7 days\n                                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Technical management meeting")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("Completed 15 days ago")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list completed" }, [
                    _c("span"),
                    _vm._v(" "),
                    _c("div", { staticClass: "task-details" }, [
                      _c("p", { staticClass: "date" }, [
                        _c("small", [_vm._v("Transfer")]),
                        _vm._v(
                          " - Completed\n                                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("Transfer all domain names as soon as possible!")
                      ]),
                      _vm._v(" "),
                      _c("small", [_vm._v("Completed 2 days ago")])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-lg-4 col-md-6 col-sm-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [_vm._v("Activity")]),
            _vm._v(" "),
            _c("div", { staticClass: "customScroll" }, [
              _c("div", { staticClass: "card-body pt-0 pb-0" }, [
                _c("ul", { staticClass: "project-activity" }, [
                  _c("li", { staticClass: "activity-list" }, [
                    _c("div", { staticClass: "detail-info" }, [
                      _c("span", { staticClass: "lbl primary" }, [_vm._v("N")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "desc-info" }, [
                        _c("span", [_vm._v("Novane Durso")]),
                        _vm._v(
                          " server not found, connection\n                                        problem."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "activity-status",
                          attrs: { href: "#" }
                        },
                        [
                          _c("i", { staticClass: "icon-done_all" }),
                          _vm._v("Read")
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "activity-list" }, [
                    _c("div", { staticClass: "detail-info" }, [
                      _c("span", { staticClass: "lbl secondary" }, [
                        _vm._v("L")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "desc-info" }, [
                        _c("span", [_vm._v("Luke Etheridge")]),
                        _vm._v(
                          " send email notifications of\n                                        subscriptions"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "activity-status",
                          attrs: { href: "#" }
                        },
                        [_vm._v("Mark as read")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "activity-list" }, [
                    _c("div", { staticClass: "detail-info" }, [
                      _c("span", { staticClass: "lbl primary" }, [_vm._v("C")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "desc-info" }, [
                        _c("span", [_vm._v("Cosmin Capitanu")]),
                        _vm._v(
                          " required change logs activity\n                                        reports"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "activity-status",
                          attrs: { href: "#" }
                        },
                        [
                          _c("i", { staticClass: "icon-done_all" }),
                          _vm._v("Read")
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "activity-list" }, [
                    _c("div", { staticClass: "detail-info" }, [
                      _c("span", { staticClass: "lbl secondary" }, [
                        _vm._v("M")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "desc-info" }, [
                        _c("span", [_vm._v("Moneyas Olina")]),
                        _vm._v(" strategic partnership plan")
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "activity-status",
                          attrs: { href: "#" }
                        },
                        [_vm._v("Mark as read")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "activity-list" }, [
                    _c("div", { staticClass: "detail-info" }, [
                      _c("span", { staticClass: "lbl primary" }, [_vm._v("A")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "desc-info" }, [
                        _c("span", [_vm._v("Auurso Novane")]),
                        _vm._v(
                          " server not found, connection\n                                        problem."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "activity-status",
                          attrs: { href: "#" }
                        },
                        [
                          _c("i", { staticClass: "icon-done_all" }),
                          _vm._v("Read")
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "activity-list" }, [
                    _c("div", { staticClass: "detail-info" }, [
                      _c("span", { staticClass: "lbl primary" }, [_vm._v("J")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "desc-info" }, [
                        _c("span", [_vm._v("Jovin Xamire")]),
                        _vm._v(
                          " send email notifications of\n                                        subscriptions"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "activity-status",
                          attrs: { href: "#" }
                        },
                        [_vm._v("Mark as read")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "activity-list" }, [
                    _c("div", { staticClass: "detail-info" }, [
                      _c("span", { staticClass: "lbl primary" }, [_vm._v("C")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "desc-info" }, [
                        _c("span", [_vm._v("Cosmin Capitanu")]),
                        _vm._v(
                          " required change logs activity\n                                        reports"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "activity-status",
                          attrs: { href: "#" }
                        },
                        [
                          _c("i", { staticClass: "icon-done_all" }),
                          _vm._v("Read")
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "activity-list" }, [
                    _c("div", { staticClass: "detail-info" }, [
                      _c("span", { staticClass: "lbl secondary" }, [
                        _vm._v("M")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "desc-info" }, [
                        _c("span", [_vm._v("Moneyas Olina")]),
                        _vm._v(" strategic partnership plan")
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "activity-status",
                          attrs: { href: "#" }
                        },
                        [_vm._v("Mark as read")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-lg-4 col-md-12 col-sm-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [_vm._v("Orders")]),
            _vm._v(" "),
            _c("div", { staticClass: "customScroll" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("ul", { staticClass: "order-list" }, [
                  _c("li", [
                    _c("p", { staticClass: "order-num placed" }, [
                      _vm._v("#45763 "),
                      _c("span", { staticClass: "order-date" }, [
                        _vm._v("45 mins")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "order-desc" }, [
                      _vm._v("Jessse "),
                      _c("span", [_vm._v("placed")]),
                      _vm._v(" new order")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("p", { staticClass: "order-num cancelled" }, [
                      _vm._v("#48239 "),
                      _c("span", { staticClass: "order-date" }, [
                        _vm._v("38 mins")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "order-desc" }, [
                      _vm._v("Alex "),
                      _c("span", [_vm._v("cancelled")]),
                      _vm._v(" an order")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("p", { staticClass: "order-num" }, [
                      _vm._v("#41470 "),
                      _c("span", { staticClass: "order-date" }, [
                        _vm._v("24 mins")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "order-desc" }, [
                      _vm._v("Sunny "),
                      _c("span", [_vm._v("processed")]),
                      _vm._v(" an order")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("p", { staticClass: "order-num placed" }, [
                      _vm._v("#46360 "),
                      _c("span", { staticClass: "order-date" }, [
                        _vm._v("10 mins")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "order-desc" }, [
                      _vm._v("Thompson "),
                      _c("span", [_vm._v("placed")]),
                      _vm._v(" an order")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("p", { staticClass: "order-num placed" }, [
                      _vm._v("#55242 "),
                      _c("span", { staticClass: "order-date" }, [
                        _vm._v("45 mins")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "order-desc" }, [
                      _vm._v("Jessse "),
                      _c("span", [_vm._v("placed")]),
                      _vm._v(" new order")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("p", { staticClass: "order-num cancelled" }, [
                      _vm._v("#33561 "),
                      _c("span", { staticClass: "order-date" }, [
                        _vm._v("38 mins")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "order-desc" }, [
                      _vm._v("Alex "),
                      _c("span", [_vm._v("cancelled")]),
                      _vm._v(" an order")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("p", { staticClass: "order-num" }, [
                      _vm._v("#12876 "),
                      _c("span", { staticClass: "order-date" }, [
                        _vm._v("24 mins")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "order-desc" }, [
                      _vm._v("Sunny "),
                      _c("span", [_vm._v("processed")]),
                      _vm._v(" an order")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("p", { staticClass: "order-num placed" }, [
                      _vm._v("#22536 "),
                      _c("span", { staticClass: "order-date" }, [
                        _vm._v("10 mins")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "order-desc" }, [
                      _vm._v("Thompson "),
                      _c("span", [_vm._v("placed")]),
                      _vm._v(" an order")
                    ])
                  ])
                ])
              ])
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-325814c4", module.exports)
  }
}

/***/ })

});