import { useState } from "react"
import { createCommentRequest } from "../../services/api"
import toast from "react-hot-toast"

export const useComment = () => {
    const [commentCount, setCommentCount] = useState(0)
    const addComment = async(author,content,publication)=>{
        const comment = {
            author,
            content,
            publication
        }
        const response = await createCommentRequest(comment)
        if(response.error){
            return toast.error(
                response?.err?.response?.message ||
                'Error al crear un comentario'
            )
        }
        setCommentCount(commentCount + 1)
        return toast.success('Comentario creado con exito')
    }
    return {
        addComment,
        commentCount,
        setCommentCount
    }
}
