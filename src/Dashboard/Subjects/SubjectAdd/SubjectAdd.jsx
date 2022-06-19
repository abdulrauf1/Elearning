
import classes from './SubjectAdd.module.css';
import Sidebar from '../../Sidebar/Sidebar';
import React from 'react';
import { useState,useEffect } from 'react';

import {axios} from 'axios';
import { Navigate, Route, Routes  } from 'react-router-dom';

import {CircularProgress } from '@mui/material';
import AddCourseVideos from './AddCourseVideos';

import {Alert } from '@mui/material';

const SubjectAdd = () => {

    const [courseTrailerStarted,setcourseTrailerStarted] = useState(false);
    const [courseTrailerUploaded,setcourseTrailerUploaded] = useState(false);

    const [courseImageStarted,setcourseImageStarted] = useState(false);
    const [courseImageUploaded,setcourseImageUploaded] = useState(false);

    const [courseTutorImageStarted,setcourseTutorImageStarted] = useState(false);
    const [courseTutorImageUploaded,setcourseTutorImageUploaded] = useState(false);

    const courseData = {
        trailerLink: "",
        posterLink: "",
        instructorImageLink: "",
        level: "",
        courseName: "",
        tutorSkills: "",
        coursePrice: "",
        courseRating: "",        
        courseLanguage: "",
        courseTutor: "",
        courseCategoryId: "",
        courseDescription: ""

    };

    const [data, setData] = React.useState(courseData);

    const [categories,setCategories] = useState([]);

    const [insertedCourseId,setInsertedCourseId] = useState(0);

    const handleChangeFileTrailer = (event) => {
        event.preventDefault();

        if(event.target.files[0] != undefined)
        {
            setcourseTrailerStarted(true);

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
                            setData({
                                ...data,
                                [event.target.name]: url
                                });       
                            setcourseTrailerStarted(false);                    
                            setcourseTrailerUploaded(true);                            
                        }
                            
                    })
                    .catch(error => {                                    
                        setcourseTrailerUploaded(false);
                    }); 
                                                                            
                }            
                                
            })
            .catch(error => {                            
                setcourseTrailerUploaded(false);     
                console.log(error);
            });   

        }
        else
        {
            alert("NO file selected");
        }
        
    }


    const handleChangeFileImage = (event) => {
        event.preventDefault();

        if(event.target.files[0] != undefined)
        {
            setcourseImageStarted(true);        

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
                            setData({
                                ...data,
                                [event.target.name]: url
                                });                           
                            setcourseImageStarted(false);
                            setcourseImageUploaded(true);
                        }
                            
                    })
                    .catch(error => {            
                        setcourseImageUploaded(false);                                
                    }); 
                                                                            
                }            
                                
            })
            .catch(error => {            
                setcourseImageUploaded(false);        
                console.log(error);
            });   

        }
        else
        {
            alert("NO file selected");
        }
        
    }


    const handleChangeFileinsImage = (event) => {
        event.preventDefault();


        if(event.target.files[0] != undefined)
        {            
            setcourseTutorImageStarted(true);

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
                            setData({
                                ...data,
                                [event.target.name]: url
                                });                           
                            setcourseTutorImageStarted(false);
                            setcourseTutorImageUploaded(true);                            
                        }
                            
                    })
                    .catch(error => {                                    
                        setcourseTutorImageUploaded(false);                           
                    }); 
                                                                            
                }            
                                
            })
            .catch(error => {            
                setcourseTrailerUploaded(false);
                console.log(error);
            });   

        }
        else
        {
            alert("NO file selected");
        }
                
    }



    const [go,setGo] = useState(false);
    const [isDataMissed,setIsDataMissed] = useState(false);
    
    const handleChange = (event) => {
        event.preventDefault();
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
        
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        
        if( (data.trailerLink === "" || data.trailerLink === undefined || data.trailerLink === null) ||
            (data.posterLink === "" || data.posterLink === undefined || data.posterLink === null) ||
            (data.instructorImageLink === "" || data.instructorImageLink === undefined || data.instructorImageLink === null) ||
            (data.level === "" || data.level === undefined || data.level === null) ||
            (data.courseName === "" || data.courseName === undefined || data.courseName === null) ||
            (data.tutorSkills === "" || data.tutorSkills === undefined || data.tutorSkills ===  null) ||
            (data.coursePrice === "" || data.coursePrice ===  undefined || data.coursePrice === null) ||
            (data.courseRating === "" || data.courseRating ===  undefined || data.courseRating === null) ||
            (data.courseLanguage === "" || data.courseLanguage === undefined || data.courseLanguage === null) ||
            (data.courseTutor === "" || data.courseTutor ===  undefined || data.courseTutor === null) ||
            (data.courseCategoryId === "" || data.courseCategoryId ===  undefined || data.courseCategoryId === null) ||
            (data.courseDescription === "" || data.courseDescription === undefined || data.courseDescription === null) )
        {
            setIsDataMissed(true);
         
        }
        else
        {
            setIsDataMissed(false);
            
            fetch("https://7209mefw43.execute-api.us-east-2.amazonaws.com/prod/instructor", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                accountId: 1,
                name: data.courseTutor,
                skils: data.tutorSkills,
                email: "",
                instructorImageLink:  data.instructorImageLink,
                ratings: data.courseRating,
                mobile: "",
                address: ""                
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        })
        .then(resJson => {
            
            var instructorId = resJson;

            
            if(instructorId)
            {
                
                fetch("https://lwpqxpaetk.execute-api.us-east-2.amazonaws.com/prod/courses", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        instructorId : instructorId,
                        title : data.courseName, 
                        description : data.courseDescription,                
                        coursePosterImageLink : data.posterLink,
                        courseTrailerLink : data.trailerLink,
                        price : data.coursePrice,
                        categoryId : data.courseCategoryId,
                        freeOrPaid : "",
                        level : data.level,
                        language : data.courseLanguage
                    })
                })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw res;
                })
                .then(resJson => {
                    var courseId = resJson;                    

                    
                    if(courseId > 0)
                    {
                        setInsertedCourseId(courseId);                        
                        setGo(true);
                    }

                })
                .catch(error => {            
                    console.log(error);
                });
                        
            }   
        })
        .catch(error => {            
            console.log(error);
        });

            
        }                
        
    }


    useEffect(()=>{
        
        fetch("https://j9bu3housk.execute-api.us-east-2.amazonaws.com/prod/coursecategories", {
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
            
            setCategories(resJson);
            
        })
        .catch(error => {            
            console.log(error);
        });
    

    },[])
    

    return (
        <>
            <Sidebar />
            { (go) ? <AddCourseVideos data={[data,insertedCourseId]}/> :
                <div className={classes.TeacherAdd}>
                    <div className={classes.teacherTitle}>
                        <div className={classes.colLeft}>
                            <h2 className={classes.title}>Add Subject</h2>
                            <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>Add Subject</span></strong>
                        </div>
                    </div>

                    {/* Teacher add forms */}
                    <div className="mt-3">
                        <div className={classes.Tadd}>
                            {/* basic details */}
                            <>
                                <div className={classes.bdtails}>
                                    <h3>Course Details</h3>
                                    <div className={classes.line} />
                                </div>
                                <div className="row g-3">
                                    <div className="col-md-3">
                                        <label htmlFor="inputEmail4" className="form-label">Trailer Video</label>
                                        <div className="d-flex justify-content-start align-items-start border p-1">
                                            <input type="file" onChange={handleChangeFileTrailer} name="trailerLink" required/>
                                            
                                        </div>
                                        {courseTrailerStarted ? <CircularProgress disableShrink /> : <></>}
                                        {courseTrailerUploaded ? <>Selected</> : <></>}
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputPassword4" className="form-label">Poster</label>
                                        <div className="d-flex justify-content-start align-items-start border p-1">
                                            <input type="file" onChange={handleChangeFileImage} name="posterLink" />
                                            {/* <input type="file" onChange={(e) => setPoster(e.target.files[0])} name="poster"/> */}
                                        </div>
                                        {courseImageStarted ? <CircularProgress disableShrink /> : <></>}
                                        {courseImageUploaded ? <>Selected</> : <></>}
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputPassword4" className="form-label">Tutor Image</label>
                                        <div className="d-flex justify-content-start align-items-start border p-1">                                    
                                            <input type="file" onChange={handleChangeFileinsImage} name="instructorImageLink"/>
                                        </div>
                                        {courseTutorImageStarted ? <CircularProgress disableShrink /> : <></>}
                                        {courseTutorImageUploaded ? <>Selected</> : <></>}
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputPassword4" className="form-label">Level</label>
                                        <input type="text" className="form-control" onChange={handleChange} id="inputPassword4" placeholder="course lavel" name="level" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputPassword4" className="form-label">Course Name</label>
                                        <input type="text" className="form-control" id="inputPassword4" onChange={handleChange} placeholder="course name" name="courseName" />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputPassword4" className="form-label">Tutors Skills</label>
                                        <input type="text" className="form-control" id="inputPassword4" onChange={handleChange} placeholder="tutor skills" name="tutorSkills" />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputPassword4" className="form-label">Price</label>
                                        <input type="number" step="any" className="form-control" id="inputPassword4" onChange={handleChange} placeholder="price" name="coursePrice" />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputPassword4" className="form-label">Rating</label>
                                        <input type="number" step="0.1" min="0.0" max="5.0" className="form-control" id="inputPassword4" onChange={handleChange} placeholder="Course rating" name="courseRating" />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputPassword4" className="form-label">Language</label>
                                        <input type="text" className="form-control" id="inputPassword4" onChange={handleChange} placeholder="language" name="courseLanguage" />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputPassword4" className="form-label">Tutor</label>
                                        <input type="text" className="form-control" id="inputPassword4" onChange={handleChange} placeholder="tutor name" name="courseTutor" />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputPassword4" className="form-label">Category</label>
                                        <select className="form-control" name="courseCategoryId" onChange={handleChange} id="courseCategoryId">
                                            <option value="1" > Choose Course Category</option>
                                            {
                                                categories.map((c,i)=>
                                                    <option key={i} value={c.coursesCategoryId} >{c.coursesCategory}</option>
                                                )
                                            }
                                            
                                        </select>
                                        {/* <input type="text" className="form-control" id="inputPassword4" onChange={handleChange} placeholder="Course Category" name="data.courseCategoryId" /> */}
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="inputPassword4" className="form-label">Descriptions</label>
                                        <textarea type="text" className="form-control" id="inputPassword4" onChange={handleChange} placeholder="Course Discrpitions" name="courseDescription" />
                                    </div>


                                    <div className='col-12 mb-3 mt-3'>
                                        {isDataMissed ? <Alert variant="filled" severity="warning">
                                            You have missed some data Please fill every field.
                                            </Alert> :<></>
                                        }
                                    </div>

                                    <div className="col-12 mb-4">
                                        <button type="button" onClick={handleSubmit} className="btn btn-warning text-white fw-bold">Submit</button>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            }

                    
        </>
    )
}

export default SubjectAdd