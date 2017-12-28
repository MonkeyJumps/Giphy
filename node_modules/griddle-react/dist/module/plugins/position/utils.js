'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldUpdateDrawnRows = shouldUpdateDrawnRows;
exports.setCurrentPosition = setCurrentPosition;
exports.updatePositionProperties = updatePositionProperties;
exports.updateRenderedData = updateRenderedData;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _initialState = require('./initial-state');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shouldUpdateDrawnRows(action, state) {
  var height = state.getIn(['currentPosition', 'height']);
  var width = state.getIn(['currentPosition', 'width']);

  // If the containers have changed size, update drawn rows.
  if (height != action.yVisible || width != action.xVisible) return true;

  var yScrollChangePosition = state.getIn(['currentPosition', 'yScrollChangePosition']);
  var rowHeight = state.getIn(['positionConfig', 'rowHeight']);

  // Get the current visible record count.
  var visibleRecordCount = getVisibleRecordCount(state);

  // Get the count of rendered rows.
  var startDisplayIndex = state.getIn(['currentPosition', 'renderedStartDisplayIndex']);
  var endDisplayIndex = state.getIn(['currentPosition', 'renderedEndDisplayIndex']);
  var renderedRecordCount = endDisplayIndex - startDisplayIndex;

  // Calculate the height of a third of the difference.
  var rowDifferenceHeight = rowHeight * (renderedRecordCount - visibleRecordCount) / 3;

  return Math.abs(action.yScrollPosition - yScrollChangePosition) >= rowDifferenceHeight;
}

function setCurrentPosition(state, yScrollPosition, xScrollPosition) {
  return state.setIn(['currentPosition', 'yScrollChangePosition'], yScrollPosition).setIn(['currentPosition', 'xScrollChangePosition'], xScrollPosition);
}

function updatePositionProperties(action, state, force) {
  if (!action.force && !shouldUpdateDrawnRows(action, state) && !_immutable2.default.is(state.get('currentPosition'), (0, _initialState2.default)().get('currentPosition'))) {
    return state; // Indicate that this shouldn't result in an emit.
  }

  var sizeUpdatedState = state.setIn(['currentPosition', 'height'], action.yVisible ? action.yVisible * 1.2 : state.getIn(['currentPosition', 'height'])).setIn(['currentPosition', 'width'], action.xVisible || state.getIn(['currentPosition', 'width']));

  var visibleRecordCount = getVisibleRecordCount(sizeUpdatedState);
  var visibleDataLength = helpers.getDataSetSize(sizeUpdatedState);

  var rowHeight = sizeUpdatedState.getIn(['positionConfig', 'rowHeight']);

  var verticalScrollPosition = action.yScrollPosition || 0;
  var horizontalScrollPosition = action.xScrollPosition || 0;

  // Inspired by : http://jsfiddle.net/vjeux/KbWJ2/9/
  var renderedStartDisplayIndex = Math.max(0, Math.floor(Math.floor(verticalScrollPosition / rowHeight) - visibleRecordCount * 0.25));
  var renderedEndDisplayIndex = Math.min(Math.floor(renderedStartDisplayIndex + visibleRecordCount * 2), visibleDataLength - 1) + 1;

  return setCurrentPosition(sizeUpdatedState, verticalScrollPosition, horizontalScrollPosition).setIn(['currentPosition', 'renderedStartDisplayIndex'], renderedStartDisplayIndex).setIn(['currentPosition', 'renderedEndDisplayIndex'], renderedEndDisplayIndex).setIn(['currentPosition', 'visibleDataLength'], visibleDataLength);
}

function updateRenderedData(state) {
  var startDisplayIndex = state.getIn(['currentPosition', 'renderedStartDisplayIndex']);
  var columns = helpers.getDataColumns(state, data);
  var data = helpers.getDataSet(state);

  return state.set('renderedData', helpers.getVisibleDataColumns(data.skip(startDisplayIndex).take(state.getIn(['currentPosition', 'renderedEndDisplayIndex']) - startDisplayIndex), columns));
}