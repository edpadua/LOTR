

import React from 'react'

import { Character } from "../../@types/types"

import CharacterCard from "../CharacterCard/index"

import { useApi } from '@/context/api.context'

import tw from "tailwind-styled-components"

const List = tw.div`
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full container gap-2 mt-12 
`;

function CharacterList() {

    const {characterList,getCharacterList} = useApi();

    return (
        <List>
            {   
                characterList ? characterList.map((character: Character, index) => (
                <CharacterCard key={index} {...character} />

            )) : (
                <p>Não encontrados</p>
            )}
        </List>
    )
}

export default CharacterList
