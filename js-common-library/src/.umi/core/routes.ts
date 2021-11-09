// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/86157/Desktop/吕肥肥的github/npms/js-common-library/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('C:/Users/86157/Desktop/吕肥肥的github/npms/js-common-library/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('C:/Users/86157/Desktop/吕肥肥的github/npms/js-common-library/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('C:/Users/86157/Desktop/吕肥肥的github/npms/js-common-library/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('C:/Users/86157/Desktop/吕肥肥的github/npms/js-common-library/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/npms/js-common-library/README.md').default,
        "exact": true,
        "meta": {
          "locale": "en-US",
          "order": null,
          "filePath": "README.md",
          "updatedTime": 1635132407000,
          "componentName": "js-common-library",
          "slugs": [
            {
              "depth": 1,
              "value": "js-common-library",
              "heading": "js-common-library"
            }
          ],
          "title": "js-common-library"
        },
        "title": "js-common-library"
      },
      {
        "path": "/data-type",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/npms/js-common-library/example/data-type.md').default,
        "exact": true,
        "meta": {
          "filePath": "example/data-type.md",
          "updatedTime": 1635217480000,
          "slugs": [
            {
              "depth": 1,
              "value": "Data-Type",
              "heading": "data-type"
            },
            {
              "depth": 2,
              "value": "用例",
              "heading": "用例"
            }
          ],
          "title": "Data-Type"
        },
        "title": "Data-Type"
      },
      {
        "path": "/http",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/npms/js-common-library/example/http.md').default,
        "exact": true,
        "meta": {
          "filePath": "example/http.md",
          "updatedTime": 1635217480000,
          "slugs": [
            {
              "depth": 1,
              "value": "Http",
              "heading": "http"
            },
            {
              "depth": 2,
              "value": "用例",
              "heading": "用例"
            }
          ],
          "title": "Http"
        },
        "title": "Http"
      },
      {
        "path": "/js-bridge",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/npms/js-common-library/example/js-bridge.md').default,
        "exact": true,
        "meta": {
          "filePath": "example/js-bridge.md",
          "updatedTime": 1635217480000,
          "slugs": [
            {
              "depth": 1,
              "value": "Js-bridge",
              "heading": "js-bridge"
            },
            {
              "depth": 2,
              "value": "用例",
              "heading": "用例"
            }
          ],
          "title": "Js-bridge"
        },
        "title": "Js-bridge"
      },
      {
        "path": "/math",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/npms/js-common-library/example/math.md').default,
        "exact": true,
        "meta": {
          "filePath": "example/math.md",
          "updatedTime": 1635217480000,
          "slugs": [
            {
              "depth": 1,
              "value": "Math",
              "heading": "math"
            },
            {
              "depth": 2,
              "value": "用例",
              "heading": "用例"
            }
          ],
          "title": "Math"
        },
        "title": "Math"
      },
      {
        "path": "/object",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/npms/js-common-library/example/object.md').default,
        "exact": true,
        "meta": {
          "filePath": "example/object.md",
          "updatedTime": 1635217480000,
          "slugs": [
            {
              "depth": 1,
              "value": "Object",
              "heading": "object"
            },
            {
              "depth": 2,
              "value": "用例",
              "heading": "用例"
            }
          ],
          "title": "Object"
        },
        "title": "Object"
      },
      {
        "path": "/storage",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/npms/js-common-library/example/storage.md').default,
        "exact": true,
        "meta": {
          "filePath": "example/storage.md",
          "updatedTime": 1635217480000,
          "slugs": [
            {
              "depth": 1,
              "value": "Storage",
              "heading": "storage"
            },
            {
              "depth": 2,
              "value": "用例",
              "heading": "用例"
            }
          ],
          "title": "Storage"
        },
        "title": "Storage"
      },
      {
        "path": "/url",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/npms/js-common-library/example/url.md').default,
        "exact": true,
        "meta": {
          "filePath": "example/url.md",
          "updatedTime": 1635217480000,
          "slugs": [
            {
              "depth": 1,
              "value": "Url",
              "heading": "url"
            },
            {
              "depth": 2,
              "value": "用例",
              "heading": "用例"
            }
          ],
          "title": "Url"
        },
        "title": "Url"
      }
    ],
    "title": "js-common-library",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
