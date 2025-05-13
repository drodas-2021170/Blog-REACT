import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react"
import { useContext, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { useComment } from "../../shared/hooks/useComment"



export const InitialFocus = ({}) => {  
    const { isOpen, onOpen, onClose } = useDisclosure()  
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    
    const {id} = useParams()

    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [publication, setPublication] = useState(id)

    

    const [formValidation, setFormValidation] = useState({
        author:undefined,
        content:undefined,
        publication:undefined
    })
    

    const {addComment} = useComment() 

    const handleSubmit = (e)=>{
        e.preventDefault(),
        setAuthor('')
        setContent('')
        addComment(author,content,publication)
    }

    const handleChangeAuthor = (e)=>{
        const value = e.target.value
        console.log(value)
        setAuthor(value)
    }

    const handleChangeContent = (e)=>{
        const value = e.target.value
        console.log(value)
        setContent(value)
    }


    return (
        <>
        <Button onClick={onOpen}>Crear comentario</Button>
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalBody pb={6}>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel>Author</FormLabel>
                        <Input ref={initialRef} placeholder='Author' value={author} onChange={handleChangeAuthor} />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Content</FormLabel>
                        <Textarea placeholder='Content' value={content} onChange={handleChangeContent} />
                    </FormControl>
            <ModalFooter>
                <Button type='submit'onClick={onClose} colorScheme='blue' mr={3}>
                Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </form>
            </ModalBody>
            </ModalContent>
        </Modal >
        </>
    )
}
