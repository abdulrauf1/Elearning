// import CousreCard from '../shared/FindCourse/CourseCard'
import classes from './AllCourses.module.css';
import CourseData from '../../API/Data';
import { useState,useEffect } from 'react';
import CousresCard from './AllCoursesCard';
import Header from '../shared/Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';

const AllCourses = () => {
    const [visibleAll,setIsVisibleAll] = useState(12);
    const [loadAll,setIsLoadAll] = useState(false);


    const [courseData,setcourseData] = useState([]);
    const [courseCategory,setCourseCategory] = useState([]);

 
    useEffect(() => {
        window.scrollTo(0, 0);


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
   

    const visibleAllHandler = () => {
        setIsLoadAll(true);
        setIsVisibleAll((prevValue) => prevValue + 4);
        setIsLoadAll(false);
    }
    
    return(
        <>
            <Header/>
            <div className={classes.allCoursesTop}>
                <div className={classes.allCoursesInner}>
                    <p>HOME / <span style={{color:"#309255"}}>COURSES</span></p>
                    <h1>ALL <span style={{color:"#309255"}}>COURSES</span></h1>
                </div>
            </div>
            {/* <CousreCard /> */}
            <div className={classes.showAllCoursesTop}>
                <div className={classes.showAllCoursesHeader}>
                    <h3>All</h3>
                    {/* {courseCategory.map((c,i)=><h3 key={i}>{c}</h3>)}                      */}
                </div>
                
                {/* show courses data content start here ================ */}
                 
                <div className={classes.allCoursesContentTop}>
                {
                    courseData.slice(0,visibleAll).map((c,i) => (
                        <CousresCard
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
                    ))
                }
                </div>
                <button onClick={visibleAllHandler} className={classes.allLoadBtn}>{loadAll ? "LOADING..." : "LOAD MORE"} </button>
            </div>
            <Footer/>
        </>
    )
}

export default AllCourses;