'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  styleConfig: {
    classNames: {
      Layout: 'griddle griddle-container'
    }
  },
  components: {
    Style: function Style() {
      return _react2.default.createElement(
        'style',
        { type: 'text/css' },
        '\n          .griddle-container{\n            border:1px solid #DDD;\n          }\n\n          .griddle .top-section{\n            clear:both;\n            display:table;\n            width:100%;\n          }\n\n          .griddle .griddle-filter{\n            float:left;\n            width:50%;\n            text-align:left;\n            color:#222;\n            min-height:1px;\n          }\n\n          .griddle .griddle-settings-toggle{\n            float:left;\n            width:50%;\n            text-align:right;\n          }\n\n          .griddle .griddle-settings{\n            background-color:#FFF;\n            border:1px solid #DDD;\n            color:#222;\n            padding:10px;\n            margin-bottom:10px;\n          }\n\n          .griddle .griddle-settings .griddle-columns{\n            clear:both;\n            display:table;\n            width:100%;\n            border-bottom:1px solid #EDEDED;\n            margin-bottom:10px;\n          }\n\n          .griddle .griddle-settings .griddle-column-selection{\n            float:left;\n            width:20%;\n          }\n          .griddle table{\n            width:100%;table-layout:fixed;\n          }\n\n          .griddle th{\n            background-color:#EDEDEF;\n            border:0px;\n            border-bottom:1px solid #DDD;\n            color:#222;\n            padding:5px;\n          }\n\n          .griddle td{\n            padding:5px;\n            background-color:#FFF;\n            border-top-color:#DDD;\n            color:#222;\n          }\n\n          .griddle .footer-container{\n            padding:0px;\n            background-color:#EDEDED;\n            border:0px;\n            color:#222;\n          }\n\n          .griddle .griddle-previous, .griddle .griddle-page, .griddle .griddle-next{\n            float:left;\n            width:33%;\n            min-height:1px;\n            margin-top:5px;\n          }\n\n          .griddle .griddle-page{\n            text-align:center;\n          }\n\n          .griddle .griddle-next{\n            text-align:right;\n          }\n\n        '
      );
    }
  }
};