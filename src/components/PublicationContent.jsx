
import { useContextPubication } from '../shared/hooks/useContextPublication'
import { FadeLoader } from 'react-spinners'
import { Publications } from './publications/Publications'
import { FilterBar } from './FilterBar'
import { useEffect, useState } from 'react'
import { Flex, Heading } from '@chakra-ui/react'

export const PublicationContent = () => {
    const { publications, isFetching } = useContextPubication()
    const [filter, setFilter] = useState('all')
    if (isFetching) {
        return (
            <FadeLoader color='green'/>
        )
    }

    const filteredPublications = filter === 'all'
        ? publications
        : publications.filter(publication => publication.course === filter)

    return (
        <>
        <Flex  alignItems='center' justifyContent='center' flexDirection='row' gap={4} flexWrap='wrap'>
            <FilterBar filter={filter} setFilter={setFilter}  />
            {filter ==='all'?<Heading>Publicaciones de todos los cursos</Heading>:<Heading>Publicaciones de {filter}</Heading>}
            
            <Publications publications={filteredPublications} />
            </Flex>
        </>
    )
}