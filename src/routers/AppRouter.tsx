import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {CzContainer} from "../components/CzContainer";
import Home from "../pages/Home/Home";
//@ts-ignore
import {Login} from "../pages/Login";

const AppRouter: React.FC = () => (
    <BrowserRouter>
        <CzContainer>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/Home" component={Home}/>
                <Redirect exact from="/" to="/Home"/>
            </Switch>
        </CzContainer>
    </BrowserRouter>
);

export default AppRouter;