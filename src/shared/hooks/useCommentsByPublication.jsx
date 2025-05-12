import { useState } from "react"
import { getCommentsByPublicationIdRequest } from "../../services/api"
import toast from "react-hot-toast"

export const useCommentsByPublication = () => {
    const [comments, setComments] = useState(null)

    const getCommentsByPublication = async (id) => {
        const response = await getCommentsByPublicationIdRequest(id)
        if(response.error){
            return toast.error(
                response?.err?.response?.message ||
                'Error al obtener los comentarios, por favor intente más tarde'
            )
        }
        setComments(response.data.comments)
    }
    return {
        comments,
        isFetching: !comments,
        getCommentsByPublication,
    }
}
