import { Link } from 'react-router-dom'
import saletwenty from '../assets/images/sale49.png'
import ProductCard from '../components/ProductCard'

const sale29 = ({title, items = []}:any) => {
  return (
    <div className="sale49">
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-2 g-2 ">

                {
                items.map( (product: { articleNumber: any }) => <ProductCard key={product.articleNumber} item={product} />)
                }
                
            </div>
            <div className="image">
              <img src={saletwenty} alt="picture" />
              <div className="image-text">
                <h1>{title}</h1>
                <Link to="/sale">
                  <button className="btn-white">
                    <div className="btn-box-left-dark"></div>
                    FLASH SALE
                    <div className="btn-box-right-dark"></div>
                  </button>
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default sale29
