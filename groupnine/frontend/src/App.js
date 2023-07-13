
//import './App.css';
import * as React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Navigationbar from './components/Navigationbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';

function App() {
  return (
    <Router>
      <Navigationbar/>
        <Routes>
          <Route  path='/' element={<Homepage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact"   element={<Contact/>}/>
          <Route path="/faq"   element={<Faq/>}/>

        </Routes>
    </Router>
   
  );
}

export default App;
