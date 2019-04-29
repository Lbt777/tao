//导入
let express = require("express");
//执行
let app = express();
//跨域
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next()
})

//启动静态服务器
app.use(express.static("./static"))
//图片服务器
app.use(express.static("./picture"))
//数据列表
let movieArr = [
    {   //首页数据列表
        id:1,
        name:'「ZEALER 出品」OPPO Reno 系列上手',
        image:'http://127.0.0.1:3000/1.jpg',
        introduce:'作为 AWE 2019 开场的第一场大秀，索尼带来了第一款消费级的 8K 电视产品 Z9G，并且为 8K 升级了一整套的画面技术。作为 OLED 旗舰的 A9G 迎来全新外观升级，可以得到更好的壁挂效果。至于还有什么索尼“黑科技”，赶紧看看我们的现场报道！'
    },
    {
        id:2,
        name:'年度四大旗舰防水极限测评，王自如给你答案',
        image:'http://127.0.0.1:3000/2.jpg',
        introduce:'如今的几款高端旗舰手机，几乎都是清一色的IP68，那么它们各自到底有没有高下之分呢？一向追求极致的王自如，这回亲自带着四款防水旗舰到印尼海下实地比拼，那么到底谁会胜出呢？'
    },
    {
        id:3,
        name:'《车主为等model 3 狂放老王鸽子》',
        image:'http://127.0.0.1:3000/3.jpg',
        introduce:'#即刻行##让车回归生活# 匹配混乱、清仓大降价、铭牌信息错误、交付各种“狼来了”，尊贵的model3车主们，你还记得特斯拉的骚操作吗？本期车主实力吐槽，用亲身经历告诉你理想和现实的差距到底有多大！老王上路体验AP，吐槽大会秒变真香现场。抽奖环节，车主运气爆棚，成为即刻行第一个抽到特殊奖励的锦鲤，想知道特殊奖励是什么吗？赶紧点开视频看起来！关注@ZEALER中国 和@AUTO-ZEALER ，转发并评论本微博，我们将在4 月19日抽取10 位幸运观众瓜分1000 元红包。'
    },
    {
        id:4,
        name:'单摄幸存者！谷歌 Pixel 3 是否值得购买？',
        image:'http://127.0.0.1:3000/4.jpg',
        introduce:'2019 年手机摄像头最多已经达到 5 颗，但是靠算法稳扎稳打的谷歌的最新产品 Pixel 3 系类却依然采用了一个摄像头，一个摄像头和一堆摄像头到'
    },
    {
        id:5,
        name:'AMD 笔电时间！ Ryzen 3000 系列架构解析',
        image:'http://127.0.0.1:3000/5.jpg',
        introduce:'AMD 系列笔记本在架构的制作上已经达到了一定的水准，AMD 3000 系列移动端锐龙处理器将作为本期视频的主角，看看到底桌面端的处理器和'
    },
    {
        id:6,
        name:'【暴走报告】混合动力汽车如何分类？特斯拉发布新车Model Y',
        image:'http://127.0.0.1:3000/6.jpg',
        introduce:'混动汽车是现时最受欢迎的新能源汽车之一，那么市面上的混动汽车又有什么种类呢？未来还会出现什么新能源汽车呢？'
    },
    {
        id:7,
        name:'相机界行家间的巅峰对决！华为P30 Pro PK 谷歌 Pixel 3XL',
        image:'http://127.0.0.1:3000/7.jpg',
        introduce:'2019 SPY 机皇争霸赛小组赛第七场是华为 P30 Pro PK Google Pixel 3XL。本场相机界行家间的巅峰对决也成为机皇争霸赛目前最长的一期。对于节目的极致追求，也导致今天重新定义八点。本次我们通过大量数据和测试还原华为和谷歌在相机上的真正实力。一软一硬，单摄与四摄，50倍变焦有多玄乎？是什么成就了今天的华为？请大家投票给出你的选择！（ 投票截止日期：4 月18 日12:00 ）'
    },
    {
        id:8,
        name:'王自如上手体验三星 Galaxy Fold 折叠屏：9 年后又一次重磅开箱！',
        image:'http://127.0.0.1:3000/8.jpg',
        introduce:'三星 Galaxy Fold 折叠屏手机，王自如说这是 9 年前的 iMac 开箱之后，第二款让他怦然心动的产品。关于这款跨时代产品的更多详情，一'
    },
    {
        id:9,
        name:'拍照算法师承谷歌？华为 P30 Pro VS Google Pixel 3XL 大战来袭！',
        image:'http://127.0.0.1:3000/9.jpg',
        introduce:'2019 SPY 机皇争霸赛小组赛第七场是华为 P30 Pro PK Google Pixel 3XL。相机界行家间的巅峰对决大家期待已久。测试中发现华为拍照算法竟师承谷歌？一软一硬，单摄与四摄，50倍变焦有多玄乎？是什么成就了今天的华为？4 月 12 日晚 8 点 ZEALER 官网、小程序全新上线！'
    },
    {
        id:10,
        name:'「TECHMAN」 Pico G2 4K 上手体验',
        image:'http://127.0.0.1:3000/10.jpg',
        introduce:'在今年的 CES 上，Pico 推出了 Pico G2 4K 版 ，在 CES 展台我也给大家做了快速报道，不过因为时间有限，没办法详细的好好体验这款产品，现在 Pico G2 4K 版已经上市了，所以今天借助这个机会，来好好体验一下。'
    }
]
//监听
app.get("/list",function(req,res){
    res.send({
        status: 200,
        data: {
            lists: movieArr
        }
    })
})
app.listen(3000);
