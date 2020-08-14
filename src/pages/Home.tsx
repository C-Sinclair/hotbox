import React from 'react'
import { Main, HeadingText, Logo, Centred, EnterIcon } from '~/components'
import { navigate } from '@reach/router'

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