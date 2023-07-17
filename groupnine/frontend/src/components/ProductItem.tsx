import { Card as C1 } from "react-bootstrap";
import { Card } from "@material-ui/core";
import React from "react";


type ProductItemProps = {
    id: Number
    name: string
    price: Number
    imgUrl: string
}

function ProductItem({id, name, price, imgUrl}:ProductItemProps){
   return (<C1 >
    <C1.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover"}} ></C1.Img>
   </C1>)
}

export default ProductItem

