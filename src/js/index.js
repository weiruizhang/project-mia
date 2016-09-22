/* 首页JS JQ动态代码块 */

function allMove(i){
	var imgurl = 'url(img/banner'+i+'.jpg) no-repeat center';
	$(".banner").css({"background":imgurl,"opacity":"0"});
}
$(function(){
	var timer = null;
	var i = 1;
	function time(){
		//清除之前定时器
		clearInterval(timer);
		timer = setInterval(function(){	
			i++;			
			//i到达最高值则转换为最小值0
			i = (i == 5) ? i=1 : i;									
			//根据i的数值执行运动函数
			$(".runboxNum").find('i').eq(i-1).css({"background-color":"deeppink"}).siblings('i').css({"background-color":"#fff"});
			$(".banner").animate({
				opacity:'1'
				},300,allMove(i));
		},3000)				
	}

	$(".runboxNum").on('click','i',function(){
		i = $(this).index();
		console.log("这是"+i)
	});
	//执行定时运动函数
	time();
})