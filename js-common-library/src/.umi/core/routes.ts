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
          "updatedTime": 1626094521000,
          "componentName": "js-common-library",
          "slugs": [
            {
              "depth": 2,
              "value": "js-common-library",
              "heading": "js-common-library"
            }
          ],
          "title": "js-common-library"
        },
        "title": "js-common-library"
      },
      {
        "path": "/http",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/npms/js-common-library/example/http.md').default,
        "exact": true,
        "meta": {
          "filePath": "example/http.md",
          "updatedTime": 1626159265555,
          "slugs": [
            {
              "depth": 1,
              "value": "Http",
              "heading": "http"
            },
            {
              "depth": 2,
              "value": "默认配置",
              "heading": "默认配置"
            }
          ],
          "title": "Http"
        },
        "title": "Http"
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
