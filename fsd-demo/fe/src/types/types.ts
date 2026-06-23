export interface User {
    _id: string
    email: string
    name: string
}

export interface AuthState {
    user: User | null
    loading: boolean
}

export interface Product {
    _id: string
    name: string
    price: number
    images: {
        url: string
    }
}

export interface ProductState {
    products: Product[]
    loading: boolean
}

export interface CartItem {
    productId: string
    name: string
    price: number
    quantity: number
}

export interface CartState {
    items: CartItem[]
}