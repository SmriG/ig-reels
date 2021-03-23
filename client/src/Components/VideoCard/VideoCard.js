import React, { useRef, useState } from 'react';
import '../VideoCard/VideoCard.css';
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoHeader from '../VideoHeader/VideoHeader';
const VideoCard = ( { url, channel, avatarSrc, likes,shares,song } )=>{
    const [isVideoPlaying, setIsVedioPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = ()=>{
        if(isVideoPlaying){
            // stop
            videoRef.current.pause();
            setIsVedioPlaying(false); 
        }else{
            // play
            videoRef.current.play();
            setIsVedioPlaying(true);
        }
    }

    return(
        <div className='videoCard' >
            <VideoHeader/>
            <video className='video_player' src={url} ref={videoRef} onClick={onVideoPress} loop/>
            <VideoFooter channel={channel} likes={likes} shares={shares} avatarSrc={avatarSrc} song={song} />
        </div>
    )
}

export default VideoCard;