// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'url-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("C:/Users/86157/Desktop/\u5415\u80A5\u80A5\u7684github/npms/js-common-library/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _jsCommonLibrary = require("js-common-library");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, console.log((0, _jsCommonLibrary.getQueryToObj)())), /*#__PURE__*/_react["default"].createElement("p", null, console.log((0, _jsCommonLibrary.getQueryByName)('name'))), /*#__PURE__*/_react["default"].createElement("p", null, console.log((0, _jsCommonLibrary.getUrlLast)())));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react'\nimport { getQueryToObj, getQueryByName, getUrlLast } from 'js-common-library'\n\nexport default () => {\n  return (\n    <div>\n      <p>{console.log(getQueryToObj())}</p>\n      <p>{console.log(getQueryByName('name'))}</p>\n      <p>{console.log(getUrlLast())}</p>\n    </div>\n  )\n}"}},"dependencies":{"react":{"version":"16.14.0"},"js-common-library":{"version":"1.1.1"}},"identifier":"url-demo"},
  },
};
