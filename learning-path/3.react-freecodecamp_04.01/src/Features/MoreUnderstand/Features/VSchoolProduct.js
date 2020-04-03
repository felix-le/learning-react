import React from 'react';
import ProductData from './components/ProductData';
import ProductItem from './components/ProductItem';


function VSchoolProduct() {

  const ProducComponents = ProductData.map((item, i) => <ProductItem key={i} product={item} />)
  // console.log(ProducComponents)
  return (
    <div>
      {ProducComponents}
    </div>
  )
}

export default VSchoolProduct
