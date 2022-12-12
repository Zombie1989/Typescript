import { ProductItem } from "./ProductModel"

export interface CartItem {
    articleNumber: string
    product: ProductItem
    quantity: number
}