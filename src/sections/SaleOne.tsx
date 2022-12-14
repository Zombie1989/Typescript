import React from 'react'
import { Link } from 'react-router-dom'
import saletwenty from '../assets/images/sale29.png'
import ProductCard from '../components/ProductCard'
import { ProductItem } from '../models/ProductModel'

interface SaleDetailsType {
  title: string
  items: ProductItem[]
}

const saleOne: React.FC<SaleDetailsType> = ({title, items = []}) => {
  return (
    <div className="sale29">
        <div className="container">
            <div className="image">
              <img src={saletwenty} alt="picture" />
              <div className="image-text">
                <h1>{title}</h1>
                <Link to="/Sale">
                  <button className="btn-white">
                    <div className="btn-box-left-dark"></div>
                    FLASH SALE
                    <div className="btn-box-right-dark"></div>
                  </button>
                </Link>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-2 g-2 ">

                {
                  items.map( product => <ProductCard key={product.articleNumber} item={product} />)
                }
                  
            </div>
        </div>
    </div>
  )
}

export default saleOne
