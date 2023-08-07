

import React, { useState, useEffect } from 'react'

import axios from "axios";

import { Character } from "../../@types/types"

import CharacterCard from "../CharacterCard/index"

import tw from "tailwind-styled-components"

const List = tw.div`
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full container gap-2 mt-12 
`;

function CharacterList() {

    const [characters, setCharacters] = useState([] as Array<Character>)

    const getCharacters = async () => {
        const url = "https://the-one-api.dev/v2/character";
        axios.get(url, {
            headers: {
                'Authorization': `Bearer OLO_ZclC5CI6uWfHBuua`
            }
        }).then(res => {
            setCharacters(res.data.docs)

        }).catch(err => {
            console.log(err)
        })
    }


    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <List>
            {characters ? characters.map((character: Character, index) => (
                <CharacterCard key={index} {...character} />

            )) : (
                <p>Não encontrados</p>
            )}
        </List>
    )
}

export default CharacterList
