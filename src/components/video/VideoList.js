import React from 'react';
import { selectVideo } from '../../actions';
import { connect } from 'react-redux';

class VideoList extends React.Component {
  renderList = () => {
    return (
      this.props.videoList.map((video) => {
        return (
          <button 
            className='ui black basic button'
            key={video}
            onClick={() => {
              this.props.selectVideo(video);
            }}
            style={{width: '100%'}}>
            <h5>{video.snippet.title}</h5>
          </button>
        );
      })
    )
  };

  render() {
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
        {this.renderList()}
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    videoList: state.videoList,
  }
};

export default connect(mapStateToProps, { selectVideo })(VideoList);