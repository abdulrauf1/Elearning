import classes from './index.module.css';
import FindCourse from './FindCourse/FindCouse';
// import Header from './Header/Header';
import Hero from './Hero/Hero';
import RecentPopularCourses from './RecentPopularCourses/RecentPopularCourses';
import HowDoesWork from './HowDoesWork/HowDoesWork';
import BestSupporter from './BestSupporter/BestSupporter';
import FeedbackFromStudent from './FeedbackFromStudent/FeedbackFromStudent';
import Header from './Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';
const Main = () => {
    return (
        <div className={classes.mainTop}>
            <Header />
            <Hero />
            <FindCourse />
            
            <HowDoesWork />
            <BestSupporter />
            <FeedbackFromStudent />
            <Footer />
        </div>
    )
}
export default Main;