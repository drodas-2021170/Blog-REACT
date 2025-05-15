import { useState } from "react"
import { getPublicationById } from "../../services/api"
import toast from "react-hot-toast"

export const usePublicationById= () => {
    const [publication, setPublication] = useState(null)

    const getPublicationBy = async (id) => {
        const response = await getPublicationById(id)
        if(response.error){
            return toast.error(
                response?.err?.response?.message ||
                'Error al obtener los comentarios, por favor intente más tarde'
            )
        }

        setPublication(response.data.publication)
    }
    return {
        publication,
        getPublicationBy
    }
}
