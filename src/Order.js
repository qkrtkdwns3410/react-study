import React from 'react';
import moment from "moment";
import './Order.css'
import CheckoutProduct from "./CheckoutProduct";

function Order({order}) {
    return (
        <div className="order">
            <h2> 주문 </h2>
            <p>{moment.unix(order.data.created)
                      .format()}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct id={item.id} title={item.title} rating={item.rating} price={item.price} image={item.image} hideButton/>
            ))}
        </div>
    );
}

export default Order;
