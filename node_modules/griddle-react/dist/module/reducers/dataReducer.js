'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GRIDDLE_INITIALIZED = GRIDDLE_INITIALIZED;
exports.GRIDDLE_LOADED_DATA = GRIDDLE_LOADED_DATA;
exports.GRIDDLE_SET_PAGE_SIZE = GRIDDLE_SET_PAGE_SIZE;
exports.GRIDDLE_SET_PAGE = GRIDDLE_SET_PAGE;
exports.GRIDDLE_SET_FILTER = GRIDDLE_SET_FILTER;
exports.GRIDDLE_SET_SORT = GRIDDLE_SET_SORT;
exports.GRIDDLE_TOGGLE_SETTINGS = GRIDDLE_TOGGLE_SETTINGS;
exports.GRIDDLE_TOGGLE_COLUMN = GRIDDLE_TOGGLE_COLUMN;
exports.GRIDDLE_UPDATE_STATE = GRIDDLE_UPDATE_STATE;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _dataUtils = require('../utils/dataUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
 * State
 * ------------------
 *  data {Immutable.List} - the data that the grid is displaying
 *  loading {boolean} - is the data currently loading
 *  renderProperties {Immutable.Map} - the properties that determine how the grid should be displayed
 *  pageProperties {Immutable.Map} - the metadata for paging information
 *  .-- currentPage {int} - The current, visible page
 *  .-- pageSize {int} - The number of records to display
 *  sortProperties {Immutable.List} - the metadata surrounding sort
 *  .-- id {string} - the column id
 *  .-- sortAscending {boolean} - the direction of the sort. Index matches that of sortColumns
 **/


function isColumnVisible(state, columnId) {
  var hasRenderProperty = state.getIn(['renderProperties', 'columnProperties', columnId]);
  var currentlyVisibleProperty = state.getIn(['renderProperties', 'columnProperties', columnId, 'visible']);

  // if there is a render property and visible is not set, visible is true
  if (hasRenderProperty && currentlyVisibleProperty === undefined) {
    return true;
  }

  // if there is no render property currently and visible is not set
  if (!hasRenderProperty && currentlyVisibleProperty === undefined) {
    return false;
  }

  return currentlyVisibleProperty;
}

/** Sets the default render properties
 * @param {Immutable} state- Immutable previous state object
 * @param {Object} action - The action object to work with
 *
 * TODO: Consider renaming this to be more in line with what it's actually doing (setting render properties)
*/
function GRIDDLE_INITIALIZED(initialState) {
  var tempState = Object.assign({}, initialState);
  tempState = (0, _dataUtils.addColumnPropertiesWhenNoneExist)(tempState);
  //TODO: could probably make this more efficient by removing data
  // making the rest of the properties initial state and
  // setting the mapped data on the new initial state immutable object
  if (initialState.data && initialState.data.length > 0) {
    var transformedData = (0, _dataUtils.transformData)(initialState.data, initialState.renderProperties);
    tempState.data = transformedData.data;
    tempState.lookup = transformedData.lookup;
  }

  return _immutable2.default.fromJS(tempState);
}

/** Sets the griddle data
 * @param {Immutable} state- Immutable previous state object
 * @param {Object} action - The action object to work with
*/
function GRIDDLE_LOADED_DATA(state, action) {
  var transformedData = (0, _dataUtils.transformData)(action.data, state.get('renderProperties').toJSON());

  return state.set('data', transformedData.data).set('lookup', transformedData.lookup).set('loading', false);
}

/** Sets the current page size
 * @param {Immutable} state- Immutable previous state object
 * @param {Object} action - The action object to work with
*/
function GRIDDLE_SET_PAGE_SIZE(state, action) {
  return state.setIn(['pageProperties', 'currentPage'], 1).setIn(['pageProperties', 'pageSize'], action.pageSize);
}

/** Sets the current page
 * @param {Immutable} state- Immutable previous state object
 * @param {Object} action - The action object to work with
*/
function GRIDDLE_SET_PAGE(state, action) {
  return state.setIn(['pageProperties', 'currentPage'], action.pageNumber);
}

/** Sets the filter
 * @param {Immutable} state- Immutable previous state object
 * @param {Object} action - The action object to work with
*/
function GRIDDLE_SET_FILTER(state, action) {
  return state.set('filter', action.filter);
}

/** Sets sort properties
 * @param {Immutable} state- Immutable previous state object
 * @param {Object} action - The action object to work with
*/
function GRIDDLE_SET_SORT(state, action) {
  // turn this into an array if it's not already
  var sortProperties = action.sortProperties.hasOwnProperty('length') ? action.sortProperties : [action.sortProperties];

  return state.set('sortProperties', new _immutable2.default.fromJS(sortProperties));
}

/** Sets the settings visibility to true / false depending on the current property
 */
function GRIDDLE_TOGGLE_SETTINGS(state, action) {
  // if undefined treat as if it's false
  var showSettings = state.get('showSettings') || false;

  return state.set('showSettings', !showSettings);
}

function GRIDDLE_TOGGLE_COLUMN(state, action) {
  // flips the visible state if the column property exists
  var currentlyVisible = isColumnVisible(state, action.columnId);

  return state.getIn(['renderProperties', 'columnProperties', action.columnId]) ? state.setIn(['renderProperties', 'columnProperties', action.columnId, 'visible'], !currentlyVisible) :

  // if the columnProperty doesn't exist, create a new one and set the property to true
  state.setIn(['renderProperties', 'columnProperties', action.columnId], new _immutable2.default.Map({ id: action.columnId, visible: true }));
}

var defaultRenderProperties = _immutable2.default.fromJS({});
function GRIDDLE_UPDATE_STATE(state, action) {
  var _action$newState = action.newState,
      data = _action$newState.data,
      newState = _objectWithoutProperties(_action$newState, ['data']);

  var mergedState = state.mergeDeep(_immutable2.default.fromJS(newState));
  if (!data) {
    return mergedState;
  }

  var renderProperties = state.get('renderProperties', defaultRenderProperties).toJSON();
  var transformedData = (0, _dataUtils.transformData)(data, renderProperties);

  return mergedState.set('data', transformedData.data).set('lookup', transformedData.lookup);
}