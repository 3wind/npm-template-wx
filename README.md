# npm-template-wx
### 发布前准备

#### 1、注册npm，

登录npm官网,注册npm：https://www.npmjs.com/

#### 2、开发环境登录npm

登录前注意：检查本地配置是否为npm官方连接，不要使用镜像

```
npm config get registry

#如果不是官方镜像https://registry.npmjs.org/,可使用npm set或者nrm修改registry
```

登录npm

```
npm login
```

#### 3、发布

在要发布项目的目录下执行，发布前要检查包名在npm是否已存在

```
npm publish
```

#### 4、移除用来测试的包

```
npm unpublish npm-template-wx --force
```



## npm-template-wx使用说明

### 导入
```
npm i npm-template-wx
```

注意 ，package.json中使用type为"module"

```json
"type": "module"
```

### 使用

```javascript
import { delayExec } from 'npm-template-wx'

delayExec(() => {
  console.log('5s')
}, 5000)
```

