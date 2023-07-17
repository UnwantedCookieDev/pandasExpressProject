import ProductItemlist from "../components/ProductItemList";
import  {getProducts} from '../utils/rest';
import React ,{ useState, useEffect } from 'react';
import{Col, Row} from 'react-bootstrap'

import productData from './../data/smallProducts.json';

import {SingleProduct} from './../components/SingleProduct'


function Product (){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let promise = getProducts();
        promise.then(
            (text) => {
                let productArray = JSON.parse(text);
                setProducts(productArray);
            }
        )
    },[]);
    return( <div className="App">
    <h2>Store Catelog</h2>
    <ProductItemlist products={products}></ProductItemlist>
    <Row md={2} xs={1} lg={3} className="g-3">
        {
            productData.map(products =>(
                <Col key={products.id}>
                    <SingleProduct props={products}/>
                    </Col>
            ))
        }
    </Row>
    
    </div>)
}

export default Product;