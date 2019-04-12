import React from 'react';

export default class VideoItem extends React.Component{
    render(){
        return(
            <button className='ui black basic button'
                    onClick={() => {
                        this.props.onItemClick(this.props.video);
                    }}
                    style={{width: '100%'}}>
                <h5>{this.props.video.snippet.title}</h5>
            </button>
        );
    }
}