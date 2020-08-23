import React from 'react'
import { RiUploadCloud2Line as UploadIcon } from 'react-icons/ri'
import { Main, HeadingText, Fab } from '../../shared/view'
import { useUploadDialog } from '../logic'

interface StoreProps {
    path: '/bunker'
}

export const Store = ({}: StoreProps) => {
    const { show: showUpload } = useUploadDialog()

    return (
        <Main>
            <HeadingText>Bunker</HeadingText>
            <Fab onClick={showUpload}>
                <UploadIcon />
            </Fab>
        </Main>
    )
}