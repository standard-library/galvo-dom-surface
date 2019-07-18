"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _kefir = require("kefir");

var _hammerjs = _interopRequireDefault(require("hammerjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function observer(element) {
  var manager = new _hammerjs["default"](element);
  manager.get("swipe").set({
    velocity: 0.1
  });
  return manager;
}

function surface(element) {
  var manager = observer(element);

  var swipe = _kefir.Kefir.fromEvents(manager, "swipe");

  var left = swipe.filter(function (e) {
    return e.direction == 2;
  });
  var right = swipe.filter(function (e) {
    return e.direction == 4;
  });
  swipe.left = left;
  swipe.right = right;
  return {
    swipe: swipe
  };
}

var _default = surface;
exports["default"] = _default;