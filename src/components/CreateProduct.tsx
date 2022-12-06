import React, { useEffect } from 'react'
import { ProductContextType, ProductContext } from '../contexts/ProductContext-2'



const CreateProduct = () => {
  const { product, setProduct, get, update } = React.useContext(ProductContext) as ProductContextType

  useEffect(() => {

  }, [get])

  return (
    <form onSubmit={update} className="d-grid mb-5">
      <h3 className="display-6 mb-4">Create Product</h3>
      <input value={product.articleNumber} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter the articlenumber..."/>
      <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter the name of the product..." />
      <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter the category..." />
      <input value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter the rating" />
      <input value={product.rating} onChange={(e) => setProduct({...product, rating: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter the rating" />
      <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter the url for picture" />
      <button type="submit" className="btn btn-sucess py-2 mt-3">CREATE PRODUCT</button>
    </form>
  )
}

export default CreateProduct