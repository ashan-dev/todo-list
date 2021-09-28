import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import toDoListReducer from "./toDoList-reducer";

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const appReducer = combineReducers({
  userState: userReducer,
  toDoListState: toDoListReducer,
});

export default rootReducer;
