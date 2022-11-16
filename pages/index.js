import React from 'react';
import {client} from '../lib/client';

//components
import Product from '../components/Product';
import FooterBanner from '../components/FooterBanner';
import Herobanner from '../components/HeroBanner';

const Home = ({products, bannerData}) => {
  return (
   <>
   <Herobanner heroBanner={bannerData.length && bannerData[0]}/>

   <div className='products-heading'>
    <h2>Best Seller Product</h2>
    <p>Speakers of many variations</p>
   </div>

   <div className='products-container'>
    {products?.map((product) => product.name)}
   </div>

   <FooterBanner/>
   </>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);


return{
    props: {products, bannerData}
}
}
export default Home;