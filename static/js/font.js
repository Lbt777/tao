var width = document.documentElement.clientWidth;
var font = ''
if(width >= 768) {
	font = 100
}else {
	font  = width*100/750
}
document.documentElement.style.fontSize = font + 'px'
