import React from 'react';
import './Product.css'

function Product({id, title, image, price, rating}) {
    
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>가격</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>
                <div className="product-rating">
                    {
                        Array(rating)
                            .fill()
                            .map(() => (
                                <p>☢️</p>
                            ))
                    }
           
                    
                </div>
            </div>
                <img className="product-img" src={image} alt="상품"/>
                <button>🛒</button>
        </div>
    
    );
}

export default Product;
