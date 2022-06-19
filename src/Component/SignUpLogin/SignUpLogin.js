import Login from './Login/Login';
import classes from './SignUpLogin.module.css';
import  { useEffect } from 'react';
import React from 'react';
  const SignUpLogin = () => {
      
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return(
        <>
          <div className={classes.SignUpLoginTop}>
            <div className={classes.SignUpLoginInner}>
               <p>Home / <span style={{color:"#309255"}}>LOGIN</span></p>
               <h1>LOGIN <span style={{color:"#309255"}}>NOW</span></h1>
            </div>
          </div>
          <div className={classes.signUpLoginContent}>
            <Login />
          </div>
        </>       
    );
}

export default SignUpLogin;