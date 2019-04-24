import React from 'react';

import youtube from '../../api/youtube';
import { connect } from 'react-redux';
import { changeSearchWord } from '../../actions'

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userText: '',
    };
  }

  render(){
    return(
      <div className='search-bar ui segment'>
        <form
          className='ui form'
          onSubmit={(event) => {
            event.preventDefault();
            this.props.onSearchSubmit(this.state.userText);
          }}>
          <div className='field'>
            <label htmlFor="search-input">Search your video here</label>
            <input
              type="text"
              id="search-input"
              value={this.props.searchWord}
              onChange={(event) => {
                // change the videolist using api request
                // change the search word
                this.props.changeSearchWord(event.target.value);

                // change the search word history
                this.props.
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
  
})(SearchBar);