import React from 'react'
import './feature.css'

const Feature = ( {title, text} ) => {
   return (
      <div className='feature'>
         <div className="feature__container">
            <div className="feature__title">
               <p>{title}</p>
            </div>
            <div className="feature__text">
            {text}
            </div>
         </div>
      </div>
   )
}

export default Feature
