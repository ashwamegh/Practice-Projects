//  Creating a Component to start with
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDMcSVk2TDCUUWDRQl_nEnS7pmvTGtYcq0';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos: []
        }

        YTSearch({ key : API_KEY, term:'diljit'}, (videos) => this.setState({ videos }) );

    }
    render(){
      console.log(this.state.videos[0]);

        return (
        <div>
            <SearchBar />
            <VideoDetail  video={ this.state.videos[0] }/>
            <VideoList  videos={ this.state.videos } />
        </div>);
    }
}

// Putting the creating component on the page ( in the DOM )

ReactDOM.render(<App />, document.getElementById('container'));
