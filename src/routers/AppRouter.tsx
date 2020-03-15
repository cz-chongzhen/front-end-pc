import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/Home" component={Home}/>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;