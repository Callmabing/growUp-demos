##### #redux

``` jsx
redux 核心包含以下几个模块

store  reducer actionCreator app.js actionTypes actionCreator

app.js充当UIcomponent的角色

当app.js中需要操作数据的时候会通过 store.dispatch() 发送一个 action 给 store ,  store 接收这个 action 然后将其传递 reducer,  reducer 会根据这个 action 对 state 进行操作 ，将新的 state 返回给 store, store 会渲染这个新的 state ,app.js 会通过 store.subscribe()方法监听 store 是否变化，一旦发生变化 就会立刻调用 store.subscribe(fn)中的 fn 方法

```

app.js

``` js
import store from './components/store'

this.state = store.getState();
store.subscribe(fn);
```

store.js

``` js
import { createStore } from 'redux';
import reducer from './reducers'

const store = createStore(
    reducer,
    //下面这段话是为了配合谷歌浏览器的 redux插件使用的
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```

reducer.js

``` js
const defaultState = {
    inputValue:'666',
    list:[]
}

export default(state = defaultState,action)=>{
    if(action.type === 'set_inputValue_null'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    。。。 SOME CODE 。。。
    if(action.type === 'change_inputValue'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    return state;
}
```

actionTypes.js

``` js
export const ADD_INPUT_VALUE = 'add_input_value';
... ...
将每个action中的type定义出来，防止在书写过程中产生错误。
```

actionCreators.js

``` js
import { ADD_INPUT_VALUE } from './actionTypes'

export const addInputAction = (value) => ({
    type:ADD_INPUT_VALUE,
    value
})
...
这样，在页面中就不用写const action = { type:ADD_INPUT_VALUE,value }
直接写             const action = addInputAction(value)
```





当一个普通的组件只有一个render函数的时候，完全可以通过一个无状态组件进行替换：

```js
class TodoList extends React.Component{
    render(){
        return(
        	... ...
        )
    }
}

const TodoLIst = (props) => {
	return(
    	... ...
    )
}
```

