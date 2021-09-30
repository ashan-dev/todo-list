import { useSelector } from "react-redux";
import {
  getAllTodoIds,
  getTodo,
  getTodos,
} from "../redux/selectors/todoList-selectors";
import { getFilter } from "../redux/selectors/todoFilter-selectors";
import { VISIBILITY_FILTER } from "../redux/actions/todoFilter-action";

export default () => {
  const allTodoIds = useSelector(getAllTodoIds);
  const allTodos = useSelector(getTodos);
  const activeFilter = useSelector(getFilter);

  const getFilteredTodoIds = () => {
    switch (activeFilter) {
      case VISIBILITY_FILTER.COMPLETED: {
        return allTodos.filter((item) => item.completed).map(({ id }) => id);
      }
      case VISIBILITY_FILTER.INCOMPLETED: {
        return allTodos.filter((item) => !item.completed).map(({ id }) => id);
      }
      case VISIBILITY_FILTER.ALL:
      default:
        return allTodoIds;
    }
  };

  return {
    todos: getFilteredTodoIds(),
  };
};
