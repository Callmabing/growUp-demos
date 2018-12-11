import * as type from './actionTypes'; 
import { fromJS } from 'immutable';

const defaultState = fromJS({  
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case type.SEARCH_FOCUS:
      return state.set('focused', true);
    case type.SEARCH_BLUR:
      return state.set('focused', false);
    case type.CHANGE_LIST:
      return state.merge({
        'list': action.data,
        'totalPage': action.totalPage
      });
    case type.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case type.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case type.CHANGE_PAGE:
      let newPage = state.get('page') + 1;
      if(newPage === state.get('totalPage')) {
        newPage = 1;
      }
      return state.set('page', newPage);
    default:
      return state;
  }
}