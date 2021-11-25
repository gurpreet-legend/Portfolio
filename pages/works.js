import React from "react";
import { Image } from "@chakra-ui/image";
import { Box, Heading, Text, Button, Flex, Link, Spacer} from "@chakra-ui/react"
import Section from "../components/primitives/section";
import Tilt from 'react-parallax-tilt';
import Projects from "../lib/myProjectInfo";

const works = () => {

    return (
        <>
        <Heading as="h2" variant="section-title" mt={8} mb={8}>
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
                                    <Link href="">
                                        Hostlink
                                    </Link>
                                </Button>
                                <Button>
                                    <Link href="">
                                        Code
                                    </Link>
                                </Button>                       
                            </Flex>
                        </Flex>
                    </Box>
                </Section>
            ))}
        </Box>
        </>

    )
}

export default works
