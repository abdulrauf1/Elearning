import classes from "./FindCourse.module.css";
import { useState, useEffect } from "react";
import CousreCard from "./CourseCard";
// import CourseData from "../../../API/Data";
import { Link } from "react-router-dom";
import React from 'react';
import Header from '../Header/Header';

import {Alert } from '@mui/material';


const FindCourse = () => {
  const [toggleFindCourse, setToggleFindCourse] = useState(1);

  const [courseData,setcourseData] = useState([]);
  const [courseCategory,setCourseCategory] = useState([]);


  const toggleFindCourseHandler = (index) => {
    setToggleFindCourse(index);
  };

  useEffect(() => {
    
    fetch("https://qfpht85xxf.execute-api.us-east-2.amazonaws.com/prod/fetchcoursesinfo", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }            
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        throw res;
    })
    .then(resJson => {

      const unique = [...new Set(resJson.map(item => item.coursesCategory))];
      setcourseData(resJson);
      setCourseCategory(unique);
        
        
    })
    .catch(error => {
        
        console.log(error);
    });

  }, [])

  return (
    <>
    <Header/>
    <div className={classes.FindCourseTop}>
      <div className={classes.FindCourseHeader}>
        <h3>Find the right course for you</h3>
        <Link to='/allCourses'>
           <button className={classes.viewAllBtn}>VIEW ALL</button>
        </Link>
      </div>
       {/* find Course tab here ====================== */}
      <div className={classes.findCategory}>
        <div
          onClick={() => {
            toggleFindCourseHandler(1);
          }}
          className={
            toggleFindCourse === 1
              ? `${classes.tabs} ${classes.findActive}`
              : `${classes.tabs}`
          }
        >
          All
        </div>

        {courseCategory.map((c,i)=><div 
                                      key={i} 
                                      onClick={()=>{
                                                    toggleFindCourseHandler(i+2);
                                              }} 
                                      className={
                                                  toggleFindCourse === i+2
                                                  ? `${classes.tabs} ${classes.findActive}`
                                                  : `${classes.tabs}`
                                                }
                                    >
                                    {c}
                                    </div>
                            )}
        
      </div>

      {/* find Course tab content here ====================== */}
      <div className={classes.courseCategoryContent}>
        <div
          className={
            toggleFindCourse === 1
              ? `${classes.tabContent} ${classes.findActiveContent}`
              : `${classes.tabContent}`
          }
        >
          <div className={classes.allCourses}>
            {courseData.slice(0, 8).map((c,i) => (
              <CousreCard  
                key={i}
                id={c.courseId} 
                courseImg={c.poster}
                price={c.price}
                rating={3.4}
                tutorImg={c.instructorImageLink}
                tutorName={c.name}
                courseCategory={c.coursesCategory}
                courseTitle ={c.title}
                totalStudent ={c.enrollments}
                totalLecture={c.lectures}
             />
            ))}
          </div>
        </div>
        {courseCategory.map((e,k) => 
            <div
              key={k}
                className={
                            toggleFindCourse === k+2
                            ? `${classes.tabContent} ${classes.findActiveContent}`
                            : `${classes.tabContent}`
                          }
            >
          
              <div className={classes.development}>
                {courseData.filter((c) => c.coursesCategory === e).slice(0, 8).map((c,i) => (
                    <CousreCard  
                      key={i}
                      id={c.courseId} 
                      courseImg={c.poster}
                      price={c.price}
                      rating={3.4}
                      tutorImg={c.instructorImageLink}
                      tutorName={c.name}
                      courseCategory={c.coursesCategory}
                      courseTitle ={c.title}
                      totalStudent ={c.enrollments}
                      totalLecture={c.lectures}
                    />
                    
                  ))}
              </div>
            </div>
        )}
       

      </div>
    </div>
    </>
  );
};

export default FindCourse;
