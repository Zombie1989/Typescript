import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import ProductDetails from '../sections/ProductDetails'

const ProductDetailsView = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
            setProduct(await result.json())
        }
        fetchData()
    }, [])

    return (
        <>
        <MainMenu />
        <ProductDetails product={product} />
        <Footer />
        </>
    )
}

export default ProductDetailsView