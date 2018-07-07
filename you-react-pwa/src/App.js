import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import { get } from "axios";

import "./App.css";
import Titlebar from "./components/Titlebar";
import VideoList from "./components/VideoList";

const API_KEY = "AIzaSyDMcSVk2TDCUUWDRQl_nEnS7pmvTGtYcq0";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };

    this.videoSearch = this.videoSearch.bind(this);
  }

  componentWillMount() {
    const ROOT_URL =
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN";
    const params = {
      key: API_KEY
    };

    get(ROOT_URL, { params: params })
      .then(response => {
        this.setState({ videos: response.data.items });
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos =>
      this.setState({
        videos
      })
    );
  }

  render() {
    const { videos } = this.state;
    return (
      <div className="App">
        <Titlebar videoSearch={this.videoSearch} />
        <VideoList videos={videos} />
      </div>
    );
  }
}

export default App;
