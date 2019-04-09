#### #React生命周期 

#### <small>参考来源：https://segmentfault.com/a/1190000012921279#articleHeader15</small>

intro:生命周期的意义在于，人们可以使用钩子函数参与并控制组件的行为。

**React:** 生命周期包含三个阶段（创建阶段 Mounting、运行和交互阶段 Updating、卸载阶段 Unmounting）

/1/. Mounting:

```js
constructor()
componentWillMount()
render()
componentDidMount()
```

/2/.Updating

```js
componentWillReceiveProps()
shouldComponentUpdate()
componentWillUpdate()
render()
componentDidUpdate()
```

/3/.Unmounting

```js
componentWillUnmount()
```

**创建阶段（Mounting）**

特点：该阶段的函数只会执行一次

