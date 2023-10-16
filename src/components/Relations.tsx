import React from 'react'
import UsersList from './util/UsersList'
import LinksCard from './util/LinksCard'
import { RelationsLinks } from './util/data/relations'
type Props = {}

const Relations = () => {
  return (
        <>
            <LinksCard links={RelationsLinks} ></LinksCard>        
            <UsersList type={'relations'} ></UsersList>
        </>
  )
}

export default Relations;