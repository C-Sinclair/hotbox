import { useContext } from "react"
import { UploadContext, UploadContextProps } from '.'

export const useUploadDialog = () => {
    const { show, setShow } = useContext<UploadContextProps>(UploadContext)
 
    return {
        isShowing: show,
        show: () => setShow(true), 
        hide: () => setShow(false)
    }
}