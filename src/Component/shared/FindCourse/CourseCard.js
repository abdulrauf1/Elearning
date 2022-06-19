import classes from './CourseCard.module.css'; 
import { FaGraduationCap,  FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';
import {Rating} from '@mui/material';


const CousreCard = (props) => {

    const pro = JSON.stringify(props);
    return (
        <div className={classes.CousreCardTop}>
            <div className={classes.CousreCardHeader}>
                <div className={classes.left}>
                    <img src={props.courseImg} alt='hero' />
                </div>
                <div className={classes.right}>
                    <div>
                        <h1>{props.price}</h1>
                        <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly />
                    </div>
                </div>
            </div>
            <div className={classes.courseInstructor}>
                <img src={props.tutorImg} alt='profile' />
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
                       <h4>{props.totalLecture} Lectures</h4>
                 </div>
             </div>
             <Link to={`/courseDetail/${props.id}`}>
    
                <button className={classes.learnDetails}>Learn Details</button>
             </Link>
        </div>
    )
}

export default CousreCard;