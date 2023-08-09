'use client'

import { ButtonOne } from '@/GlobalStyles';
import React from 'react'

import { useApi } from '@/context/api.context'

import tw from "tailwind-styled-components"

const SearchBar = tw.div`
flex-auto w-64 text-xs
`;

const InputSearch = tw.input`
rounded-md text-slate-800 dark:border-none border-2 border-solid  lg:w-2/5 md:w-2/5 w-2/3 px-2 h-8 ml-4 mr-2 pt-2 pb-1
`;

function Search() {
    const {search,setSearch,getCharacterList} = useApi();

    return (
        <SearchBar>
            <InputSearch onChange={e => setSearch(e.target.value)} value={search}
                placeholder="Type the Character you are looking for ..."
            />
            <ButtonOne onClick={getCharacterList}>Search</ButtonOne>
        </SearchBar>
    )
}

export default Search
