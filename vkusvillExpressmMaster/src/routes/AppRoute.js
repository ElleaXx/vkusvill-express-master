import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Main, Second } from '../pages';
const AppRoute = () => {
    return (
        <Switch>
            <Route
                exact
                path="/"
                component={Main}
            />
            <Route
                exact
                path="/second"
                component={Second}
            />
        </Switch>
    )
}
export default AppRoute;