"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getColumnProperties = getColumnProperties;
var offset = 1000;

/** Gets a column properties object from an array of columnNames
 * @param {Array<string>} columns - array of column names
 */
function getColumnPropertiesFromColumnArray(columnProperties, columns) {
  return columns.reduce(function (previous, current, i) {
    previous[current] = { id: current, order: offset + i };
    return previous;
  }, columnProperties);
}

/** Gets the column properties object from a react component (rowProperties) that contains child component(s) for columnProperties.
 *    If no properties are found, it will work return a column properties object based on the all columns array
 * @param {Object} rowProperties - An React component that contains the rowProperties and child columnProperties components
 * @param {Array<string> optional} allColumns - An optional array of colummn names. This will be used to generate the columnProperties when they are not defined in rowProperties
 */
function getColumnProperties(rowProperties) {
  var allColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var children = rowProperties && rowProperties.props && rowProperties.props.children;
  var columnProperties = {};

  // Working against an array of columnProperties
  if (Array.isArray(children)) {
    // build one object that contains all of the column properties keyed by id
    children.reduce(function (previous, current, i) {
      if (current) {
        previous[current.props.id] = _extends({ order: offset + i }, current.props);
      }
      return previous;
    }, columnProperties);

    // Working against a lone, columnProperties object
  } else if (children && children.props) {
    columnProperties[children.props.id] = _extends({ order: offset }, children.props);
  }

  if (Object.keys(columnProperties).length === 0 && allColumns) {
    getColumnPropertiesFromColumnArray(columnProperties, allColumns);
  }

  return columnProperties;
}