import React from 'react';

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
                            value={this.state.userText}
                            onChange={(event) => {
                                this.setState({userText: event.target.value});
                            }}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;