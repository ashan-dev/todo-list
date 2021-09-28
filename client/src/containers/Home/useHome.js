import { useState } from "react";

const useHome = ({
  toDoDataListProps,
  updatingToDoDatalistProps,
  deleteToDoDatalistProps,
}) => {
  const [task, setTask] = useState(null);

  const addingTaskHandler = () => {
    toDoDataListProps(task);
    setTask(null);
  };

  const onChangeTaskHandler = (task) => {
    setTask({
      task: task,
      completed: false,
    });
  };

  const completedTaskHandler = (id) => {
    updatingToDoDatalistProps(id);
  };

  const deletedTaskHandler = (id) => {
    deleteToDoDatalistProps(id);
  };

  return [
    task,
    addingTaskHandler,
    onChangeTaskHandler,
    completedTaskHandler,
    deletedTaskHandler,
  ];
};

export default useHome;
