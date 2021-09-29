import React from "react";
import { Container, Row } from "react-bootstrap";
import AddToDo from "../../components/AddToDo/AddToDo.jsx";
import ToDoList from "../../components/ToDoList/ToDoList.jsx";
import useHome from "./useHome";
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
  const [
    {
      task,
      editedTask,
      addingTaskHandler,
      onChangeTaskHandler,
      editTaskHandler,
      onEditTaskHandler,
      completedTaskHandler,
      deletedTaskHandler,
    },
  ] = useHome({
    toDoDataListProps,
    updatingToDoDatalistProps,
    deleteToDoDatalistProps,
  });

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
            editedTask={editedTask}
            editTaskHandler={editTaskHandler}
            onEditTaskHandler={onEditTaskHandler}
            completedTaskHandler={completedTaskHandler}
            deletedTaskHandler={deletedTaskHandler}
          />
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  todoList: state.toDoListState?.taskList,
});

const mapDispatchToProps = (dispatch) => ({
  toDoDataListProps: (payload) => dispatch(toDoDataListAction(payload)),
  updatingToDoDatalistProps: (payload) =>
    dispatch(updateToDoDatalistAction(payload)),
  deleteToDoDatalistProps: (payload) =>
    dispatch(deleteToDoDatalistAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
