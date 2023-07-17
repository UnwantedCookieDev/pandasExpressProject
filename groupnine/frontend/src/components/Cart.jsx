import React, { useEffect, useState } from "react";
import {  getProducts } from "../utils/rest";

import { Row , Col} from "react-bootstrap";

import Itemlist from "./Itemlist";


function Cart(props){
const cart = props.cart;
   
    return( 
    <div className="cartPage">
        {/* <HeaderCart></HeaderCart> */}
        <Row md={2} xs={1} lg={3} className="g-3">{}
            <Col>  <Itemlist cart={cart}/></Col>
            <Col><h1>Total</h1></Col>
        
            
        </Row>
        
        
       <Row><input type={'button'} value="Pay" /></Row>
        
          
        
    </div>
    );
};

export default Cart