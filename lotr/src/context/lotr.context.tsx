"use client";

import {Themes, ThemeState, Character} from "../app/@types/types"

import { createContext, useContext, useState } from "react";

import axios from "axios";

const MainContext = createContext<ThemeState | null>(null);





export const MainContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [theme, setTheme] = useState<Themes>("dark");
    return (
        <MainContext.Provider value={{ theme, setTheme }}>
            {children}
        </MainContext.Provider>
    )
};

export const useMainContext = () => useContext(MainContext);



export function useTheme() {
    const context = useContext(MainContext)
    if (context === null) {
      throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
  }