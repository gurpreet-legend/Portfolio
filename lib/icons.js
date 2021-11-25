import {
    SiJavascript,
    SiCss3,
    SiDocker,
    SiHeroku,
    SiHtml5,
    SiMongodb,
    SiNodeDotJs,
    SiPython,
    SiReact,
    SiSass,
    SiWebpack,
    SiBabel,
    SiGit,
    SiGithub,
    SiGithubactions,
    SiGooglecloud,
    SiLinux,
    SiMocha,
    SiJest,
    SiNextDotJs,
    SiPostgresql,
    SiRedux,
    SiNetlify,
    SiTypescript,
    SiUbuntu,
    SiFirebase,
    SiMarkdown,
    SiWordpress,
    SiVercel,
    SiCplusplus,
    SiCanva,
    SiMysql,
    SiFlask,
    SiDjango,
    SiSolidity,
    SiWeb3Dotjs,
    SiIpfs,
    SiExpress,
    SiApollographql,
    SiThreedotjs,
    SiFramer,
    SiMaterialui,
    SiChakraui,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiNpm,
    SiPostman,
} from "react-icons/si";
import { ColorMode, useColorModeValue } from "@chakra-ui/color-mode";

const icons = [{
    name: 'React',
    icon: SiReact,
    config: {
        color: '#61daf4',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
    
},
{
    name: 'Redux',
    icon: SiRedux,
    config: {
        color: '#764abc',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Apollo',
    icon: SiApollographql,
    config: {
        color: () => (useColorModeValue('#000000', '#ffffff')),
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Javascript',
    icon: SiJavascript,
    config: {
        color: '#F0DB4F',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'HTML',
    icon: SiHtml5,
    config: {
        color: '#E34C26',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'CSS',
    icon: SiCss3,
    config: {
        color: '#2965f1',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Three.js',
    icon: SiThreedotjs,
    config: {
        color: () => (useColorModeValue('#000000', '#ffffff')),
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Sass',
    icon: SiSass,
    config: {
        color: '#CD6799',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Material UI',
    icon: SiMaterialui,
    config: {
        color: '#0984e3',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Chakra UI',
    icon: SiChakraui,
    config: {
        color: '#61DAFB',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Tailwind',
    icon: SiTailwindcss,
    config: {
        color: '#61DAFB',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Bootstrap',
    icon: SiBootstrap,
    config: {
        color: '#6c5ce7',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Canva',
    icon: SiCanva,
    config: {
        color: '#20c4cb',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Node.js',
    icon: SiNodedotjs,
    config: {
        color: '#68A063',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Npm',
    icon: SiNpm,
    config: {
        color: '#d63031',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'MySql',
    icon: SiMysql,
    config: {
        color: '#61DAFB',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Postgres',
    icon: SiPostgresql,
    config: {
        color: '#0984e3',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Mongodb',
    icon: SiMongodb,
    config: {
        color: '#4DB33D',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Postman',
    icon: SiPostman,
    config: {
        color: '#EF5B25',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Git',
    icon: SiGit,
    config: {
        color: '#F1502F',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Github',
    icon: SiGithub,
    config: {
        color: () => (useColorModeValue('#000000', '#ffffff')),
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Heroku',
    icon: SiHeroku,
    config: {
        color: '#6762A6',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Netlify',
    icon: SiNetlify,
    config: {
        color: '#61DAFB',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'Vercel',
    icon: SiVercel,
    config: {
        color: () => (useColorModeValue('#000000', '#ffffff')),
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
{
    name: 'C++',
    icon: SiCplusplus,
    config: {
        color: '#0984e3',
        size:'4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'
},
]


export default icons;