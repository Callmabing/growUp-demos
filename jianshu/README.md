记录点：

向函数传参

1.  ``` js
   // 向该函数传参数
   const getListArea = (show) => {
       return show && (
               <SearchInfo>
               <SearchInfoTitle>
                   热门搜索
                   <SearchInfoSwitch>换一批</SearchInfoSwitch>
               </SearchInfoTitle>
               <UlBox>
                   <LiItem><LiItemA>区块链</LiItemA></LiItem>
                   <LiItem><LiItemA>带你看世界</LiItemA></LiItem>
                   <LiItem><LiItemA>艺术人生</LiItemA></LiItem>
                   <LiItem><LiItemA>小程序</LiItemA></LiItem>
                   <LiItem><LiItemA>小程序</LiItemA></LiItem>
               </UlBox>
           </SearchInfo>
       )
   }
   const fn = () => {
       return (
       	{getListArea('参数')}
       )
   }
    ```

2. 返回时，可以按照如下格式返回，当返回结果为真时

```js
return xxx && ()
```

3. `immutable.js`这个插件会让数据持久化，当给数据赋值初始值时，就会被转换成`immutable`的对象，

   此时如果继续向里面添加内容，会导致错误，因为数据结构已经不再是初始值的内容：

   可按照如下方法解决：

   ```js
   import { fromJS } from 'immutable';
   
   reducer中初始值：
   import { fromJS } from 'immutable';
   
   const defaultState = fromJS({  
     focused: false,
     list: [] // 1. 此处采用了formJS 
   });
   。。。 。。。
   case type.CHANGE_LIST:
         return state.set('list', action.data) // 3.  这样数据才能存放进入
   。。。 。。。
   
   
   在actions中派发action:
   const change_list = (data) => ({
     type: type.CHANGE_LIST,
     data: fromJS(data) // 2. 此处应与之对应
   })
   export const getList = () => {
     return (dispatch) => {
       axios.get('/api/headerList.json').then((res) => {
         const { data } = res.data;
         dispatch(change_list(data));
       }).catch(() => {
         console.log('error');
       })
     }
   }
   ```
