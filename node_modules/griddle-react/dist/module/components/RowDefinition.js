'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RowDefinition = function (_Component) {
  _inherits(RowDefinition, _Component);

  function RowDefinition() {
    _classCallCheck(this, RowDefinition);

    return _possibleConstructorReturn(this, (RowDefinition.__proto__ || Object.getPrototypeOf(RowDefinition)).apply(this, arguments));
  }

  _createClass(RowDefinition, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return RowDefinition;
}(_react.Component);

RowDefinition.propTypes = {
  //Children can be either a single column definition or an array
  //of column definition objects
  //TODO: get this prop type working again
  /*children: PropTypes.oneOfType([
    PropTypes.instanceOf(ColumnDefinition),
    PropTypes.arrayOf(PropTypes.instanceOf(ColumnDefinition))
  ]),*/
  //The column value that should be used as the key for the row
  //if this is not set it will make one up (not efficient)
  rowKey: _propTypes2.default.string,

  //The column that will be known used to track child data
  //By default this will be "children"
  childColumnName: _propTypes2.default.string,

  //The css class name, or a function to generate a class name from props, to apply to this row.
  cssClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};
exports.default = RowDefinition;