import CategoryList from './CategoryList';
import classes from './RecentPopularCourses.module.css';
import CourseData from '../../../API/Data';
import React from 'react';
const RecentPopularCourses = () => {
    return(
        <div className={classes.RecentPopularTop}>
             <div className={classes.recentPopularHeader}>
                <h3>Recent Popular Courses </h3>
                <button className={classes.viewAllBtn}>VIEW ALL</button>
             </div>
             <div className={classes.categoryList}>
                 {
                  CourseData.slice(0,4).map((cate) => (
                    <CategoryList
                      key={cate.i}
                      courseCategory={cate.courseCategory}
                      coursesCount ={cate.courseCategory.length}
                    />
                    ))   
                 } 
             </div>
        </div>
    )
}

export default RecentPopularCourses;