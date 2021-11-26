// import { forwardRef } from 'react'
// import { Box, Spinner } from '@chakra-ui/react'
import DogSpinner from './DogSpinner';
import DogContainer from './DogContainer';

// export const DogSpinner = () => {
//   return (
//     <Spinner
//       size="xl"
//       position="absolute"
//       left="50%"
//       top="50%"
//       ml="calc(0px - var(--spinner-size) / 2)"
//       mt="calc(0px - var(--spinner-size))"
//     />
//   )
// } 

// export const DogContainer = forwardRef(({ children }, ref) => (
//   <Box
//     ref={ref}
//     className="voxel-dog"
//     m="auto"
//     mt={['-20px', '-60px', '-40px']}
//     mb={['-40px', '-140px', '-200px']}
//     w={[280, 480, 640]}
//     h={[280, 480, 640]}
//     position="relative"
//   >
//     {children}
//   </Box>
// ))

const Loader = () => {
  const ref = React.createRef();
  return (
    <DogContainer ref={ref}>
      <DogSpinner />
    </DogContainer>
  )
}
// Loader.displayName="Loader"

export default Loader