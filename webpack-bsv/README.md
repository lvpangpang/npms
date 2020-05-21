# Webpack-bsv  
快速搭建前端React项目，减少webpack配置学习成本  

## Install
```bash
npm install webpack-bsv --D
```
## Usage

### 命令
```bash
//package.json
{
  "script": {
    //开发
    "start": "bsv",
    //打包
    "build": "bsv build"
  }
}
```

### Spa项目
#### 目录结构
```
.
+-- public
|   +-- index.html
+-- src
|   +-- ...
|   +-- index.(js|jsx)
```
#### 入口文件
```jsx harmony
//src/index.js
import React from 'react'
import ReactDOM from 'react-dom'

const Home=()=><div>Home</div>

ReactDOM.render(<Home/>, document.querySelector('#root'))
```
### Mpa项目(暂不支持)
#### 目录结构
```
.
+-- src
|   +-- ...
|   +-- activity
|       +-- index.(js|jsx)
|   +-- home
|       +-- index.(js|jsx)

```
#### 入口文件
```jsx harmony
import React from 'react'
import ReactDOM from 'react-dom'

const Home=()=><div>Home</div>

ReactDOM.render(<Home/>, document.querySelector('#root'))
```
### 配置文件
允许自定义添加配置文件修改webpack配置
需要在根目录添加.bsvrc.js文件

#### 属性
属性|说明|备注
---|---|---
entry|入口配置(只限Spa项目)|参考[webpack entry](https://www.webpackjs.com/configuration/entry-context/#entry)
output|输出配置| 参考[webpack output](https://www.webpackjs.com/configuration/output/)
publicPath|文件输出目录|参考[webpack publicPath](https://www.webpackjs.com/configuration/output/#output-publicpath)
isExtractCss|是否提取公共样式|
alias|别名|默认@为src文件夹
splitChunks|分包策略|参考[webpack splitChunks](https://webpack.js.org/plugins/split-chunks-plugin/#root)
chunks|js分包模块|配合entry 
define|定义项目全局变量|参考[webpack define](https://webpack.js.org/plugins/define-plugin/#root)
devServer|开发服务器配置|参考[webpack devServer](https://www.webpackjs.com/configuration/dev-server/)
title|输出页面的title|
port|开发服务器端口号|默认值：3000
