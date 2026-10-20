import "./Header.css";
import logo_1 from "../assets/logos/logo_1.png";
import admin_prim from "../assets/primary_icons/admin_prim.png";
function Header() {
  return (
    <div className="header-dv">
      <div className="first">
        <div className="logo">
          <img src={logo_1} />
        </div>
        <div className="subject">
          <span>Shifts</span>
        </div>
      </div>
      <div className="second">
        <div className="user">
          <img src={admin_prim} />
          <span>Admin</span>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
