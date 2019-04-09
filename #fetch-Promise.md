#### #fetch

- 作用：Fetch是一个现代的概念，等同于XMLHttpRequest。它提供了许多与XMLHttpRequest相同的功能，但被设计成更具可扩展性和高效性。
- `fetch()` 方法返回一个`Promise`对象

``` jsx
/*
  通过fetch请求回来的数据，是一个Promise对象.
  调用then()方法，通过参数response，获取到响应对象
  调用 response.json() 方法，解析服务器响应数据
  再次调用then()方法，通过参数data，就获取到数据了
*/
fetch('/api/movie/' + this.state.movieType)
  // response.json() 读取response对象，并返回一个被解析为JSON格式的promise对象
  .then((response) => response.json())
  // 通过 data 获取到数据
  .then((data) => {
    console.log(data);
    this.setState({
      movieList: data.subjects,
      loaing: false
    })
  })
```





#### #Promise    <small>三种状态：pending(进行中)、fufilled(已成功 也称作resolved)、rejected(已失败)</small>

- 所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
- 从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

特点：

- 对象的状态不受外界影响
- 一旦状态改变，就不会再变，任何时候都可以得到这个结果

- Promise 一旦创建就无法取消，且立即执行

``` js
const promise = new Promise(function(resolve,reject){
    // ... some code
    if(/*异步操作成功*/){
		resolve(value)
       } else {
		reject(error)
       }
})
promise.then(function(value){
 	//success   
},function(){
    //failure
})
//then的第二个方法不是必要的
```

举一个异步加载图片的例子：

``` js
function loadImageAsync(url){
    return new Promise(function(resolve,reject){
        const image = new Image();
        image.onload = function(){
            resolve(image);
        }
        image.onerror = function(){
            reject(new Error('Could not load image at ' + url))
        }
        image.src = url;
    })
}
函数一旦触发会立即执行 返回一个Prmise对象 当图片加载成功时 就执行resolve方法 若加载失败 就执行reject方法
```



举一个异步请求的例子

```js
const getJSON = function(url){
    
    if(this.state === 200){
            	resolve(this.response)   
            }else{
                reject(new Error(this.statusText))
            }
        }
        const client = new XMLHttpRequest();
        client.open('GET',url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept","application/json");
        client.send();
    })
    return promise;
}
getJSON("/posts.json").then(function(json){
    console.log('Contents:'+json)
},function(error){
    console.log('出错了',error)
})
```

