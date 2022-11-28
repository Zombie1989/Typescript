import React, { useState, useContext, createContext } from "react"
import { Product, ProductRequest } from "../models/ProductModel"
import { ProductProviderProps } from "../models/ProductContextModel"

export interface IProductContext {
    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    productRequest: ProductRequest
    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
    products: Product[]
    create: (e: React.FormEvent) => void
    get: (articleNumber: number) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    deleteProduct: (articleNumber: number) => void
}

export const ProductContext = createContext<IProductContext | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

const ProductProvider = ({children} : ProductProviderProps) => {
    const baseUrl = 'http://localhost:5000/api/products'
    const product_default: Product = { articleNumber: 0, rating: 0, category: '', imageName: '', price: 0, name: '', }
    const productRequest_default: ProductRequest = { articleNumber: 0, rating: 0, category: '', imageName: '', price: 0, name: '', }

    const [product, setProduct] = useState<Product>(product_default)
    const [productRequest, setProductRequest] = useState<ProductRequest>(productRequest_default)
    const [products, setProducts] = useState<Product[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}`, {  
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productRequest)
        })
        if (result.status === 201) {
            setProductRequest(productRequest_default)
            console.log(await result.json())
        } else {
            console.log('error')
        }
    }

    const get = async (articleNumber: number) => {
        const result = await fetch(`${baseUrl}/${articleNumber}`)
        if (result.status === 200)
            setProduct(await result.json())
    }

    const getAll = async () => {
        const result = await fetch (`${baseUrl}`)
        if (result.status === 200)
            setProducts(await result.json())
    }

    const update = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}/${product.articleNumber}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        if (result.status === 200)
            setProduct(await result.json())
    }

    const deleteProduct = async (articleNumber: number) => {
        const result = await fetch (`${baseUrl}/${articleNumber}`, {
            method: 'delete',
        })
        if(result.status === 204)
            setProduct(product_default)
    }

    return (
        <ProductContext.Provider value={{ product, setProduct, productRequest, setProductRequest, products, create, get, getAll, update, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider