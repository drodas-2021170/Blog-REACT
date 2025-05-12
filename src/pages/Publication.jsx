import React from 'react'
import { PublicationContent } from '../components/PublicationContent'
import { PublicationProvider } from '../context/PublicationContext'


export const Publication = () => {


  return (
    <PublicationProvider>
      <PublicationContent/>
    </PublicationProvider>
  )
}
