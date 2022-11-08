/**
 *packageName    :
 * fileName       : payment
 * author         : ipeac
 * date           : 2022-11-07
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-11-07        ipeac       최초 생성
 */

import React, {useEffect, useState} from 'react';
import './Payment.css'
import {useStateValue} from "./StateProvider";
import {Link, useHistory} from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./Reducer";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "./axios";

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();
    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);
    
    const stripe = useStripe();
    const elements = useElements();
    
    useEffect(() => {
        const getClientSecret = async () => {
            const response =
                await axios({
                    method: 'post',
                    url: "/payment/create?total=${getBasketTotal(basket) * 100}"
                    
                });
            setClientSecret(response.data.clientSecret);
            
        };
        getClientSecret();
        
    }, [basket])
    
    // async  : 비동기 처리
    const handleSubmit = async (event) => {
        event.preventDefault(); // 버튼 새로고침 방지
        setProcessing(true); // 결제중이라는 글자를 띄움
        const payload = await stripe.confirmCardPayment(clientSecret, {
                                        payment_method: {
                                            card: elements.getElement(CardElement)
                
                                        }
            
                                    })
                                    .then(({paymentIntent}) => {
                                        //초깃값으로 세팅
                                        setSucceeded(true);
                                        setError(null);
                                        setProcessing("");
                                        history.replace("/orders");
                                    });
    };
    
    const handleChange = (event) => {
        setDisable(event.empty);
        setError(event.error ? event.error.message : "");
    };
    return (
        <div className={"payment"}>
                <div className={"payment_container"}>
                    <Link to={"/checkout"}>
                        <h1>장바구니로 돌아가기</h1>
                    </Link>
                    <h2>({basket?.length} 개의 상품이 존재합니다)</h2>
                </div>
                <div className={"payment_section"}>
                    <div className={"payment_title"}>
                        <h3>배달 받을 곳</h3>
                    </div>
                    <div className={"patment_address"}>
                        <p>{user?.email} 님의 주소</p>
                        <p>강원도</p>
                        <p>철원</p>
                    </div>
                </div>
                <div className={"payment_section"}>
                    <div className={"payment_title"}>
                        <h3>상품 목록</h3>
                    </div>
                    <div className={"payment_items"}>
                        {basket.map(item => (
                            <CheckoutProduct id={item.id} image={item.image} price={item.price} rating={item.rating} title={item.title}/>

                        ))}
                    </div>
                </div>
                <div className={"payment_section"}>
                    <div className={"payment_title"}>
                        <h3>결제</h3>
                    </div>
                    <div className={"payment_details"}>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className={"payment-_priceContainer"}>
                                <CurrencyFormat renderText={(value) => (
    
                                    <>
                                        <p>
                                            총액 ( {basket?.length} items ) :<strong> {value} 원 </strong>
                                        </p>
                                        <small className="subtotal_gift">
                                            <input type="checkbox"/> 체크박스입니다.
                                        </small>
                                    </>

                                )}

                                                decimalScale={2} value={getBasketTotal(basket)} displayType={"text"} thousandSeparator={true} prefix={"💸"}/>
                                <button disabled={processing || disable || succeeded}><span>{processing ? <p>결제 중 입니다</p> : "결제하기"}</span></button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default Payment;
