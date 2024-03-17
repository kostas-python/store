export interface Cart {
    items: Array<CartItem>
}



export interface CartItem {
    product: string;
    id:number;
    name: string;
    price:number;
    quantity: number;
}