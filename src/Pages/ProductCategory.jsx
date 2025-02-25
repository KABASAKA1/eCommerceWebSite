import React, { useContext } from 'react'
import './CSS/ProductCategory.css'
import { Context } from '../Context/Context'
import Item from '../Components/Item/Item.jsx'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'

const ProductCategory = (props) => {
    const { all_product } = useContext(Context);


    return (
        <div className='product-category'>
            <img className='category_banner' src={props.banner} alt="" />
            <div className="category-indexSort">
                <p><span>Showing 1-12 </span>out of 32 products.</p>
                <div className="category_sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="category_products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                })}
            </div>
            <div className='category_loadmore'>
                Explore More
            </div>
        </div>
    )
}

export default ProductCategory