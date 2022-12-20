import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext, ProductContextType } from '../contexts/ProductContext-2'
import { ProductItem } from '../models/ProductModel'

interface ProductManageType {
    item: ProductItem
}


const ProductManage: React.FC<ProductManageType> = ({item}) => {
    const { deleteProduct, update } = React.useContext(ProductContext) as ProductContextType

    function refreshAndDelete() {
      window.location.reload();
      deleteProduct?.(item.articleNumber)
    }

  return (
    <div className="mt-3">
        <div className="card-img mb-2">
            <h5 className="card-title">{item.name}</h5>
            <p>tag - {item.tag}</p>
            <img src={item.imageName} alt={item.name} />
            <button type="submit" className="menu-link" onClick={refreshAndDelete} ><i className="fa-solid fa-trash-can"></i></button>
            <NavLink to={"/updateProducts/"+item.articleNumber}>Update</NavLink>
        </div>
    </div>
  )
}

export default ProductManage