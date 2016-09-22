/* 蜜芽列表页JS JQ动态效果与数据 */

$(function(){
	//用来计算加载次数的参数
	var loadTimes = 0;
	//初始加载的页数
	var pageNum = 1;
	// 全局配置			
	$.ajaxSetup({
		type:"get",
		url:"../data/goodslist.json",
		data:{pageNo:pageNum},
		dataType:'json',
		success:function(good){
			
			//遍历所有内容
			$.each(good,function(idx,item){
				//创建最外层div
				var $div = $('<div/>').addClass('goods');
				
				//创建div.goods-show
				$('<div/>').addClass('goods-show')
				.append("<a><img src='"+item.imgurl+"'/></a>").appendTo($div);
				//创建div.goods-price
				$('<div/>').addClass('goods-price')
				.append("<span class='p1'>"+item.dollar+"</span>")
				.append("<span class='p2'>"+item.newprice+"</span>")
				.append("<span class='p3'>"+item.oldprice+"</span>")
				.appendTo($div);
				//创建div.goods-text
				$('<div/>').addClass('goods-text')
				.append("<a>"+item.goodtext+"</a>").appendTo($div);
				
				//把最外层div加入页面
				$div.appendTo($('.DE-json'));							
			});						
		}
	});
	
	//$.ajax();
	$(window).on('scroll',function(){
				var scrollTop = $(window).scrollTop();

				// 懒加载：滚动《快到底部》的时候再加载
				if(scrollTop >= $(document).height() - $(window).height() - 250){
					pageNum++;					
					loadTimes++;
					if(pageNum>=4){
						pageNum = 1;
					}
					if(loadTimes <= 5){
						$.ajax({
							data:{pageNo:pageNum}
						});
					}else{
						alert("亲，小二已经把商品全部呈上来了");
						
						//.unbind：移除指定元素的事件处理器
						//此处用来移除window的滚动条事件
						$ (window).unbind ('scroll');
					}
				}
				
			});

			// 手动触发滚动事件
			$(window).trigger('scroll');
	
});