"use client";

import {Character,ApiContextType} from "../app/@types/types"

import { createContext, useContext, useState ,useEffect } from "react";

import axios from "axios";

const ApiContext = createContext<ApiContextType | null>(null);


export const ApiContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [characterList, setCharacterList] = useState<Character[]>([]);

    const getCharacterList = async () => {
        const url = "https://the-one-api.dev/v2/character";
        axios.get(url, {
            headers: {
                'Authorization': `Bearer OLO_ZclC5CI6uWfHBuua`
            }
        }).then(res => {
            setCharacterList(res.data.docs)
            console.log("res.data.docs",res.data.docs)

        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        
        getCharacterList()
    }, [])

    return (
        <ApiContext.Provider value={{ characterList, setCharacterList, getCharacterList }}>
            {children}
        </ApiContext.Provider>

        
    )
};

export const useApiContext = () => useContext(ApiContext);


export function useApi() {
    const context = useContext(ApiContext)
    if (context === null) {
      throw new Error('useApi must be used within a ApiContextProvider')
    }
    return context
  }