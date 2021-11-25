import React from 'react'
import Section from './primitives/section'
import {Heading, Box, Flex, Text} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import icons from '../lib/icons'
import ReactTooltip from "react-tooltip";
import { useTheme } from "@chakra-ui/react"

const Technologies = () => {
    const theme = useTheme()
    const colors = theme.colors
    return (
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Tech I know
            </Heading>
            <Flex
                flexWrap="wrap"
            >
                {icons.map((icon) => ( icon.icon && (
                    <>
                    <Box m="5" data-tip data-for={icon.name}>
                        {React.createElement(icon.icon, icon.config)}
                    </Box>
                    <Box>
                    <ReactTooltip 
                        id={icon.name}
                        place='bottom'
                        type='info'
                        effect='solid'
                        backgroundColor={useColorModeValue(colors.teal[500], colors.orange[200])}
                        textColor="#000000"
                        border={true}
                        borderColor={useColorModeValue('#000000', '#ffffff')}
                        arrowColor= {useColorModeValue('#000000', '#ffffff')}
                        clickable={true}
                    >
                        <Box textAlign="center" width="10vw">
                            <Heading size="md">{icon.name}</Heading>
                            <Text fontSize="md">{icon.description}</Text>
                            <Box fontSize="lg"><a href={icon.url} target="_blank">Learn more</a></Box>
                            
                        </Box>

                    </ReactTooltip>

                    </Box>
                    </>
                    )     
                ))}
            </Flex>
        </Section>
    )
}

export default Technologies
