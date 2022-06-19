import { useEffect } from "react";

import classes from "./AboutUs.module.css";
import AboutImg from "../../img/aboutus.jpg";
import { Link } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../Footer/Footer";
import React from 'react';
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Header/>
      <div className={classes.aboutUsTop}>
        <div className={classes.aboutUsTopInner}>
          <p>
            Home / <span style={{ color: "#309255" }}>About</span>
          </p>
          <h1>
            About <span style={{ color: "#309255" }}>LOGO</span>
          </h1>
        </div>
      </div>

      <div className={classes.aboutUs}>
        <div className={classes.left}>
          <div>
            <h3>
              2+ years <br></br>{" "}
              <span style={{ color: "#309255" }}>experience</span>
            </h3>
          </div>
          <img src={AboutImg} alt="bgImg" />
        </div>
        <div className={classes.right}>
          <div className={classes.rightInner}>
            <h3>Welcome to LoGo</h3>
            <p>
              Lorem Ipsum has been the industr’s standard dummy text ever since
              unknown printer took galley type and scmbled make type specimen
              book. It has survived not only five centuries.
            </p>
            <Link to="/allcourses">
              <button className={classes.getCourseBtn}>Get A Course</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
