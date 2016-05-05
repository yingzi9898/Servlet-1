//警告框
<head>
<script type="text/javascript">
function disp_alert()
{
alert("再次向您问好！在这里，我们向您演示" + '\n' + "如何向警告框添加折行。")
}
</script>
</head>
<body>
<input type="button" onclick="disp_alert()" value="显示警告框?????" />
</body>
</html>

//带有折行的警告框
<html>
<head>
<script type="text/javascript">
function disp_alert()
{
alert("再次向您问好！在这里，我们向您演示" + '\n' + "如何向警告框添加折行。")
}
</script>
</head>
<body>
<input type="button" onclick="disp_alert()" value="显示警告框?????" />
</body>
</html>

//确认框
<html>
<head>
<script type="text/javascript">
function show_confirm()
{
var r=confirm("Press a button!");
if (r==true)
  {
  alert("You pressed OK!");
  }
else
  {
  alert("You pressed Cancel!");
  }
}
</script>
</head>
<body>
<input type="button" onclick="show_confirm()" value="Showx" />
</body>
</html>

//提示框
<html>
<head>
<script type="text/javascript">
function disp_prompt()
  {
  var name=prompt("请输入您的名字","Bill Gates")
  if (name!=null && name!="")
    {
    document.write("你好！" + name + " 今天过得怎么样？")
    }
  }
</script>
</head>
<body>
<input type="button" onclick="disp_prompt()" value="显示提示" />
</body>
</html>
















