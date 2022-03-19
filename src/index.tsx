import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store/store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {AboutPage} from "./Components/Pages/AboutPage/AboutPage";
import {MainPage} from './Components/Pages/MainPage/MainPage';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NotFoundPage} from "./Components/Pages/NotFoundPage/NotFoundPage";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
