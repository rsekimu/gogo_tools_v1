import "./login_register.css";
import form_user_prim from "../assets/primary_icons/form_user_prim.png";
import form_email_prim from "../assets/primary_icons/form_email_prim.png";
import form_password_prim from "../assets/primary_icons/form_password_prim.png";
import form_register_prim from "../assets/primary_icons/form_register_prim.png";
import form_login_prim from "../assets/primary_icons/form_login_prim.png";
import form_loading_prim from "../assets/primary_icons/form_loading_prim.png";
import { useState } from "react";

function Register() {
  const [input_err, setInput_Err] = useState({
    email_err: "",
    password_err: "",
    general_err: "",
  });
  function handleRegisterFormSubmit(e) {
    e.preventDefault();
    console.log("Logging In");
  }
  function handleRegisterBtn() {
    console.log("Register Btn Clicked");
    handleRegisterFormSubmit();
  }
  function switchToLoginPage() {
    location.href = "/login";
  }
  return (
    <div className="login-register-page">
      <div className="form-dv">
        <h1>Login</h1>
        <form onSubmit={handleRegisterFormSubmit}>
          <label>
            <span className="label">
              <img src={form_user_prim} alt="" />
              <span>User Name</span>
            </span>
            <div className="input">
              <input type="text" placeholder="john Doe" />
              <span>{input_err.username_err}</span>
            </div>
          </label>

          <label>
            <span className="label">
              <img src={form_email_prim} alt="" />
              <span>Email</span>
            </span>
            <div className="input">
              <input type="text" placeholder="example@bodawerk.co.ug" />
              <span>{input_err.email_err}</span>
            </div>
            <span className="label">
              <img src={form_password_prim} alt="" />
              <span>Password</span>
            </span>
            <div className="input">
              <input type="text" placeholder="******" />
              <span>{input_err.password_err}</span>
            </div>
          </label>
          <div className="btns">
            <div className="err-sp">{input_err.general_err}</div>
            <button id="login_login_btn" onClick={handleRegisterBtn}>
              <img src={form_login_prim} />
              <span>Register</span>
            </button>
            <button id="login_register_btn" onClick={switchToLoginPage}>
              <img src={form_register_prim} />
              <span>Alreadyhave an account, Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
