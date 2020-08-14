import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { CognitoUserPool, CognitoUser, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js'
import env from '../.env'
import { navigate } from '@reach/router'

const ACCESS_TOKEN = 'HB_X_ACCESS_TOKEN'

const Form = styled.form`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    label, input {
        margin-bottom: 20px;
    }
    input {
        padding: 5px;
    }
    button {
        padding: 10px;
    }
`

interface LoginModalProps {
    path: '/login'
}

interface LoginFields {
    username: string
    password: string
    resetCode?: string
}

interface LoginSuccessArgs {
    accessToken: string
}

const poolData = {
    UserPoolId : env.AWS_POOL_ID, // your user pool id here
    ClientId : env.AWS_CLIENT_ID // your app client id here
};

export const Login = ({}: LoginModalProps) => {
    const [resetting, setResetting] = useState(false)
    const [fields, setFields] = useState<LoginFields>({ username: '', password: ''})

    const onChange = (key: keyof LoginFields) => ({ target: { value }}: ChangeEvent<HTMLInputElement>) => setFields({ ...fields, [key]: value })

    const getUser = () => {
        const userPool = new CognitoUserPool(poolData);
        const userData = {
            Username : fields.username,
            Pool : userPool
        };
        return new CognitoUser(userData);
    }

    const login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const user = getUser()
        const authDetails = new AuthenticationDetails({
            Username : fields.username,
            Password : fields.password,
        });
        user.authenticateUser(authDetails, { onSuccess, onFailure })
    }

    const onSuccess = (session: CognitoUserSession) => {
        console.log('onSuccess : ', session)
        /** Another option would be to use `session.getAccessToken().getJwtToken()` */
        localStorage.setItem(ACCESS_TOKEN, session.getIdToken().getJwtToken())  
        navigate('/bunker')
    }
    const onFailure = (err: any) => {
        console.log('onFailure: ', err)
    }

    const onResetClick = () => {
        const user = getUser()
        if (!resetting) {
            setResetting(true)
            user.forgotPassword({ 
                onSuccess: () => console.log('Success reset'), 
                onFailure: (err: any) => console.log('Failed reset', err)
            })
        } else {
            user.confirmPassword(fields.resetCode, fields.password, {
                onSuccess: () => console.log('Successful reset'), 
                onFailure: (err: any) => console.log('Failed reset', err)
            })
        }
    }

    return (
        <Form role='modal' onSubmit={login}>
            <label htmlFor='username'>Username</label>
            <input id='username' value={fields.username} onChange={onChange('username')} />
            <label htmlFor='password'>Password</label>
            <input id='password' value={fields.password} type='password' onChange={onChange('password')} />
            <button type='submit'>Login Broooo....</button>
            { resetting && (
                <input value={fields.resetCode} onChange={onChange('resetCode')} />
            )}
            <button onClick={onResetClick}>{ resetting ? 'Confirm' : 'Reset'}</button>
        </Form>
    )
}