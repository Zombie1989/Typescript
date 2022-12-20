import React, { useState, useContext, createContext } from "react"
import { ProductItem } from "../models/ProductModel"
import { ProductProviderProps } from "../models/ProductContextModel"

export interface ProductContextType {
    product: ProductItem
    allProducts: ProductItem[]
    featuredProduct: ProductItem[]
    saleOne: ProductItem[]
    saleTwo: ProductItem[]
    get: (articleNumber?: string) => void
    getAll: () => void
    getFeatured: (take?: number) => void
    getSaleOne: (take?: number) => void
    getSaleTwo: (take?: number) => void
    create: (e: React.FormEvent) => void
    update: (e: React.FormEvent) => void
    deleteProduct: (articleNumber: string) => void
    setProduct: any
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

const ProductProvider: React.FC<ProductProviderProps> = ({children}) => {
    const baseUrl:string = 'http://localhost:5000/api/products'
    const product_default: ProductItem = { tag: '', articleNumber: '', description: '', rating: 0, category: '', imageName: '', price: 0, name: '', }

    const [product, setProduct] = useState<ProductItem>(product_default)
    const [allProducts, setAllProducts] = useState<ProductItem[]>([])
    const [featuredProduct, setFeaturedProduct] = useState<ProductItem[]>([])
    const [saleOne, setSaleOne] = useState<ProductItem[]>([])
    const [saleTwo, setSaleTwo] = useState<ProductItem[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}`, {  
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        if (result.status === 201) {
            setProduct(product_default)
            console.log(await result.json())
        } else {
            console.log('error')
        }
    }

    const get = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(baseUrl + `/product/article/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getAll = async () => {
        const res = await fetch (baseUrl)
        setAllProducts(await res.json())
    }

    const getFeatured = async (take: number = 0) => {
        let url = baseUrl + `/featured`

        if (take !== 0)
            url  += `/${take}`

        const res = await fetch(url)
        setFeaturedProduct(await res.json())

    }

    const getSaleOne = async (take: number = 0) => {
        let url = baseUrl + `/saleOne`

        if (take !== 0)
            url  += `/${take}`

        const res = await fetch(url)
        setSaleOne(await res.json())
    }

    const getSaleTwo = async (take: number = 0) => {
        let url = baseUrl + `/saleTwo`

        if (take !== 0)
            url  += `/${take}`

        const res = await fetch(url)
        setSaleTwo(await res.json())
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

    const deleteProduct = async (articleNumber: string) => {
        const result = await fetch (`${baseUrl}/${articleNumber}`, {
            method: 'delete',
        })
        if(result.status === 204)
            setProduct(product_default)
    }

    return (
        <ProductContext.Provider value={{ product, allProducts, get, getAll, featuredProduct, saleOne, saleTwo, getFeatured, getSaleOne, getSaleTwo, create, update, deleteProduct, setProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider