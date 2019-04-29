 //判断屏幕宽度 小屏执行
$(function(){
	var windowWidth = $(window).width();
	    if(windowWidth <= 768){
	        slidewidth()
	    }else{
	    	return false
	    }
	
	function slidewidth (){
		var slide = $('.slide');
		var aArr = $('.slide a');
		var imgWidth = 300;
		console.log(imgWidth)
//		slide.width(aArr.length*300+15+'px')
	}
})
	