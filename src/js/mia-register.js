/* 蜜芽注册页面专用JS代码块 */

//$(function(){
//	
//	//写入cookie
//	$.cookie("username","zhangweirui",{
//	    expires:10,//有效日期
//	    path:"/",//cookie的路径
//	});
//	console.log($.cookie("username"));
//	
//})

$(function(){
	//表单验证
	$("#loginform").checkForm();
	
	//把数据储存到cookie
	var $btn = $('#register-submit');
	$btn.click(function(){
		
		alert("进行注册");
		var myobj={};
		var myarr=[];
		
		var i = 1;
		myobj.i=i;
		myobj.oUsername=$('#login-username').val();
		myobj.oPassword=$('#confirm-password').val();							
		myarr.push(myobj);
		addCookie('myarr',JSON.stringify(myarr),7);
	})
})