import React from 'react';

export default class VideoDetail extends React.Component{
    state = {
        video: null,
    };

    render(){
        const videoSource = this.state.video ? this.state.video.id.videoId : '';
        console.log(this.state.video);
        return(
            <div className='ui segment' style={{width: '55%'}}>
                <div className='ui embed'>
                    <iframe src={`https://www.youtube.com/embed/${videoSource}`} frameBorder="0"/>
                </div>
                <h4>{this.state.video ? this.state.video.snippet.title
                    : 'Title of the video'}</h4>
                <p>{this.state.video ? this.state.video.snippet.description
                    : 'Description of the video'}</p>
            </div>
        )
    }
}
