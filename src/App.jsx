import { ClearTask } from "./components/ClearTask";
import { Filters } from "./components/Filters";
import { TaskList } from "./components/TaskList";
import { AddTask } from "./components/AddTask";
import { Sort } from "./components/Sort";

function App() {
  return (
    <>
      <nav className="navbar fixed-top">
        <div className="reboot">
          <a
            href="https://www.re-boot.us/"
            target="blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <span style={{ color: "#55de00" }}>re</span>:boot - To do List
          </a>
        </div>
      </nav>
      <div id="main-container">
        <div className="d-flex justify-content-between mb-3">
          <Sort />
          <ClearTask />
          <AddTask />
        </div>
        <TaskList />
        <Filters />
      </div>
    </>
  );
}

export default App;
