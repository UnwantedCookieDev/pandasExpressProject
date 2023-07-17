

import ReconItemList from "../components/ReconItemList";
import {getCustomers} from '../utils/rest';
import React, { useState, useEffect } from 'react';
import { CartState } from "../Context/Contex";
import Carousel from 'react-bootstrap/Carousel';
import yoga from './../assets/yogaMat.jpg'
import gloves from './../assets/boxingGloves.jpg'




function Homepage (){
   const {state:{products},} = CartState()

   console.log(products)

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        let promise = getCustomers();
        promise.then(
            (text) => {
                let customerArray = JSON.parse(text);
                setCustomers(customerArray);
            }
        )
    },[]);

    return(
        <div className="App">
      
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={gloves}  
          alt="First slide"
          style={{ height: '500px',
            maxHeight: '500px',
            width: 'auto',
            maxWidth: '500px'}}
        />
        <Carousel.Caption>
          <h5>Latest Gloves</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={yoga}
          alt="Second slide"
          style={{ height: '500px',
            maxHeight: '500px',
            width: 'auto',
            maxWidth: '500px'}}
        />
        <Carousel.Caption>
          <h5>New mat</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={yoga}
          alt="Third slide"
          style={{ height: '500px',
            maxHeight: '500px',
            width: 'auto',
            maxWidth: '550px'}}
        />
        <Carousel.Caption>
          <h5>Mat</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
         <ReconItemList customers={customers}/> 
    </div>
    )
}

export default Homepage;