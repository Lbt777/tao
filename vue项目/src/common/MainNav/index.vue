<template>
<div class="container">
  <div class="top-nav auto">
    <ul class="fl">
      <li>设为首页</li>
      <li class="transY">&nbsp;|&nbsp;</li>
      <li>收藏本站</li>
    </ul>
    <ul class="fr">
      <li>路人甲</li>
      <li class="transY">&nbsp;|&nbsp;</li>
      <li>退出登录</li>
      <li class="transY">&nbsp;|&nbsp;</li>
      <li>我的订单</li>
    </ul>
  </div>
  <div class="search auto">
    <div class="logo fl">
      <img :src="logo"/>
    </div>
    <div class="search-box">
      <div class="input">
        <div class="icon searchicon"></div>
        <input type="text" placeholder="UGG 香奈儿">
        <div class="btn">搜索</div>
      </div>
      <div class="textlink">
        <a href="#">香奈儿</a>
        <span>|</span>
        <a href="#">奶粉</a>
        <span>|</span>
        <a href="#">UGG</a>
        <span>|</span>
        <a href="#">家居</a>
      </div>
    </div>
  </div>
  <div class="mainnav">
    <ul class="nav auto">
      <li class="active">
        <div class="icon allicon"></div>
        全部商品分类
      </li>
      <li>首页</li>
      <li>积分商城</li>
      <li>团购</li>
      <li>秒杀</li>
    </ul>
  </div>
</div>
</template>
<script>
import logo from '@/static/img/logo.png'
export default{
  data () {
    return {
      logo: logo
    }
  }
}
</script>
<style scoped lang="less">
@import "~@/static/css/index.less";
/*组件样式*/
a{
  color: #000;
  text-decoration: none;
}
input{
  border: none;
  width: 78%;
  padding: 7px 0 7px 7px;
}
input:focus{
   outline:none;/*聚焦边框不变蓝 */
}
li{
  list-style: none;
  float: left;
}
.transY{
  transform: translateY(-1px);
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.container{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
.top-nav{
  height: 35px;
  width: 100%;
  background: #f7f7f7;
  border-bottom: 1px solid #ccc;
}
.top-nav ul{
  line-height: 35px;
}
.search{
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  height: 130px;
}
.icon{
  display: inline-block;
  background: url(../../static/img/icon.png) no-repeat;
}
.icon.searchicon{
  width: 14px;
  height: 15px;
  background-position: 0 0;
  transform: translateY(2px);
}
.search-box{
  display: inline-block;
  width: 50%;
  padding-top: 20px;
}
.input{
  border: 2px solid @mainred;
  position: relative;
  text-align: left;
  padding-left: 10px;
}
.btn{
  height: 100%;
  width: 25%;
  color: #fff;
  line-height: 30px;
  text-align: center;
  background: @mainred;
  position: absolute;
  top: 0;
  right: 0;
}
.textlink{
  float: left;
  color: #333;
}
.textlink a{
  color: #333;
}
.mainnav{
  background: @mainred;
  overflow: hidden;
}
.nav li{
  color: #fff;
  width: 15%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.nav li:first-child{
  width: 25%;
}
.active{
  background-color: @vicered;
}
.icon.allicon{
  width: 18px;
  height: 14px;
  background-position: -26px 0;
  transform: translateY(2px);
  margin-right: 5px;
}
@media(min-width: 768px) and (max-width: 1110px){
  .auto{
    padding-left: 70px;
    padding-right: 70px
  }
  .nav li{
    width: 15%;
  }
  .nav li:first-child{
    width: 30%;
  }
}
@media(max-width: 767px){
  .search{
    height: 90px;
  }
  .top-nav{
    padding: 0;
  }
  .search{
    padding:10px;
  }
  .search{
    padding-right: 0;
  }
  .nav li{
    display: none;
  }
  .nav li.active:first-child{
    background: @mainred;
    text-align: left;
    display: block;
    width: 100%;
  }
}
</style>
