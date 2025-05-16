import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react"
import { useContext, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { useComment } from "../../shared/hooks/useComment"
import { useCommentsByPublication } from "../../shared/hooks/useCommentsByPublication"



export const InitialFocus = ({isOpenModal,setIsOpenModal, myRef}) => {  
    const { isOpen, onOpen, onClose } = useDisclosure()  
    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const {addComment} = useComment() 
    const {id} = useParams()

    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [publication, setPublication] = useState(id)




    const [formValidation, setFormValidation] = useState({
        author:undefined,
        content:undefined,
        publication:undefined
    })
    


    const handleSubmit = (e)=>{
        myRef.current = myRef.current + 1
        console.log('Estoy en modal',myRef.current )
        setIsOpenModal(prev => !prev)
        e.preventDefault(),
        setAuthor('')
        setContent('')
        addComment(author,content,publication)
    }

    const handleChangeAuthor = (e)=>{
        const value = e.target.value
        setFormValidation({...formValidation, author: value.length===0?'Please field this field':value.length>25?'This field can not be overcome 25 characters':''})
        console.log(value)
        setAuthor(value)
    }

    const handleChangeContent = (e)=>{
        const value = e.target.value
        setFormValidation({...formValidation, content: value.length===0?'Please field this field':value.length>200?'This field can not be overcome 200 chracters':''})
        console.log(value)
        setContent(value)
    }

    const isDisabled = formValidation.author === ''&& formValidation.content === ''
    return (
        <>
        <Box position="fixed" top="18px" right="150px" zIndex={1000}>
                <Button onClick={onOpen}  bg="#FF6F61" color="white" _hover={{ bg: "#FF3D00" } } ml={3}>
                    Crear comentario
                </Button>
            </Box>
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Create comentario</ModalHeader>
            <ModalBody pb={6}>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel>Author</FormLabel>
                        <Input ref={initialRef} placeholder='Author' value={author} onChange={handleChangeAuthor} />
                        <span>{formValidation.author}</span>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Content</FormLabel>
                        <Textarea placeholder='Content' value={content} onChange={handleChangeContent} />
                        <span>{formValidation.content}</span>
                    </FormControl>
            <ModalFooter>
                <Button type='submit'onClick={onClose} disabled={!isDisabled}colorScheme='blue' mr={3}>
                Save
                </Button>
                <Button onClick={()=>{onClose(); setAuthor(''), setContent('')}}>Cancel</Button>
            </ModalFooter>
            </form>
            </ModalBody>
            </ModalContent>
        </Modal >
        </>
    )
}
