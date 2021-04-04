import React, {Component} from 'react';
import './App.css';
import SignIn from './components/login.js';
import Main from './components/main.js';
import {BrowserRouter,Route,Link,Switch} from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import Search from './components/Search.js';
import PortDeail from './components/portDetail.js'
import PortAddStock from './components/portAddStock.js'
function App(){
    console.log(2);
    return(
        <>
        <CssBaseline/>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path= "/" component = {SignIn}/>
                    <Route path = "/Main" component={Main}/>
                    <Route path = "/Search" component={Search}/>
                    <Route path = "/Detail" component={PortDeail}/>
                    <Route path = "/AddStock" component={PortAddStock}/>
                </Switch>
            </div>
        </BrowserRouter>
        </>
        
    );
}


export default App;

