import React from "react";
import { FiCircle, FiCheckCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./ToDoItem.module.scss";

const ToDoItem = ({
  task,
  id,
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
      {task.task  && (
        <div className={styles.textField}>
          <p>{task.task}</p>
        </div>
      )}

      <div className={styles.leftIcon}>
        <RiDeleteBin6Line
          onClick={() => deletedTaskHandler(id)}
          style={{ color: "red", fontSize: 26 }}
        />
      </div>
    </div>
  );
};

export default ToDoItem;
