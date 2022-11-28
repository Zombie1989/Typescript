import CreateProduct from '../components/CreateProduct'

const AddProducts = ({title, products = []}:any) => {
  return (
    <section className="products">
    <div className="container">
      <h3>{title}</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">

        {
           products.map( (product: { articleNumber: any }) => <CreateProduct key={product.articleNumber} /*products={product}*/ />)
        }

      </div>
    </div>
  </section>
  )
}

export default AddProducts