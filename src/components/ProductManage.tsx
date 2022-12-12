import React from 'react'
import { ProductItem } from '../models/ProductModel'

interface ProductManageType {
    item: ProductItem
}


const ProductManage: React.FC<ProductManageType> = ({item}) => {
    const remove  = () => {

    }

    const update = () => {

    }

  return (
    <div className="col">
        <div className="card-img">
            <h5 className="card-title">{item.name}</h5>
            <img src={item.imageName} alt={item.name} />
            <button onClick={remove} className="menu-link"><i className="fa-solid fa-trash-can"></i></button>
            <button onClick={update} className="menu-link"><i className="fa-solid fa-gear"></i></button>
        </div>
    </div>
  )
}

export default ProductManage