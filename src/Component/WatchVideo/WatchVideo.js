
import VideoPlayer from 'react-video-js-player';

import playIcon from '../../img/play_circle_filled_black_24dp.svg';
import CourseData from '../../API/Data';


import classes from "./WatchVideo.module.css";

import React from 'react';
import { useState,useEffect } from "react";
import {  useParams } from 'react-router-dom';
import VideoList from './videoList';

import {Container,Card } from '@mui/material';

import Header from "../shared/Header/Header";

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));




const WatchVideo = () => {

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    };

    const params = useParams();

    
    
    const [data,setData] = useState([]);
    const [poster,setPoster] = React.useState("");
    const [play,setPlay] = React.useState(params.trailer);
    
    useEffect(() => {
      window.scrollTo(0, 0)

      
      // console.log(params.watchId);

      fetch("https://t02av5o7aj.execute-api.us-east-2.amazonaws.com/prod/specificcourselinks", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({
          course_id: params.watchId
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
        setPoster(resJson[0].coursePosterImageLink);
        setPlay(resJson[0].courseTrailerLink);
        
      })
      .catch(error => {        
        console.log(error);
      });

    }, [])

    // const watchCourse =  CourseData.find((course) => course.id === params.courseId); 
    // const watchCourse = CourseData.find((newCourse) => newCourse.id === params.watchId )
    // const video  = watchCourse.courseTrailer;
    // const poster = watchCourse.coursePoster;
    // console.log(watchCourse.filter(({video}) => video.courseVideo));
    // const list = watchCourse.courseVideos;
    // console.log(localStorage.getItem(courses));
    // var user = JSON.parse(localStorage.getItem('courses'));
  return (
    <>
      <Header />
      <div className={classes.watchVideoTop}>
        <div className={classes.watchVideoTopInner}>
          <h1>Title</h1>
          <br />
          <p>Instructor</p>
        </div>
      </div>

        
        <Container fluid>
          {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>Course Trailer</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>              
              </Typography>
              <div className={classes.videoTop}>
              <div className={classes.watchVideo}>
                  <VideoPlayer  src={play} poster={poster} className={classes.Video} />
              </div>                                      
              </div>
              
            </AccordionDetails>
          </Accordion> */}
          {
            data.map((v,i) => 
          
          <Accordion key={i}  expanded={expanded === ('panel'+i)} onChange={handleChange(('panel'+i))}>
            <AccordionSummary aria-controls={('panel'+i)+"d-content"} id={('panel'+i)+"d-header"}>
              <Typography>{i+1} .  {v.vidTitle} - {v.duration}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>            
              </Typography>
              <div className={classes.videoTop}>
              <div className={classes.watchVideo}>
                  <VideoPlayer  src={v.courseVideoLink} poster={poster} className={classes.Video} />
              </div>                                      
              </div>
            </AccordionDetails>
          </Accordion>
          
            )
          }
          <div className="mb-5"></div>
        </Container>
    </>
  );
};

export default WatchVideo;
