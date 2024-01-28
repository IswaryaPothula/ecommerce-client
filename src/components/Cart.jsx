import React, { useRef } from 'react';
import {
  AiOutlineMinus, AiOutlinePlus, AiOutlineLeft,
  AiOutlineShopping
} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom';

import { useStateContext } from '../context/StateContext';

function Cart() {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, 
    setShowCart, toggleCartItemsQuantity, onRemove } = useStateContext();

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button type='button'
          className='cart-heading'
          onClick={() => {
            setShowCart(false)
          }}>
          <AiOutlineLeft />
          <span className='heading'>Your cart</span>
          <span className='cart-num-items'>({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link to="/">
              <button type='button'
                onClick={() => setShowCart(false)}
                className='btn'>
                Continue shopping
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className='product' key={item.id}>
              <img src={item?.Image[0]}
                className='cart-product-image' />
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <h4>Rs.{item.price}</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                    <p className='quantity-desc'>
                      <span className='minus'
                        onClick={()=>toggleCartItemsQuantity(item.id, 'dec')}><AiOutlineMinus /></span>
                      <span className="num" onClick="">{item.quantity}</span>
                      <span className='plus' onClick={() => toggleCartItemsQuantity(item.id, 'inc') }><AiOutlinePlus /></span>
                    </p>
                  </div>
                  <button type='button'
                  className='remove-item'
                  onClick={()=> onRemove(item)}>
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total' >
              <h3>Subtotal: </h3>
              <h3>Rs{totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <button type='button' className='btn'
              onClick="">
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
