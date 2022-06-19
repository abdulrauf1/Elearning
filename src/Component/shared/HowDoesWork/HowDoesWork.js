import classes from "./HowDoesWork.module.css";
import searchImg from '../../../img/search.svg';
import file from '../../../img/file.svg';
import certification from '../../../img/certification.svg';
import React from 'react';
const HowDoesWork = () => {
  return (
    <div className={classes.HowDoesWorkTop}>
      <h3>
        How does it <span style={{ color: "#309255" }}>Work?</span>
      </h3>
      <div className={classes.row}>
        <div className={classes.left}>
            <div>
                <img src={searchImg} alt="search"/>
            </div>
                <h1>Find Your Course</h1>
                <p>Find the best course for your<br /> better future </p>
        </div>
        <div className={classes.center}>
            <div>
                <img src={file} alt="search"/>
            </div>
                <h1>Book A Seat</h1>
                <p>Grab a seat to improve your <br/> skills for industry</p>
        </div>
        <div className={classes.right}>
            <div>
                <img src={certification} alt="search"/>
            </div>
                <h1>Get A Certificate</h1>
                <p>Get a certificate to polish <br/> your Resume</p>
        </div>
      </div>
    </div>
  );
};

export default HowDoesWork;
