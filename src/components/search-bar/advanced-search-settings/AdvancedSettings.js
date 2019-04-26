import React from 'react';
import ChannelSelector from './ChannelSelector';
import DefinitionSelector from './DefinitionSelector';
import DurationSelector from './DurationSelector';

// we would try to gather the three advanced search
// filters and give it back to the App.js for API
// search
export default class AdvancedSettings extends React.Component{
  state = {
    advancedOpened: false,
  };

  render(){
    return(
      <div className="ui segment">
        <label>Advanced settings:   </label>
        <button className="ui primary button" onClick={() => {
          this.setState({advancedOpened: !this.state.advancedOpened});
        }}>{this.state.advancedOpened ? "collapse" : "expand"}</button>
        <div style={{
            margin: "0",
            width: "100%",
            display: this.state.advancedOpened ? "flex" : "none",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
        }}>
          <ChannelSelector/>
          <DefinitionSelector/>
          <DurationSelector/>
        </div>
      </div>
    );
  }
}