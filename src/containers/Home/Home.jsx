import React from "react";
import { Container, Row } from "react-bootstrap";
import AddTodo from "../../components/AddTodo/AddTodo.jsx";
import TodoList from "../../components/TodoList/TodoList.jsx";
import VisibilityFilter from "../../components/VisibilityFilter/VisibilityFilter.jsx";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Container className={styles.homeContainer} fluid>
        <Row>
          <AddTodo />
          <VisibilityFilter />
          <TodoList />
        </Row>
      </Container>
    </>
  );
};

export default Home;
