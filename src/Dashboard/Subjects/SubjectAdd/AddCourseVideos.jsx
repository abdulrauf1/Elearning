
import classes from './SubjectAdd.module.css';
import Sidebar from '../../Sidebar/Sidebar';
import React from 'react';
import { useState,useEffect } from 'react';

import {CircularProgress } from '@mui/material';
import { Navigate } from 'react-router-dom';



const AddCourseVideos = (props) => {

    

    const [videoLink,setVideoLink] = useState("");
    const [title,setTitle] = useState("");
    const [duration,setDuration] = useState("");
    
    const [videoCount, setVideoCount] = useState(0);

    const [isFileStarted,setIsFileStarted] = useState(false);
    const [isFileUploaded,setIsFileUploaded] = useState(false);


    const handleChangeFile = (event) => {
        event.preventDefault();

        if(event.target.files[0] != undefined)
        {            
            setIsFileStarted(true);

            var file = event.target.files[0];
            var fileName = file.name;
            var fileType = file.type;                        
        

            fetch("https://1se04jyog3.execute-api.us-east-2.amazonaws.com/prod/uploadlecture", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },            
                body: JSON.stringify({
                    //filename                
                    file_name: fileName                
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(resJson => {
                
                if(resJson.statusCode == 200)
                {
                    var url = resJson["Object URL"];
                    var link = resJson["Link for uploading file"];                                                        
                    fetch(link, {
                        method: "put",
                        headers: {
                            "Content-Type": fileType
                        },                                
                        body: file                        
                        })
                    .then(res => {                        
                        if (res.ok) {
                            setVideoLink(url);
                            
                            setIsFileStarted(false);
                            setIsFileUploaded(true);                            
                        }
                            
                    })
                    .catch(error => {                                    
                        
                        setIsFileUploaded(false);
                    }); 
                                                                            
                }            
                                
            })
            .catch(error => {            
                
                setIsFileUploaded(false);
                console.log(error);
            });   

        }
        else
        {
            alert("NO file selected");
        }
        
    }

    const handleChangeTitle = (event) => {
        event.preventDefault();
        setTitle(event.target.value);        
    }

    const handleChangeDuration = (event) => {
        event.preventDefault();
        setDuration(event.target.value);        
    }

    
    const handleSubmit = () =>
    {
        
        fetch("https://pkivnhwxac.execute-api.us-east-2.amazonaws.com/prod/courselinks", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },        
            body: JSON.stringify({
                courseId : props.data[1],
                courseVideoLink : videoLink,
                title : title,
                duration : duration
            })
    
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        })
        .then(resJson => {
            
            if(resJson)
            {
                setVideoCount(videoCount+1);
                
                setIsFileStarted(false);
                setIsFileUploaded(false);
                document.querySelector('input').value = '';
                setVideoLink("");
                setTitle("");
                setDuration("");
            }
            
            
        })
        .catch(error => {            
            console.log(error);
        });
    
                
        
    }

    
    
    useEffect(()=>{
        
        // fetch("https://j9bu3housk.execute-api.us-east-2.amazonaws.com/prod/coursecategories", {
        //     method: "post",
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        // .then(res => {
        //     if (res.ok) {
        //         return res.json();
        //     }
        //     throw res;
        // })
        // .then(resJson => {
            
        //     setCategories(resJson);
            
        // })
        // .catch(error => {            
        //     console.log(error);
        // });
    

    },[])

    return (
        <>
            <Sidebar />
            <div className={classes.TeacherAdd}>
                <div className={classes.teacherTitle}>
                    <div className={classes.colLeft}>
                        <h2 className={classes.title}>Add Videos in {props.data[0].courseName} </h2>
                        <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>Add Subject</span></strong>
                    </div>
                </div>

                {/* Teacher add forms */}
                <div className="mt-3">
                    <div className={classes.Tadd}>
                        {/* basic details */}
                        <>
                            <div className={classes.bdtails}>
                                <h3>Course Video Details</h3>
                                <div className={classes.line} />

                                <h4>Instructed By : <strong>{props.data[0].courseTutor}</strong></h4>
                            </div>
                            <form className="row g-3">
                                <div className="col-md-3">
                                    <label htmlFor="inputEmail4" className="form-label">Lecture Video</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file"   onChange={handleChangeFile} name="videoLink"/>                                        
                                    </div>
                                    {isFileStarted ? <CircularProgress disableShrink /> : <></>}
                                    {isFileUploaded ? <>Uploaded</> : <></>}
                                </div>
                                
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Title</label>
                                    <input type="text" className="form-control" value={title} onChange={handleChangeTitle} id="inputPassword4" placeholder="Lecture  Title" name="title" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Video Duration</label>
                                    <input type="text" className="form-control" id="inputPassword4" value={duration} onChange={handleChangeDuration} placeholder="Video Duration" name="duration" />
                                </div>

                                <div className="col-md-12 mb-2 mt-2">
                                    <label htmlFor="VideoCount" className="form-label"><h4> Videos Uploaded so far : {videoCount}</h4></label>
                                </div>
                                
                                <div className="col-12 mb-4">
                                    <button type="button" onClick={handleSubmit} className="btn btn-warning text-white fw-bold">Submit</button>
                                </div>
                            </form>
                        </>
                    </div>
                </div>
            </div>

    
        </>
    )
}

export default AddCourseVideos