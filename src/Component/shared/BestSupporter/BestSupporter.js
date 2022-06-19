import classes from './BestSupporter.module.css';

import supporterLogo from "../../../img/supporterLogo.png";
import React from 'react';

const BestSupporter = () => {
    return(
        <div className={classes.BestSupporterTop}>
            <h1>Our best <span style={{color:"#309255"}}>Supporter</span></h1>
            <div className={classes.supporterLogo}>
               <img src={supporterLogo} alt="logo" />
               <img src={supporterLogo} alt="logo" />
               <img src={supporterLogo} alt="logo" />
               <img src={supporterLogo} alt="logo" />
            </div>
        </div>
    )
}

export default BestSupporter;