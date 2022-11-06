import React from 'react';
import './Product.css'
import {useStateValue} from "./StateProvider";

function Product({id, title, image, price, rating}) {
    
    const [{basket}, dispatch] = useStateValue();
    
    const addToBasket = () => {
        dispatch(
                {
                    type: "ADD_TO_BASKET",
                    item: {
                        id: id,
                        title: title,
                        image: image,
                        price: price,
                        rating: rating
                    }
                }
        )
    };
    console.log('장바구니 담기 완료', basket)
    return (
            <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>가격 </small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>
                <div className="product-rating">
                    {
                        Array(rating)
                                .fill()
                                .map(() => (
                                        <p>⭐️</p>
                                ))
                    }
           
                    
                </div>
            </div>
                <img className="product-img" src={image} alt="상품"/>
                <button onClick={addToBasket}>🛒</button>
        </div>
    
    );
}

export default Product;
