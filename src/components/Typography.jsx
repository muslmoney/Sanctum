import React from 'react'

const Typography = (lvl, className,  children, ...props ) => {
 className = `${className} Typography Typography__${level ?? 'default'}`
    switch(lvl){
    case 1:
    return <h1 className= {className}{...props}>{children}</h1>
    case 2:
    return <h2 className= {className}{...props}>{children}</h2>
    case 3:
    return <h3 className= {className}{...props}>{children}</h3>
    case 4:
    return <h4 className= {className}{...props}>{children}</h4>

    default:
        throw new TypeError(`Unknown type ${lvl}`) 
  }
}

export default Typography


export const Paragraph = () => {
  return (
    <div>Paragraph</div>
  )
}
