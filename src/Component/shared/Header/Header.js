import { useState } from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import menuIcon from '../../../img/menu.svg'
import close from '../../../img/close.svg';
import React from "react";
import { AuthContext } from "../../../App";

const Header = (props) => {

  const { state, dispatch } = React.useContext(AuthContext);
  const [navbar, setIsNavBar] = useState(false);
  // const [openNav,setIsOpenNav] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
 
  const closeSideBar = () => {
    setSidebar(false);
  }

  const changeNavbarBackgroundColor = () => {
    if (window.scrollY >= 80) {
      setIsNavBar(true);
    } else {
      setIsNavBar(false);
    }
  };

  

  window.addEventListener("scroll", changeNavbarBackgroundColor);
  return (
    <div
      className={
        navbar
          ? `${classes.HeaderTop} ${classes.HeaderTopActive}`
          : `${classes.HeaderTop}`
      }
    >
      <div className={classes.left}>
        <div className={classes.menuIcon} onClick={showSidebar}> 
            <img src={menuIcon} alt = 'menuIcon' />
        </div>
        <div className={classes.logo}>
          <h1>LOGO</h1>
        </div>

  <div className={sidebar ? `${classes.menu} ${classes.active}` : `${classes.menu}`}>
     <img onClick={closeSideBar} className={classes.close} src={close}  alt="close"/>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : "") }
          to="/home"
          onClick={closeSideBar}
        >
          Home
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : "")}
          to="/allcourses"
          onClick={closeSideBar}
        >
          All Courses
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : "")}
          to="/aboutus"
          onClick={closeSideBar}
        >
          About us
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? classes.active : "")}
          to="/contactus"
          onClick={closeSideBar}
        >
          Contact
        </NavLink>
        { state.isAuthenticated && 
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/mycourses"
            onClick={closeSideBar}
          >
            My courses
          </NavLink>
        } 
   </div>
      </div>
      <div className={classes.right}>
      { !state.isAuthenticated && 
        <>
          <NavLink to="/login">
            <button className={classes.signIn}>Sign In</button>
          </NavLink>      
          <NavLink to="/signup">
            <button className={classes.signUp}>Sign Up</button>
          </NavLink>
        </>
        }
        { state.isAuthenticated && 
          
            <button className={classes.signUp} onClick={() => dispatch({type: "LOGOUT"})}>Log out</button>
          
        }
        
        {/* <NavLink to="/signup">
          <button className={classes.signUp}>Log out</button>
        </NavLink> */}
      </div>
    </div>
  );
};

export default Header;
