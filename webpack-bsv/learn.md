## webpack配置包-webpack-bsv
npm i webpack-bsv 
降低webpack学习成本，做到开箱即用，但是又可以灵活配置。

### 理想的webpack配置包  
1.开发环境：  
  A.块热替换(Hot Module Replacement 或 HMR)  
  B.source map,使用inline-source-map错误定位到源代码的某一行  
  C.文件省略后缀  
2.生产环境：  
  A.代码分割  
  B.Split CSS  
  C.缓存-contenthash  
  D.支持ts  

### 顶级配置项    
1.devtool  
方便开发的时候快速定位错误代码，不同的值会明显影响到构建(build)和重新构建(rebuild)的速度。

2.watch  
webpack 可以监听文件变化，当它们修改后会重新编译
默认是关闭的。
webpack-dev-server 和 webpack-dev-middleware 里 Watch 模式默认开启。

3.externals  
外部扩展，将一些直接走cdn的资源在打包中剔除，避免资源重复。

4.npx  
npx 想要解决的主要问题，就是调用项目内部安装的模块。

### loaders  
1.file-loader和url-loader  
file-loader: 将图片移动到打包后输出目录中  
url-laoder: 将图片转化成 base 编码字符串和 main.js 打包在一起

### 开发工具  
1.webpack watch mode  
2.webpack-dev-server
3.webpack-dev-middleware  
是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。  
```
const compiler = webpack(config);  
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
```

### 代码分割
```
入口起点：使用 entry 配置手动地分离代码。  
防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。  
webpack.optimize.CommonsChunkPlugin
动态导入：通过模块的内联函数调用来分离代码。     
  1.第一种，也是优先选择的方式是，使用符合 ECMAScript 提案 的 import() 语法。
  2.第二种，则是使用 webpack 特定的 require.ensure  
react里面一般都是用react官方的lazy()方法  
注意：使用代码分割后css就无法被提取到一个文件了
```

### babel转码  
Babel默认只转换新的JavaScript语法，而不转换新的API（BOM）。 例如，Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转译。 如果想使用这些新的对象和方法，则需要为当前环境提供一个polyfill  

1.babel-polyfill  
`会把所有垫片写在项目的最前面，多了110kb`  
2.babel-runtime(polyfill包) + babel-plugin-transform-runtime(工具)  
`项目里只需要下载一个包babel-plugin-transform-runtime就会自动帮你下babel-runtime包`  


npm link用来在本地项目和本地npm模块之间建立连接，可以在本地进行模块测试
