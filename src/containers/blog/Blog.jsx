import React from 'react'
import { Article } from '../../components'
import './blog.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

const Blog = () => {
   return (
      <div className='blog'>
         
            

            <div className='blog__container'>
               <div className='blog__text'>
                  <div className='blog__text gradient__text'>
                     <p>A lot is happening, 
                     We are blogging about it.</p>
                  </div>
               </div>
               <div className='blog__blogs'>
               <Article image={img1} Atitle={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
               <Article image={img2} Atitle={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
               <Article image={img3} Atitle={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
               </div>
            </div>
         
         
      </div>
   )
}

export default Blog
