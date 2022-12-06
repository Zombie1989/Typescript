import React from 'react'
import { ProductItem } from '../models/ProductModel'


interface ProductDetailsType {
  product: ProductItem
}

const ProductDetails: React.FC<ProductDetailsType> = ({product}) => {
  return (
    <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <img src={product.imageName} />
    </div>
  )
}

export default ProductDetails