"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

var PropTypes = require("prop-types");

var actioncable = require("actioncable");

var _React$createContext = React.createContext(),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var ActionCableProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(ActionCableProvider, _React$Component);

  var _super = _createSuper(ActionCableProvider);

  function ActionCableProvider() {
    var _this;

    _classCallCheck(this, ActionCableProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "UNSAFE_componentWillMount", function () {
      if (this.props.cable) {
        this.cable = this.props.cable;
      } else {
        this.cable = actioncable.createConsumer(this.props.url);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      if (!this.props.cable && this.cable) {
        this.cable.disconnect();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "UNSAFE_componentWillReceiveProps", function (nextProps) {
      // Props not changed
      if (this.props.cable === nextProps.cable && this.props.url === nextProps.url) {
        return;
      } // cable is created by self, disconnect it


      this.componentWillUnmount(); // create or assign cable

      this.UNSAFE_componentWillMount();
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return React.createElement(Provider, {
        value: {
          cable: this.cable
        }
      }, this.props.children || null);
    });

    return _this;
  }

  return _createClass(ActionCableProvider);
}(React.Component);

ActionCableProvider.displayName = "ActionCableProvider";
ActionCableProvider.propTypes = {
  cable: PropTypes.object,
  url: PropTypes.string,
  children: PropTypes.any
};

var ActionCableController = /*#__PURE__*/function (_React$Component2) {
  _inherits(ActionCableController, _React$Component2);

  var _super2 = _createSuper(ActionCableController);

  function ActionCableController() {
    var _this2;

    _classCallCheck(this, ActionCableController);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "componentDidMount", function () {
      this.connectToChannel();
    });

    _defineProperty(_assertThisInitialized(_this2), "connectToChannel", function () {
      var self = this;
      var _props = this.props;
      var onReceived = _props.onReceived;
      var onInitialized = _props.onInitialized;
      var onConnected = _props.onConnected;
      var onDisconnected = _props.onDisconnected;
      var onRejected = _props.onRejected;
      this.cable = this.props.cable.subscriptions.create(this.props.channel, {
        received: function received(data) {
          onReceived && onReceived(data);
        },
        initialized: function initialized() {
          onInitialized && onInitialized();
        },
        connected: function connected() {
          onConnected && onConnected();
        },
        disconnected: function disconnected() {
          onDisconnected && onDisconnected();
        },
        rejected: function rejected() {
          onRejected && onRejected();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "disconnectFromChannel", function () {
      if (this.cable) {
        this.props.cable.subscriptions.remove(this.cable);
        this.cable = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "componentDidUpdate", function (prevProps) {
      if (JSON.stringify(prevProps.channel) !== JSON.stringify(this.props.channel)) {
        this.disconnectFromChannel();
        this.connectToChannel();
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "componentWillUnmount", function () {
      this.disconnectFromChannel();
    });

    _defineProperty(_assertThisInitialized(_this2), "send", function (data) {
      if (!this.cable) {
        throw new Error("ActionCable component unloaded");
      }

      this.cable.send(data);
    });

    _defineProperty(_assertThisInitialized(_this2), "perform", function (action, data) {
      if (!this.cable) {
        throw new Error("ActionCable component unloaded");
      }

      this.cable.perform(action, data);
    });

    _defineProperty(_assertThisInitialized(_this2), "render", function () {
      return this.props.children || null;
    });

    return _this2;
  }

  return _createClass(ActionCableController);
}(React.Component);

ActionCableController.displayName = "ActionCableController";
ActionCableController.propTypes = {
  cable: PropTypes.object,
  onReceived: PropTypes.func,
  onInitialized: PropTypes.func,
  onConnected: PropTypes.func,
  onDisconnected: PropTypes.func,
  onRejected: PropTypes.func,
  children: PropTypes.any
};

var Component = /*#__PURE__*/function (_React$Component3) {
  _inherits(Component, _React$Component3);

  var _super3 = _createSuper(Component);

  function Component() {
    var _this3;

    _classCallCheck(this, Component);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "render", function () {
      var _this4 = this;

      return React.createElement(Consumer, null, function (_ref) {
        var cable = _ref.cable;
        return React.createElement(ActionCableController, _objectSpread(_objectSpread({
          cable: cable
        }, _this4.props), {}, {
          ref: _this4.props.forwardedRef
        }), _this4.props.children || null);
      });
    });

    return _this3;
  }

  return _createClass(Component);
}(React.Component);

Component.displayName = "ActionCableConsumer";
Component.propTypes = {
  onReceived: PropTypes.func,
  onInitialized: PropTypes.func,
  onConnected: PropTypes.func,
  onDisconnected: PropTypes.func,
  onRejected: PropTypes.func,
  children: PropTypes.any
};
var ActionCableConsumer = React.forwardRef(function (props, ref) {
  return React.createElement(Component, _objectSpread(_objectSpread({}, props), {}, {
    forwardedRef: ref
  }), props.children || null);
});

var ActionCable = /*#__PURE__*/function (_React$Component4) {
  _inherits(ActionCable, _React$Component4);

  var _super4 = _createSuper(ActionCable);

  function ActionCable() {
    var _this5;

    _classCallCheck(this, ActionCable);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this5 = _super4.call.apply(_super4, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this5), "componentDidMount", function () {
      console.warn("DEPRECATION WARNING: The <ActionCable /> component has been deprecated and will be removed in a future release. Use <ActionCableConsumer /> instead.");
    });

    _defineProperty(_assertThisInitialized(_this5), "render", function () {
      return React.createElement(ActionCableConsumer, _objectSpread({}, this.props), this.props.children || null);
    });

    return _this5;
  }

  return _createClass(ActionCable);
}(React.Component);

ActionCable.displayName = "ActionCable";
ActionCable.propTypes = {
  onReceived: PropTypes.func,
  onInitialized: PropTypes.func,
  onConnected: PropTypes.func,
  onDisconnected: PropTypes.func,
  onRejected: PropTypes.func,
  children: PropTypes.any
};
exports.ActionCable = ActionCable;
exports.ActionCableConsumer = ActionCableConsumer;
exports.ActionCableController = ActionCableController;
exports.ActionCableProvider = ActionCableProvider; // Compatible old usage

exports.default = ActionCableProvider;