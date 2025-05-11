import { Button, Card, CardBody, CardFooter, Divider, Heading, Stack, Text, Box, Link, Icon } from "@chakra-ui/react"
import { FiLink } from "react-icons/fi"



export const CardPublication = ({ title, description, proyect, course, creationDate }) => {
    return (
        <Card bg="#FFFAE5" border="1px solid #FF6F61" borderRadius="lg" maxW="800px" p={6} m={4} shadow="md" _hover={{ shadow: "lg", transform: "scale(1.02)" }} transition="ease-in-out 0.3s">
        <CardBody>
            <Stack spacing={4}>
            <Heading size='lg' color="#FF6F61">{title}</Heading>
            <Text color="#333333">{description}</Text>
            <Text color="#555555">Curso: {course}</Text>
            <Link href={proyect} isExternal color="#FF6F61" display="flex" alignItems="center" gap={1}>
                <Icon as={FiLink} /> Link del proyecto
            </Link>
            <Text color="#555555">Fecha de creación: {new Date(creationDate).toLocaleDateString()}</Text>
            </Stack>
        </CardBody>
        <Divider borderColor="#FFB74D" my={4} />
        <CardFooter>
            <Button bg="#FF6F61" color="white" _hover={{ bg: "#FF3D00" }}>Comentarios</Button>
        </CardFooter>
        </Card>
    )
}
