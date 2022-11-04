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
                    <Product id={1} image="https://picsum.photos/250/250" price={3000} rating={3} title={"아이템제목1"}/>
                </div>
                <div className="home-row">
                    <Product id={2} image="https://picsum.photos/250/250" price={4000} rating={3} title={"아이템제목2"}/>
                    <Product id={3} image="https://picsum.photos/250/250" price={5000} rating={2} title={"아이템제목3"}/>
                    <Product id={4} image="https://picsum.photos/250/250" price={6000} rating={5} title={"아이템 제목4"}/>
                </div>
                <div className="home-row">
                    <Product id={5} image="https://picsum.photos/250/250" price={6000} rating={1} title={"아이템 제목5"}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
