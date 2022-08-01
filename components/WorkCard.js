import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';

const WorkCard = ({ jobTitle, description, duration, company, logo }) => {
    return (
        <Center px={{ base: 3, md: 12 }} py={{ base: 8, md: 3 }}>
            <Box
                role={'group'}
                p={{ base: 3, md: 6 }}
                maxW={{ base: "full", md: '25vw' }}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
                maxH={{ base: "full", md: "60vh" }}
                minH={{ base: "full", md: "60vh" }}
                overflow="hidden"
            >

                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: { logo },
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width="full"
                        objectFit={'cover'}
                        src={logo}
                        alt="company logo"
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
                        {company}
                    </Heading>
                    <Heading fontSize={'2xl'} fontWeight={800} fontFamily={'body'}>
                        {jobTitle}
                    </Heading>
                    <Text fontSize={'sm'}>
                        {duration}
                    </Text>
                    <Text color={'gray.500'} fontSize={'sm'}>
                        {description}
                    </Text>
                </Stack>
            </Box>
        </Center>
    )
}

export default WorkCard