import React, { useState } from 'react';

const CondtionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const UserGreeting = () => {
    return (
      <h1>Welcome back my love!</h1>
    )
  };

  const GuestGreeting = () => {
    return (
      <h1>Please sign up Boyyy!</h1>
    )
  }
  
  const LoginButton = () => {
    return (
      <button onClick={handleLoginClick}> Login </button>
    )
  }
  const LogoutButton = () => {
    return (
      <button onClick={handleLogoutClick}>Logout</button>
    )
  }

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }



  return (
    <>
      {isLoggedIn ?
        (
          <>
            <UserGreeting />  
            <LogoutButton />
          </>
        ) : (
          <>
            <GuestGreeting />
            <LoginButton/>
          </>
         
        )
      }
      
    </>
  );
}

export default CondtionalRendering;