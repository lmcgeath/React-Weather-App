import  React, { Component } from 'react';

class Search extends Component {
   state ={
      searchText: ''
   }
//Set the state to the input entered by the user in the search box
   onSearchChange = e => {
      this.setState ({searchText: e.target.value});
   }
//Sends the user input as the query prop to fetch new data
   handleSubmit = e => {
      e.preventDefault();
      this.props.onSearch(this.query.value);
      e.currentTarget.reset();
    }
//Renders a search for and passes the user input
render() {
   return (
      <form className='search-form' onSubmit={this.handleSubmit}>
         <input type='search' onChange={this.onSearchChange} name='search' ref={(input) => this.query = input} placeholder='Enter zip code' />
         <input type='submit' value='Search' />
      </form>
      );
   }
}

export default Search;