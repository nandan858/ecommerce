import React from 'react';

//components
import Product from '../components/Product';
import FooterBanner from '../components/FooterBanner';
import Herobanner from '../components/HeroBanner';

const Home = () => {
  return (
   <>
   <Herobanner/>

   <div className='products-heading'>
    <h2>Best Selling Product</h2>
    <p>Speakers of many variations</p>
   </div>

   <div className='products-container'>
    {['Product 1','Product 2'].map((product) => product)}
   </div>

   <FooterBanner/>
   </>
  )
}

export default Home;