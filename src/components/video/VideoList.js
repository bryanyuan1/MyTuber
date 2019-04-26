import React from 'react';
import { selectVideo } from '../../actions';
import { connect } from 'react-redux';

const VideoList = (props) => {
  let key = 0;

  const videoList = this.props.videoList.map((video) => {
    return (
      <button 
        className='ui black basic button'
        key={++key}
        onClick={() => {
          this.props.selectVideo(video);
        }}
        style={{width: '100%'}}>
        <h5>{this.props.selectVideo.snippet.title}</h5>
      </button>
    );
  });

  return (
    <div
      className='ui segment'
      style={{
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '0',
        marginBottom: '14px',
      }}>
      <h4>Most Popular Videos</h4>
      {videoList}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    videoList: state.VideoList,
  }
};

export default connect(mapStateToProps, { selectVideo })(VideoList);