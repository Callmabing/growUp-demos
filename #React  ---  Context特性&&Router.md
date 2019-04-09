#### #React  ---  Context特性

- 注意：如果不熟悉React中的数据流，不推荐使用这个属性
- 作用：跨级传递数据(爷爷给孙子传递数据)，避免向下每层手动地传递props
- 说明：需要配合PropTypes类型限制来使用

```jsx
class Grandfather extends React.Component{
    //类型限制（必须），静态属性名称固定
    static childContextTypes = {
        color: PropTypes.string.isRequired
    }
    //传递给孙子组件的数据
    getChildContext(){
        return{
            color:red
        }
    }
    render(){
        return(
        	<Father></Father>
        )
    }
}
class Child extends React.Component{
    //类型限制，静态属性名字固定
    static contextTypes = {
        color:PropTypes.string
    }
    render(){
		return(
        	//从上下文对象中获取爷爷组件传递过来的数据
            <h1 style={{color:this.context.color}}>爷爷告诉我：文字是红色的</h1>
        )
    }
}
class Father extends React.Component{
    render(){
        return(
        	<Child></Child>
        )
    }
}
```



#### #React-router 入门

- `Router`组件本身只是一个容器，真正的路由要通过`Route组件`定义

**使用步骤**

+ 1 导入路由组件

```jsx
import {HashRouter as Router,Link,Router} from 'react-router-dom'
```

+ 2 使用 `<Router></Router>` 作为根容器，包裹整个应用（JSX）
  - 在整个应用程序中，只需要使用一次

```jsx
<Router>
	someCode...
    3和4的内容放入这里
</Router>
```

+ 3 使用 `<Link to="/movie"></Link>` 作为链接地址，并指定`to`属性

```jsx
<Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
<Menu.Item key="2"><Link to="/movie">电影</Link></Menu.Item>
<Menu.Item key="3"><Link to="/about">关于</Link></Menu.Item>
```

+ 4 使用 `<Route path="/" compoent={Movie}></Route>` 展示路由内容

```jsx
//exact 表示：绝对匹配（完全匹配，只匹配：/）
<Route exact path="/" component={HomeContainer}></Route>
<Route path="/movie" component={MovieContainer}></Route>
<Route path="/about" component={AboutContainer}></Route>
```

**注意点**

+ `<Router></Router>`：作为整个组件的根元素，是路由容器，只能有一个唯一的子元素
+ `<Link></Link>`：类似于vue中的`<router-link></router-link>`标签，`to` 属性指定路由地址
+ `<Route></Route>`：类似于vue中的`<router-view></router-view>`，指定路由内容（组件）展示位置



**路由参数**

- 配置：通过`Route`中的path属性来配置路由参数

- 获取：`this.props.match.params` 获取

```jsx
// 配置路由参数
<Route path="/movie/:movieType"></Route>

// 获取路由参数
const type = this.props.match.params.movieType
```



**路由跳转**

- react router - history
- `history.push()` 方法用于在JS中实现页面跳转
- `history.go(-1)`用来实现页面的前进(1)和后退(-1)

``` jsx
this.props.history.push('/movie/movieDetail' + movieId)
```

