import { IOrder } from '@/types/order'
import { IProduct } from '@/types/product'
import React from 'react'

const OrderInputItem = ({ order }: { order: IOrder }) => {
    const product = order.productID as IProduct
    return (
        <option value={order._id}>{product.title}</option>
    )
}

export default OrderInputItem