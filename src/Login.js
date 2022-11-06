/**
 *packageName    :
 * fileName       : Login
 * author         : ipeac
 * date           : 2022-11-06
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-11-06        ipeac       최초 생성
 */
import './Login.css'
import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {auth} from "./Firebase";

function Login(props) {
    /*초깃값 email . setEmail > 세팅하는 값*/
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    
    const signIn = e => {
        e.preventDefault(); //새로 고침을 방지한다.
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
    };
    
    const register = e => {
        e.preventDefault(); //새로 고침을 방지한다.
        
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    //로그인 성공시 메인페이지로 이동한다.
                    history.push("/");
                }
            })
            .catch(error => alert(error.message()));
        
    };
    
    return (
            <div className="login">
                <Link to="/">
                    <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" alt="대체 이미지"/>
                </Link>
                <div className="login_container">
                    <h1> 로그인 </h1>
                    
                    <form>
                        <h5> 이메일 </h5>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="text"/>
                        
                        <h5> 비밀번호 </h5>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                        
                        <button onClick={signIn} className="login_signInButton" type={"submit"}>로그인</button>
                    </form>
                    
                    <p> 이용 약관에 동의하십니까 ㅇㅇ?</p>
                    
                    <button onClick={register} className="login_registerButton"> 회원가입 </button>
                </div>
            </div>
    );
}

export default Login;
