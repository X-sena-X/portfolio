import { useState } from 'react'
import './App.css'
import Navbar from './screens/Navbar';
import HomePage from './screens/Home';
import {Scrollbar} from 'smooth-scrollbar-react';

function App() {

  return (
    <>
      <Scrollbar
          plugins={{
            overscroll: {
              effect: 'glow',
            },
          }}>
        <Navbar/>
        <HomePage/>
      </Scrollbar>
      
    </>
  )
}



export default App
