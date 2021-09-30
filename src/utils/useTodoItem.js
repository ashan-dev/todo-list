import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTodoInput from "./useTodoInput";
import { getTodo } from "../redux/selectors/todoList-selectors";
import {
  editTodoAction,
  deleteTodoAction,
  toggleTodoAction,
} from "../redux/actions/todoList-action";

export default (id) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  // todo data
  const { text: oldText, completed } = useSelector(getTodo(id));

  const action = (text) => editTodoAction(id, text);
  // editing part
  const onEditDone = () => {
    setIsEditing(false);
  };

  const {
    text: newText,
    setText: setEditText,
    onChangeHandler,
    onKeyUpHandler,
    onSubmitHandler: onEditDoneTodoHandler,
  } = useTodoInput({ initialText: oldText, action, onSubmit: onEditDone });

  const text = isEditing ? newText : oldText;

  const onEditStartTodoHandler = () => {
    setIsEditing(true);
  };

  const onEditCancelTodoHandler = () => {
    setIsEditing(false);
    setEditText(oldText);
  };

  const onDeleteTodoHandler = () => {
    dispatch(deleteTodoAction(id));
  };

  const toggleCompletedHandler = () => {
    dispatch(toggleTodoAction(id));
  };

  return {
    text,
    completed,
    isEditing,
    toggleCompletedHandler,
    onEditStartTodoHandler,
    onChangeHandler,
    onKeyUpHandler,
    onEditDoneTodoHandler,
    onEditCancelTodoHandler,
    onDeleteTodoHandler,
  };
};
