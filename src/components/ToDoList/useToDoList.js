import { useState, useEffect } from 'react';

const useTodoList = ({ todoList }) => {
  const [pendingTodoList, setPendingTodoList] = useState(null);
  const [completeTodoList, setCompleteTodoList] = useState(null);
  useEffect(() => {
    if (todoList) {
      const mappedTodoList = todoList.map((dataObj, index) => {
        return { ...dataObj, key: index };
      });
      const completedTodo = mappedTodoList.filter((todoObj) => {
        if (todoObj && todoObj.completed) {
          return todoObj;
        }
      });
      const pendingTodo = mappedTodoList.filter((todoObj) => {
        if (todoObj && !todoObj.completed) {
          return todoObj;
        }
      });
      setCompleteTodoList(completedTodo);
      setPendingTodoList(pendingTodo);
    }
  }, [todoList]);

  return [pendingTodoList, completeTodoList];
};

export default useTodoList;
