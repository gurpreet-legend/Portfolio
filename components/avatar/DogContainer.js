import { forwardRef } from 'react'
import { Box } from '@chakra-ui/react'

const DogContainer = forwardRef(({ children }, ref) => (
    <Box
      ref={ref}
      className="voxel-dog"
      m="auto"
      mt={['-20px', '-60px', '-40px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {children}
    </Box>
))
// DogContainer.displayName="DogContainer"

export default DogContainer
