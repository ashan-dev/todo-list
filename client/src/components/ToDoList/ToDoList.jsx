import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styles from "./ToDoList.module.scss";
import ToDoItem from "./../ToDoItem/ToDoItem";

const ToDoList = ({ todoList, completedTaskHandler, deletedTaskHandler }) => {
  return (
    <>
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <p>Task to do</p>

          {todoList &&
            todoList.length > 0 &&
            todoList.map((task, id) => {
              if (!task.completed) {
                return (
                  <ToDoItem
                    key={id}
                    task={task}
                    id={id}
                    completedTaskHandler={completedTaskHandler}
                    deletedTaskHandler={deletedTaskHandler}
                  />
                );
              }
            })}

          <p>Completed</p>

          {todoList &&
            todoList.length > 0 &&
            todoList.map((task, id) => {
              if (task.completed)
                return (
                  <ToDoItem
                    key={id}
                    task={task}
                    id={id}
                    deletedTaskHandler={deletedTaskHandler}
                  />
                );
            })}
        </Col>
      </Row>
    </>
  );
};

export default ToDoList;
