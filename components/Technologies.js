import React from 'react'
import Section from './primitives/section'
import {Heading, Box, Flex, Text} from '@chakra-ui/react'
import icons from '../lib/icons'
import ReactTooltip from "react-tooltip";
import { useTheme } from "@chakra-ui/react"
import { useColorMode } from '@chakra-ui/color-mode'

const Technologies = () => {
    const theme = useTheme()
    const colors = theme.colors
    const { colorMode } = useColorMode()
    return (
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Tech I know
            </Heading>
            <Flex
                flexWrap="wrap"
            >
                {icons.map((icon, index) => ( icon.icon && (
                    <Box key={index}>
                    <Box m="5" data-tip data-for={icon.name}>
                        {React.createElement(icon.icon, {size:icon.config.size, color:colorMode=='light' && icon.config.color=='#ffffff' ? '#000000' : icon.config.color})}
                    </Box>
                    <Box>
                    <ReactTooltip 
                        id={icon.name}
                        place='bottom'
                        type='info'
                        effect='solid'
                        backgroundColor={colorMode == "dark" ? colors.orange[200]: colors.teal[500]}
                        textColor="#000000"
                        border={true}
                        borderColor={colorMode == "dark" ? '#ffffff':'#000000'}
                        arrowColor= {colorMode == "dark" ? '#ffffff':'#000000'}
                        clickable={true}
                    >
                        <Box textAlign="center" width="10vw">
                            <Heading size="md">{icon.name}</Heading>
                            <Text fontSize="md">{icon.description}</Text>
                            <Box fontSize="lg"><a href={icon.url} target="_blank" rel="noreferrer">Learn more</a></Box>
                            
                        </Box>

                    </ReactTooltip>

                    </Box>
                    </Box>
                    )     
                ))}
            </Flex>
        </Section>
    )
}

export default Technologies
