import React from 'react'

function FooterBanner({footerBanner}) {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{footerBanner.disccount}</p>
          <h3>{footerBanner.largeText1}</h3>
          <h3>{footerBanner.largeText2}</h3>
          <p>{footerBanner.saleTime}</p>
        </div>
        <div className='right'>
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
          <a href={`product/Id`}>
            <button type='button'>{footerBanner.buttonText}</button>
          </a>
        </div>

        <img 
          src={footerBanner.image}
          className='footer-banner-image'
        />
      </div>
    </div>
  )
}

export default FooterBanner
