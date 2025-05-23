
import { useContextPubication } from '../shared/hooks/useContextPublication'
import { FadeLoader } from 'react-spinners'
import { Publications } from './publications/Publications'
import { FilterBar } from './FilterBar'
import { useEffect, useState } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { Navbar } from './comments/Navbar/Navbar'

export const PublicationContent = () => {
    const { publications, isFetching } = useContextPubication()
    const [filter, setFilter] = useState('all')
    if (isFetching) {
        return (
            <Flex justifyContent="center" alignItems="center" height="100vh">
                <FadeLoader color="#FF6F61" />
            </Flex>
        )
    }

    const filteredPublications = filter === 'all'
        ? publications
        : publications.filter(publication => publication.course === filter)

    return (
        <>
        <Navbar>
            <Flex  width="100%" alignItems="center" justifyContent="center" flexDirection="row" gap={4} flexWrap="wrap">
                <FilterBar filter={filter} setFilter={setFilter}  />
                {filter ==='all'?<Heading>Publicaciones de todos los cursos</Heading>:<Heading>Publicaciones de {filter}</Heading>}
            </Flex>
        </Navbar>
        <Flex  alignItems='center' justifyContent='center' flexDirection='row' gap={4} flexWrap='wrap'>
            
            {publications.length === 0?(<Heading>No hay publicaciones</Heading>):(<Publications publications={filteredPublications} />)}
        </Flex>
        </>
    )
}