import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { cartReducer } from "./Reducers";
import {getCustomers} from './../utils/rest';

const Cart = createContext();

function Context({children}){

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

    // productData.map(products =>(
    //     <Col key={products.id}>
    //         <ProductItem {...products}/>
    //         </Col>
    // ))

    const products = [...Array(20)].map(()=>(
        {
        id: customers.id,
        firstName: customers.first_name,
        lastName: customers.last_name

    }));

  

    const [state, dispatch] = useReducer(cartReducer,{
        products: products,
        cart:[]
    } );


    return(<Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>)

};

export default Context

export const CartState = () => {
    return useContext(Cart)
}