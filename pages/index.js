import { Box, Container, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import { theme } from '@chakra-ui/theme'; 
import TextLoop from "react-text-loop";
import React from 'react'

const Texts = [
    {
        field: 'Web Developer', 
        color: '#1abc9c'
    },
    {
        field: 'Designer',
        color: '#e74c3c'
    },
    {
        field: 'Anime Lover', 
        color: '#e67e22'
    },
    {
        field: 'Digital Craftzman' ,
        color: '#9b59b6'
    },
    
    
    
]

const Page = () => {
    console.log(theme.breakpoints);
    return (
        <Container maxW="container.xl">
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align='center'>
                Hello, I&apos;m a full-stack developer based in India
            </Box>

            <Box
                display='flex'
                flexDirection={['column-reverse', 'column-reverse', 'row', 'row']}
                justifyContent="flex-start"
                alignItems='center'
                width="100%"
            >
                <Box display={{md: 'flex'}}  flexGrow={2}>
                    <Box >
                        <Heading as="h1" size="4xl" mb={3} >Hello</Heading>
                        <Heading as="h2" size="xl" mb={3}>
                            My name is Gurpreet 
                        </Heading>
                        
                        <Heading as="h2" size="lg">I am a student at IIITM Gwalior</Heading>
                        <Heading as="h2" size="lg" display="inline"> and{' '}</Heading>
                        
                        <TextLoop>
                            {Texts.map((text) => (
                                <Heading as="h2" size="lg" color={text.color}>
                                {text.field}
                                </Heading>)
                            )}
                        </TextLoop>{" "}
                        
                        
                    </Box>
                </Box>
                
                {/* Profile image */}
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 5 }}
                    ml={{ md: 6 }}
                    mb={{ md: 0, base: 6 }}
                    textAlign="center"
                    display="flex"
                    justifyContent="flex-end"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="300px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/me.jpeg"
                        alt="Profile image"
                    />
                </Box>
            </Box>



        </Container>
    )
}

export default Page
