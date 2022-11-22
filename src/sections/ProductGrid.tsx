import ProductCard from '../components/ProductCard'


const ProductGrid = ({title, items = []}:any) => {

  return (
    <section className="product-grid">
      <div className="container">
        <h3>{title}</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">

          {
             items.map( (product: { articleNumber: any }) => <ProductCard key={product.articleNumber} item={product} />)
          }

        </div>
      </div>
    </section>
  )
}

export default ProductGrid