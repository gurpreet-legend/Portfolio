import React from 'react'
import Image from 'next/image'

const TechLogo = ({src, width}) => {
  return (
    <div>
        <Image src={src} width={width} height={width} alt="techlogo"/>
    </div>
  )
}

export default TechLogo