'use client'

import { Button } from '@/GlobalStyles';
import React from 'react'

import { useApi } from '@/context/api.context'

import tw from "tailwind-styled-components"

const SearchBar = tw.div`
flex-auto w-64 text-xs
`;

const InputSearch = tw.input`
rounded-md border-none text-slate-800 outline-none h-8 lg:w-2/5 md:w-2/5 w-full px-2 mx-4 mt-1 
`;

function Search() {
    const {search,setSearch,getCharacterList} = useApi();

    return (
        <SearchBar>
            <InputSearch onChange={e => setSearch(e.target.value)} value={search}
                placeholder="Type the Character you are looking for ..."
            />
            <Button onClick={getCharacterList}>Search</Button>
        </SearchBar>
    )
}

export default Search
