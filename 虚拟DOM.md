### 虚拟DOM

**2018-10-11  callmabing@163.com**



面试过程中常常会问及虚拟DOM，在这里结合`React`总结一下        <small>其他框架原理相同</small>：

##### 1.传统Dom的渲染

```
传统的DOM操作：
(1)state 数据
(2)JSX 模板
(3)数据 + 模板 结合，生成真实的DOM,用来显示在页面上 [消耗性能]
(4)state 数据发生改变
(5)数据 + 模板 结合，生成真实的DOM,替换原始的DOM  [super消耗性能]
```

##### 2.改进后的Dom渲染

```jsx
DOM的形成按照以下步骤
(1)state 数据
(2)JSX 模板
(3)数据 + 模板 结合，生成真实的DOM,用来显示在页面上 [消耗性能]
(4)state 数据发生改变
(5)新state数据 + 模板 结合，生成新的真实的DOM,并不直接替换原始DOM [消耗性能]
(6)新的DOM 和 原始的DOM 做对比，找差异 [消耗性能]
(7)找出变化的内容，例如span内容发生改变
(8)用新的DOM中的span标签，替换掉老的DOM中的span标签
```

**缺陷**：

性能并未做太大提升

##### 3.虚拟Dom的渲染

```html
虚拟DOM按照以下步骤执行：
(1)state 数据
(2)JSX 模板

(4)生成虚拟DOM(即一个javaScript对象，用它来描述真实DOM) [消耗性能，但js操作远比DOM消耗上要小很多] 描述如下：
['div',{id:'abc'},['span',{},'bye bye']]

(3)数据 + 模板 结合，生成真实的DOM,用来显示在页面上 [消耗性能] 例如生成以下DOM:
<div id='abc'><span>hello world</span></div>

(5)state数据发生变化
(6)数据 + 模板 生成新的虚拟DOM [而不是再渲染DOM，此操作极大的提升性能] 描述如下：
['div',{id:'abc'},['span',{},'Hello React']]
(7)比较原始虚拟DOM和新虚拟DOM的区别，找到区别【span中的内容】 [js对比，性能很高]
(8)直接操作DOM，改变span中的内容
```



附：

JSX  = >  createElement => 虚拟DOM(javascript对象) => 真实DOM

```html
return <div><span>item</span></div>
```

React实现：

```js
return React.createElement('div',{},React.createElement('span',{},'item'))
```

