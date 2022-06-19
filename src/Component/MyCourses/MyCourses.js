import { useEffect, useState } from "react";
import classes from "./MyCourses.module.css";
import MyCoursesCard from "./MyCoursesCard";

import Header from "../shared/Header/Header";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../App";



import React from 'react';
const MyCourses = () => {

  const [data,setData] = useState([]);
  // const { state, dispatch } = React.useContext(AuthContext);

  
    const all = localStorage.getItem("courses");
    
    useEffect(() => {
      var user = JSON.parse(localStorage.getItem('user'));
      // alert(user.accountId);
      
        fetch("https://lt0jcpj2v5.execute-api.us-east-2.amazonaws.com/prod/specificstudentcourses", {
          method: "post",
          headers: {
              "Content-Type": "application/json"
            },
          body: JSON.stringify({
            id: user.accountId
          })
        })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then(resJson => {
          setData(resJson);          
        })
        .catch(error => {        
          console.log(error);
        });


      window.scrollTo(0, 0)
    }, [])


  return (
    <>
    <Header/>
      <div className={classes.myCoursesTop}>
        <div className={classes.myCoursesInner}>
          {/* <p>My / <span style={{color:"#309255"}}>Courses</span></p> */}
          <h1>
            My <span style={{ color: "#309255" }}>Courses</span>
          </h1>
        </div>
      </div>

      <div className={classes.myCourse}>

          { 
            (data.length > 0) ?
              data.slice(0,4).map((c,i) => (
                <MyCoursesCard 
                  key={i}
                  id={c.courseId}
                  trailer={c.trailer} 
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
              : <h3>You have not Enrolled in any Course Yet !</h3>
            
          }
      </div>
      <Footer/>
    </>
  );
};

export default MyCourses;
