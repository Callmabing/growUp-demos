11.14



- `for in`循环获取的是被循环对象的属性

- ```js
  var o = {
      name: 'Jack',
      age: 20,
      city: 'Beijing'
  };
  for (var key in o) {
      console.log(key); // 'name', 'age', 'city'
  }
  
  同时可以使用 hasOwnProperty 来过滤掉非自身属性
  非自身属性 o.hasOwnProperty 会返回false
  
  var o = {
      name: 'Jack',
      age: 20,
      city: 'Beijing'
  };
  for (var key in o) {
      if (o.hasOwnProperty(key)) {
          console.log(key); // 'name', 'age', 'city'  遍历出自身所有的属性
      }
  }
  ```



- `Map`方法

- ```js
  var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
  m.get('Michael'); // 95
  
  初始化Map需要一个二维数组，或者直接初始化一个空Map。
  
  map具有的方法：
  var m = new Map(); // 空Map
  m.set('Adam', 67); // 添加新的key-value
  m.set('Bob', 59);
  m.has('Adam'); // 是否存在key 'Adam': true
  m.get('Adam'); // 67
  m.delete('Adam'); // 删除key 'Adam'
  m.get('Adam'); // undefined
  
  由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉
  ```

- `set`方法

- ```js
  Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。
  
  要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set：
  
  var s1 = new Set();
  var s2 = new Set([1, 2, 3])
  
  重复的元素会被自动过滤
  var s = new Set([1, 2, 3, 3])
  s // Set {1, 2, 3}
  
  s.add(key)   s.delete(key) 两个方法
  ```



- `iterable`类型  是为了统一集合类型存在的 统一使用 for...of...遍历

- `Array`、`Map`和`Set`都属于`iterable`类型

- ```js
  var a = ['A', 'B', 'C'];
  var s = new Set(['A', 'B', 'C']);
  var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
  for (var x of a) { // 遍历Array
      console.log(x);
  }
  for (var x of s) { // 遍历Set
      console.log(x);
  }
  for (var x of m) { // 遍历Map
      console.log(x[0] + '=' + x[1]);
  }
  ```

- 其中`iterable`类型内置了`forEach()`循环

- ``` js
  var a = ['A', 'B', 'C'];
  a.forEach(function (element, index, array) {
      //element: 指向当前元素的值
      //index: 指向当前索引
      //array: 指向Array对象本身
      console.log(element + ', index = ' + index)
  })
  ```





- 函数

- 如果没有`return`语句，函数执行完毕后也会返回结果，只是结果为`undefined`

- `arguments`参数   `arguments`常常可以用来判断传入参数的长度

  ```js
  function foo(x) {
      console.log('x = ' + x)
      for (var i=0; i<arguments.length; i++) {
          console.log('arg ' + i + ' = ' + arguments[i] )
      }
  }
  foo(10, 20, 30)
  ```



- `rest`参数

- ```js
  除了 arguments 这个参数以外 可以使用 rest 参数 接收额外的参数
  function foo(a, b, ...rest) {
  	console.log("a = " + a)
      console.log("b = " + b)
      console.log(rest)
  }
  foo(1, 2, 3, 4, 5);
  
  利用 ...rest 求和
  function sum() {
      var count = 0;
      for(var i=0; i<rest.length; i++) {
          count = count + rest[i]
      }
      return count;
  }
  ```





- 统计某个函数在页面中使用的次数

- ```js
  var count = 0;
  var oldParseInt = parseInt;// 保存原函数
  
  window.parseInt = function () {
      count += 1；
      return oldParseInt.apply(null, arguments) //调用原函数
  }
  
  parseInt('10');
  parseInt('20');
  
  console.log('count = ' + count)
  ```



- 高阶函数   一个函数接收另一个函数作为参数

- ```js
  function add(x, y, f) {
      return f(x) + f(y)
  }
  
  eg:
  function add(x, y, f) {
      return f(x) + f(y)
  }
  var x = add(-5, 6, Math.abs)
  console.log(x)
  ```


- map()函数  高阶的一种

- ```js
  function pow(x) {
      return x * x;
  }
  var arr = [1, 2, 3, 4, 5]
  var results = arr.map(pow)
  ```

- 注意：`map()`传入的参数是`pow`，即函数对象本身。



- reduce()

- Array的`reduce()`把一个函数作用在这个`Array`的`[x1, x2, x3...]`上，这个函数必须接收两个参数，`reduce()`把结果继续和序列的下一个元素做累积计算：

  ```js
  [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
  ```

- 例如求和

  ```js
  var arr = [1, 3, 5, 7, 9]
  arr.reduce(function (x, y) {
      return x + y;
  })
  
  例如高阶
  let f = (x, y) => x * y;
  
  let gao = (arr) => (f) => {
      return arr.reduce(f)
  }
  
  字符串转换
  var arr = [1, 3, 5, 7, 9]
  arr.reduce(function(x, y) {
      return x * 10 + y;
  })
  
  ```



  利用map()、reduce()方法重写parseInt()

  ```js
  function string2int(s) {
      var arr_temp = s.splite("");
      var arr = arr_temp.map(function(x) {
          return x - 0;  //先使用map将数组中没个元素都转化成数字
      })
      var result = arr.reduce(function(x, y) {
          return x*10 + y;
      })
      return result;
  }
  ```

  让数组中的每一项首字母大写

  ```js
  
  function normalize(arr) {
       return arr.map(function(x){
  //         x = x.toLowerCase()
  //         var nx = x.substr(0,1).toUpperCase()
  //         x = x.substr(1,x.length-1)
  //         return x = nx + x
             return x.charAt(0).toUpperCase() + x.substr(1, x.length-1).toLowerCase()
      })
  }
  ```



- `filter`过滤器  用于把`Array`的某些元素过滤掉， 然后返回剩下的元素

- 和`map()`类似，`Array`的`filter()`也接收一个函数。和`map()`不同的是，`filter()`把传入的函数依次作用于每个元素，然后根据返回值是`true`还是`false`决定保留还是丢弃该元素。

- ```js
  //返回一个数组中的奇数
  var arr = [1, 2, 4, 5, 6, 9, 10, 15];
  var r = arr.filter(function (x) {
      return x % 2 !== 0;
  });
  //删除数组中的空字符
  var arr = ['A', '', 'B', null, undefined, 'C', '  '];
  var r = arr.filter(function (s) {
      return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
  });
  r; // ['A', 'B', 'C']
  ```

- `filter()`接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，表示`Array`的某个元素。回调函数还可以接收另外两个参数，表示元素的位置和数组本身：

- ```js
  var arr = ['A', 'B', 'C'];
  var r = arr.filter(function (element, index, self) {
      console.log(element); // 依次打印'A', 'B', 'C'
      console.log(index); // 依次打印0, 1, 2
      console.log(self); // self就是变量arr
      return true;
  });
  ```

- ```js
  //去除数组中重复元素
  var r, arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry']
  r = arr.filter(function(element, index, self) {
      return self.indexOf(element) === index
  })
  console.log(r.toString())
  ```




- 使用JS判断数组里的元素是不是素数

- ```js
  function get_primes(arr) {
      var result = arr.filter(function(x) {
          var r = true;
          if(x === 1) {
          	r = false
          }
          if(x === 2) {
          	r = true
          }
          for(var i=0; i < x; i++) {
              if(x % i === 0){
              	r = false;
                  break;
              } else {
                  r = true
              }
          }
          return r;
      })
      return result
  }
  ```





- sort比较函数  是采用原地算法（即输出的值会替换原有的值）进行排序

- ```js
  function compare(a, b) {
      if(a < b) {
         return -1
      }
      if(a > b) {
         return 1   
      }
      return 0;
  }
  
  或者 
  
  arr.sort((a, b) => a - b)
  ```





- 闭包
- 即使每次调用时传入的参数一样，但得出的结果也不会相等。因为每次闭包都会返回一个新的函数
- 使用闭包，返回函数不要引用任何循环变量，或者后续会发生变化的变量。



- 箭头函数的`this`指向词法作用域

  ```js
  JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域.
  
  因为 JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。
  
  而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。
  var value = 1;
  
  function foo() {
      console.log(value);
  }
  
  function bar() {
      var value = 2;
      foo();
  }
  
  bar();
  
  // 结果是 ???
  假设JavaScript采用静态作用域，让我们分析下执行过程：
  
  执行 foo 函数，先从 foo 函数内部查找是否有局部变量 value，如果没有，就根据书写的位置，查找上面一层的代码，也就是 value 等于 1，所以结果会打印 1。
  
  假设JavaScript采用动态作用域，让我们分析下执行过程：
  
  执行 foo 函数，依然是从 foo 函数内部查找是否有局部变量 value。如果没有，就从调用函数的作用域，也就是 bar 函数内部查找 value 变量，所以结果会打印 2。
  
  前面我们已经说了，JavaScript采用的是静态作用域，所以这个例子的结果是 1
  ```

- 使用`generator`改写闭包函数

- ```js
  function *fn(){
      var current_id = 1;
      while(true) {
      	yield current_id ++;      
      }
  }
  fn().next()
  //{value:1 ,done: false}
  
  next()方法会执行generator的代码，然后，每次遇到yield x;就返回一个对象{value: x, done: true/false}，然后“暂停”。返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。如果done为true，则value就是return的返回值。
  ```



- `js`包装对象     脑子瓦特了可能用一用

- ```js
  var n = new Number(123) //123 生成了新的包装类型
  var b = new Boolean(true); // true,生成了新的包装类型
  var s = new String('str'); // 'str',生成了新的包装类型
  
  虽然包装对象看上去和原来的值一模一样，显示出来也是一模一样，但他们的类型已经变为object了！所以，包装对象和原始值用===比较会返回false
  ```



- `JSON.stringfy(xiaoming, ['name', 'skills'],'  ')`
- 该方法用于序列化一个对象， 第二个参数是用来筛选对象中每一个属性， 可以是函数，也可以像上方一样是个数组，第三个参数是美化用的，代表有多少空格；上限为10.

- 除此之外， 还可以按照如下的方式`定义一个toJSON()`去控制输出

- ```js
  var xiaoming = {
      name: '小明',
      age: 14,
      gender: true,
      height: 1.65,
      grade: null,
      'middle-school': '\"W3C\" Middle School',
      skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
      toJSON: function () {
          return { // 只输出name和age，并且改变了key：
              'Name': this.name,
              'Age': this.age
          };
      }
  };
  
  JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'
  ```

- - 反序列化`JSON.parse()`把它变成一个`javascript`对象

  - ```js
    把JSON格式的字符串，变成javaScript对象
    JSON.parse('[1, 2, 3, true]'); // [1, 2, 3, true]
    JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
    JSON.parse('true'); // true
    JSON.parse('123.45'); // 123.45
    ```

  - `JSON.parse(text[, revier])`包含有两个参数，一是被解析文本，而是解析过程中所涉及的函数，但是要注意该函数会先从前往后 =》解析同级，当同级中又包含下一级元素时，会解析完当前同级所有的元素后，解析包含下一级的元素时，从里向外解析，然后再解析最外层。 eg:

  - ```js
    JSON.parse('{"p": 5}', function (k, v) {
        if(k === '') return v;     // 如果到了最顶层，则直接返回属性值，
        return v * 2;              // 否则将属性值变为原来的 2 倍。
    });                            // { p: 10 }
    
    JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}', function (k, v) {
        console.log(k); // 输出当前的属性名，从而得知遍历顺序是从内向外的，
                        // 最后一个属性名会是个空字符串。
        return v;       // 返回原始属性值，相当于没有传递 reviver 参数。
    });
    //1, 2, 4, 6, 5, 3, ""
    ```

  - 注意 ！！！ `JSON.parse()`解析的元素，不允许使用逗号作为结尾！！！





- 面向对象编程

- 下面看一个例子：

- ``` js
  现在有一个学生对象Student
  var Student = {
      name: 'Robot',
      height: 1.2,
      run: function () {
          console.log(this.name + ' is running...');
      }
  };
  创建出 ·小明·  这个对象
  var xiaoming = {
      name: '小明'
  };
  
  xiaoming.__proto__ = Student; 把 xiaoming 的原型指向了对象Student
  
  此时小明就具有了Student的一些属性和方法
  xiaoming.name; // '小明'
  xiaoming.run(); // 小明 is running...
  ```

- 由此可以看出，JavaScript的原型链和Java的Class区别就在，它没有“Class”的概念，所有对象都是实例，所谓继承关系不过是把一个对象的原型指向另一个对象而已。

- 一般来说，不要直接使用`obj.__proto__`去改变一个对象的原型，并且，低版本的IE也无法使用`__proto__`，通常采用`Object.create()`方法，该方法传入一个原型对象，并创建一个基于该原型的新对象，但是新对象没有任何属性。

- ```js
  // 原型对象:
  var Student = {
      name: 'Robot',
      height: 1.2,
      run: function () {
          console.log(this.name + ' is running...');
      }
  };
  
  function createStudent(name) {
      // 基于Student原型创建一个新对象:
      var s = Object.create(Student);
      // 初始化新对象:
      s.name = name;
      return s;
  }
  
  var xiaoming = createStudent('小明');
  xiaoming.run(); // 小明 is running...
  xiaoming.__proto__ === Student; // true
  ```

- ![1542336513546](D:\F\笔记配图\%5CUsers%5CAdministrator%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1542336513546.png)



- 构造函数

- JavaScript还可以用一种构造函数的方法来创建对象。它的用法是，先定义一个构造函数：

- ```js
  function Student(name) {
      this.name = name;
      this.hello = function () {
          alert('Hello, ' + this.name + '!');
      }
  }
  
  var xiaoming = new Student('小明');
  xiaoming.name; // '小明'
  xiaoming.hello(); // Hello, 小明!
  ```

- *注意*，如果不写`new`，这就是一个普通函数，它返回`undefined`。但是，如果写了`new`，它就变成了一个构造函数，它绑定的`this`指向新创建的对象，并默认返回`this`，也就是说，不需要在最后写`return this;`。

- 用`new Student()`创建的对象还从原型上获得了一个`constructor`属性，它指向函数`Student`本身：

- ```js
  xiaoming.constructor === Student.prototype.constructor; // true
  Student.prototype.constructor === Student; // true
  
  Object.getPrototypeOf(xiaoming) === Student.prototype; // true
  
  xiaoming instanceof Student; // true
  ```

- ![1542338584995](D:\F\笔记配图\%5CUsers%5CAdministrator%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1542338584995.png)

**__proto__是每个对象都有的一个属性，而prototype是函数才会有的属性!!!** 
**使用Object.getPrototypeOf()代替__proto__!!!**

- ```js
  function Student(props) {
      this.name = props.name || '匿名'; // 默认值为'匿名'
      this.grade = props.grade || 1; // 默认值为1
  }
  
  Student.prototype.hello = function () {
      alert('Hello, ' + this.name + '!');
  };
  
  function createStudent(props) {
      return new Student(props || {})
  }
  ```





- `class`继承

- 要记得`class`的目的就是让定义类更简单

- 先回顾用函数实现`student`的方法：

- ```js
  function Student(name) {
      this.name = name;
  }
  
  Student.prototype.hello = function() {
      alert('Hello, ' + this.name + '!')
  }
  ```

- 现在看新的`class`关键字来编写`Student`, 可以这样写：

- ```js
  class Student{
      constructor(name) {
          this.name = name;
      }
      hello() {
          alert('Hello, '+ this.name + '!')
      }
  }
  ```

- 继承

- ```js
  class PrimaryStudent extends Student {
      constructor(name, grade) {
          super(name);   //调用父类的构造方法
          this.grade = grade;
      }
      myGrade() {
          alert('I am at grade ' + this.grade );
      }
  }
  ```






- Promise

- 生成一个0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败。

- ```js
  function test(resolve, reject) {
      var timeOut = Math.random() * 2;
      console.log('set timeout to: ' + timeOut + 'seconds.');
      setTimeout(function (){
          if(timeOut<1) {
              console.log('call resolve()...');
              resolve('200 OK');
          }else {
              console.log('call reject()...');
              reject('timeout in'+ timeOut + 'seconds.');
          }
      }, timeOut * 1000)
  }
  var p = new Promise(test).then(function(result) {
      console.log('成功：' + result);
  }).catch(function (reason){
      console.log('失败：'+ reason);
  })
  ```



- `JQuery`

- - 选择器 

  - - 按`tag`查找 var ps = $('p');

    - 按`class`查找 var a = $ ('.red');   包含多个`class`节点 `var a = $('.red.green')`

    - 按属性查找  `var email = $('[name=email]')`当属性的值包含特殊字符时应当使用双引号括起来`var passwordInput = $('[items = "A B"]')`

    - 按属性的前缀或后缀进行查找 `var icon = $('[name^=icon]')` 能查找到name="icon-1",name="icon-2"&& `var icons = $('[name$=with]')`能查找到name="startwith",name="endwith"      这个查找方法尤其适合class属性查找，且不受class包含多个名称的影响   `var icons = $('[class^="icon-"]')`

    - 组合查找  `var emailInput = $('input[name=email]')`

      ​	       	 `var tr = $('tr.red')`

      ​		 `$('p.red,p.green')`





- 事件触发的条件

- 一个需要注意的问题是，事件的触发总是由用户操作引发的。例如，我们监控文本框的内容改动：

- ```js
  var input = $('#test-input')
  input.change(function () {
      console.log('changed...');
  })
  用户输入时会触发该change事件，但是使用js去改变里面的值得时候，change函数却不会被触发 此时可能需要input.change()或者input.trigger('change')
  ```

- 