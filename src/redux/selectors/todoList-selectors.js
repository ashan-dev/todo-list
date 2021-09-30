const getTodoList = ({ todoList }) => todoList;

export const getAllTodoIds = (state) => {
  return getTodoList(state).allIds;
};

export const getTodo = (id) => (state) => {
  return { ...getTodoList(state).byIds[id], id };
};

export const getTodos = (state) =>
  getAllTodoIds(state).map((id) => getTodo(id)(state));

