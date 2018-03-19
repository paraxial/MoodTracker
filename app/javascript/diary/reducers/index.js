import { combineReducers } from 'redux'
import { CREATE_USER } from '../actions'

const defaultUserState = {
  user: null,
};

const userState = (state = defaultUserState, action) => {
  switch(action.type) {
    case CREATE_USER:
      //TODO: post to backend with action.user
      return state;
    default:
      return state;
  }
}

const diaryReducer = combineReducers({
  userState
})

export default diaryReducer;
