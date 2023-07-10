import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
  return (
    <label className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Type to search..."
        onClick={(event) => event.stopPropagation()}
      />
    </label>
  );
};

export default Search;


// import React from 'react'
// import {MdSearch} from 'react-icons/md';

// const Search = ({handleSearchNote}) => {
//     return (<div className="search">
//         <MdSearch className="search-icons" size='1.3em' />
//         <input onChange={(event)=> handleSearchNote(event.target.value)
//         } 
//         type="text"
//         placeholder="type to search..." 
//         />
//     </div>
//     );
// }

// export default Search;
