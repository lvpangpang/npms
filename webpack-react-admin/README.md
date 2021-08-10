# webpack-react-admin
快速搭建前端React项目，减少webpack配置学习成本  
1. 支持ts, tsx, js,jsx, less,css等文件类型的编译打包
2. 内置corejs3
3. 支持装饰器
4. 自动使用空闲端口启动服务
5. 支持css模块化
6. 对antd，antd-mobile库自动按需打包
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
    "start": "webpack-react-admin env=aa", // 这是设置环境为aa，然后在业务代码里面就可以通过__ENV__获取到当前环境的值
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
|   +-- ...
|   +-- index.js(入口文件，可以配置)
```

## 4.配置文件
允许自定义添加配置文件修改webpack配置,需要在根目录添加admin.config.js文件

## 5.配置项说明
属性|说明|备注
---|---|---
entry|入口配置|参考[webpack entry](https://www.webpackjs.com/configuration/entry-context/#entry)
output|输出配置| 参考[webpack output](https://www.webpackjs.com/configuration/output/)
publicPath|文件输出目录|参考[webpack publicPath](https://www.webpackjs.com/configuration/output/#output-publicpath)
alias|别名|默认@为src文件夹
devServer|开发服务器配置|参考[webpack devServer](https://www.webpackjs.com/configuration/dev-server/)
port|开发服务器端口号|默认值：1234
babelPlugins|babel插件配置|
