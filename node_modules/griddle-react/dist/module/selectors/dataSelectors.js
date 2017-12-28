'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cellPropertiesSelector = exports.cellPropertiesSelectorFactory = exports.rowPropertiesSelector = exports.rowDataSelector = exports.cellValueSelector = exports.visibleRowCountSelector = exports.visibleRowIdsSelector = exports.columnTitlesSelector = exports.columnIdsSelector = exports.textSelector = exports.isSettingsVisibleSelector = exports.isSettingsEnabledSelector = exports.customHeadingComponentSelector = exports.customComponentSelector = exports.classNamesForComponentSelector = exports.stylesForComponentSelector = exports.iconsForComponentSelector = exports.iconByNameSelector = exports.sortPropertyByIdSelector = exports.hiddenColumnPropertiesSelector = exports.hiddenColumnsSelector = exports.visibleColumnPropertiesSelector = exports.visibleColumnsSelector = exports.metaDataColumnsSelector = exports.sortedColumnPropertiesSelector = exports.allColumnsSelector = exports.sortColumnsSelector = exports.filterSelector = exports.hasNextSelector = exports.maxPageSelector = exports.hasPreviousSelector = exports.renderPropertiesSelector = exports.recordCountSelector = exports.currentPageSelector = exports.pageSizeSelector = exports.dataLoadingSelector = exports.dataSelector = undefined;

var _union2 = require('lodash/union');

var _union3 = _interopRequireDefault(_union2);

var _isFinite2 = require('lodash/isFinite');

var _isFinite3 = _interopRequireDefault(_isFinite2);

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reselect = require('reselect');

var _maxSafeInteger = require('max-safe-integer');

var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var createDeepEqualSelector = (0, _reselect.createSelectorCreator)(_reselect.defaultMemoize, _isEqual3.default);

//import { createSelector } from 'reselect';

/** Gets the full dataset currently tracked by Griddle */
var dataSelector = exports.dataSelector = function dataSelector(state) {
  return state.get('data');
};

var dataLoadingSelector = exports.dataLoadingSelector = (0, _reselect.createSelector)(dataSelector, function (data) {
  return !data;
});

/** Gets the page size */
var pageSizeSelector = exports.pageSizeSelector = function pageSizeSelector(state) {
  return state.getIn(['pageProperties', 'pageSize']);
};

/** Gets the current page */
var currentPageSelector = exports.currentPageSelector = function currentPageSelector(state) {
  return state.getIn(['pageProperties', 'currentPage']);
};

/** Gets the record count */
var recordCountSelector = exports.recordCountSelector = function recordCountSelector(state) {
  return state.getIn(['pageProperties', 'recordCount']);
};

/** Gets the render properties */
var renderPropertiesSelector = exports.renderPropertiesSelector = function renderPropertiesSelector(state) {
  return state.get('renderProperties');
};

/** Determines if there are previous pages */
var hasPreviousSelector = exports.hasPreviousSelector = (0, _reselect.createSelector)(currentPageSelector, function (currentPage) {
  return currentPage > 1;
});

/** Gets the max page size
 */
var maxPageSelector = exports.maxPageSelector = (0, _reselect.createSelector)(pageSizeSelector, recordCountSelector, function (pageSize, recordCount) {
  var calc = recordCount / pageSize;

  var result = calc > Math.floor(calc) ? Math.floor(calc) + 1 : Math.floor(calc);

  return (0, _isFinite3.default)(result) ? result : 1;
});

/** Determines if there are more pages available. Assumes pageProperties.maxPage is set by the container */
var hasNextSelector = exports.hasNextSelector = (0, _reselect.createSelector)(currentPageSelector, maxPageSelector, function (currentPage, maxPage) {
  return currentPage < maxPage;
});

/** Gets current filter */
var filterSelector = exports.filterSelector = function filterSelector(state) {
  return state.get('filter') || '';
};

/** Gets the current sortColumns */
var sortColumnsSelector = exports.sortColumnsSelector = function sortColumnsSelector(state) {
  return state.get('sortColumns') || [];
};

/** Gets all the columns */
var allColumnsSelector = exports.allColumnsSelector = (0, _reselect.createSelector)(dataSelector, renderPropertiesSelector, function (data, renderProperties) {
  var dataColumns = !data || data.size === 0 ? [] : data.get(0).keySeq().toJSON();

  var columnPropertyColumns = renderProperties && renderProperties.size > 0 ?
  // TODO: Make this not so ugly
  Object.keys(renderProperties.get('columnProperties').toJSON()) : [];

  return (0, _union3.default)(dataColumns, columnPropertyColumns);
});

/** Gets the column properties objects sorted by order
 */
var sortedColumnPropertiesSelector = exports.sortedColumnPropertiesSelector = (0, _reselect.createSelector)(renderPropertiesSelector, function (renderProperties) {
  return renderProperties && renderProperties.get('columnProperties') && renderProperties.get('columnProperties').size !== 0 ? renderProperties.get('columnProperties').sortBy(function (col) {
    return col && col.get('order') || _maxSafeInteger2.default;
  }) : null;
});

/** Gets metadata column ids
 */
var metaDataColumnsSelector = exports.metaDataColumnsSelector = (0, _reselect.createSelector)(sortedColumnPropertiesSelector, function (sortedColumnProperties) {
  return sortedColumnProperties ? sortedColumnProperties.filter(function (c) {
    return c.get('isMetadata');
  }).keySeq().toJSON() : [];
});

/** Gets the visible columns either obtaining the sorted column properties or all columns
 */
var visibleColumnsSelector = exports.visibleColumnsSelector = (0, _reselect.createSelector)(sortedColumnPropertiesSelector, allColumnsSelector, function (sortedColumnProperties, allColumns) {
  return sortedColumnProperties ? sortedColumnProperties.filter(function (c) {
    var isVisible = c.get('visible') || c.get('visible') === undefined;
    var isMetadata = c.get('isMetadata');
    return isVisible && !isMetadata;
  }).keySeq().toJSON() : allColumns;
});

/** TODO: add tests and docs
 */
var visibleColumnPropertiesSelector = exports.visibleColumnPropertiesSelector = (0, _reselect.createSelector)(visibleColumnsSelector, renderPropertiesSelector, function () {
  var visibleColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var renderProperties = arguments[1];
  return visibleColumns.map(function (c) {
    var columnProperty = renderProperties.getIn(['columnProperties', c]);
    return columnProperty && columnProperty.toJSON() || { id: c };
  });
});

/** Gets the possible columns that are currently hidden */
var hiddenColumnsSelector = exports.hiddenColumnsSelector = (0, _reselect.createSelector)(visibleColumnsSelector, allColumnsSelector, metaDataColumnsSelector, function (visibleColumns, allColumns, metaDataColumns) {
  var removeColumns = [].concat(_toConsumableArray(visibleColumns), _toConsumableArray(metaDataColumns));

  return allColumns.filter(function (c) {
    return removeColumns.indexOf(c) === -1;
  });
});

/** TODO: add tests and docs
 */
var hiddenColumnPropertiesSelector = exports.hiddenColumnPropertiesSelector = (0, _reselect.createSelector)(hiddenColumnsSelector, renderPropertiesSelector, function () {
  var hiddenColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var renderProperties = arguments[1];
  return hiddenColumns.map(function (c) {
    var columnProperty = renderProperties.getIn(['columnProperties', c]);

    return columnProperty && columnProperty.toJSON() || { id: c };
  });
});

/** Gets the sort property for a given column */
var sortPropertyByIdSelector = exports.sortPropertyByIdSelector = function sortPropertyByIdSelector(state, _ref) {
  var columnId = _ref.columnId;

  var sortProperties = state.get('sortProperties');
  var individualProperty = sortProperties && sortProperties.size > 0 && sortProperties.find(function (r) {
    return r.get('id') === columnId;
  });

  return individualProperty && individualProperty.toJSON() || null;
};

/** Gets the icons property from styles */
var iconByNameSelector = exports.iconByNameSelector = function iconByNameSelector(state, _ref2) {
  var name = _ref2.name;

  return state.getIn(['styleConfig', 'icons', name]);
};

/** Gets the icons for a component */
var iconsForComponentSelector = exports.iconsForComponentSelector = function iconsForComponentSelector(state, componentName) {
  var icons = state.getIn(['styleConfig', 'icons', componentName]);
  return icons && icons.toJS ? icons.toJS() : icons;
};

/** Gets a style for a component */
var stylesForComponentSelector = exports.stylesForComponentSelector = function stylesForComponentSelector(state, componentName) {
  var style = state.getIn(['styleConfig', 'styles', componentName]);
  return style && style.toJS ? style.toJS() : style;
};

/** Gets a classname for a component */
var classNamesForComponentSelector = exports.classNamesForComponentSelector = function classNamesForComponentSelector(state, componentName) {
  var classNames = state.getIn(['styleConfig', 'classNames', componentName]);
  return classNames && classNames.toJS ? classNames.toJS() : classNames;
};

/** Gets a custom component for a given column
* TODO: Needs tests
*/
var customComponentSelector = exports.customComponentSelector = function customComponentSelector(state, _ref3) {
  var columnId = _ref3.columnId;

  return state.getIn(['renderProperties', 'columnProperties', columnId, 'customComponent']);
};

/** Gets a custom heading component for a given column
* TODO: Needs tests
*/
var customHeadingComponentSelector = exports.customHeadingComponentSelector = function customHeadingComponentSelector(state, _ref4) {
  var columnId = _ref4.columnId;

  return state.getIn(['renderProperties', 'columnProperties', columnId, 'customHeadingComponent']);
};

var isSettingsEnabledSelector = exports.isSettingsEnabledSelector = function isSettingsEnabledSelector(state) {
  var enableSettings = state.get('enableSettings');

  return enableSettings === undefined ? true : enableSettings;
};

var isSettingsVisibleSelector = exports.isSettingsVisibleSelector = function isSettingsVisibleSelector(state) {
  return state.get('showSettings');
};

var textSelector = exports.textSelector = function textSelector(state, _ref5) {
  var key = _ref5.key;

  return state.getIn(['textProperties', key]);
};

/** Gets the column ids for the visible columns
*/
var columnIdsSelector = exports.columnIdsSelector = (0, _reselect.createSelector)(renderPropertiesSelector, visibleColumnsSelector, function (renderProperties, visibleColumns) {
  var offset = 1000;
  // TODO: Make this better -- This is pretty inefficient
  return visibleColumns.map(function (k, index) {
    return {
      id: renderProperties.getIn(['columnProperties', k, 'id']) || k,
      order: renderProperties.getIn(['columnProperties', k, 'order']) || offset + index
    };
  }).sort(function (first, second) {
    return first.order - second.order;
  }).map(function (item) {
    return item.id;
  });
});

/** Gets the column titles for the visible columns
 */
var columnTitlesSelector = exports.columnTitlesSelector = (0, _reselect.createSelector)(columnIdsSelector, renderPropertiesSelector, function (columnIds, renderProperties) {
  return columnIds.map(function (k) {
    return renderProperties.getIn(['columnProperties', k, 'title']) || k;
  });
});

/** Gets the griddleIds for the visible rows */
var visibleRowIdsSelector = exports.visibleRowIdsSelector = (0, _reselect.createSelector)(dataSelector, function (currentPageData) {
  return currentPageData ? currentPageData.map(function (c) {
    return c.get('griddleKey');
  }) : new _immutable2.default.List();
});

/** Gets the count of visible rows */
var visibleRowCountSelector = exports.visibleRowCountSelector = (0, _reselect.createSelector)(visibleRowIdsSelector, function (visibleRowIds) {
  return visibleRowIds.size;
});

// TODO: Needs tests and jsdoc
var cellValueSelector = exports.cellValueSelector = function cellValueSelector(state, props) {
  var griddleKey = props.griddleKey,
      columnId = props.columnId;

  var cellProperties = cellPropertiesSelector(state, props);

  //TODO: Make Griddle key a string in data utils
  var lookup = state.getIn(['lookup', griddleKey.toString()]);

  var value = state.get('data').get(lookup).getIn(columnId.split('.'));
  var type = !!cellProperties ? cellProperties.type : 'string';
  switch (type) {
    case 'date':
      return value.toLocaleDateString();
    case 'string':
    default:
      return value;
  }
};

// TODO: Needs jsdoc
var rowDataSelector = exports.rowDataSelector = function rowDataSelector(state, _ref6) {
  var griddleKey = _ref6.griddleKey;

  var rowIndex = state.getIn(['lookup', griddleKey.toString()]);
  return state.get('data').get(rowIndex).toJSON();
};

/** Gets the row render properties
 */
var rowPropertiesSelector = exports.rowPropertiesSelector = function rowPropertiesSelector(state) {
  var row = state.getIn(['renderProperties', 'rowProperties']);

  return row && row.toJSON() || {};
};

/** Gets the column render properties for the specified columnId
 */
var cellPropertiesSelectorFactory = exports.cellPropertiesSelectorFactory = function cellPropertiesSelectorFactory() {
  var immutableCellPropertiesSelector = function immutableCellPropertiesSelector(state, _ref7) {
    var columnId = _ref7.columnId;

    var item = state.getIn(['renderProperties', 'columnProperties', columnId]);

    return item && item.toJSON() || {};
  };

  return createDeepEqualSelector(immutableCellPropertiesSelector, function (item) {
    return item;
  });
};

var cellPropertiesSelector = exports.cellPropertiesSelector = cellPropertiesSelectorFactory();