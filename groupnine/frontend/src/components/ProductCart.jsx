import React from "react";

function ProductCart(props){

    const {product} = props
    return(
    <>
    <img className="small" src={Product.image} alt={Product.name}></img>
    <h2>{product.name}</h2>
    <div>${product.price}</div>
    <div>
        <button>Add to Cart</button>
    </div>
    </>);
};

export default ProductCart