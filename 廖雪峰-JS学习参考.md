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

- 