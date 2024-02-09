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
      <div id="app-container">
        <div id="main-container">
          <div className="d-flex justify-content-between mb-3">
            <Sort />
            <ClearTask />
            <AddTask />
          </div>
          <TaskList />
          <Filters />
        </div>
        <div className="icons d-flex justify-content-center">
          <p>
            created with <img src="icon/1.png" alt="html" width="20" />{" "}
            <img src="icon/2.png" alt="css" width="20" />
            <img src="icon/3.png" alt="js" width="20" />
            <img src="icon/4.png" alt="react" width="20" />
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
