<template>
    <div class="auto">
        <div class="text">
            <div class="title">特价秒杀</div>
            <div class="surplus">本场剩余</div>
        </div>
        <div class="list-box">
            <div class="list-lf">
                <div class="item">
                    <div class="imgs">
                        <img :src="demo">
                    </div>
                    <div class="item-text">
                        <span>实物商品名称实物商品名称实物商品名称实物商品名称实物商品名称</span>
                        <div class="price">
                            <span>￥123.4</span>
                            <a>￥999.9</a>
                        </div>
                        <el-progress :percentage="80" color="#fe9373"></el-progress>
                        <div class="btn">立即购买</div>
                    </div>
                </div>
                <div class="item">
                    <div class="imgs">
                        <img :src="demo">
                    </div>
                    <div class="item-text">
                        <span>实物商品名称实物商品名称实物商品名称实物商品名称实物商品名称</span>
                        <div class="price">
                            <span>￥123.4</span>
                            <a>￥999.9</a>
                        </div>
                        <el-progress :percentage="80" color="#fe9373"></el-progress>
                        <div class="btn">立即购买</div>
                    </div>
                </div>
                <div class="item">
                    <div class="imgs">
                        <img :src="demo">
                    </div>
                    <div class="item-text">
                        <span>实物商品名称实物商品名称实物商品名称实物商品名称实物商品名称</span>
                        <div class="price">
                            <span>￥123.4</span>
                            <a>￥999.9</a>
                        </div>
                        <el-progress :percentage="80" color="#fe9373"></el-progress>
                        <div class="btn">立即购买</div>
                    </div>
                </div>
                <div class="item">
                    <div class="imgs">
                        <img :src="demo">
                    </div>
                    <div class="item-text">
                        <span>实物商品名称实物商品名称实物商品名称实物商品名称实物商品名称</span>
                        <div class="price">
                            <span>￥123.4</span>
                            <a>￥999.9</a>
                        </div>
                        <el-progress :percentage="80" color="#fe9373"></el-progress>
                        <div class="btn">立即购买</div>
                    </div>
                </div>
                <div class="item">
                    <div class="imgs">
                        <img :src="demo">
                    </div>
                    <div class="item-text">
                        <span>实物商品名称实物商品名称实物商品名称实物商品名称实物商品名称</span>
                        <div class="price">
                            <span>￥123.4</span>
                            <a>￥999.9</a>
                        </div>
                        <el-progress :percentage="80" color="#fe9373"></el-progress>
                        <div class="btn">立即购买</div>
                    </div>
                </div>
                <div class="item">
                    <div class="imgs">
                        <img :src="demo">
                    </div>
                    <div class="item-text">
                        <span>实物商品名称实物商品名称实物商品名称实物商品名称实物商品名称</span>
                        <div class="price">
                            <span>￥123.4</span>
                            <a>￥999.9</a>
                        </div>
                        <el-progress :percentage="80" color="#fe9373"></el-progress>
                        <div class="btn">立即购买</div>
                    </div>
                </div>
            </div>
            <div class="list-ri">
                <div class="all">
                    <h2>查看全部</h2>
                    <a></a>
                    <h3>限时购</h3>
                    <div class="btn">点击进去</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import demo from '@/static/img/demo.png'
export default{
  data () {
    return {
      demo: demo
    }
  }
}
</script>
<style scoped lang="less">
@import "~@/static/css/index.less";
@import "./index.less";
.auto{
    margin-top: 20px;
}
</style>
