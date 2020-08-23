import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from '@components'
import { Router } from '@routes'
import Amplify from 'aws-amplify'
import { Providers } from '~/shared/providers'
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