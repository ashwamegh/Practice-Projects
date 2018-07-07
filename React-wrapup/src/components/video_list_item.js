import React from 'react';


const VideoListItem = (props) => {
  const { video, onVideoSelect  } = props,
        imageUrl = video.snippet.thumbnails.default.url,
        heading = video.snippet.title;

  return (
    <li  onClick={ () => onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">

        <div className="media-left">
          <img src={ imageUrl } alt="" className="media-object"/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            { heading }
          </div>
        </div>

    </div>
    </li>
  );
}

export default VideoListItem;
