import Vue from 'vue'
import VueRouter from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import Detail from '../pages/goodsDetail.vue'
import Msg from '../components/Message.vue'


Vue.use(VueRouter)  /**使用路由 */

const routes = [
  {
    path: '/',
    component: resolve => require(['../pages/home.vue'], resolve),
    meta: {
      title: 'home'
    }
  },
  {
    path: '/msg',
    component: Msg
  },
  {
    path: '/detail',
    component: Detail,
    children: [
      {
          path:'msg',
          component: Msg
      }
    ]
  }
]

export default new VueRouter({
  routes
})

//1. 定义路由组件  （这里的路由组件是引入的）
//2. 定义路由 const routes = [{path:'/foo,component: Foo}]
//3. 创建 router 实例，然后传 `routes` 配置 const router - new VueRouter({ routes })
//4. 创建和挂载根实例 在接收路由界面 一般是main.js页面 new Vue({ router })