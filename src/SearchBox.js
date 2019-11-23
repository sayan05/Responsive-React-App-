import React from 'react';
import 'tachyons'

const SearchBox=({Searchfield, searchChange})=>{
return(
<div className='pa3 tc'>
  <input className='tc pa3 ba b--green bg-lightest-blue' type='search' placeholder='search'
  onChange={searchChange}
  ></input>
</div>
);
}
export default SearchBox;