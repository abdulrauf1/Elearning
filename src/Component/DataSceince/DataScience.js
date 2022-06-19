import classes from './DataScience.module.css';
import { useEffect } from 'react';
import CousresCard from '../AllCourses/AllCoursesCard';
import CourseData from '../../API/Data';
import React from 'react';
const DataScience = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <div className={classes.dataScienceTop}>
       <div className={classes.dataScienceTopInner}>
                {/* <p> / <span style={{color:"#309255"}}>404 ERROR</span></p> */}
                <h1>Data Science <span style={{color:"#309255"}}>Courses</span></h1>
            </div>
       </div>
       <div className={classes.dataScienceCourses}>
       {
                        CourseData.map((all) => (
                           <CousresCard
                               key={all.id}
                               id={all.id} 
                               courseImg={all.courseImg}
                               price={all.price}
                               rating={all.rating}
                               tutorImg={all.tutorImg}
                               tutorName={all.tutorName}
                               courseCategory={all.courseCategory}
                               courseTitle ={all.courseTitle}
                               totalStudent ={all.totalStudent}
                               totalLecture={all.courseVideos.length}
                           />
                        ))
                    }
       </div>
       </>
    )
}


export default DataScience;