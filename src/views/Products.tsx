import { useEffect } from 'react'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import Breadcrumb from '../sections/Breadcrumb'
import ProductGrid from '../sections/ProductGrid'
import { ProductContextType, useProductContext } from '../contexts/ProductContext-2'

const ProductsView: React.FC = () => {
  const {allProducts, getAll} = useProductContext() as ProductContextType

  useEffect(() => {
    getAll()
  }, [])

  window.top!.document.title = 'Products | Fixxo.'
  
  return (
    <>
      <MainMenu />
      <Breadcrumb currentPage="Products" />
      <ProductGrid title="Products" items={allProducts} />
      <Footer />

    </>
  )
}

export default ProductsView