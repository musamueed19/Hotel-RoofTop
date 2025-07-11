import logoImg from "/images/logo.png"

import React from 'react'

const Logo = ({ className}) => {
  return (
    <div className={`${className ?? className} h-full w-[6.8rem]`}>
      <img src={logoImg} alt="logo img" className="h-full w-full object-contain" />
    </div>
  )
}

export default Logo