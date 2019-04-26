import React from 'react';
import SearchBar from './search-bar/SearchBar';
import VideoList from './video/VideoList';
import VideoDetail from './video/VideoDetail';
import AdvancedSettings from './search-bar/advanced-search-settings/AdvancedSettings';
import HistoryBoard from './search-bar/search-history/HistoryBoard';

class App extends React.Component{
  render(){
    return(
      <div style={{width: '90%', marginLeft: '5%', marginTop: '40px'}}>
        <div style={{display: 'flex', alignItems: 'stretch', width: '100%'}}>
          <div style={{margin: '0', width: '60%', display: 'inline-block'}}>
            <SearchBar/>
            <AdvancedSettings/>
          </div>

          <HistoryBoard style={{ display: 'inline-block' }}/>
        </div>


        <div className='ui container' style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}>
          <VideoDetail/>
          <VideoList/>
        </div>
      </div>
    )
  }
}

export default App;