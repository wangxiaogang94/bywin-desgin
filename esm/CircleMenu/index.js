"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./index.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CircleMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(CircleMenu, _Component);

  function CircleMenu() {
    _classCallCheck(this, CircleMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(CircleMenu).apply(this, arguments));
  }

  _createClass(CircleMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          top = _this$props.top,
          left = _this$props.left,
          show = _this$props.show,
          menu = _this$props.menu,
          centerButton = _this$props.centerButton,
          centerClick = _this$props.centerClick,
          centerBackground = _this$props.centerBackground;
      var menuHtml = menu.map(function (v, i) {
        return _react.default.createElement("li", {
          onClick: function onClick() {
            return v.onClick(i);
          },
          key: i,
          className: v.className
        }, _react.default.createElement("span", {
          className: "icon"
        }, v.icon), _react.default.createElement("span", {
          className: "text"
        }, v.text));
      });
      return _react.default.createElement("div", {
        className: "circle-warpper",
        style: {
          top: top - 150,
          left: left - 150,
          display: show ? 'block' : 'none'
        }
      }, _react.default.createElement("div", {
        className: "circle-nav"
      }, _react.default.createElement("div", {
        className: "circle-circle",
        onClick: centerClick,
        style: {
          background: centerBackground || null
        }
      }, centerButton), _react.default.createElement("ul", {
        id: "menu-items"
      }, menuHtml)));
    }
  }]);

  return CircleMenu;
}(_react.Component);

exports.default = CircleMenu;

_defineProperty(CircleMenu, "defaultProps", {
  top: 350,
  // 中心点的y
  left: 350,
  // 中心点的x
  show: true,
  // 是否显示菜单
  menu: [],
  centerButton: '按钮',
  centerClick: function centerClick() {},
  centerBackground: null
});