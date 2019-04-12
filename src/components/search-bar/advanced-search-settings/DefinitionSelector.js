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
            <div>
                <input type="radio" name="definition" value="any"
                       checked={this.state.selected === 'any'}
                       onChange={this.onRadioChange}/>Any<br/>

                <input type="radio" name="definition" value="high"
                       checked={this.state.selected === 'high'}
                       onChange={this.onRadioChange}/>High

                <input type="radio" name="definition" value="standard"
                       checked={this.state.selected === 'standard'}
                       onChange={this.onRadioChange}/>Standard
            </div>
        )
    }
}