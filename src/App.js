
import { useState } from 'react';
import './App.css';
import {data} from './Data';
import { Menu } from './components/Pagination/Menu';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Where } from './components/Where/Where';
import { Footer } from './components/Footer';

function App() {

  
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Menu/>
      <Where/>
      <Footer/>
  
     </div>
  );
}

export default App;
