import React from 'react';

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.vaule);
  // }
  // // there are onChange, onSubmit and onClick

  // onInputClick(event) {
  //   console.log("inpult was cicked");
  // }

  onFormSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state.term);

    this.props.onSubmit(this.state.term); // onSearchSubmit(term) from App.js will trigger here because on the 
    // parent class we have <SearchBar onSubmit={this.onSearchSubmit}/> remeber onSumbit in this case can be called anything 
    // when using class based components use this.props.whatever but in functional you can just use pros.whatever
  }

  state = { term: 'search here'}

  //below once the form is submitted it will trigger the onFromSubmit and inside on from submit we'll have the function prop
  // onSearchSubmit(term) from App.js trigger 
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form"> 
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              // onChange={this.onInputChange}
              // alternatively you can pass the whole onInputChage function 
              // but abbiriavted version onChage={e => console.log(event.targe.value)}  <-- e is event, and this is same as onInputChage method
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              onClick={this.onInputClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;