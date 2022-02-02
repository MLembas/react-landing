import React from 'react'
import './header.css'
import HI from '../../assets/HI.png'
import gr from '../../assets/gr.png'

const Header = () => {
   return (
      <div className='gpt3__header'>
         <div className="gpt3__header-content">
            <div className="gpt3__header-content_text">
               <div className="gradient__text">
                  <p>Let’s Build Something amazing with GPT-3 OpenAI</p>
               </div>
               <div className="header__maintext">
               <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
               </div>
               <div className="header__form">
                  <input className='hf' type='email' placeholder="Your email adress"></input>
                  <button className='hb' type='button'>Get started</button>
               </div>
               <div className="header__visitors">
                  <img className='pplimg' src={gr} alt='Visitors'/>
                  <p>1,600 people requested access a visit in last 24 hours</p>
               </div>
            </div>
            <div className="gpt3__header-content_img">
               <img src={HI} />
            </div>
         </div>
      </div>
   )
}

export default Header
