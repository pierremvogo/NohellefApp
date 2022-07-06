import React from "react";
import VideoPlayer from 'react-video-js-player';


export const VideoContent = ( {
  videoLink,
  poster,
  vWidth,
  vHeight
} ) => {

      return(
        <VideoPlayer 
            src={videoLink}
            poster={poster} 
            width={vWidth} 
            height={vHeight}
            
          />
        )
 }

export default VideoContent;