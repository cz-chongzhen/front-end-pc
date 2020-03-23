import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Login} from "../pages/Login";
import PageRouter from "./PageRouter";

const AppRouter: React.FC<any> = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/page" component={PageRouter}/>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;