import * as type from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFoucs = () => ({
  type: type.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: type.SEARCH_BLUR
})
const change_list = (data) => ({
  type: type.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length/8)
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
// 更改搜索推荐的显示状态
export const mouseEnter = () => ({
  type: type.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: type.MOUSE_LEAVE
})

// 切换页面
export const changePage = () => ({
  type: type.CHANGE_PAGE
})