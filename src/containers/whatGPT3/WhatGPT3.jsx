import React from 'react'
import './whatGPT3.css'
import Feature from '../../components/feature/Feature'
import MainFeature from '../../components/feature/MainFeature'

const WhatGPT3 = () => {
   return (
      <div className='gpt3__what section__margin' id='whpt3'>
         <div className='gpt3__what-content'>
         <div className="what__container">
         <div className="gpt3__what-feature">
            <MainFeature title='What is GPT-3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
         </div>
         <div className="gpt3__what-heading">
            <div className="gradient__text">
               <p className='bgg'>The possibilities are beyond your imagination</p>
               <p className='lil'>Explore The Library</p>
            </div>
         </div>
         <div className="gpt3__what-container">
            <Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. ' />
            <Feature title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
            <Feature title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
         </div>
         </div>
         </div>
      </div>
   )
}

export default WhatGPT3
