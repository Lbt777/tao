// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import banner from '../Banner'
import bantab from '../banner_tab'
Vue.use(VueRouter)
// 导出
export default new VueRouter({
  // 匹配路由
  // path路由访问地址
  // component 当前路由显示的组件
  routes: [{
    path: '/',
    component: banner
  },
  {
    path: '/list',
    component: bantab
  }]
})
