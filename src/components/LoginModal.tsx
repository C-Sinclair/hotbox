import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import cognito from 'amazon-cognito-identity-js'
import env from '../.env'

interface LoginModalProps {}

interface LoginFields {
    username: string
    password: string
}

const poolData = {
    UserPoolId : env.AWS_POOL_ID, // your user pool id here
    ClientId : env.AWS_CLIENT_ID // your app client id here
};

export const LoginModal = ({}: LoginModalProps) => {
    const [fields, setFields] = useState<LoginFields>({ username: '', password: ''})

    const onChange = (key: keyof LoginFields) => ({ target: { value }}: ChangeEvent<HTMLInputElement>) => setFields({ ...fields, [key]: value })

    const getUser = () => {
        const userPool = new cognito.CognitoUserPool(poolData);
        const userData = {
            Username : fields.username,
            Pool : userPool
        };
        return new cognito.CognitoUser(userData);
    }

    const login = () => {
        const user = getUser()
        const authDetails = new cognito.AuthenticationDetails({
            Username : fields.username,
            Password : fields.password,
        });
        user.authenticateUser(authDetails, { onSuccess, onFailure })
    }

    const onSuccess = (args: any) => {
        console.log('onSuccess : ', args)
        
    }
    const onFailure = () => {}

    return (
        <form role='modal' onSubmit={login}>
            <label htmlFor='username'>Username</label>
            <input id='username' value={fields.username} onChange={onChange('username')} />
            <label htmlFor='password'>Password</label>
            <input id='password' value={fields.password} type='password' onChange={onChange('password')} />
            <button type='submit'>Login Broooo....</button>
        </form>
    )
}

// https://github.com/BigHeartConsulting/aws-cognito-login/blob/master/src/pages/LoginPage.js