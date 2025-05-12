import { Select, HStack } from '@chakra-ui/react'

export const FilterBar = ({ filter, setFilter }) => {
    return (
        <HStack mb={4} spacing={4}>
        <Select value={filter} onChange={e => setFilter(e.target.value)} maxW='200px'>
            <option value='all'>Todos los cursos</option>
            <option value='taller'>Taller</option>
            <option value='tecnologia'>Tecnologia</option>
            <option value='tics'>TICS</option>
        </Select>
        </HStack>
    )
}