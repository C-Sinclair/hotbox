import React, { useState } from 'react'
import { render } from 'react-dom'
import { GlobalStyle, Main, HeadingText, Logo, Centred, EnterIcon } from '~/components'

const App = () => {

    const [logoHidden, setLogoHidden] = useState(false)

    const onEnterClick = () => {
        setLogoHidden(true)
    }
    
    return (
        <>
        <GlobalStyle />
        <Main>
            <HeadingText>Hotbox</HeadingText>
            <Centred>
                <Logo hide={logoHidden} />
            </Centred>
            <EnterIcon onClick={onEnterClick}/>
        </Main>
        </>
    )
}

render(<App />, document.getElementById('root'))