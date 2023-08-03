'use client'

import { useEffect} from 'react'

import {Themes} from "./@types/types"

import { useMainContext, useTheme } from '@/context/lotr.context'

import Image from 'next/image'
import CharacterList from './Components/CharacterList'

export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'light') document.body.classList.remove('dark')
    else document.body.classList.add('dark')
  }, [theme])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CharacterList/>
      <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>
    </main>
  )
}
