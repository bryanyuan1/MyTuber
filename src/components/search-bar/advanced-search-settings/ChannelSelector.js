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
            <div className="ui form" style={{display: "inline-block", margin: "10px"}}>
                <div className="grouped fields">
                    <label>Channel</label>
                    <div className="field">
                        <div className="ui slider checkbox">
                            <input type="radio" name="channel" value="any"
                                   checked={this.state.selected === 'any'}
                                   onChange={this.onRadioChange}/>
                            <label>Any</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui slider checkbox">
                            <input type="radio" name="channel" value="show"
                                   checked={this.state.selected === 'show'}
                                   onChange={this.onRadioChange}/>
                            <label>Show</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}