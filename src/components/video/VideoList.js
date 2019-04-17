import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    let key = 0;

    const videoList = props.videos.map((video) => {
        return (
            <VideoItem key={++key}
                       video={video}
                       onItemClick={(video) => {
                           props.onItemClick(video);
                       }}/>
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

export default VideoList;