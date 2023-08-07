'use client'

import { useEffect } from 'react'

import { Themes } from "./@types/types"

import { useMainContext, useTheme } from '@/context/lotr.context'

import Image from 'next/image'

import CharacterList from './Components/CharacterList'


import tw from "tailwind-styled-components"

const Button = tw.button`
    bg-yellow-600 text-white  dark:hover:bg-yellow-700  px-4 py-2 rounded-xl text-base
`;

export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'light') document.body.classList.remove('dark')
    else document.body.classList.add('dark')
  }, [theme])

  return (
    <>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</Button>
      <CharacterList />
    </>
  )
}
