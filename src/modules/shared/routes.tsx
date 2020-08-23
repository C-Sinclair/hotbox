import React from 'react'
import { Router as ReachRouter } from '@reach/router'
import { compose, map, values } from 'ramda'
import { Login } from "../auth";
import { Home } from "../home";
import { Store } from "../store";

interface Route {
    path: string
    View: (props: any) => JSX.Element
}

export const Routes: { [key: string]: Route } = {
    Home: {
        path: '/',
        View: Home
    },
    Login: {
        path: '/login',
        View: Login
    },
    Store: {
        path: '/store',
        View: Store
    },
}

const renderRoute = ({ View, path }: Route) => <View path={path} />

export const Router = () => (
    <ReachRouter>
        {compose(
            map(renderRoute), 
            values
        )(Routes)}
    </ReachRouter>
)