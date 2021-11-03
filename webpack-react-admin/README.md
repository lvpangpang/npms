# webpack-react-admin

快速搭建前端 React 项目，减少 webpack 配置学习成本

1. 支持 ts, tsx, js,jsx, less,css 等文件类型的编译打包
2. 内置 corejs3
3. 支持装饰器
4. 自动使用空闲端口启动服务
5. 支持 less 模块化,css 不做模块化
6. 对 antd，antd-mobile 库自动按需打包
7. 快捷配置多个环境变量
8. 支持拷贝静态文件到dist
9. 支持文件式路由
## 1.Install

```bash
npm install webpack-react-admin --D
```

## 2.命令

```bash
//package.json
{
  "script": {
    //开发
    "start": "webpack-react-admin env=aa name=lvfeifei", // 在业务代码里面就可以通过__ENV__.env获取到当前环境的值，__ENV__.name获取到name
    //打包
    "build": "webpack-react-admin build"
  }
}

```

## 3.目录结构

```
.
+-- public
|   +-- index.html(項目html模板，必須)
+-- src
|   +-- pages(必须有)
|       + -- index
|       + -- list
|   +-- index.js(入口文件，可以配置， 当启动文件式路由时不需要)
```

## 4.配置文件

允许自定义添加配置文件修改 webpack 配置,需要在根目录添加 admin.config.js 文件

## 5.配置项说明

| 属性         | 说明             | 备注  |
| ------------ | -------- | ---- |
| entry        | 入口配置 | 参考[webpack entry](https://www.webpackjs.com/configuration/entry-context/#entry) |
| publicPath   | 文件输出公共前缀 | 参考[webpack publicPath](https://www.webpackjs.com/configuration/output/#output-publicpath) |
| port         | 开发服务器端口号 | 默认值：3000   |
| babelPlugins | babel 插件配置   | |
| isCssModule | 是否开启less模块化   | css不走模块化 | 
| useCopyPublic | 是否开启拷贝public文件夹下面所有静态文件到dist | 默认不开启 |
| useFileRouter | 是否开启文件式路由 | 默认不开启 |

