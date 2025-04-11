import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum.jsx';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox.jsx';
import Relatedproducts from '../components/RelatedProducts/Relatedproducts.jsx';
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((prod) => prod.id === Number(productId));
  return (
    <section>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <Relatedproducts />
    </section>
  )
}

export default Product
