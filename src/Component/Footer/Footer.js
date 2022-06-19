import classes from "./Footer.module.css";
import emailIcon from '../../img/email.svg'
import callIcon from '../../img/call.svg';
import instagramIcon from '../../img/instagram.svg';
import facebookIcon from '../../img/facebook.svg';
import linkedinIcon from '../../img/linkedin.svg';

import { Link } from "react-router-dom";

import {Alert } from '@mui/material';

import React from 'react';

const Footer = () => {
  const [emailError,setEmailError] = React.useState(false);
  const [emailError1,setEmailError1] = React.useState(false);

  const [subscribeSuccess,setSubscribeSuccess] = React.useState(false);
  const [subscribeFailure,setSubscribeFailure] = React.useState(false);

  const [email,setEmail] = React.useState("");

  const handleEmail = (event) =>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var eml = event.target.value;

    if (eml.match(validRegex)) 
    {      
      setEmail(eml)
      setEmailError(false);
    } 
    else 
    {
      setEmail("")
      setEmailError(true);
    }
  }

  const handleEmail1 = (event) =>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var eml = event.target.value;

    if (eml.match(validRegex)) 
    {     
      setEmail(eml) 
      setEmailError1(false);
    } 
    else 
    {
      setEmail("")
      setEmailError1(true);
    }
  }

  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(!emailError && email != "")
    {
      fetch("https://sbe6vy070j.execute-api.us-east-2.amazonaws.com/prod/subscriber", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                sub_email: email
              })            
        })
        .then(res => {
            if (res.ok) {
              setSubscribeFailure(false);
              setSubscribeSuccess(true);
            }            
            else
            {
              setSubscribeSuccess(false);
              setSubscribeFailure(true);
            }
        })
        .catch(error => {
            console.log(error);
            setSubscribeSuccess(false);
            setSubscribeFailure(true);
        });
    }
    else
    {
      setEmailError(true);
    }
    setTimeout(() => { setSubscribeSuccess(false); setSubscribeFailure(false); }, 8000);
  }

  const handleSubmit1 = (event) => {
    event.preventDefault();
    
    if(!emailError1 && email != "")
    {
      fetch("https://sbe6vy070j.execute-api.us-east-2.amazonaws.com/prod/subscriber", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                sub_email: email
              })            
        })
        .then(res => {
            if (res.ok) {
              setSubscribeFailure(false);
              setSubscribeSuccess(true);
            }            
            else
            {
              setSubscribeSuccess(false);
              setSubscribeFailure(true);
            }
        })
        .catch(error => {
            console.log(error);
            setSubscribeSuccess(false);
            setSubscribeFailure(true);
        });
    }
    else
    {
      setEmailError1(true);
    }
    setTimeout(() => { setSubscribeSuccess(false); setSubscribeFailure(false); }, 8000);
  }


  return (
    <>
      <div className={classes.subscribe}>
        <div className={classes.left}>
          <h1>
            Subscribe for latest <br />
            <span style={{ color: "#309255" }}>News & Courses</span>
          </h1>
        </div>
        <div className={classes.right}>
          <div className={classes.rightInner}>
            <input type="email" onChange={handleEmail} placeholder="Email..." id="subscribe" />
            {emailError && <p className={classes.errorMsg}>Type a Valid Email.</p>}            
            <br/>
            <button className={classes.subBtn} onClick={handleSubmit}>Subscribe</button>
          </div>
        </div>
      </div>

      
      {
        subscribeFailure && 
        <div className={classes.alerts}>
          <Alert variant="filled" severity="warning">
            Failed to Subscribe ! Please Enter a Valid Email .
          </Alert>
        </div>
      }
      {
        subscribeSuccess && 
        <div className={classes.alerts}>
          <Alert variant="filled" severity="success">
            You have Successfully Subscribed.
          </Alert>
        </div>
      }
      
      
      <div className={classes.footerTop}>
        <div className={classes.footerInner}>
          <div className={classes.logo}>
            <h1>LOGO</h1>
            <h2>
              UET Peshawar <br /> Main{" "}
              <span style={{ color: "#309255" }}>Campus</span>{" "}
            </h2>
            <div className={classes.email}>
                <img src={emailIcon} alt='email' />
              <a href="mailto:support@example.com?subject=SendMail&body=Description" >
                example@gmail.com
              </a>
            </div>
            <div className={classes.call}>
                <img src={callIcon} alt='call' />
               <p>034284382384</p>
            </div>
            <div className={classes.socialIcon}>
                <a href="https://www.facebook.com/">
                    <img src={facebookIcon} alt='facebook' />
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagramIcon} alt='insta' />
                </a>
                <a href="https://www.linkedIn.com/">
                    <img src={linkedinIcon} alt='linkedIn' />
                </a>
            </div>

          </div>
          
          <div className={classes.quickLinks}>
            <h2>Quick Links</h2>
            <p>Customer Support</p>
            <Link to='/faq' className={classes.link}>
              <p>Course FAQ's</p>
            </Link>
             <p>Term & Condition</p>
             <p>Discussion</p>
             <p>Privacy Policy</p>
          </div>
          <div className={classes.subscribeF}>
            <h2>Subscribe</h2>
            <p>Get in Touch with us for latest News and Announcements </p>
            <input type="email" onChange={handleEmail1} placeholder="Email..." id="subscribe" />
            {emailError1 && <p className={classes.errorMsg}>Type a Valid Email.</p>}
            
              <button onClick={handleSubmit1} className={classes.subBtn}>Subscribe</button>              
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
