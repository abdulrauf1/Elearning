
import Sidebar from '../../Sidebar/Sidebar';
import classes from './TeacherAdd.module.css';
import React from 'react'; 
const TeacherAdd = () => {
    return (
        <>
            <Sidebar />
            <div className={classes.TeacherAdd}>
                <div className={classes.teacherTitle}>
                    <div className="colLeft">
                        <h2 className={classes.title}>Add Teachers</h2>
                        <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>Teachers</span></strong>
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
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" name="regEmail"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Teacher Name</label>
                                    <input type="text" className="form-control" id="inputPassword4" name="name"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Role</label>
                                    <input type="text" className="form-control" id="inputPassword4" name="role" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputZip" className="form-label">Teacher Image</label>
                                    {/* <input type="file" className="form-control" id="inputZip" /> */}
                                    <div className="d-flex justify-content-start align-items-start">
                                       
                                        <input type="file"  required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">DOB</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="dd/mm/yyyy" name="dob"/>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" id="inputCity" name="mobile"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputState" className="form-label">Joining Date</label>
                                    <input type="text" className="form-control" id="inputCity" name="joinDate"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputZip" className="form-label">Qualification</label>
                                    <input type="text" className="form-control" id="inputZip" name="qualification"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputZip" className="form-label">Experience</label>
                                    <input type="text" className="form-control" id="inputZip" name="experience"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputZip" className="form-label">Password</label>
                                    <input type="text" className="form-control" id="inputZip" name="regpassword"/>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-warning text-white fw-bold">Add Teacher</button>
                                </div>
                            </form>
                        </>
                        {/* Login details */}
                        <>
                            <div className={classes.lgntails}>
                                <h3>Login Details</h3>
                                <div className={classes.line} />
                            </div>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Email ID</label>
                                    <input type="text" className="form-control" id="inputPassword4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <input type="text" className="form-control" id="inputPassword4" required/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Reapt Password</label>
                                    <input type="text" className="form-control" id="inputPassword4" required/>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-warning text-white fw-bold">Submit</button>
                                </div>
                            </form>
                        </>
                        {/* address */}
                        <>
                            <div className={classes.adrstails}>
                                <h3>Address Details</h3>
                                <div className={classes.line} />
                            </div>
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <label htmlFor="inputEmail4" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">City</label>
                                    <input type="text" className="form-control" id="inputPassword4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">State</label>
                                    <input type="text" className="form-control" id="inputPassword4"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Zip Code</label>
                                    <input type="text" className="form-control" id="inputPassword4"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Country</label>
                                    <input type="text" className="form-control" id="inputPassword4"/>
                                </div>

                                <div className="col-12 mb-4">
                                    <button type="submit" className="btn btn-warning text-white fw-bold">Submit</button>
                                </div>
                            </form>
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherAdd