import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle, Main, HeadingText, Logo, Centred } from '~/components'

const App = () => {
    
    return (
        <>
        <GlobalStyle />
        <Main>
            <HeadingText>Hotbox</HeadingText>
            <Centred>
                <Logo />
            </Centred>
        </Main>
        </>
    )
}

render(<App />, document.getElementById('root'))