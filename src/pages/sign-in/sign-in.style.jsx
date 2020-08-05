import styled from 'styled-components';
import {Form, Button} from 'react-bootstrap';

export const SignInFormContainer = styled(Form)`
    width: 90%;
    max-width: 450px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    padding: 40px 20px;
    margin-top: 20px;
    background-color: rgba(255,255,255,0.7);
`

export const SignInButton = styled(Button)`
    &.disabled {
        cursor: not-allowed;
    }
`