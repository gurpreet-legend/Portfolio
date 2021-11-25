import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/provider'
import Fonts from '../components/primitives/fonts'
import theme from '../lib/theme'
import {AnimatePresence} from 'framer-motion'

function Website({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website
