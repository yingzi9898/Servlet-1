<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JavaScript常用表单相应demo</title>
<script  Language="JavaScript">
function FrontPage_Form1_Validator(theForm)
{
  if (theForm.info1.value == "")
  {
    alert("请在 \"用户名\" 域中输入值。");
    theForm.info1.focus();
    return (false);
  }
  if (theForm.info1.value.length < 1)
  {
    alert("在 \"用户名\" 域中，请至少输入 1 个字符。");
    theForm.info1.focus();
    return (false);
  }
  if (theForm.info1.value.length > 10)
  {
    alert("在 \"用户名\" 域中，请最多输入 10 个字符。");
    theForm.info1.focus();
    return (false);
  }
  if (theForm.info7.value == "")
  {
    alert("请在 \"出生年\" 域中输入值。");
    theForm.info7.focus();
    return (false);
  }
  if (theForm.info7.value.length < 4)
  {
    alert("在 \"出生年\" 域中，请至少输入 4 个字符。");
    theForm.info7.focus();
    return (false);
  }
  if (theForm.info7.value.length > 4)
  {
    alert("在 \"出生年\" 域中，请最多输入 4 个字符。");
    theForm.info7.focus();
    return (false);
  }
  var checkOK = "0123456789-.,";
  var checkStr = theForm.info7.value;
  var allValid = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("在 \"出生年\" 域中，只能输入 数字 个字符。");
    theForm.info7.focus();
    return (false);
  }
  if (decPoints > 1)
  {
    alert("请在 info7 域中输入一个有效数字。");
    theForm.info7.focus();
    return (false);
  }
  var chkVal = allNum;
  var prsVal = parseFloat(allNum);
  if (chkVal != ""  &&  !(prsVal >= "1940"  &&  prsVal <= "2000"))
  {
    alert("请在 \"出生年\" 域中输入值 大于或等于 1940 与 小于或等于 2000。");
    theForm.info7.focus();
    return (false);
  }
  if (theForm.info8.value == "")
  {
    alert("请在 \"出生月份\" 域中输入值。");
    theForm.info8.focus();
    return (false);
  }
  if (theForm.info8.value.length < 1)
  {
    alert("在 \"出生月份\" 域中，请至少输入 1 个字符。");
    theForm.info8.focus();
    return (false);
  }
  if (theForm.info8.value.length > 2)
  {
    alert("在 \"出生月份\" 域中，请最多输入 2 个字符。");
    theForm.info8.focus();
    return (false);
  }
  var checkOK = "0123456789-.,";
  var checkStr = theForm.info8.value;
  var allValid = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("在 \"出生月份\" 域中，只能输入 数字 个字符。");
    theForm.info8.focus();
    return (false);
  }
  if (decPoints > 1)
  {
    alert("请在 info8 域中输入一个有效数字。");
    theForm.info8.focus();
    return (false);
  }
  var chkVal = allNum;
  var prsVal = parseFloat(allNum);
  if (chkVal != ""  &&  !(prsVal >= "1"  &&  prsVal <= "12"))
  {
    alert("请在 \"出生月份\" 域中输入值 大于或等于 1 与 小于或等于 12。");
    theForm.info8.focus();
    return (false);
  }
  if (theForm.info9.value == "")
  {
    alert("请在 \"出生日期\" 域中输入值。");
    theForm.info9.focus();
    return (false);
  }
  if (theForm.info9.value.length < 1)
  {
    alert("在 \"出生日期\" 域中，请至少输入 1 个字符。");
    theForm.info9.focus();
    return (false);
  }
  if (theForm.info9.value.length > 2)
  {
    alert("在 \"出生日期\" 域中，请最多输入 2 个字符。");
    theForm.info9.focus();
    return (false);
  }
  var checkOK = "0123456789-,";
  var checkStr = theForm.info9.value;
  var allValid = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("在 \"出生日期\" 域中，只能输入 数字 个字符。");
    theForm.info9.focus();
    return (false);
  }
  var chkVal = allNum;
  var prsVal = parseInt(allNum);
  if (chkVal != ""  &&  !(prsVal >= "1"  &&  prsVal <= "31"))
  {
    alert("请在 \"出生日期\" 域中输入值 大于或等于 1 与 小于或等于 31。");
    theForm.info9.focus();
    return (false);
  }
  if (theForm.info15.value == "")
  {
    alert("请在 \"身份证件号码\" 域中输入值。");
    theForm.info15.focus();
    return (false);
  }
  if (theForm.info15.value.length < 10)
  {
    alert("在 \"身份证件号码\" 域中，请至少输入 10 个字符。");
    theForm.info15.focus();
    return (false);
  }
  if (theForm.info15.value.length > 30)
  {
    alert("在 \"身份证件号码\" 域中，请最多输入 30 个字符。");
    theForm.info15.focus();
    return (false);
  }
  var checkOK = "0123456789-.,";
  var checkStr = theForm.info15.value;
  var allValid = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("在 \"身份证件号码\" 域中，只能输入 数字 个字符。");
    theForm.info15.focus();
    return (false);
  }
  if (decPoints > 1)
  {
    alert("请在 info15 域中输入一个有效数字。");
    theForm.info15.focus();
    return (false);
  }
  if (theForm.info18.value == "")
  {
    alert("请在 \"邮政编码\" 域中输入值。");
    theForm.info18.focus();
    return (false);
  }
  if (theForm.info18.value.length < 6)
  {
    alert("在 \"邮政编码\" 域中，请至少输入 6 个字符。");
    theForm.info18.focus();
    return (false);
  }
  if (theForm.info18.value.length > 6)
  {
    alert("在 \"邮政编码\" 域中，请最多输入 6 个字符。");
    theForm.info18.focus();
    return (false);
  }
  var checkOK = "0123456789-.,";
  var checkStr = theForm.info18.value;
  var allValid = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("在 \"邮政编码\" 域中，只能输入 数字 个字符。");
    theForm.info18.focus();
    return (false);
  }
  if (decPoints > 1)
  {
    alert("请在 info18 域中输入一个有效数字。");
    theForm.info18.focus();
    return (false);
  }
  return (true);
}
</script>
</head>
<body>
<form method="POST" action="reg.asp" onsubmit="return FrontPage_Form1_Validator(this)" name="FrontPage_Form1">      
          <table border="1" cellPadding="2" cellSpacing="0" align="left"  class="itm" width=500>
            <tr bgcolor="#E3E3E3">
              <td colspan="3">请填写下述注册内容，注意：标有<font color="red" size="+2">*</font>的必须填写。</td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">用户名</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <input name="info1" size="20" maxlength="10" value>
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178">英文字符，<font color="#FF0000">最长10位</font></td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">口令</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <input type="password" name="info2" size="20" maxlength="16" value>
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178">英文字符和数字，最长16位</td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">确认口令</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <input type="password" name="info3" size="20" maxlength="16" value>
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178">请与您的口令保持一致</td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">电子邮件</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <input type="text" name="info4" maxlength="50" value size="20">
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178">最重要的联系方式</td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">姓名</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <input type="text" name="info5" size="20" maxlength="50" value>
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178">请输入您的真实姓名，这是您的重要信息</td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">性别</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <select name="info6" size="1">
                  <option value="NULL">---请选择---
                  <option value="男">男
                  <option value="女">女
                </select>
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178"> </td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">生日</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <input type="text" name="info7" size="4" maxlength="4" value>
                年
                <input type="text" name="info8" size="2" maxlength="2" value>
                月
                <input type="text" name="info9" size="2" maxlength="2" value>
                日<font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178">生日确认您身份的重要信息之一，在您过生日时，您将收到本站的一份精美生日礼品。</td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">省份</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <select name="info10" size="1">
                  <option value="NULL">---请选择---
                  <option value="湖南-吉首">湖南-吉首
                  <option value="湖南-龙山">湖南-龙山
                  <option value="湖南-花垣">湖南-花垣
                  <option value="湖南-凤凰">湖南-凤凰
                  <option value="湖南-保靖">湖南-保靖
                  <option value="湖南-古丈">湖南-古丈
                  <option value="湖南-泸溪">湖南-泸溪
                  <option value="湖南-永顺">湖南-永顺
                  <option value="湖南-长沙">湖南-长沙
                  <option value="湖南-株洲">湖南-株洲
                  <option value="湖南-湘潭">湖南-湘潭
                  <option value="湖南-常德">湖南-常德
                  <option value="湖南-衡阳">湖南-衡阳
                  <option value="湖南-岳阳">湖南-岳阳
                  <option value="湖南-邵阳">湖南-邵阳
                  <option value="湖南-益阳">湖南-益阳
                  <option value="湖南-娄底">湖南-娄底
                  <option value="湖南-怀化">湖南-怀化
                  <option value="湖南-郴州">湖南-郴州
                  <option value="湖南-永州">湖南-永州
                  <option value="湖南-张家界">湖南-张家界
                  <option value="北京">北京
                  <option value="上海">上海
                  <option value="天津">天津
                  <option value="重庆">重庆
                  <option value="黑龙江">黑龙江
                  <option value="辽宁">辽宁
                  <option value="吉林">吉林
                  <option value="河北">河北
                  <option value="内蒙古">内蒙古
                  <option value="陕西">陕西
                  <option value="山西">山西
                  <option value="甘肃">甘肃
                  <option value="宁夏">宁夏
                  <option value="新疆">新疆
                  <option value="西藏">西藏
                  <option value="青海">青海
                  <option value="四川">四川
                  <option value="云南">云南
                  <option value="贵州">贵州
                  <option value="湖北">湖北
                  <option value="河南">河南
                  <option value="山东">山东
                  <option value="安徽">安徽
                  <option value="江苏">江苏
                  <option value="浙江">浙江
                  <option value="广东">广东
                  <option value="广西">广西
                  <option value="江西">江西
                  <option value="福建">福建
                  <option value="海南">海南
                  <option value="台湾">台湾
                  <option value="香港">香港
                  <option value="澳门">澳门
                  <option value="其它国家" Country>其它国家
                </select>
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178">其他国家的用户选择“其他国家”</td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">婚姻状况</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <select name="info11" size="1">
                  <option value="NULL">---请选择---</option>
                  <option value="否">未婚
                  <option value="是">已婚
                </select>
              </td>
              <td bgcolor="#FFF8E6" width="178"> </td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">教育情况</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <select name="info12" size="1">
                  <option value="NULL">---请选择---
                  <option value="初中以下">初中以下
                  <option value="高中/中专/技校">高中/中专/技校
                  <option value="大学/大专">大学/大专/本科
                  <option value="硕士以上">硕士以上
                </select>
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178"> </td>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">职业</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <select name="info13" size="1">
                  <option value="NULL">---请选择---
                  <option value="党政企事业单位">党政企事业单位
                  <option value="金融（银行、工商、税务、保险）">金融（银行、工商、税务、保险）
                  <option value="文艺、影视、娱乐、体育">文艺、影视、娱乐、体育
                  <option value="服务业">服务业
                  <option value="医护人员">医护人员
                  <option value="新闻、媒体">新闻、媒体
                  <option value="军人、公检法人员">军人、公检法人员
                  <option value="计算机及通信相关行业">计算机及通信相关行业
                  <option value="其它专业技术人员">其它专业技术人员
                  <option value="教师">教师
                  <option value="学生">学生
                  <option value="外资、合资企业人员">外资、合资企业人员
                  <option value="工人">工人
                  <option value="农民">农民
                  <option value="个体经营者">个体经营者
                  <option value="其他">其他
                </select>
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178"> </td>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">个人月收入</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <select name="info14" size="1">
                  <option value="NULL">---请选择---
                  <option value="500">500以下</option>
                  <option value="1000">500-1000
                  <option value="1001">1001-3000
                  <option value="3001">3001以上
                </select>
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178"> </td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">身份证件号码</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <input type="text" name="info15" maxlength="30" size="30" value>
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#EFF8E6" width="178">也可以填写任何能够证明您身份的证件号码，在多数有奖活动中都需要</td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">兴趣爱好</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <select name="info16" size="1">
                  <option value="NULL">---请选择---</option>
                  <option value="体育运动">体育运动
                  <option value="艺术">艺术
                  <option value="娱乐休闲">娱乐休闲
                  <option value="家庭生活">家庭生活
                  <option value="健康">健康
                  <option value="音乐">音乐
                  <option value="购物">购物
                </select>
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178"> </td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">通信地址</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <input type="text" name="info17" maxlength="60" size="30" value>
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178">以便进行有奖活动时邮寄奖品</td>
            </tr>
            <tr>
           
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">邮政编码</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <input type="text" name="info18" maxlength="6" size="10" value>
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178">　</td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">电话</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <input type="text" name="info19" maxlength="15" size="15" value>
                <font color="red" size="+2">*</font></td>
              <td bgcolor="#FFF8E6" width="178">以便联系</td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">您的个人主页</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <input type="text" name="info20" size="33" maxlength="50" value="http://">
              </td>
              <td bgcolor="#FFF8E6" width="178"></td>
            </tr>
            <tr>
              <td align="right" width="68" bgcolor="#FFCE63">
                <div align="left">OICQ</div>
              </td>
              <td bgcolor="#FEE3A7" width="228">
                <input type="text" name="info21" maxlength="15" size="15" value>
              </td>
              <td bgcolor="#FFF8E6" width="178">　</td>
            </tr>
            <tr bgcolor="#E3E3E3">
              <td colspan="3" align="center">
                <input type="submit" value="注 册" id="submit1" name="submit1">
                  
                <input type="reSet" value="清 除" id="reSet1" name="reSet1">
              </td>
            </tr>
          </table>
        </form>
</body>
</html>