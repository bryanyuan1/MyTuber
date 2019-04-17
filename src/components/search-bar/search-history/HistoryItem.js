import React from 'react';

export default class HistoryItem extends React.Component{
    render() {
        return(
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }} className="ui segment">
                <div style={{display: "inline-block"}}>{this.props.searchText}</div>
                <div style={{display: "inline-block"}}>
                    <button className="ui primary button"
                            onClick={() => {this.props.onItemSearch(this.props.searchText);}
                    }>Search</button>

                    <button className="ui button"
                            onClick={() => {this.props.onItemDelete(this.props.searchText);}
                    }>Delete</button>
                </div>
            </div>
        );
    }
}