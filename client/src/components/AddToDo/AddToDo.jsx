import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import styles from "./AddToDo.module.scss";

const AddToDo = ({ onChangeTaskHandler, task, addingTaskHandler }) => {
  return (
    <Row className="mb-3">
      <Col xs={{ span: 10, offset: 1 }} className={styles.addTaskContainer}>
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
