import { useContext } from "react"
import toast from "react-hot-toast"
import { PublicationContext } from "../../context/PublicationContext"

export const useContextPubication = () => {
    const context = useContext(PublicationContext)
    if(!context){
        toast.error('Error al obtener información')
        return console.error('No existe el provedor del contexto')
    }
    console.log(context)
    return context
}