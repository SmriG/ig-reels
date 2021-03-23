import { useEffect, useState } from 'react';
import './App.css';
import VideoCard from './Components/VideoCard/VideoCard';
import db from './firebase';

function App() {
  const [reels, setReels] = useState([]);
  useEffect(()=>{
    db.collection('reels').onSnapshot(snapshot=>(
      setReels(snapshot.docs.map(doc=> doc.data()))
    ))
  },[])
  return (
    <div className="App">
      <div className="app_top" >
        <img className="app_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png" alt="insta_logo"></img>
        <h2>Reels</h2>
      </div>
      
      <div className="app_videos">
        {reels.map(({channel, avatarSrc, song, url, likes, shares})=>(
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song=  {song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
        
       </div>
    </div>
  );
}

export default App;
