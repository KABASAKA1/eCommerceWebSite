import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { Context } from '../../Context/Context'

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(Context);

    return (
        <div className='productDisplay'>
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img className='productDisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className='prices'>
                    <div className="price-old">
                        TL{product.old_price}
                    </div>
                    <div className="price-new">
                        TL{product.new_price}
                    </div>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa asperiores aperiam blanditiis adipisci quidem provident voluptatibus ipsam ad similique, est, esse autem fugiat! Odio.
                </div>
                <div className="size">
                    <h1>Select Size</h1>
                    <div className="sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button className='button' onClick={addToCart(product.id, 1)} >Add To Cart</button>
                <p className='category'><span>Category : </span> --product_category--</p>
                <p className='category'><span>Tags : </span> --product_tags--</p>
            </div>
        </div>
    )
}

export default ProductDisplay