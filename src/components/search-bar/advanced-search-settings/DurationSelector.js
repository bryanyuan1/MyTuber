import React from "react";
import { connect } from 'react-redux';
import { changeVideoDuration } from '../../../actions';

class DurationSelector extends React.Component{
  render(){
    return(
      <div className="ui form" style={{display: "inline-block", margin: "10px"}}>
        <div className="grouped fields">
          <label>Duration</label>
          <div className="field">
            <div className="ui slider checkbox">
              <input 
                type="radio" name="duration" value="any"
                checked={this.props.videoDuration === 'any'}
                onChange={(event) => {
                    this.props.changeVideoDuration(event.target.value);
                }}/>
              <label>Any</label>
            </div>
          </div>
          <div className="field">
            <div className="ui slider checkbox">
              <input 
                type="radio" name="duration" value="short"
                checked={this.props.videoDuration === 'short'}
                onChange={(event) => {
                    this.props.changeVideoDuration(event.target.value);
                }}/>
              <label>Short</label>
            </div>
          </div>
          <div className="field">
            <div className="ui checkbox slider">
              <input 
                type="radio" name="duration" value="long"
                checked={this.props.videoDuration === 'long'}
                onChange={(event) => {
                  this.props.changeVideoDuration(event.target.value);
                }}/>
              <label>Long</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    videoDuration: state.videoDuration,
  };
};

export default connect(mapStateToProps, {
  changeVideoDuration
})(DurationSelector);