import { useState } from 'react'
import { getPublicationsRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const usePublication = () => {
    const [publications, setPublications] = useState(null)

    const getPublications = async()=>{
        const response = await getPublicationsRequest()
        if(response.error){
            return toast.error(
                response?.err?.response?.data?.message ||
                'Error al obtener las publicaciones, por favor intente más tarde'
            )
        }
        setPublications(response.data.publications)
    }
    return {
        publications,
        isFetching: !publications,
        getPublications,
    }
}
