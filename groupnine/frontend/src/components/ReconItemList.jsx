import React from 'react';
import {Card, Button} from 'react-bootstrap'



function ReconItemlist(props) {
    return (<div id={'book-list'}>
        <h4> Recommended Products</h4>
        <ul>
        {props.customers.slice(0,7).map(
    (customer, index) => {
        return(<Card><li key={index} >
           <div>{customer.id} Product Name: {customer.name}</div>
               <Button className='btn-danger btn-sm' varient='danger'>Cancel</Button>
            <div>Price $: {customer.price}</div> </li>
            </Card> )
    }
)}
        </ul>
      
    </div>
    );
}

export default ReconItemlist;