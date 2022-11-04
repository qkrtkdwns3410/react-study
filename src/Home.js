/**
 *packageName    :
 * fileName       : Home
 * author         : ipeac
 * date           : 2022-11-03
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-11-03        ipeac       최초 생성
 */
import React from 'react';
import './Home.css'
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home_image" src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg" alt=""/>
                <div className="home-row">
                    <Product/>
                </div>
                <div className="home-row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className="home-row">
                    <Product/>
                </div>
            </div>
        </div>
    );
}

export default Home;
