import { Box, Flex, Grid, Heading, Stack } from "@chakra-ui/react"
import { CardPublication } from "./CardPublication"
import { useNavigate } from "react-router-dom"

export const Publications = ({publications}) => {
    let navigate = useNavigate()
    return (
        <Box padding="20px"  margin="20px" backgroundColor="white" boxShadow="lg" rounded="lg">
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                {publications.map((publi) => (
                    <CardPublication 
                    boxi={publi._id}
                        key={publi._id} 
                        title={publi.title} 
                        description={publi.description} 
                        proyect={publi.proyect} 
                        course={publi.course} 
                        creationDate={publi.creationDate} 
                        HandleClick={() => navigate(`/comments/${publi._id}`)}
                    />
                ))}
            </Grid>
        </Box>
    )
}
