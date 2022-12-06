import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContextType, useProductContext } from '../contexts/ProductContext-2'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import ProductDetails from '../sections/ProductDetails'

const ProductDetailsView: React.FC = () => {
    const {id} = useParams<string>()
    const productContext = useProductContext() as ProductContextType

    useEffect(() => {
        productContext.get(id)
    }, [])

    return (
        <>
        <MainMenu />
        <ProductDetails product={productContext.product} />
        <Footer />
        </>
    )
}

export default ProductDetailsView