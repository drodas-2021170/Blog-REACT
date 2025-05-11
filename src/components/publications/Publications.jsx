import { Flex, Heading, Stack } from "@chakra-ui/react"
import { CardPublication } from "./CardPublication"
import { useContextPubication } from "../../shared/hooks/useContextPublication"

export const Publications = () => {

    const {publications} = useContextPubication()
    return (
        <Flex alignItems='center' justifyContent='center' flexDirection='column'>
            <Stack  spacing={50} padding={4}>
                <div>
                    <Heading>Publicaciones</Heading>
                </div>
                {console.log('Publications',publications)}
            {publications.map((publi)=>(<CardPublication key={publi._id} 
                title={publi.title} description={publi.description} course={publi.course.name}
                proyect={publi.proyect} creationDate={publi.creationDate}/>))}
            </Stack>
        </Flex>
    )
}
