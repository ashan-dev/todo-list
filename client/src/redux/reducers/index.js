import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import userReducer from './user-reducer';
import toDoListReducer from './toDoList-reducer';

const rootReducer = (state, action) => {
  if (action.type === 'SET_FIREBASE_LOGOUT_SUCCESS') {
    storage.removeItem('persist:root');
    state.userState = null;
    state.toDoListState = [];
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  userState: userReducer,
  toDoListState: toDoListReducer,
});

export default rootReducer;
