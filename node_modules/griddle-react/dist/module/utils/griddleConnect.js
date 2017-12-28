'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = exports.mergeConnectParametersWithOptions = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/// This method appends options onto existing connect parameters
var mergeConnectParametersWithOptions = exports.mergeConnectParametersWithOptions = function mergeConnectParametersWithOptions(originalConnect, newOptions) {
  var _originalConnect = _slicedToArray(originalConnect, 4),
      mapStateFromProps = _originalConnect[0],
      mapDispatchFromProps = _originalConnect[1],
      mergeProps = _originalConnect[2],
      options = _originalConnect[3];

  return [mapStateFromProps, mapDispatchFromProps, mergeProps, _extends({}, options, newOptions)];
};

var griddleConnect = function griddleConnect() {
  for (var _len = arguments.length, connectOptions = Array(_len), _key = 0; _key < _len; _key++) {
    connectOptions[_key] = arguments[_key];
  }

  return function (OriginalComponent) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props, context) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props, context));

        var newOptions = mergeConnectParametersWithOptions(connectOptions, { storeKey: context.storeKey });
        _this.ConnectedComponent = _reactRedux.connect.apply(undefined, _toConsumableArray(newOptions))(OriginalComponent);
        return _this;
      }

      _createClass(_class, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(this.ConnectedComponent, this.props);
        }
      }]);

      return _class;
    }(_react2.default.Component), _class.contextTypes = {
      storeKey: _propTypes2.default.string
    }, _temp;
  };
};

exports.connect = griddleConnect;