import useTodoInput from "./useTodoInput";
import { addTodoAction } from "../redux/actions/todoList-action";

export default () => {
  const onSubmit = () => {
    setText("");
  };
  const {
    setText,
    onSubmitHandler,
    ...rest
  } = useTodoInput({ action: addTodoAction, onSubmit });


  return { ...rest, onSubmitHandler };
};
