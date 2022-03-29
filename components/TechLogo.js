import React from 'react'

const TechLogo = ({src, width}) => {
  return (
    <div>
        <img src={src} style={{width: width, height: "auto"}}/>
    </div>
  )
}

export default TechLogo