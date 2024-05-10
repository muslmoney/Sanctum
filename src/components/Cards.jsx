import React from 'react'

const Cards = ({ className, title, ImgSrc, ImgTitle   }) => {
  className = {className}
    return (

    <div className={className } >
      <img src={ImgSrc} alt={ImgTitle} />
<h3>{title}</h3>
    </div>
  )
}

export default Cards

