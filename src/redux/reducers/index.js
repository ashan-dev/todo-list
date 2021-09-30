import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import userReducer from './user-reducer';
import { initialState as todoListInitialState, todoListReducer } from './todoList-reducer';
import { initialState as visibilityFilterInitialState, visibilityFilter } from './todoFilter-reducer';

const rootReducer = (state, action) => {
  if (action.type === 'SET_FIREBASE_LOGOUT_SUCCESS') {
    storage.removeItem('persist:root');
    state.userState = null;
    state.todoList = todoListInitialState;
    state.todoFilter = visibilityFilterInitialState;
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  userState: userReducer,
  todoList: todoListReducer,
  todoFilter: visibilityFilter,
});

export default rootReducer;
