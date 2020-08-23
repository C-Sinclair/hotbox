import { Storage } from 'aws-amplify'

export const putFile = (file: File) => Storage.put(file.name, file)