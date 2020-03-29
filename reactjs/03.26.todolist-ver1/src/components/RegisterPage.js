import React, { useState } from "react";
import { Link } from "react-router-dom";
/** 
    1/ mindset
      * create UI
      * create submit event
      * catch value of fields when user input 
      * create an variable to contains input email or password ... 
      
    2/ save value
      * create handle event onChange of fiels email or password ...
      * please console.log to test function or variable after create handle event ....
      * distinguish fields by attributes when user input. E.g: name (event.target.name)
      * save value by useState function  when user input. E.g: value (event.target.value) 
      
    3/ check validate
      * crete an pattern to check format email
      * if correct format email, it will save state email
    
    4/ Successfull login 
      * Redirect homepage page when user submit successfully.
    
    5/ Notice
      * We can validate fields while user imput or after clicking submit button or just after they type
      * 
      * */
function RegisterPage(props) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    confirmPassword: ""
    // dataMatch: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: ""
    // dataMatch: ""
  });
  const patternEmail = /^[a-z][a-z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

  const handleSubmitRegister = async event => {
    event.preventDefault();

    /* truong fix: ta se lấy giá trị từ function handleErrors trả về, dùng no đê check dk */
    const errors = handleErrors(formValue);

    if (Object.keys(errors).length === 0) {
      props.history.push("/login-page");
    }
  };

  

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

    /* truong fix: vi setErrors la 1 function async (bất đồng bộ) nên chi dung` de check show errors UI thoi */
    setErrors({ ...errors, errors });

    /* truong fix: trong function nay, chung ta nen return ra 1 giá tri, để khi dùng chổ #, lay gia tri đó ra so sanh */
    return errors;
  };

  const handleOnChange = event => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
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
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formValue.email}
                onChange={handleOnChange}
                className={`${errors.email && "inputError"}`}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleOnChange}
                value={formValue.password}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                id=""
                placeholder="Confirm Password"
                value={formValue.confirmPassword}
                onChange={handleOnChange}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
            <button>Create</button>
            <p className="message">
              You have Account?
              <Link to="/login-page">Login now</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
