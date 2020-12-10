
### 安装
`npm i @femessage/js-cookie -S`

`yarn add @femessage/js-cookie`

### usage
解决不同环境token隔离, 同环境不同应用token共享的问题, 
需要设置环境变量: `process.env.VUE_APP_ENV` 或 `process.env.ENV`
```js
import {cookie} from '@femessage/js-cookie';

// 写
cookie.set('name', 'value', { expires: 7, path: '' })
// 读
cookie.get('name', 'value')
// 删
cookie.remove('name')
```
