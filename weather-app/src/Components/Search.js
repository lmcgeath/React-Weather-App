import  React, { Component } from 'react';

class Search extends Component {
   state ={
      searchText: ''
   }

   onSearchChange = e => {
      this.setState ({searchText: e.target.value});
   }
// const Search = (props) => {
   // const [searchValue, setSearchValue] = useState('');
   handleSubmit = e => {
      e.preventDefault();
      this.props.onSearch(this.zipCode.value);
      e.currentTarget.reset();
    }
// console.log(searchValue)
    //Sets the searchText state to the text the user types into the search box
   //  onSearchChange = (e) => {
   //    setSearchValue(e.target.value);
   //    console.log(searchValue)
   //  }
render() {
   return (
      <form className='search-form' onSubmit={this.handleSubmit}>
         <input type='search' onChange={this.onSearchChange} name='search' ref={(input) => this.zipCode = input} />
         <input type='submit' value='Search' />
      </form>
      );
   }
}

export default Search;