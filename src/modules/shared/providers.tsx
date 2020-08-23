import React, { FC, useState } from 'react'
import { UploadContext } from '../store/logic'

export const Providers: FC = ({ children }) => {
    const [showUpload, setShowUpload] = useState(false)

    return (
        <UploadContext.Provider value={{ show: showUpload, setShow: setShowUpload }}>
            {children}
        </UploadContext.Provider>
    )
}