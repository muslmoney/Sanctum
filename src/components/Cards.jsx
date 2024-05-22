import classNames from 'classnames'
import React from 'react'

import ProductStyle from "./components.module.css";


const Cards = ({ className, title, ImgSrc, ImgTitle }) => {
  className = { className }
  return (

    <div className={className} >
      <img src={ImgSrc} alt={ImgTitle} />
      <h3>{title}</h3>
    </div>
  )
}


export const ProductCard = ({ className, title, ImgSrc, ImgTitle, Text }) =>{
  className = classNames(ProductStyle[{className}])
return (
  <div>
    <img src={ImgSrc} alt={ImgTitle} />
    <h3>{title}</h3>
    <p>{Text}</p>
    <button>Посмотреть</button>
  </div>
)
}

export default Cards


