import React from "react";
import { Image } from "@chakra-ui/image";
import { Box, Heading, Text, Button, Flex} from "@chakra-ui/react"
import Section from "../components/primitives/section";
import Tilt from 'react-parallax-tilt';
import Projects from "../lib/myProjectInfo";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const works = () => {

    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
        >
        <Heading as="h1" variant="section-title" mb={30} fontSize="6xl">
            My Projects
        </Heading>
        <Box>
            {Projects.map((project, index)=> project.name && (
                <Section key={index}>
                    <Box 
                        display={'flex'}
                        flexDirection={['column', 'column', index%2==0? "row": "row-reverse", index%2==0? "row": "row-reverse"]}
                        mb={20}
                    >
                        <Tilt
                            tiltMaxAngleX={5} 
                            tiltMaxAngleY={5}
                        >
                            <Box borderRadius="20px" overflow="hidden" w={{lg:'45vw', sm:'100vw'}}>
                                <Image 
                                    src={project.imagePath}
                                    alt="project image"
                                />
                            </Box>
                        </Tilt>
                        <Flex 
                            flexDirection="column" 
                            justifyContent="center" 
                            alignItems="center" 
                            ml={{md:index%2==0 ? '10': '0'}}
                            mr={{md:index%2==0 ? '0': '10'}}
                        >
                            <Heading as='h2' fontSize='2em' mb={0} mt={{md:8}}>{project.name}</Heading>
                            <Text textAlign="center" my={6} fontSize="1em">{project.info}</Text>
                            <Flex mb={7}>
                                {
                                    project.techStack.map((icon, i)=>(
                                        <Box key={i} mx={2}>
                                            {React.createElement(icon.icon, {color: icon.config.color, size: "3em"})}
                                        </Box>
                                    ))
                                }
                            </Flex>
                            <Flex>
                                <Button mr={4}>
                                    <a href={project.hostlink} target="_blank" rel="noreferrer">
                                        Hostlink
                                    </a>
                                </Button>
                                <Button>
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                        Code
                                    </a>
                                </Button>                       
                            </Flex>
                        </Flex>
                    </Box>
                </Section>
            ))}
        </Box>
        </motion.div>

    )
}

export default works
