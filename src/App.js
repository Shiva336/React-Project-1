import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'  //important to import
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');  //useState to enable darkMode 

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='#052e6b';  //setting the entire background to dark mode
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
   <>
    <Navbar title='Alumni Portal' mode = {mode} toggleMode = {toggleMode}/>
    <div className="container my-3">
      <TextForm heading = 'enter text to analyze' mode = {mode}/>

      {/* <About/> */}
    </div>
   </>
  );
}

export default App;
