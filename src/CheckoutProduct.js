/**
 *packageName    :
 * fileName       : CheckoutProduct
 * author         : ipeac
 * date           : 2022-11-06
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-11-06        ipeac       최초 생성
 */
import './CheckoutProduct.css';
import React from 'react';
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const [{basket}, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    
    return (
        <div className="checkoutProduct">
                <img className="checkoutProduct_image" src={image} alt="대체 이미지"/>
                <div className="checkoutProduct_info">
                    <p className="checkoutProduct_title">
                        {title}
                    </p>
                    <p className="checkoutProduct_price">
                        <small>💸</small>
                        <strong>{price}</strong>
                        <small>원</small>
                    </p>
                    
                    <div className="checkoutProduct_rating">
                        {
                            Array(rating)
                                .fill()
                                .map((_, i) => (
                                    <p>⭐</p>
                                ))
                        }
                    </div>
                    {!hideButton && (<button onClick={removeFromBasket}>장바구니에서 제거하기</button>)}
                </div>
            </div>
    );
}

export default CheckoutProduct;
