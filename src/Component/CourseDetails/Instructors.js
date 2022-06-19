import classes from "./Instructors.module.css";
import React from 'react';

const Instructors = (props) => {
   return(
       <div className={classes.InstructorsTop}>
                <img src={props.img} alt="authorimg"/>
                <h2>{props.name}</h2>
                <p>{props.skills}</p>
       </div>
   )
} 

export default Instructors;