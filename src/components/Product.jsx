import React from 'react'
import {Link} from 'react-router-dom'

function Product({product:{Image, name, price, slug}}) {

  return (
    <div>
      <Link to={`product/${slug}`}>
        <div className='product-card'>
          <img 
            src={Image && Image[0]} 
            width={250}
            height={250}
            className='product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>Rs.{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
