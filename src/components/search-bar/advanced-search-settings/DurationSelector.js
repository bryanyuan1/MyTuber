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
            <div className="ui form" style={{display: "inline-block", margin: "10px"}}>
                <div className="grouped fields">
                    <label>Duration</label>
                    <div className="field">
                        <div className="ui slider checkbox">
                            <input type="radio" name="duration" value="any"
                                   checked={this.state.selected === 'any'}
                                   onChange={this.onRadioChange}/>
                            <label>Any</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui slider checkbox">
                            <input type="radio" name="duration" value="short"
                                   checked={this.state.selected === 'short'}
                                   onChange={this.onRadioChange}/>
                            <label>Short</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui checkbox slider">
                            <input type="radio" name="duration" value="long"
                                   checked={this.state.selected === 'long'}
                                   onChange={this.onRadioChange}/>
                            <label>Long</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}