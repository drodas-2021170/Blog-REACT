import { Button, Card, CardBody, CardFooter, Divider, Heading, Stack, Text, Box, Link, Icon } from "@chakra-ui/react";
import { FiLink } from "react-icons/fi";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export const CardPublication = ({boxi,title,description,proyect,course,creationDate,HandleClick}) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => {
        setShowDetails(prev => !prev); 
    };

    return (
        <Box key={boxi} > 
        <Card bg="#FFFAE5" border="1px solid #FF6F61" borderRadius="lg" maxW="800px" p={6} m={4} shadow="md" 
        _hover={{ transform: "scale(1.02)", }} 
        transition="ease-in-out 0.3s" >
            <CardBody>
                <Stack spacing={4}>
                    <Heading size="lg" color="#FF6F61">
                        Proyecto: {title}
                    </Heading>
                    <Text color="#555555">Curso: {course}</Text>  
                    <Text color="#555555">
                        Fecha de creación: {new Date(creationDate).toLocaleDateString()}
                    </Text>
                </Stack>
            </CardBody>
            <Divider borderColor="#FFB74D" my={4} />
            <CardFooter>
                <Button onClick={handleToggleDetails} bg="#FF6F61" color="white" _hover={{ bg: "#FF3D00" }}>
                    {showDetails ? <ViewOffIcon/>: (<ViewIcon/>)}
                </Button>
                <Button onClick={HandleClick} bg="#FF6F61" color="white" _hover={{ bg: "#FF3D00" } } ml={3}>
                    Comentarios
                </Button>
            </CardFooter>
            {showDetails && (
                <Box p={4} mt={4} borderTop="1px solid #FF6F61" bg="#FFF8E1">
                    <Heading size="md" color="#FF6F61">Detalles del Proyecto</Heading>
                    <Text color="#333333">Descripcion: {description}</Text>
                    <Link href={proyect} isExternal color="#FF6F61" display="flex" alignItems="center" gap={1}>
                        <Icon as={FiLink} /> Link del proyecto
                    </Link>
                </Box>
            )}
        </Card>
        </Box>
    );
};
