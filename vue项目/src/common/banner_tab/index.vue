<template>
<div class="auto">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="推荐商品" name="first">
            <div class="box">
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
        </el-tab-pane>
        <el-tab-pane label="促销商品" name="second">
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
        </el-tab-pane>
        <el-tab-pane label="新品推荐" name="third">
            <div class="box">
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
                        <span>￥77.77</span>
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
        </el-tab-pane>
    </el-tabs>
</div>
</template>
<script>
import demo from '@/static/img/demo.png'
export default{
  data () {
    return {
      demo: demo,
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="less">
@import "~@/static/css/index.less";
@import "./index.less";
.el-tabs .el-tabs__header{
    height: 60px;
    margin: 0;
}
.el-tabs__item{
    height: 60px;
    line-height: 60px;
}
</style>
