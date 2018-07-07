import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
  let { videos, onVideoSelect } = props;
  return (
    <ul className="col-md-4 list-group">
      {videos.map(video =>

        <VideoListItem
          onVideoSelect={onVideoSelect}
          key={video.etag}
          video={video}
        />
      )}
    </ul>
  );
}

export default VideoList;
