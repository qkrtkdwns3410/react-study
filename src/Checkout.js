import React from 'react';
import './Checkout.css';
import SubTotal from "./SubTotal";
import CheckoutProduct from "./CheckoutProduct"
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./Reducer";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    
    return (
            <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://ssl.pstatic.net/melona/libs/1420/1420299/3519b58a660a51484e0c_20221103160001979.jpg" alt="대체 이미지"/>
                <div>
                    <h2 className="checkout_title">
                        장바구니입니다
                    </h2>
                    {basket.map(item => (
                            <CheckoutProduct id={item.id} image={item.image} price={item.price} rating={item.rating} title={item.title}/>
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <SubTotal/>
            </div>
            
        </div>
    
    )
}

export default Checkout;
