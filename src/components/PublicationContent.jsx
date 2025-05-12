
import { useContextPubication } from '../shared/hooks/useContextPublication'
import { FadeLoader } from 'react-spinners'
import { Publications } from './publications/Publications'
import { FilterBar } from './FilterBar'
import { useState } from 'react'

export const PublicationContent = () => {
    const {publications,isFetching} = useContextPubication()
    const [filter, setFilter] = useState('all')
    if(isFetching){
        return(
            <FadeLoader color='green'/>
        )
    }

    const courses = publications.map((publication) => (publication.course.name))

    const filteredCourses = courses.filter(course =>
        filter === 'all' ? true : courses === filter
    )

    return (
        <>
            <FilterBar filter={filter} setFilter={setFilter}/>
            {
                filteredCourses.map((course)=>(
                    <Publications />
                )
                )
            }
        </>
    )
}
