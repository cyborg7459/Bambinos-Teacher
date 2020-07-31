import styled from 'styled-components';
import {Button} from 'react-bootstrap';

export const Timer =  styled.p`
    font-size : 1.3rem;
    font-weight: 600;
    text-align: center;
`

export const OtpForm = styled.div`
    width: 90%;
    max-width: 450px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    padding: 40px 20px;
    margin-top: 20px;
`

export const OTPButton = styled(Button)`
    &.disabled {
        cursor: not-allowed;
    }
`
