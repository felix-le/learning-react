import React from 'react'

function ProductItem(props) {
  const { id, name, price, description } = props.product
  return (
    <div>
      <h2>Name: {`${id} ${name}`}</h2>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  )
}

export default ProductItem;
