import React from "react";
import { useState } from 'react';

import { AuthContext } from "../../../App";

import classes from './Signup.module.css';
import registerLogin from '../../../img/register-login.png';
import Footer from '../../Footer/Footer';
import Header from '../../shared/Header/Header';

import {Alert } from '@mui/material';

const SignUp = () => {
    const {state, dispatch } = React.useContext(AuthContext);

    const [successRegister,setSuccessRegister] = useState(false);

    const initialState = {
        email: "",
        password: "",
        name: "",
        isSubmitting: false,
        errorMessage: null
    };

    const [data, setData] = React.useState(initialState);

    const [showLogin, setIsShowLogin] = useState(false);
    const [validEmail,setvalidEmail] = useState(false);
    

    const handleInputChange = event => {
        
        setData({
          ...data,
          [event.target.name]: event.target.value
        });

        let eml = data.email.toString();
        let ceml = eml.substr(data.email.length -19);
        
        if(ceml === "@uetpeshawar.edu.pk" && eml.length > 22)
        {
            setvalidEmail(true);
        }
        else
        {
            setvalidEmail(false);
        }

      };
        
    
    const hideLoginHandler = () => {
        setIsShowLogin(false);
    }

    const showLoginHandler = () => {
        setIsShowLogin(true);
    }

    
    const handleLogin = (event) => {
        event.preventDefault();
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        });

        fetch("https://l0iqhn8nzi.execute-api.us-east-2.amazonaws.com/prod/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        })
        .then(resJson => {
            if(resJson.accountId)
            {
                if(resJson.role === "admin")
                {
                    dispatch({
                        type: "ADMINLOGIN",
                        payload: resJson
                    })
                }
                else
                {
                    // console.log(resJson);
                    dispatch({
                        type: "LOGIN",
                        payload: resJson
                    })
                }
                    
            }
            else
            {
                setData({                
                    data,
                    isSubmitting: false,
                    errorMessage: ""
                });
            }
            
        })
        .catch(error => {
            setData({                
                data,
                isSubmitting: false,
                errorMessage: error.message || error.statusText
            });
            // console.log(error);
        });
        

    }

    const handleRegister = (event) => {
        event.preventDefault();
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        });

        fetch("https://j9yb8xghth.execute-api.us-east-2.amazonaws.com/prod/registration", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name : data.name,
                email: data.email,
                password: data.password
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        })
        .then(resJson => {
           if(resJson)
           {
            setSuccessRegister(true);
            setData({                
                ...data,
                isSubmitting: false,
                errorMessage: ""
            });
           }
           else
           {
            dispatch({
                type: "LOGIN",
                payload: resJson
            })
            setSuccessRegister(false);
           }
            
        })
        .catch(error => {
            setSuccessRegister(false);
            setData({                
                ...data,
                isSubmitting: false,
                errorMessage: error.message || error.statusText
            });
            // console.log(error);
        });
        

    }


    return (
        <>
        <Header/>
            { !state.isAuthenticated &&
             <div className={classes.LoginTop}>
                <div className={classes.left}>
                    <img src={registerLogin} alt="login" />
                </div>
                <div className={classes.right}>
                    {
                        showLogin && <div className={classes.rightInner}>
                            <h1>LOGIN <span style={{ color: "#309255" }}>NOW</span></h1>
                            <input 
                                type="email" 
                                placeholder='Email...' 
                                onChange={handleInputChange}  
                                value = {data.email}
                                pattern=".+@uetpeshawar\.edu\.pk"
                                name = "email"
                                id = "email"
                            />
                            { (data.email.length > 0) && !validEmail && <p className={classes.emailError}>Email should end in @uetpeshawar.edu.pk</p>}
                            
                            <input 
                                type="password" 
                                placeholder='Password...'  
                                onChange={handleInputChange}  
                                value = {data.password}                                
                                name = "password"
                                id = "password"
                            />
                            
                            {data.errorMessage && (<span className={classes.emailError}>{data.errorMessage}</span>)}

                            <button className={classes.loginBtn} disabled={!validEmail} onClick={handleLogin}>{data.isSubmitting ? ("Logging in ....") : ("Login")}</button>
                            <p>Don't have an acoount? <span onClick={hideLoginHandler} style={{ color: "#309255", cursor: "pointer" }}>Register Now</span></p>
                        </div>
                    }
                    {!showLogin && <div className={classes.rightInner}>
                        <h1>REGISTER <span style={{ color: "#309255" }}>NOW</span></h1>
                            <input 
                                type="text" 
                                placeholder='Name...' 
                                onChange={handleInputChange}  
                                value = {data.name}
                                name = "name"
                                id = "name"
                            />

                            <input 
                                type="email" 
                                placeholder='Email...' 
                                onChange={handleInputChange}  
                                value = {data.email}
                                pattern=".+@uetpeshawar\.edu\.pk"
                                name = "email"
                                id = "email"
                            />
                            { (data.email.length > 0) && !validEmail && <p className={classes.emailError}>Email should end in @uetpeshawar.edu.pk</p>}
                            
                            <input 
                                type="password" 
                                placeholder='Password...'  
                                onChange={handleInputChange}  
                                value = {data.password}                                
                                name = "password"
                                id = "password"
                            />

                            <input type="password" placeholder='Confirm Password...' />

                            {data.errorMessage && (<span className={classes.emailError}>{data.errorMessage}</span>)}

                            <button className={classes.loginBtn} disabled={!validEmail} onClick={handleRegister}>Create Account</button>
                            <p>Already have an acoount? <span onClick={showLoginHandler} style={{ color: "#309255", cursor: "pointer" }}>Login Now</span></p>
                            {
                                successRegister ? <Alert variant="filled" severity="success">
                                    Succfully Registered !
                                </Alert> :<></>
                            }

                    </div>
                    }

                </div>
            </div>
            }
            <Footer/>
        </>
    )
}

export default SignUp;