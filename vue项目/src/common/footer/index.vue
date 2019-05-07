<template>
    <div class="foot auto">
        <div class="service-box">
            <div class="service-top">
                <div class="serviceimgbox">
                    <div class="serviceimg">
                        <img src="../../static/img/circular (5).png"/>
                    </div>
                    <h3>正品保证</h3>
                    <span>100%正品商城</span>
                </div>
                <div class="serviceimgbox">
                    <div class="serviceimg">
                        <img src="../../static/img/circular (1).png"/>
                    </div>
                    <h3>税费</h3>
                    <span>100%税费透明</span>
                </div>
                <div class="serviceimgbox">
                    <div class="serviceimg">
                        <img src="../../static/img/circular (2).png"/>
                    </div>
                    <h3>价格</h3>
                    <span>价格适中</span>
                </div>
                <div class="serviceimgbox">
                    <div class="serviceimg">
                        <img src="../../static/img/circular (3).png"/>
                    </div>
                    <h3>物流</h3>
                    <span>物流便捷</span>
                </div>
                <div class="serviceimgbox">
                    <div class="serviceimg">
                        <img src="../../static/img/circular (4).png"/>
                    </div>
                    <h3>售后</h3>
                    <span>保障交易安全</span>
                </div>
            </div>
            <div class="service-bottom">
                <div class="guarantee">
                    <ul>
                        <li class="tit">购物指南</li>
                        <li>购物流程</li>
                        <li>发票制度</li>
                        <li>账户管理</li>
                    </ul>
                    <ul>
                        <li class="tit">支付方式</li>
                        <li>货到付款</li>
                        <li>在线支付</li>
                    </ul>
                    <ul>
                        <li class="tit">订单服务</li>
                        <li>订单状态说明</li>
                        <li>自动取消订单</li>
                    </ul>
                    <ul>
                        <li class="tit">配送方式</li>
                        <li>配送范围及免邮标准</li>
                        <li>验货与签收</li>
                    </ul>
                    <ul>
                        <li class="tit">常见问题</li>
                        <li>常见问题整理汇集</li>
                        <li>投诉与监督</li>
                        <li>发票问题</li>
                    </ul>
                </div>
                <div class="phone">
                    <span class="tel">400-829-8366</span>
                    <span>周一至周日 8:00-18:00</span>
                    <span>全国统一服务热线</span>
                </div>
            </div>
        </div>
        <div class="copyright-box">
            <div class="copyright">
                <img src="../../static/img/copyright1_03.png" />
                <img src="../../static/img/copyright2_03.png"/>
                <a>版权所有： 西安国际陆港电子商贸有限公司&nbsp; 陕ICP备： 15013404号</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
@import "~@/static/css/index.less";
ul li{
    list-style: none;
    float: left;
    cursor: pointer;
}
.foot{
    width: 100%;
    height: 378px;
    border-top:1px solid @mainred;
}
.foot .service-box{
    width: 1200px;
    height: 318px;
    margin: auto;
}
.foot .copyright-box{
    height: 60px;
    width: 1200px;
    background-color: #343434;
    margin: auto;
    padding: 15px;
}
.copyright-box .copyright{
    height: 30px;
    width: 560px;
}
.copyright img{
    margin-right: 10px;
    width: 14%;
}
.copyright a{
    font-size: 12px;
    color: white;
    line-height: 30px;
    float: right;
}
.service-box .service-top{
    height: 145px;
    width: 100%;
}
.service-box .service-bottom{
    height: 173px;
    width: 100%;
    padding: 10px;
}
.serviceimgbox{
    height: 60px;
    width: 170px;
}
.serviceimgbox{
    float: left;
    margin-right: 80px;
    margin-top: 40px;
}
.serviceimgbox:nth-child(5){
    margin-right: 0;
}
.serviceimgbox .serviceimg{
    float: left;
    margin-right: 10px;
}
.serviceimgbox h3{
    font-size: 14px;
    margin-top: 12px;
    display: inline-block;
    width: 93px;
}
.serviceimgbox span{
    font-size: 14px;
    color: #666;
    margin-top: 10px;
}
.service-bottom .guarantee{
    height: 120px;
    width: 940px;
    float: left;
}
.guarantee ul{
    float: left;
    margin-right: 120px;
}
.guarantee ul:nth-child(5){
    margin-right: 0;
}
.guarantee ul li{
    clear: both;
    color: #333333;
    font-size: 12px;
    margin-bottom: 10px;
}
.guarantee .tit{
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 22px;
}
.service-bottom .phone{
    height: 120px;
    width: 240px;
    float: right;
    text-align: center;
}
.phone span{
    display: block;
    font-size: 14px;
}
.phone .tel{
    font-size: 24px;
    line-height: 65px;
}
</style>
