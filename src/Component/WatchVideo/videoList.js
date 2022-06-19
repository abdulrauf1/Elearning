import classes from './VideoList.module.css';
import playIcon from '../../img/play_circle_filled_black_24dp.svg';
import React from 'react';
const VideoList = (props) => {
    const [play,setPlay] = React.useState("");

    

    return (
        <div className={classes.list}>
        {/* <input type='checkbox' /> */}
         <div className={classes.title}>
                                    
             <li  onClick={()=>{setPlay(props.link);}}>{props.title}</li>
              <span>
                  <img src={playIcon} alt="play" />
                  <small>{props.duration}</small>
              </span>
         </div>
    </div>
    )
}

export default VideoList;