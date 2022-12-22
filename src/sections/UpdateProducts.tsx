import React, { useEffect } from 'react'
import { ProductContextType, ProductContext } from '../contexts/ProductContext-2'
import { useLocation } from 'react-router-dom'




const UpdateProduct: React.FC = () => {

  const { product, setProduct, update, get } = React.useContext(ProductContext) as ProductContextType

  
  const articleNumber = useLocation().pathname.split("/")[2];
  useEffect(() => {
  get(articleNumber)
}, [])
  
  function refreshPage() {
    window.location.reload();
  }


  return (
    <div className="container">
      <form onSubmit={update} className="d-grid mb-5">
        <h3 className="display-6 mb-4">Update Product</h3>
        <input value={product.articleNumber} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type="hidden" className="form-control py-2 mb-3" />
        <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter the name of the product..." />
        <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter the category..." />
        <input value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter price" />
        <input value={product.rating} onChange={(e) => setProduct({...product, rating: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter the rating" />
        <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter the url for picture" />
        <input value={product.tag} onChange={(e) => setProduct({...product, tag: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="enter a tag" />
        <button type="submit" className="btn btn-red py-2 mt-3" onClick={refreshPage}>UPDATE PRODUCT</button>
      </form>
    </div>
  )
}

export default UpdateProduct