import React from 'react'
import './brand.css'
import b1 from '../../assets/atlassian.png'
import b2 from '../../assets/dropbox.png'
import b3 from '../../assets/google.png'
import b4 from '../../assets/shopify.png'
import b5 from '../../assets/slack.png'

const Brand = () => {
   return (
      <div>
         <div className="brand__container">
         <div className="brand__list">
            <ul>
               <li> <a href='https://www.google.com/'><img src={b1}/></a></li>
               <li> <a href='https://www.google.com/'><img src={b2}/></a></li>
               <li> <a href='https://www.google.com/'><img src={b3}/></a></li>
               <li> <a href='https://www.google.com/'><img src={b4}/></a></li>
               <li> <a href='https://www.google.com/'><img src={b5}/></a></li>
            </ul>
         </div>
         </div>
      </div>
   )
}

export default Brand
