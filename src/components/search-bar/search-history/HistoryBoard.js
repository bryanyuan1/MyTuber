import React from 'react';
import HistoryItem from './HistoryItem';

export default class HistoryBoard extends React.Component{
    state = {
        searchTexts: ["asdf","jg"],
    };

    onItemDelete = (searchText) => {
        let newTexts = this.state.searchTexts;
        for(var i = 0; i < this.state.searchTexts.length; i++) {
            if(this.state.searchTexts[i] === searchText) {
                break;
            }
        }
        newTexts.splice(i, 1);
        this.setState({searchTexts: newTexts});
    };

    // call the search function of the App.js
    // put the onSearchSubmit inside of the props
    onItemSearch = (searchText) => {
        this.props.onSearchSubmit(searchText);
    };

    render() {
        const HistoryItems = this.state.searchTexts.map((element) => {
            return(
                <HistoryItem searchText={element}
                             key={element}
                             onItemSearch={this.onItemSearch}
                             onItemDelete={this.onItemDelete}/>
            )
        });
        return(
            <div className="ui segments"
                 style={{
                     overflow: "auto",
                     display: this.state.searchTexts.length === 0 ? "none" : "inline-block",
                     marginTop: '0',
                     width: '35%',
                     marginLeft: '5%',
                 }}>
                {HistoryItems}
            </div>
        )
    }
}