import React, {useState} from 'react';

function SearchBar({sortBy, onChangeSort, searchPlant, onChangeSearch}){


    function handleSortChange(event) {
        onChangeSort(event.target.value);
      }
    
      function handleSearchChange(e) {
        onChangeSearch(e.target.value)
      }

    return (
        <div style={{"font-size":"20px", "color":"#005f69"}}>
          <strong>Search Plants:</strong>
            <br />
            <input
                type="text"
                value={searchPlant}
                onChange={handleSearchChange}
                placeholder="Search by name"
                style={{ padding: "5px", margin: "10px 0", width: "200px" }}
            />
            <br />
        <strong>Sort by:</strong>
        <br></br>
        <label>
          <input
            type="radio"
            value="All"
            name="sort"
            checked={sortBy === "All"}
            onChange={handleSortChange}
          />
          All
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            value="Size"
            name="sort"
            checked={sortBy === "Size"}
            onChange={handleSortChange}
          />
          Size (Small to Large)
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            value="Pet Friendly"
            name="sort"
            checked={sortBy === "Pet Friendly"}
            onChange={handleSortChange}
          />
          Pet Friendly
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            value="Kid Friendly"
            name="sort"
            checked={sortBy === "Kid Friendly"}
            onChange={handleSortChange}
          />
          Kid Friendly
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            value="Kid and Pet Friendly"
            name="sort"
            checked={sortBy === "Kid and Pet Friendly"}
            onChange={handleSortChange}
          />
          Kid and Pet Friendly
        </label>
        <br></br>
        <br></br>
      </div>
    )
}

export default SearchBar;