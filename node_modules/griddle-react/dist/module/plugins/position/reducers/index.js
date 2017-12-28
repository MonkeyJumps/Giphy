'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XY_POSITION_CHANGED = XY_POSITION_CHANGED;
exports.GRIDDLE_SET_FILTER_AFTER = GRIDDLE_SET_FILTER_AFTER;

var _utils = require('../utils');

function XY_POSITION_CHANGED(state, action) {
  var height = state.getIn(['currentPosition', 'height']) || 0;
  var width = state.getIn(['currentPosition', 'width']) || 0;

  return state.setIn(['currentPosition', 'xScrollChangePosition'], action.xScrollPosition || 0).setIn(['currentPosition', 'yScrollChangePosition'], action.yScrollPosition || 0).setIn(['currentPosition', 'height'], action.height || height).setIn(['currentPosition', 'width'], action.width || width);
}

function GRIDDLE_SET_FILTER_AFTER(state, action, helpers) {
  return state.setIn(['currentPosition', 'xScrollChangePosition'], 0).setIn(['currentPosition', 'yScrollChangePosition'], 0);
}