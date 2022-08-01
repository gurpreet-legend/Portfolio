import React from 'react'
import WorkCard from '../components/WorkCard'
import { motion } from "framer-motion";
import { Heading, Flex, Stack } from "@chakra-ui/react"

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const worksData = [
    {
        jobTitle: "Software Consulting and Engineering",
        description: "Developed a survey site for an NFT project based on ReactJS which followed a child-parent based architecture.",
        duration: " Apr 2022 - Present",
        company: "WalletSocket Inc.",
        logo: "/works/walletsocket.png"
    },
    {
        jobTitle: "Full Stack Developer Intern",
        description: "Developed Website based on NextJS, Docusaurus and MDX based blogs. Worked on WebApp Containerization, Cloud Deployment and maintained cloud database and clusters, implemented firebase functions",
        duration: " Jan 2022 - Feb 2022",
        company: "Codepend Inc.",
        logo: "/works/codepend.png"
    },
]


const works = () => {
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
        >
            <Flex justifyContent="center">
                <Heading as="h1" mb={20} mt={50} fontSize="6xl">
                    Works
                </Heading>
            </Flex>
            <Stack direction={{ base: 'column', md: 'row' }} margin={{ base: 0, md: "auto" }}>

                {
                    worksData.map((data) => (
                        <WorkCard jobTitle={data.jobTitle} description={data.description} duration={data.duration} company={data.company} logo={data.logo} />

                    ))
                }
            </Stack>
        </motion.div>
    )
}

export default works