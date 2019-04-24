import React from 'react';

import youtube from '../../../api/youtube';
import { addSearchHistory, deleteSearchHistory, changeVideoList } from '../../../actions';
import { connect } from 'react-redux';

class HistoryBoard extends React.Component{
  key = 0;
  render() {
    const HistoryItems = this.props.searchHistory.map((element) => {
      return(
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }} className="ui segment">
          <div style={{display: "inline-block"}}>{element}</div>
          <div style={{display: "inline-block"}}>

            <button className="ui primary button"
                    onClick={() => {
                      youtube.get('/search', {
                        params: {
                          part: 'snippet',
                          q: element,
                        }
                      }).then((response) => {
                        this.props.changeVideoList(response.data.items);
                        this.props.addSearchHistory(element);
                      });
                    }}>Search</button>

            <button className="ui button"
                    onClick={() => {
                      this.props.deleteSearchHistory(element);
                    }
            }>Delete</button>
          </div>
        </div>
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

const mapStateToProps = (state) => {
  return {
    searchHistory: state.searchHistory,
  }
};

export default connect(mapStateToProps, {
  addSearchHistory,
  deleteSearchHistory,
  changeVideoList,
})(History);