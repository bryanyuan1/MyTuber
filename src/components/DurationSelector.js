import React from "react";

export default class DurationSelector extends React.Component{
    state = {
        selected: 'any',
    };

    onRadioChange = (event) => {
        this.setState({selected: event.target.value});
        this.props.onSelectorChange('videoDuration', event.target.value);
    };

    render(){
        return(
            <div>
                <input type="radio" name="duration" value="any"
                       checked={this.state.selected === 'any'}
                       onChange={this.onRadioChange}/>Any<br/>

                <input type="radio" name="duration" value="short"
                       checked={this.state.selected === 'short'}
                       onChange={this.onRadioChange}/>Short

                <input type="radio" name="duration" value="medium"
                       checked={this.state.selected === 'medium'}
                       onChange={this.onRadioChange}/>Medium

                <input type="radio" name="duration" value="long"
                       checked={this.state.selected === 'long'}
                       onChange={this.onRadioChange}/>Long
            </div>
        )
    }
}