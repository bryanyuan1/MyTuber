import React from 'react';
import { changeChannelType } from '../../../actions'
import { connect } from 'react-redux';

class ChannelSelector extends React.Component{
  render(){
    return(
      <div className="ui form" style={{display: "inline-block", margin: "10px"}}>
        <div className="grouped fields">
          <label>Channel</label>
          <div className="field">
            <div className="ui slider checkbox">
              <input 
                type="radio" name="channel" value="any"
                checked={this.props.channelType === 'any'}
                onChange={(event) => {
                    this.props.changeChannelType(event.target.value);
                }}/>
              <label>Any</label>
            </div>
          </div>
          <div className="field">
            <div className="ui slider checkbox">
              <input 
                type="radio" name="channel" value="show"
                checked={this.props.channelType === 'show'}
                onChange={(event) => {
                    this.props.changeChannelType(event.target.value);
                }}/>
              <label>Show</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    channelType: state.channelType,
  };
}

export default connect(mapStateToProps, { changeChannelType })(ChannelSelector);