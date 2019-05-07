<template>
    <div class="auto">
        <div class="texts">
            <div class="title">猜你喜欢</div>
        </div>
        <div class="box">
            <div class="list imgs-w">
                <div class="imgs">
                    <img :src="demo"/>
                </div>
                <div class="text imgs">
                    <a class="title">实物商品标题实物商品标题实物商品标题</a>
                    <span>￥99.99</span>
                </div>
            </div>
            <div class="list imgs-w">
                <div class="imgs">
                    <img :src="demo"/>
                </div>
                <div class="text imgs">
                    <a class="title">实物商品标题实物商品标题实物商品标题</a>
                    <span>￥88.88</span>
                </div>
            </div>
            <div class="list imgs-w">
                <div class="imgs">
                    <img :src="demo"/>
                </div>
                <div class="text imgs">
                    <a class="title">实物商品标题实物商品标题实物商品标题</a>
                    <span>￥88.88</span>
                </div>
            </div>
            <div class="list imgs-w">
                <div class="imgs">
                    <img :src="demo"/>
                </div>
                <div class="text imgs">
                    <a class="title">实物商品标题实物商品标题实物商品标题</a>
                    <span>￥88.88</span>
                </div>
            </div>
            <div class="list imgs-w">
                <div class="imgs">
                    <img :src="demo"/>
                </div>
                <div class="text imgs">
                    <a class="title">实物商品标题实物商品标题实物商品标题</a>
                    <span>￥88.88</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import demo from '@/static/img/demo.png'
export default {
  data () {
    return {
      demo: demo
    }
  }
}
</script>
<style lang="less" scoped>
@import "~@/static/css/index.less";
@import "../banner_tab/index.less";
.texts .title{
    float: left;
    color: @mainred;
    font-size: 24px;
    height: 70px;
    line-height: 70px;
    font-weight: 900;
}
.texts{
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid #ff2d52;
}
</style>
