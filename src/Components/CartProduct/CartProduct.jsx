import React from 'react'
import './CartProduct.css'
import remove_icon from '../Assets/cart_cross_icon.png'


const CartProduct = (probs) => {
    const { image, name, price, amount } = probs;

    return (
        <div>
            <div className="format">
                <img src={image} alt="" className="cartIcon-productIco" />n
                <p>{name}</p>
                <p>{price}</p>
                <button className='quantity'></button>
                <p>{amount}</p>
                <img src={remove_icon} alt="" />
            </div>
            <hr />
        </div>
    )
}

export default CartProduct