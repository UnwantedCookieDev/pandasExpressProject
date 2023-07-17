
//import './App.css';
import * as React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from 'react-bootstrap'
import Homepage from './pages/Homepage';
import Navigationbar from './components/Navigationbar';


//import Product from './pages/Product';
import CardB from './components/CardB';
import Cart from './components/Cart';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Container className="mb-4">
    <Router>
      <Navigationbar/>
        <Routes>
          <Route  path='/' element={<Homepage/>} />
          <Route path="/products" element={<ProductPage setCart={setCart} cart={cart}/>} />
          <Route path="/cart"   element={<Cart/>}/>
          <Route path="/search"   element={<SearchPage/>}/>

        </Routes>
    </Router>
    </Container>
   
  );
}

export default App;
