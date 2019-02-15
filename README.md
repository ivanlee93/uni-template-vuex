# uni-app
使用 Vue.js 开发跨平台应用的前端框架 http://uniapp.dcloud.io

# uni-template-vuex
基于uni-app的自定义模板，封装的了vuex自动注册，和flyio请求，目前支持微信小程序和支付宝小程序和H5

## 官方HX方式
同步/下载项目后，把项目目录拖入 HBuilderX 中即可运行体验。

## 通过cli方式
``` bash
1、全局安装vuecli
$ npm install -g @vue/cli
2、创建uni-app
$ vue create -p dcloudio/uni-preset-vue my-project 
3、此时，会提示选择项目模板，选择默认模板，把本模板的内容替换到官方模板src目录中
   运行并发布uni-app
$ npm run dev:%PLATFORM%
$ npm run build:%PLATFORM%
4、%PLATFORM% 可取值：h5 mp-alipay mp-weixin
```

## 特点
* 兼容多个平台
* 根据[vuex官方推荐](https://vuex.vuejs.org/zh-cn/intro.html)，将background API封装到actions中，具体用法可在代码里查看。
* 自动注册store的modules，多人协作开发不需要担心代码冲突，不需要每个store.js都要import引入。

### 平台支持
* H5
* 微信小程序
* 支付宝小程序

### 通用全局，根据webpack的require.context及store的registerModule方法来自动注册store的modules
>在src下增加store文件夹。具体目录如下
``` js
  |__src
    |__store
      |__modlues
        |__counter.js
        |__demo.js
      |__index.js
```

>index.js的代码如下：
``` js
// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({})

const storeContext = require.context('@/store/modules', true, /\.js$/)

storeContext.keys().forEach((modules) => {
  store.registerModule(modules.replace(/(^\.\/)|(\.js$)/g, ''), storeContext(modules).default)
})

Vue.prototype.$store = store
export default store

```

>src/main.js代码如下：
``` js
import Vue from 'vue'
import App from './App'
import IboxPlugin from '@/plugins/ibox'
import store from '@/store'

Vue.use(IboxPlugin)
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()

```

> 在页面中使用如下

在单独的页面store.js中增加了namespaced:true。需要根据文件名来区分state及commit，这样子不同的store中的方法重名也不需要担心出错了。具体使用可以加actions，使用vuex的mapState、mapActions辅助函数方便使用。

``` js
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      count: state => state.counter.count
    })
    // 或者
    ...mapState('counter', [
      'count'
    ])
  },
  methods: {
   ...mapActions('counter', [
      'increment',
      'decrement'
    ])
  }
}
```

## 注意事项
* config.js中配置与后台规定的表示响应成功的变量（或注释掉相应代码片段），否则会导致接口返回异常。
* H5端本地调试需注意跨域问题，[参考：Chrome 调试跨域问题解决方案](http://ask.dcloud.net.cn/article/35267)
