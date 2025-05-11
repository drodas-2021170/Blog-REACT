import { Flex, Heading} from '@chakra-ui/react'
import React from 'react'

export const NotFoundPage = () => {
    return (
        <Flex flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bg="#FFFAE5">
            <Heading as="h1" size="2xl" color="#FF6F61" mb={50}>
                404 Not Found
            </Heading>
        </Flex>
    )
}
