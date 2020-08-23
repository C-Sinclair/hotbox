import React from 'react'
import styled from 'styled-components'

const FabButton = styled.button`
    position: sticky;
    bottom: 10px;
    right: 10px;
    border-radius: 50px;
    width: 30px;
    height: 30px;
`

interface FabProps {
    onClick: () => void
    children: React.ReactChild
}

export const Fab = ({ onClick, children }: FabProps) => {
    return (
        <FabButton onClick={onClick}>
            {children}
        </FabButton>
    )
}