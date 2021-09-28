import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styles from "./AddToDo.module.scss";
import { BsFillPlusCircleFill } from "react-icons/bs";
const AddToDo = ({
  toDoDataListProps,
  onChangeTaskHandler,
  task,
  addingTaskHandler,
}) => {
  return (
    <Row className="mb-3">
      <Col xs={{span:10, offset:1}} className={styles.addTaskContainer}>
        <Form.Control
          onChange={(e) => {
            onChangeTaskHandler(e.target.value);
          }}
          type="text"
          value={task ? task.task : ""}
          placeholder="Add a task"
        />
        <div className={styles.buttonContainer}>
          <BsFillPlusCircleFill
            onClick={addingTaskHandler}
            className={styles.button}
            style={{ color: "#8fd5ff", fontSize: 26 }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default AddToDo;
