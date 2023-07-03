
import React, { useState } from 'react'
import './Menu.css'
import {data} from './../../Data'
import img from './../../assets/coffeehouse2.jpg'

export const Menu = () => {
    const recordsPerSection=5;
    const [currentSection ,setCurrentSection]=useState(1);
    let lastIndex =currentSection *recordsPerSection;
    let firstIndex = lastIndex-recordsPerSection;
    let records=data.slice(firstIndex,lastIndex)
    // const nSections=data.length/recordsPerSection;
let pag=[{id:1,name:"Eat"},{id:2,name:"Drink"}]

   

  return (
    <>
    <div className='container menu w-50' id='Menu'>
        <div className='row'>
            {pag.map((item,index) =>{return<div className={`col-6  ${(item.id === currentSection && 'active')}`} onClick={()=>{setCurrentSection(item.id)}}>
                {item.name}

            </div>})}
           
            
        </div>
        <div className='row'>
        {records.map((item,index)=>{return<div className='col-12' key={index}>
               <h3>{item.name}</h3>
               <p>{item.des}</p>
            </div>})}
        </div>

       
       
        
       </div>
       <div className='menu-img w-50'>
       <img src={img}></img>
       </div>
   </>
       
  )
}
