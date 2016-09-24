/* 蜜芽登录页面专用JS代码块 */

$(function(){
	
	//获取cookie
	var str = getCookie("myarr");
	var ostr=JSON.parse(str);
	
	console.log(ostr[0]);
	var oPassword=ostr[0].oPassword;
	console.log(oPassword);
	
	var i=ostr[0].i;
	console.log(i);
	var oUsername=ostr[0].oUsername;
	
	
	var $btn = $('#register-submit');
	var oCheck = $(".auto-enter");
	var nowUsername = $("#login-username");
	var nowpassword = $("#login-password");
		
	//判定加载完cookies则自动进行登录
	if (oUsername && oPassword)
	{
		nowUsername.val(oUsername);
		nowpassword.val(oPassword);
		
		alert("自动登录成功！");
	}
	
	//登录按钮点击事件
	$btn.click(function(){		
		//判定是否选中自动登录
		if(oCheck.is(':checked'))
		{		
			alert("登陆成功并已经存储信息，下次自动登录");
			var myobj={};
			var myarr=[];					
			var i = 1;
			myobj.i=i;
			myobj.oUsername=$('#login-username').val();
			myobj.oPassword=$('#login-password').val();							
			myarr.push(myobj);
			
			//把处理好的数据储存到cookie
			addCookie('myarr',JSON.stringify(myarr),7);
		}
		else
		{
			alert("登陆成功");
		}		
	})
	
})