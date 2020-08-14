import React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'
import { GlobalStyle } from '~/components'
import { Home, Login, Bunker } from './pages'

const App = () => {

    return (
        <>
        <GlobalStyle />
        <Router>
            <Home path='/' />
            <Login path='/login' />
            <Bunker path='/bunker' />
        </Router>
        </>
    )
}

render(<App />, document.getElementById('root'))