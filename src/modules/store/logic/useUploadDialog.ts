import { useContext } from "react"
import { UploadContext, UploadContextProps } from '.'

export const useUploadDialog = () => {
    const {} = useContext<UploadContextProps>(UploadContext)

    const show = () => {}

    return show
}