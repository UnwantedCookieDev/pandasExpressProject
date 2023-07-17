import React from "react";
//import Customer from './ProductCart'

function MainCart(props){

  //  const {customer} = props
    return(<>
   <main className="block col-2" >
    <h2>Products</h2>
    <div className="row">
        {props.customers.map((customer) =>{
          // return <Customer key={customer.id} customer={customer} ></Customer>
       return(<div>  <img className="small" src={customer.image} alt={customer.name}></img>
    <h2>{customer.name}</h2>
    <div>${customer.price}</div>
    <div>
        <button>Add to Cart</button>
    </div> </div>)
})}
    </div>

   </main>
    
    </>);
};

export default MainCart