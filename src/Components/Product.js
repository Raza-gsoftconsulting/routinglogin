import React from 'react'
import {Link} from 'react-router-dom'
import products from '../Components/data'

const Product = ({user}) => {
  return (
  <div className="products">
    <h1>Products list</h1>
    {products.map((Product)=>{
      return (
      <article key={Product.id}>
      <h4>{Product.name}</h4>
      <Link to={`/Product/${Product.id}`}>More Info</Link>
      </article>
      );
    })}
    </div>
  )
}

export default Product;