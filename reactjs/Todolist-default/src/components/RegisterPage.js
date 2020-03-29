import React from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const handleSubmitRegister = () => {

  }
  return (
    <div className="register-wrapper">
      <div className="container">
        <div className="form">
          <form
            action=""
            className="register-form"
            onSubmit={handleSubmitRegister}
            noValidate
          >
            <div className="form-group">
              <input type="email" name="email"
                placeholder="Your email" />
            </div>
            <div className="form-group">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                id=""
                placeholder="Confirm Password"
              />
            </div>
            <button>Create</button>
            <div className="form-group box-remember">
              <input type="checkbox" defaultValue="lsRememberMe" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <p className="message">Not registered?
               <Link to="/register-page">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
