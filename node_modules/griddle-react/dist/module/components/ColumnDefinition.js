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

var ColumnDefinition = function (_Component) {
  _inherits(ColumnDefinition, _Component);

  function ColumnDefinition() {
    _classCallCheck(this, ColumnDefinition);

    return _possibleConstructorReturn(this, (ColumnDefinition.__proto__ || Object.getPrototypeOf(ColumnDefinition)).apply(this, arguments));
  }

  _createClass(ColumnDefinition, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return ColumnDefinition;
}(_react.Component);

ColumnDefinition.PropTypes = {
  //The name of the column that this definition applies to.
  id: _propTypes2.default.string.isRequired,

  //The order that this column appears in. If not specified will just use the order that they are defined
  order: _propTypes2.default.number,

  //Determines whether or not the user can disable this column from the settings.
  locked: _propTypes2.default.bool,

  //The css class name, or a function to generate a class name from props, to apply to the header for the column.
  headerCssClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),

  //The css class name, or a function to generate a class name from props, to apply to this column.
  cssClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),

  //The display name for the column. This is used when the name in the column heading and settings should be different from the data passed in to the Griddle component.
  title: _propTypes2.default.string,

  //The component that should be rendered instead of the standard column data. This component will still be rendered inside of a TD element.
  customComponent: _propTypes2.default.object,

  //The component that should be used instead of the normal title
  customHeadingComponent: _propTypes2.default.object,

  //Can this column be filtered
  filterable: _propTypes2.default.bool,

  //Can this column be sorted
  sortable: _propTypes2.default.bool,

  //What sort type this column uses - magic string :shame:
  sortType: _propTypes2.default.string,

  //Any extra data that should be passed to each instance of this column
  extraData: _propTypes2.default.object,

  //The width of this column -- this is string so things like % can be specified
  width: _propTypes2.default.string,

  //The number of cells this column should extend. Default is 1.
  colSpan: _propTypes2.default.number,

  // Is this column visible
  visible: _propTypes2.default.bool,

  // Is this column metadta
  isMetadata: _propTypes2.default.bool
};
exports.default = ColumnDefinition;