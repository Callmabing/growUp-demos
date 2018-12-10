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
  data: fromJS(data)
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