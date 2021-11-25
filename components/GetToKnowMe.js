import { Box, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import Section from './primitives/section'

const GetToKnowMe = () => {
    return (
        <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Get to know me
                </Heading>
                <Text fontSize="lg" mb={7}>
                    I am a full-stack developer based in India with a passion for building and designing websites and stuff I wants. I have a knack for different things like approaching a problem, designing a way to solve the problem and how to implement it in real-life with code. When not online, I love to go to Gym, listen J-pop and watches anime.
                </Text>
                {/* <Heading as="h4" variants="section-title">On the web</Heading> */}


            </Section>
    )
}

export default GetToKnowMe
