import { useEffect } from 'react';

import classes from './Error.module.css';
import errorImg from '../../img/error.png';
import { Link } from 'react-router-dom';

import React from 'react';
const Error404 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
         <div className={classes.ErrorTop}>
             <div className={classes.ErrorInner}>
                 <p>Home / <span style={{color:"#309255"}}>404 ERROR</span></p>
                 <h1>Page Not <span style={{color:"#309255"}}>Found</span></h1>
             </div>
         </div>

          {/* show error page content here ========================== */}
          <div className={classes.errorContent}>
              <div className={classes.left}>
                  <img src={errorImg} alt="Error Img" /> 
              </div>
              <div className={classes.right}>
                  <p>This page is not found</p>
                  <h1>We are very sorry for <br/> error. We <span style={{color:"#309255"}}>can't find</span> this <br/> page.</h1>
                  <Link to='/home'>
                     <button className={classes.goBackHomeBtn}>Go Back Home</button>
                  </Link>
              </div>
          </div> 
        

         </>
    )
}


export default Error404;