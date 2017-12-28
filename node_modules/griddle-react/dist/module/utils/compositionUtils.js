'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flowRight2 = require('lodash/flowRight');

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _flow2 = require('lodash/flow');

var _flow3 = _interopRequireDefault(_flow2);

var _pickBy2 = require('lodash/pickBy');

var _pickBy3 = _interopRequireDefault(_pickBy2);

var _flattenDeep2 = require('lodash/flattenDeep');

var _flattenDeep3 = _interopRequireDefault(_flattenDeep2);

var _uniq2 = require('lodash/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _extend2 = require('lodash/extend');

var _extend3 = _interopRequireDefault(_extend2);

exports.extendArray = extendArray;
exports.combineHandlers = combineHandlers;
exports.getPropertiesByEnding = getPropertiesByEnding;
exports.getObjectWherePropertyEndsWith = getObjectWherePropertyEndsWith;
exports.composeReducer = composeReducer;
exports.composeReducers = composeReducers;
exports.getKeysForObjects = getKeysForObjects;
exports.isKeyGriddleHook = isKeyGriddleHook;
exports.removeHooksFromObject = removeHooksFromObject;
exports.removeKeyNamePartFromObject = removeKeyNamePartFromObject;
exports.getBeforeHooksFromObject = getBeforeHooksFromObject;
exports.getBeforeReduceHooksFromObject = getBeforeReduceHooksFromObject;
exports.getAfterHooksFromObject = getAfterHooksFromObject;
exports.getAfterReduceHooksFromObject = getAfterReduceHooksFromObject;
exports.composeReducerObjects = composeReducerObjects;
exports.callReducerWithBeforeAfterPipe = callReducerWithBeforeAfterPipe;
exports.buildGriddleReducer = buildGriddleReducer;
exports.getReducersByWordEnding = getReducersByWordEnding;
exports.wrapMethodsByWordEnding = wrapMethodsByWordEnding;
exports.combineAndEnhanceComponents = combineAndEnhanceComponents;
exports.combineAndEnhanceContainers = combineAndEnhanceContainers;
exports.combineAndWrapWithContainerComponents = combineAndWrapWithContainerComponents;
exports.buildGriddleComponents = buildGriddleComponents;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Extends an array rather than known list of objects */
//TODO: Look at using object.assign
function extendArray(objects) {
  //return an empty object if we don't have anything to combine
  if (!objects) {
    return {};
  }

  //add empty object to the beginning for Object.extend
  objects.unshift({});

  //Buid the combined object
  var combinedObject = _extend3.default.apply(this, objects);

  //TODO: why are we doing this? is it necessary
  objects.shift();

  //return the combined object
  return combinedObject;
}

function combineHandlers(functionArray) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    functionArray.forEach(function (func) {
      return !!func && func.apply(undefined, args);
    });
  };
}

//from MDN
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

/**
 * Finds properties on an object that end in specified word
 * @param {string} ending - The string that properties should be found ending with
 * @param {Object} object - The object to find keys on
 */
function getPropertiesByEnding(ending, object) {
  return Object.keys(object).filter(function (name) {
    return name.endsWith(ending);
  });
}

/** Creates a new object containing only properties that end with specified ending
 * @param {string} ending - The string that properties should be found ending with
 * @param {Object} object - The object to find keys on
 */
function getObjectWherePropertyEndsWith(ending, object) {
  var keys = getPropertiesByEnding(ending, object);

  return (0, _pick3.default)(object, keys);
}

/** Creates a new reducer by taking the output of the first reducer as state to the second
 * @param {Object} currentReducer - reducerMethod (state, action) to that we want to run as the state parameter for second reducer
 * @param {Object} previousReducer - reducerMethod (state, action) to run second
 */
function composeReducer(nextReducer, previousReducer) {
  // compose the reducers when both parameters are functions
  if (typeof nextReducer === 'function' && typeof previousReducer === 'function') {
    return function (state, action) {
      return previousReducer(nextReducer(state, action), action);
    };
  }

  // return the nextReducer
  return nextReducer;
}

/** Creates a composed reducer method from an array of reducer methods
 * @param {Object <array>} reducers - An array of reducer methods to compose
 */
function composeReducers(reducers) {
  // flip the array (since we want to apply from left-to-right and compose each reducer
  return reducers.reverse().reduce(function (previous, next) {
    return composeReducer(next, previous);
  }, {});
}

/** Obtains all the unique keys between an array of objects
 * @param {Object <array>} objects - An array of objects
 */
function getKeysForObjects(objects) {
  return (0, _uniq3.default)((0, _flattenDeep3.default)(objects.map(function (o) {
    return Object.keys(o);
  })));
}

/** Determines if a given key is a Griddle hook reducer
 * @param {string} key - the key to check if it refers to a Griddle hook
 */
function isKeyGriddleHook(key) {
  return key === 'BEFORE_REDUCE' || key === 'AFTER_REDUCE' || key.endsWith('AFTER') || key.endsWith('BEFORE');
}

/** Removes Griddle hooks from a reducer object
 * @param {Object} reducerObject - The reducer object to remove hooks from
 */
function removeHooksFromObject(reducerObject) {
  return (0, _pickBy3.default)(reducerObject, function (value, key) {
    if (isKeyGriddleHook(key)) {
      return false;
    }

    return true;
  });
}

/** Removes a given string from any key on the object that contains that string
 * @param {Object} reducer object - the reducer object to update keys on
 * @param {string} keyString - the string to remove from all keys
*/
function removeKeyNamePartFromObject(reducerObject, keyString) {
  return Object.keys(reducerObject).reduce(function (previous, current) {
    previous[current.replace(keyString, '')] = reducerObject[current];
    return previous;
  }, {});
}

/** Gets an object that consists of only the _BEFORE hooks. _BEFORE will be removed from the key.
 * @param {Object} reducerObject - the reducer to get the _BEFORE hooks from
 */
function getBeforeHooksFromObject(reducerObject) {
  return removeKeyNamePartFromObject((0, _pickBy3.default)(reducerObject, function (value, key) {
    return key.endsWith('BEFORE');
  }), '_BEFORE');
}

/** Gets an object that consists of only the BEFORE_REDUCE hooks.
 * @param {Object} reducerObject - the reducer to get the BEFORE_REDUCE hooks from
 */
function getBeforeReduceHooksFromObject(reducerObject) {
  return (0, _pickBy3.default)(reducerObject, function (value, key) {
    return key === 'BEFORE_REDUCE';
  });
}

/** Gets an object that conists of only the _AFTER hooks. _AFTER will be removed from the key
 * @param {Object} reducerObject - the reducer to get the _AFTER hooks from
 */
function getAfterHooksFromObject(reducerObject) {
  return removeKeyNamePartFromObject((0, _pickBy3.default)(reducerObject, function (value, key) {
    return key.endsWith('AFTER');
  }), '_AFTER');
}

/** Gets an object that conists of only the AFTER_REDUCE hooks.
 * @param {Object} reducerObject - the reducer to get the AFTER_REDUCE hooks from
 */
function getAfterReduceHooksFromObject(reducerObject) {
  return (0, _pickBy3.default)(reducerObject, function (value, key) {
    return key === 'AFTER_REDUCE';
  });
}

/** Combines the given reducer objects left to right
 * @param {Object <array>} reducerObjects - An array containing objects consisting of reducer methods as properties
 */
function composeReducerObjects(reducerObjects) {
  if (reducerObjects.length < 1) return null;

  return reducerObjects.reverse().reduce(function (previous, next) {
    // if we don't have any reducers in previous object continue with next
    if (previous === null) {
      return next;
    }

    //mutate the previous object by composing the reducer methods
    for (var key in next) {
      previous[key] = composeReducer(next[key], previous[key]);
    }

    return previous;
  }, null);
}

/** Builds a new reducer that composes hooks and extends standard reducers between reducerObjects
 * @param {Object <array>} reducers - An array of reducerObjects
 * Note: this used to be exported, but the same properties are available from buildGriddleReducer.
 * TODO: This method should be broken down a bit -- it's doing too much currently
 */
function buildGriddleReducerObject(reducerObjects) {
  var reducerMethodsWithoutHooks = [];
  var beforeHooks = [];
  var afterHooks = [];

  var beforeReduceAll = [];
  var afterReduceAll = [];

  if (reducerObjects.length > 0) {
    // remove the hooks and extend the object
    for (var key in reducerObjects) {
      var reducer = reducerObjects[key];
      reducerMethodsWithoutHooks.push(removeHooksFromObject(reducer));
      beforeHooks.push(getBeforeHooksFromObject(reducer));
      afterHooks.push(getAfterHooksFromObject(reducer));
      beforeReduceAll.push(getBeforeReduceHooksFromObject(reducer));
      afterReduceAll.push(getAfterReduceHooksFromObject(reducer));
    }
  }

  var composedBeforeHooks = composeReducerObjects(beforeHooks);
  var composedAfterHooks = composeReducerObjects(afterHooks);

  var composedBeforeReduceAll = composeReducerObjects(beforeReduceAll);
  var composedAfterReduceAll = composeReducerObjects(afterReduceAll);

  // combine the reducers without hooks
  var combinedReducer = extendArray(reducerMethodsWithoutHooks);

  var composed = composeReducerObjects([composedBeforeReduceAll, composedBeforeHooks, combinedReducer, composedAfterHooks, composedAfterReduceAll]);

  return composed;
}

/** Builds a composed method containing the before / after reduce calls
 * @param {Object} reduceObject - The reducer that contains the composed reducer methods
 * @param {Object} state - The store state
 * @param {object} action - The action payload information
*/
function callReducerWithBeforeAfterPipe(reducerObject, state, action) {
  var noop = function noop(passThroughState) {
    return passThroughState;
  };
  var before = reducerObject.hasOwnProperty('BEFORE_REDUCE') ? reducerObject.BEFORE_REDUCE : noop;
  var after = reducerObject.hasOwnProperty('AFTER_REDUCE') ? reducerObject.AFTER_REDUCE : noop;

  var call = action.type && reducerObject[action.type] && reducerObject[action.type] || reducerObject.GRIDDLE_INITIALIZED || noop;

  var partialCall = function (partialAction) {
    return function (partialState) {
      return call(partialState, partialAction);
    };
  }(action);

  var method = (0, _flow3.default)([before, partialCall, after]);

  return method(state);
}

/** Builds a griddleReducer function from a series of reducerObjects
 * @param {Object <array>} reducers - An array of reducerObjects
*/
function buildGriddleReducer(reducerObjects) {
  var reducerObject = buildGriddleReducerObject(reducerObjects);
  var reducer = function reducer(state, action) {
    return callReducerWithBeforeAfterPipe(reducerObject, state, action);
  };
  Object.assign(reducer, reducerObject);
  return reducer;
}

/** Gets all reducers by a specific wordEnding
 * @param {array <Object>} reducers - An array of reducer objects
 * @param {string} ending - the wordEnding for the reducer name
 */
function getReducersByWordEnding(reducers, ending) {
  return reducers.reduce(function (previous, current) {
    var keys = Object.keys(current).filter(function (name) {
      return name.endsWith(ending);
    });

    var reducer = pick(current, keys);

    //TODO: clean this up it's a bit hacky
    for (var key in current) {
      if (!key.endsWith(ending)) {
        continue;
      }

      var keyWithoutEnding = key.replace('_' + ending, "");
      //make a new method that pipes output of previous into state of current
      //this is to allow chaining these
      var hasPrevious = previous.hasOwnProperty(keyWithoutEnding) && typeof previous[keyWithoutEnding] === 'function';
      var previousReducer = hasPrevious ? previous[keyWithoutEnding] : undefined;

      var currentReducer = reducer[key];

      reducer[keyWithoutEnding] = wrapReducer(currentReducer, previousReducer);
    }

    //override anything in previous (since this now calls previous to make sure we have helpers from both);
    return extend(previous, reducer);
  }, {});
}

/** Wraps all methods in another method by name and word ending
  * @param {array<Object>} componentObjectArray - An array of component objects
  * @param {string} ending - the word ending to determine what is a enhancer method
  * @param {string} keyReplaceString - the word ending to apply when replacing the 'ending' parameter. Defaults to ''
*/
function wrapMethodsByWordEnding(componentArray, wordEnding) {
  var keyReplaceString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  return componentArray.reduce(function (previous, current) {
    var newObject = {};

    for (var key in current) {
      var keyWithoutEnhancer = key.replace(wordEnding, keyReplaceString);

      if (key.endsWith(wordEnding) && (previous.hasOwnProperty(keyWithoutEnhancer) || current.hasOwnProperty(keyWithoutEnhancer))) {
        // Determine if we are working with an HoC that wraps another HoC
        newObject[keyWithoutEnhancer] = keyWithoutEnhancer.endsWith('Container') || keyWithoutEnhancer.endsWith('Enhancer') ?
        // If we are enhancing a container or enhancer flow this stuff since it's likely an HoC
        (0, _flowRight3.default)(current[key], current[keyWithoutEnhancer] || previous[keyWithoutEnhancer]) :
        // Wrap the current component in the Enhancer or container
        current[key](current[keyWithoutEnhancer] || previous[keyWithoutEnhancer]);
      }
    }

    return (0, _pickBy3.default)(Object.assign(previous, current, newObject), function (v, k) {
      return !k.endsWith(wordEnding);
    });
  }, {});
}

/** Gets a new components object with component per component name
 * @param {array<Object>} componentObjectArray - An array of component objects
*/
function combineAndEnhanceComponents(componentArray) {
  return wrapMethodsByWordEnding(componentArray, 'Enhancer');
}

function combineAndEnhanceContainers(componentArray) {
  return wrapMethodsByWordEnding(componentArray, 'ContainerEnhancer', 'Container');
}

/** Gets a new component object with containers wrapping standard components
  (this is the same as enhance but just applying different naming conventions)
 * @param {array<Object>} componentObjectArray - An array of component objects
*/
function combineAndWrapWithContainerComponents(componentArray) {
  return wrapMethodsByWordEnding(componentArray, 'Container');
}

/** Wraps components in their containers and enhancers
 * @param {array<Object>} componentObjectArray - An array of component objects
*/
function buildGriddleComponents(componentArray) {
  //enhance the containers
  var withEnhancedContainers = combineAndEnhanceContainers(componentArray);

  //enhance the components
  var withEnhancedComponents = combineAndEnhanceComponents([withEnhancedContainers]);

  //wrap the components with the container
  var withWrappedComponents = combineAndWrapWithContainerComponents([withEnhancedComponents]);

  return withWrappedComponents;
}