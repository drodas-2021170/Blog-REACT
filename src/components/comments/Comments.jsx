import { useParams } from "react-router-dom"
import { useCommentsByPublication } from "../../shared/hooks/useCommentsByPublication"
import {  useContext, useEffect, useState } from "react"
import { FadeLoader } from "react-spinners"
import { CardPublication } from "../publications/CardPublication"
import { Button } from "@chakra-ui/react"
import { InitialFocus } from "../Modal/Modal"
import { useComment } from "../../shared/hooks/useComment"


export const Comments = () => {
    const {comments, isFetching, getCommentsByPublication} = useCommentsByPublication()
    const {addComment,commentCount,setCommentCount} = useComment() 

    
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
            getCommentsByPublication(id)
    },[])

    
    if( isFetching){
            return(
                <FadeLoader color='green'/>
            )
        }

    const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
    };


    return (
        <div>
            <Button colorScheme='teal' variant='solid' onClick={handleOpenModal}>Acciones</Button>
            {isModalOpen && <InitialFocus />} 
            {comments.map((comme)=>(<CardPublication key={comme._id} title={comme.author} description={comme.content} creationDate={comme.creationDate}/>))}
    </div>
    )
}
