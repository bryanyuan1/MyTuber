import React from 'react';
import { connect } from 'react-redux';

class VideoDetail extends React.Component{
  render(){
    const videoSource = this.props.selectedVideo ? this.props.selectedVideo.id.videoId : '';
    return(
      <div className='ui segment' style={{width: '55%'}}>
        <div className='ui embed'>
          <iframe src={`https://www.youtube.com/embed/${videoSource}`} frameBorder="0"/>
        </div>
          <h4>{this.props.selectedVideo ? this.props.selectedVideo.snippet.title
              : 'Title of the video'}</h4>
          <p>{this.props.selectedVideo ? this.props.selectedVideo.snippet.description
              : 'Description of the video'}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
  }
}

export default connect(mapStateToProps)(VideoDetail);