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

            <Box w='100%' display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={8}>
                <VoxelDog />
                {children}
            </Box>
        </Box>
    )
}

export default Main
