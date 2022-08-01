import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsPerson, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { motion } from "framer-motion";
import { useColorMode } from '@chakra-ui/color-mode'
import { useTheme } from "@chakra-ui/react"
import Link from 'next/link';

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

function ContactMe() {
    const theme = useTheme()
    const colors = theme.colors
    const { colorMode } = useColorMode()
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
        >
            <Container maxW="container.xl" mt={0} centerContent overflow="hidden">
                <Flex>
                    <Box
                        borderRadius="lg"
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 16 }}>
                        <Box p={4}>
                            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                                <WrapItem>
                                    <Box>
                                        <Heading as="h2" variants="section-title">Contact</Heading>
                                        <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                                            Fill up the form below to contact
                                        </Text>
                                        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                            <Flex flexDirection="column" pl={0} spacing={3} alignItems="flex-start" justifyContent="flex-start">
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="300px"
                                                    variant="ghost"
                                                    justifyContent="flex-start"
                                                    color="fffffff"
                                                    _hover={{ border: `2px solid ${colorMode == "dark" ? colors.orange[200] : colors.teal[500]}` }}
                                                    leftIcon={<MdPhone color={colorMode == "dark" ? colors.orange[200] : colors.teal[500]} size="20px" />}>
                                                    +91-7986281230
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="300px"
                                                    variant="ghost"
                                                    justifyContent="flex-start"
                                                    color="fffffff"
                                                    _hover={{ border: `2px solid ${colorMode == "dark" ? colors.orange[200] : colors.teal[500]}` }}
                                                    leftIcon={<MdEmail color={colorMode == "dark" ? colors.orange[200] : colors.teal[500]} size="20px" />}>
                                                    lostlegend2701@gmail.com
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="300px"
                                                    variant="ghost"
                                                    justifyContent="flex-start"
                                                    color="fffffff"
                                                    _hover={{ border: `2px solid ${colorMode == "dark" ? colors.orange[200] : colors.teal[500]}` }}
                                                    leftIcon={<MdLocationOn color={colorMode == "dark" ? colors.orange[200] : colors.teal[500]} size="20px" />}>
                                                    Punjab, India
                                                </Button>
                                            </Flex>
                                        </Box>
                                        <HStack
                                            mt={{ lg: 10, md: 10 }}
                                            spacing={5}
                                            px={5}
                                            alignItems="flex-start">
                                            <a target="_blank" href="https://www.linkedin.com/in/gurpreetsingh2701/" rel="noopener noreferrer">
                                                <IconButton
                                                    aria-label="linkedin"
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{ bg: colorMode == "dark" ? colors.orange[200] : colors.teal[500] }}
                                                    icon={<BsLinkedin size="28px" />}
                                                />
                                            </a>
                                            <a target="_blank" href="https://github.com/gurpreet-legend" rel="noopener noreferrer">

                                                <IconButton
                                                    aria-label="github"
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{ bg: colorMode == "dark" ? colors.orange[200] : colors.teal[500] }}
                                                    icon={<BsGithub size="28px" />}
                                                />
                                            </a>
                                            <a target="_blank" href="https://twitter.com/Gurpreet_legend" rel="noopener noreferrer">
                                                <IconButton
                                                    aria-label="twitter"
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{ bg: colorMode == "dark" ? colors.orange[200] : colors.teal[500] }}
                                                    icon={<BsTwitter size="28px" />}
                                                />
                                            </a>
                                            <a target="_blank" href="https://www.facebook.com/gurpreet.legend" rel="noopener noreferrer">
                                                <IconButton
                                                    aria-label="facebook"
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{ bg: colorMode == "dark" ? colors.orange[200] : colors.teal[500] }}
                                                    icon={<MdFacebook size="28px" />}
                                                />
                                            </a>
                                            <a target="_blank" href="https://www.instagram.com/gurpreet_legend/" rel="noopener noreferrer">
                                                <IconButton
                                                    aria-label="Instagram"
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{ bg: colorMode == "dark" ? colors.orange[200] : colors.teal[500] }}
                                                    icon={<BsInstagram size="28px" />}
                                                />
                                            </a>
                                        </HStack>
                                    </Box>
                                </WrapItem>
                                <WrapItem>
                                    <Box bg="white" borderRadius="lg">
                                        <Box m={8} color="#0B0E3F">
                                            <VStack spacing={5}>
                                                <FormControl id="name">
                                                    <FormLabel>Your Name</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                        >
                                                            <BsPerson color="gray.800" />
                                                        </InputLeftElement>
                                                        <Input type="text" size="md" />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name">
                                                    <FormLabel>Mail</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"

                                                        >
                                                            <MdOutlineEmail color="gray.800" />
                                                        </InputLeftElement>
                                                        <Input type="text" size="md" />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name">
                                                    <FormLabel>Message</FormLabel>
                                                    <Textarea
                                                        borderColor="gray.300"
                                                        _hover={{
                                                            borderRadius: 'gray.300',
                                                        }}
                                                        placeholder="message"
                                                    />
                                                </FormControl>
                                                <FormControl id="name" float="right">
                                                    <Button
                                                        variant="solid"
                                                        bg={colors.teal[500]}
                                                        color="white"
                                                        _hover={{}}>
                                                        Send Message
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </motion.div>
    );
}

export default ContactMe