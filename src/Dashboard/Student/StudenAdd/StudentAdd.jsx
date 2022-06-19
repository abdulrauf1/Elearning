
import Sidebar from '../../Sidebar/Sidebar';
import classes from './StudentAdd.module.css';
import React from 'react';
const StudentAdd = () => {

    return (
        <>
            <Sidebar />
            <div className={classes.TeacherAdd}>
                <div className={classes.teacherTitle}>
                    <div className="colLeft">
                        <h2 className={classes.title}>Add Student</h2>
                        <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>Student</span></strong>
                    </div>
                </div>

                {/* Teacher add forms */}
                <div className="mt-3">
                    <div className={classes.Tadd}>
                        {/* basic details */}
                        <>
                            <div className={classes.bdtails}>
                                <h3>Basic Details</h3>
                                <div className={classes.line} />
                            </div>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Student ID</label>
                                    <input type="text" className="form-control" id="inputEmail4" name="studentId" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Enter your name" name="studentName" required/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Date of Birth</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="dd/mm/yyyy" name="dob" required/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" id="inputCity" name="mobile" required/>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputState" className="form-label">Sections</label>
                                    <input type="text" className="form-control" id="inputCity" name="sections" required/>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputState" className="form-label">Class</label>
                                    <input type="text" className="form-control" id="inputCity" name="class" required/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputZip" className="form-label">Student Image</label>
                                    {/* <input type="file" className="form-control" id="inputZip" /> */}
                                    <div className="d-flex justify-content-start align-items-start">
                                      
                                        <input type="file" required />
                                    </div>
                                </div>
                                {/* address */}
                                <>
                                    <div className={classes.adrstails}>
                                        <h3>Parent Information</h3>
                                        <div className={classes.line} />
                                    </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputPassword4" className="form-label">Father Name</label>
                                            <input type="text" className="form-control" id="inputPassword4" name="fatherName" required/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputPassword4" className="form-label">Mother Name</label>
                                            <input type="text" className="form-control" id="inputPassword4" name="motherName" required/>
                                        </div>
                                        <div className="col-12 mb-4">
                                            <button type="submit" className="btn btn-warning text-white fw-bold">Submit</button>
                                        </div>
                                </>
                            </form>
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentAdd