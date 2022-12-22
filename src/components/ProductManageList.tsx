import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext, ProductContextType } from '../contexts/ProductContext-2'
import { ProductItem } from '../models/ProductModel'

interface ProductManageType {
    item: ProductItem
}


const ProductManage: React.FC<ProductManageType> = ({item}) => {
    const { deleteProduct } = React.useContext(ProductContext) as ProductContextType

    function refreshAndDelete() {
      window.location.reload();
      deleteProduct?.(item.articleNumber)
    }

  return (
    <div className="mt-3">
      <div className="card-img mb-3">
        <h5 className="card-title mb-3">{item.name}</h5>
        <p className="mb-1">tag - {item.tag} / category - {item.category}</p>
        <p>rating - {item.rating} / price - ${item.price}</p>
        <img src={item.imageName} alt={item.name} />
        <button type="submit" className="menu-link btn-dark-small" onClick={refreshAndDelete} ><i className="fa-solid fa-trash-can"></i></button>
        <NavLink to={"/update/"+item.articleNumber}>Update</NavLink>
      </div>
    </div>
  )
}

export default ProductManage