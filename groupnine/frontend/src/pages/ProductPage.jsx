

import { getProducts} from '../utils/rest';
import { useState, useEffect } from "react";

import CardB from "../components/CardB";



//const [cart, setCart] = useState()




function ProductPage(props){
const setCart = props.setCart;
const cart = props.cart;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let promise = getProducts();
        promise.then(
            (text) => {
                let customerArray = JSON.parse(text);
                setProducts(customerArray);
            }
        )
    },[]);
console.log(cart);
    return(
    <div className="cartPage">
        {/* <HeaderCart></HeaderCart> */}
       
            
            <CardB products={products} cart={cart} setCart={setCart}></CardB>
            
       
        
        
        
        
    </div>
    );
}

export default ProductPage