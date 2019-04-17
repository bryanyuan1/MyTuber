import React from 'react';
import HistoryItem from './HistoryItem';

export default class HistoryBoard extends React.Component{
    state = {
        searchTexts: ["asdf","jg"],
    };

    key = 0;

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
                             key={++this.key}
                             onItemSearch={this.onItemSearch}
                             onItemDelete={this.onItemDelete}/>
            )
        });
        return(
            <div className="ui segments"
                 style={{
                     overflow: "auto",
                     marginTop: '0',
                     width: '35%',
                     marginLeft: '5%',
                     maxHeight: "170px",
                     padding: "14px"
                 }}>
                <h4>History</h4>
                {HistoryItems}
            </div>
        )
    }
}