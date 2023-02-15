import React from 'react';

function SearchBar({searchPlants, onChangeSearch}){

    function handleChange(e){
        e.preventDefault();
        onChangeSearch(e.target.value)
    
    }


    return (
        <div className="searchbar">
            <input
            type="text"
            id="search"
            placeholder="Type a name to search..."
            onChange={handleChange}
            value={searchPlants}/>
        </div>
    )
}

export default SearchBar;