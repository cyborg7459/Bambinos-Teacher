import styled from 'styled-components';
import {Button} from 'react-bootstrap';

export const PasswordForm = styled.div`
    width: 90%;
    max-width: 450px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    padding: 40px 20px;
    margin-top: 20px;
`

export const PasswordButton = styled(Button)`
    &.disabled {
        cursor: not-allowed;
    }
`