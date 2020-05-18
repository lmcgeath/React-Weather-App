import  React, { useState } from 'react';

const Search = (props) => {
   const [searchValue, setSearchValue] = useState('');
   const handleSubmit = event => {
      event.preventDefault();
      props.onSearch(props.zipCode.value);
      event.currentTarget.reset();
    }
// console.log(searchValue)
    //Sets the searchText state to the text the user types into the search box
    const onSearchChange = (e) => {
      setSearchValue(e.target.value);
    }

return(
   <form onSubmit={handleSubmit}>
      <input type='search' onChange={onSearchChange} name='search' value={searchValue} />
      <input type='submit' value='Search' />
   </form>
);
}

export default Search;