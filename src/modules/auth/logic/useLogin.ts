import { useReducer } from "react"
import { Auth } from 'aws-amplify'
import { useNavigate } from '@reach/router'
import { Routes } from '@routes'

interface LoginState {
    username: string
    password: string
    loading: boolean
    error?: Error
}

type LoginActions =
    | { type: 'change', payload: { field: 'username' | 'password', value: string }}
    | { type: 'error', payload: Error }
    | { type: 'loading', payload: boolean }

const loginReducer = (state: LoginState, action: LoginActions) => {
    switch (action.type) {
        case 'change':
            return { ...state, [action.payload.field]: action.payload.value }
        case 'error':
            return { ...state, error: action.payload }
        case 'loading':
            return { ...state, loading: action.payload }
    }
}

const initialState: LoginState = {
    username: '',
    password: '',
    loading: false
}

export const useLogin = () => {
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(loginReducer, initialState)

    const { loading, error, username, password } = state

    const change = (field: 'username' | 'password') => (value: string) => 
        dispatch({ type: 'change', payload: { field, value }})

    const submit = async () => {
        try {
            dispatch({ type: 'loading', payload: true })
            const user = await Auth.signIn({ username, password })
            navigate(Routes.Store.path)
        } catch (error) {
            dispatch({ type: 'error', payload: error})
        }
        dispatch({ type: 'loading', payload: false })
    }

    return {
        loading,
        error,
        submit,
        change,
        fields: {
            username,
            password,
        }
    }
}