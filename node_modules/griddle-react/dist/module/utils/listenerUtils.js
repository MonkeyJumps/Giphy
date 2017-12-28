"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StoreListener = exports.StoreListener = function StoreListener(store) {
    var _this = this;

    _classCallCheck(this, StoreListener);

    this.removeListener = function (name) {
        if (_this.unsubscribers.hasOwnProperty(name)) {
            _this.unsubscribers[name]();
            delete _this.unsubscribers[name];
            return true;
        } else {
            return false;
        }
    };

    this.addListener = function (listener, name, otherArgs) {
        // attempt to unsubscribe an existing listener if the new 
        // listener name matches
        // if no name is provided, do nothing
        name && _this.removeListener(name);
        var unsubscribe = function () {
            var oldState = void 0;
            return _this.store.subscribe(function () {
                var newState = _this.store.getState();
                listener(oldState, newState, _extends({}, otherArgs));
                oldState = newState;
            });
        }();
        // if name was provided, add the unsubscribe
        // otherwise this is an "anonymous" listener
        name && (_this.unsubscribers[name] = unsubscribe);
        return unsubscribe;
    };

    this.hasListener = function (name) {
        return _this.unsubscribers.hasOwnProperty(name);
    };

    this.store = store;
    this.unsubscribers = {};
}

// Adds a listener to the store.
// Will attempt to remove an existing listener if the name
// matches that of an existing listener.
// If no name is provided this is an anonymous lister, it
// is not registered in the list of unsubscribe functions,
// returns the unsubscribe function so it can still be handled
// manually if desired.
;