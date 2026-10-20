import { Routes, Route, Link } from "react-router-dom";
import "./card_styles/stock.css";
import backward_arrow_prim from "../assets/primary_icons/backward_arrow_prim.png";
import NotFound from "./Notfound";
import close_prim from "../assets/primary_icons/close_prim.png";
import torch_off_prim from "../assets/primary_icons/torch_off_prim.png";

function Close_Pop() {
  let pop = document.querySelector(".pops-dv");
  let pop_card = document.querySelector(".udate-stock-pop");
  pop.style.display = "none";
  pop_card.style.display = "none";
}
function Close_Faulty_Pop() {
  let pop = document.querySelector(".pops-dv");
  pop.style.display = "none";
  pop_card.style.display = "none";
}
function Open_Faulty_Pop() {
  let pop = document.querySelector(".pops-dv");
  let b_pop_card = document.querySelector(".udate-stock-pop");
  let f_pop_card = document.querySelector(".update-faulty-pop");
  pop.style.display = "flex";
  b_pop_card.style.display = "none";
  f_pop_card.style.display = "flex";
}
function Open_Pop() {
  let pop = document.querySelector(".pops-dv");
  let b_pop_card = document.querySelector(".udate-stock-pop");
  let f_pop_card = document.querySelector(".update-faulty-pop");
  pop.style.display = "flex";
  b_pop_card.style.display = "flex";
  f_pop_card.style.display = "none";
}
function UpdatePop({ update_stock_flag }) {
  return (
    <div className="update_stock_page">
      <div className="vars">
        <select id="">
          <option value="">EMP</option>
          <option value="john_doe_emp001">John Doe</option>
          <option value="mark_s_emp001">Mark S</option>
        </select>
      </div>
      <div className="update-cards">
        <div className="card">
          <div className="card-title">
            <span>Chargers</span>
          </div>
          <div className="card-content">
            <div className="card-card total">
              <span>36</span>
              <button onClick={Open_Pop}>Totatl Chargers</button>
            </div>
            <div className="card-card faulty">
              <span>1</span>
              <button onClick={Open_Faulty_Pop}>Faulty Chargers</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <span>Batteries</span>
          </div>
          <div className="card-content">
            <div className="card-card total">
              <span>33</span>
              <button onClick={Open_Pop}>Totatl Batteries</button>
            </div>
            <div className="card-card faulty">
              <span>1</span>
              <button onClick={Open_Faulty_Pop}>Faulty Batteries</button>
            </div>
          </div>
        </div>
      </div>
      <div className="pops-dv">
        <div className="udate-stock-pop">
          <div className="close-pop">
            <span>Add Batterry</span>
            <img src={close_prim} onClick={Close_Pop} />
          </div>
          <div className="input-bar">
            <input type="text" placeholder="Battery ID" />
            <button>Add</button>
          </div>
          <div className="scan-dv">
            <img src={torch_off_prim} />
          </div>
        </div>
        <div className="update-faulty-pop">
          <div className="close-pop">
            <span>Update Faulty</span>
            <img src={close_prim} onClick={Close_Pop} />
          </div>
          <div className="content">
            <div className="inputs">
              <span>-</span>
              <input type="number" placeholder="0" />
              <span>+</span>
            </div>
            <button>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Statistics() {
  return (
    <div className="data-cards">
      <div className="card">
        <div className="data-card-head">
          <span>Batteries</span>
        </div>
        <div className="data-card-body">
          <div className="pie-chart"></div>
          <div className="dets">
            <div className="txt">
              <span>
                Maxmum Batteries: <b>36</b>
              </span>
              <span>
                Minmum Batteries: <b>12</b>
              </span>
              <span>
                Current Batteries: <b>33</b>
              </span>
            </div>
            <div className="btns">
              <Link to="/stock/update-stock">
                <button>Update Stock</button>
              </Link>
              <Link to="/stock/full-stats">
                <button>View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="data-card-head">
          <span>Chargers</span>
        </div>
        <div className="data-card-body">
          <div className="pie-chart"></div>
          <div className="dets">
            <div className="txt">
              <span>
                Maxmum Chargers: <b>36</b>
              </span>
              <span>
                Minmum Chargers: <b>12</b>
              </span>
              <span>
                Current Chargers: <b>33</b>
              </span>
            </div>
            <div className="btns">
              <button>Update Stock</button>
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function FullStatistics() {
  return (
    <div className="full-stats-dv">
      <div className="vars">
        <select id="">
          <option value="">EMP</option>
          <option value="john_doe_emp001">John Doe</option>
          <option value="mark_s_emp001">Mark S</option>
        </select>
        <select id="">
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <div className="update-cards">
        <div className="card card_1">
          <div className="bar-chart-dv"></div>
          <div className="bottom-data">
            <div className="btm-data-card">
              <span>Max Batteries</span>
              <span>33</span>
            </div>
            <div className="btm-data-card">
              <span>Max Working</span>
              <span>32</span>
            </div>
            <div className="btm-data-card">
              <span>Max Faulty</span>
              <span>1</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <span>Batteries</span>
          </div>
          <div className="card-content">
            <div className="card-card total">
              <span>33</span>
              <button onClick={Open_Pop}>Totatl Batteries</button>
            </div>
            <div className="card-card faulty">
              <span>1</span>
              <button onClick={Open_Faulty_Pop}>Faulty Batteries</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Stock() {
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
        </div>
        <div className="body">
          <div className="row-cards">
            <div className="batterie_data row-card">
              <div className="label">
                <span>Batteries</span>
              </div>
              <div className="cards">
                <div className="card">
                  <span className="first">Total Batteries</span>
                  <span className="second">33</span>
                  <span className="third">
                    <span>
                      Updated on: <i>14/09/2026</i>
                    </span>
                    <span>
                      John Doe <b>cxc</b>
                    </span>
                  </span>
                </div>
                <div className="card">
                  <span className="first">Faulty Batteries</span>
                  <span className="second">1</span>
                  <span className="third">
                    <span>
                      Updated on: <i>14/09/2026</i>
                    </span>
                    <span>
                      John Doe <b>cxc</b>
                    </span>
                  </span>
                </div>
                <div className="card">
                  <span className="first">Working Batteries</span>
                  <span className="second">32</span>
                  <span className="third">
                    <span>
                      Updated on: <i>14/09/2026</i>
                    </span>
                    <span>
                      John Doe <b>cxc</b>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="chargers_data row-card">
              <div className="label">
                <span>Chargers</span>
              </div>
              <div className="cards">
                <div className="card">
                  <span className="first">Total Chargers</span>
                  <span className="second">36</span>
                  <span className="third">
                    <span>
                      Updated on: <i>14/09/2026</i>
                    </span>
                    <span>
                      John Doe <b>cxc</b>
                    </span>
                  </span>
                </div>
                <div className="card">
                  <span className="first">Faulty Chargers</span>
                  <span className="second">2</span>
                  <span className="third">
                    <span>
                      Updated on: <i>14/09/2026</i>
                    </span>
                    <span>
                      John Doe <b>cxc</b>
                    </span>
                  </span>
                </div>
                <div className="card">
                  <span className="first">Working Chargers</span>
                  <span className="second">34</span>
                  <span className="third">
                    <span>
                      Updated on: <i>14/09/2026</i>
                    </span>
                    <span>
                      John Doe <b>cxc</b>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="side-data">
            <div className="wrapper">
              <div className="data-head">
                <span>
                  <Link to="/stock/stats">
                    <img src={backward_arrow_prim} alt="" />
                  </Link>
                </span>
                <span>Statistics</span>
              </div>
              <div className="data-route">
                {/* <div className="data-cards">
                    <div className="card">
                      <div className="data-card-head">
                        <span>Batteries</span>
                      </div>
                      <div className="data-card-body">
                        <div className="pie-chart"></div>
                        <div className="dets">
                          <div className="txt">
                            <span>
                              Maxmum Batteries: <b>36</b>
                            </span>
                            <span>
                              Minmum Batteries: <b>12</b>
                            </span>
                            <span>
                              Current Batteries: <b>33</b>
                            </span>
                          </div>
                          <div className="btns">
                            <button>Update Stock</button>
                            <button>View</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="data-card-head">
                        <span>Chargers</span>
                      </div>
                      <div className="data-card-body">
                        <div className="pie-chart"></div>
                        <div className="dets">
                          <div className="txt">
                            <span>
                              Maxmum Chargers: <b>36</b>
                            </span>
                            <span>
                              Minmum Chargers: <b>12</b>
                            </span>
                            <span>
                              Current Chargers: <b>33</b>
                            </span>
                          </div>
                          <div className="btns">
                            <button>Update Stock</button>
                            <button>View</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                <Routes>
                  <Route path="/" element={<Statistics />} />
                  <Route path="/stats" element={<Statistics />} />
                  <Route path="/full-stats" element={<FullStatistics />} />
                  <Route
                    path="/update-stock"
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

export default Stock;
