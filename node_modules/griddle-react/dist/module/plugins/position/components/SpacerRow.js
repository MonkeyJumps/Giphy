'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = require('../../../utils/griddleConnect');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = require('recompose/mapProps');

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = require('recompose/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

var _withHandlers = require('recompose/withHandlers');

var _withHandlers2 = _interopRequireDefault(_withHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var spacerRow = (0, _compose2.default)((0, _getContext2.default)({
  selectors: _propTypes2.default.object
}), (0, _griddleConnect.connect)(function (state, props) {
  var _props$selectors = props.selectors,
      topSpacerSelector = _props$selectors.topSpacerSelector,
      bottomSpacerSelector = _props$selectors.bottomSpacerSelector;
  var placement = props.placement;


  return {
    spacerHeight: placement === 'top' ? topSpacerSelector(state, props) : bottomSpacerSelector(state, props)
  };
}), (0, _mapProps2.default)(function (props) {
  return {
    placement: props.placement,
    spacerHeight: props.spacerHeight
  };
}))((_temp = _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',


    // shouldComponentUpdate(nextProps) {
    //   const { currentPosition: oldPosition, placement: oldPlacement } = this.props;
    //   const { currentPosition, placement } = nextProps;
    //
    //   return oldPosition !== currentPosition || oldPlacement !== placement;
    // }

    value: function render() {
      var _props = this.props,
          placement = _props.placement,
          spacerHeight = _props.spacerHeight;

      var spacerRowStyle = {
        height: spacerHeight + 'px'
      };

      return _react2.default.createElement('tr', { key: placement + '-' + spacerHeight, style: spacerRowStyle });
    }
  }]);

  return _class;
}(_react.Component), _class.propTypes = {
  placement: _propTypes2.default.string,
  spacerHeight: _propTypes2.default.number
}, _class.defaultProps = {
  placement: 'top'
}, _temp));

exports.default = spacerRow;