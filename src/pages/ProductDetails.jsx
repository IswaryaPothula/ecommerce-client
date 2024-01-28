import React, { useState } from 'react'
import { products } from '../assets/products'
import { useParams} from 'react-router-dom'
import {Product } from '../components'
import {
    AiOutlineMinus, AiOutlinePlus, AiFillStar,
    AiOutlineStar
} from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';

function ProductDetails() {
    const { productType } = useParams();
    
    const similarProducts = products.filter((product)=> {
        var split = productType.split(' ')
        return product.slug.includes(split[0])
    })
    var product = products.filter((p) => {
        return p.slug === productType;
    })
    const { Image, name, price, details } = product[0];
    const [index, setIndex] = useState(0);
    const {decQty, incQty, qty, onAdd} = useStateContext();

    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={Image && Image[index]} alt='Image' className='product-detail-image'/>
                    </div>
                    <div className='small-images-container'>
                        {Image?.map((image, i) => (
                            <img key={i}
                                src={image}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                <div className='product-details-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(30)</p>
                    </div>
                    <h4>Details:</h4>
                    <p>{details}</p>
                    <p className="price">Rs. {price}</p>
                    <div className="quantity">
                        <h3>Quantity:</h3>
                        <p className='quantity-desc'>
                            <span className='minus'
                                onClick={decQty}><AiOutlineMinus /></span>
                            <span className="num" onClick="">{qty}</span>
                            <span className='plus' onClick={incQty}><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button type='button'
                        className='add-to-cart'
                        onClick={()=>onAdd(product[0], qty)}>Add to Cart</button>
                        <button type='button'
                        className='buy-now' 
                        onClick="">BUY NOW</button>
                    </div>
                </div>
            </div>

            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {similarProducts.map((item) => (
                            <Product key={item.id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails
