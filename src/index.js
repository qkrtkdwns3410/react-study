import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {StateProvider} from "./StateProvider";
import reducer, {initialState} from "./Reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <React.StrictMode>
            {/*reducer 총으로 데이터를 쏴주는 역할이다.*/}
            <StateProvider initialState={initialState} reducer={reducer}>
                <App/>
            </StateProvider>
        </React.StrictMode>
);

