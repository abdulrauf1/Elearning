import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import classes from './SubjectList.module.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

import {Alert } from '@mui/material';

const StubjectList = () => {
  const [courseData,setcourseData] = useState([]);

  const [deleteSuccess,setDeleteSuccess] = useState(false);
  const [restoreSuccess,setRestoreSuccess] = useState(false);

  const [errorDelete,setErrorDelete] = useState(false);
  const [errorRestore,setErrorRestore] = useState(false);

  const handelRestore = (e) =>{
    e.preventDefault();

    fetch("https://2oy15rvk66.execute-api.us-east-2.amazonaws.com/prod/revertcourse", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({          
          course_id: e.target.value
        })
      })
      .then(res => {
        if (res.ok) {
          
          setRestoreSuccess(true);
          setTimeout(() => {  window.location.reload();  }, 3000);
          
        }
        else
        {
          setRestoreSuccess(false);
        }
      })
      .catch(error => {        
        console.log(error);
        setRestoreSuccess(false);
      });
  }

  const handelDelete = (e) => {
    e.preventDefault();
  
    fetch("https://bnxk56htfl.execute-api.us-east-2.amazonaws.com/prod/deletecourses", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({          
          course_id: e.target.value
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
        setDeleteSuccess(false);
      });
      setTimeout(() => {  window.location.reload();  }, 3000);
  }

  useEffect(() => {

        fetch("https://0xhlst4mq6.execute-api.us-east-2.amazonaws.com/prod/coursesinfoadmin", {
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

            setcourseData(resJson);            
            
        })
        .catch(error => {            
            console.log(error);
        });

  }, [])



  return (
    <>
      <Sidebar />
      <div className={classes.teacherList}>
        <div className={classes.teacherTitle}>
          <div className="colLeft">
            <h2 className={classes.title}>Subjects</h2>
            <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>Subjects</span></strong>
          </div>
          <div className={classes.colRight}>
            <button className={classes.btnDwnld}><i className="fa-solid fa-download me-2"></i>Download</button>
            <button className={classes.plus}><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>


        <div className={classes.Ttable}>
          <div className={classes.entriTitle}>
            <span className="me-2">Show</span>
            <>
              <div className="dropdown">
                <span className=" dropdown-toggle border p-1" type="span" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="me-2">10</span>
                </span>
                <ul className="dropdown-menu border" aria-labelledby="dropdownMenuButton1" id={classes.tblsubMenu}>
                  <li>10</li>
                  <li>25</li>
                  <li>50</li>
                </ul>
              </div>
            </>
            <span className="ms-2">Entries</span>
          </div>

          {/* subject table */}
          <div className={classes.tableWrapper}>
            <table className=" mt-3 table border">
              <thead>
                <tr className="text-center">
                  <th className={classes.thead} scope="col">ID</th>
                  <th className={classes.thead} scope="col">NAME</th>
                  <th className={classes.thead} scope="col">CLASS</th>
                  <th className={classes.thead} scope="col">ACTION</th>
                </tr>
              </thead>

              <tbody className={classes.tbody}>

                {
                  courseData.map((c,i)=>
                  <tr key={i} className={classes.trow}>
                    <td data-title="ID" className={classes.tdata}>{i+1}</td>
                    <td data-title="NAME" className={classes.tdata}>{c.title}</td>
                    <td data-title="CLASS" className={classes.tdata}>{c.level}</td>
                    <td data-title="ACTION" className={classes.tdata}>
                      <div className={classes.action}>                        
                        {c.coursesIsDeleted ? <li className={classes.btnEdit} value={c.courseId} onClick={handelRestore}>Restore <i class="fa-solid fa-reload"></i></li>:<></>}
                        {!c.coursesIsDeleted ? <li className={classes.btnDelete} value={c.courseId} onClick={handelDelete}>Delete <i class="fa-solid fa-trash"></i></li>:<></>}
                      </div>
                    </td>  
                  </tr>
                  )
                }
                
              </tbody>
            </table>
          </div>

          {
            deleteSuccess ? <Alert variant="filled" severity="success">
                              Course Deleted Succfully !
                            </Alert> :<></>
          }

          {
            restoreSuccess ? <Alert variant="filled" severity="success">
                              Course Restored Succfully !
                            </Alert> :<></>
          }

          
          {/* paginations */}
          <div className="d-flex justify-content-center align-items-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><Link to="/prev" className="page-link text-secondary">Previous</Link></li>
                <li className="page-item"><Link to="/1" className="page-link">1</Link></li>
                <li className="page-item"><Link to="/2" className="page-link text-secondary">Next</Link></li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </>
  )
}

export default StubjectList;