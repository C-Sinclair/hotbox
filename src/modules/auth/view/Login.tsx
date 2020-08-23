import React, { ChangeEvent } from 'react'
import { Form } from './components'
import { useLogin } from '../logic'

interface LoginModalProps {
    path: '/login'
}

type LoginFields = 'username' | 'password'

export const Login = ({}: LoginModalProps) => {
    const { loading, submit, change, fields } = useLogin()

    const onChange = (key: LoginFields) => ({ target: { value }}: ChangeEvent<HTMLInputElement>) => 
        change(key)(value)

    const login = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await submit()
    }

    return (
        <Form role='modal' onSubmit={login}>
            <label htmlFor='username'>Username</label>
            <input id='username' value={fields.username} onChange={onChange('username')} />
            <label htmlFor='password'>Password</label>
            <input id='password' value={fields.password} type='password' onChange={onChange('password')} />
            <button type='submit'>Login Broooo....</button>
        </Form>
    )
}