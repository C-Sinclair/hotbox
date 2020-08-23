import React from 'react'
import { navigate } from '@reach/router'
import { Main, HeadingText, Logo, Centred, EnterIcon } from '@components'

interface HomeProps {
    path: '/'
}

export const Home = ({}: HomeProps) => {
    const onEnterClick = () => navigate(`/login`)
    return (
        <Main>
            <HeadingText>Hotbox</HeadingText>
            <Centred>
                <Logo />
            </Centred>
            <EnterIcon onClick={onEnterClick}/>
        </Main>
    )
}