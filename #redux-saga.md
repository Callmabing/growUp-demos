### #redux-saga

1 - 按照官方文档配置好redux-saga的使用环境

*参考配置地址：* https://github.com/redux-saga/redux-saga

index.js

![1540996557241](C:\Users\callm\AppData\Roaming\Typora\typora-user-images\1540996557241.png)

创建一个文件 sagas.js

``` js
import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreator'
import Axios from 'axios';

function* getInitList(){
    const res = yield Axios.get('/list.json');
    const action = initListAction(res.data);
    yield put(action)
}
function* mySaga(){
    yield takeEvery(GET_INIT_LIST,getInitList);
}

export default mySaga;
```

