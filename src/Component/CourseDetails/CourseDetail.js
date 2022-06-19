import { Link, useParams } from 'react-router-dom';
import classes from './CourseDetail.module.css';
import CourseData from '../../API/Data';
import { useState,useEffect } from "react";
import React from 'react';
import { AuthContext } from "../../App";


import VideoPlayer from 'react-video-js-player';
import Instructors from './Instructors';
// import video from '../../video/script.mp4';
import poster from '../../img/courses.jpg';
import Header from '../shared/Header/Header';

import {Alert } from '@mui/material';

const CourseDetails = () => {
    const params = useParams();
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    
    const { state, dispatch } = React.useContext(AuthContext);
    const [toggleCourseDetail, setToggleCourseDetail] = useState(1);

  const toggleCourseDetailHandler = (index) => {
    setToggleCourseDetail(index);    
  };

    const [courseTrailer,setCourseTrailer] = useState('');


    const [isWarning,setIsWarning] = useState(false);
    const [enroll,setEnroll] = useState(false);
    const [already,setAlready] = useState(false);
    
    const [courseData,setcourseData] = useState("");

    const handleEnroll = (event) => {
      event.preventDefault();

      if(state.isAuthenticated)
      {
        
        fetch("https://c9mllmoij5.execute-api.us-east-2.amazonaws.com/prod/enrollment", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                studentId: state.userId,
                courseId: params.courseId
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        })
        .then(resJson => {
            
            if(resJson === "The Student ID or Course ID already exists")
            {
              setAlready(true);
             
              setTimeout(() => {  window.location.href = "/mycourses"; }, 3000);
            }

            if(resJson)
            {              
              setEnroll(true);
             
              setTimeout(() => {  window.location.href = "/mycourses"; }, 3000);
            }                        
        })
        .catch(error => {
            
            console.log(error);
        });
      }
      else
      {
          setIsWarning(true);    
          setTimeout(() => {  window.location.href = "/login"; }, 3000);
          
          
      }

    }

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
                
          setcourseData(resJson.filter((c) => c.courseId == params.courseId).slice(0, 1).map((c,i) => (c))[0]);
          
          setCourseTrailer(resJson.filter((c) => c.courseId == params.courseId).slice(0, 1).map((c,i) => (c.trailer))[0]);
          
          
      })
      .catch(error => {            
          console.log(error);
      });

}, [])

   
    return(
      <>
      <Header/>
          <div className={classes.courseDetailTop}>
              <div className={classes.courseDetailInner}>
                   <p>Home / <span style={{color:"#309255"}}>DETAILS</span></p>
                   <h1>Course <span style={{color:"#309255"}}>DETAILS</span></h1>
              </div>
          </div>
          {/* course details section heere ========================= */}
          <div className={classes.courseDetail}>
               <div className={classes.left}>
                   <div className={classes.mediaPlayer}>
                      {courseTrailer.length > 0 && <VideoPlayer src={courseTrailer} poster={poster} className={classes.Video} />}
                      {/* <VideoCard src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'} /> */}
                   </div>
                   <div className={classes.courseDescription}>
                     {/* <h2>{courseDetail.courseTitle}</h2>
                      <span>
                          <img src={courseDetail.tutorImg} alt="Author" />
                          <p>{courseDetail.tutorName}</p>
                          <p>&nbsp; || {courseDetail.totalStudent}</p>
                      </span> */}
                        {isWarning ? <Alert variant="filled" severity="warning">
                              Please Login First to Enroll in a course ! Redirecting to Login in a While.
                            </Alert> :<></>
                            }
                        {
                          enroll ? <Alert variant="filled" severity="success">
                              Succfully Enrolled !
                            </Alert> :<></>
                            }

                            {
                              already ? <Alert variant="filled" severity="info">
                              You have already Enrolled in this Course !
                            </Alert> :<></>
                            }
                      
                      <div className={classes.tabs}>
                         <div
                         onClick={() => {
                          toggleCourseDetailHandler(1);
                        }}
                        className={
                          toggleCourseDetail === 1
                            ? `${classes.tabs} ${classes.findActive}`
                            : `${classes.tabs}`
                        }
                         >
                             Description
                         </div>
                         <div
                          onClick={() => {
                              toggleCourseDetailHandler(2);
                            }}
                            className={
                              toggleCourseDetail === 2
                                ? `${classes.tabs} ${classes.findActive}`
                                : `${classes.tabs}`
                            }
                         >
                             Instructor
                         </div>
                         <div
                          onClick={() => {
                              toggleCourseDetailHandler(3);
                            }}
                            className={
                              toggleCourseDetail === 3
                                ? `${classes.tabs} ${classes.findActive}`
                                : `${classes.tabs}`
                            }
                         >
                             Reviews
                         </div>
                      </div>
  
                      <div className={classes.courseDetailContent}>
                          <div
                            className={
                              toggleCourseDetail === 1
                                ? `${classes.tabContent} ${classes.findActiveContent}`
                                : `${classes.tabContent}`
                            }
                          >
                              {/* {courseDetail.courseDescription} */}
                          </div>
                          <div
                           className={
                              toggleCourseDetail === 2
                                ? `${classes.tabContent} ${classes.findActiveContent}`
                                : `${classes.tabContent}`
                            }
                          >
                               <div className={classes.instructorSect}>
                                  {/* {courseDetail.courseInstructors.map((user) => (
                                  
                                      <Instructors 
                                         key={user.id}
                                         name={user.tutorName}
                                         img={user.tutorImg}
                                         skills ={user.skills}
                                      />
                                  
                                  ) )} */}
                                </div>
                          </div>
                          <div
                           className={
                              toggleCourseDetail === 3
                                ? `${classes.tabContent} ${classes.findActiveContent}`
                                : `${classes.tabContent}`
                            }
                          >
                              Review
                          </div>
                      </div>
                       
  
                   </div>
  
  
               </div>
               <div className={classes.right}>
                   <h1>Free</h1>
                   <div>
                     <span>Instructor</span>
                     <p>{courseData.name}</p>
                   </div>                   
                   <div>
                     <span>Lectures</span>
                     <p>{courseData.lectures}</p>
                   </div>
                   <div>
                     <span>Level</span>
                     <p>{courseData.level}</p>
                   </div>
                   <div>
                     <span>Language</span>
                     <p>{courseData.language}</p>
                   </div>
                   {/* {state.isAuthenticated ? 
                    <Link to={`/watchVideo/${params.courseId}`} > 
                      <div className={classes.enroll} >
                        <p style={{color:"#fff"}}>Enroll Now</p>
                      </div>
                    </Link>
                   :
                    */}
                      <div className={classes.enroll} >
                        <p style={{color:"#fff"}} onClick={handleEnroll}>Enroll Now</p>
                      </div>
                  {/* } */}
              </div>

              
          </div>
          
       </>
      )
  }
  
  export default CourseDetails;