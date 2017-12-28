'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRowProperties = getRowProperties;
/** Gets a row properties object from a rowProperties component
 * @param {Object} rowPropertiesComponent - A react component that contains rowProperties as props
*/
function getRowProperties(rowPropertiesComponent) {
    if (!rowPropertiesComponent) return null;

    var rowProps = Object.assign({}, rowPropertiesComponent.props);
    delete rowProps.children;

    if (!rowProps.hasOwnProperty('childColumnName')) {
        rowProps.childColumnName = 'children';
    }

    return rowProps;
}