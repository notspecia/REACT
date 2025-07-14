export interface Pizza {
    id: number
    name: string
    description: string
    ingredients: string
    price: number
    image: string
}

export interface TableOrderRequestBody {
    pizza_id: number
    quantity: number
}

export interface TableOrderResponse {
    id: number
    table_number: number
    pizza_id: number
    quantity: number
    status: 'pending' | 'fullfilled'
    created_at: string
    updated_at: string
}