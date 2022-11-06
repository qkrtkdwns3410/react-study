/**
 *packageName    : ${PACKAGE_NAME}
 * fileName       : ${NAME}
 * author         : ${USER}
 * date           : ${DATE}
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * ${DATE}        ${USER}       최초 생성
 */
import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import {ShoppingBasket} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";

// eslint-disable-next-line no-unused-vars
function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    
    return (
            
            <div className="header">
            <Link to="/">
                <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" alt="아마존 로고"/>
            </Link>
            <div className="header_search">
                <input type="text" className="header_search_input"/>
                <SearchIcon className="header_search_icon"/>
            </div>
            <div className="header_nav">
                <Link className="loginPage" to="/login">
                    <div className="header_option">
                        <span className="header_option_line_one">안녕하세요!</span>
                        <span className="header_option_line_two">로그인 하기</span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className="header_option_line_one">돌아가기</span>
                    <span className="header_option_line_two">주문내역</span>

                </div>
                <div className="header_option">
                    <span className="header_option_line_one">반가워요!</span>
                    <span className="header_option_line_two">구독과 좋아요!</span>

                </div>
                <Link className="checkoutPage" to="/checkout">
                    <div className="header_option_basket">
                            <ShoppingBasket/>
                            <span className="header_option_line_two_basket_count">
                                {basket?.length}
                            </span>
                    </div>
                </Link>
                
            </div>
        </div>
    );
}

export default Header;

