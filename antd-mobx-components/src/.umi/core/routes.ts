// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/86157/Desktop/吕肥肥的github/npms/antd-mobx-components/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('C:/Users/86157/Desktop/吕肥肥的github/npms/antd-mobx-components/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('C:/Users/86157/Desktop/吕肥肥的github/npms/antd-mobx-components/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/src/builtins/Previewer.tsx');
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
    "wrappers": [require('C:/Users/86157/Desktop/吕肥肥的github/npms/antd-mobx-components/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('C:/Users/86157/Desktop/吕肥肥的github/npms/antd-mobx-components/node_modules/dumi-theme-default/src/layout.tsx').default],
    "routes": [
      {
        "path": "/",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/npms/antd-mobx-components/README.md').default,
        "exact": true,
        "meta": {
          "locale": "en-US",
          "title": "antd-mobx-components",
          "order": null
        },
        "title": "antd-mobx-components"
      },
      {
        "path": "/button",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/npms/antd-mobx-components/example/button.md').default,
        "exact": true,
        "meta": {
          "filePath": "example/button.md",
          "updatedTime": 1623747210000,
          "slugs": [
            {
              "depth": 2,
              "value": "Button",
              "heading": "button"
            },
            {
              "depth": 3,
              "value": "默认配置",
              "heading": "默认配置"
            },
            {
              "depth": 3,
              "value": "跳转按钮",
              "heading": "跳转按钮"
            }
          ],
          "title": "Button"
        },
        "title": "Button"
      },
      {
        "path": "/search-bar",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/npms/antd-mobx-components/example/searchBar.md').default,
        "exact": true,
        "meta": {
          "filePath": "example/searchBar.md",
          "updatedTime": 1624259116000,
          "slugs": [
            {
              "depth": 2,
              "value": "SearchBar",
              "heading": "searchbar"
            },
            {
              "depth": 3,
              "value": "默认配置",
              "heading": "默认配置"
            },
            {
              "depth": 3,
              "value": "个性化配置",
              "heading": "个性化配置"
            }
          ],
          "title": "SearchBar"
        },
        "title": "SearchBar"
      },
      {
        "path": "/select",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/npms/antd-mobx-components/example/select.md').default,
        "exact": true,
        "meta": {
          "filePath": "example/select.md",
          "updatedTime": 1623747210000,
          "slugs": [
            {
              "depth": 2,
              "value": "Select",
              "heading": "select"
            },
            {
              "depth": 3,
              "value": "默认配置",
              "heading": "默认配置"
            },
            {
              "depth": 3,
              "value": "全选",
              "heading": "全选"
            }
          ],
          "title": "Select"
        },
        "title": "Select"
      },
      {
        "path": "/table",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/npms/antd-mobx-components/example/table.md').default,
        "exact": true,
        "meta": {
          "filePath": "example/table.md",
          "updatedTime": 1624953006000,
          "slugs": [
            {
              "depth": 2,
              "value": "Table",
              "heading": "table"
            },
            {
              "depth": 3,
              "value": "默认配置",
              "heading": "默认配置"
            }
          ],
          "title": "Table"
        },
        "title": "Table"
      }
    ],
    "title": "components",
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
