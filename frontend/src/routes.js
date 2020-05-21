import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Frontpage from './pages/Frontpage';
import Processing from './pages/Processing';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Frontpage} />
                <Route path="/processing" component={Processing} />
            </Switch>
        </BrowserRouter>
    );
}