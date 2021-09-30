export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
// export const CLEAR_TODO_LIST = "CLEAR_TODO_LIST";

const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

const editTodo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text,
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,  // toggle todo complete state
  id,
});

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const addTodoAction = (text) => {
  return async (dispatch) => {
    dispatch(addTodo(text));
  };
};

export const editTodoAction = (id, text) => {
  return async (dispatch) => {
    dispatch(editTodo(id, text));
  };
};

export const toggleTodoAction = (id) => {
  return async (dispatch) => {
    dispatch(toggleTodo(id));
  };
};

export const deleteTodoAction = (id) => {
  return async (dispatch) => {
    dispatch(deleteTodo(id));
  };
};
