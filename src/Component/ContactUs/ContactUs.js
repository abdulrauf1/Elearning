import { useEffect } from 'react';

import classes from './ContactUs.module.css';


import React from 'react';
import emailIcon from '../../img/emailwhite.svg';
import callwhite from '../../img/callwhite.svg';
import locationIcon from '../../img/location.svg';
import Header from '../shared/Header/Header';
import Footer from '../Footer/Footer';

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <Header/>
        <div className={classes.contactTop}>
            <div className={classes.contactInner}>
                <p>Home / <span style={{color:"#309255"}}>Contact Us</span></p>
                 <h1>Contact <span style={{color:"#309255"}}>Us</span></h1>
            </div>
        </div>

        <div className={classes.contactForm}>
             <div className={classes.left}>
                <div className={classes.leftInner}>
                       <div className={classes.messageIcon}>
                           <img src={callwhite} alt="messageIcon" />
                       </div>
                       <div className={classes.messageText}>
                           <p>Phone Number</p>
                           <h1>0382813823</h1>
                       </div>
                </div>
                <hr style={{borderTop:"1px solid #309255",margin:"30px 0px"}} />
                <div className={classes.leftInner}>
                       <div className={classes.messageIcon}>
                           <img src={emailIcon} alt="messageIcon" />
                       </div>
                       <div className={classes.messageText}>
                           <p>Email Address</p>
                           <h1>example@gmail.com</h1>
                       </div>
                </div>
                <hr style={{borderTop:"1px solid #309255",margin:"30px 0px"}} />
                <div className={classes.leftInner}>
                       <div className={classes.messageIcon}>
                           <img src={locationIcon} alt="messageIcon" />
                       </div>
                       <div className={classes.messageText}>
                           <p>Address</p>
                           <h1>UET Peshawar, KPK</h1>
                       </div>
                </div>
             </div>
             <div className={classes.right}>
                 <div className={classes.rightInner}>
                         <h1>Get in touch <span style={{color:"#309255"}}>with Us</span></h1>
                         <input type="text" placeholder="name" />
                         <input type="text" placeholder="email" />
                         <input type="text" placeholder="subject" />
                         <textarea placeholder='message'/>
                         <button className={classes.sendMBtn}>Send Message</button>
                 </div>
              </div> 
        </div>
        <Footer/>
        </>
    )
}

export default ContactUs;