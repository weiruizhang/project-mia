/* 购物车页面 */


//<div class="items">
//				<div class="inputwarp it-check">
//					<input class="c-check" type="checkbox" />
//				</div>
//				<div class="it-img">
//					<a href="">
//						<img src="img/cart-small.jpg" alt="商品图片" />
//					</a>
//				</div>
//				<div class="it-p l">
//					<p class="it-p1">
//						<a href="#">宝宝蛋 袋鼠妈妈婴儿第一套视觉翻翻书 全4册</a>
//					</p>
//					<p class="it-p2">商品编号：1165196</p>
//				</div>
//				<div class="it-size l">156*176mm 24开</div>
//				<div class="it-price l">
//					<p>14.00</p>
//					<p class="oldprice">21.60</p>
//				</div>
//				<div class="it-num l">
//					<span class="minus"></span>
//					<input class="it-num1" type="text" value="1" readonly="readonly" />
//					<span class="plus"></span>
//				</div>
//				<div class="it-total l">
//					<span>&yen;14</span>
//				</div>
//				<div class="it-del l">
//					<a href="">删除</a>
//				</div>
//			</div>




$(function(){
	var str = getCookie("arr");
	var ostr=JSON.parse(str);
	//var ostr[0];
	console.log(ostr[0]);
	//把中文编码转码为中文
	var oproduct=unescape(ostr[0].product);
	console.log(oproduct);
	
	var oimg=ostr[0].img;
	console.log(ostr[0].img);
	
	console.log(oimg);
	var i=ostr[0].i;
	console.log(i);
	var oprice=ostr[0].price;
	var num=ostr[0].num;
	
	//建立页面结构
	var cMain = $('.c-main');
	//创建最外层div
	var $div = $('<div/>').addClass("items");
	
	//内部结构
	//按钮
	$('<div/>').addClass('inputwarp it-check').append('<input class="c-check" type="checkbox" />').appendTo($div);
	//图片
	$('<div/>').addClass('it-img').append("<a><img src='"+oimg+"'/></a>").appendTo($div);
	//商品名
	$('<div/>').addClass('it-p l').append("<p class='it-p1'><a>"+oproduct+"<a/></p>").appendTo($div);
	//规格
	$('<div/>').addClass('it-size l').html("156*176mm 24开").appendTo($div);
	//价格
	$('<div/>').addClass('it-price l').append("<p>"+oprice+"</p>").appendTo($div);
	//数量
	$('<div/>').addClass('it-num l').append('<span class="minus"></span><input class="it-num1" type="text" value="1" readonly="readonly" /><span class="plus"></span>').appendTo($div);
	//总价
	$('<div/>').addClass('it-total l').append("<p>&yen;"+oprice+"</p>").appendTo($div);
	//删除
	$('<div/>').addClass('it-del l').append("<a>删除</a>").appendTo($div);

	//把最外层div加入页面
	$div.appendTo(cMain);

})





