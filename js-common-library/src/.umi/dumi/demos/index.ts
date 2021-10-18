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
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react'\nimport { isObj, isEmptyObj, isNum, isStr, isBool, isArr, isFun, isPromise } from 'js-common-library'\n\nexport default () => {\n  return <div>\n    <p>{isObj({ name: 'btc' }) ? '验证成功' : '验证失败'}</p>\n    <p>{isEmptyObj({ name: 'btc' }) ? '验证成功' : '验证失败'}</p>\n    <p>{isStr('btc') ? '验证成功' : '验证失败'}</p>\n    <p>{isBool(true) ? '验证成功' : '验证失败'}</p>\n    <p>{isArr([1, 2, 3]) ? '验证成功' : '验证失败'}</p>\n    <p>{isFun(function () {}) ? '验证成功' : '验证失败'}</p>\n    <p>{isPromise(Promise.resolve()) ? '验证成功' : '验证失败'}</p>\n  </div>\n}"}},"dependencies":{"react":{"version":"16.14.0"},"js-common-library":{"version":"1.0.7"}},"identifier":"data-type-demo"},
  },
  'http-demo': {
    component: function DumiDemo() {
  var _react = _interopRequireWildcard(require("react"));

  var _jsCommonLibrary = require("js-common-library");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  _jsCommonLibrary.http.defaults.timeout = 300;

  _jsCommonLibrary.http.setConfig({
    baseURL: 'https://qa01web-gateway.lingxichuxing.com',
    headers: {
      contextId: 'pms',
      'skio-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJib3NzX2F1dGhfaXNzdWVyIiwiY29udGV4dElkIjoicG1zIiwiZXhwIjoxNjM0MTM4ODQxLCJ1c2VySWQiOjY1fQ.upPeT0OknNQe2L1Hi136lHwSfgFtMSRwWQMhPKlY5'
    },
    transformResult: function transformResult(result) {
      var _ref = result || {},
          code = _ref.code,
          data = _ref.data,
          msg = _ref.msg; // 正常业务数据


      if (code === 200) {
        return data;
      } // 非正常业务情况提示错误msg
      // alert(msg)
      // 暴露出错误信息，有些特殊业务场景需要判断不同的错误码做对应的处理


      return Promise.reject(result);
    },
    error: function error(e) {
      console.log(e.message);
      console.log('错误：' + e);
    }
  });

  var _default = function _default() {
    (0, _react.useEffect)(function () {
      _jsCommonLibrary.http.get('/saas/v1/basic/dataTypes', {
        // baseURL: 'https://www.baidu.com',
        params: {
          name: '吕肥肥',
          age: 18
        }
      }).then(function (data) {
        console.log('业务方接受到的数据：', data);
      })["catch"](function (err) {
        console.log('业务方接受到的错误', err);
      });

      _jsCommonLibrary.http.post('/saas/v1/basic/dataTypes', {
        name: '吕肥肥',
        age: 18
      }, {
        exId: '123'
      }).then(function (data) {
        console.log('业务方接受到的数据：', data);
      })["catch"](function (err) {
        console.log('业务方接受到的错误', err);
      });
    }, []);
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "http\u914D\u7F6E\u5B9E\u4F8B"), /*#__PURE__*/_react["default"].createElement("p", null, "\u8BF7\u67E5\u770B\u6E90\u4EE3\u7801\u4EE5\u53CA\u63A7\u5236\u53F0\u8F93\u51FA"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React, { useEffect } from 'react'\nimport { http } from 'js-common-library'\nhttp.defaults.timeout = 300;\nhttp.setConfig({\n  baseURL: 'https://qa01web-gateway.lingxichuxing.com',\n  headers: {\n    contextId: 'pms',\n    'skio-token':\n      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJib3NzX2F1dGhfaXNzdWVyIiwiY29udGV4dElkIjoicG1zIiwiZXhwIjoxNjM0MTM4ODQxLCJ1c2VySWQiOjY1fQ.upPeT0OknNQe2L1Hi136lHwSfgFtMSRwWQMhPKlY5',\n  },\n  transformResult(result) {\n    const { code, data, msg } = result || {}\n    // 正常业务数据\n    if (code === 200) {\n      return data\n    }\n    // 非正常业务情况提示错误msg\n    // alert(msg)\n    // 暴露出错误信息，有些特殊业务场景需要判断不同的错误码做对应的处理\n    return Promise.reject(result)\n  },\n  error(e) {\n    console.log(e.message)\n    console.log('错误：' + e)\n  },\n})\n\nexport default () => {\n  useEffect(() => {\n    http\n      .get('/saas/v1/basic/dataTypes', {\n        // baseURL: 'https://www.baidu.com',\n        params: {\n          name: '吕肥肥',\n          age: 18,\n        },\n      })\n      .then((data) => {\n        console.log('业务方接受到的数据：', data)\n      })\n      .catch((err) => {\n        console.log('业务方接受到的错误', err)\n      })\n    http\n      .post(\n        '/saas/v1/basic/dataTypes',\n        {\n          name: '吕肥肥',\n          age: 18,\n        },\n        {\n          exId: '123',\n        }\n      )\n      .then((data) => {\n        console.log('业务方接受到的数据：', data)\n      })\n      .catch((err) => {\n        console.log('业务方接受到的错误', err)\n      })\n  }, [])\n  return (\n    <div>\n      <p>http配置实例</p>\n      <p>请查看源代码以及控制台输出</p>\n    </div>\n  )\n}"}},"dependencies":{"react":{"version":"16.14.0"},"js-common-library":{"version":"1.0.7"}},"identifier":"http-demo"},
  },
  'object-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("C:/Users/86157/Desktop/\u5415\u80A5\u80A5\u7684github/npms/js-common-library/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _jsCommonLibrary = require("js-common-library");

  var _default = function _default() {
    console.log((0, _jsCommonLibrary.omitValues)({
      name: '吕肥肥',
      age: undefined,
      sex: '',
      you: null
    }));
    return /*#__PURE__*/_react["default"].createElement("div", null, "object");
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react'\nimport { omitValues } from 'js-common-library'\n\nexport default () => {\n  console.log(\n    omitValues({\n      name: '吕肥肥',\n      age: undefined,\n      sex: '',\n      you: null,\n    })\n  )\n  return <div>object</div>\n}"}},"dependencies":{"react":{"version":"16.14.0"},"js-common-library":{"version":"1.0.7"}},"identifier":"object-demo"},
  },
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
    })), /*#__PURE__*/_react["default"].createElement("p", null, (0, _jsCommonLibrary.setStorage)('arr', [1, 2, 3])), /*#__PURE__*/_react["default"].createElement("p", null, console.log((0, _jsCommonLibrary.getStorage)('name'))), /*#__PURE__*/_react["default"].createElement("p", null, console.log((0, _jsCommonLibrary.getStorage)('info'))), /*#__PURE__*/_react["default"].createElement("p", null, console.log((0, _jsCommonLibrary.getStorage)('arr'))));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react'\nimport { setStorage, getStorage } from 'js-common-library'\n\nexport default () => {\n  return (\n    <div>\n      输出见控制台\n      <p>{setStorage('name', '吕肥肥')}</p>\n      <p>{setStorage('info', { name: '吕肥肥', age: 8, sex: '男' })}</p>\n      <p>{setStorage('arr', [1,2,3])}</p>\n      <p>{console.log(getStorage('name'))}</p>\n      <p>{console.log(getStorage('info'))}</p>\n      <p>{console.log(getStorage('arr'))}</p>\n    </div>\n  )\n}"}},"dependencies":{"react":{"version":"16.14.0"},"js-common-library":{"version":"1.0.7"}},"identifier":"storage-demo"},
  },
};
