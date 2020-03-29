import React from 'react';
// import React, { useState } from 'react';
import './login.css';
function LoginPage() {
  
  return (
    <div className="login-wapper">
    <div className="wrapper">
        <h1>Welcome</h1>
        <form className="form">
          <div className="form-group">
            <input type="text" placeholder="Username" id="userInput" />
            <input type="password" placeholder="Password" id="userPassword" />
            <button type="submit" id="login-button">Login</button>
          </div>
        </form>
      </div>
    </div>
  )


}
export default LoginPage;