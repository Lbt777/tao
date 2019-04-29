$(function(){
    //表单验证
    $("#box").validate({
        rules: {

            phone: {
                required: true,
                phone: true
            },
            passwords: {
                required: true,
                passwords: true
            }
        }
    });
    //自定义参数校验
 $.validator.addMethod('phone',function(value,element){
 	var tel = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
   	return this.optional(element)||(tel.test(value));
 },'请输入正确的手机号')
    // $.validator.addMethod('user',function(value,element){
    //     var tel = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    //     return this.optional(element)||(tel.test(value));
    // },'限制同时包含中英文数字，6-20字符')
    $.validator.addMethod('passwords',function(value,element){
        var tel = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        return this.optional(element)||(tel.test(value));
    },'请输入正确的密码')


    $(".register").click(function(){
        $("#box").valid()
        var ss = $("#box").valid()
        if(ss == !false){
            window.location.href = "index.html";
        }
    })
    // var aa = "ss"
    // $("#slider1").slider({
    //     callback: function(result) {
    //         $("#result1").text(result);
    //         // console.log(result);
    //         if(result == true){
    //             aa = "z";
    //             $(".register").click(function(){
    //                 let qq=$("#demo").valid()
    //                 console.log(qq)
    //                 if(aa=="z" && qq==true){
    //                     alert("登陆成功")
    //                 }
    //             })
    //         }
    //     }
    //
    // });
    // $(".register").click(function(){
    //     let qq=$("#demo").valid()
    // })
})