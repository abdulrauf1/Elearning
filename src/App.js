import React from "react";

import { useState,useEffect } from 'react';

import './App.css';
import Main from './Component/shared';
import { Navigate, Route, Routes  } from 'react-router-dom';
import AllCourses from './Component/AllCourses/AllCourses';
import ContactUs from './Component/ContactUs/ContactUs';
import SignUpLogin from './Component/SignUpLogin/SignUpLogin';

import SignUp from './Component/SignUpLogin/SignUp/SignUp';
import Login from './Component/SignUpLogin/Login/Login';
import Error404 from './Component/Error404/Error404';
import CourseDetails from './Component/CourseDetails/CourseDetail';
import FaqOp from './Component/FAQ/Faq';
import AboutUs from './Component/AboutUs/AboutUs';
import WatchVideo from './Component/WatchVideo/WatchVideo';
import MyCourses from './Component/MyCourses/MyCourses';
import SpecificCourse from './Component/SpecificCourse/SpecificCourse';
import Engineering from './Component/Engineering/Engineering';
import DataScience from './Component/DataSceince/DataScience';
import Designing from './Component/Designing/Designing';
import UIUX from './Component/UIUX/UIUX';
import Dashboard from '../src/Dashboard/Dashbaord.jsx';
import AdminDash from '../src/Dashboard/AdminDash/AdminDash.jsx';
import TeacherLists from '../src/Dashboard/Teacher/TeacherLists/TeacherLists.jsx';
import TeacherView from '../src/Dashboard/Teacher/TeacherView/TeacherView.jsx';
import TeacherAdd from '../src/Dashboard/Teacher/TeacherAdd/TeacherAdd.jsx';
import TeacherEdit from '../src/Dashboard/Teacher/TeacherEdit/TeacherEdit.jsx';
import StudentList from '../src/Dashboard/Student/StudentList/StudentList.jsx';
import StudentAdd from '../src/Dashboard/Student/StudenAdd/StudentAdd.jsx';
import StudentView from './Dashboard/Student/StudenView/StudentView';
import StudentEdit from './Dashboard/Student/StudentEdit/StudentEdit';
import StubjectList from './Dashboard/Subjects/SubjectList/SubjectList';
import SubjectAdd from './Dashboard/Subjects/SubjectAdd/SubjectAdd';
import SubjectEdit from './Dashboard/Subjects/SubjectEdit/SubjectEdit';
import AddCourseVideos from "./Dashboard/Subjects/SubjectAdd/AddCourseVideos";


export const AuthContext = React.createContext();

const initialState = {
  userId: 0, 
  isAuthenticated: false,
  isAdmin: false,
  user: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADMINLOGIN":
      // localStorage.setItem("user", JSON.stringify(action.payload));   
      // alert("ad")
      try {
        localStorage.setItem("admin", JSON.stringify(action.payload));
        window.location.href = '/dashboard';
      } 
      catch (error) {
        console.log('Error in local storage', error);        
      } 
      return {
        state,
        userId: action.payload.accountId,
        isAuthenticated: true,
        isAdmin: true,
        user: action.payload
      };
    
    case "LOGIN":
      // localStorage.setItem("user", JSON.stringify(action.payload));   
      // alert("user")
      try {
        localStorage.setItem("user", JSON.stringify(action.payload));
          // window.location.href = '/home';
      } 
      catch (error) {
        console.log('Error in local storage', error);        
      } 
      return {
        state,
        userId: action.payload.accountId,
        isAuthenticated: true,
        isAdmin: false,
        user: action.payload
      };
    case "LOGOUT":
      // alert("logout");
      localStorage.clear();
      window.location.href = '/login';
      return {
        ...state,        
        isAuthenticated: false,
        isAdmin: false,
        user: null,
      };
    default:
      return state;
  }
};


function App() {

  const [state, dispatch] = React.useReducer(reducer, initialState);
  

  useEffect(() => {
    var user = JSON.parse(localStorage.getItem('user'));
    
  
    if(user){
      dispatch({
        type: 'LOGIN',
        payload: user        
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      
        {/* <Header /> */}
        <main>
          {/* <div className="App">{!state.isAuthenticated ?  <Navigate to="/login"/> : state.isAdmin ? <Navigate to="/admin"/> :<Navigate to="/"/>}</div> */}
        
        </main>
        <Routes>
            <Route path='/UniSV-fyp' element={<Navigate to='/home' />} />
            <Route path="/home" element={<Main />} />
            <Route path="/" element={<Main />} />
            <Route path='/allcourses' element={<AllCourses />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/signuplogin' element={<SignUpLogin />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/courseDetail/:courseId' element={<CourseDetails />} />
            <Route path='/watchvideo/:watchId' element={<WatchVideo />} />
            <Route path='/mycourses' element={<MyCourses />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/specificcourse' element={<SpecificCourse />} />
            <Route path='/engineering' element={<Engineering />} />
            <Route path='/datascience' element={<DataScience />} />
            <Route path='/designing' element={<Designing />} />
            <Route path='/uiux' element={<UIUX />} />
            <Route path='/faq' element={<FaqOp />} />
            <Route path='*' element={<Error404 />} />
            <Route path='/admin' element={<AdminDash/>} />
            {/* teacher panel */}
            <Route path='/teacherList' element={<TeacherLists />} />
            <Route path='/teacherView' element={<TeacherView />} />
            <Route path='/teacherAdd' element={<TeacherAdd />} />
            <Route path='/teacherEdit' element={<TeacherEdit />} />
            {/* student panel */}
            <Route path='/studentList' element={<StudentList />} />
            <Route path='/studentAdd' element={<StudentAdd />} />
            <Route path='/studentView' element={<StudentView/>} />
            <Route path='/studentEdit' element={<StudentEdit/>} />
            {/* Subject panel */}
            <Route path='/subjectList' element={<StubjectList/>} />
            <Route path='/subjectAdd' element={<SubjectAdd/>} />
            <Route path='/addVideo' element={<AddCourseVideos/>} />
            <Route path='/subjectEdit' element={<SubjectEdit />} />
          </Routes>
        {/* <Footer /> */}     
        
    </AuthContext.Provider>
  );
}

export default App;
