### #vue

``` js
var vm = new Vue({
	el: "#root",
    data: {
        message: 'hello world'
    },
    methods: {
        handleClick: function(){ 
            alert("hello")
        }
    }
})
// 这里的vm就是vue的一个实例，那么实例上就会有很多的属性或方法
// 例如 vm.$data vm.$methods
// vm.$destroy() 就会摧毁这个实例 vm.$data.message = 'some' 此时已经无效了
```

vue生命周期函数：vue实例在某一个时间点会自动执行的函数

vue在渲染的时候会查看是否拥有模板，当有模板的时候就渲染模板，当没有模板的时候就会将el中的元素当作模板进行渲染。

** beforCreate **: 在实例初始化之后，观测数据和event/watcher时间配置之前被调用

** created ** : 在实例创建完成后被立即调用。在这一步，实例已经完成以下配置：数据观测，属性和方法的运算，watch/event事件回调。然而，挂载阶段并未开始，$el属性目前不可见

** beforeMount **: 模板结合数据，之后便开始挂载到页面之上。依旧无法获取this.$el

** mounted  ** : 页面挂载之后被执行，注意 `mounted` **不会**承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 [vm.$nextTick](https://cn.vuejs.org/v2/api/#vm-nextTick) 替换掉 `mounted`

** beforeDestory **: 当组建被销毁时执行。vm.$destory()时就会被执行。

** beforeUpdate **: 数据更新时调用，发生在虚拟DOM打补丁以前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。

** updated **: 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用[计算属性](https://cn.vuejs.org/v2/api/#computed)或 [watcher](https://cn.vuejs.org/v2/api/#watch) 取而代之。

注意 `updated` **不会**承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 [vm.$nextTick](https://cn.vuejs.org/v2/api/#vm-nextTick) 替换掉 `updated`



- template

  在数据渲染的过程中，插值表达式和v-text的作用是一致的，v-html则相对来说不太安全, PS :::   v-xxx="变量"

![1541425574096](C:\Users\callm\AppData\Roaming\Typora\typora-user-images\1541425574096.png)

- computed

（1）不想太多的逻辑在页面上，最好的办法是使用计算属性。

（2）计算属性带有缓存机制，当计算属性依赖的数据没有发生改变时就不用再重新计算啦.

![1541426445524](C:\Users\callm\AppData\Roaming\Typora\typora-user-images\1541426445524.png)

计算属性直接通过名字就可以在页面中进行调用，而函数则需要加括号进行使用。

- - - - getter 
      - setter

      ``` js
      var vm = new Vue({
          el:"#app",
          date:{
              firstName: "Gm",
              lastName: "Adisen"
          },
          computed: {
              fullName: {
                  get: function(){
                      return this.firstName + " " + this.lastName
                  },
                  set: function(value){
                      var arr = value.split(" ");
                      this.firstName = arr[0];
                      this.lastName = arr[1];
                  }
              }
          }
      })
      vm.fullName = "Mike Wang"
      ```

- watch

当被依赖的变量其中一个数据发生改变的时候，整个监听都重新渲染

![1541426749384](C:\Users\callm\AppData\Roaming\Typora\typora-user-images\1541426749384.png)



- 样式绑定

（1）

```html
#activated{
	color:red
}
<div id="app">
    <div @click="handleClick" :class="{activated: isActivated}">
        Hello world
    </div>
</div>
<script>
    var vm = new Vue({
        el: "#app",
        data:{
            isActivated: false
        },
        methods:{
            handleClick(){
                this.isActivated = !this.isActivated;
            }
        }
    })
</script>	
```

（2）

![1541429975992](C:\Users\callm\AppData\Roaming\Typora\typora-user-images\1541429975992.png)



![1541430046928](C:\Users\callm\AppData\Roaming\Typora\typora-user-images\1541430046928.png)

（3）

![1541430207622](C:\Users\callm\AppData\Roaming\Typora\typora-user-images\1541430207622.png)

上面的 :style 也可以这么写  '20px'这里是单引号

![1541430378572](C:\Users\callm\AppData\Roaming\Typora\typora-user-images\1541430378572.png)



- v-if v-else-if v-else

``` html
<div id="app">
    <div v-if="show">
    	用户名：<input key="username" />
    </div>
    <div v-else>
    	邮箱名：<input key="password" />
    </div>
</div>
//上面这些代码如果不加入key的话 当show的值发生变化的时候 input不会被重新渲染
//加入key之后 vue模板在渲染的时候就不会认为他们是同一个input了

```



- vue数组

``` js
pop push shift unshift splice sort reverse
```

上述这些方法操作数组的时候，页面才会跟着响应

或者  改变数据的引用地址 vm.list = [{...}] 里面重新定义一些值

Vue.set(元数据，新增，新增)

vm.$set(vm.userInfo, "address", "beijing")  ----   给userInfo这个对象添加一个新的项并赋值为beijing

![1541596184434](C:\Users\callm\AppData\Roaming\Typora\typora-user-images\1541596184434.png)

- template

这个template 模板占位符，这个占位符在渲染的时候并不会被渲染到页面之上，但是却可以帮助我们做一些循环和判断操作，例如

``` html
<template v-for="(item, index) of list" :key="item.id">
    
</template>

<template v-if="">
    ul>li*3>a	
</template>
<template v-else="">
    ul>li*3>a	
</template>

```



至此 第三部分结束

<hr/>





