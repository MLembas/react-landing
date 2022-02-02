import React from 'react'
import './features.css'
import MainFeature from '../../components/feature/MainFeature'

const Features = () => {
   return (
      <div className='features' id='features'>
         <div className='features__container'>
            <div className='features__heading'>
               
                  <div className='fff gradient__text'>
                  <p>
                  The Future is Now and You Just Need To Realize It. Step into Future Today Make it Happen.
                  </p>
                  </div>
                  <div className='gradient__text'>
                  <p>
                  Request Early Access to Get Started
                  </p>
                  </div>
               
            </div>
            <div className='features__items'>
            <MainFeature  title='Improving end distrusts instantly ' text='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.' />
            <MainFeature title='Become the tended active' text='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.' />
            <MainFeature title='Message or am nothing' text='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.' />
            <MainFeature title='Really boy law county' text='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.' />

            </div>
         </div>
      </div>
   )
}

export default Features
