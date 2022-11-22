import { useContext } from 'react'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import Breadcrumb from '../sections/Breadcrumb'
import ProductGrid from '../sections/ProductGrid'
import { ProductContext } from '../contexts/contexts'


const ProductsView = () => {
  const products = useContext(ProductContext)

  window.top!.document.title = 'Products | Fixxo.'
  
  return (
    <>
      <MainMenu />
      <Breadcrumb currentPage="Products" />
      <ProductGrid title="Products" items={products} />
      <Footer />

    </>
  )
}

export default ProductsView