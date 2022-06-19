import classes from "./MyCoursesCard.module.css";
import { FaGraduationCap, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteIcon from "../../img/delete.svg";

import { useState } from "react";
import React from 'react';
import Header from "../shared/Header/Header";
import Footer from "../Footer/Footer";

import {Alert } from '@mui/material';
 
const MyCoursesCard = (props) => {
    const [showActions,setIsShowActions] = useState(false);
    const [trailer,setTrailer] = useState(props.trailer);

    const [deleteSuccess,setDeleteSuccess] = useState(false);

    const toggleActionsHandler = () => {
        setIsShowActions((state) => !state );
    }  

    function handleDelete(e)
    {
      var user = JSON.parse(localStorage.getItem('user'));

      
                
      fetch("https://ji3tw041jb.execute-api.us-east-2.amazonaws.com/prod/deleteenrollment", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({
          student_id: user.accountId,
          course_id: e
        })
      })
      .then(res => {
        if (res.ok) {
          setDeleteSuccess(true);
          setTimeout(() => {  window.location.reload();  }, 3000);
        }
        else
        {
          setDeleteSuccess(false);
        }
      })
      .catch(error => {        
        console.log(error);
        setDeleteSuccess(true);
      });


    }

  return (
    <>
      {/* <Header/> */}
      <div className={classes.CousreCardTop} key={props.id}>
        <div className={classes.CousreCardHeader}>
          <div className={classes.left}>
            <img src={props.courseImg} alt="hero" />
          </div>
          <div className={classes.right}>
            <div className={classes.menuDel} onClick={toggleActionsHandler}>
              <img src={DeleteIcon} alt="del" />
            </div>
            {showActions &&
                <div className={classes.actions} >
                  <p onClick={handleDelete(props.id)}></p>                  
                </div>
            }
          </div>
        </div>
        <div className={classes.courseInstructor}>
          <img src={props.tutorImg} alt="profile" />
          <h1>{props.tutorName}</h1>
        </div>
        <h3>{props.courseCategory}</h3>
        <p>{props.courseTitle}</p>
        <div className={classes.count}>
          <div className={classes.student}>
            <FaUser />
            <h4>{props.totalStudent}</h4>
          </div>
          <div className={classes.lecture}>
            <FaGraduationCap />
            <h4>{props.totalLecture} lectures</h4>
          </div>
        </div>
        <Link to={`/watchvideo/${props.id}`}>
          <button className={classes.learnDetails}>Watch Now</button>
        </Link>
      </div>
      {
            deleteSuccess ? <Alert variant="filled" severity="success">
                              You have Unenroll from the Succfully !
                            </Alert> :<></>
          }


      {/* <Footer /> */}
    </>
  );
};

export default MyCoursesCard;
