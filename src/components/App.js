import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'


class App extends React.Component {
  state = { images: [] }

  // async onSearchSubmit(term) { //this function, we will pass it in as a prop and call it inside the child 
  onSearchSubmit = async (term) => { // we use arrow function here now so we can aboid this. keyword issues 
    const response = await unsplash
      .get('/search/photos', {
        params: { query: term }
      });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
      // we're calling onSearchSubmit when on the search bar, but what happnes will happen inside SearchBar component 
      // we're passing in the function and we'll check how it works on the child componenet, SearchBar
    )
  }
};

export default App;