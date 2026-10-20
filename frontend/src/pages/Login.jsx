import "./login_register.css";
import form_email_prim from "../assets/primary_icons/form_email_prim.png";
import form_password_prim from "../assets/primary_icons/form_password_prim.png";
import form_register_prim from "../assets/primary_icons/form_register_prim.png";
import form_login_prim from "../assets/primary_icons/form_login_prim.png";
import form_loading_prim from "../assets/primary_icons/form_loading_prim.png";
import { useState } from "react";

function Login() {
  const [input_err, setInput_Err] = useState({
    email_err: "",
    password_err: "",
    general_err: "",
  });
  function handleLoginFormSubmit(e) {
    e.preventDefault();
    console.log("Logging In");
  }
  function handleLoginBtn() {
    console.log("Login Btn Clicked");
    handleLoginFormSubmit();
  }
  function switchToRegisterPage() {
    location.href = "/register"
  }
  return (
    <div className="login-register-page">
      <div className="form-dv">
        <h1>Login</h1>
        <form onSubmit={handleLoginFormSubmit}>
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
            <button id="login_login_btn" onClick={handleLoginBtn}>
              <img src={form_login_prim} />
              <span>Login</span>
            </button>
            <button id="login_register_btn" onClick={switchToRegisterPage}>
              <img src={form_register_prim} />
              <span>Or don't have account Register</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
