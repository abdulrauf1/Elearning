import classes from './FeedbackFromStudent.module.css';
import studenImg from '../../../img/author.jpg';
 
import React from 'react';
const FeedbackFromStudent = () => {
    return (
        <div className={classes.FeedbackTop}>
              <h1>Feedback From <span style={{color:"#309255"}}>Student</span></h1>
              <div className={classes.row}>
                   <div className={classes.left}>
                       <div className={classes.leftInner}>
                          <img src={studenImg}  alt='student'/>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                          <h2>Maria Khan</h2>
                       </div>
                   </div>
                   <div className={classes.right}>
                   <div className={classes.rightInner}>
                          <img src={studenImg}  alt='student'/>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                          <h2>Maria Khan</h2>
                       </div>
                   </div>
              </div>
        </div>
    )
}

export default FeedbackFromStudent;