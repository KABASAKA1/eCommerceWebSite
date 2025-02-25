import React from 'react'
import './ReleatedProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const ReleatedProduct = () => {
    return (
        <div className='releatedProduct'>
            <h1>Releated Product</h1>
            <hr />
            <div className="items">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />

                })}
            </div>

        </div>
    )
}

export default ReleatedProduct