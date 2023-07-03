import React from 'react'
import './Where.css'
import map from './../../assets/map.jpg'

export const Where = () => {
  return (
   <div className=' container where w-50 'id='Where'>
    <h3>Where To Find US</h3>
    <p>Find us at some address at some place.</p>
    <img src={map}/>
    <div className='fly'>
    <span>FYI!</span>
           We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.
           
    </div>
    <div className='Reserve'><span>Reserve</span> a table, ask for today's special or just send us a message:</div>
   
    <form action="">
          <input type="text" name="name" placeholder="Name" required/>
          <input type="number" name="people" placeholder="How many people" required/>
          <input type="datetime-local" name="date and time" value="2020-11-16T20:00" required style={{color: "#777"}}/>
          <input type="text" name="messages" placeholder="Message \  Special requirments" required/>
          <br/>
          <input type="submit" value="Send message">
       </input>
      
       </form>
    

   </div>
  )
}
