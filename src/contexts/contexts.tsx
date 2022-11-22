import {createContext} from 'react'

interface ProductContext {
    articleNumber: any
    description?: string,
    rating: number,
    category: string,
    imageName: string,
    price: number,
    name: string,
}

interface FeaturedProductsContext {
    articleNumber: any
    description?: string,
    rating: number,
    category: string,
    imageName: string,
    price: number,
    name: string,
}

interface OnSaleProductsContext {
    articleNumber: any
    description?: string,
    rating: number,
    category: string,
    imageName: string,
    price: number,
    name: string,
}

export const ProductContext = createContext<ProductContext[] | null>(null); 
export const FeaturedProductsContext = createContext<FeaturedProductsContext[] | null>(null);
export const OnSaleProductsContext = createContext<OnSaleProductsContext[] | null>(null);