'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = require('../utils/griddleConnect');

var _dataSelectors = require('../selectors/dataSelectors');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnhancedFilter = function EnhancedFilter(OriginalComponent) {
  return (0, _griddleConnect.connect)(function (state, props) {
    return {
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Filter'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Filter')
    };
  }, { setFilter: _actions.setFilter })(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = EnhancedFilter;