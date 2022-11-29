import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { QUERY_PRODUCT, QUERY_ALL_PRODUCTS } from '../utils/queries';
import { useQuery } from '@apollo/client';


const getProduct = () => {
    const {error, loading, data} = useQuery(QUERY_ALL_PRODUCTS);

    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={products.image} />
            <Card.Body>
                <Card.Title>{products.name}</Card.Title>
                <Button variant="primary">Check me out 👀</Button>
            </Card.Body>
    </Card>
  );
}

export default getProduct;
