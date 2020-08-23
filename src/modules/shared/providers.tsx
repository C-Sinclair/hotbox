import React, { FC } from 'react'
import { UploadContext } from '~/store/logic'

export const Providers: FC = ({ children }) => {

    return (
        <UploadContext.Provider value={{}}>
            {children}
        </UploadContext.Provider>
    )
}