import React from 'react'

import { Character } from '@/app/typesdata/typesdata'

import tw from "tailwind-styled-components"

const Card = tw.div`
 min-w-full p-6 bg-white dark:bg-slate-800 dark:text-white  rounded-xl  transition-all 
`;

const ItemText = tw.h3`
   text-base pb-2
`;

const ItemLink = tw.a`
   text-base font-bold pt-4 text-yellow-600 block
`;

function CharacterCard({
  _id,
  name,
  race,
  gender,
  wikiUrl,
  birth,
  death,
}: Character) {
  return (
    <Card>
        <ItemText><strong>Name:</strong> {name}</ItemText>
        <ItemText><strong>Race:</strong> {race}</ItemText>
        <ItemText>Gender:<strong></strong> {gender}</ItemText>
        <ItemText><strong></strong>Birth: {birth}</ItemText>
        <ItemText><strong></strong>Death: {death}</ItemText>
        <ItemLink href={wikiUrl}>More details</ItemLink>
    </Card>
  )
}

export default CharacterCard
