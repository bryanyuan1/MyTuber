import React from 'react';

export default class DefinitionSelector extends React.Component{
    state = {
        selected: 'any',
    };

    onRadioChange = (event) => {
        this.setState({selected: event.target.value});
        this.props.onSelectorChange('videoDefinition', event.target.value);
    };

    render(){
        return(
            <div className="ui form" style={{display: "inline-block", margin: "10px"}}>
                <div className="grouped fields">
                    <label>Definition</label>
                    <div className="field">
                        <div className="ui slider checkbox">
                            <input type="radio" name="definition" value="any"
                                   checked={this.state.selected === 'any'}
                                   onChange={this.onRadioChange}/>
                            <label>Any</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui slider checkbox">
                            <input type="radio" name="definition" value="high"
                                   checked={this.state.selected === 'high'}
                                   onChange={this.onRadioChange}/>
                            <label>High</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui slider checkbox">
                            <input type="radio" name="definition" value="standard"
                                   checked={this.state.selected === 'standard'}
                                   onChange={this.onRadioChange}/>
                            <label>Standard</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}