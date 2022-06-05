import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'  //important to import
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
   <>
    <Navbar title='Alumni Portal' />
    <div className="container my-3">
      {/* <TextForm heading = 'enter text to analyze'/> */}

      <About/>
    </div>
   </>
  );
}

export default App;
