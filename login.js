/*登录页面*/
$(function(){
	
	$('#login').click(function(){
		login();
	});
	
	
});
function keyDown(e){
	if(e.which== 13){
		login();
	}
}
function login(){
	var userName = $('#admin').val().trim();
	var pwd = $('#pwd').val().trim();
	if(userName==""||pwd==""){
		return;
	}
	$.ajax({
		type:"post",
		url:"/EIQP/user/login.do",
		dataType:"json",
		data:{"userName":userName,"pwd":pwd},
		success:function(result){
			var msg = result.data;
			if(msg.stauts==1){
				location.href="lookat.html";
			}
		},
		error:function(){
			alert("登陆异常！");
		}
	});
	
}