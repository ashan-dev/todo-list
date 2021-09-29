import React from "react";
import { Row, Col } from "react-bootstrap";
import ToDoItem from "./../ToDoItem/ToDoItem";
import useTodoList from "./useToDoList.js";

const ToDoList = ({
  todoList,
  editedTask,
  onEditTaskHandler,
  editTaskHandler,
  completedTaskHandler,
  deletedTaskHandler,
}) => {
  const [pendingTodoList, completeTodoList] = useTodoList({ todoList });
  return (
    <>
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <>
            {pendingTodoList && pendingTodoList.length > 0 && <p>Task to do</p>}
            {pendingTodoList &&
              pendingTodoList.length > 0 &&
              pendingTodoList.map((task, id) => (
                <ToDoItem
                  key={id}
                  task={task}
                  id={task.key}
                  editedTask={editedTask}
                  completedTaskHandler={completedTaskHandler}
                  deletedTaskHandler={deletedTaskHandler}
                  onEditTaskHandler={onEditTaskHandler}
                  editTaskHandler={editTaskHandler}
                />
              ))}
          </>
          <>
            {completeTodoList && completeTodoList.length > 0 && (
              <p>Completed</p>
            )}
            {completeTodoList &&
              completeTodoList.length > 0 &&
              completeTodoList.map((task, id) => (
                <ToDoItem
                  key={id}
                  task={task}
                  id={task.key}
                  completedTaskHandler={completedTaskHandler}
                  deletedTaskHandler={deletedTaskHandler}
                  editTaskHandler={editTaskHandler}
                />
              ))}
          </>
        </Col>
      </Row>
    </>
  );
};

export default ToDoList;
