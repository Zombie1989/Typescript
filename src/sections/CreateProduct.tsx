import React from 'react'
import { ProductContextType, ProductContext } from '../contexts/ProductContext-2'




const CreateProduct: React.FC = () => {
  const { product, setProduct, create } = React.useContext(ProductContext) as ProductContextType
  
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="container">
      <form onSubmit={create} className="d-grid mb-5">
        <h3 className="d-flex justify-content-center display-6 mb-4 mt-4">Create Product</h3>
        <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter the name of the product..." required />
        <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter the category..." />
        <input value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} type="number" className="form-control py-2 mb-3" placeholder="Enter price" required />
        <input value={product.rating} onChange={(e) => setProduct({...product, rating: e.target.value})} type="number" className="form-control py-2 mb-3" placeholder="Enter the rating" />
        <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter the url for picture" />
        <input value={product.tag} onChange={(e) => setProduct({...product, tag: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="enter a tag" />
        <button type="submit" className="btn btn-red py-2 mt-3" onClick={refreshPage} >CREATE PRODUCT</button>
      </form>
      <form>
        
      </form>
    </div>
  )
}

export default CreateProduct