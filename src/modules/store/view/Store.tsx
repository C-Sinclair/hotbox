import React from 'react'
import { Main, HeadingText, Fab } from '@components'
import { RiUploadCloud2Line as UploadIcon } from 'react-icons/ri'
import { useUploadDialog } from '../logic'

interface StoreProps {
    path: '/bunker'
}

export const Store = ({}: StoreProps) => {
    const showUpload = useUploadDialog()

    return (
        <Main>
            <HeadingText>Bunker</HeadingText>
            <Fab onClick={showUpload}>
                <UploadIcon />
            </Fab>
        </Main>
    )
}