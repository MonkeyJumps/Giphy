'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFinite2 = require('lodash/isFinite');

var _isFinite3 = _interopRequireDefault(_isFinite2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** Gets a range from a single value.
 * TODO: Could probably make this take a predicate to avoid running through the loop twice */
var getRange = function getRange(number) {
  if (!(0, _isFinite3.default)(number)) {
    return [0];
  }

  return Array(number).fill().map(function (_, i) {
    return i + 1;
  });
};

var PageDropdown = function (_Component) {
  _inherits(PageDropdown, _Component);

  function PageDropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PageDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PageDropdown.__proto__ || Object.getPrototypeOf(PageDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.setPage = function (e) {
      _this.props.setPage(parseInt(e.target.value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PageDropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentPage = _props.currentPage,
          maxPages = _props.maxPages;


      return _react2.default.createElement(
        'select',
        {
          onChange: this.setPage,
          value: currentPage,
          style: this.props.style,
          className: this.props.className
        },
        getRange(maxPages).map(function (num) {
          return _react2.default.createElement(
            'option',
            { key: num, value: num },
            num
          );
        })
      );
    }
  }]);

  return PageDropdown;
}(_react.Component);

PageDropdown.propTypes = {
  maxPages: _propTypes2.default.number,
  currentPage: _propTypes2.default.number,
  setPage: _propTypes2.default.func,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string
};
exports.default = PageDropdown;