import { createContext, useEffect, useState } from "react"
import { usePublication } from "../shared/hooks/usePublication"

export const PublicationContext = createContext()

export const PublicationProvider = ({children}) => {
    const {publications, isFetching,getPublications} = usePublication()
    const [count, setCount] = useState(0)

    useEffect(()=>{
        getPublications()   
    },[])
    return (
        <PublicationContext.Provider value={{publications,isFetching}}>
            {children}
        </PublicationContext.Provider>
    )
}
