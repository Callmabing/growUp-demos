react css动画

- 原生 css

```js
.show {
    opacity: 1;
    transition: all 1s ease-in
}
.hide {
	animation: hide-item 2s ease-in forwards;//forwards可以让元素保留在最后一帧的状态
}
@keyframes hide-item {
    0% {
        opacity: 1;
        color: red;
    }        
    50% {
        opacity: 0.5;
        color: green;
    }
    100% {
        opacity: 0;
        color: blue;
    }
}
```

- react-transition-group

``` js
yarn add react-transition-group
```

使用

```jsx
import { CSSTransitionGroup } from 'react-transition-group'

<CSSTransitionGroup
	in={this.state.show} //什么时候自动增加样式
	timeout={1000}  //动画执行时间
	classNames="fade"
	unmountOnExit //隐藏的时候对应的dom也被隐藏了
    onEntered={(el) => {el.style.color='blue'}} //这个el指里面的div
    appear={true} //第一次显示hello的时候就添加上动画
>
    <div>hello</div>
</CSSTransitionGroup>
        
//CSSTransitionGroup 会自动向这个元素挂载一些样式
```

![1542036915680](C:\Users\callm\AppData\Roaming\Typora\typora-user-images\1542036915680.png)

```jsx
//如上图
style.css

.fade-enter { //appear添加后 进入动画会默认添加一个.fade-appear类
     opacity: 0;
 }
.fade-enter-active { //appear添加后 会默认添加 .fade-appear-active 类
    opacity: 1;
    trandition: opacity 1s ease-in;
}
.fade-enter-done {  //入场动画执行完成之后，增加到a标签上
    opacity: 1
}

.fade-exit {  //出场动画执行的第一个动画
    opacity: 1;
}
.fade-exit-active {  //出场动画执行过程中一直存在
    opacity: 0;
    transition: opacity 1s ease-in;
}
.fade-exit-done { //出场动画执行完成后添加
    opacity: 0;
}
```

