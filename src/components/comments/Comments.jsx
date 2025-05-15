import { useNavigate, useParams } from "react-router-dom";
import { useCommentsByPublication } from "../../shared/hooks/useCommentsByPublication";
import { useEffect, useRef, useState } from "react";
import { FadeLoader } from "react-spinners";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { InitialFocus } from "../Modal/Modal";
import { useComment } from "../../shared/hooks/useComment";
import { CardComment } from "./CardComment";
import { usePublicationById } from "../../shared/hooks/usePublicationById";
import { Publications } from "../publications/Publications";
import { Navbar } from "./Navbar/Navbar";
import { ArrowLeftIcon } from "@chakra-ui/icons";

export const Comments = () => {
    const { comments, isFetching, getCommentsByPublication,setComments } = useCommentsByPublication();
    const { addComment, commentCount, setCommentCount } = useComment();
    const { publication, getPublicationBy } = usePublicationById();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams();

    const myRef = useRef(1)

    let navigate = useNavigate()
    
    useEffect(() => {
        getPublicationBy(id);  
        getCommentsByPublication(id); 
    }, []);  


    useEffect(() => {
        if (myRef.current >= 0) {  
            getCommentsByPublication(id);
        }
    }, [myRef.current, id]);

    console.log(myRef.current)

    if (isFetching) {
        return <FadeLoader color="green" />;
    }



    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
        setCommentCount((prev) => prev + 1);
    };

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" bg="#FAF3E0"  p={4} >
                <Button onClick={() => navigate('/')}  bg="#FF6F61" color="white" _hover={{ bg: "#FF3D00" }} ml={3}>
                    <ArrowLeftIcon />
                </Button>
                <Button bg="#FF6F61" color="white" _hover={{ bg: "#FF3D00" }} onClick={handleOpenModal}>
                    Acciones
                </Button>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
                {publication && (
                    <Heading mb={6} textAlign="center">
                        Comentarios del proyecto: {publication.title}
                    </Heading>
                )}

                {isModalOpen && <InitialFocus myRef={myRef} setIsOpenModal={setIsModalOpen} />}

                <Box display="grid"  gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"  gap={4}  justifyItems="center" width="100%" >
                    {comments.length === 0 ? (
                        <Flex  flexDirection="column"justifyContent="center"alignItems="center">


                        <Heading textAlign="center" ml={'1000'}>
                            No hay comentarios para esta publicación
                        </Heading>
                        </Flex>
                    ) : (
                        comments.map((comme) => (
                            <CardComment key={comme._id} author={comme.author} content={comme.content} creationDate={comme.creationDate}/>
                        ))
                    )}
                </Box>
            </Box>
        </Box>
    )
};
