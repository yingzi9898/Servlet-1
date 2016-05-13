
$(function(){
    //----关闭，取消
    $(document).on("click", ".close,.cancel", function() {
        //清空弹出页面中输入的内容
        //隐藏弹出页面
        $('.in').hide();
        //隐藏弹出的div
        $('.opacity_bg').hide();
    }),

    $(document).on("click", "#add_emp", function() {
       
        $('.can').load('./alert/alert_add.html', function(){
        	$('#saveEmp').click(function(){
        		addEmp();
        	});
        });
        $('.opacity_bg').show();
    })
    $('#showtime').click(function(e){
    	getHtml(e);
    });


});
//事件源获取点击元素 
function getHtml(e){
	//获取事件源
	var obj = e.srcElement || e.target;

	if(obj.className!="btn btn-info btn-sm"){
		return;
	}
	
	//获取input的祖父，通过祖父取td的值
	var tr = obj.parentNode.parentNode;
	

	//分别获取td里面的文本内容
	var emp_cn_no = $(tr).children().eq(0).html().trim();
	
	var name = $(tr).children().eq(1).html();
	var sex = $(tr).children().eq(2).html();
	var telephone = $(tr).children().eq(3).html();
	var e_mail = $(tr).children().eq(4).html();
	var dept_no = $(tr).children().eq(5).html().trim();
	
	var job = $(tr).children().eq(6).html();
	var  id = $(tr).data("ID")
	var list_dept="";
	//将中文转换成数字
	if(dept_no=="教学部"){
		list_dept="10";	
	}else if(dept_no=="职业发展部"){
		list_dept="20";
	}else if(dept_no=="就业部"){
		list_dept="30";
	}else if(dept_no=="咨询部"){
		list_dept="40";
	}
	
	var emp ={
		"emp_cn_no":emp_cn_no,
		"name":name,
		"sex":sex,
		"telephone":telephone,
		"e_mail":e_mail,
		"dept_no":list_dept,
		"job":job,
		"id":id
		}
	modify_emp(emp);
}

function modify_emp(emp){
    $('.can').load('./alert/alert_modi.html', function(){
    	 $("#modi_username").val(emp.name);
    	 $("#modi_Phone").val(emp.telephone);
    	 $("#modi_Email").val(emp.e_mail);
    	 $("#modi_Center").val(emp.emp_cn_no);
    	 $("#modi_department").val(emp.dept_no);
    	 $("#modi_position").val(emp.job);
    	$('#modifyEmp').click(function(){
    		updateEmp(emp.id);
    	});
    });
    $('.opacity_bg').show();
}
/*根据id修改员工信息*/
function updateEmp(id){	
	var name = $("#modi_username").val();
	var telephone = $("#modi_Phone").val();
	var e_mail = $("#modi_Email").val();
	var emp_cn_no =  $("#modi_Center").val();
	var dept_no = $("#modi_department").val();
	var job =  $("#modi_position").val();
	$.ajax({
		type:"post",
		url:"/EIQP/Emp/update.do",
		dataType:"json",
		data:{
		"emp_cn_no":emp_cn_no,
		"name":name,
		"telephone":telephone,
		"e_mail":e_mail,
		"job":job,
		"dept_no":dept_no,
		"id":id
		},
		success:function(result){
			 $('.in').hide();
			 $('.opacity_bg').hide();
			 $("#showtime").empty();
			 loadAllEmp();
		},
		error:function(){
			alert("修改失败！！");
		}
	});
}

/*添加新员工信息*/
function addEmp(){
	var name=$('#add_Username').val();
	var telephone= $('#add_Phone').val();
	var sex = checked("RadioOptions").value;
	var e_mail =$('#add_Email').val();
	var emp_cn_no = $("#add_Center  option:selected").val();
	var dept_no = $('#add_department option:selected').val();
	var job = $('#add_position').val();
	//需要再页面对数据进行判断
	if(name==""){
		alert("用户名不能为空");
		return;
	}		
	$.ajax({
		type:"post",
		url:"/EIQP/Emp/addEmp.do",
		dataType:"json",
		data:{
		 	"name":name,
		 	"telephone":telephone,
		 	"sex":sex,
		 	"e_mail":e_mail,
		 	"emp_cn_no":emp_cn_no,
		 	"dept_no":dept_no,
		 	"job":job,
		 	},
		success:function(result){
			$('.in').hide();
			$('.opacity_bg').hide();
			$("#showtime").empty();
			loadAllEmp();
		},
		error:function(){
			alert("添加失败！");
		}
		
	});	
}
/*检查被选中的radio从而返回value值*/
function checked(name){
		var radios = document.getElementsByName(name);
		for(var i =0;i<radios.length;i++){
			if(radios[i].checked){
				return radios[i];
		}
	}	
}






