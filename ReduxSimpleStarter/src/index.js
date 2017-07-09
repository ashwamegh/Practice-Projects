//  Creating a Component to start with
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDMcSVk2TDCUUWDRQl_nEnS7pmvTGtYcq0';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('diljit');
    }

    videoSearch(term) { 

        YTSearch({ key : API_KEY, term: term}, (videos) => 
        this.setState({ 
            videos,
            selectedVideo: videos[0]
        }) );
        
    }

    render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term)},300 );

        const { videos, selectedVideo }  = this.state;

        return (
        <div>
            <SearchBar onSearchTermChange={ videoSearch } />
            <VideoDetail  video={ selectedVideo }/>
            <VideoList  
            videos={ videos } 
            onVideoSelect = { selectedVideo => this.setState({ selectedVideo })}/>
        </div>);
    }
}

// Putting the creating component on the page ( in the DOM )

ReactDOM.render(<App />, document.getElementById('container'));
