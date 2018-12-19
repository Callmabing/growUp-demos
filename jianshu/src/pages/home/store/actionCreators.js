import * as type from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const getRecommend = (data) => ({
  type: type.GET_RECOMMEND,
  data: fromJS(data)
})

export const getRecommendList = () => {
  return (dispatch) => {
    axios.get('/api/recommendList.json').then((res) => {
      const { data } = res.data;
      dispatch(getRecommend(data));
    }).catch(() => {
      console.log('error');
    })
  }
}
