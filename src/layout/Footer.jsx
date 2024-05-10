import React from 'react'
import Question from './Question'
import Copyright from './Copyright'
const Footer = () => {
  return (
    <div>
<footer className="Footer">
    <div className="container">
    <Copyright />
    <Question />
    </div>
</footer>        
</div>
  )
}

export default Footer