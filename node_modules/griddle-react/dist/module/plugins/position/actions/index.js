'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setScrollPosition = setScrollPosition;

var _constants = require('../constants');

function setScrollPosition(xScrollPosition, xScrollMax, xVisible, yScrollPosition, yScrollMax, yVisible) {
  return {
    type: _constants.XY_POSITION_CHANGED,
    xScrollPosition: xScrollPosition,
    xScrollMax: xScrollMax,
    xVisible: xVisible,
    yScrollPosition: yScrollPosition,
    yScrollMax: yScrollMax,
    yVisible: yVisible
  };
}