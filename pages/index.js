import { Box, Container, Heading, Image } from '@chakra-ui/react'
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
            
            {/* Profile image */}
            <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                textAlign="center"
            >
                <Image
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/me.jpeg"
                    alt="Profile image"
                />
            </Box>



        </Container>
    )
}

export default Page
