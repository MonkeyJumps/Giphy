'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.defaultSort = defaultSort;
exports.setSortProperties = setSortProperties;
exports.getSortIconProps = getSortIconProps;
/* Sorts the given data by the specified column
 * @parameter {array<object>} data - The data to sort
 * @parameter {string} column - the name of the column to sort
 * @parameter {boolean optional} sortAscending - whether or not to sort this column in ascending order
 *
 * TODO: Needs tests!
 */
function defaultSort(data, column) {
  var sortAscending = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  return data.sort(function (original, newRecord) {
    var columnKey = column.split('.');
    var originalValue = original.hasIn(columnKey) && original.getIn(columnKey) || '';
    var newRecordValue = newRecord.hasIn(columnKey) && newRecord.getIn(columnKey) || '';

    //TODO: This is about the most cheezy sorting check ever.
    //Make it better
    if (originalValue === newRecordValue) {
      return 0;
    } else if (originalValue > newRecordValue) {
      return sortAscending ? 1 : -1;
    } else {
      return sortAscending ? -1 : 1;
    }
  });
}

function setSortProperties(_ref) {
  var setSortColumn = _ref.setSortColumn,
      sortProperty = _ref.sortProperty,
      columnId = _ref.columnId;

  return function () {
    if (sortProperty === null) {
      setSortColumn({ id: columnId, sortAscending: true });
      return;
    }

    var newSortProperty = _extends({}, sortProperty, {
      sortAscending: !sortProperty.sortAscending
    });

    setSortColumn(newSortProperty);
  };
}

function getSortIconProps(props) {
  var sortProperty = props.sortProperty,
      sortAscendingIcon = props.sortAscendingIcon,
      sortDescendingIcon = props.sortDescendingIcon;
  var sortAscendingClassName = props.sortAscendingClassName,
      sortDescendingClassName = props.sortDescendingClassName;


  if (sortProperty) {
    return sortProperty.sortAscending ? {
      icon: sortAscendingIcon,
      iconClassName: sortAscendingClassName
    } : {
      icon: sortDescendingIcon,
      iconClassName: sortDescendingClassName
    };
  }

  // return null so we don't render anything if no sortProperty
  return null;
}