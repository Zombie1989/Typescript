import React, { useEffect } from 'react'
import { ProductContextType, ProductContext } from '../contexts/ProductContext-2'
import { ProductItem } from '../models/ProductModel'

const ProductList = () => {
    const { allProducts, getAll, deleteProduct } = React.useContext(ProductContext) as ProductContextType

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
                allProducts.map((product: ProductItem) => (<div onClick={() => deleteProduct(product.articleNumber)} key={product.articleNumber} className="mb-3"></div>))
            }
        </>
    )
} 

export default ProductList