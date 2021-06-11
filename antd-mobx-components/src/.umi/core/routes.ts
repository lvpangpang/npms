// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/86157/Desktop/吕肥肥的github/npms/antd-mobx-components/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/button","title":"Button","meta":{}}]}},"locales":[],"navs":{},"title":"antd-mobx","mode":"doc"},
      ...props,
    }),
    "routes": [
      {
        "path": "/button",
        "component": require('../../../example/button.md').default,
        "exact": true,
        "meta": {
          "filePath": "example/button.md",
          "updatedTime": 1623381103050,
          "slugs": [
            {
              "depth": 2,
              "value": "Button",
              "heading": "button"
            }
          ],
          "title": "Button"
        },
        "title": "Button"
      }
    ],
    "title": "antd-mobx"
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
