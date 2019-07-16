import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Home from './containers/home.js';
import Project from './containers/projects.js'
import Calculator from './myFirstComp.js'
import tictactoe from './tictactoe.js'
const app =(
    <BrowserRouter>
    <div>
        <Route exact path="/"  component= {Home} ></Route>
        <Route exact path ="/projects" component={Project}></Route> 
        <Route exact path ="/calculator" component={Calculator}></Route>
        <Route exact path ="/tictactoe" component={tictactoe} ></Route>


    </div>

    </BrowserRouter>

)


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
