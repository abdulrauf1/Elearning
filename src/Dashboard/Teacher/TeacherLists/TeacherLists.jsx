import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import classes from './TeacherLists.module.css';
import { Link } from 'react-router-dom';

const TeacherLists = () => {

  return (


    <>
      <Sidebar />
      <div className={classes.teacherList}>
        <div className={classes.teacherTitle}>
          <div className={classes.colLeft}>
            <h2 className={classes.title}>Teachers</h2>
            <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>Teachers</span></strong>
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
                  <th className={classes.thead} scope="col">GENDER</th>
                  <th className={classes.thead} scope="col">SUBJECT</th>
                  <th className={classes.thead} scope="col">SECTION</th>
                  <th className={classes.thead} scope="col">MOBILE NUMBER</th>
                  <th className={classes.thead} scope="col">ADDRESS</th>
                  <th className={classes.thead} scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody className={classes.tbody}>
                <tr className={classes.trow}>
                  <td data-title="ID" className={classes.tdata}>HJKDH</td>
                  <td data-title="NAME" className={classes.tdata}>
                    <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="teacher" className={classes.teacherImg} /> Mark
                  </td>
                  <td data-title="CLASS" className={classes.tdata}>10</td>
                  <td data-title="GENDER" className={classes.tdata}>Male</td>
                  <td data-title="SUBJECT" className={classes.tdata}>Mathmatics</td>
                  <td data-title="SECTION" className={classes.tdata}>C</td>
                  <td data-title="NUMBER" className={classes.tdata}>402 221 7523</td>
                  <td data-title="ADDRESS" className={classes.tdata}>3979 Ashwood Drive, Omaha</td>
                  <td data-title="ACTION" className={classes.tdata}>
                    <div className={classes.action}>
                      <button className={classes.btnEdit}><i class="fa-solid fa-pen"></i></button>
                      <button className={classes.btnDelete}><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody className={classes.tbody}>
                <tr className={classes.trow}>
                  <td data-title="ID" className={classes.tdata}>HJKDH</td>
                  <td data-title="NAME" className={classes.tdata}>
                    <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="teacher" className={classes.teacherImg} /> Mark
                  </td>
                  <td data-title="CLASS" className={classes.tdata}>10</td>
                  <td data-title="GENDER" className={classes.tdata}>Male</td>
                  <td data-title="SUBJECT" className={classes.tdata}>Mathmatics</td>
                  <td data-title="SECTION" className={classes.tdata}>C</td>
                  <td data-title="NUMBER" className={classes.tdata}>402 221 7523</td>
                  <td data-title="ADDRESS" className={classes.tdata}>3979 Ashwood Drive, Omaha</td>
                  <td data-title="ACTION" className={classes.tdata}>
                    <div className={classes.action}>
                      <button className={classes.btnEdit}><i class="fa-solid fa-pen"></i></button>
                      <button className={classes.btnDelete}><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody className={classes.tbody}>
                <tr className={classes.trow}>
                  <td data-title="ID" className={classes.tdata}>HJKDH</td>
                  <td data-title="NAME" className={classes.tdata}>
                    <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="teacher" className={classes.teacherImg} /> Mark
                  </td>
                  <td data-title="CLASS" className={classes.tdata}>10</td>
                  <td data-title="GENDER" className={classes.tdata}>Male</td>
                  <td data-title="SUBJECT" className={classes.tdata}>Mathmatics</td>
                  <td data-title="SECTION" className={classes.tdata}>C</td>
                  <td data-title="NUMBER" className={classes.tdata}>402 221 7523</td>
                  <td data-title="ADDRESS" className={classes.tdata}>3979 Ashwood Drive, Omaha</td>
                  <td data-title="ACTION" className={classes.tdata}>
                    <div className={classes.action}>
                      <button className={classes.btnEdit}><i class="fa-solid fa-pen"></i></button>
                      <button className={classes.btnDelete}><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </td>
                </tr>
              </tbody>
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

export default TeacherLists