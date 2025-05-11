
import { useContextPubication } from '../shared/hooks/useContextPublication'
import { FadeLoader } from 'react-spinners'
import { Publications } from './publications/Publications'

export const PublicationContent = () => {
    const {isFetching} = useContextPubication()

    if(isFetching){
        return(
            <FadeLoader color='green'/>
        )
    }
    return (
        <Publications/>
    )
}
