<template>
<div class="auto">
    <ul class="left-list fl">
        <li>
            <div class="triangle icon fr"></div>
            母婴用品
        </li>
        <li>
            <div class="triangle icon fr"></div>
            美容护肤
        </li>
        <li>
            <div class="triangle icon fr"></div>
            生活家居
        </li>
        <li>
            <div class="triangle icon fr"></div>
            休闲食品
        </li>
        <li>
            <div class="triangle icon fr"></div>
            进口食品
        </li>
        <li>
            <div class="triangle icon fr"></div>
            轻奢名品
        </li>
    </ul>
    <div class="banner fl">
       <div class="block">
          <el-carousel height="300px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
    </div>
    <div class="right-list fr">
        <div class="information">
            <span>文章资讯</span>
            <div class="more fr">更多 ></div>
        </div>
    <ul class="article">
        <li>【公告】此处是文章标题，此处是文章标题此处是文章标题</li>
        <li>【公告】此处是文章标题，此处是文章标题此处是文章标题</li>
        <li>【公告】此处是文章标题，此处是文章标题此处是文章标题</li>
        <li>【公告】此处是文章标题，此处是文章标题此处是文章标题</li>
        <li>【公告】此处是文章标题，此处是文章标题此处是文章标题</li>
        <li>【公告】此处是文章标题，此处是文章标题此处是文章标题</li>
        <li>【公告】此处是文章标题，此处是文章标题此处是文章标题</li>
        <li>【公告】此处是文章标题，此处是文章标题此处是文章标题</li>
    </ul>
    </div>
</div>
</template>
<script>
export default{
}
</script>
<style scoped lang="less">
@import "~@/static/css/index.less";
/*组件样式*/
a{
  color: #000;
  text-decoration: none;
}
li{
  list-style: none;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.icon{
  display: inline-block;
  background: url(../../static/img/icon.png) no-repeat;
}
.icon.triangle{
  width: 6px;
  height: 12px;
  background-position: -56px 0;
  margin-top: 20px;
}
.left-list{
  width: 25%;
  background: @mainred;
}
.left-list li{
  padding: 0 40px 0 40px;
  height: 50px;
  border-bottom: 1px solid @vicered;
  font-size: 14px;
  line-height: 50px;
  text-align: left;
  color: #fff;
}
.banner{
  width: 55%;
}
.right-list{
  height: 300px;
  width: 20%;
  border: 1px solid @ash;
}
.information{
  padding: 0 20px 0 20px;
  height: 40px;
  border-bottom: 1px solid @ash;
  line-height: 40px;
  background: #fff9f5;
}
.information span{
  font-weight: 900;
}
.article{
  height: 260px;
}
.article li{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 30px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
@media(min-width: 768px) and (max-width: 1110px){
}
@media(max-width: 767px){
}
</style>
