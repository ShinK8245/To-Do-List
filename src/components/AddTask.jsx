import { AddTaskModal } from "./AddTaskModal";
import { ADD_TASK_MODAL_ID } from "../constants";

const AddTask = () => {
  return (
    <>
      <button
        className="add-task"
        id="add-task-modal-trigger"
        data-bs-toggle="modal"
        data-bs-target={`#${ADD_TASK_MODAL_ID}`}
      >
        Add Task
      </button>

      <AddTaskModal />
    </>
  );
};

export { AddTask };
