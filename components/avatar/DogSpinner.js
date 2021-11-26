import { Spinner } from '@chakra-ui/react'

const DogSpinner = () => {
    return (
      <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="50%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
      />
    )
}
// DogSpinner.displayName = "DogSpinner"

export default DogSpinner
