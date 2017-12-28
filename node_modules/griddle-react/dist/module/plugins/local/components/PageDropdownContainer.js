'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _griddleConnect = require('../../../utils/griddleConnect');

var _reselect = require('reselect');

var _localSelectors = require('../selectors/localSelectors');

var _actions = require('../../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = function enhance(OriginalComponent) {
  return (0, _griddleConnect.connect)(function (state) {
    return {
      maxPages: (0, _localSelectors.maxPageSelector)(state),
      currentPage: (0, _localSelectors.currentPageSelector)(state),
      className: (0, _localSelectors.classNamesForComponentSelector)(state, 'PageDropdown'),
      style: (0, _localSelectors.stylesForComponentSelector)(state, 'PageDropdown')
    };
  }, {
    setPage: _actions.setPage
  })(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = enhance;