import React from 'react';
import InputGroup from '../input/input.component';
import {PasswordButton, PasswordForm} from './set-password.styles';
import axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {setCurrentUser} from '../../redux/user/user.actions';

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
        if(this.passwordConfirmValidate()) {
            this.props.loadingStart();
            const {setCurrentUser} = this.props;
        
            const passwordInp = document.getElementById('password-inp').value;
            let data = {
                email_id : this.props.email,
                password : passwordInp
            }
            console.log(data);
            let user = {
                email : this.props.email
            }
            
            let config = {
                method: 'post',
                url: 'https://teacher-signup.bambinos.in:8443/Teacher/teacherSignUp/savePassword',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
            };
            
            axios(config)
            .then(response => {
                if(response.data.status) {
                    this.props.loadingEnd();
                    setCurrentUser(user);
                    this.props.history.push('/onboard/personal');
                }
            })
            .catch(error => {
                this.props.loadingEnd()
                console.log(error);
            });
        } 
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

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default withRouter(connect(null, mapDispatchToProps)(SetPasswordForm));