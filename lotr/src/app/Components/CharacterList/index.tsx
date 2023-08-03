

import React, { useState, useEffect } from 'react'

import axios from "axios";

import { Character } from "../../@types/types"


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
      },[])

    return (
        <div>
            {characters ? characters.map((character: Character, index) => (
                <p key={index}>{character.name}</p>

            )) : (
                <p>Não encontrados</p>
            )}
        </div>
    )
}

export default CharacterList
