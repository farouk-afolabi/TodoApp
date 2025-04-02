import { Link, Outlet } from "react-router-dom";
import "./Help.scss";

function Help() {
  return (
    <div className="help-container">
      <h1>To-Do App Help & Support</h1>

      <div className="submenu">
        <Link to="">Overview</Link>
        <Link to="add">Add Task</Link>
        <Link to="remove">Remove Task</Link>
        <Link to="change">Change Status</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Help;
