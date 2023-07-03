import { useEffect } from 'react'
import './App.css'
import Navbar from './screens/Navbar';
import HomePage from './screens/Home';


function App() {
  useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e) => {
      // prevent the right-click menu from appearing
      e.preventDefault()
    }

    // attach the event listener to 
    // the document object
    document.addEventListener("contextmenu", handleContextMenu)

    // clean up the event listener when 
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [])
  return (
    <>
      
        <Navbar/>
        <HomePage/>
  
      
    </>
  )
}



export default App
