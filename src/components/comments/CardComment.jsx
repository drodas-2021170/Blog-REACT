import { Button, Card, CardBody, CardFooter, Divider, Heading, Stack, Text, Box, Link, Icon, Flex } from "@chakra-ui/react"




export const  CardComment = ({ author, content, creationDate }) => {
    return (
    <Flex direction="column" align="center" justify="center" p={4}>
        <Card width="350px" height="200px"  bg="#FFF5E1" border="1px solid #FF6F61" borderRadius="md" boxShadow="lg" m={0}
        _hover={{ shadow: "lg",transform: "scale(1.02)", borderColor: "#FF6F61"}} 
        transition="ease-in-out 0.3s, transform 0.3s">
            <CardBody display="flex" flexDirection="column" justifyContent="space-between">
                <Heading fontSize="md" color="#FF6F61">Comentario de: {author}</Heading>
                <Text flex="1" overflowY="auto" mt={2} mb={2}>{content}</Text>
                <Text fontSize="sm" color="#555">Creado el: {new Date(creationDate).toLocaleDateString()}</Text>
            </CardBody>
        </Card>
        </Flex>
    )
}

