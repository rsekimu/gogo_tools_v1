import { Route, Link } from "react-router-dom";
import "./card_styles/shifts.css";
import elips_icon from "../assets/primary_icons/elips_icon_prim.png";
import close_elips_icon from "../assets/primary_icons/close_elips_icon_prim.png";
import close_pop_prim from "../assets/primary_icons/close_pop_prim.png";
import drop_down_prim from "../assets/primary_icons/drop_down_prim.png";
import drop_right_prim from "../assets/primary_icons/drop_right_prim.png";
import save_shift_prim from "../assets/primary_icons/save_shift_prim.png";
import publish_shift_prim from "../assets/primary_icons/publish_shift_prim.png";
import { useState } from "react";

function OpenAddShiftPop(props) {
  let { showMorningOtherStations, setShowMorningOtherStations } = props;
  let { showAfternoonOtherStations, setShowAfternoonOtherStations } = props;
  let { showEveningOtherStations, setShowEveningOtherStations } = props;
  function drop_down_StationsFunc() {
    if (showMorningOtherStations.station == true) {
      setShowMorningOtherStations({
        ...showMorningOtherStations,
        station: false,
      });
    } else {
      setShowMorningOtherStations({
        ...showMorningOtherStations,
        station: true,
      });
    }
  }
  function drop_side_otherStationsFunc() {
    if (showMorningOtherStations.stations == true) {
      setShowMorningOtherStations({
        ...showMorningOtherStations,
        stations: false,
      });
    } else {
      setShowMorningOtherStations({
        ...showMorningOtherStations,
        stations: true,
      });
    }
    console.log("Drop SIde for other Stations", showMorningOtherStations);
  }
  function drop_side_otherStationsEmpsFunc() {
    if (showMorningOtherStations.employees == true) {
      setShowMorningOtherStations({
        ...showMorningOtherStations,
        employees: false,
      });
    } else {
      setShowMorningOtherStations({
        ...showMorningOtherStations,
        employees: true,
      });
    }
    // console.log("Drop SIde for other Stations", showMorningOtherStations);
  }
  //Afternoon States
  function drop_down_StationsAfternoonFunc() {
    if (showAfternoonOtherStations.station == true) {
      setShowAfternoonOtherStations({
        ...showAfternoonOtherStations,
        station: false,
      });
    } else {
      setShowAfternoonOtherStations({
        ...showAfternoonOtherStations,
        station: true,
      });
    }
  }
  function drop_side_otherStationsAfternoonFunc() {
    if (showAfternoonOtherStations.stations == true) {
      setShowAfternoonOtherStations({
        ...showAfternoonOtherStations,
        stations: false,
      });
    } else {
      setShowAfternoonOtherStations({
        ...showAfternoonOtherStations,
        stations: true,
      });
    }
    console.log("Drop SIde for other Stations", showAfternoonOtherStations);
  }
  function drop_side_otherStationsEmpsAfternoonFunc() {
    if (showAfternoonOtherStations.employees == true) {
      setShowAfternoonOtherStations({
        ...showAfternoonOtherStations,
        employees: false,
      });
    } else {
      setShowAfternoonOtherStations({
        ...showAfternoonOtherStations,
        employees: true,
      });
    }
    // console.log("Drop SIde for other Stations", showAfternoonOtherStations);
  }
  //Evening States
  function drop_down_StationsEveningFunc() {
    if (showEveningOtherStations.station == true) {
      setShowEveningOtherStations({
        ...showEveningOtherStations,
        station: false,
      });
    } else {
      setShowEveningOtherStations({
        ...showEveningOtherStations,
        station: true,
      });
    }
  }
  function drop_side_otherStationsEveningFunc() {
    if (showEveningOtherStations.stations == true) {
      setShowEveningOtherStations({
        ...showEveningOtherStations,
        stations: false,
      });
    } else {
      setShowEveningOtherStations({
        ...showEveningOtherStations,
        stations: true,
      });
    }
    console.log("Drop SIde for other Stations", showEveningOtherStations);
  }
  function drop_side_otherStationsEmpsEveningFunc() {
    if (showEveningOtherStations.employees == true) {
      setShowEveningOtherStations({
        ...showEveningOtherStations,
        employees: false,
      });
    } else {
      setShowEveningOtherStations({
        ...showEveningOtherStations,
        employees: true,
      });
    }
    // console.log("Drop SIde for other Stations", showEveningOtherStations);
  }

  return (
    <div className="new_shift_pop">
      <div className="head">
        <span>New Shifts</span>
        <button>
          <img src={close_pop_prim} alt="X" />
        </button>
      </div>
      <div className="content">
        <div className="body">
          <div className="shifts_form">
            <div className="bdy-first">
              <div className="title">
                <span>Select Date</span>
              </div>
              <div className="dvs">
                <div className="start_date shift_dates">
                  <span>Start Date</span>
                  <input type="date" id="shifts_start_date " />
                </div>
                <div className="end_date shift_dates">
                  <span>End Date</span>
                  <input type="date" id="shifts_end_date" />
                </div>
              </div>
            </div>
            <div className="bdy-second morning-bdy">
              <div className="title">
                <span>Morning Shift</span>
              </div>
              <div className="dvs">
                <div className="first-dv">
                  <div className="emp-drop-down emp-drop-down-1">
                    <div className="head" onClick={drop_down_StationsFunc}>
                      <span>From Station</span>
                      <img src={drop_down_prim} alt="Drop down" />
                    </div>
                    <div
                      className="drop-down"
                      style={{
                        height:
                          showMorningOtherStations.station == true
                            ? "150px"
                            : "0px",
                      }}
                    >
                      <button>
                        John Doe <i>cxc</i>
                      </button>
                      <button>
                        Mark SM <i>cxc</i>
                      </button>
                      <button>
                        Tom Haddy <i>cxc</i>
                      </button>
                    </div>
                  </div>
                  <div className="emp-drop-down emp-drop-down-2">
                    <div className="head" onClick={drop_side_otherStationsFunc}>
                      <span>Other Station</span>
                      <img src={drop_down_prim} alt="Drop down" />
                    </div>
                    <div
                      className="drops"
                      style={{
                        height:
                          showMorningOtherStations.stations == true
                            ? "150px"
                            : "0px",
                      }}
                    >
                      <div className="drop-down">
                        <span onClick={drop_side_otherStationsEmpsFunc}>
                          Namungoona <img src={drop_right_prim} />
                        </span>
                        <span onClick={drop_side_otherStationsEmpsFunc}>
                          Ruga Rd <img src={drop_right_prim} />
                        </span>
                        <span onClick={drop_side_otherStationsEmpsFunc}>
                          Mengo <img src={drop_right_prim} />
                        </span>
                        <span onClick={drop_side_otherStationsEmpsFunc}>
                          Ndeba <img src={drop_right_prim} />
                        </span>
                      </div>
                      <div
                        className="drop-right"
                        style={{
                          height:
                            showMorningOtherStations.employees == true
                              ? "150px"
                              : "0px",
                        }}
                      >
                        <div className="title">
                          <span>CXS at Nansana</span>
                        </div>
                        <div className="drop-dv">
                          <button>
                            Henry Sekabya <i>cxc</i>
                          </button>
                          <button>
                            Ronnie Rods <i>cxc</i>
                          </button>
                          <button>
                            Eddy Charlse <i>cxc</i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="second-dv">
                  <label>
                    <span>Start</span>
                    <input type="time" id="morning_shift_start_tm" />
                  </label>
                  <label>
                    <span>Ends</span>
                    <input type="time" id="morning_shift_start_tm" />
                  </label>
                </div>
              </div>
            </div>
            <div className="bdy-second afternoon-bdy">
              <div className="title">
                <span>Afternoon Shift</span>
              </div>
              <div className="dvs">
                <div className="first-dv">
                  <div className="emp-drop-down emp-drop-down-1">
                    <div
                      className="head"
                      onClick={drop_down_StationsAfternoonFunc}
                    >
                      <span>From Station</span>
                      <img src={drop_down_prim} alt="Drop down" />
                    </div>
                    <div
                      className="drop-down"
                      style={{
                        height:
                          showAfternoonOtherStations.station == true
                            ? "150px"
                            : "0px",
                      }}
                    >
                      <button>
                        John Doe <i>cxc</i>
                      </button>
                      <button>
                        Mark SM <i>cxc</i>
                      </button>
                      <button>
                        Tom Haddy <i>cxc</i>
                      </button>
                    </div>
                  </div>
                  <div className="emp-drop-down emp-drop-down-2">
                    <div
                      className="head"
                      onClick={drop_side_otherStationsAfternoonFunc}
                    >
                      <span>Other Station</span>
                      <img src={drop_down_prim} alt="Drop down" />
                    </div>
                    <div
                      className="drops"
                      style={{
                        height:
                          showAfternoonOtherStations.stations == true
                            ? "150px"
                            : "0px",
                      }}
                    >
                      <div className="drop-down">
                        <span
                          onClick={drop_side_otherStationsEmpsAfternoonFunc}
                        >
                          Namungoona <img src={drop_right_prim} />
                        </span>
                        <span
                          onClick={drop_side_otherStationsEmpsAfternoonFunc}
                        >
                          Ruga Rd <img src={drop_right_prim} />
                        </span>
                        <span
                          onClick={drop_side_otherStationsEmpsAfternoonFunc}
                        >
                          Mengo <img src={drop_right_prim} />
                        </span>
                        <span
                          onClick={drop_side_otherStationsEmpsAfternoonFunc}
                        >
                          Ndeba <img src={drop_right_prim} />
                        </span>
                      </div>
                      <div
                        className="drop-right"
                        style={{
                          height:
                            showAfternoonOtherStations.employees == true
                              ? "150px"
                              : "0px",
                        }}
                      >
                        <div className="title">
                          <span>CXS at Nansana</span>
                        </div>
                        <div className="drop-dv">
                          <button>
                            Henry Sekabya <i>cxc</i>
                          </button>
                          <button>
                            Ronnie Rods <i>cxc</i>
                          </button>
                          <button>
                            Eddy Charlse <i>cxc</i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="second-dv">
                  <label>
                    <span>Start</span>
                    <input type="time" id="morning_shift_start_tm" />
                  </label>
                  <label>
                    <span>Ends</span>
                    <input type="time" id="morning_shift_start_tm" />
                  </label>
                </div>
              </div>
            </div>
            <div className="bdy-second evening-bdy">
              <div className="title">
                <span>Evening Shift</span>
              </div>
              <div className="dvs">
                <div className="first-dv">
                  <div className="emp-drop-down emp-drop-down-1">
                    <div
                      className="head"
                      onClick={drop_down_StationsEveningFunc}
                    >
                      <span>From Station</span>
                      <img src={drop_down_prim} alt="Drop down" />
                    </div>
                    <div
                      className="drop-down"
                      style={{
                        height:
                          showEveningOtherStations.station == true
                            ? "150px"
                            : "0px",
                      }}
                    >
                      <button>
                        John Doe <i>cxc</i>
                      </button>
                      <button>
                        Mark SM <i>cxc</i>
                      </button>
                      <button>
                        Tom Haddy <i>cxc</i>
                      </button>
                    </div>
                  </div>
                  <div className="emp-drop-down emp-drop-down-2">
                    <div
                      className="head"
                      onClick={drop_side_otherStationsEveningFunc}
                    >
                      <span>Other Station</span>
                      <img src={drop_down_prim} alt="Drop down" />
                    </div>
                    <div
                      className="drops"
                      style={{
                        height:
                          showEveningOtherStations.stations == true
                            ? "150px"
                            : "0px",
                      }}
                    >
                      <div className="drop-down">
                        <span onClick={drop_side_otherStationsEmpsEveningFunc}>
                          Namungoona <img src={drop_right_prim} />
                        </span>
                        <span onClick={drop_side_otherStationsEmpsEveningFunc}>
                          Ruga Rd <img src={drop_right_prim} />
                        </span>
                        <span onClick={drop_side_otherStationsEmpsEveningFunc}>
                          Mengo <img src={drop_right_prim} />
                        </span>
                        <span onClick={drop_side_otherStationsEmpsEveningFunc}>
                          Ndeba <img src={drop_right_prim} />
                        </span>
                      </div>
                      <div
                        className="drop-right"
                        style={{
                          height:
                            showEveningOtherStations.employees == true
                              ? "150px"
                              : "0px",
                        }}
                      >
                        <div className="title">
                          <span>CXS at Nansana</span>
                        </div>
                        <div className="drop-dv">
                          <button>
                            Henry Sekabya <i>cxc</i>
                          </button>
                          <button>
                            Ronnie Rods <i>cxc</i>
                          </button>
                          <button>
                            Eddy Charlse <i>cxc</i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="second-dv">
                  <label>
                    <span>Start</span>
                    <input type="time" id="morning_shift_start_tm" />
                  </label>
                  <label>
                    <span>Ends</span>
                    <input type="time" id="morning_shift_start_tm" />
                  </label>
                </div>
              </div>
            </div>
            {/* <div className="bdy-third">
              <div className="title">
                <span>Afternoon Shift</span>
              </div>
              <div className="dvs">
                <div className="first">
                  <div className="emp-drop-down">
                    <div className="head">
                      <span>From Station</span>
                      <img src={drop_down_prim} alt="Drop down" />
                    </div>
                    <div className="drop-down">
                      <button>
                        John Doe <i>cxc</i>
                      </button>
                      <button>
                        Mark SM <i>cxc</i>
                      </button>
                      <button>
                        Tom Haddy <i>cxc</i>
                      </button>
                    </div>
                  </div>
                  <div className="emp-drop-down">
                    <div className="head">
                      <span>Other Station</span>
                      <img src={drop_down_prim} alt="Drop down" />
                    </div>
                    <div className="drop-down">
                      <span>
                        Namungoona <img src={drop_right_prim} />
                      </span>
                      <span>
                        Ruga Rd <img src={drop_right_prim} />
                      </span>
                      <span>
                        Mengo <img src={drop_right_prim} />
                      </span>
                      <span>
                        Ndeba <img src={drop_right_prim} />
                      </span>
                    </div>
                    <div className="drop-right">
                      <div className="title">
                        <span>CXS at Nansana</span>
                      </div>
                      <div className="drop-dv">
                        <button>
                          Henry Sekabya <i>cxc</i>
                        </button>
                        <button>
                          Ronnie Rods <i>cxc</i>
                        </button>
                        <button>
                          Eddy Charlse <i>cxc</i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="second">
                    <label>
                      <span>Start</span>
                      <input type="time" id="morning_shift_start_tm" />
                    </label>
                    <label>
                      <span>Ends</span>
                      <input type="time" id="morning_shift_start_tm" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bdy-fouth">
              <div className="title">
                <span>Evening Shift</span>
              </div>
              <div className="dvs">
                <div className="first">
                  <div className="emp-drop-down">
                    <div className="head">
                      <span>From Station</span>
                      <img src={drop_down_prim} alt="Drop down" />
                    </div>
                    <div className="drop-down">
                      <button>
                        John Doe <i>cxc</i>
                      </button>
                      <button>
                        Mark SM <i>cxc</i>
                      </button>
                      <button>
                        Tom Haddy <i>cxc</i>
                      </button>
                    </div>
                  </div>
                  <div className="emp-drop-down">
                    <div className="head">
                      <span>Other Station</span>
                      <img src={drop_down_prim} alt="Drop down" />
                    </div>
                    <div className="drop-down">
                      <span>
                        Namungoona <img src={drop_right_prim} />
                      </span>
                      <span>
                        Ruga Rd <img src={drop_right_prim} />
                      </span>
                      <span>
                        Mengo <img src={drop_right_prim} />
                      </span>
                      <span>
                        Ndeba <img src={drop_right_prim} />
                      </span>
                    </div>
                    <div className="drop-right">
                      <div className="title">
                        <span>CXS at Nansana</span>
                      </div>
                      <div className="drop-dv">
                        <button>
                          Henry Sekabya <i>cxc</i>
                        </button>
                        <button>
                          Ronnie Rods <i>cxc</i>
                        </button>
                        <button>
                          Eddy Charlse <i>cxc</i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="second">
                    <label>
                      <span>Start</span>
                      <input type="time" id="morning_shift_start_tm" />
                    </label>
                    <label>
                      <span>Ends</span>
                      <input type="time" id="morning_shift_start_tm" />
                    </label>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="footer">
          <div className="btns">
            <button>
              <div className="btn-content">
                <span>Save</span>
                <img src={save_shift_prim} />
              </div>
              <div className="btn-spinner"></div>
            </button>
            <button>
              <div className="btn-content">
                <span>Publish</span>
                <img src={publish_shift_prim} />
              </div>
              <div className="btn-spinner"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Shifts() {
  const [shiftMenueCLosed, setShiftMenueCLosed] = useState(true);
  const [showMorningOtherStations, setShowMorningOtherStations] = useState({
    stations: false,
    employees: false,
    station: false,
  });
  const [showAfternoonOtherStations, setShowAfternoonOtherStations] = useState({
    stations: false,
    employees: false,
    station: false,
  });
  const [showEveningOtherStations, setShowEveningOtherStations] = useState({
    stations: false,
    employees: false,
    station: false,
  });
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
      <div className="pop_dv">
        <OpenAddShiftPop
          shiftMenueCLosed={shiftMenueCLosed}
          setShiftMenueCLosed={setShiftMenueCLosed}
          setShowMorningOtherStations={setShowMorningOtherStations}
          showMorningOtherStations={showMorningOtherStations}
          setShowAfternoonOtherStations={setShowAfternoonOtherStations}
          showAfternoonOtherStations={showAfternoonOtherStations}
          setShowEveningOtherStations={setShowEveningOtherStations}
          showEveningOtherStations={showEveningOtherStations}
        />
      </div>
    </div>
  );
}

export default Shifts;
