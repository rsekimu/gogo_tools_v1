import { Link } from "react-router-dom";

import "./Sidebar.css";
import shift_prim from "../assets/primary_icons/shift_prim.png";
import station_stock_prim from "../assets/primary_icons/station_stock_prim.png";
import forms_prim from "../assets/primary_icons/forms_prim.png";
import settings_prim from "../assets/primary_icons/settings_prim.png";

function Sidebar() {
  function handleShiftsCardSwitch() {
    console.log("Switching to Shifts");
  }
  function handleStockCardSwitch() {
    console.log("Switching to Station Stock");
  }
  function handleFormsCardSwitch() {
    console.log("Switching to Forms");
  }
  function handleSettingsCardSwitch() {
    console.log("Switching to Settings");
  }
  return (
    <div className="sidebar-dv">
      <div className="btn-dvs">
        <Link to="/shifts">
          <div className="btn" onClick={handleShiftsCardSwitch}>
            <img src={shift_prim} alt="" />
            <span>Shifts</span>
          </div>
        </Link>
        <Link to="/stock">
          <div className="btn" onClick={handleStockCardSwitch}>
            <img src={station_stock_prim} alt="" />
            <span>Station Stock</span>
          </div>
        </Link>
        <Link to="/forms">
          <div className="btn" onClick={handleFormsCardSwitch}>
            <img src={forms_prim} alt="" />
            <span>Forms</span>
          </div>
        </Link>
        <Link to="/settings">
          <div className="btn" onClick={handleSettingsCardSwitch}>
            <img src={settings_prim} alt="" />
            <span>Settings</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
