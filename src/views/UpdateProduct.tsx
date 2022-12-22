import React, { useEffect } from 'react'
import { ProductContextType, useProductContext } from '../contexts/ProductContext-2'
import MainMenu from '../sections/MainMenu'
import UpdateProductSection from '../sections/UpdateProducts'

const UpdateProduct: React.FC = () => {

  const {product, get} = useProductContext() as ProductContextType

  useEffect(() => {
    get()
  }, [])

  return (
    <>
      <MainMenu />
      <UpdateProductSection />
    </>
  )
}

export default UpdateProduct