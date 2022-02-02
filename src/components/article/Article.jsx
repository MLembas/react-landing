import React from 'react'
import './article.css'
import img1 from '../../assets/img1.png'

const Article = ({image, Atitle}) => {
   return (
      <div className='article'>
         <div className='article__container'>
            <div className='a_image'>
               <img className='img' src={image} alt='Visitors'/>
            </div>
            <div className='a__text'>
               <div className='a__title'>
                  {Atitle}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Article
