
Javascript语法学习
字面意思：变量是可变的量；
编程角度：变量是用于存储某种/某些数值的存储器。我们可以把变量看做一个盒子，盒子用来存放物品，物品可以是衣服、玩具、水果...等。 
2、表达出你的想法(表达式)
表达式与数学中的定义相似，表达式是指具有一定的值、用操作符把常数和变量连接起来的代数式。一个表达式可以包含常数或变量。
 基础语法
1、标识符：所谓标识符，实际上就是指一个满足一定规范，能够被引擎识别的名字，可以用来表示常量、变量、函数名、函数参数、对象、对象属性等所有可命名对象的名称。
（1）区分大小写。
（2）以字母、下划线（_）或美元符号（$）开头，其它字符可以为字母、下划线、美元符号或数字。这里的字母包含扩展的ASCII或Unicode字符。
（3）标识符不能是关键字、保留字、true、false、null。（有些浏览器允许使用undefined，有些不能）。
（4）如果对象属性含有空格或其它特殊字符，可以用括号括起来作为一个整体。
2、关键字：在语言本身中有特定用途。
　　　　break　　case　　catch　　continue　　debugger（ES5中新增）　　default　　delete　　do　　else　　finally　　for　　function　　if　　in　　instanceof　　new　　return　　switch　　this　　throw　　try　　typeof　　var　　void　　while　　with
3、保留字：被语言本身保留，将来可能作为关键字。
　　ES3中的保留字：
　　　　abstract　　boolean　　byte　　char　　class　　const　　debugger　　double　　enum　　export　　extends　　final　　float　　goto　　implements　　import　　int　　interface　　long　　native　　package　　private　　protected　　public　　short　　static　　super　　synchronized　　throws　　transient　　volatile
　　ES5中的非严格模式下的保留字：
　　　　class　　const　　enum　　export　　extends　　import　　super
　　ES5的严格模式下的保留字：
　　　　implements　　interface　　let（ES5中新增）　　package　　private　　protected　　public　　static　　yield（ES5中新增）
 4、严格模式：在ES5中引入严格模式，通过使用"use strict"来开启严格模式，可以在顶部开启全局严格模式，也可以在函数作用域范围内开启局部严格模式。
复制代码 代码如下:

"use strict"//开启全局严格模式，在ES3中，不会有任何影响function fn(){ 
　　"use strict"//开启局部严格模式 
} 

5、注释：在ECMAScript中，支持两种格式的注释，单行注释和块级注释： 
复制代码 代码如下:

// 单行注释，以两个斜杠//开头/* 
* 多行（块级）注释，以一个斜杠/和一个星号*开头，一个星号和一个斜杠结尾，这里中间行的星号*不是必须的 
*/ 

说明：随着JS代码越来越复杂，注释也变的越来越重要，而文档自动化也显得愈加重要，目前已经有很多开源JS库用于自动化生成类似于Javadoc的JS文档，比如JSDoc、YUIDoc等，这个时候，对注释也会有相应的格式要求，有兴趣的朋友可以找相关资料研究。 

6、变量：变量在其本质上不过是内存空间在语言级别的外在抽象。 

（1）动态类型：在ECMAScript中，变量是动态类型的，你可以在定义的时候初始化为一个Number类型，紧接着，你可以把一个字符串值赋给它： 
复制代码 代码如下:

var age = 29; 
age = 'twenty-nine';　　//虽然有这种灵活性，但我建议你除非明确知道自己在做什么，否则别这样做。

（2）var操作符：变量使用var来声明，对于未初始化的变量，会默认为undefined，也可以直接使用变量而不声明（在我看来，这同样是一个没有存在理由的特性），它们之间最重要的区别就是使用var声明时，声明的变量只在当前作用域有效，而不使用var时，变量就会定义在全局作用域。可以通过下面的例子来体会其中的区别： 
复制代码 代码如下:

var name = 'linjisong'; //定义全局变量并赋值 
age = 29; //直接使用变量，相当于定义全局变量并赋值 
//sal; //错误 
var salary; //定义全局变量，未初始化 
//这里只是函数声明，没有实际调用，所以内部定义的变量不会生效 
function fn(){ 
var name = 'oulinhai';//定义局部变量并赋值 
age = 23; //给全局变量赋值 
work = 'it';　　　　　　//没有使用var，即便是在函数局部的变量，也会成为全局变量 
} 
//函数实际调用前 
console.info(salary);　　 //undefined 
console.info(name); 　 // linjisong 
console.info(age); // 29 
try{ 
console.info(work);//由于在全局环境中没有定义work，这里会抛出异常 
}catch(e){} 
fn();//实际调用，代码中对于变量的变更会显现出来 
console.info(name); // linjisong，由于函数内部使用了var，所以不会更改全局的name值 
console.info(age); // 23 
console.info(work); // it 

（3）声明提升：这个问题在讲函数声明和函数表达式时还会再次谈到，这里先提一下，看代码： 
复制代码 代码如下:

console.info(name);//undefined 
console.info(getName);//getName()函数 
console.info(getName());//undefined 
try{ 
console.info(age);//异常 
}catch(e){ 
console.info(e);//ReferenceError 
} 
console.info(getAge);//undefined 
try{ 
console.info(getAge());//异常 
}catch(e){ 
console.info(e);//TypeError 
} 
var name = 'linjisong';//变量声明，提升 
age = 29;//直接使用全局变量，不提升 
function getName(){//函数声明，提升 
return name; 
} 
var getAge = function(){//变量getAge的声明，提升；获取年龄的匿名函数表达式，不提升 
return age; 
} 
console.info(name);//linjisong 
console.info(getName);//getName()函数 
console.info(getName());//linjisong 
console.info(age);//29 
console.info(getAge);//获取年龄的匿名函数 
console.info(getAge());//29 

你有没有自己推断出上面的输出结果？如果已经推断出，可以跳过了，如果还存有疑问，那么先看看下面关于声明提升的描述，然后再回过头来印证上面的输出结果： 
　　　　A、引擎在解析时，首先会解析函数声明，然后解析变量声明（解析时不会覆盖类型），最后再执行代码； 
　　　　B、解析函数声明时，会同时解析类型（函数），但不会执行，解析变量声明时，只解析变量，不会初始化。 
　　这里涉及的只是全局作用域，在函数作用域中还有函数参数也和声明提升有关，在后面讲述函数时再讨论。 
　　上面的代码，首先会把第18行的函数声明和第16、21行的变量声明提升到最开始解析，然后再执行。因此第1、9行因为变量声明提升但尚未初始化，所以输出undefined，从而第11行因为无法确定是函数类型而抛出类型异常；第2、3行因为函数声明提升并且解析函数类型，所以第2行输出函数，第3行可以调用函数，但返回值未初始化而输出undefined；第5行因为尚未声明变量，会抛出引用异常。 
（4）可以使用一条语句定义多个变量，用逗号分开即可。如： 
复制代码 代码如下:

var name='linjisong', 
age=29, 
work='it'; 

（5）在ES5的严格模式下，不能定义名为eval或arguments的变量。 
7、语句 
（1）语句：以一个分号“;”结尾，如果省略分号，由解析器确定语句的结尾。 
　　对于JS中语句可以省略分号的特性，我想不到任何存在的理由，强烈建议每条语句均使用分号来明确结束，不要让解析器花费时间来“猜测”你的程序，而且，更加重要的是，在很多压缩工具中，猜测并不能保证百分百的正确。 
（2）代码块：以左花括号（{）开始，右花括号（}）结束。 
　　在JS中虽然有代码块的概念，但是却没有相应的块级作用域，这是和一般类C语言所不同的。对于控制语句（比如if），不要因为只有一条语句就不使用代码块，这会给维护你程序的伙计种下犯错的种子。 
复制代码 代码如下:

for(var i=0; i<10; i++) 
{ 
} 
console.info(i);//输出10，在代码块之后仍可以访问i，说明JS无块级作用域 
if(i < 10) 
//console.info(i); 不使用代码块，在维护时（比如添加1条语句）容易犯错 
{ 
console.info(i); 
} 