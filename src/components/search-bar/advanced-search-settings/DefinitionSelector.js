import React from 'react';
import { connect } from 'react-redux';
import { changeVideoDefinition } from '../../../actions';

class DefinitionSelector extends React.Component{
  render(){
    return(
      <div className="ui form" style={{display: "inline-block", margin: "10px"}}>
        <div className="grouped fields">
          <label>Definition</label>
          <div className="field">
            <div className="ui slider checkbox">
              <input 
                type="radio" name="definition" value="any"
                checked={this.props.videoDefinition === 'any'}
                onChange={(event) => {
                    this.props.changeVideoDefinition(event.target.value);
                }}/>
              <label>Any</label>
            </div>
          </div>
          <div className="field">
            <div className="ui slider checkbox">
                <input 
                  type="radio" name="definition" value="high"
                  checked={this.props.videoDefinition === 'high'}
                  onChange={(event) => {
                      this.props.changeVideoDefinition(event.target.value);
                  }}/>
            </div>
          </div>
          <div className="field">
            <div className="ui slider checkbox">
                <input 
                  type="radio" name="definition" value="standard"
                  checked={this.props.videoDefinition === 'standard'}
                  onChange={(event) => {
                      this.props.changeVideoDefinition(event.target.value);
                  }}/>
                <label>Standard</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    videoDefinition: state.videoDefinition,
  }
}

export default connect(mapStateToProps, {
  changeVideoDefinition,
})(DefinitionSelector);