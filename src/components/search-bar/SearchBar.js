import React from 'react';

import youtube from '../../api/youtube';
import { connect } from 'react-redux';
import { changeSearchWord, addSearchHistory, changeVideoList } from '../../actions'

class SearchBar extends React.Component {
  render(){
    return(
      <div className='search-bar ui segment'>
        <form
          className='ui form'
          onSubmit={(event) => {
            // do not make it empty
            event.preventDefault();

            // change the videolist using api request
            youtube.get('/search', {
              params: {
                part: 'snippet',
                q: this.props.searchWord,
              }
            }).then((response) => {
              this.props.changeVideoList(response.data.items);
              // add word to the search word history
              this.props.addSearchHistory(this.props.searchWord);
            });
          }}>
          <div className='field'>
            <label htmlFor="search-input">Search your video here</label>
            <input
              type="text"
              id="search-input"
              value={this.props.searchWord}
              onChange={(event) => {
                let userText = event.target.value;

                // change the search word
                this.props.changeSearchWord(userText);
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    searchWord: state.searchWord,
  }
};

export default connect(mapStateToProp, {
  changeSearchWord,
  addSearchHistory,
  changeVideoList
})(SearchBar);