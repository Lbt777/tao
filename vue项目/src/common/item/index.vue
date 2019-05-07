<template>
<div class="auto">
    <div class="texts">
        <div class="title">1F 母婴用品</div>
    </div>
    <div class="box">
        <div class="box-left">
            <div class="imgs">
                <img :src="demo">
            </div>
            <div class="introduce">
                <h2>鲜货先到辣妈首选</h2>
                <h3>新尝新价123元起</h3>
            </div>
            <div class="circular">
                <div>营养辅食</div>
                <div class="wash">洗护用品</div>
                <div>营养辅食</div>
                <div>营养辅食</div>
                <div>营养辅食</div>
                <div>营养辅食</div>
            </div>
        </div>
        <div class="box-center">
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
        <div class="box-right">
            <span class="new">最新热卖</span>
            <div class="list-ri">
                <div class="imgs">
                    <img :src="demo"/>
                </div>
                <div class="imgs-title">
                    <div class="title">实物商品名称实物商品名称实物商品名称</div>
                    <span>￥123.4</span>
                    <a>￥999.9</a>
                </div>
            </div>
            <div class="list-ri">
                <div class="imgs">
                    <img :src="demo"/>
                </div>
                <div class="imgs-title">
                    <div class="title">实物商品名称实物商品名称实物商品名称</div>
                    <span>￥123.4</span>
                    <a>￥999.9</a>
                </div>
            </div>
            <div class="list-ri">
                <div class="imgs">
                    <img :src="demo"/>
                </div>
                <div class="imgs-title">
                    <div class="title">实物商品名称实物商品名称实物商品名称</div>
                    <span>￥123.4</span>
                    <a>￥999.9</a>
                </div>
            </div>
            <div class="list-ri">
                <div class="imgs">
                    <img :src="demo"/>
                </div>
                <div class="imgs-title">
                    <div class="title">实物商品名称实物商品名称实物商品名称</div>
                    <span>￥123.4</span>
                    <a>￥999.9</a>
                </div>
            </div>
            <div class="list-ri">
                <div class="imgs">
                    <img :src="demo"/>
                </div>
                <div class="imgs-title">
                    <div class="title">实物商品名称实物商品名称实物商品名称</div>
                    <span>￥123.4</span>
                    <a>￥999.9</a>
                </div>
            </div>
            <div class="list-ri">
                <div class="imgs">
                    <img :src="demo"/>
                </div>
                <div class="imgs-title">
                    <div class="title">实物商品名称实物商品名称实物商品名称</div>
                    <span>￥123.4</span>
                    <a>￥999.9</a>
                </div>
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
@import "../banner_tab/index.less";
.auto{
    margin-top: 20px;
}
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
.box-left{
    width: 21%;
    float: left;
    height: 100%;
    padding: 30px 20px 30px 20px;
    background: #d4e9fa;
}
.imgs,.imgs img{
    width: 100%;
    height: 100%;
}
.box-center{
    width: 60%;
    height: 100%;
    overflow: hidden;
    float: left;
}
.box-right{
    width: 19%;
    height: 100%;
    overflow: hidden;
    padding: 0 16px 10px 16px;
    float: left;
    border: 1px solid #E4E7ED;
}
.introduce{
    color: #fff;
    text-align: center;
}
.introduce h2{
    font-size: 24px;
}
.introduce h3{
    font-size: 18px;
}
.circular{
    margin-top: 29px;
    height: 126px;
}
.circular div{
    float: left;
    background: #fff;
    border-radius: 50%;
    text-align: center;
    height: 50%;
    width: 31.3333%;
    line-height: 63px;
    margin-right: 5px;
    margin-bottom: 5px;
}
.circular div:nth-child(3n){
    margin-right: 0
}
.circular .wash{
    background: #ffe9ed;
    color: @mainred;
}
.imgs-w{
    width: 25%;
    height: 50%;
}
.imgs-w:last-child{
    border-right: none;
}
.imgs .title{
    display: -webkit-box;
    white-space: normal;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.box-right .new{
    width: 100%;
    border-bottom: 2px solid #E4E7ED;
    color: #000;
    height: 33px;
}
.list-ri{
    padding: 8px 5px 8px 5px;
    border-bottom: 1px dashed #E4E7ED;
    width: 100%;
    height: 16.666%;
    overflow: hidden;
}
.list-ri .imgs{
    width: 30%;
    float: left;
    padding: 0;
}
.imgs-title{
    width: 70%;
    float: left;
    padding-left: 5px;
}
.imgs-title a{
    color: #666;
    text-decoration: line-through;
}
.imgs-title .title{
    margin-bottom: 2px;
}
.list-ri:last-child{
    border: none;
    padding-bottom: 0;
}
</style>
