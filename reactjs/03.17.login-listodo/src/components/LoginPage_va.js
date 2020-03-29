import React from 'react';
import useForm from './useForm';
import validateRegisterForm from './validateRegisterForm';
import { Link } from 'react-router-dom';

function LoginPage(props) {
  const { handleChange, formValue, errors, handleSubmitLogin } = useForm('', validateRegisterForm, props.history);


  // function submitLogin() {
  //   console.log("submitted Succesfully111");

  // }

  return (
    <div className="login-page-wrapper">
      <div className="login-page">
        <div className="form">
          <form className="login-form"
          onSubmit={handleSubmitLogin}
            noValidate
          >
            <div className="form-group">
            <input type="email"
                className= {`${errors.email && "inputError"}`}
                placeholder="Your email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <input type="password"
                  value={formValue.password}
                  placeholder="Choose password" 
                  name="password"
                  onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            {/* {flag === false && <p className="error">May nhap sai con me may roi</p>} */}
            <button>login</button>
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
  )
}

export default LoginPage;

