;(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object") module.exports = factory()
  else if (typeof define === "function" && define.amd) define([], factory)
  else if (typeof exports === "object") exports["bulmaSlider"] = factory()
  else root["bulmaSlider"] = factory()
})(
  typeof self !== "undefined" ? self : this,
  () =>
    ((modules) => {
      // webpackBootstrap
      /******/ // The module cache
      /******/ var installedModules = {}
      /******/
      /******/ // The require function
      /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
          /******/ return installedModules[moduleId].exports
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (installedModules[moduleId] = {
          /******/ i: moduleId,
          /******/ l: false,
          /******/ exports: {},
          /******/
        })
        /******/
        /******/ // Execute the module function
        /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
        /******/
        /******/ // Flag the module as loaded
        /******/ module.l = true
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/ __webpack_require__.m = modules
      /******/
      /******/ // expose the module cache
      /******/ __webpack_require__.c = installedModules
      /******/
      /******/ // define getter function for harmony exports
      /******/ __webpack_require__.d = (exports, name, getter) => {
        /******/ if (!__webpack_require__.o(exports, name)) {
          /******/ Object.defineProperty(exports, name, {
            /******/ configurable: false,
            /******/ enumerable: true,
            /******/ get: getter,
            /******/
          })
          /******/
        }
        /******/
      }
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = (module) => {
        /******/ var getter =
          module && module.__esModule
            ? /******/ function getDefault() {
                return module["default"]
              }
            : /******/ function getModuleExports() {
                return module
              }
        /******/ __webpack_require__.d(getter, "a", getter)
        /******/ return getter
        /******/
      }
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/ __webpack_require__.o = (object, property) => Object.prototype.hasOwnProperty.call(object, property)
      /******/
      /******/ // __webpack_public_path__
      /******/ __webpack_require__.p = ""
      /******/
      /******/ // Load entry module and return exports
      /******/ return __webpack_require__((__webpack_require__.s = 0))
      /******/
    })(
      /************************************************************************/
      /******/ [
        /* 0 */
        /***/ (module, __webpack_exports__, __webpack_require__) => {
          Object.defineProperty(__webpack_exports__, "__esModule", { value: true })
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", () => isString)
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(1)
          var _extends =
            Object.assign ||
            ((target) => {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            })

          var _createClass = (() => {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ("value" in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return (Constructor, protoProps, staticProps) => {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          var _typeof =
            typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
              ? (obj) => typeof obj
              : (obj) =>
                  obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function")
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
            })
            if (superClass)
              Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
          }

          var isString = function isString(unknown) {
            return (
              typeof unknown === "string" ||
              (!!unknown &&
                (typeof unknown === "undefined" ? "undefined" : _typeof(unknown)) === "object" &&
                Object.prototype.toString.call(unknown) === "[object String]")
            )
          }

          var bulmaSlider = ((_EventEmitter) => {
            _inherits(bulmaSlider, _EventEmitter)

            function bulmaSlider(selector) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

              _classCallCheck(this, bulmaSlider)

              var _this = _possibleConstructorReturn(
                this,
                (bulmaSlider.__proto__ || Object.getPrototypeOf(bulmaSlider)).call(this),
              )

              _this.element = typeof selector === "string" ? document.querySelector(selector) : selector
              // An invalid selector or non-DOM node has been provided.
              if (!_this.element) {
                throw new Error("An invalid selector or non-DOM node has been provided.")
              }

              _this._clickEvents = ["click"]
              /// Set default options and merge with instance defined
              _this.options = _extends({}, options)

              _this.onSliderInput = _this.onSliderInput.bind(_this)

              _this.init()
              return _this
            }

            /**
             * Initiate all DOM element containing selector
             * @method
             * @return {Array} Array of all slider instances
             */

            _createClass(
              bulmaSlider,
              [
                {
                  key: "init",

                  /**
                   * Initiate plugin
                   * @method init
                   * @return {void}
                   */
                  value: function init() {
                    this._id = "bulmaSlider" + new Date().getTime() + Math.floor(Math.random() * Math.floor(9999))
                    this.output = this._findOutputForSlider()

                    this._bindEvents()

                    if (this.output) {
                      if (this.element.classList.contains("has-output-tooltip")) {
                        // Get new output position
                        var newPosition = this._getSliderOutputPosition()

                        // Set output position
                        this.output.style["left"] = newPosition.position
                      }
                    }

                    this.emit("bulmaslider:ready", this.element.value)
                  },
                },
                {
                  key: "_findOutputForSlider",
                  value: function _findOutputForSlider() {
                    

                    var result = null
                    var outputs = document.getElementsByTagName("output") || []

                    Array.from(outputs).forEach((output) => {
                      if (output.htmlFor == this.element.getAttribute("id")) {
                        result = output
                        return true
                      }
                    })
                    return result
                  },
                },
                {
                  key: "_getSliderOutputPosition",
                  value: function _getSliderOutputPosition() {
                    // Update output position
                    var newPlace, minValue

                    var style = window.getComputedStyle(this.element, null)
                    // Measure width of range input
                    var sliderWidth = Number.parseInt(style.getPropertyValue("width"), 10)

                    // Figure out placement percentage between left and right of input
                    if (!this.element.getAttribute("min")) {
                      minValue = 0
                    } else {
                      minValue = this.element.getAttribute("min")
                    }
                    var newPoint = (this.element.value - minValue) / (this.element.getAttribute("max") - minValue)

                    // Prevent bubble from going beyond left or right (unsupported browsers)
                    if (newPoint < 0) {
                      newPlace = 0
                    } else if (newPoint > 1) {
                      newPlace = sliderWidth
                    } else {
                      newPlace = sliderWidth * newPoint
                    }

                    return {
                      position: newPlace + "px",
                    }
                  },

                  /**
                   * Bind all events
                   * @method _bindEvents
                   * @return {void}
                   */
                },
                {
                  key: "_bindEvents",
                  value: function _bindEvents() {
                    if (this.output) {
                      // Add event listener to update output when slider value change
                      this.element.addEventListener("input", this.onSliderInput, false)
                    }
                  },
                },
                {
                  key: "onSliderInput",
                  value: function onSliderInput(e) {
                    e.preventDefault()

                    if (this.element.classList.contains("has-output-tooltip")) {
                      // Get new output position
                      var newPosition = this._getSliderOutputPosition()

                      // Set output position
                      this.output.style["left"] = newPosition.position
                    }

                    // Check for prefix and postfix
                    var prefix = this.output.hasAttribute("data-prefix") ? this.output.getAttribute("data-prefix") : ""
                    var postfix = this.output.hasAttribute("data-postfix")
                      ? this.output.getAttribute("data-postfix")
                      : ""

                    // Update output with slider value
                    this.output.value = prefix + this.element.value + postfix

                    this.emit("bulmaslider:ready", this.element.value)
                  },
                },
              ],
              [
                {
                  key: "attach",
                  value: function attach() {
                    

                    var selector =
                      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'input[type="range"].slider'
                    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

                    var instances = new Array()

                    var elements = isString(selector)
                      ? document.querySelectorAll(selector)
                      : Array.isArray(selector)
                        ? selector
                        : [selector]
                    elements.forEach((element) => {
                      if (typeof element[this.constructor.name] === "undefined") {
                        var instance = new bulmaSlider(element, options)
                        element[this.constructor.name] = instance
                        instances.push(instance)
                      } else {
                        instances.push(element[this.constructor.name])
                      }
                    })

                    return instances
                  },
                },
              ],
            )

            return bulmaSlider
          })(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* default */])

          /* harmony default export */ __webpack_exports__["default"] = bulmaSlider

          /***/
        },
        /* 1 */
        /***/ (module, __webpack_exports__, __webpack_require__) => {
          var _createClass = (() => {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ("value" in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return (Constructor, protoProps, staticProps) => {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function")
            }
          }

          var EventEmitter = (() => {
            function EventEmitter() {
              var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []

              _classCallCheck(this, EventEmitter)

              this._listeners = new Map(listeners)
              this._middlewares = new Map()
            }

            _createClass(EventEmitter, [
              {
                key: "listenerCount",
                value: function listenerCount(eventName) {
                  if (!this._listeners.has(eventName)) {
                    return 0
                  }

                  var eventListeners = this._listeners.get(eventName)
                  return eventListeners.length
                },
              },
              {
                key: "removeListeners",
                value: function removeListeners() {
                  

                  var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
                  var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false

                  if (eventName !== null) {
                    if (Array.isArray(eventName)) {
                      name.forEach((e) => this.removeListeners(e, middleware))
                    } else {
                      this._listeners.delete(eventName)

                      if (middleware) {
                        this.removeMiddleware(eventName)
                      }
                    }
                  } else {
                    this._listeners = new Map()
                  }
                },
              },
              {
                key: "middleware",
                value: function middleware(eventName, fn) {
                  

                  if (Array.isArray(eventName)) {
                    name.forEach((e) => this.middleware(e, fn))
                  } else {
                    if (!Array.isArray(this._middlewares.get(eventName))) {
                      this._middlewares.set(eventName, [])
                    }

                    this._middlewares.get(eventName).push(fn)
                  }
                },
              },
              {
                key: "removeMiddleware",
                value: function removeMiddleware() {
                  

                  var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

                  if (eventName !== null) {
                    if (Array.isArray(eventName)) {
                      name.forEach((e) => this.removeMiddleware(e))
                    } else {
                      this._middlewares.delete(eventName)
                    }
                  } else {
                    this._middlewares = new Map()
                  }
                },
              },
              {
                key: "on",
                value: function on(name, callback) {
                  

                  var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false

                  if (Array.isArray(name)) {
                    name.forEach((e) => this.on(e, callback))
                  } else {
                    name = name.toString()
                    var split = name.split(/,|, | /)

                    if (split.length > 1) {
                      split.forEach((e) => this.on(e, callback))
                    } else {
                      if (!Array.isArray(this._listeners.get(name))) {
                        this._listeners.set(name, [])
                      }

                      this._listeners.get(name).push({ once: once, callback: callback })
                    }
                  }
                },
              },
              {
                key: "once",
                value: function once(name, callback) {
                  this.on(name, callback, true)
                },
              },
              {
                key: "emit",
                value: function emit(name, data) {
                  

                  var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false

                  name = name.toString()
                  var listeners = this._listeners.get(name)
                  var middlewares = null
                  var doneCount = 0
                  var execute = silent

                  if (Array.isArray(listeners)) {
                    listeners.forEach((listener, index) => {
                      // Start Middleware checks unless we're doing a silent emit
                      if (!silent) {
                        middlewares = this._middlewares.get(name)
                        // Check and execute Middleware
                        if (Array.isArray(middlewares)) {
                          middlewares.forEach((middleware) => {
                            middleware(
                              data,
                              () => {
                                var newData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

                                if (newData !== null) {
                                  data = newData
                                }
                                doneCount++
                              },
                              name,
                            )
                          })

                          if (doneCount >= middlewares.length) {
                            execute = true
                          }
                        } else {
                          execute = true
                        }
                      }

                      // If Middleware checks have been passed, execute
                      if (execute) {
                        if (listener.once) {
                          listeners[index] = null
                        }
                        listener.callback(data)
                      }
                    })

                    // Dirty way of removing used Events
                    while (listeners.indexOf(null) !== -1) {
                      listeners.splice(listeners.indexOf(null), 1)
                    }
                  }
                },
              },
            ])

            return EventEmitter
          })()

          /* harmony default export */ __webpack_exports__["a"] = EventEmitter

          /***/
        },
        /******/
      ],
    )["default"],
)
