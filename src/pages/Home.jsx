import '../App.css';
import React from 'react';
import { banners } from '../assets/banners';
import { products } from '../assets/products'
import { FooterBanner, HeroBanner, Product, Layout} from '../components'

function Home() {

  // const getServerSideProps = async () => {
  //   const query = '*[_type == "product"]';
  //   const products = await client.fetch(query);

  //   const bannerQuery = '*[_type == "banner"]';
  //   const bannerData = await client.fetch(bannerQuery);

  //   return {
  //     props: { products, bannerData }
  //   };
  // };

  return (
    <>
      <HeroBanner heroBanner={banners.length && banners[0]}/>
      {console.log(banners[0])}
      <div className='products-heading'>
        <h2>Best Selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {products.map(
          (product) => <Product key={product._id} product={product}/>
        )}
      </div>
      <FooterBanner footerBanner={banners.length && banners[0]}/>
    </>
  );

}

export default Home;
