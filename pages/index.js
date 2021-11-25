import { Box, Container, Heading } from '@chakra-ui/layout'
import React from 'react'

const Page = () => {
    return (
        <Container maxW="container.xl">
            <Box borderRadius="lg" bg="red" p={3} mb={6} align='center'>
                Hello, I&apos;m a full-stack developer based in India
            </Box>
            
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Gurpreet Singh
                    </Heading>
                    <p>Digital Craftzman (Web Developer / Designer / Anime-lover)</p>
                </Box>
            </Box>

        </Container>
    )
}

export default Page
