import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../login/login';
import Inicio from '../index/index';
import PrivateRouter from "../auth/privaterouter";
import Productos from "../productos/inicioe";


export default function AppRoutes(){
    return( 
        <Router>
            <Switch>
                <Route exact path={["/login"]} component={Login} />
                <PrivateRouter exact path={ [ "/productos" ] } component={ Productos } />
                <Route exact path={["/",]} component={Inicio} />
                <Route exact path={["/index",]} component={Inicio} />
                <Route path={'*'} component={ () => (
                        <h1 style={{ marginTop: 300}}>
                        404
                        <br />
                        Pagina no encontrada
                        </h1>
                    ) } />
            </Switch>
        </Router>
    );
}