import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import { pluralize } from "../../utils/helpers"

function individualProduct(item) {
  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Button variant="primary">Check me out 👀</Button>
            </Card.Body>
    </Card>
    // <div className="card px-1 py-1">
    //   <Link to={`/products/${_id}`}>
    //     <img
    //       alt={name}
    //       src={`/images/${image}`}
    //     />
    //     <p>{name}</p>
    //   </Link>
    //   <div>
    //     <span>${price}</span>
    //   </div>
    //   <button>Add to cart</button>
    // </div>
  );
}

export default individualProduct;
