import { createContext, Dispatch, SetStateAction } from "react"

export interface UploadContextProps {
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
}

const initialValue = {
    show: false,
    setShow: () => {}
}

export const UploadContext = createContext<UploadContextProps>(initialValue)