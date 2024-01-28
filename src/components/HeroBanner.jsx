import React from 'react'

function HeroBanner({heroBanner}) {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beate-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={heroBanner.image} alt="headphones" 
        className="hero-banner-image" />
        <div>
          <a href='/product/ID'>
            <button type='button'>{heroBanner.buttonText}</button>
          </a>
          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
