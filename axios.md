

一、安装`axios`

``` js
npm install axios --save
```

二、引入

```js
import axios from 'axios'
```

三、常见的两种调用方法

```js
//post请求
axios({
    method: 'post',
    url:'http://easy-mock.com/mock/....'
})
.then((response)=>{
	console.log(response.data)    
})
.catch((error)=>{
    console.log(error)
})

axios.post('http://easy-mock.com/mock/....',
            {
    			miao:"参数"
			}
          ).then((response)=>{
    			console.log(response.data)
			})
    		.catch((error)=>{
    			console.log(error)
			})
```

四、自定义请求实例

```js
{
    url: '/user'， //请求服务器的url
    baseURL: ''，  //基础url 将自动地加在url前面
    timeout: 1000, //指定请求的毫秒数 超过这个时间 请求将被中断
    headers: {'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'},//自定义请求头内容
    responseType: 'json', //// `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    params: {}, // 参数 会以key=value进行拼接
    transformReauest: [function(data){
       return data;
    }],//可以获取data，并任意处理
    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  	validateStatus: function (status) {
   		 return status >= 200 && status < 300; // 默认的
    },
	cancelToken: new CancelToken(function (cancel){}) //`cancelToken` 指定用于取消请求的 cancel token
}
```

五、使用自定义请求实例

```js 
var HTTP = axios.create({})  //｛｝中放入上文中的配置项
```

```js
var instance = axios.create({
    timeout: 30000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
    },
    // withCredentials: true,
    transformRequest: [function (data) {
        var  ret = ''
        for (var it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        ret = ret.substr(0, ret.length - 1);
        return ret;
    }],
});

// 为已知需要花费很长时间的请求覆写超时设置
instance.get('/longRequest', {
  timeout: 5000
});
```

六、执行多个并发请求

```js
export default {
  name: 'hello',
  created(){

    function http1(){
      return HTTP.get("test-axios")
    }

    function http2(){
      return HTTP.post("test-post-axios")
    }
   //注意此时常使用axios.spread()方法接收多个响应数据
      axios.all([http1(),http2()]).then(axios.spread((res1,res2)=>{
          console.log(res1)
          console.log(res2)
      }))
      .catch((error) =>{
        if (axios.isCancel(error)) {
          console.log(error.message);
        }else{
            console.log(error)
        }
    })

  }
}
```

