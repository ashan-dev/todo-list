import React from "react";
import { FiCircle, FiCheckCircle, FiEdit } from "react-icons/fi";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Form, Row, Col } from "react-bootstrap";
import styles from "./TodoItem.module.scss";
import useTodoItem from "../../utils/useTodoItem";

const TodoItem = ({ id }) => {
  const {
    text,
    completed,
    isEditing,
    toggleCompletedHandler,
    onChangeHandler,
    onKeyUpHandler,
    onEditStartTodoHandler,
    onEditDoneTodoHandler,
    onEditCancelTodoHandler,
    onDeleteTodoHandler,
  } = useTodoItem(id);

  return (
    <div key={id} className={styles.todoItem}>
      {!isEditing &&
        (!completed ? (
          <FiCircle
            onClick={toggleCompletedHandler}
            style={{ color: "#000000", fontSize: 26, cursor:'pointer' }}
          />
        ) : (
          <FiCheckCircle
            onClick={toggleCompletedHandler}
            style={{ color: "#71D93F", fontSize: 26, cursor:'pointer' }}
          />
        ))}
      {!completed && (
        <>
          <div
            className={styles.inputWrapper}
            onDoubleClick={onEditStartTodoHandler}
          >
            <Form.Control
              onChange={onChangeHandler}
              onKeyUp={onKeyUpHandler}
              type="text"
              value={text}
              disabled={!isEditing}
              style={{ marginRight: "20px", width: "300px" }}
            />
            {isEditing ? (
              <>
                <FcCancel
                  onClick={onEditCancelTodoHandler}
                  className={styles.button}
                  style={{ color: "red", fontSize: 26,cursor:'pointer' }}
                />
                <span style={{ width: "12px" }}></span>
                <FcCheckmark
                  onClick={onEditDoneTodoHandler}
                  className={styles.button}
                  style={{ color: "#8fd5ff", fontSize: 26, cursor:'pointer' }}
                />
              </>
            ) : (
              <FiEdit
                onClick={onEditStartTodoHandler}
                style={{ color: "blue", fontSize: 26, cursor:'pointer' }}
              />
            )}
          </div>
        </>
      )}
      {completed && (
        <div className={styles.inputWrapper}>
          <Form.Control style={{ width: "300px",cursor:'pointer' }} type="text" value={text} disabled={true} />
        </div>
      )}

      {!isEditing && (
        <div className={styles.leftIcon}>
          <RiDeleteBin6Line
            onClick={onDeleteTodoHandler}
            style={{ color: "red", fontSize: 26, cursor:'pointer' }}
          />
        </div>
      )}
    </div>
  );
};

export default TodoItem;
