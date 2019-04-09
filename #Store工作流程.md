#### #Redux

- web应用是一个状态机，视图与状态是一一对应的
- 所有的状态，保存在一个对象里面



![1539662384761](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1539662384761.png)



##### - store     ---  保存数据

`store`是保存数据的容器，整个应用只能有一个`store`,`React`提供了`createStore`这个函数来生成`Store`

```js
import { createStore } from 'redux';
const store = createStore(fn)
```

##### - state    ---  某一时刻的状态数据

`state`是某个时刻的数据，`store`对应生成的快照，当前时刻的`state`,可以通过`store.getState()`拿到。

``` js
import { createStore } from 'redux';
const store = createStore(fn);
const state = store.getState();
一个state对应一个View   state <=> view
```

#####  - Action   ---  view的指令

`state` ===导致=== >`View`变化，`View`发出通知 ==`Action`==>`State`应该要变化了

其中`action`的`type`属性是必须的，表示`action`的名称。

``` js
const action={
    type:'ADD_TODO',
    payload:'Learn Redux'
}

上述代码表示，action的名称是‘ADD_TODO’，携带的信息是字符串‘Learn Redux’

action描述当前发生的事情，改变State的唯一办法，就是使用action，它会运送数据到Store
```

##### - Action Creator  --- 指令生成器

`View` 要发送多少种消息，就会有多少种 `Action`。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫` Action Creator`。

``` js
const ADD_TODO = '添加 TODO';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  }
}

const action = addTodo('Learn Redux');
```

##### - store.dispatch()  ---  指令发送器

`store.dispatch()`是 View 发出 Action 的唯一方法.

```js
import { createStore } from 'redux';
const store = createStore(fn);

store.dispatch({
    type:'ADD_TODO',
    payload:'Learn Redux'
})
```

`store.dispath`接受一个`Action`对象作为参数,将它发送出去，结合`Action Creator`，这段代码可以改写如下：

```js
store.dispatch(addTodo('learn Redux'))
```

##### - Reducer   ---  指令处理器

`Store`收到`Action`后，必须给出一个新的`state`，这样`View`才会发生变化。这种`State`的计算过程就叫`Reducer`

`Reducer`是一个函数，它接受`Action`和当前`State`作为参数，返回一个新的`State`

``` js
const reducer = function (state, action) {
  // ...
  return new_state;
};
```

整个应用的初始状态，可以作为`State`的默认值：

``` js
const defaultState = 0;
const reducer = (state = defaultState,action)=>{
    switch(action.type){
        case "ADD":
            return state + action.payload;
        default:
            return state;
    }
}
const state = reducer(1,{
    type:'ADD',
    payload:2
})
```

`Reducer`方法可以在`store.dispatch`时自动触发，执行。做法如下：

``` js
import { createStore } from 'redux';
const store = createStore(reducer);
```

##### - store.subscribe()  ---  指令监听器

Store 允许使用`store.subscribe`方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。

``` js
import { createStore } from 'redux';
const store = createStore(reducer);

store.subscribe(listener);

只要把 View 的更新函数（对于 React 项目，就是组件的render方法或setState方法）放入listen，就会实现 View 的自动渲染。
```

解除监听

``` js
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

unsubscribe();
```





#### - Store的实现

``` js
- store.getState()  获取一个新的state
- store.dispatch()  发送action
- store.subscribe() 监听state的变化
```

``` js
import { createStore } from 'redux';
let { subscribe,dispatch,getState } = createStore(reducer);

let store = createStore(todoApp, window.STATE_FROM_SERVER);
```

`createStore`方法还可以接受第二个参数，表示 State 的最初状态。这通常是服务器给出的。

> ```javascript
> let store = createStore(todoApp, window.STATE_FROM_SERVER)
> ```

上面代码中，`window.STATE_FROM_SERVER`就是整个应用的状态初始值。注意，如果提供了这个参数，它会覆盖 Reducer 函数的默认初始值。



`createStore`方法的简单实现：

``` js
const createStore = (reducer)=>{
    let state;
    let listeners = [];
    
    const getState = () => state;
    
    const dispatch = (action) => {
        state = reducer(state,action);
        listeners.forEach(listener => listener());
    }
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    };

    dispatch({});

    return { getState, dispatch, subscribe };
}
```



#### - Reducer的拆分

Reducer函数负责生成State。由于整个应用只有一个State对象，包含所有数据，对于大型应用来说，这个State必然十分庞大，导致Reducer函数也十分庞大。

``` js
const chatReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CHAT:
      return Object.assign({}, state, {
        chatLog: state.chatLog.concat(payload)
      });
    case CHANGE_STATUS:
      return Object.assign({}, state, {
        statusMessage: payload
      });
    case CHANGE_USERNAME:
      return Object.assign({}, state, {
        userName: payload
      });
    default: return state;
  }
};
```

上面代码中，三种 Action 分别改变 State 的三个属性。

> - ADD_CHAT：`chatLog`属性
> - CHANGE_STATUS：`statusMessage`属性
> - CHANGE_USERNAME：`userName`属性

这三个属性之间没有联系，这提示我们可以把 Reducer 函数拆分。不同的函数负责处理不同属性，最终把它们合并成一个大的 Reducer 即可。

> ```javascript
> const chatReducer = (state = defaultState, action = {}) => {
>   return {
>     chatLog: chatLog(state.chatLog, action),
>     statusMessage: statusMessage(state.statusMessage, action),
>     userName: userName(state.userName, action)
>   }
> };
> ```
>
>   上面代码中，Reducer 函数被拆成了三个小函数，每一个负责生成对应的属性。
>
> 这样一拆，Reducer 就易读易写多了。而且，这种拆分与 React 应用的结构相吻合：一个 React 根组件由很多子组件构成。这就是说，子组件与子 Reducer 完全可以对应。
>
> Redux 提供了一个`combineReducers`方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。

```javascript
import { combineReducers } from 'redux';

const chatReducer = combineReducers({
  chatLog,
  statusMessage,
  userName
})

export default todoApp;
```

上面的代码通过`combineReducers`方法将三个子 Reducer 合并成一个大的函数。

这种写法有一个前提，就是 State 的属性名必须与子 Reducer 同名。如果不同名，就要采用下面的写法。

```javascript
const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
})

// 等同于
function reducer(state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  }
}
```

总之，`combineReducers()`做的就是产生一个整体的 Reducer 函数。该函数根据 State 的 key 去执行相应的子 Reducer，并将返回结果合并成一个大的 State 对象。

下面是`combineReducer`的简单实现。

```javascript
const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState;
      },
      {} 
    );
  };
};
```

你可以把所有子 Reducer 放在一个文件里面，然后统一引入。

> ```javascript
> import { combineReducers } from 'redux'
> import * as reducers from './reducers'
> 
> const reducer = combineReducers(reducers)
> ```





### Store工作流程

![1539668447139](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1539668447139.png)

