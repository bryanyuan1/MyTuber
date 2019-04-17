import React from 'react';
import SearchBar from './search-bar/SearchBar';
import VideoList from './video/VideoList';
import VideoDetail from './video/VideoDetail';
import AdvancedSettings from './search-bar/advanced-search-settings/AdvancedSettings';
import HistoryBoard from './search-bar/search-history/HistoryBoard';
import youtube from '../api/youtube';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            currentVideo: null,

            channelType: 'any', // any, show
            videoDefinition: 'any', //any high standard
            videoDuration: 'any', //any long medium short
        };

        this.videoRef = React.createRef();
        this.historyRef = React.createRef();
    }

    onSelectorChange = (detailType, newVal) => {
        if(detailType === "channelType"){
            this.setState({channelType: newVal});
        } else if(detailType === "videoDefinition"){
            this.setState({videoDefinition: newVal});
        } else if(detailType === "videoDuration"){
            this.setState({videoDuration: newVal});
        }
    };

    onSearchSubmit = (userText) => {
        youtube.get('/search', {
            params: {
                part: 'snippet',
                q: userText,
                //channelType: this.advancedRef.current.state.channelType,
                //videoDefinition: this.advancedRef.current.state.videoDefinition,
                //videoDuration: this.advancedRef.current.state.videoDuration,
            }
        }).then((response) => {
            console.log(response);
            this.setState({videos: response.data.items})
        });

        // concatenate the list
        let newHistory = [userText, ...this.historyRef.current.state.searchTexts];
        this.historyRef.current.setState({searchTexts: newHistory});
    };

    onItemClick = (video) => {
        this.setState({currentVideo: video});
        this.videoRef.current.setState({video: video});
        console.log(video);
    };

    render(){
        return(
            <div style={{width: '90%', marginLeft: '5%', marginTop: '40px'}}>
                <div style={{display: 'flex', alignItems: 'stretch', width: '100%'}}>
                    <div style={{margin: '0', width: '60%', display: 'inline-block'}}>
                        <SearchBar onSearchSubmit={this.onSearchSubmit} />
                        <AdvancedSettings onSelectorChange={this.onSelectorChange}/>
                    </div>

                    <HistoryBoard onSearchSubmit={this.onSearchSubmit}
                                  ref={this.historyRef}
                                  style={{
                                      display: 'inline-block',
                                  }}
                    />
                </div>


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