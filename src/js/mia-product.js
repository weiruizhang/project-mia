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
	
	
	//把商品加入购物车
	//获取加入购物车按钮
	//removeCookie("arr");
	var addGoods = $("#addGoods");
//	var str = getCookie("arr");
	var str = "";
	var arr = [];
	if (str != "")
	{
		// 说明之前 cookie 中有商品的内容
		// 取出来转换成数组
		arr = eval(str);
	}
	//创建点击事件
	addGoods.click(function(){
		var oPrice = $("#new");
			// 这个商品的信息
		var oProduct = $("#goodstitle").html();
		var oProductcode = escape(oProduct);
		//var oCode = $("#oCode");
		var oImg = $("#oImg").attr('src');
		
		var obj = {};

		obj.product = oProductcode;
		obj.price = oPrice.html();
		obj.img = oImg;
		
		// 将创建好的商品添加到数组中
		arr.push(obj);
		
		// cookie 的名字是 arr, 内容是数组中的商品，过期时间是7天以后
			addCookie("arr",JSON.stringify(arr), 7);

			alert("添加成功");		
	});
	
	$("#alove").click(function(){
		alert(unescape());
	})
})
