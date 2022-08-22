import React from 'react';
import { Link, useParams} from 'react-router-dom'
import products from './data';

const SingleProducts = () => {
const {productId} = useParams();
const product = products.find((product) => product.id === productId);
const {image, name} = product;
  return (
    <div>
    <img src={image} alt={name}></img>
      <h2>{productId}</h2>
      <Link to='/Product' className= 'btn'>Back To The Products</Link>
    </div>
  )
}

export default SingleProducts
