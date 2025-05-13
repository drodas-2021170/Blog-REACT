import { Select, HStack } from '@chakra-ui/react'

export const FilterBar = ({ filter, setFilter }) => {
    return (
        <HStack mb={4} spacing={4} margin={4}>
            <Select 
                value={filter} 
                onChange={e => setFilter(e.target.value)} 
                maxW="200px" 
                borderColor="#FF6F61" 
                bg="#FFFAE5"
                _hover={{ bg: "#FF6F61", color: "black" }}
                _focus={{ borderColor: "#FF3D00" }}
            >
                <option value="all">Todos los cursos</option>
                <option value="Taller">Taller</option>
                <option value="Tecnologia">Tecnología</option>
                <option value="TICS">TICS</option>
            </Select>
        </HStack>
    )
}