import * as React from 'react';
import { Switch, Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import HomeScreen from '../../screens/home.screen';
import LoginScreen from '../../screens/login.screen';
import NavbarComponent from '../navbar.component';




const ROUTES = [
    //Text Message Sign Up
    {
        path: '/login', key: 'LOGIN', exact: true, component: LoginScreen
    },
    { 
        path: '/', key: 'CLASSIFIEDS', exact: true, component: HomeScreen 
    },
    { 
        path: '/', key: 'HOME', exact: false, component: () => <Redirect to={'/'} />
     }


];

export default ROUTES;








