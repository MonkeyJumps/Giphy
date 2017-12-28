'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _reducers = require('./reducers');

var reducer = _interopRequireWildcard(_reducers);

var _initialState = require('./initial-state');

var _initialState2 = _interopRequireDefault(_initialState);

var _selectors = require('./selectors');

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PositionPlugin = function PositionPlugin(config) {
  return {
    initialState: _extends({}, _initialState2.default, {
      positionSettings: Object.assign({}, _initialState2.default.positionSettings, config)
    }),
    components: _components2.default,
    reducer: reducer,
    selectors: selectors
  };
};

exports.default = PositionPlugin;