import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import classes from './TeacherView.module.css';

const TeacherView = () => {
  return (
    <>
      <Sidebar />
      <div className={classes.teacherView}>
        <div className={classes.titleContainer}>
          <h2 className={classes.title}>Teachers Details</h2>
          <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>Teachers</span></strong>
        </div>

        {/* about teacher */}
        <div className={classes.tView}>
          <h3 className={classes.abtme}>About Me</h3>
          <div className={classes.biodata}>
            <div className={classes.imgConatiner}>
              <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="me" className={classes.myImg} />
            </div>
            <div className={classes.mydata}>
              <div className={classes.colLeft}>
                <span className={classes.data}>Full Name:</span>
                <span>Department:</span>
                <span>Mobile:</span>
                <span>Email:</span>
                <span>Gender:</span>
                <span>DOB:</span>
              </div>
              <div className={classes.colRight}>
                <span>Daisy Parks</span>
                <span>Computer Science</span>
                <span>+91 89657 48512</span>
                <span>daisy@gmail.com</span>
                <span>Male</span>
                <span>22 Apr 1995</span>
              </div>
            </div>
          </div>
          <div className="loreData" >
            <p className="mt-1 text-secondary fs-5" id={classes.loremData}>Hello I am Daisy Parks. Lorem Ipsum is simply dummy text of the printing and typesetting industry, simply dummy text of the printing and typesetting industry.</p>
          </div>

          {/* social F count */}
          {/* <div className={classes.fCount}>
            <div className={classes.fcontainer}>
              <div className={classes.fData}>
                <h1 className="text-white fw-bold">2850</h1>
                <span className="text-white fw-bold fs-5">Followers</span>
              </div>
            </div>
            <div className={classes.fcontainer}>
              <div className={classes.fData}>
                <h1 className="text-white fw-bold">2050</h1>
                <span className="text-white fw-bold fs-5">Following</span>
              </div>
            </div>
            <div className={classes.fcontainer}>
              <div className={classes.fData}>
                <h1 className="text-white fw-bold">1452</h1>
                <span className="text-white fw-bold fs-5">Friends</span>
              </div>
            </div>
          </div>
          <div className="mt-3" id={classes.tvaddress}>
            <div className="">
              <h5 className="fw-bold">Permanent Address</h5>
              <span>480, Estern Avenue, Courtage area, New York</span>
            </div>
            <div className="taddRessCon">
              <h5>Present Address</h5>
              <span>480, Estern Avenue, Courtage area, New York</span>
            </div>
          </div>
          <hr /> */}

          {/* skills */}
          <div className={classes.Tskill}>
            {/* <h3>Skills</h3>
            <h6 className={classes.skTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi labore illo expedita temporibus ullam voluptatem nostrum dolore perspiciatis ut?</h6>

            <div className={classes.skills}>
              <span>Lorem Ipsum is simply</span>
              <div className="progress mb-3">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <span className="mb-2">Lorem Ipsum is simply</span>
              <div className="progress mt-2 mb-3">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <span>Lorem Ipsum is simply</span>
              <div className="progress mt-2 mb-3">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <span>Lorem Ipsum is simply</span>
              <div className="progress mt-2">
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <hr className="mt-5" /> */}

            {/* settings */}
            <div className={classes.settings}>
              <h3 className="text-dark">Settings</h3>
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">Current Password</label>
                  <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputAddress" className="form-label">New Password</label>
                  <input type="text" className="form-control" id="inputAddress" />
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-warning text-white fw-bold">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherView