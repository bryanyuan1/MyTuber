import React from 'react';

export default class ChannelSelector extends React.Component{
    state = {
        selected: 'any',
    };

    onRadioChange = (event) => {
        this.setState({selected: event.target.value});
        this.props.onSelectorChange('channelType', event.target.value);
    };

    render(){
        return(
            <div>
                <input type="radio" name="channel" value="any"
                       checked={this.state.selected === 'any'}
                       onChange={this.onRadioChange}/>Any<br/>

                <input type="radio" name="channel" value="show"
                       checked={this.state.selected === 'show'}
                       onChange={this.onRadioChange}/>Show
            </div>
        )
    }
}