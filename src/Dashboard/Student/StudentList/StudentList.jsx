import  { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import classes from './StudentList.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
const StudentList = () => {

  return (
    <>
      <Sidebar />
      <div className={classes.teacherList}>
        <div className={classes.teacherTitle}>
          <div className={classes.colLeft}>
            <h2 className={classes.title}>Students</h2>
            <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>Students</span></strong>
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

          {/* teacher table */}

          <div className={classes.tableWrapper}>
            <table className=" mt-3 table border">
              <thead>
                <tr className="text-center">
                  <th className={classes.thead} scope="col">ID</th>
                  <th className={classes.thead} scope="col">NAME</th>
                  <th className={classes.thead} scope="col">CLASS</th>
                  <th className={classes.thead} scope="col">DOB</th>
                  <th className={classes.thead} scope="col">PARENT NAME</th>
                  <th className={classes.thead} scope="col">MOBILE NUMBER</th>
                  <th className={classes.thead} scope="col">DETAILS</th>
                  <th className={classes.thead} scope="col">ACTIONS</th>
                </tr>
              </thead>
              {/* {
                fetchData.map((single) => (
                  <tbody className={classes.tbody}>
                    <tr className={classes.trow}>
                      <td data-title="ID" className={classes.tdata}>hffaf</td>
                      <td data-title="NAME" className={classes.tdata}>
                        <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="teacher" className={classes.teacherImg} /> rajib
                      </td>
                      <td data-title="CLASS" className={classes.tdata}>12</td>
                      <td data-title="DOB" className={classes.tdata}>12/12/21</td>
                      <td data-title="PARENT NAME" className={classes.tdata}>
                        abdul<br />
                        fatema
                      </td>
                      <td data-title="MOBILE NUMBER" className={classes.tdata}>1414141414</td>
                      <td data-title="DETAILS" className={classes.tdata}>
                        <Link to="/"><button className="btn btn-primary">See details</button></Link>
                      </td>
                      <td data-title="ACTIONS" className={classes.tdata}>
                        <div className={classes.action}>
                          <button className={classes.btnEdit}><i class="fa-solid fa-pen"></i></button>
                          <button className={classes.btnDelete}><i class="fa-solid fa-trash"></i></button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))
              } */}
            </table>
          </div>

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



      {/* ///////////////////////////////////// SHOW COURSE ENROLLED STUDENTS LIST  ////////////////////////////////// */}

      <div className={classes.teacherList}>
        <div className={classes.teacherTitle}>
          <div className={classes.colLeft}>
            <h2 className={classes.title}>Students</h2>
            <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>CourseEnrolled-Students</span></strong>
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

          {/* teacher table */}

          <div className={classes.tableWrapper}>
            <table className=" mt-3 table border">
              <thead>
                <tr className="text-center">
                  <th className={classes.thead} scope="col">ID</th>
                  <th className={classes.thead} scope="col">NAME</th>
                  <th className={classes.thead} scope="col">EMAIL</th>
                  <th className={classes.thead} scope="col">SECRET</th>
                  <th className={classes.thead} scope="col">ACTIONS</th>
                </tr>
              </thead>
              {/* {
                enrolled.map((single) => (
                  <tbody className={classes.tbody}>
                    <tr className={classes.trow}>
                      <td data-title="ID" className={classes.tdata}>{single._id}</td>
                      <td data-title="NAME" className={classes.tdata}>
                        <img src={pic + single.photo} alt="img" className={classes.teacherImg} /> {single.name}
                      </td>
                      <td data-title="DOB" className={classes.tdata}>{single.regEmail}</td>
                      <td data-title="PARENT NAME" className={classes.tdata}>  {single.secret}</td>
                      <td data-title="ACTIONS" className={classes.tdata}>
                        <div className={classes.action}>
                          <button className={classes.btnEdit}><i class="fa-solid fa-pen"></i></button>
                          <button className={classes.btnDelete} onClick={() => handleDeleteEnrollStudent(single._id)}><i class="fa-solid fa-trash"></i></button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))
              } */}
            </table>
          </div>

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

export default StudentList;