export const ADD_TODO_DATA_STATE = "ADD_TODO_DATA_STATE";
export const UPDATE_TODO_DATE_STATE = "UPDATE_TODO_DATE_STATE";
export const DELETE_TODO_TASK_STATE = "DELETE_TODO_TASK_STATE";

const addToDoData = (addToDoData) => ({
  type: ADD_TODO_DATA_STATE,
  addToDoData,
});

const updateToDoData = (toDoTaskId) => ({
  type: UPDATE_TODO_DATE_STATE,
  toDoTaskId,
});

const deleteTaskData = (deleteTaskId) =>({
  type: DELETE_TODO_TASK_STATE,
  deleteTaskId,
})

export const toDoDataListAction = (singleAddedData) => {
  return async (dispatch) => {
    dispatch(addToDoData(singleAddedData));
  };
};

export const updateToDoDatalistAction = (toDoTaskId) => {
  return async (dispatch) => {
    dispatch(updateToDoData(toDoTaskId));
  };
};

export const deleteToDoDatalistAction = (deleteTaskId) => {
  return async (dispatch) => {
    dispatch(deleteTaskData(deleteTaskId));
  };
};



