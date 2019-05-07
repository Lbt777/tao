<template>
  <div id="app">
    <indexnav/>
    <!-- <router-view></router-view> -->
    <banner/>
    <bantab/>
    <spike/>
    <item/>
    <item/>
    <item/>
    <maybelove/>
    <footers/>
  </div>
</template>
<script>
import indexnav from './common/MainNav'
import banner from './common/Banner'
import bantab from './common/banner_tab'
import spike from './common/spike'
import item from './common/item'
import maybelove from './common/maybelove'
import footers from './common/footer'
export default {
  name: 'App',
  components: {
    indexnav,
    banner,
    bantab,
    spike,
    item,
    maybelove,
    footers
  }
}
</script>
// 主页样式引用
<style lang="less">
@import 'static/css/index.less';
</style>
