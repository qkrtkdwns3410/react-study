import React, {useEffect, useState} from 'react';
import {useStateValue} from "./StateProvider";
import {db} from "./Firebase";
import Order from "./Order";
import './Orders.css'

function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            db.collection('users') // db collection get
              .doc(user?.uid)
              .collection('orders') // db collection get
              .orderBy('created', 'desc') //만들어진 순서대로 내림차순 정렬
              .onSnapshot(snapshot => {
                  setOrders(snapshot.docs.map(doc => ({
                      id: doc.id,
                      data: doc.data()
                  })));
                
              });
        } else {
            // 유저가 아니라면..
            setOrders([])// 구매내역을 비워준다.
        }
    }, [user]);
    
    return (
        <div className="orders">
            <h1> 주문 내역 </h1>
            <div className="orders_order">
                {orders?.map(order => (
                    <Order order={order}/>
                ))}
            </div>
        </div>
    );
}

export default Orders;
