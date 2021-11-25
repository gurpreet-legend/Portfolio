import { Box, Container, Heading, Image, useColorModeValue, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { DownloadIcon } from '@chakra-ui/icons';
import TextLoop from "react-text-loop";
import Technologies from '../components/Technologies';
import React from 'react'
import GetToKnowMe from '../components/GetToKnowMe';

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

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Page = () => {
    return (
        // Profile Section 
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
        >
            <Container maxW="container.xl">
                {/* <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}  mb={6} align='center' py={5}>
                    Hello, I&apos;m a full-stack developer based in India
                </Box> */}

                <Box
                    display='flex'
                    flexDirection={['column-reverse', 'column-reverse', 'row', 'row']}
                    justifyContent="flex-start"
                    alignItems={{md: 'center'}}
                    width="100%"
                    mb={[10, 10, 0, 0]}
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
                                {Texts.map((text, index) => (
                                    <Heading as="h2" size="lg" color={text.color} key={index}>
                                    {text.field}
                                    </Heading>)
                                )}
                            </TextLoop>{" "}
                            
                            {/* CV download button  */}
                            <Button display='block' mt={7} colorScheme="teal">
                            <a href="/resume.pdf" target="_blank" rel="noreferrer" download> My Resume <DownloadIcon/></a>
                            </Button>
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
                        justifyContent={["center", 'center', "flex-end", "flex-end" ]}
                        whileHover={{boxShadow: '0px 0px 5px #fff'}}
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth={['200px','250px','300px']}
                            display="inline-block"
                            borderRadius="full"
                            src="/images/me.jpeg"
                            alt="Profile image"
                            _hover={useColorModeValue({boxShadow: '0 0 10px #000'},{boxShadow: '0 0 10px #fff'})}
                        />
                    </Box>
                </Box>

                {/* Technologies Section */}
                <Technologies />

                {/* Get to know me section */}
                <GetToKnowMe/>



            </Container>
        </motion.div>
    )
}

export default Page
