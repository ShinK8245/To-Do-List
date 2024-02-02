import { ClearTask } from "./components/ClearTask";
import { Filters } from "./components/Filters";
import { TaskList } from "./components/TaskList";
import { AddTask } from "./components/AddTask";
import { Sort } from "./components/Sort";

function App() {
  return (
    <div id="main-container">
      <h1 id="to-do-list-title" className="d-flex justify-content-center">
        To-Do List
      </h1>
      <div className="d-flex justify-content-between mb-3">
        <Sort />
        <AddTask />
      </div>
      <TaskList />
      <Filters />
      <ClearTask />
    </div>
  );
}

export default App;
