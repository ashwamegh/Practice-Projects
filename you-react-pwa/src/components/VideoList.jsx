import React from "react";

import VideoListItem from "./VideoListItem";
import "./VideoList.css";

const VideoList = props => {
  let { videos } = props;
  return (
    <div className="col-md-12 list-group">
      {videos.map(video =>
        <a href={`https://www.youtube.com/watch?v${video.id}`}  key={video.etag}  target="_blank">
          <VideoListItem video={video}/>
        </a>
      )}
    </div>
  );
};

export default VideoList;
