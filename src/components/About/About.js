import React from 'react'
import './About.css'
import coffeeshop from './../../assets/coffeeshop.jpg'

export const About = () => {
  return (
  <>
  <div className=' about container  w-50'id='About'>
    <h3>About the cafe</h3>
    <p> 
    The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
<br/> <br/>

In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.
    </p>
    <div className='quote-content'>
        <p>Use products from nature for what it's worth - but never too early, nor too late.</p>
        <span>    Fresh is the new sweet.
Chef, Coffeeist and Owner: Liam Brown</span>
    
    </div>
    <div className='location'>
      <img src={coffeeshop}/>
    <div className='loc-data'>
    <p> Opening hours: <span> everyday from 6am to 5pm.</span></p>
      <p>Address: <span>15 Adr street, 5015, NY</span></p>
    </div>
    </div>
    
  </div>
  </>
  )
}
