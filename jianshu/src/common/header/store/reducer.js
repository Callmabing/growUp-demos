import * as type from './actionTypes'; 
import { fromJS } from 'immutable';

const defaultState = fromJS({  
  focused: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case type.SEARCH_FOCUS:
      return state.set('focused', true);
    case type.SEARCH_BLUR:
      return state.set('focused', false);
    default:
      return state;
  }
}