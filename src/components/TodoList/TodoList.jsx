import React from "react";
import { Row, Col } from "react-bootstrap";
import TodoItem from "./../TodoItem/TodoItem";
import useTodoList from "../../utils/useTodoList";

const TodoList = () => {
  const { todos } = useTodoList();
  return (
    <Row>
      <Col style={{ marginTop: "10px" }} xs={{ span: 11, offset: 1 }}>
        <>
          {todos && todos.length > 0 ? (
            todos.map((id) => <TodoItem key={id} id={id} />)
          ) : (
            <span style={{ color: "darkorchid" }}>{"  "}Yay! No todos!</span>
          )}
        </>
      </Col>
    </Row>
  );
};

export default TodoList;
