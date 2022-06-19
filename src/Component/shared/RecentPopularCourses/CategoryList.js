import classes from './CategoryList.module.css';
import codeIcon from '../../../img/codeIcon.svg';
import React from 'react';

const CategoryList = (props) => {    
  return (
      <div className={classes.card} key={props.key}>
          <div className={classes.codeIcon}>
             <img src={codeIcon} alt="codeIcon" /> 
          </div>
          <h2>{props.courseCategory}</h2>
          <p>{props.coursesCount} Courses</p>
      </div>
  )
}

export default CategoryList;