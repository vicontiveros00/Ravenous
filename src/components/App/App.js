import './App.css';
import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import LoadingCircle from '../LoadingCircle/LoadingCircle';
import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      isLoading: false
    }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    this.setState({
      isLoading: true
    })
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    Yelp.searchYelp(term, location, sortBy).then((business) => {
      this.setState({
        businesses: business,
        isLoading: false
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        {this.state.isLoading ? <LoadingCircle /> : <BusinessList businesses={this.state.businesses} />}
        <p className="vic">github/vicontiveros00</p>
      </div>
    );
  }
}

export default App;
