$(function(){
	//表单验证
	$("#demo").validate({
		rules: {
			user: {
				required: true,
				user: true,
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				phone: true
			},
			passwords: {
				required: true,
				passwords: true
			},
			password_again: {
				equalTo: "#passwords"
			},
			confirm: {
				required: true,
				confirm: true
			}
		}
	});
	//自定义参数校验
//  $.validator.addMethod('phone',function(value,element){
//  	var tel = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
//    	return this.optional(element)||(tel.test(value));
//  },'请输入正确的手机号')
    $.validator.addMethod('user',function(value,element){
    	var tel = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    	return this.optional(element)||(tel.test(value));
    },'限制同时包含中英文数字，6-20字符')
    $.validator.addMethod('passwords',function(value,element){
    	var tel = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
      	return this.optional(element)||(tel.test(value));
    },'请输入正确格式的密码')
    
    
    $(".register").click(function(){
    	$("#demo").valid()
    })
	var aa = "ss"
	$("#slider1").slider({
		callback: function(result) {
			$("#result1").text(result);
			// console.log(result);
			if(result == true){
			  aa = "z";
			  $(".register").click(function(){
				let qq=$("#demo").valid()
				console.log(qq)
				if(aa=="z" && qq==true){
                    window.location.href = "Login.html";
				}
			})
			}
		}
	});
    let width=document.body.clientWidth;
    console.log(width);
    if(width<640){
        $(".register").click(function(){
            $("#demo").valid()
            var ss = $("#demo").valid()
            if(ss == !false){
                window.location.href = "Login.html";
            }
        })
    }
	$(".register").click(function(){
		let qq=$("#demo").valid()
	})

    
})