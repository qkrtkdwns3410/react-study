import './App.css';
import Header from './Header'
import Home from "./Home";
import Checkout from "./Checkout";
import Login from './Login'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {useEffect, useState} from "react";
import {auth} from "./Firebase";
import {useStateValue} from "./StateProvider";

function App() {
    const [{}, dispatch] = useStateValue(); // 레이어 사용
    
    /* (   첫번째,   두번째   ) => 두번째 depth , depth [ ] <- 1번만 렌더링한다. */
    /*App 자체에서 로그인 정보를 동기화해주는 역할입니다.*/
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log(authUser);
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                    
                })
            }
        })
    }, []); // 처음 렌더링될 때 한번만 실행합니다.
    
    return (
            <Router>
            <div className="App">
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/">
                        <Header/>
                        <Home/>
                    </Route>
                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                    </Route>
                </Switch>
            </div>
            </Router>
    );
}

export default App;
