import React, { useContext } from 'react'
import './CartItems.css'
import { Context } from '../../Context/Context'
import remove_icon from '../Assets/cart_cross_icon.png'
import CartProduct from '../CartProduct/CartProduct'
import Item from '../Item/Item'

const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getCartProduct } = useContext(Context);

    return (
        <div className='cartItems'>
            <div className='format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
                {cartItems.map((product, i) => (
                    <CartProduct key={i} image={product.image} name={product.name} price={product.price} amount={product.amount} />
                ))}
            </div>
        </div>
    )
}

export default CartItems