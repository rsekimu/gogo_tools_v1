import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./card_styles/forms.css";

import view_prim from "../assets/primary_icons/view_prim.png";
import delete_prim from "../assets/primary_icons/delete_prim.png";
import backward_arrow_prim from "../assets/primary_icons/backward_arrow_prim.png";
import forward_arrow_prim from "../assets/primary_icons/forward_arrow_prim.png";
import NotFound from "./Notfound";

function UpdatePop({ update_stock_flag }) {
  return (
    <div className="form_data_dv">
      <div className="first">
        <div className="first_head">
          <span>Subject</span>
          <span>Urgency</span>
        </div>
        <div className="first_bdy">
          <span>Message</span>
        </div>
      </div>
      <div className="second">
        <div className="det">
          <span id="title">Submited</span>
          <span>Name: John Doe</span>
          <span>Email: johndoe@bodawerk.co.ug</span>
          <span>Tell: 0756267238</span>
          <span>EmpID: EMP001</span>
        </div>
        <div className="det">
          <span id="title">Time Stamp</span>
          <span>Date: 17-09-2026</span>
          <span>Time: 4:06</span>
          <span>Meta Date: 17-09-2026</span>
          <span>Meta Time: 4:06</span>
        </div>
        <div className="det">
          <span id="title">Location</span>
          <span>Name: Namungoona</span>
          <span>Lats: 0.6743</span>
          <span>Lons: 0.4353</span>
        </div>
      </div>
    </div>
  );
}

function Statistics() {
  return (
    <div className="stats-data">
      <div className="actions">
        <Link to="./create-form">
          <button>Create Form</button>
        </Link>
      </div>
      <div className="data_cards">
        <div className="card">
          <div className="card_head">
            <span>New Forms</span>
          </div>
          <div className="data_bdy">
            <div className="data_body_card">
              <span>3</span>
              <span>Electrical</span>
            </div>
          </div>
          <div className="data_footer">
            <img src={backward_arrow_prim} alt="" />
            <img src={forward_arrow_prim} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="card_head">
            <span>All Forms</span>
          </div>
          <div className="data_bdy">
            <div className="data_body_card">
              <span>63</span>
              <span>Electrical</span>
            </div>
            <div className="data_body_card">
              <span>50</span>
              <span>Incidents</span>
            </div>
          </div>
          <div className="data_footer">
            <img src={backward_arrow_prim} alt="" />
            <img src={forward_arrow_prim} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
function CreateForm() {
  return (
    <div className="full-stats-dv">
      <div className="vars">
        <select id="">
          <option value="">EMP</option>
          <option value="john_doe_emp001">John Doe</option>
          <option value="mark_s_emp001">Mark S</option>
        </select>
        <select id="">
          <option value="2026">Urgent</option>
          <option value="2025">Can Wait</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <div className="fields">
        <div className="inputs">
          <label>
            <span>Description</span>
            <textarea id="" placeholder="Type Here.."></textarea>
          </label>
        </div>
        <div className="btns">
          <button>Clear</button>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

function Forms() {
  const navigate = useNavigate();

  function handleFormClicked() {
    navigate("/forms/form-data");
  }
  return (
    <div className="dv-card stock-card">
      <div className="stock-data">
        <div className="header">
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
          <select id="select_issue">
            <option value="electrical_issue">Electrical Issue</option>
            <option value="incident_report_issue">Indent Reports</option>
          </select>
        </div>
        <div className="body">
          <div className="row-cards">
            <div className="header-card">
              <span>Electrical Issues</span>
            </div>
            <div className="cards">
              <div className="form-card" onClick={handleFormClicked}>
                <div className="left">
                  <div className="head">
                    <span>Power Off</span>
                    <span>Namungoona John Doe 0750665351</span>
                  </div>
                  <div className="subject">
                    <span>Description of the problem</span>
                  </div>
                </div>
                <div className="right">
                  <img src={view_prim} alt="" />
                  <img src={delete_prim} alt="" />
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="form-card">
                <div className="left">
                  <div className="head">
                    <span>Power Off</span>
                    <span>Namungoona John Doe 0750665351</span>
                  </div>
                  <div className="subject">
                    <span>Description of the problem</span>
                  </div>
                </div>
                <div className="right">
                  <img src={view_prim} alt="" />
                  <img src={delete_prim} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="side-data">
            <div className="wrapper">
              <div className="data-head">
                <span>
                  <Link to="/forms">
                    <img src={backward_arrow_prim} alt="" />
                  </Link>
                </span>
                <span>Forms Statistics</span>
              </div>
              <div className="data-route">
                <Routes>
                  <Route path="/" element={<Statistics />} />
                  <Route path="/forms" element={<Statistics />} />
                  <Route path="/create-form" element={<CreateForm />} />
                  <Route
                    path="/form-data"
                    element={<UpdatePop update_stock_flag={true} />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
