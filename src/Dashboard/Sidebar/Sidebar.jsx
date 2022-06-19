import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

import { AuthContext } from "../../App";

const Sidebar = () => {
    
    const { state, dispatch } = React.useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false)
    const [topen, setTopen] = useState(false)
    const [sopen, setSopen] = useState(false)
    const [suopen, setSUopen] = useState(false)



    return (
        // <main id="sidebar" className="spaceToggle">
        <main id="sidebar" className={show ? 'spaceToggle' : null}>
            <header className={`header  ${show ? 'spaceToggle' : null}`}>
                {/* <header className="header"> */}
                <div className="headerToggle" onClick={() => setShow(!show)}>
                    <i class="fa-solid fa-bars-staggered" id="headerIcon"></i>
                </div>

                <div className="headerImgContainer">
                    <div className="topleft">
                        <i className="fa-solid fa-bell bell"></i>
                        <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="headerImg" />

                        <div class="dropdown">
                            <span type="span" class=" dropdown-toggle" data-bs-toggle="dropdown">
                            </span>
                            <ul class="dropdown-menu">
                                <li><Link to="/dashboard" className="dropdown-item navLink">My Profile</Link></li>
                                <li onClick={() => dispatch({type: "LOGOUT"})}><Link to="" className="dropdown-item navLink">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <aside className={`sidebar show ${show ? 'show' : null}`}>
                {/* <aside className="sidebar show"> */}
                <nav className="nav">
                    <div>
                        <Link to="/" className="navLogo">
                            <i class="fas fa-home-alt" id="navLogoIcon"></i>
                            <span className="navLogoName">Home</span>
                        </Link>
                        <div className="navList">

                            {/* SIDEBAR MENUS AND SUB MENUS */}
                            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                                <span className="sidebar-title navLink">
                                    <span className="">
                                        <i class="fa-solid fa-chalkboard-user" id="navLinkIcon"></i>
                                        Dashboard
                                    </span>
                                    <i class="fa-solid fa-angle-down toggle-btn" onClick={() => setOpen(!open)}></i>
                                </span>
                                <ul className="sidebar-content">
                                    <li className="sidebar-submenu"><Link to="/admin" id="active">Admin dashboard</Link></li>
                                </ul>
                            </div>

                           
                            {/* SUBJECTS */}
                            <div className={suopen ? "sidebar-item open" : "sidebar-item"}>
                                <span className="sidebar-title navLink">
                                    <span className="">
                                        <i class="fa-solid fa-chalkboard" id="navLinkIcon"></i>
                                        Subjects
                                    </span>
                                    <i class="fa-solid fa-angle-down toggle-btn" onClick={() => setSUopen(!suopen)}></i>
                                </span>
                                <ul className="sidebar-content">
                                    <li className="sidebar-submenu"><Link to="/subjectList" id="active">Subject list</Link></li>
                                    <li className="sidebar-submenu"><Link to="/subjectAdd" id="active">Subject add</Link></li>
                                    <li className="sidebar-submenu"><Link to="/subjectEdit" id="active">Subject edit</Link></li>
                                </ul>
                            </div>

                            <li onClick={() => dispatch({type: "LOGOUT"})} className="navLogo">
                                <i class="fas fa-sign-out" id="navLogoIcon"></i>
                                <span className="navLogoName">logout</span>
                            </li>
                            {/* more text */}
                        </div>
                    </div>

                </nav>
            </aside>

            {/* <div className="content">
                <h2 className="text-center justify-content-center align-items-center welcome">Welcome to the dashboard</h2>
            </div> */}
        </main>
    )
}

export default Sidebar