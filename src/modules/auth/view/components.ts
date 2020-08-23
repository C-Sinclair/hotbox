import styled from 'styled-components'

export const Form = styled.form`
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