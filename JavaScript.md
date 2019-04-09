### JavaScript



- 浏览器组成：   shell  (用户可见界面)  +  内核 (渲染引擎 + js引擎+ 其他模块)

  IE [trident]    Chrome [webkit/blink]    firefox [Gecko]    Opera[presto]    Safari[webkit]

- JavaScript 是解释性语言 、单线程 、 

  ![1541598460350](C:\Users\callm\AppData\Roaming\Typora\typora-user-images\1541598460350.png)



- css的引入是异步加载的 特指Link

  加载顺序的差别。当一个页面被加载的时候（就是被浏览者浏览的时候），link引用的CSS会同时被加载，而@import引用的CSS会等到页面全部被下载完再被加载。所以有时候浏览@import加载CSS的页面时开始会没有样式（就是闪烁），网速慢的时候还挺明显。



- javascript 的引入方式

  1  直接在页面中`<script type="text/javascript"> someCode...  </script>`

  当`type`等于`text/tpl`的时候，里面的`js`代码不执行，当作一个库存使用

  2 `<script type="text/javascript" src="../" /></script>`



- 正常开发标准  结构 行为 样式 相分离



### javaScript 基本语法 

- 变量

- - var a;  var b = 100;      `document.write(a)`  var a =10, b, c=10, d=10

  - 变量名必须以英文字母、_ 、$ 开头
  - 变量名可以包括英文字母、_、$、数字
  - 不可以使用系统关键字、保留字作为变量名  运算大于赋值

- 值类型 

- - 原始值 Number Boolean String undefined null  
  - - 存在stack 栈  栈内存和栈内存之间的关系是拷贝
  - 引用值 array  Object function ...date RegExp
  - - 存在heap 堆   `var arr = [1,2,3]  var arr2 = arr  arr=[4,5,6]`相当于新开了一个房间 但是使用push, pop等操作则是相当于修改heap的内容 而不是新开房间
    - ![1541692453072](C:\Users\callm\AppData\Roaming\Typora\typora-user-images\1541692453072.png)

 

### 函数  



秉承 高内聚 低耦合(即重复)

函数也是引用值

函数声明有 两种方式 一 函数声明 function a () {}

​                                     二 表达式声明 var a = function () {}

判断函数参数的长度 xxx.length  即可获取函数xxx的参数(形参)长度

arguments.length 实参长度   实参和形参存在映射关系  一个发生改变 另一个也会跟着发生改变

函数会在内部隐式加一个 `return`

字符串转数字 可以在前面加个 “ + ” 号

```js
function myNumber (target) {
    return +target
}
var num = myNumber('123');
console.log(typeof(num) + " " + num)
```



递归 ：1  找规律  2  找出口

求一个数的阶层 n! = n * (n-1)!

```js
function mul(n) {
    if(n == 1 || n == 0){
    	return 1   
    }
    return n * mul(n-1)
}
```

斐波那契数列

f(n) = f(n-1) + f(n-2)   直接将规律return 回去

```js
function fb(n) {
    if(n==1 || n==2){
    	return 1
    }
    return fb(n-1) + fb(n-2)
}
n=3 f(2)+f(1)  
n=4 f(3)+f(2)==> f(2)+f(1)+f(2)
```



### 闭包  https://segmentfault.com/a/1190000013827309

1. 可以实现共有变量

```js
function add(){
    var count = 0;
    function demo(){
        count++;
        console.log(count);
    }
    return demo;
}
var counter = add();
counter();
```

2. 可以做缓存

```js
//隐式缓存应用
function eater(){
    var food = "";
    var obj = {
        eat: function(){
            console.log("I'm eating " + food);
            food = "";
        },
        push: function(myFood){
            food = myFood;
        }
    }
    return obj;
}
var eater1 = eater();
eater1.push('banana');
eater1.eat();
```

3. 可以实现封装， 属性私有化

```js
雅虎写法
var inherit = (function(){
    var F = function(){};
    return function(Target,Origin){
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constructor = Target;
        //超类
        Target.prototype.uber = Origin.prototype;
    }
}())
//理解，return时保留了F变量,闭包私有化变量
```

4. 模块化开发，防止污染全局变量

```js
利用闭包变量私有化，避免命名空间的问题
var name = "heh";
var init = (function(){
   var name = "zhangsan";
   function callName(){
       console.log(name);
   }
   return function (){
       callName();
   }
}())
init();
```



#### 回调函数

```js
array.sort(function(a,b){a-b})   array.sort.call(array, fn)
array.forEach(function(a){})     array.forEach.call(array, fn)
array.map(function(){})          array.map.call(array, fn)
array.filter(function(){})       array.filter.call(array, fn)
array.reduce(function(){})       array.reduce.call(array, fn)
fn.bind.call(fn, {}, 1,2,3)
名词形式： 被当做参数的函数就是回调
动词形式： 调用这个回调
注意回调跟异步没有任何关系
```

setTimeout(fn, 1000) // 异步回调



返回对象的函数就是构造函数

```js
new
function Empty() {
    this.name = '空'
    return this
}

var empty = Empty.call({})

就相当于
function Empty() {
    
}
var empty = new Empty() //  new关键字就是一个语法糖 会默认return 
```









































































#### JavaScript 提高

##### this & arguments

`this`是隐藏的第一个参数，且必须是对象

``` js
function f() {
    console.log(this)
    console.log(arguments)
}
// 直接调用
f.call() // 会打印出 Window 和 [callee: f, Symbol(Symbol.iterator): f] 伪数组
现在给this传递一个参数
f.call({ name: 'frank' }) // 会打印出 { name: 'frank' } 和一个伪数组（同上）
f.call({ name: 'frank' }, 1, 2) // 会打印出 { name: 'frank' } 和一个伪数组[1, 2, callee....] 
f()是阉割版的call() 直接使用f()调用函数时，是无法指定this的
```

eg:    

``` js
function sum(x, y) {
	return x + y
}
sum.call(undefined, 1, 2)
```



``` js
function sum() {
	var n = 0;
    for(var i=0; i<arguments.length; i++) {
        n += arguments[i]
    }
    return n
}
sum(1, 2, 3, 4, 5)
let arr = [1, 2, 3, 4, 5, 6]
sum.apply(undefined, arr)
```

##### bind

call 和 apply是直接調用函数， 而bind则是返回一个新函数（并没有调用原来的函数）， 这个新函数会call原来的函数，call的参数由使用者决定。 

``` js
var view = {
	element: $('#div1'),
    bindEvent: function() {
        // 如果这么写 this.element.onclick = this.onClick 那么这个onClick指向按钮
        // this.element.onclick = this.onClick.bind(this)
        // bind就相当于 function() { this.onClick.call(this) }
        // bind会把前面的内容包裹起来 并将bind(val)的val传给call()
        var _this = this
        this.element.onclick = function() {
            _this.onClick()  // 或者直接写成view
        }
    },
    onClick: function(){
        
    }
}
```

#### 箭头函数

```js
setTimeout(function(a){
    console.log(this)
    setTimeout(function(a){
        console.log(this)
    }.bind(this), 1000)
}.bind({name: 'frank'}), 1000)
```

科里化函数

```js
function curry(func, thisArg) {
    if(!Array.isArray(thisArg)) {
       thisArg = [];
    }
    return function() {
        let args = Array.prototype.slice.call(arguments);
        if((args.length+thisArg.length) < func.length ) {
           	return curry(func, thisArg.concat(args));
           }
        return func.apply(this, thisArg.concat(args));
    }
}
```

Promise 

https://zhuanlan.zhihu.com/p/23987456（new）

```js
axios({
    url: 'xxx'
}).then(s1, e1)
	.then(s2, e2)
	.then(s3, e3)
s1成功时，e1成功时 会执行s2 其中某一个失败时就会执行e2 e3
```

```js
function buyFruit() {
    return new Promise((x, y) => {
        setTimeout(() => {
            x('apple')
        }, 10000)
    })
}
var promise = buyFruit()
promise.then(
    () => {
        console.log('success')
    },
    () => {
        console.log('fail')
    }
)


async function fn() {
	var result = await bufFruit()
    return result
}
var s = await fn()
awit后面接一个promise()的函数
s等待fn执行 fn等待buyFruit执行
```

