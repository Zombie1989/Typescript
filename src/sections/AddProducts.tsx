import { ProductItem } from '../models/ProductModel'
import ProductManage from '../components/ProductManageList'


interface AddProduct {
  title: string
  items: ProductItem[]
}


const AddProducts: React.FC<AddProduct> = ({title, items = []}) => {

  return (
    <section className="d-flex justify-content-center mt-3">
    <div className="container">
      <h3>{title}</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">

        {
            items.map( product => <ProductManage key={product.articleNumber} item={product} />)
        }

      </div>
    </div>
  </section>
  )
}

export default AddProducts 