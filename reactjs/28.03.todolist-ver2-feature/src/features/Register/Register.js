import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Input from "../../components/Input";

const Register = (props) => {
  const [formValue, setformValue] = useState([
    {
      email: "",
      password: "",
      confirmPassword: "",
      dataMatch: false
    }
  ]);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    dataMatch: false
  })

  const patternEmail = /^[a-z][a-z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
  const handleSubmitRegister = (event) => {
    event.preventDefault();
    const errors = handleErrors(formValue);

    if (Object.keys(errors).length === 0) {
      props.history.push("/login-page");
    }
  };

  const handleOnChange = (event) => {
    // console.log('1')
    const { name, value } = event.target;
    setformValue({
      ...formValue,
      [name]: value
    })
  }
  const handleErrors = formValue => {
    let errors = {};

    if (!formValue.email) {
      errors.email = "email address is required";
    } else if (!patternEmail.test(formValue.email)) {
      errors.email = "email address is invalid";
    }
    if (!formValue.password) {
      errors.password = "Password is required";
    } else if (formValue.password.length < 3) {
      errors.password = "Password needs to be more than 2 characters";
    }
    if (formValue.password !== formValue.confirmPassword) {
      errors.confirmPassword = "password and confirm password did not match";
    }


    setErrors({ ...errors, errors });


    return errors;
  };


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
              <Input
                typeInput="email"
                nameInput="email"
                placeholderInput="Your email address"
                onChangeInput={handleOnChange}
                value={formValue.email}
                // className=
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <Input typeInput="password"
                nameInput="password"
                placeholderInput="Password"
                onChangeInput={handleOnChange}
                value={formValue.password}
              />
               {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="form-group">
              <Input
                typeInput="password"
                nameInput="confirmPassword"
                id=""
                placeholderInput="Confirm Password"
                onChangeInput={handleOnChange}
              />
              <p className="error">{errors.confirmPassword}</p>
            </div>
            <button>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
