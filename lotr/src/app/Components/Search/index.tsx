import React from 'react'

import tw from "tailwind-styled-components"

const SearchBar = tw.div`
flex-auto w-64 text-xs
`;

const InputSearch = tw.input`
rounded-md border-none outline-none h-8 lg:w-2/5 md:w-2/5 w-full px-2 mt-1
`;

function Search() {
    return (
        <SearchBar>
            <InputSearch
                placeholder="Type the Character you are looking for ..."
            />
        </SearchBar>
    )
}

export default Search
