#### #Ref

`ref`这个属性是用来获取`DOM`节点的

```jsx
<input
    id="insertArea"
    className='input'
    value={this.state.inputValue}
    onChange={this.hanleInputChange}
	ref={ (input) => {this.input = input}} // node=>this.xx = node
/>
someCode...
... ...
... ...
handleInputChange(){
    const value = this.input.value;//这里不用再使用e来获取值 this.xx即代表当前元素
    someCode...
}
```

还有一点需要注意

``` jsx
在获取DOM元素时应注意异步操作
handleBtnClick(){
    this.setState((prevState)=>({
    	list:[...prevStete.list,prevState.inputValue],
        inputValue:''
    }),()=>{
        console.log(this.ul.querySelectorAll('div').length)
    })
}
```

