import {
  ADD_TODO_DATA_STATE,
  UPDATE_TODO_DATE_STATE,
  DELETE_TODO_TASK_STATE,
} from "../actions/toDoList-action";

const initialState = {
  taskList: [],
};

const toDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_DATA_STATE:
      const addedTaskArray = [...state.taskList, action.addToDoData];
      return { ...state, taskList: addedTaskArray };

    case UPDATE_TODO_DATE_STATE:
      const toDoListArr = state.taskList.map((dataObj, index) => {
        if (index === action.toDoTaskId) {
          return {
            ...dataObj,
            completed: true,
          };
        } else {
          return dataObj;
        }
      });
      return { ...state, taskList: toDoListArr };

    case DELETE_TODO_TASK_STATE:
      console.log("test");
      const filteredArr = state.taskList.filter(
        (dataObj, index) => index !== action.deleteTaskId
      );
      return { ...state, taskList: filteredArr };
    default:
      return state;
  }
};

export default toDoListReducer;
