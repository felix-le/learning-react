// import React, { useState } from 'react';
import React from "react";
import useForm from "./useForm";
import validateRegisterForm from "./validateRegisterForm";
import { Link } from "react-router-dom";
function RegisterPage(props) {
  const {
    formValue,
    errors,
    handleSubmit,
    handleChange,
    isSubmitting
  } = useForm(submit, validateRegisterForm, props.history);

  function submit() {
    let data = [formValue];
    const dataLocalStorage =
      JSON.parse(localStorage.getItem("formValue"));
    if (dataLocalStorage) {
      data = [...dataLocalStorage, formValue];
    }
    localStorage.setItem("formValue", JSON.stringify(data));
  }

  return (
    <div className="register-wrapper">
      <div className="container">
        <div className="form">
          <form className="register-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input
                type="email"
                className={`${errors.email && "inputError"}`}
                placeholder="Your email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                value={formValue.password}
                placeholder="Choose password"
                name="password"
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                name="confirmPassword"
                value={formValue.confirmPassword}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
            <button>{isSubmitting ? "Please wait" : "create"}</button>
            <p className="message">
              Already registered?
              <Link to="/login-page">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

/**
 * UI form, label
 * submit
 *
 * handle changes
 * handle submit
 *
 * handle errors
 * show errors if there are errors
 *
 * */
