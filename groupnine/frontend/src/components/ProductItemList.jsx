import React from 'react';



function ProductItemlist(props) {
    return (<div id={'product-list'}>
        <h4>Product List</h4>
        <ul>
        {props.products.slice(0,7).map(
    (product, index) => {
        return <li key={index} >
            {product.id} - {product.name} </li>
    }
)}
        </ul>
        <input type={'button'} value="New Book2" />
    </div>
    );
}

export default ProductItemlist;