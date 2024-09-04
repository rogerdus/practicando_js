export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

/////utility types

export type CartItem = Pick<Guitar,'id' | 'name' | 'price'> & {
    quantity: number
    image: string
}

export type GuitarID = Guitar['id']

// export type CartItem = Omit<Guitar,'description' | 'name' | 'price'> 

