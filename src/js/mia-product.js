$(function(){
	
	//使用放大镜效果插件
	var $small = $(".small");
	var $big = $(".big");
	
	//初始化
	$big.find('img').eq(0).addClass('showimg')
	.siblings('img').addClass('hideimg');
	
	//创建点击事件
	$small.on('click','img',function(){		
		var idx = $(this).index();
		
		//随着点击事件发生大小图的变化
		$small.find('img').eq(idx).addClass('border')
		.siblings('img').removeClass('border');
		$big.find('img').removeClass().eq(idx).addClass('showimg')
		.siblings('img').addClass('hideimg');
		
		//实现放大镜效果
		$("#zoom-"+idx).elevateZoom({});
	});
})	