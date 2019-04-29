$('#fix').click(function(){
	var x = $("input[name=qux]")
	//如果$("input[name=qux]")有checked属性  则 true  没 则 false  实现反选
	if($(this).prop('checked')){
		// console.log(111)
		x.prop("checked",true)
		$('#go-on').click(function(){
			$(".change").css("display","none");
			$(".display").css("display","block");
			$(".em").css("display","none");
		})
	}else{
		x.prop("checked",false)
//		return false;
		console.log(222)
	}
	let width=document.body.clientWidth;
	// console.log(width);
	if(width<746){
		$("#go").click(function(){
			$("#demo").valid()
			let err = $("#demo").valid()
			if(err == true){
				$(".change").css("display","none");
				$(".display").css("display","none");
				$(".em").css("display","block");
			}else{
				return false
			}
		})
	}
})