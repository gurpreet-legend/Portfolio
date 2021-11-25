import React from 'react'
import Section from './primitives/section'
import {Heading, Box, Flex, Spacer} from '@chakra-ui/react'
import icons from '../lib/icons'


const Technologies = () => {
    return (
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Tech I know
            </Heading>
            <Flex
                flexWrap="wrap"
            >
                {icons.map((icon) => ( icon.icon && (
                    <Box m="5">
                        {React.createElement(icon.icon, icon.config)}
                        {/* <Heading size="md">{icon.name}</Heading> */}
                    </Box>
                    )     
                ))}
            </Flex>
        </Section>
    )
}

export default Technologies
