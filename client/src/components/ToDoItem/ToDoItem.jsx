import React from "react";
import { FiCircle, FiCheckCircle, FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Form, Row, Col } from "react-bootstrap";
import styles from "./ToDoItem.module.scss";

const ToDoItem = ({
  task,
  editedTask,
  id,
  onEditTaskHandler,
  editTaskHandler,
  completedTaskHandler,
  deletedTaskHandler,
}) => {
  return (
    <div key={id} className={styles.toDoItem}>
      {!task.completed ? (
        <FiCircle
          onClick={() => completedTaskHandler(id)}
          style={{ color: "#000000", fontSize: 26 }}
        />
      ) : (
        <FiCheckCircle style={{ color: "#71D93F", fontSize: 26 }} />
      )}
      {task.task && !task.completed && (
        <>
          <Form.Control
            onChange={(e) => {
              onEditTaskHandler(e.target.value, task.key);
            }}
            type="text"
            value={task ? task.task : editedTask}
            placeholder="Add a task"
          />
  
          <FiEdit
            onClick={() => editTaskHandler(task.key)}
            style={{ color: "red", fontSize: 26 }}
          />
        </>
      )}
      {task.task && task.completed && (
        <div className={styles.textField}>
          <p>{task.task}</p>
        </div>
      )}

      <div className={styles.leftIcon}>
        <RiDeleteBin6Line
          onClick={() => deletedTaskHandler(task.key)}
          style={{ color: "red", fontSize: 26 }}
        />
      </div>
    </div>
  );
};

export default ToDoItem;
