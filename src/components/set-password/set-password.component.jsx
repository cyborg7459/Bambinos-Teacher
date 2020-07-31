import React from 'react';
import InputGroup from '../input/input.component';
import {PasswordButton, PasswordForm} from './set-password.styles';

class SetPasswordForm extends React.Component {

    validationError = (target, errorMessage) => {
        target.classList.add('error');
        target.nextElementSibling.innerHTML = `${errorMessage}`;
        this.disableBtn();
    }

    removeErrors = (target) => {
        target.classList.remove('error');
        target.nextElementSibling.innerHTML = "";
        this.enableBtn();
    }

    disableBtn = () => {
        let SubmitBtn = document.getElementById('password-set-btn');
        SubmitBtn.disabled = true;
        SubmitBtn.classList.add('disabled');
    }

    enableBtn = () => {
        let SubmitBtn = document.getElementById('password-set-btn');
        SubmitBtn.disabled = false;
        SubmitBtn.classList.remove('disabled');
    }

    passwordConfirmValidate = () => {
        let password = document.getElementById('password-inp');
        let confPassword = document.getElementById('conf-password-inp');
        let passValue = password.value;
        let confPassValue = confPassword.value;
        if(passValue.length>confPassValue.length)
            this.validationError(confPassword, "Too short");
        else if(passValue.length<confPassValue.length)
            this.validationError(confPassword, "Too long");
        else if(passValue !== confPassValue)
            this.validationError(confPassword, "Passwords do not match");
        else 
            this.removeErrors(confPassword);
    }

    render() {
        return (
            <div className="form-container">
                <h1>Set Password</h1>
                <PasswordForm>
                    <InputGroup
                        required
                        id='password-inp'
                        type = 'password'
                        placeholder= 'Create your password'
                        label= 'Password'
                    />
                    <InputGroup
                        required
                        id='conf-password-inp'
                        type = 'password'
                        placeholder= 'Re-enter your password'
                        label= 'Confirm Password'
                        handleChange = {this.passwordConfirmValidate}
                    />
                    <PasswordButton onClick={this.otpValidate} id="password-set-btn" className="btn btn-block btn-success">Set Password</PasswordButton>
                </PasswordForm>
            </div>
        )
    }
}

export default SetPasswordForm;