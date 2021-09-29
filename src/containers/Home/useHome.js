import { useState } from "react";

const useHome = ({
  toDoDataListProps,
  updatingToDoDatalistProps,
  deleteToDoDatalistProps,
}) => {
  const [task, setTask] = useState(null);
  const [editedTask, setEditedTask] = useState(null);

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

  const onEditTaskHandler = (task) => {
    setEditedTask(task);
  };

  const editTaskHandler = (id) => {
    alert("test");
    console.log(id);
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
      editedTask,
      addingTaskHandler,
      onChangeTaskHandler,
      onEditTaskHandler,
      completedTaskHandler,
      deletedTaskHandler,
      editTaskHandler,
    },
  ];
};

export default useHome;
