import React from 'react'

function ImgProfile(props) {
  return (
    <img 
      src={props.link} alt="Foto de usuario" 
      className={`w-12 h-12 rounded-lg  mt-[calc(0px-1.5rem-6px)] border-4 border-gray-80 box-content ${props.extraClass}` }
    />
  )
}

export default ImgProfile