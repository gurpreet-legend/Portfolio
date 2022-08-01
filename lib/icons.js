import {
    SiJavascript,
    SiCss3,
    SiHeroku,
    SiHtml5,
    SiMongodb,
    SiReact,
    SiSass,
    SiGit,
    SiGithub,
    SiNextdotjs,
    SiPostgresql,
    SiRedux,
    SiNetlify,
    SiVercel,
    SiCanva,
    SiMysql,
    SiApollographql,
    SiThreedotjs,
    SiMaterialui,
    SiChakraui,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiNpm,
    SiPostman,
    SiGraphql,
    SiTypescript,
    SiFramer,
    SiFirebase,
    SiMocha,
    SiChainlink,
    SiChai,
    SiTestinglibrary,
    SiMarkdown,
    SiJest,
    SiDocker,
    SiGitlab,
    SiGithubactions,
    SiGnubash,
    SiIpfs,
    SiUbuntu,
    SiGo,
    SiPython,
    SiCplusplus,
    SiSolidity
} from "react-icons/si";
import TechLogo from "../components/TechLogo";
const viteLogoSrc = "/logos/vite.svg"
const figmaLogoSrc = "/logos/figma.svg"
const web3jsLogoSrc = "/logos/web3js.svg"
const ganacheLogoSrc = "/logos/ganache.svg"
const truffleLogoSrc = "/logos/truffle.png"
const ethersjsLogoSrc = "/logos/ethersjs.svg"
const hardhatLogoSrc = "/logos/hardhat.svg"

const icons = [{
    name: 'React',
    icon: SiReact,
    config: {
        color: '#61daf4',
        size: '4em'
    },
    description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
    url: 'https://reactjs.org/'

},
{
    name: 'Redux',
    icon: SiRedux,
    config: {
        color: '#764abc',
        size: '4em'
    },
    description: 'A Predictable State Container for JS Apps',
    url: 'https://redux.js.org/'
},
{
    name: 'Next.js',
    icon: SiNextdotjs,
    config: {
        color: '#ffffff',
        size: '4em'
    },
    description: 'Next.js is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.',
    url: 'https://nextjs.org/'
},
{
    name: 'Graphql',
    icon: SiGraphql,
    config: {
        color: '#e535ab',
        size: '4em'
    },
    description: 'GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.',
    url: 'https://graphql.org/'
},
{
    name: 'Apollo',
    icon: SiApollographql,
    config: {
        color: '#ffffff',
        size: '4em'
    },
    description: 'Apollo tracks your GraphQL schemas in a registry to create a central source of truth for everything in your graph.',
    url: 'https://www.apollographql.com/'
},
{
    name: 'Javascript',
    icon: SiJavascript,
    config: {
        color: '#F0DB4F',
        size: '4em'
    },
    description: 'JavaScript is a programming language that is one of the core technologies of the World Wide Web',
    url: 'https://www.javascript.com/'
},
{
    name: 'C++',
    icon: SiCplusplus,
    config: {
        color: '#466fb9',
        size: '4em'
    },
    description: 'C++ is a general-purpose programming language',
    url: 'https://www.w3schools.com/cpp/'
},
{
    name: 'Python',
    icon: SiPython,
    config: {
        color: '#4B8BBE',
        size: '4em'
    },
    description: 'Python is a high-level, interpreted, general-purpose programming language.',
    url: 'https://www.python.org/'
},
{
    name: 'Solidity',
    icon: SiSolidity,
    config: {
        color: '#ffffff',
        size: '4em'
    },
    description: 'Solidity is an object-oriented, high-level language for implementing smart contracts.',
    url: 'https://docs.soliditylang.org/en/v0.8.15/'
},
{
    name: 'Go',
    icon: SiGo,
    config: {
        color: '#29BEB0',
        size: '4em'
    },
    description: 'Go is an open source programming language supported by Google',
    url: 'https://go.dev/'
},
{
    name: 'Typescript',
    icon: SiTypescript,
    config: {
        color: '#007acc',
        size: '4em'
    },
    description: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    url: 'https://www.typescriptlang.org/'
},
{
    name: 'HTML',
    icon: SiHtml5,
    config: {
        color: '#E34C26',
        size: '4em'
    },
    description: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    url: 'https://www.w3schools.com/html/'
},
{
    name: 'CSS',
    icon: SiCss3,
    config: {
        color: '#2965f1',
        size: '4em'
    },
    description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language',
    url: 'https://www.w3schools.com/css/'
},
{
    name: 'Three.js',
    icon: SiThreedotjs,
    config: {
        color: '#ffffff',
        size: '4em'
    },
    description: 'Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL',
    url: 'https://threejs.org/'
},
{
    name: 'Framer Motion',
    icon: SiFramer,
    config: {
        color: '#ffffff',
        size: '4em'
    },
    description: 'Framer Motion is a new open source, production-ready motion library for React on the web.',
    url: 'https://www.framer.com/'
},
{
    name: 'Sass',
    icon: SiSass,
    config: {
        color: '#CD6799',
        size: '4em'
    },
    description: 'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.',
    url: 'https://sass-lang.com/'
},
{
    name: 'Material UI',
    icon: SiMaterialui,
    config: {
        color: '#0984e3',
        size: '4em'
    },
    description: 'MUI provides a simple, customizable, and accessible library of React components.',
    url: 'https://mui.com/'
},
{
    name: 'Chakra UI',
    icon: SiChakraui,
    config: {
        color: '#61DAFB',
        size: '4em'
    },
    description: 'Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.',
    url: 'https://chakra-ui.com/'
},
{
    name: 'Tailwind',
    icon: SiTailwindcss,
    config: {
        color: '#61DAFB',
        size: '4em'
    },
    description: 'Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces',
    url: 'https://tailwindcss.com/'
},
{
    name: 'Bootstrap',
    icon: SiBootstrap,
    config: {
        color: '#6c5ce7',
        size: '4em'
    },
    description: 'Bootstrap is a free and open-source CSS framework directed at responsive.',
    url: 'https://getbootstrap.com/'
},
{
    name: 'Canva',
    icon: SiCanva,
    config: {
        color: '#20c4cb',
        size: '4em'
    },
    description: 'Canva is an Australian graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content.',
    url: 'https://www.canva.com/en_in/'
},
{
    name: 'Node.js',
    icon: SiNodedotjs,
    config: {
        color: '#68A063',
        size: '4em'
    },
    description: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
    url: 'https://www.w3schools.com/nodejs/nodejs_intro.asp'
},
{
    name: 'Npm',
    icon: SiNpm,
    config: {
        color: '#d63031',
        size: '4em'
    },
    description: 'npm is a package manager for the JavaScript programming language maintained by npm, Inc.',
    url: 'https://www.npmjs.com/'
},
{
    name: 'MySql',
    icon: SiMysql,
    config: {
        color: '#61DAFB',
        size: '4em'
    },
    description: 'MySQL is an open-source relational database management system.',
    url: 'https://www.mysql.com/'
},
{
    name: 'Postgres',
    icon: SiPostgresql,
    config: {
        color: '#0984e3',
        size: '4em'
    },
    description: 'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.',
    url: 'https://www.postgresql.org/about/'
},
{
    name: 'Mongodb',
    icon: SiMongodb,
    config: {
        color: '#4DB33D',
        size: '4em'
    },
    description: 'MongoDB is a source-available cross-platform document-oriented database program.',
    url: 'https://www.mongodb.com/what-is-mongodb'
},
{
    name: 'Postman',
    icon: SiPostman,
    config: {
        color: '#EF5B25',
        size: '4em'
    },
    description: 'Postman is an API platform for building and using APIs.',
    url: 'https://www.postman.com'
},
{
    name: 'Git',
    icon: SiGit,
    config: {
        color: '#F1502F',
        size: '4em'
    },
    description: 'Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.',
    url: 'https://git-scm.com/'
},
{
    name: 'Ubuntu',
    icon: SiUbuntu,
    config: {
        color: '#E95420',
        size: '4em'
    },
    description: 'Ubuntu is the modern, open source operating system on Linux for the enterprise server, desktop, cloud, and IoT.',
    url: 'https://ubuntu.com/'
},
{
    name: 'Github',
    icon: SiGithub,
    config: {
        color: '#ffffff',
        size: '4em'
    },
    description: 'GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.',
    url: 'https://github.com/'
},
{
    name: 'Heroku',
    icon: SiHeroku,
    config: {
        color: '#6762A6',
        size: '4em'
    },
    description: 'Heroku is a cloud platform as a service supporting several programming languages.',
    url: 'https://www.heroku.com/'
},
{
    name: 'Netlify',
    icon: SiNetlify,
    config: {
        color: '#61DAFB',
        size: '4em'
    },
    description: 'Netlify is a cloud computing company that offers hosting and serverless backend services for web applications and static websites.',
    url: 'https://www.netlify.com/'
},
{
    name: 'Vercel',
    icon: SiVercel,
    config: {
        color: '#ffffff',
        size: '4em'
    },
    description: 'Vercel is a platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.',
    url: 'https://vercel.com/'
},
{
    name: 'Vite',
    icon: () => <TechLogo src={viteLogoSrc} width="75px" />,
    config: {
        color: '#0984e3',
        size: '4em'
    },
    description: 'Vite is a modern, blazing-fast tool for scaffolding and bundling projects—quickly becoming popular due to near-instant code compilation and rapid hot module replacement.',
    url: 'https://vitejs.dev/'
},
{
    name: 'Firebase',
    icon: SiFirebase,
    config: {
        color: '#FFA611',
        size: '4em'
    },
    description: 'Firebase is a platform developed by Google for creating mobile and web applications.',
    url: 'https://firebase.google.com/'
},
{
    name: 'Figma',
    icon: () => <TechLogo src={figmaLogoSrc} width="75px" />,
    config: {
        color: '#0984e3',
        size: '4em'
    },
    description: 'Figma is a vector graphics editor and prototyping tool which is primarily web-based',
    url: 'https://www.figma.com/'
},
{
    name: 'Web3.js',
    icon: () => <TechLogo src={web3jsLogoSrc} width="75px" />,
    config: {
        color: '#ffffff',
        size: '4em'
    },
    description: 'Web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.',
    url: 'https://web3js.readthedocs.io/'
},
{
    name: 'Ethers.js',
    icon: () => <TechLogo src={ethersjsLogoSrc} width="75px" />,
    config: {
        color: '#ffffff',
        size: '4em'
    },
    description: 'The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem.',
    url: 'https://docs.ethers.io/v5/'
},
{
    name: 'Hardhat',
    icon: () => <TechLogo src={hardhatLogoSrc} width="75px" />,
    config: {
        color: '#ffffff',
        size: '4em'
    },
    description: 'An ethereum development environment',
    url: 'https://hardhat.org/'
},
{
    name: 'Ganache',
    icon: () => <TechLogo src={ganacheLogoSrc} width="75px" />,
    config: {
        color: '#ffffff',
        size: '4em'
    },
    description: 'Ganache is a personal blockchain for rapid Ethereum and Corda distributed application development. ',
    url: 'https://trufflesuite.com/docs/ganache/index.html'
},
{
    name: 'Truffle',
    icon: () => <TechLogo src={truffleLogoSrc} width="75px" />,
    config: {
        color: '#ffffff',
        size: '4em'
    },
    description: 'Truffle is a world-class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM)',
    url: 'https://trufflesuite.com/'
},
{
    name: 'Chainlink',
    icon: SiChainlink,
    config: {
        color: '#2965f1',
        size: '4em'
    },
    description: 'Chainlink is a both cryptocurrency and technology platform that enables blockchain platforms to securely interact with external data.',
    url: 'https://chain.link/'
},
{
    name: 'IPFS',
    icon: SiIpfs,
    config: {
        color: '#40bfbc',
        size: '4em'
    },
    description: "A peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open",
    url: 'https://ipfs.tech/'
},
{
    name: 'Mocha',
    icon: SiMocha,
    config: {
        color: '#967969',
        size: '4em'
    },
    description: 'Mocha is a feature-rich JavaScript test framework running on Node. js and in the browser',
    url: 'https://mochajs.org/'
},
{
    name: 'Chai.js',
    icon: SiChai,
    config: {
        color: '#b1832f ',
        size: '4em'
    },
    description: 'Chai is a assertion library for node and the browser that can be delightfully paired with any javascript testing framework.',
    url: 'https://www.chaijs.com/'
},
{
    name: 'Testing Library',
    icon: SiTestinglibrary,
    config: {
        color: '#DC143C',
        size: '4em'
    },
    description: 'The Testing Library family of libraries is a very light-weight solution for testing without all the implementation details',
    url: 'https://testing-library.com/docs/react-testing-library/intro/'
},
{
    name: 'Markdown',
    icon: SiMarkdown,
    config: {
        color: '#ffffff',
        size: '4em'
    },
    description: 'Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.',
    url: 'https://www.markdownguide.org/getting-started/'
},
{
    name: 'Jest',
    icon: SiJest,
    config: {
        color: '#DC143C',
        size: '4em'
    },
    description: 'Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.',
    url: 'https://jestjs.io/'
},
{
    name: 'Docker',
    icon: SiDocker,
    config: {
        color: '#0db7ed',
        size: '4em'
    },
    description: 'Docker is an open platform for developing, shipping, and running applications.',
    url: 'https://docs.docker.com/get-started/overview/'
},
{
    name: 'GitLab',
    icon: SiGitlab,
    config: {
        color: '#fca326',
        size: '4em'
    },
    description: 'GitLab is a DevOps platform is a single application for unparalleled collaboration, visibility, and development velocity.',
    url: 'https://docs.docker.com/get-started/overview/'
},
{
    name: 'Github Actions',
    icon: SiGithubactions,
    config: {
        color: '#4183C4',
        size: '4em'
    },
    description: 'GitLab is a DevOps platform is a single application for unparalleled collaboration, visibility, and development velocity.',
    url: 'https://github.com/features/actions'
},
{
    name: 'Bash',
    icon: SiGnubash,
    config: {
        color: '#ffffff',
        size: '4em'
    },
    description: `Bash is a legitimate interface to your computer, and it's not just for server admins and programmers.`,
    url: 'https://www.gnu.org/software/bash/'
},

]


export default icons;