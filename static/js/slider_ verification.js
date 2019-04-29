
//判断注册按钮状态
//先判断validate插件
//再判断滑块及同意协议
//var item = $('.item-1').children()
$(function(){
	$("#slider1").slider({
        callback: function(result) {
            $("#result1").text(result);
            console.log(result)
            $("#go").click(function(){
                $("#demo").valid()
                var err = $("#demo").valid()
                if(err == true&&result==true){
                    $(".change").css("display","none");
                    $(".display").css("display","none");
                    $(".em").css("display","block");
                }else{
                    return false
                }
//		    	console.log($("#demo").valid())
            })
        }
    });
    // let width=document.body.clientWidth;
    // console.log(width)
    // if(width<746){
//         let width=document.body.clientWidth;
//         console.log(width)
//         $("#slider1").slider({
//             callback: function(result) {
//                 return false;
//                 $("#result1").text(result);
//                 console.log(result)
//                 $("#go").click(function(){
//                     $("#demo").valid()
//                     let err = $("#demo").valid()
//                     if(err == true){
//                         $(".change").css("display","none");
//                         $(".display").css("display","none");
//                         $(".em").css("display","block");
//                     }else{
//                         return false
//                     }
// //		    	console.log($("#demo").valid())
//                 })
//             }
//         });
// 	}
	//判断validate插件$("#registerForm").valid();返回值
	$("#demo").validate({
		rules: {
			email: {
				required: true,
				email: true
			}
		}
	});
	$.validator.addMethod('email',function(value,element){
    	var tel = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    	return this.optional(element)||(tel.test(value));
    },'请输入正确的邮箱')
	
	
	$("#go").click(function(){
    	$("#demo").valid()
    })
	
})
