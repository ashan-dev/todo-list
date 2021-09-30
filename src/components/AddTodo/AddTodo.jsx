import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import styles from "./AddTodo.module.scss";
import useAddTodo from "../../utils/useAddTodo";

const AddTodo = () => {
  const { text, onChangeHandler, onSubmitHandler, onKeyUpHandler } = useAddTodo();

  return (
    <Row className="mb-3">
      <Col xs={{ span: 10, offset: 1 }} className={styles.addTaskContainer}>
        <Form.Control
          onChange={onChangeHandler}
          onKeyUp={onKeyUpHandler}
          type="text"
          value={text}
          placeholder="Add a task"
        />
        <div className={styles.buttonContainer}>
          <BsFillPlusCircleFill
            onClick={onSubmitHandler}
            className={styles.button}
            style={{ color: "#8fd5ff", fontSize: 26 }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default AddTodo;
