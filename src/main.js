import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import VueResource from 'vue-resource'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './plugins/element.js'
import { Button, Select,Row,Col,Form,Input,Tabs } from 'element-ui'
import Element from 'element-ui'
import './element-variables.scss'
import axios from 'axios'

// 注册axios到全局
Vue.prototype.$axios = axios;

// axios全局配置
axios.defaults.baseURL='http://120.78.173.109:3000/'
// axios.defaults.baseURL='http://127.0.0.1:3000/'
// axios.defaults.headers.common['Authorization'] = 'token'
// axios.defaults.headers.post['Content-type'] = 'application/urlencode'
// axios.defaults.headers.get['Accepts'] = 'application/json'
Vue.use(Element)
Vue.config.productionTip = false

//注册全局element组件
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Element)
Vue.use(Form)
Vue.use(Input)
Vue.use(Tabs)

// 使用插件，需要install的要用Vue.use,像axios就不需要
Vue.use(VueResource)// 异步加载的库
Vue.use(mavonEditor) //markdown编辑器插件

// 自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    // toString(16)将随机数转换为16进制的字符串。
    // 输出结果为随机16进制字符串
    el.style.color = "#" + Math.random().toString(16).slice(2,8)
  }
})


Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value=='wide'){
      el.style.maxWidth = "1260px";
    }else if(binding.value=='narrow'){
      el.style.maxWidth = "800px";
    }
    if (binding.arg=='column'){
      el.style.padding="20px";
    }
  }
})

// Vue.filter("toUpperCase",function(value){
//   return value.toUpperCase();
// });

// Vue.filter("turnMarkdown",function(value){
//   var valued =  value.slice(0,100) + " ..."
//   return marked(valued)
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
