import React from 'react'
import './mainfeature.css'

const MainFeature = ({text, title}) => {
   return (
      <div className='mainFeature'>
         <div className="main__feature__container">
            <div className="main__feature__title">
               <p>{title}</p>
            </div>
            <div className="main__feature__text">
            {text}
            </div>
         </div>
      </div>
   )
}

export default MainFeature
