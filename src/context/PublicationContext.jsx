import { createContext, useEffect } from "react"
import { usePublication } from "../shared/hooks/usePublication"

export const PublicationContext = createContext()

export const PublicationProvider = ({children}) => {
    const {publications, isFetching,getPublications} = usePublication()

    useEffect(()=>{
        getPublications()
        console.log('Publications',publications)    
    },[])
    return (
        <PublicationContext.Provider value={{publications,isFetching}}>
            {children}
        </PublicationContext.Provider>
    )
}
