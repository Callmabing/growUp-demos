import * as type from './actionTypes'; 

const defaultState = {  
  focused: false
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case type.SEARCH_FOCUS:
      return {
        focused: true
      }
    case type.SEARCH_BLUR:
      return {
        focused: false
      }
    default:
      return state;
  }
}