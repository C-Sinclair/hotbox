import React, { ChangeEvent } from 'react'
import { map, compose } from 'ramda'
import { useUploadDialog, putFile } from ".."
import { Dialog } from './components'

export const Upload = () => {
    const { isShowing } = useUploadDialog()

    const onInputChange = async ({ target: { files }}: ChangeEvent<HTMLInputElement>) => {
        try {
            await compose(
                Promise.all, 
                map(putFile)
            )(Array.from(files))
        } catch (err) {
            console.error(err)
        }
    }

    return isShowing ? (
        <Dialog>
            <h1>Upload a file bro</h1>
            <input type='file' onChange={onInputChange}/>
        </Dialog>
    ) : null
}