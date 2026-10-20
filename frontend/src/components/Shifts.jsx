import { Route, Link } from "react-router-dom";
import "./card_styles/shifts.css";
import elips_icon from "../assets/primary_icons/elips_icon_prim.png";
import close_elips_icon from "../assets/primary_icons/close_elips_icon_prim.png";
import { useState } from "react";
function Shifts() {
  const [shiftMenueCLosed, setShiftMenueCLosed] = useState(true);
  function openShiftMenue(e) {
    const display_shift_menue = document.querySelector("#display_shift_menue");
    const shift_menue = document.querySelector(".shift-menue");
    if (shiftMenueCLosed) {
      shift_menue.style.width = "120px";
      shift_menue.style.height = "100px";
      shift_menue.style.marginLeft = "20px";
      shift_menue.style.marginTop = "20px";
      e.target.src = close_elips_icon;
      setShiftMenueCLosed(false);
    } else {
      shift_menue.style.width = "20px";
      shift_menue.style.height = "20px";
      shift_menue.style.marginLeft = "120px";
      shift_menue.style.marginTop = "";
      e.target.src = elips_icon;
      setShiftMenueCLosed(true);
    }
  }

  function closeShiftMenue() {
    console("closing shift menue");
  }

  return (
    <div className="shifts-card">
      <div className="stock-data">
        <div className="header">
          <div className="first">
            <div className="selects-dv">
              <select id="select_department">
                <option value="hr">Department</option>
                <option value="hr">HR</option>
                <option value="abm">ABM</option>
                <option value="electrical_maintenance">Electrical</option>
                <option value="ev_maintenance">EV-Maintenance</option>
              </select>
              <select id="select_teritory">
                <option value="kampala_central_region">Kampala Central</option>
                <option value="kampala_north_region">Kampala North</option>
                <option value="kampala_east_region">Kampala East</option>
                <option value="kampala_west_region">Kampala West</option>
                <option value="kampala_south_region">Kampala South</option>
                <option value="nile_region">Nile Region</option>
                <option value="luweero_region">Luweero Region</option>
              </select>
              <select id="select_station">
                <option value="namungoona_station">Namungoona</option>
                <option value="ndeeba_station">Ndeeba</option>
                <option value="sir_apolo_station">Sir Apolo</option>
                <option value="rubaga_station">Rubaga</option>
                <option value="nansana_I_station">Nansana I</option>
                <option value="nansana_II_station">Nansana II</option>
                <option value="william_station">William Street</option>
                <option value="menogo_station">Mengo</option>
                <option value="intinda_industrial_station">Intinda IA</option>
                <option value="intinda_I_station">Intinda HQ</option>
                <option value="intinda_II_station">Intinda II</option>
              </select>
            </div>
          </div>
          <div className="second">
            <button>New Shifts</button>
            <button>Publish</button>
            <button>More</button>
          </div>
        </div>
        <div className="body">
          <div className="head">
            <div className="date-dv">
              <span>September 2026</span>
              <div className="dates">
                <button>{"<"}</button>
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>
                <span>27</span>
                <button>{">"}</button>
              </div>
            </div>
          </div>
          <div className="shift_tabs">
            <div className="tabs">
              <div className="tab" id="tab1">
                <div className="day-part">
                  <span>Monday</span>
                </div>
                <div className="emps-parts">
                  <div className="emp">
                    <div className="first">
                      <div className="emp_name">
                        <span>John Doe</span>
                      </div>
                      <div className="shift-menue">
                        <div className="elips-icon">
                          <img
                            onClick={openShiftMenue}
                            id="display_shift_menue"
                            src={elips_icon}
                            alt=""
                          />
                        </div>
                        <div className="shift-menue-card">
                          <button>Reassign Employee</button>
                          <button>Delete Shift</button>
                        </div>
                      </div>
                    </div>
                    <div className="second">
                      <span>Moning</span>{" "}
                      <span>
                        <i>Normal</i>
                      </span>
                    </div>
                    <div className="third">
                      <span>2026-10-20 </span> <span>06:28</span>
                    </div>
                    <div className="fourth">
                      <span>Pending</span>
                      <span>Current</span>
                    </div>
                  </div>
                  <div className="emp">
                    <div className="first">
                      <div className="emp_name">
                        <span>Mery Doe</span>
                      </div>
                      <div className="shift-menue">
                        <div className="elips-icon">
                          <img
                            onClick={openShiftMenue}
                            id="display_shift_menue"
                            src={elips_icon}
                            alt=""
                          />
                        </div>
                        <div className="shift-menue-card">
                          <button>Reassign Employee</button>
                          <button>Delete Shift</button>
                        </div>
                      </div>
                    </div>
                    <div className="second">
                      <span>Moning</span>{" "}
                      <span>
                        <i>Normal</i>
                      </span>
                    </div>
                    <div className="third">
                      <span>2026-10-20 </span> <span>06:28</span>
                    </div>
                    <div className="fourth">
                      <span>Pending</span>
                      <span>Current</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab" id="tab1">
                <div className="day-part">
                  <span>Tuesday</span>
                </div>
                <div className="emps-parts">
                  <div className="emp">
                    <div className="first">
                      <div className="emp_name">
                        <span>Tom Haddy Doe</span>
                      </div>
                      <div className="shift-menue">
                        <div className="elips-icon">
                          <img
                            onClick={openShiftMenue}
                            id="display_shift_menue"
                            src={elips_icon}
                            alt=""
                          />
                        </div>
                        <div className="shift-menue-card">
                          <button>Reassign Employee</button>
                          <button>Delete Shift</button>
                        </div>
                      </div>
                    </div>
                    <div className="second">
                      <span>Moning</span>{" "}
                      <span>
                        <i>Normal</i>
                      </span>
                    </div>
                    <div className="third">
                      <span>2026-10-20 </span> <span>06:28</span>
                    </div>
                    <div className="fourth">
                      <span>Pending</span>
                      <span>Current</span>
                    </div>
                  </div>
                  <div className="emp">
                    <div className="first">
                      <div className="emp_name">
                        <span>Mark S</span>
                      </div>
                      <div className="shift-menue">
                        <div className="elips-icon">
                          <img
                            onClick={openShiftMenue}
                            id="display_shift_menue"
                            src={elips_icon}
                            alt=""
                          />
                        </div>
                        <div className="shift-menue-card">
                          <button>Reassign Employee</button>
                          <button>Delete Shift</button>
                        </div>
                      </div>
                    </div>
                    <div className="second">
                      <span>Moning</span>{" "}
                      <span>
                        <i>Normal</i>
                      </span>
                    </div>
                    <div className="third">
                      <span>2026-10-20 </span> <span>06:28</span>
                    </div>
                    <div className="fourth">
                      <span>Pending</span>
                      <span>Current</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shifts;
