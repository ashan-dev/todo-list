import { useState } from "react";

const useHome = ({
  toDoDataListProps,
  updatingToDoDatalistProps,
  deleteToDoDatalistProps,
}) => {
  const [task, setTask] = useState(null);
  const [editTask, setEditTask] = useState(null);
  const [editedTaskId, setEditedTaskId] = useState(null);

  const addingTaskHandler = () => {
    if (task) {
      toDoDataListProps(task);
    }
    setTask(null);
  };

  const onChangeTaskHandler = (task) => {
    setTask({
      task: task,
      completed: false,
    });
  };

  const onEditTaskHandler = (value, id) => {
    setEditTask(value);
    setEditedTaskId(id);
  };

  const editTaskHandler = (id) => {
    setEditedTaskId(id);
  };

  const completedTaskHandler = (id) => {
    updatingToDoDatalistProps(id);
  };

  const deletedTaskHandler = (id) => {
    deleteToDoDatalistProps(id);
  };

  return [
    {
      task,
      editedTaskId,
      addingTaskHandler,
      onChangeTaskHandler,
      onEditTaskHandler,
      completedTaskHandler,
      deletedTaskHandler,
      editTaskHandler,
      editTask
    },
  ];
};

export default useHome;
