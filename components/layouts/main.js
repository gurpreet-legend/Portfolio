import Head from 'next/head'
import Navbar from '../Navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../avatar/VoxelDog'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8} >
            <Head>
                <meta name="viewport" content="width=device-width, initiali-scale=1" />
                <title>Gurpreet Singh - Homepage</title>
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW="container.xl" pt={5}>
                <VoxelDog />
                {children}
            </Container>
        </Box>
    )
}

export default Main
