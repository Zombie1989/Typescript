import { createContext } from 'react'
import { ProductItem } from '../models/ProductModel'

export const ProductContext = createContext<ProductItem[] | null>(null); 
export const FeaturedProductsContext = createContext<ProductItem[] | null>(null);
export const OnSaleProductsContext = createContext<ProductItem[] | null>(null);