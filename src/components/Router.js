import React from "react";
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Login from "./Login";
import FunctionalView from "./FunctionalView";
import ProgramView from "./ProgramView";
import NotFound from "./NotFound";
import Csv from "./Csv";


const Router =() =>(
    <BrowserRouter>
        <Switch>
            <Route exact path ="/" component={Login}/>
            <Route exact path ="/login/Functional" component={FunctionalView}/>
            <Route exact path="/login/Program" component={ProgramView}/>
            <Route exact path="/login/Csv" component={Csv}/>
            <Route component ={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;

