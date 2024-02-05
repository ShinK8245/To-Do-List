import { TasksContext } from "../context/TasksContext";
import { Modal } from "./Modal";
import React, { useContext } from "react";

const ClearTask = () => {
  const { tasks, clearCompletedTasks } = useContext(TasksContext);
  const disabled = tasks.filter((task) => task.isCompleted).length === 0;
  return (
    <>
      <div className="clear-completed">
        <button
          className="clear-completed"
          id="clear-completed-tasks"
          data-bs-toggle="modal"
          data-bs-target="#clearCompletedTasks"
          disabled={disabled}
        >
          Clear Completed
        </button>
      </div>

      <Modal id="clearCompletedTasks" handleDelete={clearCompletedTasks} />
    </>
  );
};

export { ClearTask };
