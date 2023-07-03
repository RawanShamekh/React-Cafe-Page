import React, { useState } from 'react';
import './Navbar.css'

export const Navbar = () => {
    const list=[{id:'Home'},{id:'About'},{id:'Menu'},{id:'Where'}];
    const [active,setActive]=useState("Home");
  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top ">
  <div className="container">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {list.map((item,index)=>{
            return  <li key={index}  onClick={()=>{setActive(item.id)}} className={`nav-item ${(item.id === active)&& 'active'}`}>
            <a className="nav-link " aria-current="page" href={`#${item.id}`}>{item.id}</a>
          </li>
        })}
       
   
       
      </ul>
    </div>
  </div>
</nav>
  
    </>
  )
}
