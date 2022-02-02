import React from 'react'
import './possibility.css'
import poss from '../../assets/poss.png'

const Poosibility = () => {
   return (
      <div className='poss'>
         <div className='poss__container'>
            <div className='poss__image'>
            <img className='poss__img'  src={poss} alt='Visitors'/>
            </div>
            <div className='poss__text'>
               <div className='gradient__text'>
<p>The possibilities are beyond your imagination</p>
               </div>
               <div className='poss-main-text'>
<p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
               </div>

            </div>
         </div>
      </div>
   )
}

export default Poosibility
