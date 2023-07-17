import React from 'react';
import {Card, Button} from 'react-bootstrap'



function Itemlist(props) {

    let cart = [{name: 'boxing gloves', quantity: '1', price: 43.22},{ name: 'boxing gloves', quantity: '1', price: 43.22}]
    return (<div id={'order-list'}>
        <h4>Orders</h4>
        <ul>
        {cart?.map(
    (cartItem, index) => {
        return(<li  key={index} ><Card>
           <div>Product Name: {cartItem.name}</div>
               <Button className='btn-danger btn-sm' varient='danger'>Cancel</Button>
            <div>Quantity: {cartItem.quantity}</div></Card> </li>
             )
    }
)}
        </ul>
      
    </div>
    );
}

export default Itemlist;