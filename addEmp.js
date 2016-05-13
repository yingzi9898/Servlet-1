$(function(){
		/* 页面加载后设置各个中心的value属性 */
		setValue();
		/* 页面加载后直接显示全部员工 */
		loadAllEmp();	
	    // 给外层div绑定事件
	    $("#hit").click(function(e){
	        getV(e);
	    });
	   
});
/* 设置value值，由于本人太懒了不想动态加载数据故此预先设置元素的value值，方便获取 */
function setValue(){
	$("#bazx").val("1001");
	$("#btzx").val("1002");
	$("#lgzx").val("1003");
	//给部门号添加
	$('.jxb').val("10");
	$('.zxb').val("40");
	$('.zyb').val("20");
	$('.jyb').val("30");
}
/* 页面加载后默认所有员工信息 */
function loadAllEmp(){
		var list_dept="";
		$.ajax({
				type:"post",
				url:"/EIQP/Emp/findEmp.do",
				dataType:"json",
				data:{},
				success:function(result){
				var list = result.data;
				$(list).each(function(i){
					/* 此处修改代码 */
					if(list[i].dept_no=='10'){
						list_dept="教学部";	
					}else if(list[i].dept_no=='20'){
						list_dept="职业发展部";
					}else if(list[i].dept_no=='30'){
						list_dept="就业部";
					}else{
						list_dept="咨询部";
					}
					var str="<tr>"+
					"<td> "+list[i].emp_cn_no+"</td>"+
					"<td> "+list[i].name+"</td>"+
					"<td> "+list[i].sex+"</td>"+
					"<td> "+list[i].telephone+"</td>"+
					"<td> "+list[i].e_mail+"</td>"+
					"<td> "+list_dept+"</td>"+
					"<td> "+list[i].job+"</td>"+
					"<td>"+
	               "<input type='button' value='修改' class='btn btn-info btn-sm' /> &nbsp;"+ 
	                "<input type='button' value='删除' class='btn btn-danger btn-sm delete_btn' onclick='delete_emp(this);' />"+
					"</td>"+"</tr>";
	               var $tr = $(str);
				   $tr.data("ID",list[i].id);
				
				$("#showtime").append($tr);
					});
					},
					});
			      }
/* 冒泡点击事件 */
function getV(e){
    // 获取事件源
    var obj = e.srcElement || e.target;
    //处理不是A标签的点击事件
    if(obj.nodeName!="A") {
        return;
    }
    /*获取当前点击节点的父标签类名为className 为active 就显示此中心所有员工信息*/
    if(obj.parentNode.className=="active") {
       var emp_cn_no = obj.parentNode.value;

       centerEmp(emp_cn_no);
    }else{
    	//获取当前连接的父节点
    	var li = obj.parentNode;
    	var dept_no = li.value;
   
    	//获取当前节点的ul的第一个li的value值
    	var ul=li.parentNode;
    	var emp_cn_no =$(ul).find('li').first().val();
    	//调用部门员工方法
    	depteEmp(emp_cn_no,dept_no);
    }
}
/* 加载中心员工 */
function centerEmp(center_no){
	$("#showtime").empty();
	$.ajax({
		type:"post",
		url:"/EIQP/Emp/centerEmp.do",
		dataType:"json",
		data:{"center_no":center_no},
		success:function(result){
		var list = result.data;
		$(list).each(function(i){
			/* 此处修改代码 */
			if(list[i].dept_no=='10'){
				list_dept="教学部";	
			}else if(list[i].dept_no=='20'){
				list_dept="职业发展部";
			}else if(list[i].dept_no=='30'){
				list_dept="就业部";
			}else{
				list_dept="咨询部";
			}
			var str="<tr>"+
			"<td> "+list[i].emp_cn_no+"</td>"+
			"<td> "+list[i].name+"</td>"+
			"<td> "+list[i].sex+"</td>"+
			"<td> "+list[i].telephone+"</td>"+
			"<td> "+list[i].e_mail+"</td>"+
			"<td> "+list_dept+"</td>"+
			"<td> "+list[i].job+"</td>"+
			"<td>"+
           "<input type='button' value='修改' class='btn btn-info btn-sm' /> &nbsp;"+ 
            "<input type='button' value='删除' class='btn btn-danger btn-sm delete_btn' onclick='delete_emp(this);' />"+
            "</td>"+"</tr>";
           var $tr = $(str);
		   $tr.data("ID",list[i].id);
		$("#showtime").append($tr);
			});
			},
		});
}
/* 按照中心部门员工显示 员工信息*/
function depteEmp(emp_cn_no,dept_no){
	$("#showtime").empty();
	var list_dept="";
	$.ajax({
		tyep:"post",
		url:"/EIQP/Emp/deptEmp.do",
		dataType:"json",
		data:{"emp_cn_no":emp_cn_no,"dept_no":dept_no},
		success:function(result){
			var list = result.data;
			$(list).each(function(i){
				/* 此处修改代码 */
				if(list[i].dept_no=='10'){
					list_dept="教学部";	
				}else if(list[i].dept_no=='20'){
					list_dept="职业发展部";
				}else if(list[i].dept_no=='30'){
					list_dept="就业部";
				}else{
					list_dept="咨询部";
				}
				var str="<tr>"+
				"<td> "+list[i].emp_cn_no+"</td>"+
				"<td> "+list[i].name+"</td>"+
				"<td> "+list[i].sex+"</td>"+
				"<td> "+list[i].telephone+"</td>"+
				"<td> "+list[i].e_mail+"</td>"+
				"<td> "+list_dept+"</td>"+
				"<td> "+list[i].job+"</td>"+
				"<td>"+
               "<input type='button' value='修改' class='btn btn-info btn-sm' /> &nbsp;"+ 
                "<input type='button' value='删除' class='btn btn-danger btn-sm delete_btn' onclick='delete_emp(this);' />"+
                "</td>"+"</tr>";
               var $tr = $(str);
			   $tr.data("ID",list[i].id);	
			   $("#showtime").append($tr);
			});
		}	
	});
}
/*根据id删除员工信息*/
function delete_emp(tag){

	var $tr=$(tag).parent().parent();
	var id=$tr.data("ID");
	
	$.ajax({
	url:"/EIQP/Emp/deleteEmp.do",
	type:"post",
	data:{"id":id},
	dataType:"json",
	success:function(result){
	    $tr.remove();
	},
	error:function(){
		alert("删除失败！");
	}
});
}





