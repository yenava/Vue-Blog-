import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

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

Vue.filter("snippet",function(value){
  return value.slice(0,100) + " ..."
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
