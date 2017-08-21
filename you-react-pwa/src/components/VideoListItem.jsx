import React from "react";

const VideoListItem = props => {
  const { video } = props,
    imageUrl = video.snippet.thumbnails.medium.url,
    heading = video.snippet.localized
      ? video.snippet.localized.title
      : video.snippet.title,
    date = video.snippet.publishedAt,
    channel = video.snippet.channelId,
    description = video.snippet.localized
      ? video.snippet.localized.description
      : video.snippet.description;
  const dateString = new Date(Date.parse(date.substr(0, 9))).toDateString();
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left media-middle">
          <img
            src={imageUrl}
            alt=""
            className="media-object"
            style={{ height: "120px" }}
          />
        </div>

        <div className="media-body media-middle">
          <h5 className="media-heading">
            {heading}
          </h5>
          <p>
            <strong style={{ display: "block" }}>
              Published on {dateString}
            </strong>
            {description.substr(0, 140)}
          </p>
          <a
            href={`https://www.youtube.com/channel/${channel}`}
            target="_blank"
            rel="noopener"
          >
            <img
              src="./images/youtube-subscribe.png"
              alt=""
              style={{ width: "90px" }}
            />
          </a>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
