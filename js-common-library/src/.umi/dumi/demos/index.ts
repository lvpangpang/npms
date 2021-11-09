// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'storage-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("C:/Users/86157/Desktop/\u5415\u80A5\u80A5\u7684github/npms/js-common-library/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _jsCommonLibrary = require("js-common-library");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, "\u8F93\u51FA\u89C1\u63A7\u5236\u53F0", /*#__PURE__*/_react["default"].createElement("p", null, (0, _jsCommonLibrary.setStorage)('name', '吕肥肥')), /*#__PURE__*/_react["default"].createElement("p", null, (0, _jsCommonLibrary.setStorage)('info', {
      name: '吕肥肥',
      age: 8,
      sex: '男'
    })), /*#__PURE__*/_react["default"].createElement("p", null, (0, _jsCommonLibrary.setStorage)('arr', [1, 2, 3])), /*#__PURE__*/_react["default"].createElement("p", null, console.log((0, _jsCommonLibrary.getStorage)('name'))), /*#__PURE__*/_react["default"].createElement("p", null, console.log((0, _jsCommonLibrary.getStorage)('info'))), /*#__PURE__*/_react["default"].createElement("p", null, console.log((0, _jsCommonLibrary.getStorage)('arr'))), /*#__PURE__*/_react["default"].createElement("p", null, console.log((0, _jsCommonLibrary.removeStorage)('arr'))), /*#__PURE__*/_react["default"].createElement("p", null, console.log((0, _jsCommonLibrary.clearStorage)())));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react'\nimport { setStorage, getStorage, removeStorage, clearStorage } from 'js-common-library'\n\nexport default () => {\n  return (\n    <div>\n      输出见控制台\n      <p>{setStorage('name', '吕肥肥')}</p>\n      <p>{setStorage('info', { name: '吕肥肥', age: 8, sex: '男' })}</p>\n      <p>{setStorage('arr', [1,2,3])}</p>\n      <p>{console.log(getStorage('name'))}</p>\n      <p>{console.log(getStorage('info'))}</p>\n      <p>{console.log(getStorage('arr'))}</p>\n      <p>{console.log(removeStorage('arr'))}</p>\n      <p>{console.log(clearStorage())}</p>\n    </div>\n  )\n}"}},"dependencies":{"react":{"version":"16.14.0"},"js-common-library":{"version":"1.1.4"}},"identifier":"storage-demo"},
  },
};
