import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddToDo from "../../components/AddToDo/AddToDo.jsx";
import ToDoList from "../../components/ToDoList/ToDoList.jsx";
import { connect } from "react-redux";
import {
  toDoDataListAction,
  updateToDoDatalistAction,
  deleteToDoDatalistAction,
} from "../../redux/actions/toDoList-action";


import styles from "./Home.module.scss";

const Home = ({
  toDoDataListProps,
  updatingToDoDatalistProps,
  todoList,
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
  return (
    <>
      <Container className={styles.homeContainer} fluid>
        <Row>
          <AddToDo
            toDoDataListProps={toDoDataListProps}
            onChangeTaskHandler={onChangeTaskHandler}
            addingTaskHandler={addingTaskHandler}
            task={task}
          />
          <ToDoList
            todoList={todoList}
            completedTaskHandler={completedTaskHandler}
            deletedTaskHandler={deletedTaskHandler}
          />
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  todoList: state.toDoListState.taskList,
});

const mapDispatchToProps = (dispatch) => ({
  toDoDataListProps: (payload) => dispatch(toDoDataListAction(payload)),
  updatingToDoDatalistProps: (payload) =>
    dispatch(updateToDoDatalistAction(payload)),
  deleteToDoDatalistProps: (payload) =>
    dispatch(deleteToDoDatalistAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
