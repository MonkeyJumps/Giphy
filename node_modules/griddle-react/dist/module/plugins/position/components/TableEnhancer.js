'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Table = function Table(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    selectors: _propTypes2.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    var _props$selectors = props.selectors,
        tableHeightSelector = _props$selectors.tableHeightSelector,
        tableWidthSelector = _props$selectors.tableWidthSelector,
        rowHeightSelector = _props$selectors.rowHeightSelector;

    return {
      TableHeight: tableHeightSelector(state),
      TableWidth: tableWidthSelector(state),
      RowHeight: rowHeightSelector(state)
    };
  }, {
    setScrollPosition: _actions.setScrollPosition
  }), (0, _mapProps2.default)(function (props) {
    var selectors = props.selectors,
        restProps = _objectWithoutProperties(props, ['selectors']);

    return restProps;
  }))(function (_Component) {
    _inherits(_class2, _Component);

    function _class2(props, context) {
      _classCallCheck(this, _class2);

      var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, props, context));

      _this._scroll = function () {
        var _this$props = _this.props,
            setScrollPosition = _this$props.setScrollPosition,
            RowHeight = _this$props.RowHeight;
        var scrollTop = _this.state.scrollTop;


        if (_this._scrollable && Math.abs(_this._scrollable.scrollTop - scrollTop) >= RowHeight) {
          setScrollPosition(_this._scrollable.scrollLeft, _this._scrollable.scrollWidth, _this._scrollable.clientWidth, _this._scrollable.scrollTop, _this._scrollable.scrollHeight, _this._scrollable.clientHeight);
          _this.setState({ scrollTop: _this._scrollable.scrollTop });
        }
      };

      _this.state = { scrollTop: 0 };
      return _this;
    }

    _createClass(_class2, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            TableHeight = _props.TableHeight,
            TableWidth = _props.TableWidth;

        var scrollStyle = {
          'overflow': TableHeight && TableWidth ? 'scroll' : null,
          'overflowY': TableHeight && !TableWidth ? 'scroll' : null,
          'overflowX': !TableHeight && TableWidth ? 'scroll' : null,
          'height': TableHeight ? TableHeight : null,
          'width': TableWidth ? TableWidth : null,
          'display': 'inline-block'
        };

        return _react2.default.createElement(
          'div',
          { ref: function ref(_ref) {
              return _this2._scrollable = _ref;
            }, style: scrollStyle, onScroll: this._scroll },
          _react2.default.createElement(OriginalComponent, this.props)
        );
      }
    }]);

    return _class2;
  }(_react.Component));
};

exports.default = Table;