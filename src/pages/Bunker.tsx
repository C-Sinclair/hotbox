import React, { useEffect } from 'react'
import { Main, HeadingText } from '~/components'

interface BunkerProps {
    path: '/bunker'
}

export const Bunker = ({}: BunkerProps) => {

    useEffect(() => {
        // fetch tree of files
    }, [])

    return (
        <Main>
            <HeadingText>Bunker</HeadingText>
        </Main>
    )
}