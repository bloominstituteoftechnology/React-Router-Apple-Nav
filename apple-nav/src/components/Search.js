import React from 'react'

function Search() {
    return (
        <div className='search-bar'>
            <input 
                className='search-field'
                type="text"
                placeholder='Search apple.com'
            />
        </div>
    );
}

export default Search;