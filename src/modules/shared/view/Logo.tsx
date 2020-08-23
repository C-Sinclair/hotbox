import React from 'react'
import styled, { keyframes } from 'styled-components'
//@ts-ignore
import logo from '../../../assets/logo.png'

export interface LogoProps {
    hide?: boolean
}

const LogoImg: React.FC<LogoProps> = (props) => (
    <img src={logo} {...props} />
)

const lazySusan = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`

export const Logo = styled<React.FC<LogoProps>>(LogoImg)`
    transition: opacity 0.2s ease 0.6s;
    animation: ${lazySusan} 10s linear infinite;
    ${({ hide }) => hide && `
        animation-play-state: paused;
        opacity: 0;
    `}
`