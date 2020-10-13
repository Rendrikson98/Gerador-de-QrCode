import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import InitialPage from './components/InitialPage';
import Teste from './components/Menu';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={InitialPage} />
                <Route path='/menu' exact component={Teste} />
            </Switch>
        </BrowserRouter>
    )
}