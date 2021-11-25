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
        size:'4em',
    }
},
{
    name: 'Redux',
    icon: SiRedux,
    config: {
        color: '#764abc',
        size:'4em',
    }
},
{
    name: 'Apollo',
    icon: SiApollographql,
    config: {
        color: () => (useColorModeValue('#000000', '#ffffff')),
        size:'4em'
    }
},
{
    name: 'Javascript',
    icon: SiJavascript,
    config: {
        color: '#F0DB4F',
        size:'4em'
    }
},
{
    name: 'HTML',
    icon: SiHtml5,
    config: {
        color: '#E34C26',
        size:'4em'
    }
},
{
    name: 'CSS',
    icon: SiCss3,
    config: {
        color: '#2965f1',
        size:'4em'
    }
},
{
    name: 'Three.js',
    icon: SiThreedotjs,
    config: {
        color: () => (useColorModeValue('#000000', '#ffffff')),
        size:'4em'
    }
},
{
    name: 'Sass',
    icon: SiSass,
    config: {
        color: '#CD6799',
        size:'4em'
    }
},
{
    name: 'Material UI',
    icon: SiMaterialui,
    config: {
        color: '#0984e3',
        size:'4em'
    }
},
{
    name: 'Chakra UI',
    icon: SiChakraui,
    config: {
        color: '#61DAFB',
        size:'4em'
    }
},
{
    name: 'Tailwind',
    icon: SiTailwindcss,
    config: {
        color: '#61DAFB',
        size:'4em'
    }
},
{
    name: 'Bootstrap',
    icon: SiBootstrap,
    config: {
        color: '#6c5ce7',
        size:'4em'
    }
},
{
    name: 'Canva',
    icon: SiCanva,
    config: {
        color: '#20c4cb',
        size:'4em'
    }
},
{
    name: 'Node.js',
    icon: SiNodedotjs,
    config: {
        color: '#68A063',
        size:'4em'
    }
},
{
    name: 'Npm',
    icon: SiNpm,
    config: {
        color: '#d63031',
        size:'4em'
    }
},
{
    name: 'MySql',
    icon: SiMysql,
    config: {
        color: '#61DAFB',
        size:'4em'
    }
},
{
    name: 'Postgres',
    icon: SiPostgresql,
    config: {
        color: '#0984e3',
        size:'4em'
    }
},
{
    name: 'Mongodb',
    icon: SiMongodb,
    config: {
        color: '#4DB33D',
        size:'4em'
    }
},
{
    name: 'Postman',
    icon: SiPostman,
    config: {
        color: '#EF5B25',
        size:'4em'
    }
},
{
    name: 'Git',
    icon: SiGit,
    config: {
        color: '#F1502F',
        size:'4em'
    }
},
{
    name: 'Github',
    icon: SiGithub,
    config: {
        color: () => (useColorModeValue('#000000', '#ffffff')),
        size:'4em'
    }
},
{
    name: 'Heroku',
    icon: SiHeroku,
    config: {
        color: '#6762A6',
        size:'4em'
    }
},
{
    name: 'Netlify',
    icon: SiNetlify,
    config: {
        color: '#61DAFB',
        size:'4em'
    }
},
{
    name: 'Vercel',
    icon: SiVercel,
    config: {
        color: () => (useColorModeValue('#000000', '#ffffff')),
        size:'4em'
    }
},
{
    name: 'C++',
    icon: SiCplusplus,
    config: {
        color: '#0984e3',
        size:'4em'
    }
},
]


export default icons;