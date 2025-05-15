import React from 'react'
import { Comments } from '../components/comments/Comments'
import { PublicationProvider } from '../context/PublicationContext'



export const CommentsPage = () => {
    return (
        <>  
    <PublicationProvider>

                <Comments/>
    </PublicationProvider>

        </>
    )
}
