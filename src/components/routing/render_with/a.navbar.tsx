import React = require("react");
import NavbarComponent from "../../navbar.component";
import ROUTES from "../routes";
import RouteWithSubRoutes from "./b.sub_routes";
import { Switch, Route } from 'react-router';

/**
 * Use this component for any new section of routes (any config object that has a 'routes' property
 */
export function RenderWithNavbar({ routes = ROUTES }) {


    return (

        <Route render={props =>
            <>
                <NavbarComponent key='navigation' {...props}></NavbarComponent>
                <Switch>
                    {routes.map((route, i) => {
                        return <RouteWithSubRoutes key={route.key} {...route} />;
                    })}
                    <Route component={() => <h1>Not Found!</h1>} />
                </Switch>
            </>
        } />
    );
}