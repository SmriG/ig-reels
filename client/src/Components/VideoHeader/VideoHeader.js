import React from 'react';
import '../VideoHeader/VideoHeader.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Camera from '@material-ui/icons/CameraAltOutlined';
import CameraAltOutlined from '@material-ui/icons/CameraAltOutlined';

const VideoHeader =()=>{
    return(
        <div className="videoHeader">
            <ArrowBackIosIcon/>
            <h3>Reels</h3>
            <CameraAltOutlined/>
        </div>
    );
}

export default VideoHeader