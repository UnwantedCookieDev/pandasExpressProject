import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from "react-bootstrap";
import gloves from './../assets/boxingGloves.jpg';

function CardB ({ cart, setCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://localhost:4000/products')
      .then(response => {
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);
        return response.json();
      })
      .then(data => {
        console.log('Received data:', data);
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
    }, []);

    function addToCart(product){
        setCart([...cart,{product, quantity:1}])
    }

    return (
        <div id={'book-list'}>
            <h4>Product List</h4>
            <div className="row">
                {products?.map((product) => (
                    <Col key={product.id} md={4}>
                        <Card style={{ width: "15rem", marginBottom: "20px" }}>
                            <Card.Img variant="top" src={gloves} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    Rating: {product.rating} | Price: $ {product.price}
                                </Card.Text>
                                <Card.Text>
                                    Durability: {product.durability}
                                </Card.Text>
                                <Card.Text>
                                    Description: {product.description}
                                </Card.Text>
                                <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </div>
            <input type={'button'} value="New" />
        </div>
    );
}

export default CardB;