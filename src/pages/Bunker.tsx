import React, { useEffect, useState } from 'react'
import { Main, HeadingText } from '~/components'
import { ACCESS_TOKEN } from '~/constants'
import { bytesToReadable } from '~/util'

interface BunkerProps {
    path: '/bunker'
}

interface File {
    type: 'file'
    size: string
}
interface Directory {
    type: 'dir'
}
interface FileTree {
    [name: string]: File | Directory
}
interface FileResponse {
    Key: string
    Size: number
}
interface DirResponse {
    Prefix: string
}
interface DataResponse {
    Contents: FileResponse[]
    CommonPrefixes: DirResponse[]
}

const moldData = ({ Contents, CommonPrefixes }: DataResponse): FileTree => {
    const files = Contents.reduce((acc, { Key, Size }) => ({ 
        ...acc, 
        [Key]: { 
            type: 'file',
            size: bytesToReadable(Size)
        }
    }), {})
    const dirs = CommonPrefixes.reduce((acc, { Prefix }) => ({ 
        ...acc, 
        [Prefix]: { 
            type: 'dir',
        }
    }), {})
    return { ...files, ...dirs }
}

export const Bunker = ({}: BunkerProps) => {

    const [tree, setTree] = useState<FileTree>({})

    useEffect(() => {
        // fetch tree of files
        const fetchFiles = async () => {
            try {
                const url = ''
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Authorization: localStorage.getItem(ACCESS_TOKEN)
                    }
                })
                const data = await response.json()
                console.log(data)
                setTree(moldData(data))
            } catch (err) {
                console.error(err)
            }
        }
        fetchFiles()
    }, [])

    return (
        <Main>
            <HeadingText>Bunker</HeadingText>
            { Object.entries(tree).map(([name, data]) => {
                return <div>{name} </div>
            })}
        </Main>
    )
}