import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const Sort = () => {
  const { sortOrder, setSortOrder } = useContext(TasksContext);

  const handleSortOderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="sort-container">
      <span className="sort-label">Sort by: </span>
      <select
        className="form-select-sort-select"
        value={sortOrder}
        onChange={handleSortOderChange}
      >
        <option value="default">Default</option>
        <option value="plh">Priority: Low - High</option>
        <option value="phl">Priority: High - Low</option>
      </select>
    </div>
  );
};

export { Sort };
