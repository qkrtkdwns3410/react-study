import './App.css';
import Header from './Header'
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Home/>
                    </Route>
                    <Route path="/checkout">
                        <Header/>
                        <h1>장바구니 페이지 입니다.</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    
    );
}

export default App;
