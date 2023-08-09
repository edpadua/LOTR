'use client'

import { useEffect } from 'react'

import { Themes } from "./@types/types"

import { useMainContext, useTheme } from '@/context/lotr.context'

import Image from 'next/image'

import CharacterList from './Components/CharacterList'


import { ButtonOne } from '@/GlobalStyles'



export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'light') document.body.classList.remove('dark')
    else document.body.classList.add('dark')
  }, [theme])

  return (
    <>
      <ButtonOne onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</ButtonOne>
      <CharacterList />
    </>
  )
}
