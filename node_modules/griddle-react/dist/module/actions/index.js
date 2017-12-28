'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNext = getNext;
exports.getPrevious = getPrevious;
exports.setPage = setPage;
exports.setFilter = setFilter;
exports.setSortColumn = setSortColumn;
exports.toggleSettings = toggleSettings;
exports.toggleColumn = toggleColumn;
exports.setPageSize = setPageSize;
exports.updateState = updateState;

var _constants = require('../constants');

function getNext() {
  return {
    type: _constants.GRIDDLE_NEXT_PAGE
  };
}

function getPrevious() {
  return {
    type: _constants.GRIDDLE_PREVIOUS_PAGE
  };
}

function setPage(pageNumber) {
  return {
    type: _constants.GRIDDLE_SET_PAGE,
    pageNumber: pageNumber
  };
}

function setFilter(filter) {
  return {
    type: _constants.GRIDDLE_SET_FILTER,
    filter: filter
  };
}

function setSortColumn(sortProperties) {
  return {
    type: _constants.GRIDDLE_SET_SORT,
    sortProperties: sortProperties
  };
}

function toggleSettings() {
  return {
    type: _constants.GRIDDLE_TOGGLE_SETTINGS
  };
}

function toggleColumn(columnId) {
  return {
    type: _constants.GRIDDLE_TOGGLE_COLUMN,
    columnId: columnId
  };
}

function setPageSize(pageSize) {
  return {
    type: _constants.GRIDDLE_SET_PAGE_SIZE,
    pageSize: pageSize
  };
}

function updateState(newState) {
  return {
    type: _constants.GRIDDLE_UPDATE_STATE,
    newState: newState
  };
}