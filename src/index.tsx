import React from 'react'
import { render } from 'react-dom'
import Amplify from 'aws-amplify'
import { GlobalStyle } from './modules/shared/view'
import { Router } from './modules/shared/routes'
import { Providers } from './modules/shared/providers'
//@ts-ignore
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

const App = () => {
    return (
        <Providers>
            <GlobalStyle />
            <Router/>
        </Providers>
    )
}

render(<App />, document.getElementById('root'))