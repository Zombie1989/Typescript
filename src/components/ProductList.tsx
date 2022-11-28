import React, { useEffect } from 'react'
import { IProductContext, ProductContext } from '../contexts/ProductContext-2'
import { Product } from '../models/ProductModel'

const ProductList = () => {
    const { products, getAll, deleteProduct } = React.useContext(ProductContext) as IProductContext

    useEffect(() => {
        getAll()
    }, [getAll])

    const removeProduct = (articleNumber:number) => {
        removeProduct(articleNumber)
    }

    return (
        <>
            <h3 className="display-6 mb-4">List of Products</h3>
            {
                products.map((product: Product) => (<div onClick={() => removeProduct(product.articleNumber)} key={product.articleNumber} className="mb-3"></div>))
            }
        </>
    )
} 

export default ProductList