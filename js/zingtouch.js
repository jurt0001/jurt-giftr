/*!
 * 
 * ZingTouch v1.0.3
 * Author: ZingChart http://zingchart.com
 * License: MIT
 */
! function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {}
            , id: r
            , loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = n(1)
        , u = r(i);
    window.ZingTouch = u.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(2)
        , u = r(i)
        , o = n(4)
        , a = r(o)
        , s = n(10)
        , c = r(s)
        , f = n(12)
        , l = r(f)
        , d = n(13)
        , p = r(d)
        , h = n(14)
        , y = r(h)
        , v = n(15)
        , g = r(v)
        , m = n(16)
        , b = r(m)
        , w = {
            _regions: []
            , Gesture: a.default
            , Expand: c.default
            , Pan: l.default
            , Pinch: p.default
            , Rotate: y.default
            , Swipe: g.default
            , Tap: b.default
            , Region: function (e, t, n) {
                var r = w._regions.length
                    , i = new u.default(e, t, n, r);
                return w._regions.push(i), i
            }
        };
    t.default = w
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()
        , o = n(3)
        , a = r(o)
        , s = n(4)
        , c = r(s)
        , f = n(5)
        , l = r(f)
        , d = n(9)
        , p = r(d)
        , h = function () {
            function e(t, n, r, u) {
                var o = this;
                i(this, e), this.id = u, this.element = t, this.capture = "undefined" != typeof n && n, this.preventDefault = "undefined" == typeof r || r, this.state = new p.default(u);
                var a = [];
                a = window.PointerEvent && !window.TouchEvent ? ["pointerdown", "pointermove", "pointerup"] : ["mousedown", "mousemove", "mouseup", "touchstart", "touchmove", "touchend"], a.map(function (e) {
                    t.addEventListener(e, function (e) {
                        (0, l.default)(e, o)
                    }, o.capture)
                })
            }
            return u(e, [{
                key: "bind"
                , value: function (e, t, n, r, i) {
                    if (!e || e && !e.tagName) throw "Bind must contain an element";
                    return i = "undefined" != typeof i && i, t ? void this.state.addBinding(e, t, n, r, i) : new a.default(e, i, this.state)
                }
            }, {
                key: "bindOnce"
                , value: function (e, t, n, r) {
                    this.bind(e, t, n, r, !0)
                }
            }, {
                key: "unbind"
                , value: function (e, t) {
                    var n = this
                        , r = this.state.retrieveBindingsByElement(e)
                        , i = [];
                    return r.forEach(function (r) {
                        if (t) {
                            if ("string" == typeof t && n.state.registeredGestures[t]) {
                                var u = n.state.registeredGestures[t];
                                u.id === r.gesture.id && (e.removeEventListener(r.gesture.getId(), r.handler, r.capture), i.push(r))
                            }
                        }
                        else e.removeEventListener(r.gesture.getId(), r.handler, r.capture), i.push(r)
                    }), i
                }
            }, {
                key: "register"
                , value: function (e, t) {
                    if ("string" != typeof e) throw new Error("Parameter key is an invalid string");
                    if (!t instanceof c.default) throw new Error("Parameter gesture is an invalid Gesture object");
                    t.setType(e), this.state.registerGesture(t, e)
                }
            }, {
                key: "unregister"
                , value: function (e) {
                    this.state.bindings.forEach(function (t) {
                        t.gesture.getType() === e && t.element.removeEventListener(t.gesture.getId(), t.handler, t.capture)
                    });
                    var t = this.state.registeredGestures[e];
                    return delete this.state.registeredGestures[e], t
                }
            }]), e
        }();
    t.default = h
}, function (e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function e(t, r, i) {
        var u = this;
        n(this, e), this.element = t, Object.keys(i.registeredGestures).forEach(function (e) {
            u[e] = function (t, n) {
                return i.addBinding(u.element, e, t, n, r), u
            }
        })
    };
    t.default = r
}, function (e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()
        , i = function () {
            function e() {
                n(this, e), this.type = null, this.id = null
            }
            return r(e, [{
                key: "setType"
                , value: function (e) {
                    this.type = e
                }
            }, {
                key: "getType"
                , value: function () {
                    return this.type
                }
            }, {
                key: "setId"
                , value: function (e) {
                    this.id = e
                }
            }, {
                key: "getId"
                , value: function () {
                    return null !== this.id ? this.id : this.type
                }
            }, {
                key: "update"
                , value: function (e) {
                    for (var t in e) this[t] && (this[t] = e[t])
                }
            }, {
                key: "start"
                , value: function (e) {
                    return null
                }
            }, {
                key: "move"
                , value: function (e, t, n) {
                    return null
                }
            }, {
                key: "end"
                , value: function (e) {
                    return null
                }
            }]), e
        }();
    t.default = i
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        var n = t.state;
        if (0 !== n.inputs.length || "start" === f.default.normalizeEvent(e.type)) {
            if ("undefined" != typeof e.buttons && "end" !== f.default.normalizeEvent(e.type) && 0 === e.buttons) return void n.resetInputs();
            if (n.updateInputs(e, t.element)) {
                var r = n.retrieveBindingsByInitialPos();
                r.length > 0 && ! function () {
                    t.preventDefault ? (f.default.setMSPreventDefault(t.element), e.preventDefault ? e.preventDefault() : e.returnValue = !1) : f.default.removeMSPreventDefault(t.element);
                    var i = {}
                        , u = (0, s.default)(r, e, n);
                    u.forEach(function (t) {
                        var n = t.binding.gesture.id;
                        if (i[n]) {
                            var r = f.default.getPropagationPath(e);
                            f.default.getPathIndex(r, t.binding.element) < f.default.getPathIndex(r, i[n].binding.element) && (i[n] = t)
                        }
                        else i[n] = t
                    }), Object.keys(i).forEach(function (e) {
                        var t = i[e];
                        (0, o.default)(t.binding, t.data, t.events)
                    })
                }();
                var i = 0;
                n.inputs.forEach(function (e) {
                    "end" === e.getCurrentEventType() && i++
                }), i === n.inputs.length && n.resetInputs()
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(6)
        , o = r(u)
        , a = n(7)
        , s = r(a)
        , c = n(8)
        , f = r(c);
    t.default = i
}, function (e, t) {
    "use strict";

    function n(e, t, n) {
        t.events = n;
        var i = new CustomEvent(e.gesture.getId(), {
            detail: t
            , bubbles: !0
            , cancelable: !0
        });
        r(e.element, i, e)
    }

    function r(e, t, n) {
        e.dispatchEvent(t), n.bindOnce && ZingTouch.unbind(n.element, n.gesture.getType())
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t, n) {
        var r = o.default.normalizeEvent(t.type)
            , i = [];
        return e.forEach(function (e) {
            var t = e.gesture[r](n.inputs, n, e.element);
            t && ! function () {
                var r = [];
                n.inputs.forEach(function (e) {
                    r.push(e.current)
                }), i.push({
                    binding: e
                    , data: t
                    , events: r
                })
            }()
        }), i
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(8)
        , o = r(u);
    t.default = i
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = 360
        , r = 180
        , u = {
            normalizeEvent: function (e) {
                switch (e) {
                case "mousedown":
                case "touchstart":
                case "pointerdown":
                    return "start";
                case "mousemove":
                case "touchmove":
                case "pointermove":
                    return "move";
                case "mouseup":
                case "touchend":
                case "pointerup":
                    return "end";
                default:
                    return null
                }
            }
            , isWithin: function (e, t, n, r, i) {
                return Math.abs(t - r) <= i && Math.abs(e - n) <= i
            }
            , distanceBetweenTwoPoints: function (e, t, n, r) {
                var i = Math.sqrt((t - e) * (t - e) + (r - n) * (r - n));
                return Math.round(100 * i) / 100
            }
            , getMidpoint: function (e, t, n, r) {
                return {
                    x: (e + t) / 2
                    , y: (n + r) / 2
                }
            }
            , getAngle: function (e, t, i, u) {
                var o = Math.atan2(u - t, i - e) * (r / Math.PI);
                return n - (o < 0 ? n + o : o)
            }
            , getAngularDistance: function (e, t) {
                var i = (t - e) % n
                    , u = i < 0 ? 1 : -1;
                return i = Math.abs(i), i > r ? u * (n - i) : u * i
            }
            , getVelocity: function (e, t, n, r, i, u) {
                var o = this.distanceBetweenTwoPoints(e, r, t, i);
                return o / (u - n)
            }
            , getRightMostInput: function (e) {
                var t = null
                    , n = Number.MIN_VALUE;
                return e.forEach(function (e) {
                    e.initial.x > n && (t = e)
                }), t
            }
            , isInteger: function (e) {
                return "number" == typeof e && e % 1 === 0
            }
            , isInside: function (e, t, n) {
                var r = n.getBoundingClientRect();
                return e > r.left && e < r.left + r.width && t > r.top && t < r.top + r.height
            }
            , getPropagationPath: function (e) {
                if (e.path) return e.path;
                for (var t = [], n = e.target; n != document;) t.push(n), n = n.parentNode;
                return t
            }
            , getPathIndex: function (e, t) {
                var n = e.length;
                return e.forEach(function (e) {
                    e === t && (n = i)
                }), n
            }
            , setMSPreventDefault: function (e) {
                e.style["-ms-content-zooming"] = "none", e.style["touch-action"] = "none"
            }
            , removeMSPreventDefault: function (e) {
                e.style["-ms-content-zooming"] = "", e.style["touch-action"] = ""
            }
        };
    t.default = u
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        for (var n = 0; n < e.length; n++)
            if (e[n].identifier === t) return e[n];
        return null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        , a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()
        , s = n(4)
        , c = r(s)
        , f = n(10)
        , l = r(f)
        , d = n(12)
        , p = r(d)
        , h = n(13)
        , y = r(h)
        , v = n(14)
        , g = r(v)
        , m = n(15)
        , b = r(m)
        , w = n(16)
        , _ = r(w)
        , P = n(17)
        , E = r(P)
        , O = n(18)
        , x = r(O)
        , j = n(8)
        , I = r(j)
        , T = 0
        , k = function () {
            function e(t) {
                i(this, e), this.regionId = t, this.inputs = [], this.bindings = [], this.numGestures = 0, this.registeredGestures = {}, this.registerGesture(new l.default, "expand"), this.registerGesture(new p.default, "pan"), this.registerGesture(new g.default, "rotate"), this.registerGesture(new y.default, "pinch"), this.registerGesture(new b.default, "swipe"), this.registerGesture(new _.default, "tap")
            }
            return a(e, [{
                key: "addBinding"
                , value: function (e, t, n, r, i) {
                    var u = void 0;
                    if (e && "undefined" == typeof e.tagName) throw new Error("Parameter element is an invalid object.");
                    if ("function" != typeof n) throw new Error("Parameter handler is invalid.");
                    if ("string" == typeof t && Object.keys(this.registeredGestures).indexOf(t) === -1) throw new Error("Parameter " + t + " is not a registered gesture");
                    if ("object" === ("undefined" == typeof t ? "undefined" : o(t)) && !(t instanceof c.default)) throw new Error("Parameter for the gesture is not of a Gesture type");
                    "string" == typeof t ? u = this.registeredGestures[t] : (u = t, "" === u.id && this.assignGestureId(u)), this.bindings.push(new E.default(e, u, n, r, i)), e.addEventListener(u.getId(), n, r)
                }
            }, {
                key: "retrieveBindingsByElement"
                , value: function (e) {
                    var t = [];
                    return this.bindings.map(function (n) {
                        n.element === e && t.push(n)
                    }), t
                }
            }, {
                key: "retrieveBindingsByInitialPos"
                , value: function () {
                    var e = this
                        , t = [];
                    return this.bindings.forEach(function (n) {
                        var r = e.inputs.filter(function (e) {
                            return I.default.isInside(e.initial.x, e.initial.y, n.element)
                        });
                        r.length > 0 && t.push(n)
                    }), t
                }
            }, {
                key: "updateInputs"
                , value: function (e, t) {
                    function n(e, t, n, r) {
                        var i = I.default.normalizeEvent(e.type)
                            , o = u(t.inputs, n);
                        return "start" === i && o ? void t.resetInputs() : "start" !== i && o && !I.default.isInside(o.current.x, o.current.y, r) ? void t.resetInputs() : "start" === i || o ? void("start" === i ? t.inputs.push(new x.default(e, n)) : o.update(e, n)) : void t.resetInputs()
                    }
                    var r = T
                        , i = e.touches ? "TouchEvent" : e.pointerType ? "PointerEvent" : "MouseEvent";
                    switch (i) {
                    case "TouchEvent":
                        if (e.touches.length !== e.targetTouches.length) return !1;
                        for (var o in e.changedTouches) e.changedTouches.hasOwnProperty(o) && I.default.isInteger(parseInt(o)) && (r = e.changedTouches[o].identifier, n(e, this, r, t));
                        break;
                    case "PointerEvent":
                        r = e.pointerId, n(e, this, r, t);
                        break;
                    case "MouseEvent":
                    default:
                        n(e, this, T, t)
                    }
                    return !0
                }
            }, {
                key: "resetInputs"
                , value: function () {
                    this.inputs = []
                }
            }, {
                key: "numActiveInputs"
                , value: function () {
                    var e = this.inputs.filter(function (e) {
                        return "end" !== e.current.type
                    });
                    return e.length
                }
            }, {
                key: "registerGesture"
                , value: function (e, t) {
                    this.assignGestureId(e), this.registeredGestures[t] = e
                }
            }, {
                key: "assignGestureId"
                , value: function (e) {
                    e.setId(this.regionId + "-" + this.numGestures++)
                }
            }]), e
        }();
    t.default = k
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e
                , enumerable: !1
                , writable: !0
                , configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(11)
        , s = r(a)
        , c = function (e) {
            function t(e) {
                i(this, t);
                var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.type = "expand", n
            }
            return o(t, e), t
        }(s.default);
    t.default = c
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e
                , enumerable: !1
                , writable: !0
                , configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()
        , s = n(4)
        , c = r(s)
        , f = n(8)
        , l = r(f)
        , d = 2
        , p = 1
        , h = function (e) {
            function t(e) {
                i(this, t);
                var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n.type = "distance", n.threshold = e && e.threshold ? e.threshold : p, n
            }
            return o(t, e), a(t, [{
                key: "start"
                , value: function (e) {
                    if (e.length === d) {
                        var t = e[0].getGestureProgress(this.type);
                        t.lastEmittedDistance = l.default.distanceBetweenTwoPoints(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y)
                    }
                }
            }, {
                key: "move"
                , value: function (e, t, n) {
                    if (t.numActiveInputs() === d) {
                        var r = l.default.distanceBetweenTwoPoints(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y)
                            , i = l.default.distanceBetweenTwoPoints(e[0].previous.x, e[1].previous.x, e[0].previous.y, e[1].previous.y)
                            , u = l.default.getMidpoint(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y)
                            , o = e[0].getGestureProgress(this.type);
                        if ("expand" === this.type) {
                            if (r < i) o.lastEmittedDistance = r;
                            else if (r - o.lastEmittedDistance >= this.threshold) return o.lastEmittedDistance = r, {
                                distance: r
                                , center: u
                            }
                        }
                        else if (r > i) o.lastEmittedDistance = r;
                        else if (r < i && o.lastEmittedDistance - r >= this.threshold) return o.lastEmittedDistance = r, {
                            distance: r
                            , center: u
                        };
                        return null
                    }
                }
            }]), t
        }(c.default);
    t.default = h
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e
                , enumerable: !1
                , writable: !0
                , configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()
        , s = n(4)
        , c = r(s)
        , f = n(8)
        , l = r(f)
        , d = 1
        , p = 1
        , h = function (e) {
            function t(e) {
                i(this, t);
                var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n.type = "pan", n.numInputs = e && e.numInputs ? e.numInputs : d, n.threshold = e && e.threshold ? e.threshold : p, n
            }
            return o(t, e), a(t, [{
                key: "start"
                , value: function (e) {
                    var t = this;
                    e.forEach(function (e) {
                        var n = e.getGestureProgress(t.getId());
                        n.active = !0, n.lastEmitted = {
                            x: e.current.x
                            , y: e.current.y
                        }
                    })
                }
            }, {
                key: "move"
                , value: function (e, t, n) {
                    if (this.numInputs === e.length)
                        for (var r = {
                                data: []
                            }, i = 0; i < e.length; i++) {
                            var u = e[i].getGestureProgress(this.getId())
                                , o = !1
                                , a = Math.abs(e[i].current.y - u.lastEmitted.y) > this.threshold
                                , s = Math.abs(e[i].current.x - u.lastEmitted.x) > this.threshold;
                            if (o = a || s, !u.active || !o) return null;
                            r.data[i] = {
                                distanceFromOrigin: l.default.distanceBetweenTwoPoints(e[i].initial.x, e[i].current.x, e[i].initial.y, e[i].current.y)
                                , directionFromOrigin: l.default.getAngle(e[i].initial.x, e[i].initial.y, e[i].current.x, e[i].current.y)
                                , currentDirection: l.default.getAngle(u.lastEmitted.x, u.lastEmitted.y, e[i].current.x, e[i].current.y)
                            }, u.lastEmitted.x = e[i].current.x, u.lastEmitted.y = e[i].current.y
                        }
                    return r
                }
            }, {
                key: "end"
                , value: function (e) {
                    var t = this;
                    return e.forEach(function (e) {
                        var n = e.getGestureProgress(t.getId());
                        n.active = !1
                    }), null
                }
            }]), t
        }(c.default);
    t.default = h
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e
                , enumerable: !1
                , writable: !0
                , configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(11)
        , s = r(a)
        , c = n(8)
        , f = (r(c), function (e) {
            function t(e) {
                i(this, t);
                var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.type = "pinch", n
            }
            return o(t, e), t
        }(s.default));
    t.default = f
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e
                , enumerable: !1
                , writable: !0
                , configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()
        , s = n(4)
        , c = r(s)
        , f = n(8)
        , l = r(f)
        , d = 2
        , p = function (e) {
            function t() {
                i(this, t);
                var e = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.type = "rotate", e
            }
            return o(t, e), a(t, [{
                key: "move"
                , value: function (e, t, n) {
                    if (t.numActiveInputs() <= d) {
                        var r = void 0
                            , i = void 0
                            , u = void 0
                            , o = void 0;
                        if (1 === t.numActiveInputs()) {
                            var a = n.getBoundingClientRect();
                            r = {
                                x: a.left + a.width / 2
                                , y: a.top + a.height / 2
                            }, o = e[0], i = u = 0
                        }
                        else {
                            r = l.default.getMidpoint(e[0].initial.x, e[1].initial.x, e[0].initial.y, e[1].initial.y);
                            var s = l.default.getMidpoint(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y);
                            i = r.x - s.x, u = r.y - s.y, o = l.default.getRightMostInput(e)
                        }
                        var c = l.default.getAngle(r.x, r.y, o.current.x + i, o.current.y + u)
                            , f = o.getGestureProgress(this.getId());
                        return f.initialAngle ? (f.change = l.default.getAngularDistance(f.previousAngle, c), f.distance = f.distance + f.change) : (f.initialAngle = f.previousAngle = c, f.distance = f.change = 0), f.previousAngle = c, {
                            angle: c
                            , distanceFromOrigin: f.distance
                            , distanceFromLast: f.change
                        }
                    }
                    return null
                }
            }]), t
        }(c.default);
    t.default = p
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e
                , enumerable: !1
                , writable: !0
                , configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()
        , s = n(4)
        , c = r(s)
        , f = n(8)
        , l = r(f)
        , d = 1
        , p = 100
        , h = .2
        , y = 100
        , v = 10
        , g = function (e) {
            function t(e) {
                i(this, t);
                var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n.type = "swipe", n.numInputs = e && e.numInputs ? e.numInputs : d, n.maxRestTime = e && e.maxRestTime ? e.maxRestTime : p, n.escapeVelocity = e && e.escapeVelocity ? e.escapeVelocity : h, n.timeDistortion = e && e.timeDistortion ? e.timeDistortion : y, n.maxProgressStack = e && e.maxProgressStack ? e.maxProgressStack : v, n
            }
            return o(t, e), a(t, [{
                key: "move"
                , value: function (e, t, n) {
                    if (this.numInputs === e.length)
                        for (var r = 0; r < e.length; r++) {
                            var i = e[r].getGestureProgress(this.getId());
                            i.moves || (i.moves = []), i.moves.push({
                                time: (new Date).getTime()
                                , x: e[r].current.x
                                , y: e[r].current.y
                            }), i.length > this.maxProgressStack && i.moves.shift()
                        }
                    return null
                }
            }, {
                key: "end"
                , value: function (e) {
                    if (this.numInputs === e.length) {
                        for (var t = {
                                data: []
                            }, n = 0; n < e.length; n++) {
                            if ("end" !== e[n].current.type) return;
                            var r = e[n].getGestureProgress(this.getId());
                            if (r.moves && r.moves.length > 2) {
                                var i = r.moves.pop();
                                if ((new Date).getTime() - i.time > this.maxRestTime) return null;
                                for (var u = void 0, o = r.moves.length - 1; o !== -1;) {
                                    if (r.moves[o].time !== i.time) {
                                        u = r.moves[o];
                                        break
                                    }
                                    o--
                                }
                                u || (u = r.moves.pop(), u.time += this.timeDistortion);
                                var a = l.default.getVelocity(u.x, u.y, u.time, i.x, i.y, i.time);
                                t.data[n] = {
                                    velocity: a
                                    , currentDirection: l.default.getAngle(u.x, u.y, i.x, i.y)
                                }
                            }
                        }
                        for (var n = 0; n < t.data.length; n++)
                            if (a < this.escapeVelocity) return null;
                        if (t.data.length > 0) return t
                    }
                    return null
                }
            }]), t
        }(c.default);
    t.default = g
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e
                , enumerable: !1
                , writable: !0
                , configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        , s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()
        , c = n(4)
        , f = r(c)
        , l = n(8)
        , d = r(l)
        , p = 0
        , h = 300
        , y = 1
        , v = 10
        , g = function (e) {
            function t(e) {
                i(this, t);
                var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n.type = "tap", n.minDelay = e && e.minDelay ? e.minDelay : p, n.maxDelay = e && e.maxDelay ? e.maxDelay : h, n.numInputs = e && e.numInputs ? e.numInputs : y, n.tolerance = e && e.tolerance ? e.tolerance : v, n
            }
            return o(t, e), s(t, [{
                key: "start"
                , value: function (e) {
                    var t = this;
                    return e.length === this.numInputs && e.forEach(function (e) {
                        var n = e.getGestureProgress(t.type);
                        n.start = (new Date).getTime()
                    }), null
                }
            }, {
                key: "move"
                , value: function (e, t, n) {
                    for (var r = this, i = 0; i < e.length; i++)
                        if ("move" === e[i].getCurrentEventType()) {
                            var u = e[i].current
                                , o = e[i].previous;
                            if (!d.default.isWithin(u.x, u.y, o.x, o.y, this.tolerance)) {
                                var s = function () {
                                    var t = r.type;
                                    return e.forEach(function (e) {
                                        e.resetProgress(t)
                                    }), {
                                        v: null
                                    }
                                }();
                                if ("object" === ("undefined" == typeof s ? "undefined" : a(s))) return s.v
                            }
                        }
                    return null
                }
            }, {
                key: "end"
                , value: function (e) {
                    var t = this;
                    if (e.length !== this.numInputs) return null;
                    for (var n = Number.MAX_VALUE, r = 0; r < e.length; r++) {
                        if ("end" !== e[r].getCurrentEventType()) return null;
                        var i = e[r].getGestureProgress(this.type);
                        if (!i.start) return null;
                        i.start < n && (n = i.start)
                    }
                    var u = (new Date).getTime() - n;
                    if (this.minDelay <= u && this.maxDelay >= u) return {
                        interval: u
                    };
                    var o = function () {
                        var n = t.type;
                        return e.forEach(function (e) {
                            e.resetProgress(n)
                        }), {
                            v: null
                        }
                    }();
                    return "object" === ("undefined" == typeof o ? "undefined" : a(o)) ? o.v : void 0
                }
            }]), t
        }(f.default);
    t.default = g
}, function (e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function e(t, r, i, u, o) {
        n(this, e), this.element = t, this.gesture = r, this.handler = i, this.capture = "undefined" != typeof u && u, this.bindOnce = "undefined" != typeof o && o
    };
    t.default = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()
        , o = n(19)
        , a = r(o)
        , s = function () {
            function e(t, n) {
                i(this, e);
                var r = new a.default(t, n);
                this.initial = r, this.current = r, this.previous = r, this.identifier = "undefined" != typeof n ? n : 0, this.progress = {}
            }
            return u(e, [{
                key: "update"
                , value: function (e, t) {
                    this.previous = this.current, this.current = new a.default(e, t)
                }
            }, {
                key: "getGestureProgress"
                , value: function (e) {
                    return this.progress[e] || (this.progress[e] = {}), this.progress[e]
                }
            }, {
                key: "getCurrentEventType"
                , value: function () {
                    return this.current.type
                }
            }, {
                key: "resetProgress"
                , value: function (e) {
                    this.progress[e] = {}
                }
            }]), e
        }();
    t.default = s
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(8)
        , o = r(u)
        , a = 0
        , s = function e(t, n) {
            i(this, e), this.originalEvent = t, this.type = o.default.normalizeEvent(t.type), this.x = a, this.y = a;
            var r = void 0;
            if (t.touches && t.changedTouches) {
                for (var u = 0; u < t.changedTouches.length; u++)
                    if (t.changedTouches[u].identifier === n) {
                        r = t.changedTouches[u];
                        break
                    }
            }
            else r = t;
            this.x = this.clientX = r.clientX, this.y = this.clientY = r.clientY, this.pageX = r.pageX, this.pageY = r.pageY, this.screenX = r.screenX, this.screenY = r.screenY
        };
    t.default = s
}]);
//# sourceMappingURL=zingtouch.js.map