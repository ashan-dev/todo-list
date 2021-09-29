import { useState, useEffect } from "react";

const useTodoList = ({ todoList }) => {
  const [pendingTodoList, setPendingTodoList] = useState(null);
  const [completeTodoList, setCompleteTodoList] = useState(null);
  useEffect(() => {
    if(todoList){
    const completedTodo = todoList.filter((todoObj) => {
      if (todoObj && todoObj.completed) {
        return todoObj;
      }
   
    },[]);
    const pendingTodo = todoList.filter((todoObj) => {
        if (todoObj && !todoObj.completed) {
          return todoObj;
        }
      });
    setCompleteTodoList(completedTodo);
    setPendingTodoList(pendingTodo);
    }
  },[todoList]);

  return [pendingTodoList,completeTodoList]
}

export default useTodoList;
