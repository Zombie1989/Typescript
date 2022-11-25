import {createContext} from 'react'
import { Product } from '../models/ProductModel'

export const ProductContext = createContext<Product[] | null>(null); 
export const FeaturedProductsContext = createContext<Product[] | null>(null);
export const OnSaleProductsContext = createContext<Product[] | null>(null);