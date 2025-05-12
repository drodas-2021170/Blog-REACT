import { useParams } from "react-router-dom"
import { useCommentsByPublication } from "../../shared/hooks/useCommentsByPublication"
import { useEffect } from "react"
import { FadeLoader } from "react-spinners"
import { CardPublication } from "../publications/CardPublication"

export const Comments = () => {
    const {comments, isFetching, getCommentsByPublication} = useCommentsByPublication()

    const {id} = useParams()

    useEffect(()=>{
            getCommentsByPublication(id)
            console.log(id)
            console.log('Comments',comments)
    },[])

    if( isFetching){
            return(
                <FadeLoader color='green'/>
            )
        }


    return (
        <div>
            {comments.map((comme)=>(<CardPublication key={comments._id} title={comme.author} description={comme.content} creationDate={comme.creationDate}/>))}
        </div>
    )
}
