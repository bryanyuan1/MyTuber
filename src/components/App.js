import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            currentVideo: null,
        };

        this.videoRef = React.createRef();
    }

    onSearchSubmit = (userText) => {
        youtube.get('/search', {
            params: {
                q: userText,
            }
        }).then((response) => {
            console.log(response);
            this.setState({videos: response.data.items})
        });
    };

    onItemClick = (video) => {
        this.setState({currentVideo: video});
        this.videoRef.current.setState({video: video});
        console.log(video);
    };

    render(){
        return(
            <div style={{width: '90%', marginLeft: '5%', marginTop: '40px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />

                <h4>{this.state.videos.length} videos found</h4>
                <div className='ui container' style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                }}>
                    <VideoDetail ref={this.videoRef} video={this.state.currentVideo}/>
                    <VideoList videos={this.state.videos} onItemClick={this.onItemClick}/>
                </div>
            </div>
        )
    }
}

export default App;