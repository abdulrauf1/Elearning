import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import classes from './AdminDash.module.css';

const AdminDash = () => {
  
    return (
        <>

            <Sidebar />
            <div className={classes.adminDash}>
                <div className={classes.titleContainer}>
                    <h2 className={classes.title}>Welcome Admin!</h2>
                    <strong className={classes.firstTitle}>Dashboard / <span className="text-muted fw-bold">Admin dashboard</span></strong>

                    {/* numbers card */}
                    <div className={classes.adDash}>
                        <div className={classes.fCount}>
                            <div className={classes.fcontainer} id={classes.students}>
                                <div className={classes.fData}>
                                    <div className={classes.Stuiconwrapper}>
                                        <i class="fa-solid fa-user-graduate" id={classes.graduate}></i>
                                    </div>
                                    <div className={classes.textwrapper}>
                                        <h2 className="text-dark fw-bold">5250</h2>
                                        <span className="text-dark ">Students</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.fcontainer} id={classes.awards}>
                                <div className={classes.fData}>
                                    <div className={classes.Awrdsiconwrapper}>
                                        <i class="fa-solid fa-address-book"></i>
                                    </div>
                                    <div className={classes.textwrapper}>
                                        <h2 className="text-dark fw-bold">50+</h2>
                                        <span className="text-dark">Total Teachers</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.fcontainer} id={classes.department}>
                                <div className={classes.fData}>
                                    <div className={classes.Depticonwrapper}>
                                        <i class="fa-solid fa-building"></i>
                                    </div>
                                    <div className={classes.textwrapper}>
                                        <h2 className="text-dark fw-bold"> 30+</h2>
                                        <span className="text-dark">Department</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.fcontainer} id={classes.revenue}>
                                <div className={classes.fData}>
                                    <div className={classes.Revniconwrapper}>
                                        <i class="fa-solid fa-file"></i>
                                    </div>
                                    <div className={classes.textwrapper}>
                                        <h2 className="text-dark fw-bold">12</h2>
                                        <span className="text-dark">Total Courses</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* start students table */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className={classes.tableWrapprer}>
                                    <p className={classes.starTitle}>Star students</p>
                                    <table className="table border">
                                        <thead>
                                            <tr className="text-center">
                                                <th className={classes.thead} scope="col">ID</th>
                                                <th className={classes.thead} scope="col">NAME</th>
                                                <th className={classes.thead} scope="col">MARKS</th>
                                                <th className={classes.thead} scope="col">PERCENTAGE</th>
                                                <th className={classes.thead} scope="col">YEAR</th>
                                            </tr>
                                        </thead>

                                        <tbody className={classes.tbody}>
                                            <tr className={classes.trow}>
                                                <th className={classes.tdata}>HJKDH</th>
                                                <td className={classes.tdata}>
                                                    <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="teacher" className={classes.teacherImg} /> Mark
                                                </td>
                                                <td className={classes.tdata}>10</td>
                                                <td className={classes.tdata}>10/10/1997</td>
                                                <td className={classes.tdata}>Robert</td>
                                            </tr>
                                        </tbody>
                                        <tbody className={classes.tbody}>
                                            <tr className={classes.trow}>
                                                <th className={classes.tdata}>HJKDH</th>
                                                <td className={classes.tdata}>
                                                    <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="teacher" className={classes.teacherImg} /> Mark
                                                </td>
                                                <td className={classes.tdata}>10</td>
                                                <td className={classes.tdata}>10/10/1997</td>
                                                <td className={classes.tdata}>Robert</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* student activity */}
                            {/* <div className="col-md-6">
                                <div className={classes.StuActivity}>
                                    <p className={classes.StuTitle}>Student Activity</p>

                                    <div className={classes.StuActivityPoint}>
                                        <div>
                                            <div className={classes.circle}>∗</div>
                                            <div className={classes.circle}>∗</div>
                                            <div className={classes.circle}>∗</div>
                                            <div className={classes.circle}>∗</div>
                                        </div>
                                        <div className="textPoint">
                                            <div className={classes.firstPoint}>
                                                <span className={classes.pointTitle}>APR 13</span>
                                                <p className={classes.PointPara}>John Doe <span className={classes.pointmid}>won 1st place in</span> "Chess"</p>
                                            </div>
                                            <div className={classes.firstPoint}>
                                                <span className={classes.pointTitle}>MAR 17</span>
                                                <p className={classes.PointPara}>Justin dossy<span className={classes.pointmid}>participated in</span> "Caram"</p>
                                            </div>
                                            <div className={classes.firstPoint}>
                                                <span className={classes.pointTitle}>APR 13</span>
                                                <p className={classes.PointPara}>Justin Lee <span className={classes.pointmid}>attended internation conference in</span> "St.John School"</p>
                                            </div>
                                            <div className={classes.firstPoint}>
                                                <span className={classes.pointTitle}>APR 13</span>
                                                <p className={classes.PointPara}>John Doe <span className={classes.pointmid}>won 1st place in</span> "Chess"</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* social status */}
                            {/* <div className={classes.socalStatus}>
                                <div className={classes.socialContainer}>
                                    <div className={classes.socialFacebook}>
                                        <div className={classes.number}>
                                            <h2>50,000</h2>
                                            <span>Likes</span>
                                        </div>
                                        <div className={classes.socialIcon}>
                                            <i class="fa-brands fa-facebook"></i>
                                        </div>
                                    </div>
                                    <div className={classes.socialTwitter}>
                                        <div className="text-white fw-bold">
                                            <h2>36,000</h2>
                                            <span>Followers</span>
                                        </div>
                                        <div className={classes.socialTwitIcon}>
                                            <i class="fa-brands fa-twitter"></i>
                                        </div>
                                    </div>
                                    <div className={classes.socialInsta}>
                                        <div className="text-white fw-bold">
                                            <h2>50,000</h2>
                                            <span>Followers</span>
                                        </div>
                                        <div className={classes.socialInstaIcon}>
                                        <i class="fa-brands fa-instagram"></i>
                                        </div>
                                    </div>
                                    <div className={classes.socialLinke}>
                                        <div className="text-white fw-bold">
                                            <h2>30,000</h2>
                                            <span>Followers</span>
                                        </div>
                                        <div className={classes.socialLinkeIcon}>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDash