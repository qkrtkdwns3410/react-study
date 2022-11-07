import React from "react";
import CurrencyFormat from "react-currency-format";
import './SubTotal.css';
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./Reducer";
import {useHistory} from "react-router-dom";

function SubTotal() {
    const [{basket}, dispatch] = useStateValue();
    
    const history = useHistory();
    
    return (
            <div className="subtotal">
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
                <button onClick={e => history.push('/payment')}>결제하기</button>
                
        </div>
    );
}

export default SubTotal;
