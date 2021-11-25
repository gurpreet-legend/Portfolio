import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/provider'
import Fonts from '../components/primitives/fonts'
import theme from '../lib/theme'

function Website({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website
