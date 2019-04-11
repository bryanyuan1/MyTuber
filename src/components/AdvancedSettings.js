import React from 'react';
import ChannelSelector from './ChannelSelector';
import DefinitionSelector from './DefinitionSelector';
import DurationSelector from './DurationSelector';

// we would try to gather the three advanced search
// filters and give it back to the App.js for API
// search
export default class AdvancedSettings extends React.Component{
    onSelectorChange = (detailType, newVal) => {
        this.props.onSelectorChange(detailType, newVal);
    };

    render(){
        return(
            <div>
                <ChannelSelector onSelectorChange={this.onSelectorChange}/>
                <DefinitionSelector onSelectorChange={this.onSelectorChange}/>
                <DurationSelector onSelectorChange={this.onSelectorChange}/>
            </div>
        );
    }
}