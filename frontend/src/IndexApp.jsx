import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Shifts from "./components/Shifts";

function IndexApp({ Element }) {
  return (
    <div>
      {/* <h1>Hello INDEX {console.log("INDEXXX")}</h1>; */}
      <div className="page">
        <div className="header-section">
          <Header />
        </div>
        <div className="main-section">
          <div className="sidbar-sector">
            <Sidebar />
          </div>
          <div className="content-sector">
            {Element}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexApp;
