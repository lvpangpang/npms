// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'data-type-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("C:/Users/86157/Desktop/\u5415\u80A5\u80A5\u7684github/npms/js-common-library/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _jsCommonLibrary = require("js-common-library");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, (0, _jsCommonLibrary.isObj)({
      name: 'btc'
    }) ? '验证成功' : '验证失败'), /*#__PURE__*/_react["default"].createElement("p", null, (0, _jsCommonLibrary.isEmptyObj)({
      name: 'btc'
    }) ? '验证成功' : '验证失败'), /*#__PURE__*/_react["default"].createElement("p", null, (0, _jsCommonLibrary.isStr)('btc') ? '验证成功' : '验证失败'), /*#__PURE__*/_react["default"].createElement("p", null, (0, _jsCommonLibrary.isBool)(true) ? '验证成功' : '验证失败'), /*#__PURE__*/_react["default"].createElement("p", null, (0, _jsCommonLibrary.isArr)([1, 2, 3]) ? '验证成功' : '验证失败'), /*#__PURE__*/_react["default"].createElement("p", null, (0, _jsCommonLibrary.isFun)(function () {}) ? '验证成功' : '验证失败'), /*#__PURE__*/_react["default"].createElement("p", null, (0, _jsCommonLibrary.isPromise)(Promise.resolve()) ? '验证成功' : '验证失败'));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react'\nimport { isObj, isEmptyObj, isNum, isStr, isBool, isArr, isFun, isPromise } from 'js-common-library'\n\nexport default () => {\n  return <div>\n    <p>{isObj({ name: 'btc' }) ? '验证成功' : '验证失败'}</p>\n    <p>{isEmptyObj({ name: 'btc' }) ? '验证成功' : '验证失败'}</p>\n    <p>{isStr('btc') ? '验证成功' : '验证失败'}</p>\n    <p>{isBool(true) ? '验证成功' : '验证失败'}</p>\n    <p>{isArr([1, 2, 3]) ? '验证成功' : '验证失败'}</p>\n    <p>{isFun(function () {}) ? '验证成功' : '验证失败'}</p>\n    <p>{isPromise(Promise.resolve()) ? '验证成功' : '验证失败'}</p>\n  </div>\n}"}},"dependencies":{"react":{"version":"16.14.0"},"js-common-library":{"version":"1.0.6"}},"identifier":"data-type-demo"},
  },
  'data-type-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("C:/Users/86157/Desktop/\u5415\u80A5\u80A5\u7684github/npms/js-common-library/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("h1", null, "Hello dumi!");
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react'\n\nexport default () => <h1>Hello dumi!</h1>"}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"data-type-demo-1"},
  },
};
