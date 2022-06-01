import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./product.styles.css";
import Rating from "../rating/rating.component";

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top'  />
        </Link>

        <Card.Body className="my-2 p-0 product_name">
        <Link to={`/product/${product._id}`} className='btn-light cardlink'>
            <Card.Title as='div'>
               <strong>{product.name}</strong>
            </Card.Title>
        </Link>

        <Card.Text as='div'>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>

        <Card.Text as='h3' className="price">
            ${product.price}
        </Card.Text>

        </Card.Body>
    </Card>    
  );
};

export default Product;
