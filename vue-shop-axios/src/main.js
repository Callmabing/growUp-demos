import Vue from 'vue' /* 这里是引入vue文件 */
import router from './router/index'

// import VueResource from 'vue-resource'
// Vue.use(VueResource)

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
/* 设置为 false 以阻止 vue 在启动时生成生产提示。 */

new Vue({
  el: '#app',
  data(){
    return{

    }
  },
  router
})

Vue.filter('dCurrency', function(value){
  return '￥'+value
})
Vue.filter('dTofixed', function(value){
  var isNum = parseFloat(value);
  if( !isNum ){
      alert("请输入数字")
      return "请输入数字";
  } else {
    var value = Math.round(isNum*100)/100;
    var item = value.toString().split(".");
    if(item.length == 1){
        value = value.toString()+".00";
        return value;
    }
    if(item.length > 1){
      if(item[1].length < 2){
          value = value.toString()+"0";
      }
      return value;
    }
  }
})