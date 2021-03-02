## React-eslint-config
专门为react项目编写的eslint配置，支持ts，tsx

### 使用
编辑器需要先安装对应的插件
Eslint，StyleLint

```
npm i react-eslint-config --D
```
mkdir .eslintrc.js
```
const { eslint } = require('react-eslint-config');
module.exports = eslint();
// 支持ts，tsx项目
module.exports = eslint({ts: true});
```
mkdir .stylelintrc.js
```
const { stylelint } = require('react-eslint-config')
module.exports = stylelint;
```




