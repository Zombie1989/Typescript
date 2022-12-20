import { useEffect } from 'react'
import MainMenu from '../sections/MainMenu'
import AddProducts from '../sections/AddProducts'
import Footer from '../sections/Footer'
import CreateProduct from '../components/CreateProduct'
import { ProductContextType, useProductContext } from '../contexts/ProductContext-2'


const ManageProducts: React.FC = () => {
  const {allProducts, getAll} = useProductContext() as ProductContextType

  useEffect(() => {
    getAll()
  }, [])

  return (
    <>
      <MainMenu />
      <CreateProduct />
      <AddProducts title={'Manage Products'} items={allProducts} />
      <Footer />
    </>
  )
}

export default ManageProducts