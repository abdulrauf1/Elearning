
import classes from './Hero.module.css';
import hero from '../../../img/hero.png';
import { Link } from 'react-router-dom';
import React from 'react';
const Hero = () => {
    return (
        <div className={classes.heroTop}>
             <div className={classes.heroMain}>
                 <div className={classes.heroLeft}>
                     <div className={classes.heroLeftInner}>
                         <h3>Start your favourite course</h3>
                         <h1>Now learning from <br/>
                          anywhere, and build <br/> 
                          your <span style={{color:"#309255"}}>bright future.</span></h1>
                          <Link to='/allcourses'>
                          <button className={classes.getACourse}>Get A Course</button>
                          </Link>
                     </div>
                 </div>
                 <div className={classes.heroRight}>
                     <img src={hero} alt='hero' />
                 </div>
             </div>
        </div>
    )
}

export default Hero;