import React from 'react';
import InputGroup from '../input/input.component';
import {PasswordButton, PasswordForm} from './set-password.styles';

class SetPasswordForm extends React.Component {
    
    passwordConfirmValidate = () => {
        let password = document.getElementById('password-inp');
        let confPassword = document.getElementById('conf-password-inp');
        let passValue = password.value;
        let confPassValue = confPassword.value;
        let targetBtn = document.getElementById('password-set-btn');
        const validationError = this.props.validationError;
        const removeErrors = this.props.removeErrors;
        if(passValue.length>confPassValue.length)
        {
            validationError(confPassword, "Too short", targetBtn);
            return false;
        }
        else if(passValue.length<confPassValue.length)
        {
            validationError(confPassword, "Too long", targetBtn);
            return false;
        }
        else if(passValue !== confPassValue)
        {
            validationError(confPassword, "Passwords do not match", targetBtn);
            return false;
        }
        else 
        {
            removeErrors(confPassword, targetBtn);
            return true;
        }
    }

    setPassword = () => {
        if(this.passwordConfirmValidate())
            this.props.handleSubmit();
    }

    render() {
        return (
            <div className="form-container">
                <h1>Set Password</h1>
                <PasswordForm>
                <h4 className="text-center">{`Set password for ${this.props.email}`}</h4>
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
                    <PasswordButton onClick={this.setPassword} id="password-set-btn" className="btn btn-block btn-success">Set Password</PasswordButton>
                </PasswordForm>
            </div>
        )
    }
}

export default SetPasswordForm;