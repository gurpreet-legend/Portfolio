import React from "react";
import { Image } from "@chakra-ui/image";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react"
import Section from "./primitives/section";
import Tilt from 'react-parallax-tilt';
import Projects from "../lib/myProjectInfo";
import { motion } from "framer-motion";
import { useColorMode } from '@chakra-ui/color-mode'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const MyProjects = () => {
    const { colorMode } = useColorMode()
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
        >
            <Box mt={50}>
                <Flex justifyContent="center">
                    <Heading as="h1" mb={20} fontSize="6xl">
                        My Projects
                    </Heading>
                </Flex>
                {Projects.map((project, index) => project.name && (
                    <Section key={index}>
                        <Box
                            display={'flex'}
                            flexDirection="column"
                            justifyContent="center"
                            mb={36}
                        >
                            {
                                <Flex
                                    flexDirection={["column", "column", "column", index % 2 == 0 ? "row" : "row-reverse"]}
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Tilt
                                        tiltMaxAngleX={5}
                                        tiltMaxAngleY={5}
                                    >
                                        <Box mx={8} borderRadius="20px" overflow="hidden" w={{ lg: '45vw', sm: '100vw' }}>
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
                                    >
                                        <Heading as='h2' fontSize='2em' mb={0} mt={{ md: 8 }}>{project.name}</Heading>
                                        <Text textAlign="center" my={6} fontSize="1em">{project.info}</Text>
                                        <Flex mb={7}>
                                            {
                                                project.techStack.map((icon, i) => (
                                                    <Box key={i} mx={2}>
                                                        {React.createElement(icon.icon, { size: "50px", color: colorMode == 'light' && icon.config.color == '#ffffff' ? '#000000' : icon.config.color })}
                                                    </Box>
                                                ))
                                            }
                                        </Flex>
                                        <Flex>
                                            {project.hostlink ?
                                                <Button mr={4}>
                                                    <a href={project.hostlink} target="_blank" rel="noreferrer">
                                                        Hostlink
                                                    </a>
                                                </Button> : ''
                                            }
                                            <Button>
                                                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                                    Code
                                                </a>
                                            </Button>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            }
                        </Box>
                    </Section>
                ))}
            </Box>
        </motion.div>
    )
}

export default MyProjects
