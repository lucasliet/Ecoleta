import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
    return (
        <BrowserRouter >
            <Route component={Home} path="/Ecoleta" exact/>
            <Route component={CreatePoint} path="/Ecoleta/create-point" />
        </BrowserRouter>
    )
};
export default Routes;